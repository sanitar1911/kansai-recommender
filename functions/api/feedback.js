export async function onRequestPost(context) {
  try {
    const { request, env } = context;

    const contentType = request.headers.get("content-type") || "";
    let body = {};
    if (contentType.includes("application/json")) {
      body = await request.json();
    } else {
      return json({ error: "Unsupported content type" }, 415);
    }

    const {
      q1, q2, q3, q4, q5, q6,
      open1 = "", open2 = "", email = "",
      honeypot = "",
      context: submitContext = {}
    } = body || {};

    if (honeypot && String(honeypot).trim() !== "") {
      return json({ ok: true }, 200);
    }

    const required = [q1, q2, q3, q4, q5, q6];
    if (required.some(v => !["1","2","3","4","5",1,2,3,4,5].includes(v))) {
      return json({ error: "Missing or invalid required fields" }, 400);
    }

    if (!env.RESEND_API_KEY || !env.FEEDBACK_TO_EMAIL || !env.FEEDBACK_FROM_EMAIL) {
      return json({ error: "Server email configuration is incomplete" }, 500);
    }

    const safe = {
      q1: String(q1),
      q2: String(q2),
      q3: String(q3),
      q4: String(q4),
      q5: String(q5),
      q6: String(q6),
      open1: truncate(String(open1 || ""), 3000),
      open2: truncate(String(open2 || ""), 3000),
      email: truncate(String(email || ""), 320),
      language: truncate(String(submitContext.language || ""), 32),
      selected_seed_attractions_en: Array.isArray(submitContext.selected_items) ? submitContext.selected_items.slice(0, 30) : [],
      selected_item_ids: Array.isArray(submitContext.selected_item_ids) ? submitContext.selected_item_ids.slice(0, 30) : [],
      top_type_key: truncate(String(submitContext.top_type_key || ""), 64),
      top_type_label: truncate(String(submitContext.top_type_label || ""), 128),
      page_url: truncate(String(submitContext.page_url || ""), 500),
      submitted_at: truncate(String(submitContext.submitted_at || new Date().toISOString()), 100),
      user_agent: truncate(String(submitContext.user_agent || request.headers.get("user-agent") || ""), 1000),
      cf_connecting_ip: request.headers.get("CF-Connecting-IP") || "",
      cf_country: request.headers.get("CF-IPCountry") || "",
      referer: request.headers.get("referer") || ""
    };

    const subject = `[Kansai Recommender] New feedback (${safe.language || "unknown"})`;

    const text = [
      "Kansai Recommender - New Feedback",
      "",
      `submitted_at: ${safe.submitted_at}`,
      `language: ${safe.language}`,
      `top_type_key: ${safe.top_type_key}`,
      `top_type_label: ${safe.top_type_label}`,
      `email(optional): ${safe.email || "-"}`,
      `page_url: ${safe.page_url}`,
      `cf_country: ${safe.cf_country}`,
      `cf_connecting_ip: ${safe.cf_connecting_ip}`,
      "",
      "Likert responses",
      `Q1 usability: ${safe.q1}`,
      `Q2 recommendation_match: ${safe.q2}`,
      `Q3 category_helpfulness: ${safe.q3}`,
      `Q4 map_helpfulness: ${safe.q4}`,
      `Q5 reuse_intent: ${safe.q5}`,
      `Q6 actual_trip_intent: ${safe.q6}`,
      "",
      `selected_items: ${safe.selected_items.join(" | ") || "-"}`,
      `selected_item_ids: ${safe.selected_item_ids.join(", ") || "-"}`,
      "",
      "Open feedback 1",
      safe.open1 || "-",
      "",
      "Open feedback 2",
      safe.open2 || "-",
      "",
      "Meta",
      `referer: ${safe.referer}`,
      `user_agent: ${safe.user_agent}`
    ].join("\n");

    const html = `
      <div style="font-family:Arial,Helvetica,sans-serif;line-height:1.6;color:#111827">
        <h2>Kansai Recommender - New Feedback</h2>
        <p><strong>Submitted at:</strong> ${escapeHtml(safe.submitted_at)}<br>
        <strong>Language:</strong> ${escapeHtml(safe.language)}<br>
        <strong>Top type:</strong> ${escapeHtml(safe.top_type_label)} (${escapeHtml(safe.top_type_key)})<br>
        <strong>Email (optional):</strong> ${escapeHtml(safe.email || "-")}<br>
        <strong>Country:</strong> ${escapeHtml(safe.cf_country)}<br>
        <strong>IP:</strong> ${escapeHtml(safe.cf_connecting_ip)}</p>

        <h3>Likert responses</h3>
        <ul>
          <li>Q1 usability: ${escapeHtml(safe.q1)}</li>
          <li>Q2 recommendation_match: ${escapeHtml(safe.q2)}</li>
          <li>Q3 category_helpfulness: ${escapeHtml(safe.q3)}</li>
          <li>Q4 map_helpfulness: ${escapeHtml(safe.q4)}</li>
          <li>Q5 reuse_intent: ${escapeHtml(safe.q5)}</li>
          <li>Q6 actual_trip_intent: ${escapeHtml(safe.q6)}</li>
        </ul>

        <h3>Selected seed attractions (English)</h3>
        <p>${safe.selected_items.length ? safe.selected_items.map(escapeHtml).join(" | ") : "-"}</p>

        <h3>Open feedback 1</h3>
        <p>${escapeHtml(safe.open1 || "-").replace(/\n/g, "<br>")}</p>

        <h3>Open feedback 2</h3>
        <p>${escapeHtml(safe.open2 || "-").replace(/\n/g, "<br>")}</p>

        <h3>Meta</h3>
        <p><strong>Page URL:</strong> ${escapeHtml(safe.page_url)}<br>
        <strong>Referer:</strong> ${escapeHtml(safe.referer)}<br>
        <strong>User-Agent:</strong> ${escapeHtml(safe.user_agent)}</p>
      </div>
    `;

    const resendResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        from: env.FEEDBACK_FROM_EMAIL,
        to: [env.FEEDBACK_TO_EMAIL],
        subject,
        text,
        html,
        reply_to: safe.email || undefined
      })
    });

    const resendData = await resendResponse.json().catch(() => ({}));

    if (!resendResponse.ok) {
      return json({
        error: "Email delivery failed",
        provider: "resend",
        details: resendData
      }, 502);
    }

    return json({ ok: true, id: resendData.id || null }, 200);
  } catch (error) {
    return json({ error: error?.message || "Unexpected error" }, 500);
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: corsHeaders()
  });
}

function truncate(value, max) {
  return value.length > max ? value.slice(0, max) : value;
}

function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), {
    status,
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
      ...corsHeaders()
    }
  });
}

function corsHeaders() {
  return {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type"
  };
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
