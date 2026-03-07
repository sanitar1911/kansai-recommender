const EMBEDDED_DATASET = [{"ID": 1, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 2, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 3, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 5.0, "Kaiyukan": 4.0}, {"ID": 4, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 5, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 6, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 7, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 5.0}, {"ID": 8, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 5.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 2.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 9, "age": "31-40", "gender": "male", "nationality": "North America", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 10, "age": "above50", "gender": "male", "nationality": "North America", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 11, "age": "41-50", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 1.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 12, "age": "26-30", "gender": "female", "nationality": "North America", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 1.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 13, "age": "18-25", "gender": "male", "nationality": "North America", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 1.0, "usj": 4.0, "arashiyama": 1.0, "narapark": 1.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 1.0}, {"ID": 14, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 15, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 1.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 16, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 1.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 17, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 1.0, "kobeport": 2.0, "Kaiyukan": 5.0}, {"ID": 18, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 19, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 2.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 4.0}, {"ID": 20, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 21, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 22, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 23, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 24, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 25, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 5.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 26, "age": "31-40", "gender": "female", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 27, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 1.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 28, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 5.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 29, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 5.0}, {"ID": 30, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 31, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 1.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 2.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 32, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 33, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 5.0}, {"ID": 34, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 4.0}, {"ID": 35, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 36, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 5.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 1.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 37, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 1.0, "usj": 4.0, "arashiyama": 1.0, "narapark": 5.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 2.0, "Kaiyukan": 5.0}, {"ID": 38, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 39, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 5.0, "osakajo": 4.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 40, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 1.0, "osakajo": 1.0, "Kiyomizudera": 5.0, "Dotonbori": 2.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 41, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 42, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 43, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 1.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 5.0}, {"ID": 44, "age": "18-25", "gender": "male", "nationality": "North America", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 1.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 45, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 46, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 47, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "business", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 48, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 1.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 49, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 5.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 1.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 50, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 51, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 52, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 5.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 53, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 1.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 54, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 5.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 4.0}, {"ID": 55, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 56, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 1.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 57, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 5.0, "narapark": 5.0, "osakajo": 5.0, "Kiyomizudera": 1.0, "Dotonbori": 1.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 5.0}, {"ID": 58, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 59, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 60, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 1.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 61, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 5.0}, {"ID": 62, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 2.0, "narapark": 1.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 1.0}, {"ID": 63, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 1.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 64, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 65, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 2.0}, {"ID": 66, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 67, "age": "41-50", "gender": "male", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 68, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 1.0, "sanomiya": 4.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 69, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 1.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 70, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 1.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 71, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 1.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 72, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 73, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 5.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 74, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 75, "age": "31-40", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 76, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 2.0, "narapark": 1.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 2.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 77, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 78, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 1.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 79, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 80, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 81, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 2.0, "kobeport": 4.0, "Kaiyukan": 1.0}, {"ID": 82, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 1.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 83, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 1.0, "narapark": 5.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 84, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 5.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 5.0}, {"ID": 85, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 86, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 87, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 5.0, "arashiyama": 5.0, "narapark": 5.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 2.0, "sanomiya": 1.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 88, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 1.0, "osakajo": 5.0, "Kiyomizudera": 5.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 89, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 5.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 5.0}, {"ID": 90, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 1.0, "narapark": 1.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 91, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 5.0, "sanomiya": 2.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 92, "age": "31-40", "gender": "female", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 1.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 1.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 93, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 1.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 94, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 95, "age": "26-30", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 1.0, "osakajo": 5.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 96, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 2.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 97, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 1.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 98, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 99, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 4.0, "Kaiyukan": 1.0}, {"ID": 100, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 5.0}, {"ID": 101, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 102, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 2.0}, {"ID": 103, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 104, "age": "above50", "gender": "female", "nationality": "North America", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 1.0, "Kaiyukan": 4.0}, {"ID": 105, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 1.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 106, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 5.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 1.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 107, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 5.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 108, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 109, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 110, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 2.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 111, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 112, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 113, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 114, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 4.0}, {"ID": 115, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 1.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 1.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 116, "age": "18-25", "gender": "male", "nationality": "Oceania", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 117, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 118, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 2.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 1.0, "Kaiyukan": 4.0}, {"ID": 119, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 120, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 5.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 121, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 122, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 123, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 5.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 124, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 2.0, "sanomiya": 1.0, "kobeport": 5.0, "Kaiyukan": 2.0}, {"ID": 125, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 126, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 127, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 1.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 128, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 129, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 130, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 1.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 131, "age": "41-50", "gender": "male", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 132, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 133, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 134, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 135, "age": "31-40", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 136, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 5.0}, {"ID": 137, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 1.0, "narapark": 2.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 138, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 139, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 140, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 141, "age": "41-50", "gender": "female", "nationality": "North America", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 142, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 1.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 143, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 144, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 1.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 145, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 146, "age": "31-40", "gender": "male", "nationality": "North America", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 147, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 1.0, "usj": 4.0, "arashiyama": 1.0, "narapark": 1.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 148, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 2.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 149, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 2.0, "usj": 2.0, "arashiyama": 1.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 150, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 151, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 152, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 153, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 1.0}, {"ID": 154, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 155, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 156, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 157, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 5.0, "Kiyomizudera": 5.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 158, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 5.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 159, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 160, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 1.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 161, "age": "26-30", "gender": "male", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 162, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 163, "age": "26-30", "gender": "male", "nationality": "North America", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 1.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 164, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 5.0, "Kiyomizudera": 5.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 165, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 2.0}, {"ID": 166, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 2.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 167, "age": "above50", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 1.0, "narapark": 1.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 168, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 1.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 169, "age": "18-25", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 5.0, "Kaiyukan": 2.0}, {"ID": 170, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 2.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 171, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 172, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 173, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 174, "age": "41-50", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 1.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 175, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 176, "age": "26-30", "gender": "female", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 1.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 177, "age": "26-30", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 178, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 1.0, "kuromonmarket": 5.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 179, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 180, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 1.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 181, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 182, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 183, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 184, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 5.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 185, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 186, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 5.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 187, "age": "31-40", "gender": "female", "nationality": "North America", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 1.0, "osakajo": 5.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 1.0}, {"ID": 188, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 189, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 190, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 1.0, "usj": 2.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 4.0, "Kaiyukan": 1.0}, {"ID": 191, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 1.0, "kuromonmarket": 4.0, "shinsaibashi": 1.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 192, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 1.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 1.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 193, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 194, "age": "18-25", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 4.0}, {"ID": 195, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 196, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 5.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 197, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 1.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 198, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 199, "age": "41-50", "gender": "male", "nationality": "North America", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 1.0, "narapark": 2.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 200, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 201, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 202, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 1.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 203, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 5.0}, {"ID": 204, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 205, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 1.0, "Kaiyukan": 4.0}, {"ID": 206, "age": "26-30", "gender": "female", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 2.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 207, "age": "26-30", "gender": "male", "nationality": "North America", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "business", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 4.0, "narapark": 1.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 208, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 1.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 1.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 5.0, "Kaiyukan": 1.0}, {"ID": 209, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 210, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 1.0, "Kaiyukan": 4.0}, {"ID": 211, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 1.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 2.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 212, "age": "31-40", "gender": "female", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 213, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 1.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 214, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 215, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 2.0, "narapark": 1.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 216, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 217, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 218, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 219, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 220, "age": "above50", "gender": "male", "nationality": "North America", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 221, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 222, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 5.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 223, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 224, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 1.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 2.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 225, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 226, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 227, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 5.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 228, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 229, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 230, "age": "31-40", "gender": "female", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 1.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 1.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 231, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 232, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 233, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 1.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 234, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 235, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 236, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 237, "age": "26-30", "gender": "female", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 5.0, "sanomiya": 1.0, "kobeport": 1.0, "Kaiyukan": 4.0}, {"ID": 238, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 1.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 239, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 1.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 240, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 241, "age": "41-50", "gender": "female", "nationality": "Oceania", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 242, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 1.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 243, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 2.0, "narapark": 5.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 244, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 5.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 245, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 246, "age": "31-40", "gender": "male", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 2.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 247, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 248, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 5.0, "sanomiya": 1.0, "kobeport": 4.0, "Kaiyukan": 1.0}, {"ID": 249, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 2.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 250, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 1.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 251, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 1.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 252, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 253, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 5.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 254, "age": "41-50", "gender": "female", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 1.0, "Kaiyukan": 4.0}, {"ID": 255, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 256, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 1.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 257, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 5.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 258, "age": "26-30", "gender": "female", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 259, "age": "26-30", "gender": "male", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 1.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 260, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 1.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 261, "age": "26-30", "gender": "female", "nationality": "North America", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 1.0, "Kaiyukan": 4.0}, {"ID": 262, "age": "26-30", "gender": "male", "nationality": "Oceania", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 263, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 5.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 1.0, "Kaiyukan": 5.0}, {"ID": 264, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 265, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 266, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 5.0, "sanomiya": 2.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 267, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 1.0, "kobeport": 2.0, "Kaiyukan": 5.0}, {"ID": 268, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 5.0, "osakajo": 5.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 269, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 1.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 270, "age": "31-40", "gender": "female", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 271, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 272, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 273, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 2.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 1.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 274, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 1.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 275, "age": "26-30", "gender": "female", "nationality": "North America", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 276, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 277, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 278, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 5.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 279, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 280, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 1.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 1.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 281, "age": "26-30", "gender": "male", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 1.0}, {"ID": 282, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 5.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 283, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 1.0, "Kaiyukan": 2.0}, {"ID": 284, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 1.0, "osakajo": 5.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 1.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 285, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 286, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 287, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 288, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 289, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 290, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 5.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 5.0, "Kaiyukan": 5.0}, {"ID": 291, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "solo", "travelFrequency": "6+", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 1.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 5.0, "Kiyomizudera": 3.0, "Dotonbori": 2.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 292, "age": "41-50", "gender": "female", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 5.0, "osakajo": 5.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 293, "age": "above50", "gender": "female", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 1.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 294, "age": "18-25", "gender": "male", "nationality": "North America", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 295, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 4.0}, {"ID": 296, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 2.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 297, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 4.0, "narapark": 1.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 298, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 299, "age": "above50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 5.0, "osakajo": 1.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 300, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 301, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 1.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 302, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 303, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 1.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 304, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 1.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 305, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 5.0, "Kaiyukan": 1.0}, {"ID": 306, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 5.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 1.0, "Kaiyukan": 3.0}, {"ID": 307, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 4.0}, {"ID": 308, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 5.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 309, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 3.0}, {"ID": 310, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 5.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 5.0, "Kaiyukan": 4.0}, {"ID": 311, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 5.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 312, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 313, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 314, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "business", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 1.0, "arashiyama": 2.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 315, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 1.0, "usj": 5.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 316, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 2.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 317, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 2.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 1.0}, {"ID": 318, "age": "above50", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "entertainment", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 5.0, "kobeport": 5.0, "Kaiyukan": 5.0}, {"ID": 319, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "0", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 320, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 1.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 321, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 3.0, "Kiyomizudera": 5.0, "Dotonbori": 4.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 2.0}, {"ID": 322, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "food", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 1.0, "narapark": 1.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 323, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "familyfriend", "fushimiInari": 1.0, "usj": 3.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 324, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 3.0, "sanomiya": 1.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 325, "age": "26-30", "gender": "female", "nationality": "North America", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 4.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 326, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 327, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 2.0, "arashiyama": 1.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 5.0, "Kaiyukan": 4.0}, {"ID": 328, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 3.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 4.0}, {"ID": 329, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 4.0, "arashiyama": 4.0, "narapark": 5.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 330, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "coupletrip", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 5.0, "shinsaibashi": 5.0, "sanomiya": 2.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 331, "age": "31-40", "gender": "male", "nationality": "North America", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 1.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 1.0}, {"ID": 332, "age": "41-50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 5.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 333, "age": "26-30", "gender": "male", "nationality": "Europe", "visitedKansai": "Yes", "travelStyle": "food", "travelPurpose": "familytrip", "travelFrequency": "6+", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 3.0, "osakajo": 3.0, "Kiyomizudera": 3.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 1.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 334, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 1.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 335, "age": "26-30", "gender": "male", "nationality": "North America", "visitedKansai": "No", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 4.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 1.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 336, "age": "31-40", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "friendtrip", "travelFrequency": "1-2", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 5.0}, {"ID": 337, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 4.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 5.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 2.0}, {"ID": 338, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "familytrip", "travelFrequency": "0", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 4.0, "arashiyama": 3.0, "narapark": 2.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 2.0, "sanomiya": 4.0, "kobeport": 1.0, "Kaiyukan": 1.0}, {"ID": 339, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 5.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 3.0, "sanomiya": 4.0, "kobeport": 5.0, "Kaiyukan": 4.0}, {"ID": 340, "age": "above50", "gender": "male", "nationality": "Asia", "visitedKansai": "No", "travelStyle": "entertainment", "travelPurpose": "business", "travelFrequency": "3-5", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 5.0, "usj": 5.0, "arashiyama": 3.0, "narapark": 4.0, "osakajo": 1.0, "Kiyomizudera": 2.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 1.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 4.0}, {"ID": 341, "age": "26-30", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "familytrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 5.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 4.0, "Kiyomizudera": 1.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 1.0, "sanomiya": 3.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 342, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "business", "travelFrequency": "6+", "exploreHidden": "no", "travelInfo": "familyfriend", "fushimiInari": 1.0, "usj": 4.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 2.0, "Kiyomizudera": 5.0, "Dotonbori": 5.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 4.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 343, "age": "26-30", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "coupletrip", "travelFrequency": "1-2", "exploreHidden": "no", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 3.0, "arashiyama": 4.0, "narapark": 4.0, "osakajo": 4.0, "Kiyomizudera": 5.0, "Dotonbori": 3.0, "kuromonmarket": 2.0, "shinsaibashi": 3.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 344, "age": "31-40", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 2.0, "narapark": 4.0, "osakajo": 3.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 5.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 345, "age": "18-25", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "familytrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 5.0, "usj": 2.0, "arashiyama": 4.0, "narapark": 2.0, "osakajo": 5.0, "Kiyomizudera": 1.0, "Dotonbori": 2.0, "kuromonmarket": 3.0, "shinsaibashi": 4.0, "sanomiya": 2.0, "kobeport": 3.0, "Kaiyukan": 3.0}, {"ID": 346, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "friendtrip", "travelFrequency": "0", "exploreHidden": "dependson", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 1.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 1.0, "Kiyomizudera": 4.0, "Dotonbori": 4.0, "kuromonmarket": 2.0, "shinsaibashi": 4.0, "sanomiya": 1.0, "kobeport": 2.0, "Kaiyukan": 3.0}, {"ID": 347, "age": "18-25", "gender": "female", "nationality": "Europe", "visitedKansai": "No", "travelStyle": "shopping", "travelPurpose": "solo", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "sns", "fushimiInari": 2.0, "usj": 5.0, "arashiyama": 2.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 2.0, "Dotonbori": 3.0, "kuromonmarket": 4.0, "shinsaibashi": 4.0, "sanomiya": 3.0, "kobeport": 4.0, "Kaiyukan": 3.0}, {"ID": 348, "age": "41-50", "gender": "female", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "culture", "travelPurpose": "coupletrip", "travelFrequency": "3-5", "exploreHidden": "yes", "travelInfo": "familyfriend", "fushimiInari": 4.0, "usj": 3.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 5.0, "Kiyomizudera": 5.0, "Dotonbori": 4.0, "kuromonmarket": 3.0, "shinsaibashi": 5.0, "sanomiya": 4.0, "kobeport": 2.0, "Kaiyukan": 2.0}, {"ID": 349, "age": "18-25", "gender": "male", "nationality": "Asia", "visitedKansai": "Yes", "travelStyle": "nature", "travelPurpose": "solo", "travelFrequency": "1-2", "exploreHidden": "dependson", "travelInfo": "guide", "fushimiInari": 3.0, "usj": 2.0, "arashiyama": 5.0, "narapark": 3.0, "osakajo": 2.0, "Kiyomizudera": 4.0, "Dotonbori": 2.0, "kuromonmarket": 2.0, "shinsaibashi": 2.0, "sanomiya": 3.0, "kobeport": 3.0, "Kaiyukan": 3.0}];
const ATTRACTION_CONFIG = [
 {id:'fushimiinari', dataKeyCandidates:['fushimiInari','fushimiinari'], names:{zh:'伏见稻荷大社', en:'Fushimi Inari Taisha', ja:'伏見稲荷大社'}, img:'⛩️', types:{culture:1.0}},
 {id:'usj', dataKeyCandidates:['usj'], names:{zh:'日本环球影城（USJ）', en:'Universal Studios Japan (USJ)', ja:'ユニバーサル・スタジオ・ジャパン（USJ）'}, img:'🎢', types:{entertainment:1.0}},
 {id:'arashiyama', dataKeyCandidates:['arashiyama'], names:{zh:'岚山', en:'Arashiyama', ja:'嵐山'}, img:'🎋', types:{nature:0.7, culture:0.3}},
 {id:'narapark', dataKeyCandidates:['narapark'], names:{zh:'奈良公园', en:'Nara Park', ja:'奈良公園'}, img:'🦌', types:{nature:1.0}},
 {id:'osakajo', dataKeyCandidates:['osakajo'], names:{zh:'大阪城', en:'Osaka Castle', ja:'大阪城'}, img:'🏯', types:{culture:1.0}},
 {id:'kiyomizudera', dataKeyCandidates:['Kiyomizudera','kiyomizudera'], names:{zh:'清水寺', en:'Kiyomizu-dera Temple', ja:'清水寺'}, img:'🍂', types:{culture:1.0}},
 {id:'dotonbori', dataKeyCandidates:['Dotonbori','dotonbori'], names:{zh:'道顿堀', en:'Dotonbori', ja:'道頓堀'}, img:'🦀', types:{food:0.6, entertainment:0.2, shopping:0.2}},
 {id:'kuromonmarket', dataKeyCandidates:['kuromonmarket'], names:{zh:'黑门市场', en:'Kuromon Market', ja:'黒門市場'}, img:'🐟', types:{food:0.7, shopping:0.3}},
 {id:'shinsaibashi', dataKeyCandidates:['shinsaibashi'], names:{zh:'心斋桥', en:'Shinsaibashi', ja:'心斎橋'}, img:'🛍️', types:{shopping:1.0}},
 {id:'sanomiya', dataKeyCandidates:['sanomiya'], names:{zh:'三宫', en:'Sannomiya', ja:'三宮'}, img:'🚋', types:{shopping:0.6, food:0.4}},
 {id:'kobeport', dataKeyCandidates:['kobeport'], names:{zh:'神户港', en:'Kobe Port', ja:'神戸港'}, img:'⚓', types:{nature:0.4, entertainment:0.6}},
 {id:'kaiyukan', dataKeyCandidates:['Kaiyukan','kaiyukan'], names:{zh:'海游馆', en:'Osaka Aquarium Kaiyukan', ja:'海遊館'}, img:'🐬', types:{entertainment:1.0}}
];
const SEED_PHOTOS = {
  "fushimiinari": "./assets/seed_photos/fushimiinari.jpg",
  "kaiyukan": "./assets/seed_photos/kaiyukan.jpg",
  "kobeport": "./assets/seed_photos/kobeport.jpg",
  "kuromonmarket": "./assets/seed_photos/kuromonmarket.jpg",
  "kiyomizudera": "./assets/seed_photos/kiyomizudera.jpg",
  "shinsaibashi": "./assets/seed_photos/shinsaibashi.jpg",
  "usj": "./assets/seed_photos/usj.jpg",
  "arashiyama": "./assets/seed_photos/arashiyama.jpg",
  "dotonbori": "./assets/seed_photos/dotonbori.jpg",
  "narapark": "./assets/seed_photos/narapark.jpg",
  "osakajo": "./assets/seed_photos/osakajo.jpg",
  "sanomiya": "./assets/seed_photos/sanomiya.jpg"
};

function getSeedPhotoById(id) {
  return SEED_PHOTOS[id] || '';
}

function getSeedEnglishNameById(id) {
  const item = ATTRACTION_CONFIG.find(x => x.id === id);
  return item?.names?.en || id;
}


const EXPANDED_CATALOG = [{"place_id": "kansai_0001", "prefecture_ja": "三重県", "name_ja": "伊勢神宮外宮（豊受大神宮）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 22053, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ75HcSIRaBGARx9ty9HE9rqQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 19.98}, {"place_id": "kansai_0002", "prefecture_ja": "三重県", "name_ja": "猿田彦神社", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 8956, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJvWdwlZFQBGARaXm_NfTCDAQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.3895}, {"place_id": "kansai_0003", "prefecture_ja": "三重県", "name_ja": "神宮徴古館・農業館・美術館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 371, "google_primary_type": "museum", "google_place_id": "ChIJHRXcCnRaBGAR-UWX5b9FsOA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.0533}, {"place_id": "kansai_0004", "prefecture_ja": "三重県", "name_ja": "伊勢神宮・別宮 倭姫宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 1130, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ_f1GRHFaBGARBqyALe8UGk8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.7406}, {"place_id": "kansai_0005", "prefecture_ja": "三重県", "name_ja": "伊勢神宮・別宮 月読宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 2481, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJa4TUW71QBGAR6pxKjKt-Jqw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.6161}, {"place_id": "kansai_0006", "prefecture_ja": "三重県", "name_ja": "古市・麻吉旅館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 188, "google_primary_type": "japanese_inn", "google_place_id": "ChIJ3SosUJxQBGAR60PqUZWx9yk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.2441}, {"place_id": "kansai_0007", "prefecture_ja": "三重県", "name_ja": "夢古道おわせ 夢古道の湯", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.9, "google_user_ratings_total": 575, "google_primary_type": "public_bath", "google_place_id": "ChIJ6aNvU4zVBWARlXi6V_k1quU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.7656}, {"place_id": "kansai_0008", "prefecture_ja": "三重県", "name_ja": "夢古道おわせ 海鮮レストラン イサバヤ", "main_type": "food", "sub_types_json": "[\"food\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 179, "google_primary_type": "restaurant", "google_place_id": "ChIJJUTcHIzVBWARaAdtU3ROECw", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 8.7956}, {"place_id": "kansai_0012", "prefecture_ja": "三重県", "name_ja": "アスピア玉城", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 483, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJbS3y-cNHBGARIHQj_ZEwhxw", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 10.4709}, {"place_id": "kansai_0014", "prefecture_ja": "三重県", "name_ja": "田丸城跡", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 83, "google_primary_type": "castle", "google_place_id": "ChIJRWBIxU9FBGARAM9pQM6XiFQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.2744}, {"place_id": "kansai_0016", "prefecture_ja": "三重県", "name_ja": "朝日町博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 74, "google_primary_type": "museum", "google_place_id": "ChIJPfLfjRqQA2ARnXhHExWhJU4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 6.7502}, {"place_id": "kansai_0019", "prefecture_ja": "三重県", "name_ja": "いなべ阿下喜ベース", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"food\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 214, "google_primary_type": "public_bath", "google_place_id": "ChIJAVF6awC_A2ARMZ7PAtdcoGY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8633}, {"place_id": "kansai_0020", "prefecture_ja": "三重県", "name_ja": "にぎわいの森", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"food\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 975, "google_primary_type": "shopping_mall", "google_place_id": "ChIJe2i5t-i_A2ARtrjKEw5vjHE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.061}, {"place_id": "kansai_0021", "prefecture_ja": "三重県", "name_ja": "やまてらす-FUJIWARA OUTDOOR LIVING-", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.4, "google_user_ratings_total": 97, "google_primary_type": "campground", "google_place_id": "ChIJX700fWrHA2ARCAzC3pn9BRQ", "decision": "MANUAL_REVIEW", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.7614}, {"place_id": "kansai_0023", "prefecture_ja": "三重県", "name_ja": "青川峡キャンピングパーク", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 548, "google_primary_type": "campground", "google_place_id": "ChIJg2bkVv_AA2AR5N5Yq888Usg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.7802}, {"place_id": "kansai_0024", "prefecture_ja": "三重県", "name_ja": "いなべ市農業公園 梅林公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 2381, "google_primary_type": "park", "google_place_id": "ChIJmWaMG7_HA2ARudH39aL-w3I", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.8447}, {"place_id": "kansai_0026", "prefecture_ja": "三重県", "name_ja": "関宿", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 1350, "google_primary_type": "historical_landmark", "google_place_id": "ChIJP3K1ctjwA2ARnry0nPBxCag", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.5226}, {"place_id": "kansai_0028", "prefecture_ja": "三重県", "name_ja": "忍者修行体験 忍者の森", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 193, "google_primary_type": "amusement_center", "google_place_id": "ChIJ4WSyRMWtBmAR-Y3NzDwIvWk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.8375}, {"place_id": "kansai_0029", "prefecture_ja": "三重県", "name_ja": "伊勢山上（飯福田寺）", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 52, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJlZgujnARBGAR7uBNsJoQ1-Q", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.5868}, {"place_id": "kansai_0030", "prefecture_ja": "三重県", "name_ja": "本居宣長記念館・鈴屋", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 58, "google_primary_type": "historical_landmark", "google_place_id": "ChIJAQB0dShrBGAR2oHI2x3rxa0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.2605}, {"place_id": "kansai_0032", "prefecture_ja": "三重県", "name_ja": "松坂城跡（松阪公園）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 1717, "google_primary_type": "castle", "google_place_id": "ChIJ6ZBj9SdrBGARHT6zIDBuooQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.9401}, {"place_id": "kansai_0034", "prefecture_ja": "三重県", "name_ja": "紀宝町飛雪の滝キャンプ場", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 251, "google_primary_type": "campground", "google_place_id": "ChIJiS0SSiNqBmAR5bBwZcAGeaI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.8063}, {"place_id": "kansai_0035", "prefecture_ja": "三重県", "name_ja": "紀宝町ウミガメ公園", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.9, "google_user_ratings_total": 2196, "google_primary_type": "rest_stop", "google_place_id": "ChIJJ0izcQ9tBmARwwio3mrNfJs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.0331}, {"place_id": "kansai_0036", "prefecture_ja": "三重県", "name_ja": "道の駅海山", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.4, "google_user_ratings_total": 882, "google_primary_type": "rest_stop", "google_place_id": "ChIJH_CKqlDVBWARtR4O_YKCP-Q", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.0163}, {"place_id": "kansai_0037", "prefecture_ja": "三重県", "name_ja": "道の駅紀伊長島マンボウ", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 2511, "google_primary_type": "rest_stop", "google_place_id": "ChIJI1wFF5ctBGARShYfQeWoxJs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.9201}, {"place_id": "kansai_0038", "prefecture_ja": "三重県", "name_ja": "銚子川", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 92, "google_primary_type": "river", "google_place_id": "ChIJcf3GzVCABmARP_kkWpt67yM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.055}, {"place_id": "kansai_0039", "prefecture_ja": "三重県", "name_ja": "キャンプinn海山", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 369, "google_primary_type": "campground", "google_place_id": "ChIJyS7A_v1_BmARi0BsWRONsOw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.5569}, {"place_id": "kansai_0040", "prefecture_ja": "三重県", "name_ja": "きいながしま古里温泉", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.0, "google_user_ratings_total": 479, "google_primary_type": "public_bath", "google_place_id": "ChIJvf_xvfMsBGARkAPVL6ncppc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.725}, {"place_id": "kansai_0041", "prefecture_ja": "三重県", "name_ja": "紀伊の松島", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 121, "google_primary_type": "hotel", "google_place_id": "ChIJo_TnafMsBGAR5IXwS-56NMM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.18}, {"place_id": "kansai_0042", "prefecture_ja": "三重県", "name_ja": "高塚山展望台", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 65, "google_primary_type": "observation_deck", "google_place_id": "ChIJq3nmN2ctBGARPe0kP8kNAiw", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 7.0962}, {"place_id": "kansai_0045", "prefecture_ja": "三重県", "name_ja": "象の背", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.7, "google_user_ratings_total": 174, "google_primary_type": "hiking_area", "google_place_id": "ChIJu1UmPNl_BmARMkeLhUv3KHc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.5423}, {"place_id": "kansai_0051", "prefecture_ja": "三重県", "name_ja": "愛洲の館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 63, "google_primary_type": "museum", "google_place_id": "ChIJo3zzHvtSBGAR1giCjTfzxZI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.0441}, {"place_id": "kansai_0052", "prefecture_ja": "三重県", "name_ja": "浮島パークなんとう", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.4, "google_user_ratings_total": 85, "google_primary_type": "campground", "google_place_id": "ChIJk8EwAGZLBGARUup3HJRz7cA", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 8.5118}, {"place_id": "kansai_0055", "prefecture_ja": "三重県", "name_ja": "南海展望台", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 148, "google_primary_type": "park", "google_place_id": "ChIJJRxGr6uyBWARvTRiOrS1XyE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.9101}, {"place_id": "kansai_0056", "prefecture_ja": "三重県", "name_ja": "中ノ磯展望台", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 74, "google_primary_type": "observation_deck", "google_place_id": "ChIJTVQVqEBLBGAReWS-NrRf0DA", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 7.6878}, {"place_id": "kansai_0057", "prefecture_ja": "三重県", "name_ja": "見江島展望台（ハートの入り江）", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 127, "google_primary_type": "observation_deck", "google_place_id": "ChIJg_8ye9pKBGARN-YIlBaMyKc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8503}, {"place_id": "kansai_0058", "prefecture_ja": "三重県", "name_ja": "道の駅奥伊勢おおだい", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 1360, "google_primary_type": "rest_stop", "google_place_id": "ChIJtQQI46I7BGARlcs5sKndMdw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.5953}, {"place_id": "kansai_0059", "prefecture_ja": "三重県", "name_ja": "大杉谷登山道 （大杉谷登山センター）", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 75, "google_primary_type": "tourist_information_center", "google_place_id": "ChIJDadKNXGdBmARlzTyrG_Frxk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.7113}, {"place_id": "kansai_0061", "prefecture_ja": "三重県", "name_ja": "御在所ロープウエイ", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 1741, "google_primary_type": null, "google_place_id": "ChIJvVJoJWzpA2AR9VkYRWgXvyE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.9365}, {"place_id": "kansai_0063", "prefecture_ja": "三重県", "name_ja": "伊賀上野城", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 3579, "google_primary_type": "castle", "google_place_id": "ChIJiyAGcclQAWARwzdxBxr_sSk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.5709}, {"place_id": "kansai_0064", "prefecture_ja": "三重県", "name_ja": "伊賀流忍者博物館", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 3119, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJS_8NSspQAWAR3iMt6Fo5B6w", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.3255}, {"place_id": "kansai_0065", "prefecture_ja": "三重県", "name_ja": "鳥羽展望台", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 5252, "google_primary_type": "cafe", "google_place_id": "ChIJywxts_H9BGARYARVqi7GcwU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.8813}, {"place_id": "kansai_0066", "prefecture_ja": "三重県", "name_ja": "鳥羽市立海の博物館", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 748, "google_primary_type": "museum", "google_place_id": "ChIJPZviM37-BGARAlD0MCdxnTs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.4979}, {"place_id": "kansai_0067", "prefecture_ja": "三重県", "name_ja": "鳥羽水族館", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.4, "google_user_ratings_total": 15873, "google_primary_type": "aquarium", "google_place_id": "ChIJVVVANuv1A2ARyCiTNeo9qAs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.483}, {"place_id": "kansai_0068", "prefecture_ja": "三重県", "name_ja": "オハイ", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 93, "google_primary_type": "scenic_spot", "google_place_id": "ChIJjSpI61LXBWARjz6njpXCFqg", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 9.0764}, {"place_id": "kansai_0069", "prefecture_ja": "三重県", "name_ja": "三木里ビーチ", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 143, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ813agZ3XBWARKy7Ao_QnJB8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.281}, {"place_id": "kansai_0074", "prefecture_ja": "三重県", "name_ja": "尾鷲イタダキ市", "main_type": "food", "sub_types_json": "[\"food\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 75, "google_primary_type": "market", "google_place_id": "ChIJH9XWiYR_BmAR1TsfRs-kZeQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.3352}, {"place_id": "kansai_0075", "prefecture_ja": "三重県", "name_ja": "土井竹林", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.4, "google_user_ratings_total": 50, "google_primary_type": "scenic_spot", "google_place_id": "ChIJb1pLx7x_BmAR8OvSkCBHokc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 5.8057}, {"place_id": "kansai_0076", "prefecture_ja": "三重県", "name_ja": "尾鷲神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 345, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJtaWewJB_BmARCldw5U7c5KI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.4102}, {"place_id": "kansai_0081", "prefecture_ja": "三重県", "name_ja": "香落渓", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 190, "google_primary_type": "scenic_spot", "google_place_id": "ChIJn0-PAKGuBmARAx4uRkwIbRs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.5803}, {"place_id": "kansai_0083", "prefecture_ja": "三重県", "name_ja": "赤目四十八滝", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 3149, "google_primary_type": "scenic_spot", "google_place_id": "ChIJ57-XctCtBmARdPODK8v8VSw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.0427}, {"place_id": "kansai_0084", "prefecture_ja": "三重県", "name_ja": "道の駅「飯高駅」", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 2252, "google_primary_type": "rest_stop", "google_place_id": "ChIJ6dWksfEiBGARIOvqKzuCfe8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.0758}, {"place_id": "kansai_0085", "prefecture_ja": "三重県", "name_ja": "深野だんだん田", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 92, "google_primary_type": "scenic_spot", "google_place_id": "ChIJv3n_mSwWBGARpzUY62a4l3A", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.0708}, {"place_id": "kansai_0086", "prefecture_ja": "三重県", "name_ja": "松阪農業公園ベルファーム", "main_type": "food", "sub_types_json": "[\"food\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 1679, "google_primary_type": "park", "google_place_id": "ChIJFfdMnIgUBGAR5fvg9fA8ZQs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.5787}, {"place_id": "kansai_0087", "prefecture_ja": "三重県", "name_ja": "文化財センター「はにわ館」", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 146, "google_primary_type": "museum", "google_place_id": "ChIJqdycLyxrBGARpdxg-gZ-b0s", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.6693}, {"place_id": "kansai_0088", "prefecture_ja": "三重県", "name_ja": "原田二郎旧宅", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 88, "google_primary_type": null, "google_place_id": "ChIJAQAM89hqBGARfgcTlWMK7aU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.7976}, {"place_id": "kansai_0089", "prefecture_ja": "三重県", "name_ja": "旧小津清左衛門家", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 191, "google_primary_type": null, "google_place_id": "ChIJgyAlnyZrBGAR9x89nkYHAN0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.5899}, {"place_id": "kansai_0090", "prefecture_ja": "三重県", "name_ja": "旧長谷川治郎兵衛家", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 172, "google_primary_type": null, "google_place_id": "ChIJ25417iZrBGARqmAgHdw7rcw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.6236}, {"place_id": "kansai_0091", "prefecture_ja": "三重県", "name_ja": "松阪もめん手織りセンター", "main_type": "culture", "sub_types_json": "[\"culture\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 107, "google_primary_type": "manufacturer", "google_place_id": "ChIJKTNu3SZrBGARqqbdUGzD-XQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.1337}, {"place_id": "kansai_0092", "prefecture_ja": "三重県", "name_ja": "豪商のまち松阪観光交流センター", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 139, "google_primary_type": "tourist_information_center", "google_place_id": "ChIJA42n7A5rBGARvh348Q9j3zU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.3699}, {"place_id": "kansai_0093", "prefecture_ja": "三重県", "name_ja": "御城番屋敷", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 156, "google_primary_type": null, "google_place_id": "ChIJ7_Emu51rBGARUCWJZrQV-Vc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.0032}, {"place_id": "kansai_0094", "prefecture_ja": "三重県", "name_ja": "おはらい町", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"food\", \"culture\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 747, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJr-rzUwBRBGAROiR9P_TAUqE", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 12.6426}, {"place_id": "kansai_0096", "prefecture_ja": "三重県", "name_ja": "夫婦岩", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 1617, "google_primary_type": "scenic_spot", "google_place_id": "ChIJJ48efiZXBGAROtl98Tg3tIQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.1195}, {"place_id": "kansai_0097", "prefecture_ja": "三重県", "name_ja": "伊勢神宮内宮（皇大神宮）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.7, "google_user_ratings_total": 32208, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ8zef3-tQBGARpwz2UzdmCfA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 21.1874}, {"place_id": "kansai_0099", "prefecture_ja": "三重県", "name_ja": "賢島駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 362, "google_primary_type": "train_station", "google_place_id": "ChIJawpIpQOqBWARlBc158qKjxA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.2396}, {"place_id": "kansai_0101", "prefecture_ja": "三重県", "name_ja": "近鉄・五十鈴川駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 243, "google_primary_type": "train_station", "google_place_id": "ChIJfys265hQBGAR5FYanDLr4PM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8333}, {"place_id": "kansai_0102", "prefecture_ja": "福井県", "name_ja": "福井県立若狭歴史博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 242, "google_primary_type": "museum", "google_place_id": "ChIJa6lEqS7FAWARQioJdihMjDI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.0195}, {"place_id": "kansai_0103", "prefecture_ja": "福井県", "name_ja": "羽賀寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 111, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJWSfZhWPaAWARiiQ9rJiEYWY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8116}, {"place_id": "kansai_0107", "prefecture_ja": "福井県", "name_ja": "鵜の瀬", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 157, "google_primary_type": "scenic_spot", "google_place_id": "ChIJv5wx_QTFAWARg7ceaqNYk7c", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.4542}, {"place_id": "kansai_0108", "prefecture_ja": "福井県", "name_ja": "福井県立恐竜博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 16076, "google_primary_type": "museum", "google_place_id": "ChIJedhrVPOa-F8R4bRGdkr_0VU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.9278}, {"place_id": "kansai_0109", "prefecture_ja": "福井県", "name_ja": "道の駅「うみんぴあ大飯」", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 2683, "google_primary_type": "rest_stop", "google_place_id": "ChIJEdwtfXrTAWARe8sqyHZXk2k", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.6865}, {"place_id": "kansai_0110", "prefecture_ja": "福井県", "name_ja": "三方五湖レインボーライン", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1811, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJY1v1P_DdAWARwMvznJtMeMo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.009}, {"place_id": "kansai_0111", "prefecture_ja": "福井県", "name_ja": "ツリーピクニックアドベンチャーいけだ", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.5, "google_user_ratings_total": 501, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJvQvpd34IAmAR-f4_l39SX6M", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.1532}, {"place_id": "kansai_0112", "prefecture_ja": "福井県", "name_ja": "あわら温泉", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.7, "google_user_ratings_total": 1227, "google_primary_type": "public_bath", "google_place_id": "ChIJqxIYew3v-F8Ro4gfAyoFfTk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.43}, {"place_id": "kansai_0113", "prefecture_ja": "福井県", "name_ja": "東尋坊", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 17470, "google_primary_type": "scenic_spot", "google_place_id": "ChIJ8w9fldvl-F8RxirqCy78VTs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.3934}, {"place_id": "kansai_0114", "prefecture_ja": "福井県", "name_ja": "一乗谷朝倉氏遺跡博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 3760, "google_primary_type": "historical_landmark", "google_place_id": "ChIJs9voyKmk-F8RhYo0Lt2Qj3A", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.575}, {"place_id": "kansai_0115", "prefecture_ja": "福井県", "name_ja": "福井駅恐竜広場", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"entertainment\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 766, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ4ZUBPO2--F8RX30SfiOvHvM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4046}, {"place_id": "kansai_0116", "prefecture_ja": "福井県", "name_ja": "めがねミュージアム", "main_type": "culture", "sub_types_json": "[\"culture\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 756, "google_primary_type": "store", "google_place_id": "ChIJbaq6wrWv-F8RzuOd9CNYP_8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.9406}, {"place_id": "kansai_0117", "prefecture_ja": "福井県", "name_ja": "かずら橋", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 445, "google_primary_type": "bridge", "google_place_id": "ChIJy9hy3K0JAmARfPpTxz7hg0c", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.5973}, {"place_id": "kansai_0118", "prefecture_ja": "福井県", "name_ja": "白山平泉寺 / 平泉寺白山神社", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 2182, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJeWyQ4nSc-F8RqsEstra2QXw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.0257}, {"place_id": "kansai_0119", "prefecture_ja": "福井県", "name_ja": "越前大野城", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 2223, "google_primary_type": "castle", "google_place_id": "ChIJ159CBHmf-F8RGt75KkRKKAk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.0538}, {"place_id": "kansai_0120", "prefecture_ja": "福井県", "name_ja": "名勝 蘇洞門", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 195, "google_primary_type": "scenic_spot", "google_place_id": "ChIJ5c94-6zXAWAR5ZrkkS2KW0g", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.0859}, {"place_id": "kansai_0121", "prefecture_ja": "福井県", "name_ja": "気比神宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 4805, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ6bzBzd_6AWARLbfcyIwSzXc", "decision": "MANUAL_REVIEW", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.4635}, {"place_id": "kansai_0122", "prefecture_ja": "福井県", "name_ja": "名勝 養浩館庭園", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1369, "google_primary_type": "garden", "google_place_id": "ChIJy-L52va--F8R5MckLwfxx5Q", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.4879}, {"place_id": "kansai_0123", "prefecture_ja": "福井県", "name_ja": "熊川宿", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.9, "google_user_ratings_total": 173, "google_primary_type": "lodging", "google_place_id": "ChIJe5XjonnBAWAR3YQrLSWfelQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.9787}, {"place_id": "kansai_0124", "prefecture_ja": "福井県", "name_ja": "UMIKARA", "main_type": "food", "sub_types_json": "[\"food\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 530, "google_primary_type": "market", "google_place_id": "ChIJ4wSL0HErAGARnRQB5wXFIK4", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 10.6279}, {"place_id": "kansai_0125", "prefecture_ja": "福井県", "name_ja": "越前海岸", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 121, "google_primary_type": "scenic_spot", "google_place_id": "ChIJM7ZBkna1-F8Rq4UKUqIgYvk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.9713}, {"place_id": "kansai_0126", "prefecture_ja": "福井県", "name_ja": "北前船主の館 右近家", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 524, "google_primary_type": "historical_landmark", "google_place_id": "ChIJg-x_BgRU_18RQ75fbol2NPY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.6086}, {"place_id": "kansai_0127", "prefecture_ja": "福井県", "name_ja": "大本山 永平寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 8028, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJzYo4YsSX-F8R6Sl4_CeuUyw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 5.806}, {"place_id": "kansai_0128", "prefecture_ja": "福井県", "name_ja": "丸岡城", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 5395, "google_primary_type": "castle", "google_place_id": "ChIJeXrpXVzr-F8RyAOcr44yWRM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.6744}, {"place_id": "kansai_0129", "prefecture_ja": "福井県", "name_ja": "越前和紙の里", "main_type": "culture", "sub_types_json": "[\"culture\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 302, "google_primary_type": "museum", "google_place_id": "ChIJ1XGJrSyp-F8ReW1vYGvz7Kg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.6776}, {"place_id": "kansai_0130", "prefecture_ja": "福井県", "name_ja": "小浜駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 122, "google_primary_type": "train_station", "google_place_id": "ChIJzef8yHPQAWARsyYezB9KYoE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.9416}, {"place_id": "kansai_0131", "prefecture_ja": "福井県", "name_ja": "敦賀駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 1025, "google_primary_type": "train_station", "google_place_id": "ChIJq3ke6en6AWARnhHZhZ3syN8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.4424}, {"place_id": "kansai_0132", "prefecture_ja": "福井県", "name_ja": "福井駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 452, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ9QIyBAC_-F8R4zE6G4aMud4", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 11.4212}, {"place_id": "kansai_0133", "prefecture_ja": "福井県", "name_ja": "芦原温泉駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 283, "google_primary_type": "train_station", "google_place_id": "ChIJH-hLUV_u-F8RplRPGxvbXjI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8319}, {"place_id": "kansai_0134", "prefecture_ja": "滋賀県", "name_ja": "比叡山延暦寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 9067, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJMyzNoxsKAWARlcl_aAD9XZA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.4131}, {"place_id": "kansai_0135", "prefecture_ja": "滋賀県", "name_ja": "満月寺 浮御堂", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 2093, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ0-nCS0B1AWARWeMsEpfumI0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.9481}, {"place_id": "kansai_0136", "prefecture_ja": "滋賀県", "name_ja": "彦根城", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1535, "google_primary_type": "museum", "google_place_id": "ChIJ8fHQOdPUA2ARf-sKhRo7Rbw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.5087}, {"place_id": "kansai_0137", "prefecture_ja": "滋賀県", "name_ja": "ミシガンクルーズ", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 1924, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ67fDo4oMAWARc-gDBYgGj-M", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.4662}, {"place_id": "kansai_0138", "prefecture_ja": "滋賀県", "name_ja": "安土城址", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 3191, "google_primary_type": "historical_landmark", "google_place_id": "ChIJe2dMBKl-AWAR5wWMavHRo8k", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.7171}, {"place_id": "kansai_0139", "prefecture_ja": "滋賀県", "name_ja": "生水の郷", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 355, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJCxCN1DKQAWARcxx7AWY80rM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.2058}, {"place_id": "kansai_0140", "prefecture_ja": "滋賀県", "name_ja": "膳所城跡公園", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 671, "google_primary_type": "park", "google_place_id": "ChIJ-UT9jTANAWAR8P01ztQNHCk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.744}, {"place_id": "kansai_0141", "prefecture_ja": "滋賀県", "name_ja": "大津城址", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.1, "google_user_ratings_total": 89, "google_primary_type": "historical_landmark", "google_place_id": "ChIJbU9fT2AMAWARx4NnukbPaBI", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 6.0582}, {"place_id": "kansai_0144", "prefecture_ja": "滋賀県", "name_ja": "苗村神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 251, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJY_E-x2JlAWARapuFr7KIUno", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.8457}, {"place_id": "kansai_0146", "prefecture_ja": "滋賀県", "name_ja": "滋賀県立美術館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 401, "google_primary_type": "art_museum", "google_place_id": "ChIJddm7qaBtAWARGstGHkKVl4E", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.6773}, {"place_id": "kansai_0147", "prefecture_ja": "滋賀県", "name_ja": "太郎坊宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 2498, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJb13tQz19AWARyPOG2vnt8AE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.9502}, {"place_id": "kansai_0148", "prefecture_ja": "滋賀県", "name_ja": "永源寺温泉 八風の湯", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 2040, "google_primary_type": "spa", "google_place_id": "ChIJxx2cIG_cA2ARvCLcURaFLpE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.9084}, {"place_id": "kansai_0149", "prefecture_ja": "滋賀県", "name_ja": "世界凧博物館 東近江大凧会館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 157, "google_primary_type": "museum", "google_place_id": "ChIJF3irjKxiAWAR5AoUr4FtMZQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.5748}, {"place_id": "kansai_0152", "prefecture_ja": "滋賀県", "name_ja": "佐和山城跡", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 406, "google_primary_type": "historical_landmark", "google_place_id": "ChIJAWdfy7XUA2ARz5G9weX_s68", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.4384}, {"place_id": "kansai_0153", "prefecture_ja": "滋賀県", "name_ja": "多景島", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 59, "google_primary_type": "historical_landmark", "google_place_id": "ChIJTXk5dd2AAWAR6bMvoYz8Uqs", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 7.4682}, {"place_id": "kansai_0154", "prefecture_ja": "滋賀県", "name_ja": "玄宮楽々園", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1670, "google_primary_type": "garden", "google_place_id": "ChIJETPWYywrAmARUWD2FQlyuU4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.8588}, {"place_id": "kansai_0156", "prefecture_ja": "滋賀県", "name_ja": "ａｉ彩ひろば", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 321, "google_primary_type": "cycling_park", "google_place_id": "ChIJDSuCkhZzAWARp4dvhefZAok", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 10.0314}, {"place_id": "kansai_0157", "prefecture_ja": "滋賀県", "name_ja": "岡村本家", "main_type": "food", "sub_types_json": "[\"food\", \"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 480, "google_primary_type": null, "google_place_id": "ChIJVUiD823WA2ARe1TBSesjQLE", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 9.9239}, {"place_id": "kansai_0158", "prefecture_ja": "滋賀県", "name_ja": "道の駅 竜王かがみの里", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 3445, "google_primary_type": "rest_stop", "google_place_id": "ChIJZTSk9vN6AWARmQHyAt6dY9c", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.7343}, {"place_id": "kansai_0159", "prefecture_ja": "滋賀県", "name_ja": "百済寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1596, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJXdR90ibaA2ARNlb0nHABjq4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.7742}, {"place_id": "kansai_0160", "prefecture_ja": "滋賀県", "name_ja": "草津市立水生植物公園みずの森", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 658, "google_primary_type": "farm", "google_place_id": "ChIJ2R-WToh0AWAR-Yb-I9s0CXY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4031}, {"place_id": "kansai_0163", "prefecture_ja": "滋賀県", "name_ja": "いぶき薬草湯（伊吹薬草の里文化センター）", "main_type": "culture", "sub_types_json": "[\"culture\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 395, "google_primary_type": "community_center", "google_place_id": "ChIJUy4WQkIyAmARawE0HFGXhl4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.6115}, {"place_id": "kansai_0165", "prefecture_ja": "滋賀県", "name_ja": "清瀧寺徳源院", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 158, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJVX-HZM8yAmARC2WnH-sJtyY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8056}, {"place_id": "kansai_0166", "prefecture_ja": "滋賀県", "name_ja": "BIG・BRETH", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 134, "google_primary_type": "athletic_field", "google_place_id": "ChIJeYgy9voyAmARgebO_5X6gZs", "decision": "MANUAL_REVIEW", "verify_action": "KEEP_CURRENT", "popularity_score": 8.7344}, {"place_id": "kansai_0168", "prefecture_ja": "滋賀県", "name_ja": "伊藤忠兵衛記念館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 125, "google_primary_type": "museum", "google_place_id": "ChIJ82MdTufVA2ARxv1Gz-N1bhI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.2416}, {"place_id": "kansai_0169", "prefecture_ja": "滋賀県", "name_ja": "豊郷小学校旧校舎群", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 1740, "google_primary_type": null, "google_place_id": "ChIJ837RttzVA2ARkMNnRNngMYM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.5836}, {"place_id": "kansai_0170", "prefecture_ja": "滋賀県", "name_ja": "河内の風穴", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 655, "google_primary_type": "scenic_spot", "google_place_id": "ChIJqagqehzSA2ARI0uRZ0fdEqU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.831}, {"place_id": "kansai_0171", "prefecture_ja": "滋賀県", "name_ja": "道の駅 せせらぎの里こうら", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 1860, "google_primary_type": "rest_stop", "google_place_id": "ChIJO1B6UrbWA2AREyO0guSiCvk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.7711}, {"place_id": "kansai_0172", "prefecture_ja": "滋賀県", "name_ja": "石馬寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 149, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJOfPoECl8AWARbnNScTnZCTs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.1396}, {"place_id": "kansai_0173", "prefecture_ja": "滋賀県", "name_ja": "道の駅 アグリパーク竜王", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 2941, "google_primary_type": "rest_stop", "google_place_id": "ChIJ1bsKl5tjAWARphcfSaPWmPY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4871}, {"place_id": "kansai_0175", "prefecture_ja": "滋賀県", "name_ja": "滋賀農業公園ブルーメの丘", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.7, "google_user_ratings_total": 470, "google_primary_type": "amusement_center", "google_place_id": "ChIJYznUTwDfA2ARebDBCV_lBfo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.8902}, {"place_id": "kansai_0177", "prefecture_ja": "滋賀県", "name_ja": "コテージ＆オートキャンプ場グリム冒険の森", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 278, "google_primary_type": "rv_park", "google_place_id": "ChIJJ2K_1Q7nA2ARl1hTw8jUt_I", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.2715}, {"place_id": "kansai_0178", "prefecture_ja": "滋賀県", "name_ja": "五個荘近江商人屋敷", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 171, "google_primary_type": "historical_landmark", "google_place_id": "ChIJGz2ur8h9AWARZ9fi0hqvqe0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.6911}, {"place_id": "kansai_0179", "prefecture_ja": "滋賀県", "name_ja": "十二坊温泉ゆらら・十二坊温泉ファミリーキャンプ場", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 326, "google_primary_type": "rv_park", "google_place_id": "ChIJ-wAp0zhkAWARSyVuSOU0qpQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.3096}, {"place_id": "kansai_0181", "prefecture_ja": "滋賀県", "name_ja": "滋賀県立陶芸の森", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 1890, "google_primary_type": "park", "google_place_id": "ChIJO6IWZUpdAWARRooKeC5WN2s", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.7791}, {"place_id": "kansai_0182", "prefecture_ja": "滋賀県", "name_ja": "甲賀流リアル忍者館", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.9, "google_user_ratings_total": 123, "google_primary_type": "tourist_information_center", "google_place_id": "ChIJpw5tnTpfAWARnM9Bp28ZfxE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.1643}, {"place_id": "kansai_0183", "prefecture_ja": "滋賀県", "name_ja": "甲賀の里忍術村", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 3.5, "google_user_ratings_total": 1359, "google_primary_type": "amusement_center", "google_place_id": "ChIJ1YKUl2FfAWARrjdEmUmUGpg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.9674}, {"place_id": "kansai_0184", "prefecture_ja": "滋賀県", "name_ja": "善水寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 524, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ_y5RviJkAWAReLG2kIGP7to", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.6967}, {"place_id": "kansai_0185", "prefecture_ja": "滋賀県", "name_ja": "長寿寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 580, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ-3tHpfBlAWARDzC5VYiDSU8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.886}, {"place_id": "kansai_0186", "prefecture_ja": "滋賀県", "name_ja": "常楽寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 395, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJT1LhT2ZvAWARtYkGE0GtmG8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.6506}, {"place_id": "kansai_0187", "prefecture_ja": "滋賀県", "name_ja": "びわこ地球市民の森", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 655, "google_primary_type": "park", "google_place_id": "ChIJTVF_VTV0AWARLV1BzjxF9rY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.5493}, {"place_id": "kansai_0188", "prefecture_ja": "滋賀県", "name_ja": "佐川美術館", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 3787, "google_primary_type": "art_museum", "google_place_id": "ChIJG5z9uah1AWARIBQ49-KKEgE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.3872}, {"place_id": "kansai_0189", "prefecture_ja": "滋賀県", "name_ja": "国指定史跡草津宿本陣", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 528, "google_primary_type": "historical_landmark", "google_place_id": "ChIJjYdjuWpyAWARWXUmQPDTtrk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.1662}, {"place_id": "kansai_0190", "prefecture_ja": "滋賀県", "name_ja": "琵琶湖博物館", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 5668, "google_primary_type": "museum", "google_place_id": "ChIJXRxdK4x0AWARsBFMj8YBCd0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.5154}, {"place_id": "kansai_0191", "prefecture_ja": "滋賀県", "name_ja": "Ogama（陶芸体験）", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.2, "google_user_ratings_total": 280, "google_primary_type": "store", "google_place_id": "ChIJI9JE8MlCAWARWdgckwB-i1E", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 10.2846}, {"place_id": "kansai_0192", "prefecture_ja": "滋賀県", "name_ja": "MIHO MUSEUM", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 4110, "google_primary_type": "art_museum", "google_place_id": "ChIJ37pOYqtpAWARpy5Zd54rv4U", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 15.9014}, {"place_id": "kansai_0193", "prefecture_ja": "滋賀県", "name_ja": "海洋堂フィギュアミュージアム黒壁", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 1399, "google_primary_type": "museum", "google_place_id": "ChIJzabb0SIpAmARNUJXkZDOSVs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.8991}, {"place_id": "kansai_0195", "prefecture_ja": "滋賀県", "name_ja": "びわこ箱館山", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 1109, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ_ZmzqGuTAWARMJ0DKhNLtOQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4858}, {"place_id": "kansai_0196", "prefecture_ja": "滋賀県", "name_ja": "びわ湖テラス", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 568, "google_primary_type": "observation_deck", "google_place_id": "ChIJA-N9eHgNAWARD5Pj0shaKFk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.5715}, {"place_id": "kansai_0197", "prefecture_ja": "滋賀県", "name_ja": "三井寺（園城寺）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 3070, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJW_hH73EMAWAR3DLfYrSpmdA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.344}, {"place_id": "kansai_0198", "prefecture_ja": "滋賀県", "name_ja": "竹生島", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 430, "google_primary_type": "island", "google_place_id": "ChIJ98d08UeJAWARsDFLexrlQyg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.8551}, {"place_id": "kansai_0199", "prefecture_ja": "滋賀県", "name_ja": "白鬚神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 6176, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ_6TFyR-MA2ARy33QFlMAor0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.9213}, {"place_id": "kansai_0201", "prefecture_ja": "滋賀県", "name_ja": "近江神宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 4400, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJaSkkH5ILAWARHWIs1p4fOUo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.6673}, {"place_id": "kansai_0202", "prefecture_ja": "滋賀県", "name_ja": "大津駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 448, "google_primary_type": "train_station", "google_place_id": "ChIJbaQdQVgMAWARDAXQE2IKxj0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.5481}, {"place_id": "kansai_0203", "prefecture_ja": "滋賀県", "name_ja": "米原駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.5, "google_user_ratings_total": 1015, "google_primary_type": "train_station", "google_place_id": "ChIJ1VOmUpksAmARUhu58n3h6D4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.5241}, {"place_id": "kansai_0204", "prefecture_ja": "滋賀県", "name_ja": "近江塩津駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 290, "google_primary_type": "train_station", "google_place_id": "ChIJnxfizpL0AWARvUJHHJjTm28", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.87}, {"place_id": "kansai_0205", "prefecture_ja": "滋賀県", "name_ja": "比叡山坂本駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 111, "google_primary_type": "train_station", "google_place_id": "ChIJmcr2eOIKAWARM5u9Jl8vnTs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.5821}, {"place_id": "kansai_0206", "prefecture_ja": "滋賀県", "name_ja": "近江八幡駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 525, "google_primary_type": "train_station", "google_place_id": "ChIJiYpqyMh7AWARV9xADeCtH28", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.7955}, {"place_id": "kansai_0208", "prefecture_ja": "京都府", "name_ja": "伊根の舟屋", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 7289, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJC1Z_so2f_18RieRebkLKVII", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.3817}, {"place_id": "kansai_0209", "prefecture_ja": "京都府", "name_ja": "天橋立", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 7000, "google_primary_type": "scenic_spot", "google_place_id": "ChIJl-LBxy2X_18RgWzksvPOYbo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.3029}, {"place_id": "kansai_0211", "prefecture_ja": "京都府", "name_ja": "宇治市観光センター（対鳳庵）", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 258, "google_primary_type": "tourist_information_center", "google_place_id": "ChIJSUewMw0RAWARE9ec3XauU2c", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.8945}, {"place_id": "kansai_0212", "prefecture_ja": "京都府", "name_ja": "宇治十帖モニュメント", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 95, "google_primary_type": null, "google_place_id": "ChIJ0ebAJHMRAWARI-G9efqDT9M", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.722}, {"place_id": "kansai_0213", "prefecture_ja": "京都府", "name_ja": "宇治神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 1327, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ2c8UEHMRAWARFF_IKb0pduQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.8051}, {"place_id": "kansai_0214", "prefecture_ja": "京都府", "name_ja": "宇治上神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 3044, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJYfl6dXMRAWARX1-X0_AOYBE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.9794}, {"place_id": "kansai_0215", "prefecture_ja": "京都府", "name_ja": "源氏物語ミュージアム", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 1934, "google_primary_type": "museum", "google_place_id": "ChIJ47Iz3XQRAWAROHmOVJfnvBE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.1467}, {"place_id": "kansai_0216", "prefecture_ja": "京都府", "name_ja": "月桂冠大倉記念館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 4567, "google_primary_type": "museum", "google_place_id": "ChIJLZRyoJIPAWAR0xnG_CrMzn4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.3708}, {"place_id": "kansai_0217", "prefecture_ja": "京都府", "name_ja": "寺田屋", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 2201, "google_primary_type": null, "google_place_id": "ChIJE9yVto0PAWARoxPurcHT8V0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.037}, {"place_id": "kansai_0218", "prefecture_ja": "京都府", "name_ja": "大成古墳群", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 125, "google_primary_type": "historical_landmark", "google_place_id": "ChIJ96sMm4Co_18RK4toolhqu98", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.0316}, {"place_id": "kansai_0219", "prefecture_ja": "京都府", "name_ja": "道の駅「てんきてんき丹後」", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 1334, "google_primary_type": "rest_stop", "google_place_id": "ChIJOcVkGSim_18R__yLViWBAWQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.2517}, {"place_id": "kansai_0220", "prefecture_ja": "京都府", "name_ja": "銀閣寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 16721, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ4W9CCwUJAWARyauI6BzKiiU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 19.0048}, {"place_id": "kansai_0221", "prefecture_ja": "京都府", "name_ja": "永観堂（禅林寺）", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 9422, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJF42zshgJAWARVK2wk6AFlxw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.2813}, {"place_id": "kansai_0222", "prefecture_ja": "京都府", "name_ja": "琵琶湖疏水記念館", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 734, "google_primary_type": "museum", "google_place_id": "ChIJleu1euAIAWARFzYcumnqpHA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.7518}, {"place_id": "kansai_0223", "prefecture_ja": "京都府", "name_ja": "平安神宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 15519, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJjch8GOUIAWART0WX2JLZvnU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.4399}, {"place_id": "kansai_0224", "prefecture_ja": "京都府", "name_ja": "京都国立近代美術館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 3730, "google_primary_type": "art_museum", "google_place_id": "ChIJ187BbeYIAWARFtc1KdlA0UE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.6445}, {"place_id": "kansai_0225", "prefecture_ja": "京都府", "name_ja": "三栖閘門・三栖閘門資料館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.5, "google_user_ratings_total": 146, "google_primary_type": "museum", "google_place_id": "ChIJQ3ZDffQPAWARhcPKQXiJZHQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.5856}, {"place_id": "kansai_0229", "prefecture_ja": "京都府", "name_ja": "御香宮神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 2081, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJifEeFpQPAWARxVZ6ds_i080", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.9376}, {"place_id": "kansai_0231", "prefecture_ja": "京都府", "name_ja": "橋姫神社", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 141, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJKzLSkQsRAWARfQwKjF9LV3w", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.1787}, {"place_id": "kansai_0232", "prefecture_ja": "京都府", "name_ja": "琴引浜鳴き砂文化館", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 282, "google_primary_type": "museum", "google_place_id": "ChIJ3agBlwql_18RbeAwafn38wI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.8071}, {"place_id": "kansai_0233", "prefecture_ja": "京都府", "name_ja": "大原野神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1395, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJbf0A9hcBAWARMxZOiJbzxIk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.523}, {"place_id": "kansai_0235", "prefecture_ja": "京都府", "name_ja": "神護寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 1558, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJCfs0pNCrAWARwK0C0rT_q2I", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.0485}, {"place_id": "kansai_0236", "prefecture_ja": "京都府", "name_ja": "随心院", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1346, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJjRGtUG4OAWARZH8NK0TGHL8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.1433}, {"place_id": "kansai_0237", "prefecture_ja": "京都府", "name_ja": "道の駅 ウッディー京北", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 2905, "google_primary_type": "rest_stop", "google_place_id": "ChIJL64GkPOyAWARyVT49yl0lbs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.8142}, {"place_id": "kansai_0238", "prefecture_ja": "京都府", "name_ja": "常照皇寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 431, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJAa75c3qxAWARXDxjMqohiCA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.5961}, {"place_id": "kansai_0240", "prefecture_ja": "京都府", "name_ja": "浄住寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 331, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJjd1shCUHAWARLJaVX1TfTS8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.5888}, {"place_id": "kansai_0242", "prefecture_ja": "京都府", "name_ja": "高山寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1475, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJvYv-4GKpAWARIeg30pCkBkc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.3102}, {"place_id": "kansai_0244", "prefecture_ja": "京都府", "name_ja": "三千院", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 7661, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJE6oLWdagAWARNC8P8LkIKlM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.4795}, {"place_id": "kansai_0245", "prefecture_ja": "京都府", "name_ja": "里の駅大原", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 1242, "google_primary_type": "market", "google_place_id": "ChIJE9yQKiqnAWARzpTiLeyEqk8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.7577}, {"place_id": "kansai_0246", "prefecture_ja": "京都府", "name_ja": "茶づな", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 830, "google_primary_type": "community_center", "google_place_id": "ChIJ55IysRARAWARKnCDRklL2Hc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.2623}, {"place_id": "kansai_0248", "prefecture_ja": "京都府", "name_ja": "相槌神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 80, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJYbMRTzIbAWARzA6W_n4dFDc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.6339}, {"place_id": "kansai_0249", "prefecture_ja": "京都府", "name_ja": "単伝庵（らくがき寺）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 163, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJa2FPpC0bAWAR4_NvB8Ff8ik", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.6379}, {"place_id": "kansai_0250", "prefecture_ja": "京都府", "name_ja": "飛行神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 625, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ158DMs0EAWARTKcmUdjZBlc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.9066}, {"place_id": "kansai_0251", "prefecture_ja": "京都府", "name_ja": "神應寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 64, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJEQAvYMsEAWARr_apD2XpugI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.6142}, {"place_id": "kansai_0252", "prefecture_ja": "京都府", "name_ja": "善法律寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 182, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ-QkhXDAbAWARtXDZN0OC0OY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.5023}, {"place_id": "kansai_0253", "prefecture_ja": "京都府", "name_ja": "正法寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 204, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJaZRX1rutAWARGayF7n_Uv-U", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.1717}, {"place_id": "kansai_0257", "prefecture_ja": "京都府", "name_ja": "京馬車", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.4, "google_user_ratings_total": 56, "google_primary_type": "tour_agency", "google_place_id": "ChIJlZoOztZUAGARQpWiYDYwVAo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 5.97}, {"place_id": "kansai_0259", "prefecture_ja": "京都府", "name_ja": "霧のテラス", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 513, "google_primary_type": "observation_deck", "google_place_id": "ChIJyY_AjqpVAGARarbMp8yY-SI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.1149}, {"place_id": "kansai_0260", "prefecture_ja": "京都府", "name_ja": "京都丹波／亀岡 夢コスモス園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 1014, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJeZcZ3mVUAGARhjqf-2KHhP0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.0259}, {"place_id": "kansai_0261", "prefecture_ja": "京都府", "name_ja": "るり渓自然公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 249, "google_primary_type": "nature_preserve", "google_place_id": "ChIJjWrO5cxEAGARG2hhV3q9dVA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.352}, {"place_id": "kansai_0262", "prefecture_ja": "京都府", "name_ja": "七谷川の桜", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 114, "google_primary_type": "hiking_area", "google_place_id": "ChIJ_c2h6fFTAGAR02yJ6SCPtNg", "decision": "MANUAL_REVIEW", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.2731}, {"place_id": "kansai_0263", "prefecture_ja": "京都府", "name_ja": "道の駅「和」", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.0, "google_user_ratings_total": 1887, "google_primary_type": "store", "google_place_id": "ChIJ67GeEwA7AGARBYdkplrwNB4", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 12.1212}, {"place_id": "kansai_0264", "prefecture_ja": "京都府", "name_ja": "日室ヶ獄遙拝所", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.7, "google_user_ratings_total": 51, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJp_DMLLvz_18R9wgT3ibtrrw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.0652}, {"place_id": "kansai_0266", "prefecture_ja": "京都府", "name_ja": "天岩戸神社", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 477, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJBzkfyLrz_18Ryrr6YBC_8Lo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.3254}, {"place_id": "kansai_0267", "prefecture_ja": "京都府", "name_ja": "保津川下り", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.6, "google_user_ratings_total": 5073, "google_primary_type": null, "google_place_id": "ChIJ5e_0rsRUAGARV6H3azfT3DM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.0442}, {"place_id": "kansai_0268", "prefecture_ja": "京都府", "name_ja": "美山かやぶきの里", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 9522, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJj6DuIB_LAWARQYPR92HLa-Q", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.1087}, {"place_id": "kansai_0270", "prefecture_ja": "京都府", "name_ja": "天王山", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 113, "google_primary_type": "mountain_peak", "google_place_id": "ChIJt6wa-H0DAWARwuFeDRrCbxw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8447}, {"place_id": "kansai_0271", "prefecture_ja": "京都府", "name_ja": "柳谷観音（楊谷寺）", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 2188, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJIX1hUscDAWARzFBXpzmshYs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.3631}, {"place_id": "kansai_0272", "prefecture_ja": "京都府", "name_ja": "乙訓寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 291, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJBfUEFBEEAWARwzjH9OJ5Kh0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.615}, {"place_id": "kansai_0273", "prefecture_ja": "京都府", "name_ja": "光明寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1634, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJRapxW5rgA2ARfFtoHKSW9yE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.8181}, {"place_id": "kansai_0274", "prefecture_ja": "京都府", "name_ja": "向日神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 565, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJd3lf3SIEAWARfUmh0oaSNtI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.5618}, {"place_id": "kansai_0275", "prefecture_ja": "京都府", "name_ja": "アサヒグループ大山崎山荘美術館", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 1612, "google_primary_type": "art_museum", "google_place_id": "ChIJQ3JAI5wEAWARu7e4BkUms_g", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.1136}, {"place_id": "kansai_0276", "prefecture_ja": "京都府", "name_ja": "長岡天満宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 2618, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJQ5ONLm4EAWARuqLdi-5YwJM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.3562}, {"place_id": "kansai_0278", "prefecture_ja": "京都府", "name_ja": "舞鶴港とれとれセンター", "main_type": "food", "sub_types_json": "[\"food\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.5, "google_user_ratings_total": 9078, "google_primary_type": "rest_stop", "google_place_id": "ChIJlRRxkrWL_18RcHRE69AUhXE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.8531}, {"place_id": "kansai_0279", "prefecture_ja": "京都府", "name_ja": "舟屋日和", "main_type": "food", "sub_types_json": "[\"food\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 253, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJLwRmdWef_18RJrtpK9ihpQU", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 10.8218}, {"place_id": "kansai_0280", "prefecture_ja": "京都府", "name_ja": "福知山城", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 3087, "google_primary_type": "park", "google_place_id": "ChIJNXkwoOcCAGARJ3IPxzpOfsE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.2227}, {"place_id": "kansai_0281", "prefecture_ja": "京都府", "name_ja": "金剛院", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 319, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJpUstgACI_18RipXrh2uriMY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.2711}, {"place_id": "kansai_0284", "prefecture_ja": "京都府", "name_ja": "あやべグンゼスクエア", "main_type": "culture", "sub_types_json": "[\"culture\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 687, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJUzDJDyYZAGARXTr8wflULYk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.3504}, {"place_id": "kansai_0287", "prefecture_ja": "京都府", "name_ja": "舞鶴赤レンガパーク", "main_type": "culture", "sub_types_json": "[\"culture\", \"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 3.9, "google_user_ratings_total": 6233, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJlfSUjkyI_18RNm3TKrgNYPs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.7996}, {"place_id": "kansai_0289", "prefecture_ja": "京都府", "name_ja": "天橋立 傘松公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 6737, "google_primary_type": "park", "google_place_id": "ChIJWUlXFmiX_18Rshlam6CbEN8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.8455}, {"place_id": "kansai_0290", "prefecture_ja": "京都府", "name_ja": "伊根湾めぐり遊覧船", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.5, "google_user_ratings_total": 5202, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ5dKjhYaf_18RWgwkvOIyeZs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.7231}, {"place_id": "kansai_0291", "prefecture_ja": "京都府", "name_ja": "けいはんな記念公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1470, "google_primary_type": "park", "google_place_id": "ChIJd_WA4hk9AWAROEnO66DUauM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.304}, {"place_id": "kansai_0292", "prefecture_ja": "京都府", "name_ja": "玉川の桜", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 115, "google_primary_type": "scenic_spot", "google_place_id": "ChIJPYV07TwWAWARQNCszNiJR4s", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.0836}, {"place_id": "kansai_0294", "prefecture_ja": "京都府", "name_ja": "笠置寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 281, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ0_nyeR1HAWAR73UT2Hhhui4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.5361}, {"place_id": "kansai_0295", "prefecture_ja": "京都府", "name_ja": "永谷宗円生家", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 129, "google_primary_type": null, "google_place_id": "ChIJ___E3UoVAWARX4BzHKClZwE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8786}, {"place_id": "kansai_0297", "prefecture_ja": "京都府", "name_ja": "光のページェント～TWINKLE JOYO～", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 935, "google_primary_type": "park", "google_place_id": "ChIJcQ-P2tIWAWAR2YtH2jWcSVc", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 10.7179}, {"place_id": "kansai_0298", "prefecture_ja": "京都府", "name_ja": "流れ橋", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 423, "google_primary_type": "bridge", "google_place_id": "ChIJ_5pQeHYbAWARnW0rkO_WooU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.0349}, {"place_id": "kansai_0299", "prefecture_ja": "京都府", "name_ja": "背割堤のさくら", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 1773, "google_primary_type": "scenic_spot", "google_place_id": "ChIJQzMJPLkEAWARdsFUYmr6AMA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.2954}, {"place_id": "kansai_0300", "prefecture_ja": "京都府", "name_ja": "三室戸寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 3227, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJwTrPD3gRAWARJNFuVObWHrE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.3866}, {"place_id": "kansai_0301", "prefecture_ja": "京都府", "name_ja": "酬恩庵一休寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1377, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJi28MxV0XAWARF4LAUbwXrnc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.4988}, {"place_id": "kansai_0302", "prefecture_ja": "京都府", "name_ja": "石清水八幡宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 5977, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJA2uwgDMbAWARx3CSc97f1Vw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.6168}, {"place_id": "kansai_0303", "prefecture_ja": "京都府", "name_ja": "平等院", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 21440, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJqyva4AwRAWARpAf6j5MUhGA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 19.4906}, {"place_id": "kansai_0304", "prefecture_ja": "京都府", "name_ja": "浄瑠璃寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 1368, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJJ8aD1fs4AWAR9-HWvNrzl9A", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.8002}, {"place_id": "kansai_0305", "prefecture_ja": "京都府", "name_ja": "天空カフェ", "main_type": "food", "sub_types_json": "[\"food\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 72, "google_primary_type": "observation_deck", "google_place_id": "ChIJVVXJdII_AWARMvYsGTpBHlA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.1986}, {"place_id": "kansai_0306", "prefecture_ja": "京都府", "name_ja": "石寺の茶畑", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 344, "google_primary_type": "scenic_spot", "google_place_id": "ChIJVbylUgo_AWARJXpjeArhmaA", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 11.1664}, {"place_id": "kansai_0307", "prefecture_ja": "京都府", "name_ja": "二条駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 284, "google_primary_type": "transit_station", "google_place_id": "ChIJ2b4ClM0HAWARjkrNWXaOKu8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.5739}, {"place_id": "kansai_0308", "prefecture_ja": "京都府", "name_ja": "ＪＲ京都駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 8686, "google_primary_type": "transit_station", "google_place_id": "ChIJ7wKLka4IAWARCByidG5EGrY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.9371}, {"place_id": "kansai_0310", "prefecture_ja": "京都府", "name_ja": "宮津駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"culture\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 139, "google_primary_type": "train_station", "google_place_id": "ChIJvSGIeJ2R_18RCo3UFENDkQ0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.5845}, {"place_id": "kansai_0311", "prefecture_ja": "京都府", "name_ja": "西舞鶴駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 248, "google_primary_type": "train_station", "google_place_id": "ChIJPZToMEeK_18RjZCGyx56ydI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.1056}, {"place_id": "kansai_0312", "prefecture_ja": "京都府", "name_ja": "京都駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.5, "google_user_ratings_total": 56, "google_primary_type": "bus_stop", "google_place_id": "ChIJqywh_K4IAWARfU93cL6J7JU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.9371}, {"place_id": "kansai_0313", "prefecture_ja": "京都府", "name_ja": "三条駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 368, "google_primary_type": "train_station", "google_place_id": "ChIJf4friesIAWARLyrpc9w6duk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.498}, {"place_id": "kansai_0314", "prefecture_ja": "京都府", "name_ja": "JR宇治駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 430, "google_primary_type": "train_station", "google_place_id": "ChIJkV2pfAoRAWARfrI7oas8LwE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.3283}, {"place_id": "kansai_0316", "prefecture_ja": "京都府", "name_ja": "京阪・伏見桃山駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 120, "google_primary_type": "train_station", "google_place_id": "ChIJXYQdtpMPAWAR0UPfAtOr_4w", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.498}, {"place_id": "kansai_0317", "prefecture_ja": "京都府", "name_ja": "京都市営地下鉄東西線・東山駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 143, "google_primary_type": "subway_station", "google_place_id": "ChIJSayBe-gIAWARPztX8M0dF6k", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 7.7701}, {"place_id": "kansai_0318", "prefecture_ja": "京都府", "name_ja": "京都市バス・銀閣寺道バス停", "main_type": "culture", "sub_types_json": "[\"culture\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 122, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJjXdmRgQJAWARxIZYYgQcQb0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.9866}, {"place_id": "kansai_0319", "prefecture_ja": "兵庫県", "name_ja": "日本玩具博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 525, "google_primary_type": "museum", "google_place_id": "ChIJxUZI1LcjVTURtg0NK69ouig", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.9723}, {"place_id": "kansai_0320", "prefecture_ja": "兵庫県", "name_ja": "姫路城", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 57179, "google_primary_type": "castle", "google_place_id": "ChIJsyQzogPgVDURsYG6bi-MT3o", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 21.8833}, {"place_id": "kansai_0321", "prefecture_ja": "兵庫県", "name_ja": "書寫山圓教寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 3567, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ8XekUFEeVTUReE7cQvDevKU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.9859}, {"place_id": "kansai_0322", "prefecture_ja": "兵庫県", "name_ja": "姫路城西御屋敷跡庭園 好古園", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 6782, "google_primary_type": "garden", "google_place_id": "ChIJDxT9HRvgVDURt_SPzwe2f_E", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 17.2414}, {"place_id": "kansai_0323", "prefecture_ja": "兵庫県", "name_ja": "玄武洞公園・玄武洞ミュージアム", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.0, "google_user_ratings_total": 905, "google_primary_type": "museum", "google_place_id": "ChIJa0VQAyPG_18Rh9z23IDclEE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.8285}, {"place_id": "kansai_0324", "prefecture_ja": "兵庫県", "name_ja": "太閤橋・ゆけむり広場", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.6, "google_user_ratings_total": 59, "google_primary_type": "playground", "google_place_id": "ChIJEYZdR2qKAGAR4er1BoKivj4", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 6.4013}, {"place_id": "kansai_0327", "prefecture_ja": "兵庫県", "name_ja": "鼓ヶ滝公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 117, "google_primary_type": "park", "google_place_id": "ChIJVZAtrEeKAGARDs_Q4ZV5VTA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.7019}, {"place_id": "kansai_0328", "prefecture_ja": "兵庫県", "name_ja": "湯泉神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 271, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJYXckwkOKAGAR5bD6HtrAm4o", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.9817}, {"place_id": "kansai_0329", "prefecture_ja": "兵庫県", "name_ja": "瑞宝寺公園", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 1186, "google_primary_type": "park", "google_place_id": "ChIJTXH3tFuKAGAR9_sfgnjqxyk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.6052}, {"place_id": "kansai_0333", "prefecture_ja": "兵庫県", "name_ja": "塩田温泉", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 220, "google_primary_type": "japanese_inn", "google_place_id": "ChIJw1YVQY8YVTURJEjZDpEsDr0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.0724}, {"place_id": "kansai_0335", "prefecture_ja": "兵庫県", "name_ja": "舞子海上プロムナード", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 4223, "google_primary_type": "observation_deck", "google_place_id": "ChIJjYVdGzSCAGARBsAKR9c2HvY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.5906}, {"place_id": "kansai_0336", "prefecture_ja": "兵庫県", "name_ja": "兵庫大仏（能福寺）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 207, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJT9_q0qOPAGAR4NIFr_DRj8A", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.9677}, {"place_id": "kansai_0337", "prefecture_ja": "兵庫県", "name_ja": "六甲高山植物園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 1514, "google_primary_type": "farm", "google_place_id": "ChIJR9gD7sCLAGARLmLWHZtZkmk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.7217}, {"place_id": "kansai_0338", "prefecture_ja": "兵庫県", "name_ja": "ROKKO森の音ミュージアム", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1647, "google_primary_type": "museum", "google_place_id": "ChIJWycj4sOLAGAR2dQEAS8UZWc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.5112}, {"place_id": "kansai_0339", "prefecture_ja": "兵庫県", "name_ja": "阪神・淡路大震災記念 人と未来防災センター", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 2454, "google_primary_type": "museum", "google_place_id": "ChIJAQDArIiOAGAR8-EPMhea-vI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.5772}, {"place_id": "kansai_0340", "prefecture_ja": "兵庫県", "name_ja": "菊正宗酒造記念館", "main_type": "culture", "sub_types_json": "[\"culture\", \"food\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 2292, "google_primary_type": "museum", "google_place_id": "ChIJZfcZaw-NAGARo3ya6mnUg94", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.1137}, {"place_id": "kansai_0341", "prefecture_ja": "兵庫県", "name_ja": "沢の鶴資料館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 598, "google_primary_type": null, "google_place_id": "ChIJ0y1oQy2MAGAR0d98-AX8Bno", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.6652}, {"place_id": "kansai_0342", "prefecture_ja": "兵庫県", "name_ja": "白鶴酒造資料館", "main_type": "culture", "sub_types_json": "[\"culture\", \"food\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 2642, "google_primary_type": "museum", "google_place_id": "ChIJ0UhU3WyPAGAR_XhJ6p0MBos", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.7143}, {"place_id": "kansai_0343", "prefecture_ja": "兵庫県", "name_ja": "ルミナス神戸２", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.0, "google_user_ratings_total": 525, "google_primary_type": "restaurant", "google_place_id": "ChIJlxuOE1WOAGARW495v0S__4U", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.8839}, {"place_id": "kansai_0344", "prefecture_ja": "兵庫県", "name_ja": "神戸リゾートクルーズ「boh boh KOBE」", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 331, "google_primary_type": "ferry_service", "google_place_id": "ChIJzX6WVgCPAGAREDCc1FFA03k", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.8409}, {"place_id": "kansai_0345", "prefecture_ja": "兵庫県", "name_ja": "豊岡市立コウノトリ文化館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 253, "google_primary_type": "museum", "google_place_id": "ChIJD7B8A63G_18R7PNN-4jMvEQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.3408}, {"place_id": "kansai_0346", "prefecture_ja": "兵庫県", "name_ja": "soraかさい", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 1092, "google_primary_type": "museum", "google_place_id": "ChIJs3IefHgvVTURDA4SwCc64_o", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.0661}, {"place_id": "kansai_0347", "prefecture_ja": "兵庫県", "name_ja": "石の宝殿", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 363, "google_primary_type": "historical_landmark", "google_place_id": "ChIJTx3PCJbYVDUR5hV3UbIgMq0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.2688}, {"place_id": "kansai_0349", "prefecture_ja": "兵庫県", "name_ja": "白雪ブルワリービレッジ長寿蔵", "main_type": "food", "sub_types_json": "[\"food\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 225, "google_primary_type": "liquor_store", "google_place_id": "ChIJBUu5eFHwAGARSmqNzuvOnMM", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 9.4164}, {"place_id": "kansai_0352", "prefecture_ja": "兵庫県", "name_ja": "尼崎城", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 2225, "google_primary_type": "castle", "google_place_id": "ChIJgTKB9AbvAGARyuUBYj4gDa8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.0553}, {"place_id": "kansai_0353", "prefecture_ja": "兵庫県", "name_ja": "コウノトリの郷公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 737, "google_primary_type": "park", "google_place_id": "ChIJleruqq3G_18RMwqnkRSPbfk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.3326}, {"place_id": "kansai_0354", "prefecture_ja": "兵庫県", "name_ja": "明石海峡大橋", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 3118, "google_primary_type": "bridge", "google_place_id": "ChIJzTv1NEGCAGARP4zXM8fBqq4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.0725}, {"place_id": "kansai_0357", "prefecture_ja": "兵庫県", "name_ja": "淡路人形座", "main_type": "culture", "sub_types_json": "[\"culture\", \"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 4.4, "google_user_ratings_total": 598, "google_primary_type": "association_or_organization", "google_place_id": "ChIJ133IcmlgUzUR4qKOxsmCB8g", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.2207}, {"place_id": "kansai_0362", "prefecture_ja": "兵庫県", "name_ja": "株式会社たぶち農場", "main_type": "food", "sub_types_json": "[\"food\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 210, "google_primary_type": "farm", "google_place_id": "ChIJrZFhUN8SAGARtJIE4QtvBGo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.9944}, {"place_id": "kansai_0363", "prefecture_ja": "兵庫県", "name_ja": "玄武洞ミュージアム", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 905, "google_primary_type": "museum", "google_place_id": "ChIJa0VQAyPG_18Rh9z23IDclEE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.8285}, {"place_id": "kansai_0365", "prefecture_ja": "兵庫県", "name_ja": "豊岡市立植村直己冒険館", "main_type": "culture", "sub_types_json": "[\"culture\", \"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 593, "google_primary_type": "museum", "google_place_id": "ChIJ1aHOxCnc_18REeKdMNIXXlw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.9273}, {"place_id": "kansai_0366", "prefecture_ja": "兵庫県", "name_ja": "豊岡市立出石永楽館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 665, "google_primary_type": "performing_arts_theater", "google_place_id": "ChIJ96FQeNnn_18RS-wkz2CcGQw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4233}, {"place_id": "kansai_0367", "prefecture_ja": "兵庫県", "name_ja": "豊岡市立玄武洞公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 3270, "google_primary_type": "nature_preserve", "google_place_id": "ChIJFy-lKSPG_18RerLHEX-VzzY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.4102}, {"place_id": "kansai_0369", "prefecture_ja": "兵庫県", "name_ja": "リフレッシュパーク市川", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.9, "google_user_ratings_total": 213, "google_primary_type": "japanese_inn", "google_place_id": "ChIJvfT16VY4VTURite7Ja0T2KI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.0886}, {"place_id": "kansai_0370", "prefecture_ja": "兵庫県", "name_ja": "姫路市立美術館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 812, "google_primary_type": "art_museum", "google_place_id": "ChIJy6e5lQHgVDURs1j2lBULGuo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.9314}, {"place_id": "kansai_0372", "prefecture_ja": "兵庫県", "name_ja": "大野アルプスランド", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 355, "google_primary_type": "park", "google_place_id": "ChIJ38i48pBCAGARFZaB_-wbq3Q", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.4609}, {"place_id": "kansai_0373", "prefecture_ja": "兵庫県", "name_ja": "桃井ミュージアム", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 240, "google_primary_type": "museum", "google_place_id": "ChIJNz8ZF5r1VDURBfrpsCc2Oo8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.5281}, {"place_id": "kansai_0374", "prefecture_ja": "兵庫県", "name_ja": "丹波伝統工芸公園 立杭陶の郷", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 1299, "google_primary_type": "store", "google_place_id": "ChIJM7AvaRhyAGARSJTnzHXJXL8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4558}, {"place_id": "kansai_0375", "prefecture_ja": "兵庫県", "name_ja": "神戸ハーバーランドumie", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"entertainment\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 19154, "google_primary_type": "shopping_mall", "google_place_id": "ChIJuzTLRwePAGARTAkpdj5blxU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.5574}, {"place_id": "kansai_0376", "prefecture_ja": "兵庫県", "name_ja": "プラトン装飾美術館（イタリア館）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 220, "google_primary_type": "art_museum", "google_place_id": "ChIJexGt3N2OAGARJQiq2WRvA-M", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.0809}, {"place_id": "kansai_0377", "prefecture_ja": "兵庫県", "name_ja": "神戸布引ハーブ園／ロープウェイ", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.4, "google_user_ratings_total": 168, "google_primary_type": "garden", "google_place_id": "ChIJecgL0u-PAGARyGS_vsFa2zc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.0594}, {"place_id": "kansai_0378", "prefecture_ja": "兵庫県", "name_ja": "神戸海洋博物館・カワサキワールド", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 169, "google_primary_type": "museum", "google_place_id": "ChIJY0YKDC6PAGARijOMPtV2KPA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.814}, {"place_id": "kansai_0380", "prefecture_ja": "兵庫県", "name_ja": "相楽園", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1949, "google_primary_type": "garden", "google_place_id": "ChIJk1fgThmPAGAR0X_vUw6KnYM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.1471}, {"place_id": "kansai_0381", "prefecture_ja": "兵庫県", "name_ja": "白鶴美術館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 59, "google_primary_type": "art_museum", "google_place_id": "ChIJHxGNErmNAGARqDDqwn788NY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.4682}, {"place_id": "kansai_0382", "prefecture_ja": "兵庫県", "name_ja": "神戸市立六甲山牧場", "main_type": "food", "sub_types_json": "[\"food\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 3399, "google_primary_type": "ranch", "google_place_id": "ChIJqYzyt22JAGARCIV7nbl82Vc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.8322}, {"place_id": "kansai_0383", "prefecture_ja": "兵庫県", "name_ja": "淡河宿本陣跡", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 144, "google_primary_type": "historical_landmark", "google_place_id": "ChIJx0I-2HV8AGARldUV1zXjDtA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8616}, {"place_id": "kansai_0384", "prefecture_ja": "兵庫県", "name_ja": "神戸三田プレミアム・アウトレット", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 12377, "google_primary_type": "shopping_mall", "google_place_id": "ChIJX_amq3hkAGARMvRoJCm_bg0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.3705}, {"place_id": "kansai_0385", "prefecture_ja": "兵庫県", "name_ja": "グリコピア神戸", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 406, "google_primary_type": "manufacturer", "google_place_id": "ChIJ18gqJ6N_AGARSczhsu01M8E", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.6993}, {"place_id": "kansai_0386", "prefecture_ja": "兵庫県", "name_ja": "道の駅 神戸フルーツ・フラワーパーク大沢", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 3325, "google_primary_type": "rest_stop", "google_place_id": "ChIJFXGSmJxjAGARykziCpkdFuc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.3833}, {"place_id": "kansai_0387", "prefecture_ja": "兵庫県", "name_ja": "神戸ワイナリー", "main_type": "food", "sub_types_json": "[\"food\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 331, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJiRS4R5t_AGARtPPz4w9gnKo", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 3.4239}, {"place_id": "kansai_0388", "prefecture_ja": "兵庫県", "name_ja": "橋の科学館", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 1103, "google_primary_type": "museum", "google_place_id": "ChIJ_Vik_TOCAGAR7uisHKUU9_o", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.0848}, {"place_id": "kansai_0390", "prefecture_ja": "兵庫県", "name_ja": "須磨浦山上遊園", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.2, "google_user_ratings_total": 942, "google_primary_type": "amusement_park", "google_place_id": "ChIJnXytIfeEAGARwE5mQ5RApAI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4929}, {"place_id": "kansai_0391", "prefecture_ja": "兵庫県", "name_ja": "神戸市立須磨離宮公園", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 2753, "google_primary_type": "city_park", "google_place_id": "ChIJjTZBGKyFAGARqR02SVRAGJU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.4478}, {"place_id": "kansai_0392", "prefecture_ja": "兵庫県", "name_ja": "太山寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 432, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ4dRS0teAAGARgpxncRH5g1M", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.0732}, {"place_id": "kansai_0393", "prefecture_ja": "兵庫県", "name_ja": "五色塚古墳", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1338, "google_primary_type": "historical_landmark", "google_place_id": "ChIJK5E8abeDAGAR-yjfa5uudCo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.1325}, {"place_id": "kansai_0394", "prefecture_ja": "兵庫県", "name_ja": "須磨寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 1811, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJkf8vslSEAGARAmAHBtEM6_s", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.3359}, {"place_id": "kansai_0396", "prefecture_ja": "兵庫県", "name_ja": "天神泉源", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 198, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJebZmOkKKAGARBmShLgkie9o", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.1954}, {"place_id": "kansai_0397", "prefecture_ja": "兵庫県", "name_ja": "銀の湯", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.8, "google_user_ratings_total": 1585, "google_primary_type": "public_bath", "google_place_id": "ChIJ593uuEOKAGAR89WXJd8GxMQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.1612}, {"place_id": "kansai_0398", "prefecture_ja": "兵庫県", "name_ja": "金の湯", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.0, "google_user_ratings_total": 4456, "google_primary_type": "public_bath", "google_place_id": "ChIJb65UH0KKAGARz_AgIriHO4E", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.5962}, {"place_id": "kansai_0399", "prefecture_ja": "兵庫県", "name_ja": "神戸市立森林植物園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 2695, "google_primary_type": "botanical_garden", "google_place_id": "ChIJ2RQDhvqIAGARFTRcWMIuRts", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.409}, {"place_id": "kansai_0400", "prefecture_ja": "兵庫県", "name_ja": "天覧台", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 2259, "google_primary_type": "observation_deck", "google_place_id": "ChIJT09zwO6LAGARGV7HaVhYoWM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.4227}, {"place_id": "kansai_0401", "prefecture_ja": "兵庫県", "name_ja": "掬星台", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 4467, "google_primary_type": "observation_deck", "google_place_id": "ChIJK9Er5z6JAGAR6-_inZvie2o", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.4255}, {"place_id": "kansai_0403", "prefecture_ja": "兵庫県", "name_ja": "摩耶山天上寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 653, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJZ0Hh4D6JAGARTUb6lvIkbXg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.3885}, {"place_id": "kansai_0404", "prefecture_ja": "兵庫県", "name_ja": "六甲ガーデンテラス/自然体感展望台 六甲枝垂れ", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 384, "google_primary_type": "observation_deck", "google_place_id": "ChIJi7wP876LAGAR6YqKSZfWy-c", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.6004}, {"place_id": "kansai_0405", "prefecture_ja": "兵庫県", "name_ja": "神戸ファッション美術館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 944, "google_primary_type": "art_museum", "google_place_id": "ChIJf_nQonyNAGARBaBM-9UxFD8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.9017}, {"place_id": "kansai_0406", "prefecture_ja": "兵庫県", "name_ja": "兵庫県立美術館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 6529, "google_primary_type": "art_museum", "google_place_id": "ChIJZ7BukIaOAGAR4keLi5dZh4I", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.0226}, {"place_id": "kansai_0407", "prefecture_ja": "兵庫県", "name_ja": "神戸市立王子動物園", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 9176, "google_primary_type": "zoo", "google_place_id": "ChIJDTB81pmOAGARLfmjrTRbPys", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.0396}, {"place_id": "kansai_0408", "prefecture_ja": "兵庫県", "name_ja": "櫻正宗記念館 櫻宴", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 835, "google_primary_type": "japanese_restaurant", "google_place_id": "ChIJmXu_JhCNAGARs2Cc22uyL4s", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.6888}, {"place_id": "kansai_0409", "prefecture_ja": "兵庫県", "name_ja": "神戸酒心館", "main_type": "food", "sub_types_json": "[\"food\", \"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 2375, "google_primary_type": null, "google_place_id": "ChIJLT9UskyMAGARd29rrqJvjQ4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.841}, {"place_id": "kansai_0410", "prefecture_ja": "兵庫県", "name_ja": "浜福鶴吟醸工房", "main_type": "food", "sub_types_json": "[\"food\", \"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 603, "google_primary_type": null, "google_place_id": "ChIJgUdxshGNAGARdky4I233XNg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.2366}, {"place_id": "kansai_0411", "prefecture_ja": "兵庫県", "name_ja": "神戸どうぶつ王国", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.5, "google_user_ratings_total": 16531, "google_primary_type": "zoo", "google_place_id": "ChIJm-YWI_iRAGARxENoWS1l6gg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.9825}, {"place_id": "kansai_0412", "prefecture_ja": "兵庫県", "name_ja": "南京町", "main_type": "food", "sub_types_json": "[\"food\", \"shopping\", \"culture\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 23558, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJkaqwvf2OAGARARl_1gEYbx0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.0514}, {"place_id": "kansai_0413", "prefecture_ja": "兵庫県", "name_ja": "神戸市立博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 3220, "google_primary_type": "museum", "google_place_id": "ChIJTcIyavmOAGARAUlKgKzyqPE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.3828}, {"place_id": "kansai_0414", "prefecture_ja": "兵庫県", "name_ja": "神戸ムスリムモスク", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.7, "google_user_ratings_total": 1629, "google_primary_type": "mosque", "google_place_id": "ChIJnf8mx-GOAGAR_7ywBiTeaYw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.0973}, {"place_id": "kansai_0415", "prefecture_ja": "兵庫県", "name_ja": "萌黄の館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 460, "google_primary_type": "historical_landmark", "google_place_id": "ChIJtSXRSt6OAGARix8I7AsDBhA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.9212}, {"place_id": "kansai_0416", "prefecture_ja": "兵庫県", "name_ja": "香りの家オランダ館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 210, "google_primary_type": "museum", "google_place_id": "ChIJi6NiZt6OAGARso_5nb3SpMw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.3674}, {"place_id": "kansai_0417", "prefecture_ja": "兵庫県", "name_ja": "ラインの館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 265, "google_primary_type": "museum", "google_place_id": "ChIJIVXHBd6OAGARbWyvvdOfyXw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.942}, {"place_id": "kansai_0418", "prefecture_ja": "兵庫県", "name_ja": "うろこの家・展望ギャラリー", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 161, "google_primary_type": "art_museum", "google_place_id": "ChIJS9sejN6OAGARvyVoPwW9WhI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8381}, {"place_id": "kansai_0419", "prefecture_ja": "兵庫県", "name_ja": "風見鶏の館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 1936, "google_primary_type": "historical_landmark", "google_place_id": "ChIJSYLOTd6OAGARXRwytsn7_HM", "decision": "MANUAL_REVIEW", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.4772}, {"place_id": "kansai_0420", "prefecture_ja": "兵庫県", "name_ja": "生田神社", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 11837, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJweCflOOOAGARSAhXB35rPCY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.5151}, {"place_id": "kansai_0421", "prefecture_ja": "兵庫県", "name_ja": "神戸北野天満神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1492, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJVVWpVt6OAGARONPs0K8XI4Q", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.6485}, {"place_id": "kansai_0422", "prefecture_ja": "兵庫県", "name_ja": "布引の滝", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 1784, "google_primary_type": "scenic_spot", "google_place_id": "ChIJO45pYNqOAGAR4vmoQHxzRgg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.6324}, {"place_id": "kansai_0423", "prefecture_ja": "兵庫県", "name_ja": "竹中大工道具館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 1866, "google_primary_type": "museum", "google_place_id": "ChIJbxFGhh6PAGARo8zYmcNEqTo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.0473}, {"place_id": "kansai_0424", "prefecture_ja": "兵庫県", "name_ja": "神戸ポートミュージアム", "main_type": "culture", "sub_types_json": "[\"culture\", \"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 1500, "google_primary_type": "museum", "google_place_id": "ChIJVw2CmbyPAGARTvoiWwrzgeE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.0232}, {"place_id": "kansai_0430", "prefecture_ja": "兵庫県", "name_ja": "青山歴史村・デカンショ館", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 66, "google_primary_type": "museum", "google_place_id": "ChIJq6r6i69sAGARur7bFEVKqUk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 6.5739}, {"place_id": "kansai_0431", "prefecture_ja": "兵庫県", "name_ja": "篠山城大書院", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 2170, "google_primary_type": "castle", "google_place_id": "ChIJFVmRAKVsAGARxNiYacd042s", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.6793}, {"place_id": "kansai_0434", "prefecture_ja": "兵庫県", "name_ja": "万葉の岬", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 591, "google_primary_type": "scenic_spot", "google_place_id": "ChIJty47q9T2VDURvUZUBvfv7yk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.6438}, {"place_id": "kansai_0435", "prefecture_ja": "兵庫県", "name_ja": "洲本城跡", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 2142, "google_primary_type": "castle", "google_place_id": "ChIJP9WzXr-xVDURsRg9_oop9ds", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.3241}, {"place_id": "kansai_0437", "prefecture_ja": "兵庫県", "name_ja": "うへ山の棚田", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 89, "google_primary_type": "scenic_spot", "google_place_id": "ChIJQ9dNP_F8VTURlSlAejQnGU4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.2078}, {"place_id": "kansai_0438", "prefecture_ja": "兵庫県", "name_ja": "たじま高原植物園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 497, "google_primary_type": "farm", "google_place_id": "ChIJq9HtwxljVTURR3RSXpzZLsg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.0586}, {"place_id": "kansai_0439", "prefecture_ja": "兵庫県", "name_ja": "木の殿堂", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 311, "google_primary_type": "museum", "google_place_id": "ChIJ530k5_xiVTURnAInoJYRj7I", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.226}, {"place_id": "kansai_0441", "prefecture_ja": "兵庫県", "name_ja": "大乗寺(応挙寺)", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 435, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJyX2SNvrM_18ROj2k5Hdnslk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.0858}, {"place_id": "kansai_0442", "prefecture_ja": "兵庫県", "name_ja": "伊弉諾神宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 6595, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJO9CGW4i3VDURPglN0FloZz8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.4229}, {"place_id": "kansai_0443", "prefecture_ja": "兵庫県", "name_ja": "淡路島 国営明石海峡公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 4385, "google_primary_type": "national_park", "google_place_id": "ChIJTbF45bSCAGAR5XXOPwJqlRM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.2967}, {"place_id": "kansai_0444", "prefecture_ja": "兵庫県", "name_ja": "兵庫県立公園 あわじ花さじき", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 6938, "google_primary_type": "park", "google_place_id": "ChIJu1SVmGvNVDURBc4GrzfzeoY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.3652}, {"place_id": "kansai_0445", "prefecture_ja": "兵庫県", "name_ja": "美湯 松帆の郷", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.0, "google_user_ratings_total": 2246, "google_primary_type": "public_bath", "google_place_id": "ChIJx6wsaHiCAGARW89y2atWvIo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.4064}, {"place_id": "kansai_0446", "prefecture_ja": "兵庫県", "name_ja": "加古川市見土呂フルーツパーク", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.8, "google_user_ratings_total": 484, "google_primary_type": "park", "google_place_id": "ChIJ6XUh3DApVTURIaiKeW7hre0", "decision": "MANUAL_REVIEW", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.2058}, {"place_id": "kansai_0447", "prefecture_ja": "兵庫県", "name_ja": "鶴林寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 736, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJE8z9EDjYVDURJajPXQYeaqs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.0434}, {"place_id": "kansai_0448", "prefecture_ja": "兵庫県", "name_ja": "高御位山", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 84, "google_primary_type": "hiking_area", "google_place_id": "ChIJwVdvZj4nVTURLBKL0UCfbyc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.4489}, {"place_id": "kansai_0450", "prefecture_ja": "兵庫県", "name_ja": "西宮能楽堂", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 53, "google_primary_type": "performing_arts_theater", "google_place_id": "ChIJVcuseeTtAGARaYHqIsCPBIE", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 7.2761}, {"place_id": "kansai_0451", "prefecture_ja": "兵庫県", "name_ja": "甲子園歴史館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 1863, "google_primary_type": "history_museum", "google_place_id": "ChIJ5wIcEPHtAGARZGEnHM8KgWg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.717}, {"place_id": "kansai_0452", "prefecture_ja": "兵庫県", "name_ja": "えびす宮総本社 西宮神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 6306, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ6xznS_TyAGAR4x-f1UIet-o", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.7192}, {"place_id": "kansai_0453", "prefecture_ja": "兵庫県", "name_ja": "元気村かみくげ", "main_type": "nature", "sub_types_json": "[\"nature\", \"food\"]", "type_shopping": 0, "type_nature": 1, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 103, "google_primary_type": "park", "google_place_id": "ChIJDYvuwk0MAGARHGnBFFiQLU8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.2613}, {"place_id": "kansai_0455", "prefecture_ja": "兵庫県", "name_ja": "柏原藩陣屋跡", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 82, "google_primary_type": "historical_landmark", "google_place_id": "ChIJWyTBUCgPAGARni5jdMJVv0Y", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 7.4844}, {"place_id": "kansai_0456", "prefecture_ja": "兵庫県", "name_ja": "黒井城", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.7, "google_user_ratings_total": 89, "google_primary_type": "historical_landmark", "google_place_id": "ChIJAxQuqQAFAGARncM2tpJLRSE", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 9.1849}, {"place_id": "kansai_0457", "prefecture_ja": "兵庫県", "name_ja": "沼島 上立神岩", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 209, "google_primary_type": "scenic_spot", "google_place_id": "ChIJQw04yL5ZUzURC6f3NsE6TA4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.45}, {"place_id": "kansai_0458", "prefecture_ja": "兵庫県", "name_ja": "うずの丘 大鳴門橋記念館", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 5480, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJHQzGcmlgUzUR9QFQdS4T-BI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.3293}, {"place_id": "kansai_0459", "prefecture_ja": "兵庫県", "name_ja": "淡路ファームパーク イングランドの丘", "main_type": "food", "sub_types_json": "[\"food\", \"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.9, "google_user_ratings_total": 4445, "google_primary_type": "amusement_center", "google_place_id": "ChIJNb3AVDqkVDURcJWmnpGlIrs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.2271}, {"place_id": "kansai_0460", "prefecture_ja": "兵庫県", "name_ja": "砥峰高原", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 2542, "google_primary_type": "scenic_spot", "google_place_id": "ChIJBa82s5pqVTUR-PFCzC0i_u4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.643}, {"place_id": "kansai_0462", "prefecture_ja": "兵庫県", "name_ja": "柳田國男生家", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 68, "google_primary_type": "historical_landmark", "google_place_id": "ChIJZ1yEpbE8VTURddcVkWqb5tE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 6.8037}, {"place_id": "kansai_0464", "prefecture_ja": "兵庫県", "name_ja": "大庄屋三木家住宅", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 72, "google_primary_type": "historical_landmark", "google_place_id": "ChIJY0gOBXsdVTURy0wuVw0P33Q", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 7.4533}, {"place_id": "kansai_0465", "prefecture_ja": "兵庫県", "name_ja": "辻川山公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 1123, "google_primary_type": "park", "google_place_id": "ChIJlZcnmLE8VTURpeLh29Wk8pE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.898}, {"place_id": "kansai_0467", "prefecture_ja": "兵庫県", "name_ja": "天滝", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 302, "google_primary_type": "scenic_spot", "google_place_id": "ChIJl4AzkdFlVTURoh-FDPfPxKg", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 11.4146}, {"place_id": "kansai_0468", "prefecture_ja": "兵庫県", "name_ja": "明延鉱山探検坑道", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 68, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJJ-tw1o5oVTURDcHAN46R44s", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 8.2748}, {"place_id": "kansai_0469", "prefecture_ja": "兵庫県", "name_ja": "那珂ふれあい館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 50, "google_primary_type": "community_center", "google_place_id": "ChIJ7XdcS11JVTURMD8pxm1vBX0", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 6.318}, {"place_id": "kansai_0470", "prefecture_ja": "兵庫県", "name_ja": "ラベンダーパーク多可", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 903, "google_primary_type": "playground", "google_place_id": "ChIJdbm6KPlNVTURQ4eXOe6QJQU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.9378}, {"place_id": "kansai_0472", "prefecture_ja": "兵庫県", "name_ja": "新温泉町山陰海岸ジオパーク館", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 351, "google_primary_type": "museum", "google_place_id": "ChIJe9Xg3DIs_l8R_BkCUamkWus", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.9315}, {"place_id": "kansai_0473", "prefecture_ja": "兵庫県", "name_ja": "音水湖カヌークラブ", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 114, "google_primary_type": "service", "google_place_id": "ChIJMxs2EXVyVTURz4D50J-T7lE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.6549}, {"place_id": "kansai_0474", "prefecture_ja": "兵庫県", "name_ja": "ばんしゅう戸倉スキー場", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.8, "google_user_ratings_total": 197, "google_primary_type": "ski_resort", "google_place_id": "ChIJZwBhettxVTUR4MxnMKvDGZY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.7273}, {"place_id": "kansai_0475", "prefecture_ja": "兵庫県", "name_ja": "ちくさ高原スキー場", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 429, "google_primary_type": "ski_resort", "google_place_id": "ChIJ-0MFgpqgVTURVd8F1xAoo0I", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.7972}, {"place_id": "kansai_0476", "prefecture_ja": "兵庫県", "name_ja": "最上山公園もみじ山", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 604, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ_4ZUKMQEVTURsinX1Bb4uD0", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 11.6834}, {"place_id": "kansai_0477", "prefecture_ja": "兵庫県", "name_ja": "兵庫県立但馬牧場公園", "main_type": "food", "sub_types_json": "[\"food\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 322, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJsQmEKuLV_18RvcR-Gr1yTiE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.2877}, {"place_id": "kansai_0478", "prefecture_ja": "兵庫県", "name_ja": "AMAMI TERRACE", "main_type": "food", "sub_types_json": "[\"food\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 178, "google_primary_type": "snack_bar", "google_place_id": "ChIJNSwOoSX1VDURllKd-wbM2XU", "decision": "MANUAL_REVIEW", "verify_action": "KEEP_CURRENT", "popularity_score": 9.6873}, {"place_id": "kansai_0479", "prefecture_ja": "兵庫県", "name_ja": "赤穂城", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 1878, "google_primary_type": "castle", "google_place_id": "ChIJARzlnW9fVDURsKUIlpuM3BQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.7683}, {"place_id": "kansai_0481", "prefecture_ja": "兵庫県", "name_ja": "飛龍の滝", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 178, "google_primary_type": "scenic_spot", "google_place_id": "ChIJFZUmIlFVVDURfQeEaeZ6hVM", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 9.6873}, {"place_id": "kansai_0482", "prefecture_ja": "兵庫県", "name_ja": "佐用町南光ひまわり畑", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 72, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ7Rt1qt8BVTUR3yOoJbFaLLc", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 8.1986}, {"place_id": "kansai_0483", "prefecture_ja": "兵庫県", "name_ja": "平福の街並み", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 119, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJCwKvj0iqVTUR5yVHFQ7DItE", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 8.3167}, {"place_id": "kansai_0485", "prefecture_ja": "兵庫県", "name_ja": "加古大池公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 144, "google_primary_type": null, "google_place_id": "ChIJy38P8ocpVTURdxTRZsgCdcI", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 8.6455}, {"place_id": "kansai_0488", "prefecture_ja": "兵庫県", "name_ja": "道の駅北はりまエコミュージアム", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.5, "google_user_ratings_total": 1180, "google_primary_type": "rest_stop", "google_place_id": "ChIJQ64WFsdKVTURcDxjX43S65Q", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.7529}, {"place_id": "kansai_0489", "prefecture_ja": "兵庫県", "name_ja": "播州織工房館", "main_type": "culture", "sub_types_json": "[\"culture\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 216, "google_primary_type": "museum", "google_place_id": "ChIJ--kDZWU1VTURNE0jnaQA2Kc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.3458}, {"place_id": "kansai_0490", "prefecture_ja": "兵庫県", "name_ja": "日本へそ公園", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.9, "google_user_ratings_total": 975, "google_primary_type": "park", "google_place_id": "ChIJBcRlWbVKVTURMSlRJBHkJLA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.6589}, {"place_id": "kansai_0491", "prefecture_ja": "兵庫県", "name_ja": "闘竜灘", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 845, "google_primary_type": "scenic_spot", "google_place_id": "ChIJ1QQCgIo0VTURnNhpt_K1G_U", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.0022}, {"place_id": "kansai_0493", "prefecture_ja": "兵庫県", "name_ja": "加東アート館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 187, "google_primary_type": "art_museum", "google_place_id": "ChIJ_4QII401VTURBCwgP4j2WNQ", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 9.324}, {"place_id": "kansai_0494", "prefecture_ja": "兵庫県", "name_ja": "生野銀山", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 2424, "google_primary_type": "historical_landmark", "google_place_id": "ChIJ18gd-KdFVTURd3416d0jsTA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.2158}, {"place_id": "kansai_0495", "prefecture_ja": "兵庫県", "name_ja": "竹田城跡", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 3849, "google_primary_type": "historical_landmark", "google_place_id": "ChIJx1Cv0LlZVTURyVATTFSdDY0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.776}, {"place_id": "kansai_0496", "prefecture_ja": "兵庫県", "name_ja": "神子畑選鉱場跡", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 1407, "google_primary_type": "historical_landmark", "google_place_id": "ChIJv3e29LhCVTUR_NTo3PFeR_I", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 12.9093}, {"place_id": "kansai_0498", "prefecture_ja": "兵庫県", "name_ja": "浄土寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 721, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJrYZX2H0yVTURSE9RLrzHsug", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.0059}, {"place_id": "kansai_0499", "prefecture_ja": "兵庫県", "name_ja": "ひまわりの丘公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 64, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJF-4Qu5szVTURHIEw2X8X7QQ", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 7.9768}, {"place_id": "kansai_0500", "prefecture_ja": "兵庫県", "name_ja": "小野アルプス", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 91, "google_primary_type": "observation_deck", "google_place_id": "ChIJx_YYbtouVTURDUJpSMjB00Y", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.8552}, {"place_id": "kansai_0501", "prefecture_ja": "兵庫県", "name_ja": "白雲谷温泉ゆぴか", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 2195, "google_primary_type": "public_bath", "google_place_id": "ChIJCan2Jx4sVTURYFc-BfjxfAM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.7007}, {"place_id": "kansai_0502", "prefecture_ja": "兵庫県", "name_ja": "たかさご万灯祭", "main_type": "culture", "sub_types_json": "[\"culture\", \"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 4.2, "google_user_ratings_total": 642, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJoSxv4RHZVDUR-DVcWjLPc2s", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 11.7945}, {"place_id": "kansai_0503", "prefecture_ja": "兵庫県", "name_ja": "住吉神社（住吉公園）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 779, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJj_CjNrDWVDURU-YD64nXOuA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.1468}, {"place_id": "kansai_0504", "prefecture_ja": "兵庫県", "name_ja": "旧波門崎燈籠堂（明石港旧灯台）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 207, "google_primary_type": "historical_landmark", "google_place_id": "ChIJR7ohUKXUVDURuLnEmozZ4aE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.345}, {"place_id": "kansai_0505", "prefecture_ja": "兵庫県", "name_ja": "魚の棚町商店街", "main_type": "food", "sub_types_json": "[\"food\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 6208, "google_primary_type": "market", "google_place_id": "ChIJARa1PrfUVDURDAJMDJtx5uk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.7928}, {"place_id": "kansai_0506", "prefecture_ja": "兵庫県", "name_ja": "明石城（兵庫県立明石公園）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 1760, "google_primary_type": "park", "google_place_id": "ChIJAQDA3rfUVDUR7bfndBkKQt4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.3076}, {"place_id": "kansai_0507", "prefecture_ja": "兵庫県", "name_ja": "明石市立天文科学館", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.4, "google_user_ratings_total": 671, "google_primary_type": "museum", "google_place_id": "ChIJKaSGpN-BAGARaXAJCMJM8Oo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4404}, {"place_id": "kansai_0508", "prefecture_ja": "兵庫県", "name_ja": "清涼山心月院", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 76, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJpypJMhpkAGARHtfd5dDVlCs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.7346}, {"place_id": "kansai_0509", "prefecture_ja": "兵庫県", "name_ja": "有馬富士公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 74, "google_primary_type": "park", "google_place_id": "ChIJfyi9nednAGARjDXzaLzWcLs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.8933}, {"place_id": "kansai_0510", "prefecture_ja": "兵庫県", "name_ja": "武庫川桜づつみ回廊", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 769, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJH8Gx0HIuVTURwRl0j37wkgc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4119}, {"place_id": "kansai_0511", "prefecture_ja": "兵庫県", "name_ja": "新宮晋 風のミュージアム", "main_type": "culture", "sub_types_json": "[\"culture\", \"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 159, "google_primary_type": "art_museum", "google_place_id": "ChIJAQAw9QxmAGAR14aqCW4Yc7U", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.4777}, {"place_id": "kansai_0512", "prefecture_ja": "兵庫県", "name_ja": "一庫ダム", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 185, "google_primary_type": null, "google_place_id": "ChIJBUKeRIpYAGAREGsW3L92sig", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8511}, {"place_id": "kansai_0513", "prefecture_ja": "兵庫県", "name_ja": "多田神社", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 894, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJSdjTV0X2AGARI0EPXq3YwMg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.3977}, {"place_id": "kansai_0514", "prefecture_ja": "兵庫県", "name_ja": "市立伊丹ミュージアム", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 621, "google_primary_type": "museum", "google_place_id": "ChIJ1_NXWlHwAGAR3sjFOnEtQVI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.4545}, {"place_id": "kansai_0515", "prefecture_ja": "兵庫県", "name_ja": "伊丹市昆虫館", "main_type": "culture", "sub_types_json": "[\"culture\", \"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 1283, "google_primary_type": "museum", "google_place_id": "ChIJf4zYkBTxAGARsnrZN15xDmQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.3668}, {"place_id": "kansai_0516", "prefecture_ja": "兵庫県", "name_ja": "伊丹スカイパーク", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.4, "google_user_ratings_total": 4886, "google_primary_type": "park", "google_place_id": "ChIJSzi5DGzwAGARqqw_zW2DT8k", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.2318}, {"place_id": "kansai_0517", "prefecture_ja": "兵庫県", "name_ja": "伊丹市立こども文化科学館", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.0, "google_user_ratings_total": 330, "google_primary_type": "museum", "google_place_id": "ChIJeXnEn2nwAGAR5ZWW8P0ywIk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.0793}, {"place_id": "kansai_0518", "prefecture_ja": "兵庫県", "name_ja": "高座の滝", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 249, "google_primary_type": "scenic_spot", "google_place_id": "ChIJPwHtr8WNAGARIGyUhWWwzWY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.0713}, {"place_id": "kansai_0519", "prefecture_ja": "兵庫県", "name_ja": "芦屋市立美術博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 294, "google_primary_type": "museum", "google_place_id": "ChIJm3B8vMfyAGARbfGvu0J82jQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.6323}, {"place_id": "kansai_0521", "prefecture_ja": "兵庫県", "name_ja": "浜坂駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 129, "google_primary_type": "train_station", "google_place_id": "ChIJj6sNP0ks_l8RqEODIZVz3n0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.033}, {"place_id": "kansai_0522", "prefecture_ja": "兵庫県", "name_ja": "城崎温泉駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"culture\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 484, "google_primary_type": "train_station", "google_place_id": "ChIJ2eGnhDvI_18Rje0B1J-k_Dg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.2801}, {"place_id": "kansai_0523", "prefecture_ja": "兵庫県", "name_ja": "豊岡駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 193, "google_primary_type": "train_station", "google_place_id": "ChIJUU8onWvE_18RHOKhsXdlGBw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.2361}, {"place_id": "kansai_0524", "prefecture_ja": "兵庫県", "name_ja": "神戸電鉄・有馬温泉駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 384, "google_primary_type": "train_station", "google_place_id": "ChIJKb2DTGqKAGARqkHst2q3UzE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.3418}, {"place_id": "kansai_0526", "prefecture_ja": "兵庫県", "name_ja": "JR元町駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 575, "google_primary_type": "transit_station", "google_place_id": "ChIJFyYemvKFAGARXfpsr2THmv8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.2136}, {"place_id": "kansai_0527", "prefecture_ja": "奈良県", "name_ja": "吉水神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 1427, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJIdHM7zXGBmAR3WCOlfVrS-o", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.8808}, {"place_id": "kansai_0528", "prefecture_ja": "奈良県", "name_ja": "藤ノ木古墳", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 351, "google_primary_type": "historical_landmark", "google_place_id": "ChIJiWDHlWElAWAR0Vj5yc8m0I4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.1862}, {"place_id": "kansai_0529", "prefecture_ja": "奈良県", "name_ja": "中宮寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 801, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ4yDAYfUvAWARkjAtxSJk9mI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4879}, {"place_id": "kansai_0530", "prefecture_ja": "奈良県", "name_ja": "法輪寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 458, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ55BNalslAWARAFI0lh2c2GM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.9134}, {"place_id": "kansai_0531", "prefecture_ja": "奈良県", "name_ja": "安倍文殊院", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 2303, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJpe6n20PLBmARXHAv7S5kGxo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.4587}, {"place_id": "kansai_0532", "prefecture_ja": "奈良県", "name_ja": "春日大社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 14444, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ1Wqwa8A5AWARlpXjgoPnl0w", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.7186}, {"place_id": "kansai_0534", "prefecture_ja": "奈良県", "name_ja": "平城宮跡", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 133, "google_primary_type": "museum", "google_place_id": "ChIJt6uR8KQ7AWARC-79TO8VGVg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.3825}, {"place_id": "kansai_0535", "prefecture_ja": "奈良県", "name_ja": "東大寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.7, "google_user_ratings_total": 29955, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ3XYIepA5AWARjzzVnT-skPg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 21.0393}, {"place_id": "kansai_0536", "prefecture_ja": "奈良県", "name_ja": "飛鳥寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 2542, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJxfjEuYXMBmAR4HYdcOzNWg8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.9835}, {"place_id": "kansai_0537", "prefecture_ja": "奈良県", "name_ja": "大神神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 244, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJCdSTobc0AWARph4Q0XXAAl4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.7512}, {"place_id": "kansai_0539", "prefecture_ja": "奈良県", "name_ja": "金峯山寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 165, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ0c8KnjrGBmARCzzAXEBUlo4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8804}, {"place_id": "kansai_0540", "prefecture_ja": "奈良県", "name_ja": "石舞台古墳", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1741, "google_primary_type": "historical_landmark", "google_place_id": "ChIJ0TPuh3fMBmARY7dPT_cNWfQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.6124}, {"place_id": "kansai_0541", "prefecture_ja": "奈良県", "name_ja": "奈良国立博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 4990, "google_primary_type": "museum", "google_place_id": "ChIJ0St27JE5AWAR7acBmY9MU4Y", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.272}, {"place_id": "kansai_0542", "prefecture_ja": "奈良県", "name_ja": "興福寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 12487, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJs-w9sog5AWARk0WDN0cPgxE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.0246}, {"place_id": "kansai_0543", "prefecture_ja": "奈良県", "name_ja": "藤原宮跡", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1709, "google_primary_type": "historical_landmark", "google_place_id": "ChIJu_VYqbTMBmARCi22i41TXx8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.5786}, {"place_id": "kansai_0544", "prefecture_ja": "奈良県", "name_ja": "慈光院", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 359, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJFRe5KEQEUTURd-0HG5egf_s", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.5034}, {"place_id": "kansai_0545", "prefecture_ja": "奈良県", "name_ja": "薬師寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 5665, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJn3rdOfw6AWARJwWCcfoiD4c", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.5141}, {"place_id": "kansai_0546", "prefecture_ja": "奈良県", "name_ja": "岡寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 2974, "google_primary_type": "historical_landmark", "google_place_id": "ChIJ7d4PW4fLBmARURkmU9frYio", "decision": "MANUAL_REVIEW", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 5.5918}, {"place_id": "kansai_0548", "prefecture_ja": "奈良県", "name_ja": "信貴山玉蔵院（宿坊）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 338, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ3e6Gv3AmAWARaUQFo6pFK1M", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.6389}, {"place_id": "kansai_0549", "prefecture_ja": "奈良県", "name_ja": "長谷寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 7267, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJwxlUGFm1BmARMDEA7p7q_W4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.3764}, {"place_id": "kansai_0550", "prefecture_ja": "奈良県", "name_ja": "談山神社", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 3095, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ8Yxq5s3LBmARfhJ7RszMPL4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.0104}, {"place_id": "kansai_0551", "prefecture_ja": "奈良県", "name_ja": "大峯山龍泉寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 1085, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJO3yg50bABmARv8JZy0oLWGY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.3577}, {"place_id": "kansai_0553", "prefecture_ja": "奈良県", "name_ja": "谷瀬の吊り橋", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 5682, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJeyNmSm_vBmARHDQ4Zup5Qxw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.1447}, {"place_id": "kansai_0556", "prefecture_ja": "奈良県", "name_ja": "稲渕の棚田", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 652, "google_primary_type": "scenic_spot", "google_place_id": "ChIJl18XH7XOBmARmoQ6dfRUqw8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.5411}, {"place_id": "kansai_0558", "prefecture_ja": "奈良県", "name_ja": "若草山", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 911, "google_primary_type": "mountain_peak", "google_place_id": "ChIJLwbhyrs5AWARXrfL75d3_j8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.616}, {"place_id": "kansai_0560", "prefecture_ja": "奈良県", "name_ja": "曽爾高原", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 1754, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJEXKR9ZyoBmARQBSPoMwPlZM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.2748}, {"place_id": "kansai_0561", "prefecture_ja": "奈良県", "name_ja": "春日山原始林", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 136, "google_primary_type": "nature_preserve", "google_place_id": "ChIJzdIgLz45AWARIT5ospLVqf8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.6152}, {"place_id": "kansai_0563", "prefecture_ja": "奈良県", "name_ja": "みたらい渓谷", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 178, "google_primary_type": "river", "google_place_id": "ChIJw_SyDoTqBmARcgQTw4C54cQ", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 10.3631}, {"place_id": "kansai_0564", "prefecture_ja": "奈良県", "name_ja": "斑鳩町文化財活用センター", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 156, "google_primary_type": "museum", "google_place_id": "ChIJwyCBYoovAWARMu69DdHhb7s", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.4424}, {"place_id": "kansai_0565", "prefecture_ja": "奈良県", "name_ja": "法隆寺ｉセンター", "main_type": "culture", "sub_types_json": "[\"culture\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 285, "google_primary_type": "tourist_information_center", "google_place_id": "ChIJGRgzivQvAWARFtEhILdOe8A", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.5798}, {"place_id": "kansai_0566", "prefecture_ja": "和歌山県", "name_ja": "JA紀の里ファーマーズマーケット めっけもん広場", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"food\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 3587, "google_primary_type": "farmers_market", "google_place_id": "ChIJzQ2luME0B2AR1ytYxR85iVY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.8639}, {"place_id": "kansai_0567", "prefecture_ja": "和歌山県", "name_ja": "和歌浦漁港 おっとっと広場", "main_type": "food", "sub_types_json": "[\"food\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 832, "google_primary_type": "market", "google_place_id": "ChIJY4oYrGlNB2ARA8ey8u_-Vx8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.5143}, {"place_id": "kansai_0569", "prefecture_ja": "和歌山県", "name_ja": "養翠園", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 313, "google_primary_type": "garden", "google_place_id": "ChIJLZ2B1llNB2ARjwOdFB84EFg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.4871}, {"place_id": "kansai_0572", "prefecture_ja": "和歌山県", "name_ja": "番所庭園", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 777, "google_primary_type": "garden", "google_place_id": "ChIJMzkV1a9SB2ARj0Tycfnk6VU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.1421}, {"place_id": "kansai_0573", "prefecture_ja": "和歌山県", "name_ja": "紀州東照宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1451, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJtaCBtEFNB2ARM6uaaJExFow", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.2803}, {"place_id": "kansai_0574", "prefecture_ja": "和歌山県", "name_ja": "不老橋", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 67, "google_primary_type": "historical_landmark", "google_place_id": "ChIJHxHGoxRNB2ARrMt-wSGZOB4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.8798}, {"place_id": "kansai_0575", "prefecture_ja": "和歌山県", "name_ja": "玉津島神社", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 486, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ083vyBNNB2ARr2Q9ap1hcQY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.0189}, {"place_id": "kansai_0576", "prefecture_ja": "和歌山県", "name_ja": "粉河寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1707, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJkXYDGKkzB2ARONR4TenHCPM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.8997}, {"place_id": "kansai_0577", "prefecture_ja": "和歌山県", "name_ja": "道の駅・青洲の里", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.5, "google_user_ratings_total": 988, "google_primary_type": "rest_stop", "google_place_id": "ChIJq6o6DQ0yB2ARwmuezS4Hyw0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.4832}, {"place_id": "kansai_0578", "prefecture_ja": "和歌山県", "name_ja": "南紀勝浦温泉・湯川温泉", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 1157, "google_primary_type": "hotel", "google_place_id": "ChIJwYhPh30WBmARzpqb-mqeEgM", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 12.2548}, {"place_id": "kansai_0579", "prefecture_ja": "和歌山県", "name_ja": "大門坂", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 480, "google_primary_type": "historical_landmark", "google_place_id": "ChIJr9GYpkI_BmARGDUtj-fJl88", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.3379}, {"place_id": "kansai_0580", "prefecture_ja": "和歌山県", "name_ja": "補陀洛山寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 371, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJM_fXyLcVBmARc52GUeSuYHg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.7963}, {"place_id": "kansai_0582", "prefecture_ja": "和歌山県", "name_ja": "稲むらの火の館／濱口梧陵記念館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 532, "google_primary_type": "museum", "google_place_id": "ChIJOVNX4-VEB2ARx-ISPJlSZe4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.1796}, {"place_id": "kansai_0583", "prefecture_ja": "和歌山県", "name_ja": "浜のうたせ", "main_type": "food", "sub_types_json": "[\"food\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 2576, "google_primary_type": "market", "google_place_id": "ChIJnwQsVrNRB2ARaclgfowhaZ4", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 13.6445}, {"place_id": "kansai_0584", "prefecture_ja": "和歌山県", "name_ja": "旧和歌山県議会議事堂（一乗閣）", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 148, "google_primary_type": "museum", "google_place_id": "ChIJ9yHnuLvKAGAR3dyiQEjrLT4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.9101}, {"place_id": "kansai_0585", "prefecture_ja": "和歌山県", "name_ja": "根来寺（根來寺）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1734, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ5_8RjrfKAGARc8kyX61goug", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.6051}, {"place_id": "kansai_0586", "prefecture_ja": "和歌山県", "name_ja": "アドベンチャーワールド", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.5, "google_user_ratings_total": 18130, "google_primary_type": "amusement_center", "google_place_id": "ChIJZfJikKymB2ARn17tXPSRGwY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 19.1629}, {"place_id": "kansai_0587", "prefecture_ja": "和歌山県", "name_ja": "漆器蒔絵体験／紀州漆器伝統産業会館 うるわし館", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 3.7, "google_user_ratings_total": 209, "google_primary_type": "store", "google_place_id": "ChIJ_ybAMyJMB2AR-RiptX0U7ng", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.5922}, {"place_id": "kansai_0589", "prefecture_ja": "和歌山県", "name_ja": "トルコ記念館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1169, "google_primary_type": "museum", "google_place_id": "ChIJEZ40IbcjBmARWX_wgnmsy9o", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.8864}, {"place_id": "kansai_0590", "prefecture_ja": "和歌山県", "name_ja": "橋杭岩", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 8355, "google_primary_type": "scenic_spot", "google_place_id": "ChIJu7Xp8dAkBmARKezDH25jr2o", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.8646}, {"place_id": "kansai_0591", "prefecture_ja": "和歌山県", "name_ja": "円月島", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 177, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ093p7VWhB2ARZmAX6lF_9zU", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 10.1269}, {"place_id": "kansai_0592", "prefecture_ja": "和歌山県", "name_ja": "白良浜", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 7555, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ41DZ7wKhB2AROvuZjd3Uhdk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.4523}, {"place_id": "kansai_0593", "prefecture_ja": "和歌山県", "name_ja": "あらぎ島", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 198, "google_primary_type": "observation_deck", "google_place_id": "ChIJTRRnsjo9B2ARTeDunN7sWTM", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 10.115}, {"place_id": "kansai_0594", "prefecture_ja": "和歌山県", "name_ja": "白崎海洋公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 390, "google_primary_type": "scenic_spot", "google_place_id": "ChIJHffAb1BZB2ARPHya-BHrjAM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.1464}, {"place_id": "kansai_0595", "prefecture_ja": "和歌山県", "name_ja": "湯浅重要伝統的建造物群保存地区", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 78, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJSaM0oHFFB2ARodW2-Sa547I", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 8.3496}, {"place_id": "kansai_0596", "prefecture_ja": "和歌山県", "name_ja": "黒潮市場", "main_type": "food", "sub_types_json": "[\"food\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 9374, "google_primary_type": "food_store", "google_place_id": "ChIJg371o8VNB2ARUdEHUg9qsx0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.6961}, {"place_id": "kansai_0597", "prefecture_ja": "和歌山県", "name_ja": "ニタマ駅長（和歌山電鉄貴志駅）", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 713, "google_primary_type": "train_station", "google_place_id": "ChIJWdZPjOM1B2ARs-id5h1ERu8", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 12.2709}, {"place_id": "kansai_0599", "prefecture_ja": "和歌山県", "name_ja": "丹生都比売神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 2584, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJZXUQvCsvB2ARbqSn3daKuq0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.3561}, {"place_id": "kansai_0602", "prefecture_ja": "和歌山県", "name_ja": "奥之院", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.7, "google_user_ratings_total": 7920, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJZd0I7j86GWARXgG-91Ta5j8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.3243}, {"place_id": "kansai_0603", "prefecture_ja": "和歌山県", "name_ja": "壇上伽藍", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 3800, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ-TitDQ0nB2ARwgYPgu5bEes", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.1095}, {"place_id": "kansai_0604", "prefecture_ja": "和歌山県", "name_ja": "金剛峯寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 7014, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJXVifh3InB2ARxY1UV-2ukyo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.3071}, {"place_id": "kansai_0605", "prefecture_ja": "和歌山県", "name_ja": "熊野川舟下り", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 116, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJJw_Hm9BCBmARBzgrw_vKxIo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.8932}, {"place_id": "kansai_0606", "prefecture_ja": "和歌山県", "name_ja": "神倉神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 2159, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJM-iYrqtsBmAR10DsdgkkKaw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.3385}, {"place_id": "kansai_0607", "prefecture_ja": "和歌山県", "name_ja": "熊野速玉大社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 6772, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJdbGt8qZsBmARuhkpTB1WUDE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.8554}, {"place_id": "kansai_0608", "prefecture_ja": "和歌山県", "name_ja": "那智の滝", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 11016, "google_primary_type": "scenic_spot", "google_place_id": "ChIJ-Z5J5fM_BmARNg5zbIxDfNc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.5935}, {"place_id": "kansai_0609", "prefecture_ja": "和歌山県", "name_ja": "那智山青岸渡寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 1380, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ5Z-y__E_BmARBAGoDnd8Buk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.1309}, {"place_id": "kansai_0610", "prefecture_ja": "和歌山県", "name_ja": "熊野那智大社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 7038, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJ1d7uC3cVBmARsVLmY1fG2yw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.3138}, {"place_id": "kansai_0611", "prefecture_ja": "和歌山県", "name_ja": "湯の峰温泉 つぼ湯", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.6, "google_user_ratings_total": 636, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJoYXLRNVbBmARzg9ddyXg8jE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.899}, {"place_id": "kansai_0612", "prefecture_ja": "和歌山県", "name_ja": "大斎原", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 1615, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJK7npYSFaBmARBzB9yyxPD4g", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.438}, {"place_id": "kansai_0613", "prefecture_ja": "和歌山県", "name_ja": "熊野本宮大社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 8548, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJP3bnaCFaBmARAu9qmLB6eXA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.0868}, {"place_id": "kansai_0614", "prefecture_ja": "和歌山県", "name_ja": "和歌山港駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 124, "google_primary_type": "train_station", "google_place_id": "ChIJyY8pPV6tAGARTBUx2fDABq0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.1779}, {"place_id": "kansai_0615", "prefecture_ja": "和歌山県", "name_ja": "和歌山市駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 545, "google_primary_type": "train_station", "google_place_id": "ChIJoegPoJKyAGARdjFjZzZqpbA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.4013}, {"place_id": "kansai_0617", "prefecture_ja": "鳥取県", "name_ja": "三徳山三佛寺投入堂", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.6, "google_user_ratings_total": 687, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJxekO1VvDVTURSAkLS0m-jd0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.0529}, {"place_id": "kansai_0618", "prefecture_ja": "鳥取県", "name_ja": "鳥取砂丘", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 16260, "google_primary_type": "national_park", "google_place_id": "ChIJbx8cHUSPVTURazEAdQKsetg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 18.5289}, {"place_id": "kansai_0619", "prefecture_ja": "鳥取県", "name_ja": "山陰海岸ジオパーク 海と大地の自然館", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 354, "google_primary_type": "museum", "google_place_id": "ChIJA4JyQowp_l8RSpUxg7QtC0c", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.4559}, {"place_id": "kansai_0624", "prefecture_ja": "鳥取県", "name_ja": "円形劇場 くらよしフィギュアミュージアム", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.2, "google_user_ratings_total": 1110, "google_primary_type": "museum", "google_place_id": "ChIJRRsDdvHYVTURrzSus7p25Yk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.792}, {"place_id": "kansai_0625", "prefecture_ja": "鳥取県", "name_ja": "米子水鳥公園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 311, "google_primary_type": "park", "google_place_id": "ChIJse5UyAb5VjUR9orlsu-_qeU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.4754}, {"place_id": "kansai_0626", "prefecture_ja": "鳥取県", "name_ja": "夢みなとタワー", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.6, "google_user_ratings_total": 2704, "google_primary_type": "observation_deck", "google_place_id": "ChIJcbAh93BWVjURrh2kE5IC_Bo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.3558}, {"place_id": "kansai_0627", "prefecture_ja": "鳥取県", "name_ja": "大神山神社奥宮", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 813, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJN99RC79hVjURxWlqAFhUdyA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.8067}, {"place_id": "kansai_0629", "prefecture_ja": "鳥取県", "name_ja": "大山寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 267, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJBQ5cbYB1UzURmkPbOTG0aZo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.1982}, {"place_id": "kansai_0630", "prefecture_ja": "鳥取県", "name_ja": "とっとり花回廊", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1915, "google_primary_type": "farm", "google_place_id": "ChIJW9IOqPXzVjURem37CroyEfA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.7861}, {"place_id": "kansai_0631", "prefecture_ja": "鳥取県", "name_ja": "金持神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 1155, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJW2JaE7TtVjUR-P1tLOCJmHk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.7833}, {"place_id": "kansai_0632", "prefecture_ja": "鳥取県", "name_ja": "オシドリ観察小屋", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 223, "google_primary_type": null, "google_place_id": "ChIJERjCrq7tVjURhd9AlxCpBpg", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 10.0977}, {"place_id": "kansai_0633", "prefecture_ja": "鳥取県", "name_ja": "植田正治写真美術館", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 959, "google_primary_type": "art_museum", "google_place_id": "ChIJoSSiS6X1VjURopN22U17vnQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.122}, {"place_id": "kansai_0634", "prefecture_ja": "鳥取県", "name_ja": "中国庭園 燕趙園", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 1652, "google_primary_type": "garden", "google_place_id": "ChIJ_2jY-rDdVTURwYNTxkaAKFA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.2294}, {"place_id": "kansai_0635", "prefecture_ja": "鳥取県", "name_ja": "倉吉白壁土蔵群", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 2748, "google_primary_type": "historical_landmark", "google_place_id": "ChIJIVWu8ePYVTURdRnC0Plu5Mk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.0689}, {"place_id": "kansai_0636", "prefecture_ja": "鳥取県", "name_ja": "なしっこ館", "main_type": "food", "sub_types_json": "[\"food\", \"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 2444, "google_primary_type": "museum", "google_place_id": "ChIJ23JImxjZVTURAOTv6cvt9L0", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 13.8919}, {"place_id": "kansai_0637", "prefecture_ja": "鳥取県", "name_ja": "砂の美術館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 10365, "google_primary_type": "art_museum", "google_place_id": "ChIJF2dbUUWPVTUR6USg6_DP8x4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.6687}, {"place_id": "kansai_0638", "prefecture_ja": "鳥取県", "name_ja": "鳥取城跡", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 401, "google_primary_type": "historical_landmark", "google_place_id": "ChIJrzZ1WoKPVTURm_05o4klTiM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.1982}, {"place_id": "kansai_0639", "prefecture_ja": "鳥取県", "name_ja": "浦富海岸", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 796, "google_primary_type": "beach", "google_place_id": "ChIJP1Q8wqeAVTURme2ZMsn8Q5c", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4763}, {"place_id": "kansai_0640", "prefecture_ja": "鳥取県", "name_ja": "不動院岩屋堂", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 290, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJx0sLMbZ1VTURMmX_fvr8q0Y", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.3484}, {"place_id": "kansai_0641", "prefecture_ja": "鳥取県", "name_ja": "氷ノ山", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 202, "google_primary_type": "mountain_peak", "google_place_id": "ChIJBVaxwYB6VTURLuF_1jmMR4A", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.9222}, {"place_id": "kansai_0642", "prefecture_ja": "鳥取県", "name_ja": "石谷家住宅", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 524, "google_primary_type": "historical_landmark", "google_place_id": "ChIJL4t2a6C8VTURBrHjN60EFuM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.6967}, {"place_id": "kansai_0644", "prefecture_ja": "鳥取県", "name_ja": "鳥取温泉", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.0, "google_user_ratings_total": 1507, "google_primary_type": "public_bath", "google_place_id": "ChIJ72s-LiqOVTUR86E14EQzB58", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.7136}, {"place_id": "kansai_0645", "prefecture_ja": "鳥取県", "name_ja": "鳥取駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 670, "google_primary_type": "train_station", "google_place_id": "ChIJd0V_EMOPVTURA_1-AefTNBA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.0242}, {"place_id": "kansai_0651", "prefecture_ja": "徳島県", "name_ja": "あせび温泉 やすらぎの郷", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 409, "google_primary_type": "public_bath", "google_place_id": "ChIJJ-79wx90UzURuhFUWpEVtK0", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 10.7124}, {"place_id": "kansai_0652", "prefecture_ja": "徳島県", "name_ja": "あすたむらんど徳島", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 2137, "google_primary_type": "amusement_center", "google_place_id": "ChIJp7Zu5Et0UzURMlB7U_Nr20k", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.319}, {"place_id": "kansai_0653", "prefecture_ja": "徳島県", "name_ja": "四国八十八ヵ所巡礼第六番札所安楽寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 806, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJC_AhbBCgUzURAqIrjuGAKpE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.2089}, {"place_id": "kansai_0654", "prefecture_ja": "徳島県", "name_ja": "技の館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 177, "google_primary_type": "museum", "google_place_id": "ChIJcctEJP2fUzURnaRGxQJ-TZo", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 8.7766}, {"place_id": "kansai_0657", "prefecture_ja": "徳島県", "name_ja": "鳴滝", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 104, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJq2HKyeURUzURya6NkAoWNAw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.8826}, {"place_id": "kansai_0660", "prefecture_ja": "徳島県", "name_ja": "土釜", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 111, "google_primary_type": "scenic_spot", "google_place_id": "ChIJPwBrvUw1UjURMgPblOWw1mU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.6067}, {"place_id": "kansai_0661", "prefecture_ja": "徳島県", "name_ja": "美濃田の淵", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 104, "google_primary_type": "scenic_spot", "google_place_id": "ChIJAQAxN_IsUjURZ3w8unMRqUE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.2869}, {"place_id": "kansai_0662", "prefecture_ja": "徳島県", "name_ja": "吉野川ハイウェイオアシス", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 1405, "google_primary_type": "rest_stop", "google_place_id": "ChIJATwu-vEsUjURNdV2ptDPb7k", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.3327}, {"place_id": "kansai_0663", "prefecture_ja": "徳島県", "name_ja": "ぶぶるパークみかも", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 96, "google_primary_type": "park", "google_place_id": "ChIJF30kv6vSUzURF7XVQH-Qw2c", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.1458}, {"place_id": "kansai_0664", "prefecture_ja": "徳島県", "name_ja": "藍住町バラ園", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 87, "google_primary_type": "farm", "google_place_id": "ChIJ04CO0L5zUzURARAtNkQsNKU", "decision": "AUTO_ACCEPT", "verify_action": "KEEP_CURRENT", "popularity_score": 7.9724}, {"place_id": "kansai_0666", "prefecture_ja": "徳島県", "name_ja": "大歩危小歩危", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 398, "google_primary_type": "scenic_spot", "google_place_id": "ChIJV29vOUiKUTURs3cvt5La_n4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.1842}, {"place_id": "kansai_0667", "prefecture_ja": "徳島県", "name_ja": "道の駅大歩危", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 2566, "google_primary_type": "rest_stop", "google_place_id": "ChIJC45NAU-KUTURtuBTOwqdZpw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.9558}, {"place_id": "kansai_0668", "prefecture_ja": "徳島県", "name_ja": "道の駅いたの", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 1459, "google_primary_type": "rest_stop", "google_place_id": "ChIJvxAMraZzUzURHkavmt47hVw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.341}, {"place_id": "kansai_0669", "prefecture_ja": "徳島県", "name_ja": "道の駅貞光ゆうゆう館", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 1185, "google_primary_type": "rest_stop", "google_place_id": "ChIJR-jPg0rKUzUR1v-H8yg2ys0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.3741}, {"place_id": "kansai_0670", "prefecture_ja": "徳島県", "name_ja": "渦潮観潮船(うずしお汽船)", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.4, "google_user_ratings_total": 1337, "google_primary_type": "ferry_service", "google_place_id": "ChIJdcqPgvJlUzURFQOHsRLRdng", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.7564}, {"place_id": "kansai_0671", "prefecture_ja": "徳島県", "name_ja": "うだつの町並み", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 2077, "google_primary_type": null, "google_place_id": "ChIJKV_89RC3UzURZVLxycVgy_I", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.2706}, {"place_id": "kansai_0672", "prefecture_ja": "徳島県", "name_ja": "渦潮観潮船(鳴門観光汽船)", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 3140, "google_primary_type": "ferry_service", "google_place_id": "ChIJ6y9XgQFkUzURS5PwjVw647E", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.338}, {"place_id": "kansai_0674", "prefecture_ja": "徳島県", "name_ja": "四国八十八カ所巡礼二十三番札所薬王寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 1846, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJuQwTo-j8UjURS1vJuguJViM", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 13.7192}, {"place_id": "kansai_0675", "prefecture_ja": "徳島県", "name_ja": "四国八十八カ所巡礼十二番札所焼山寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1947, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ44K2dOZxUzURIWOzwPwg0LM", "decision": "MANUAL_REVIEW", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.1452}, {"place_id": "kansai_0676", "prefecture_ja": "徳島県", "name_ja": "四国八十八カ所巡礼一番札所霊山寺", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1947, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJ44K2dOZxUzURIWOzwPwg0LM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.1452}, {"place_id": "kansai_0677", "prefecture_ja": "徳島県", "name_ja": "城満寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 73, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJhVpVZNpdUjURF4WGoNJsjqg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.4115}, {"place_id": "kansai_0678", "prefecture_ja": "徳島県", "name_ja": "恵比須洞", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 245, "google_primary_type": "scenic_spot", "google_place_id": "ChIJpeAyRSv9UjUR-ipUAEOGPYI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.8028}, {"place_id": "kansai_0680", "prefecture_ja": "徳島県", "name_ja": "お松大権現", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 610, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJsXeBywMQUzUR9UzO0zW7GVw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.5372}, {"place_id": "kansai_0683", "prefecture_ja": "徳島県", "name_ja": "大轟の滝", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 74, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJQ9bA8PhTUjURp3jMwj8Naas", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.0628}, {"place_id": "kansai_0686", "prefecture_ja": "徳島県", "name_ja": "剣山", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.7, "google_user_ratings_total": 651, "google_primary_type": "mountain_peak", "google_place_id": "ChIJNY90X9g3UjUR-4Tm6xDzmF0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.227}, {"place_id": "kansai_0687", "prefecture_ja": "徳島県", "name_ja": "八合霧", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 1153, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJ7xXLRzolUjUR6eK4h_AvQS4", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 10.5947}, {"place_id": "kansai_0688", "prefecture_ja": "徳島県", "name_ja": "落合集落", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 290, "google_primary_type": "observation_deck", "google_place_id": "ChIJpS-UYTolUjURjdVvINCUJSc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.5947}, {"place_id": "kansai_0690", "prefecture_ja": "徳島県", "name_ja": "大歩危峡観光遊覧船", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.2, "google_user_ratings_total": 4123, "google_primary_type": null, "google_place_id": "ChIJoeoG_UyKUTUR9FZd03d6LhQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.1839}, {"place_id": "kansai_0693", "prefecture_ja": "徳島県", "name_ja": "藍の館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 510, "google_primary_type": "museum", "google_place_id": "ChIJpzURMXpzUzURKAWbGnenfO8", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.3754}, {"place_id": "kansai_0694", "prefecture_ja": "徳島県", "name_ja": "土柱", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 895, "google_primary_type": "scenic_spot", "google_place_id": "ChIJA6AY0Vm6UzURKymhwk5951w", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.514}, {"place_id": "kansai_0696", "prefecture_ja": "徳島県", "name_ja": "ひょうたん島クルーズ", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 517, "google_primary_type": "transportation_service", "google_place_id": "ChIJ7Wx0gV9tUzURU7nHJ5RqeGY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.2145}, {"place_id": "kansai_0697", "prefecture_ja": "徳島県", "name_ja": "徳島中央公園（さくら）", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 1395, "google_primary_type": "park", "google_place_id": "ChIJox9t8GRtUzURTqHkmIxiRiU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.5795}, {"place_id": "kansai_0698", "prefecture_ja": "徳島県", "name_ja": "眉山天神社", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 545, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJu8vgC6RyUzURiOzHIhFgXGo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.7699}, {"place_id": "kansai_0699", "prefecture_ja": "徳島県", "name_ja": "渦の道", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 903, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJJYm6FC9hUzUR4-mrm23CfdQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.7115}, {"place_id": "kansai_0700", "prefecture_ja": "徳島県", "name_ja": "祖谷のかずら橋", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 3132, "google_primary_type": "bridge", "google_place_id": "ChIJEdgLLuUnUjUR691uAvUAg0U", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.0326}, {"place_id": "kansai_0701", "prefecture_ja": "徳島県", "name_ja": "鳴門の渦潮", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 1332, "google_primary_type": "tourist_attraction", "google_place_id": "ChIJtc_GvRhhUzURD5YWECaI2dw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.0617}, {"place_id": "kansai_0702", "prefecture_ja": "徳島県", "name_ja": "阿波おどり会館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 4478, "google_primary_type": "museum", "google_place_id": "ChIJ89HG-6NyUzURLaL2S3m6Exc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.335}, {"place_id": "kansai_0703", "prefecture_ja": "徳島県", "name_ja": "南海フェリー徳島港", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 446, "google_primary_type": "ferry_service", "google_place_id": "ChIJSRziyPdtUzURGaDFN3eTpbg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.3362}, {"place_id": "kansai_0704", "prefecture_ja": "大阪府", "name_ja": "千利休屋敷跡", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 164, "google_primary_type": "historical_landmark", "google_place_id": "ChIJX-eCXpjcAGARqilaVlI6U28", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.9829}, {"place_id": "kansai_0705", "prefecture_ja": "大阪府", "name_ja": "堺市役所21階展望ロビー", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 903, "google_primary_type": "observation_deck", "google_place_id": "ChIJ3XeYqYbcAGARbOxdkY9ph3Q", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.4159}, {"place_id": "kansai_0706", "prefecture_ja": "大阪府", "name_ja": "岸和田城", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 2458, "google_primary_type": "castle", "google_place_id": "ChIJW35mWgnGAGAR4EnN_Aj3uMU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.9021}, {"place_id": "kansai_0707", "prefecture_ja": "大阪府", "name_ja": "泉佐野漁港・青空市場", "main_type": "food", "sub_types_json": "[\"food\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 5220, "google_primary_type": "market", "google_place_id": "ChIJ57twdwrIAGARbqoHo6LHgHI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.4992}, {"place_id": "kansai_0709", "prefecture_ja": "大阪府", "name_ja": "仁徳天皇陵古墳", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 932, "google_primary_type": "historical_landmark", "google_place_id": "ChIJY9sFeXjbAGARpd7b47AdN64", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.1765}, {"place_id": "kansai_0710", "prefecture_ja": "大阪府", "name_ja": "犬鳴山温泉", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.7, "google_user_ratings_total": 224, "google_primary_type": "public_bath", "google_place_id": "ChIJSwSVAYDMAGARRwcYjKYGPbQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.7031}, {"place_id": "kansai_0713", "prefecture_ja": "大阪府", "name_ja": "大阪中之島美術館", "main_type": "nature", "sub_types_json": "[\"nature\", \"culture\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 5616, "google_primary_type": "art_museum", "google_place_id": "ChIJa7dX-nLnAGARYuCX2mxyVWA", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.4975}, {"place_id": "kansai_0714", "prefecture_ja": "大阪府", "name_ja": "百舌鳥八幡宮", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 968, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJrRpUGqPbAGARnFn_lTncGu0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.8412}, {"place_id": "kansai_0715", "prefecture_ja": "大阪府", "name_ja": "タグボート大正", "main_type": "food", "sub_types_json": "[\"food\", \"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.3, "google_user_ratings_total": 686, "google_primary_type": null, "google_place_id": "ChIJ1VakOmrnAGARE-ns9mLPWTo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.1989}, {"place_id": "kansai_0716", "prefecture_ja": "大阪府", "name_ja": "中之島ラブセントラル", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 6250, "google_primary_type": "city_park", "google_place_id": "ChIJPXiMg97mAGARsiccqVj_Os8", "decision": "MANUAL_REVIEW", "verify_action": "MANUAL_REVIEW", "popularity_score": 15.943}, {"place_id": "kansai_0718", "prefecture_ja": "大阪府", "name_ja": "川の駅 はちけんや", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 372, "google_primary_type": "community_center", "google_place_id": "ChIJq8h4tt7mAGARdKybt66lqKc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.2868}, {"place_id": "kansai_0719", "prefecture_ja": "大阪府", "name_ja": "鉄炮鍛冶屋敷", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 102, "google_primary_type": "historical_landmark", "google_place_id": "ChIJOTu1yoLdAGARexyJOGPdmiE", "decision": "MANUAL_REVIEW", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 8.4539}, {"place_id": "kansai_0720", "prefecture_ja": "大阪府", "name_ja": "堺市立町家歴史館 清学院", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.8, "google_user_ratings_total": 85, "google_primary_type": "museum", "google_place_id": "ChIJVQYLAPTcAGARZxgXuFfAszY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.3511}, {"place_id": "kansai_0721", "prefecture_ja": "大阪府", "name_ja": "堺市立町家歴史館 山口家住宅", "main_type": "culture", "sub_types_json": "[\"culture\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 208, "google_primary_type": "museum", "google_place_id": "ChIJQRTcVPPcAGART3cchp0R-Bs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.5126}, {"place_id": "kansai_0722", "prefecture_ja": "大阪府", "name_ja": "本家小嶋", "main_type": "food", "sub_types_json": "[\"food\", \"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 1, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.5, "google_user_ratings_total": 242, "google_primary_type": "confectionery", "google_place_id": "ChIJzQaFgpbcAGARER-m2iitUR0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.7352}, {"place_id": "kansai_0723", "prefecture_ja": "大阪府", "name_ja": "旧堺燈台", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 514, "google_primary_type": "historical_landmark", "google_place_id": "ChIJLQat-8XcAGARjQpCTyjzuIw", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.1184}, {"place_id": "kansai_0724", "prefecture_ja": "大阪府", "name_ja": "百舌鳥古墳群ビジターセンター", "main_type": "culture", "sub_types_json": "[\"culture\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 247, "google_primary_type": null, "google_place_id": "ChIJZULR3xPbAGARz1hbRyb0T7M", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.2961}, {"place_id": "kansai_0725", "prefecture_ja": "大阪府", "name_ja": "シマノ自転車博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 777, "google_primary_type": "museum", "google_place_id": "ChIJl1y6qHvbAGARhCbxZEClJx0", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.7203}, {"place_id": "kansai_0726", "prefecture_ja": "大阪府", "name_ja": "堺市博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 1216, "google_primary_type": "museum", "google_place_id": "ChIJIz5pGXfbAGAR0clAlXNEcyI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.6497}, {"place_id": "kansai_0727", "prefecture_ja": "大阪府", "name_ja": "開口神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 436, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJgS4cGJHcAGAR9esRhvR3DVc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.5619}, {"place_id": "kansai_0728", "prefecture_ja": "大阪府", "name_ja": "方違神社", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 2026, "google_primary_type": "shinto_shrine", "google_place_id": "ChIJMwZ40X3cAGARksFIv5b4Bbc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.2195}, {"place_id": "kansai_0729", "prefecture_ja": "大阪府", "name_ja": "南宗寺", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 401, "google_primary_type": "buddhist_temple", "google_place_id": "ChIJF8mPgKLcAGARZuYY9cBWtoo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.4169}, {"place_id": "kansai_0730", "prefecture_ja": "大阪府", "name_ja": "堺 アルフォンス･ミュシャ館（堺市立文化館）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 660, "google_primary_type": "art_museum", "google_place_id": "ChIJuw5CxXncAGARyOVHtRIi27k", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.1269}, {"place_id": "kansai_0731", "prefecture_ja": "大阪府", "name_ja": "道具屋和田商店", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"culture\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.7, "google_user_ratings_total": 100, "google_primary_type": "store", "google_place_id": "ChIJ58YDFo3cAGARvHi33qJ9LFg", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.4203}, {"place_id": "kansai_0732", "prefecture_ja": "大阪府", "name_ja": "堺・緑のミュージアム ハーベストの丘", "main_type": "entertainment", "sub_types_json": "[\"entertainment\", \"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.9, "google_user_ratings_total": 3866, "google_primary_type": "park", "google_place_id": "ChIJi6IHCUfRAGARnn76d-_1ksQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.9908}, {"place_id": "kansai_0733", "prefecture_ja": "大阪府", "name_ja": "堺伝匠館", "main_type": "culture", "sub_types_json": "[\"culture\", \"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 915, "google_primary_type": "store", "google_place_id": "ChIJJ0mEmpLcAGARqDtnx525QRk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.7362}, {"place_id": "kansai_0734", "prefecture_ja": "大阪府", "name_ja": "大仙公園 日本庭園", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 905, "google_primary_type": "garden", "google_place_id": "ChIJd8sCe3vbAGARujcQ9pFaxyc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.0114}, {"place_id": "kansai_0735", "prefecture_ja": "大阪府", "name_ja": "さかい利晶の杜", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 1634, "google_primary_type": "museum", "google_place_id": "ChIJpfK3z3ncAGARC-L5TuYNkxU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 12.5327}, {"place_id": "kansai_0736", "prefecture_ja": "大阪府", "name_ja": "大阪府民の森ほりご園地（愛称：紀泉わいわい村 FUNNY HEARTH）", "main_type": "nature", "sub_types_json": "[\"nature\", \"entertainment\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.5, "google_user_ratings_total": 238, "google_primary_type": "campground", "google_place_id": "ChIJLfZ04EbKAGARRb9lk35MsvI", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.7028}, {"place_id": "kansai_0737", "prefecture_ja": "大阪府", "name_ja": "大阪府民の森ちはや園地", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 228, "google_primary_type": "park", "google_place_id": "ChIJVVwA333TBmARE5YQy9apkAM", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.6753}, {"place_id": "kansai_0738", "prefecture_ja": "大阪府", "name_ja": "大阪府民の森ほしだ園地", "main_type": "nature", "sub_types_json": "[\"nature\"]", "type_shopping": 0, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 612, "google_primary_type": "park", "google_place_id": "ChIJhY5E_7cYAWARePUhPo0oiAk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.9861}, {"place_id": "kansai_0739", "prefecture_ja": "大阪府", "name_ja": "大阪府立青少年海洋センター", "main_type": "nature", "sub_types_json": "[\"nature\", \"shopping\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 75, "google_primary_type": "government_office", "google_place_id": "ChIJP1DywVuwAGARZEImqQpOtqQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 7.3352}, {"place_id": "kansai_0744", "prefecture_ja": "大阪府", "name_ja": "大阪市中央公会堂", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.3, "google_user_ratings_total": 4935, "google_primary_type": "event_venue", "google_place_id": "ChIJgRaozOfmAGARmWOBQQdKkDU", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 15.8815}, {"place_id": "kansai_0745", "prefecture_ja": "大阪府", "name_ja": "大阪市立住まいのミュージアム大阪くらしの今昔館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 8024, "google_primary_type": "museum", "google_place_id": "ChIJ7xEdT7nmAGARYQc8ZWRPI5Q", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.3984}, {"place_id": "kansai_0746", "prefecture_ja": "大阪府", "name_ja": "てんしば（天王寺公園）", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 2329, "google_primary_type": "park", "google_place_id": "ChIJpzILa_TdAGARVn8AZLYi-p4", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 5.6599}, {"place_id": "kansai_0747", "prefecture_ja": "大阪府", "name_ja": "天王寺動物園", "main_type": "culture", "sub_types_json": "[\"culture\", \"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 1, "google_rating": 4.1, "google_user_ratings_total": 17142, "google_primary_type": "zoo", "google_place_id": "ChIJVVWVxPXdAGARk6J-88X_gBo", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.3597}, {"place_id": "kansai_0748", "prefecture_ja": "大阪府", "name_ja": "大阪歴史博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 6632, "google_primary_type": "museum", "google_place_id": "ChIJR5zaJTLnAGARyuJ_yX2DhOk", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 16.0512}, {"place_id": "kansai_0749", "prefecture_ja": "大阪府", "name_ja": "大阪市立自然史博物館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.2, "google_user_ratings_total": 2945, "google_primary_type": "museum", "google_place_id": "ChIJDXa8qOjmAGARGeBCBnhGKOY", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.5708}, {"place_id": "kansai_0750", "prefecture_ja": "大阪府", "name_ja": "大阪市立東洋陶磁美術館", "main_type": "culture", "sub_types_json": "[\"culture\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 1, "type_entertainment": 0, "google_rating": 4.4, "google_user_ratings_total": 1474, "google_primary_type": "art_museum", "google_place_id": "ChIJhQQzld3mAGAR1oYbB9a77vQ", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 13.9427}, {"place_id": "kansai_0760", "prefecture_ja": "大阪府", "name_ja": "新幹線公園", "main_type": "entertainment", "sub_types_json": "[\"entertainment\"]", "type_shopping": 0, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 3.8, "google_user_ratings_total": 482, "google_primary_type": "city_park", "google_place_id": "ChIJfxPAxk3iAGARyq0SkeKlkTc", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 10.199}, {"place_id": "kansai_0761", "prefecture_ja": "大阪府", "name_ja": "大阪駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.1, "google_user_ratings_total": 4260, "google_primary_type": "train_station", "google_place_id": "ChIJC6fjlY3mAGARSshZ6CLIrhs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.8806}, {"place_id": "kansai_0762", "prefecture_ja": "大阪府", "name_ja": "大阪難波駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.9, "google_user_ratings_total": 767, "google_primary_type": "train_station", "google_place_id": "ChIJS5Bp-xLnAGARY0sWE2da7Zs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 11.2529}, {"place_id": "kansai_0763", "prefecture_ja": "大阪府", "name_ja": "新大阪駅", "main_type": "shopping", "sub_types_json": "[\"shopping\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 4.0, "google_user_ratings_total": 5245, "google_primary_type": "transit_station", "google_place_id": "ChIJSc4SbDnkAGARz3YQv-DE1zs", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 14.8793}, {"place_id": "kansai_0764", "prefecture_ja": "大阪府", "name_ja": "関西空港", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"entertainment\"]", "type_shopping": 1, "type_nature": 0, "type_food": 0, "type_culture": 0, "type_entertainment": 1, "google_rating": 4.0, "google_user_ratings_total": 20690, "google_primary_type": "international_airport", "google_place_id": "ChIJ9_rNIxO5AGARiI-QjZ-ncfE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 17.2631}, {"place_id": "kansai_0765", "prefecture_ja": "大阪府", "name_ja": "南海高野線堺東駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 324, "google_primary_type": "train_station", "google_place_id": "ChIJQyS14IbcAGARLWr0DtECvls", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.0428}, {"place_id": "kansai_0768", "prefecture_ja": "大阪府", "name_ja": "大阪メトロ谷町4丁目駅", "main_type": "shopping", "sub_types_json": "[\"shopping\", \"nature\"]", "type_shopping": 1, "type_nature": 1, "type_food": 0, "type_culture": 0, "type_entertainment": 0, "google_rating": 3.6, "google_user_ratings_total": 365, "google_primary_type": "transit_station", "google_place_id": "ChIJm2-JOzDnAGARI0zgtwXdhOE", "decision": "AUTO_ACCEPT", "verify_action": "REPLACE_WITH_RETRY", "popularity_score": 9.2285}];
const TYPE_LABELS = {
 shopping: '购物',
 nature: '自然',
 food: '美食',
 culture: '文化',
 entertainment: '娱乐'
};

let currentLanguage = 'zh';

function getAttractionName(item) {
  if (!item) return '';
  if (item.names) {
    return item.names[currentLanguage] || item.names.zh || item.names.ja || item.name || '';
  }
  return item.name || '';
}

const POI_NAME_I18N = {
  "伊勢神宮外宮（豊受大神宮）": {
    "zh": "伊势神宫外宫（丰受大神宫）",
    "en": "Toyouke Daijingu (Ise Grand Shrine Outer Shrine)",
    "ja": "伊勢神宮外宮（豊受大神宮）"
  },
  "猿田彦神社": {
    "zh": "猿田彦神社",
    "en": "Sarutahiko Shrine",
    "ja": "猿田彦神社"
  },
  "神宮徴古館・農業館・美術館": {
    "zh": "神宫征古馆、农业馆与美术馆",
    "en": "Jingu Chokokan Museum, Agricultural Museum, and Art Museum",
    "ja": "神宮徴古館・農業館・美術館"
  },
  "伊勢神宮・別宮 倭姫宮": {
    "zh": "伊势神宫别宫 倭姬宫",
    "en": "Yamatohime-no-miya Shrine",
    "ja": "伊勢神宮・別宮 倭姫宮"
  },
  "伊勢神宮・別宮 月読宮": {
    "zh": "伊势神宫别宫 月读宫",
    "en": "Tsukuyomi-no-miya Shrine",
    "ja": "伊勢神宮・別宮 月読宮"
  },
  "古市・麻吉旅館": {
    "zh": "古市・麻吉旅馆",
    "en": "Furuichi Asakichiryokan",
    "ja": "古市・麻吉旅館"
  },
  "夢古道おわせ 夢古道の湯": {
    "zh": "夢古道おわせ 夢古道の湯",
    "en": "Yumekodowase Yumekodonoyu",
    "ja": "夢古道おわせ 夢古道の湯"
  },
  "夢古道おわせ 海鮮レストラン イサバヤ": {
    "zh": "夢古道おわせ 海鮮レストラン イサバヤ",
    "en": "Yumekodowase Kaisenresutoran Isabaya",
    "ja": "夢古道おわせ 海鮮レストラン イサバヤ"
  },
  "アスピア玉城": {
    "zh": "アスピア玉城",
    "en": "Asupiatamaki Castle",
    "ja": "アスピア玉城"
  },
  "田丸城跡": {
    "zh": "田丸城遗址",
    "en": "Tamaru Castle Ruins",
    "ja": "田丸城跡"
  },
  "朝日町博物館": {
    "zh": "朝日町博物馆",
    "en": "Asahimachi Museum",
    "ja": "朝日町博物館"
  },
  "いなべ阿下喜ベース": {
    "zh": "いなべ阿下喜ベース",
    "en": "Inabeagekibesu",
    "ja": "いなべ阿下喜ベース"
  },
  "にぎわいの森": {
    "zh": "にぎわいの森",
    "en": "Nigiwainomori",
    "ja": "にぎわいの森"
  },
  "やまてらす-FUJIWARA OUTDOOR LIVING-": {
    "zh": "やまてらす-FUJIWARA OUTDOOR LIVING-",
    "en": "Yamaterasu Fujiwara Otdor Living",
    "ja": "やまてらす-FUJIWARA OUTDOOR LIVING-"
  },
  "青川峡キャンピングパーク": {
    "zh": "青川峡キャンピングパーク",
    "en": "Aokawakyokyampingupaku",
    "ja": "青川峡キャンピングパーク"
  },
  "いなべ市農業公園 梅林公園": {
    "zh": "いなべ市農業公園 梅林公園",
    "en": "Inabeshinogyokoen Umebayashi Park",
    "ja": "いなべ市農業公園 梅林公園"
  },
  "関宿": {
    "zh": "関宿",
    "en": "Sekiyado",
    "ja": "関宿"
  },
  "忍者修行体験 忍者の森": {
    "zh": "忍者修行体験 忍者の森",
    "en": "Ninjashugyotaiken Ninjanomori",
    "ja": "忍者修行体験 忍者の森"
  },
  "伊勢山上（飯福田寺）": {
    "zh": "伊勢山上（飯福田寺）",
    "en": "Iseyamaue Meshifukudaji",
    "ja": "伊勢山上（飯福田寺）"
  },
  "本居宣長記念館・鈴屋": {
    "zh": "本居宣長纪念馆・鈴屋",
    "en": "Motorinorinagakinenkan Suzunoya",
    "ja": "本居宣長記念館・鈴屋"
  },
  "松坂城跡（松阪公園）": {
    "zh": "松坂城遗址（松阪公园）",
    "en": "Matsusakashiroato Matsusakakoen",
    "ja": "松坂城跡（松阪公園）"
  },
  "紀宝町飛雪の滝キャンプ場": {
    "zh": "紀宝町飛雪の滝キャンプ場",
    "en": "Kihomachihisetsunotakikyampuba",
    "ja": "紀宝町飛雪の滝キャンプ場"
  },
  "紀宝町ウミガメ公園": {
    "zh": "紀宝町ウミガメ公園",
    "en": "Kihomachiumigame Park",
    "ja": "紀宝町ウミガメ公園"
  },
  "道の駅海山": {
    "zh": "道の駅海山",
    "en": "Michinoekiumiyama",
    "ja": "道の駅海山"
  },
  "道の駅紀伊長島マンボウ": {
    "zh": "道の駅紀伊長島マンボウ",
    "en": "Michinoekikinagashimamanbo",
    "ja": "道の駅紀伊長島マンボウ"
  },
  "銚子川": {
    "zh": "銚子川",
    "en": "Choshikawa",
    "ja": "銚子川"
  },
  "キャンプinn海山": {
    "zh": "キャンプinn海山",
    "en": "Kyampuinnumiyama",
    "ja": "キャンプinn海山"
  },
  "きいながしま古里温泉": {
    "zh": "きいながしま古里温泉",
    "en": "Kinagashimafurusat Onsen",
    "ja": "きいながしま古里温泉"
  },
  "紀伊の松島": {
    "zh": "紀伊の松島",
    "en": "Kinomatsushima",
    "ja": "紀伊の松島"
  },
  "高塚山展望台": {
    "zh": "高塚山展望台",
    "en": "Takatsukayamatenbodai",
    "ja": "高塚山展望台"
  },
  "象の背": {
    "zh": "象の背",
    "en": "Zonose",
    "ja": "象の背"
  },
  "愛洲の館": {
    "zh": "愛洲の館",
    "en": "Aisunokan",
    "ja": "愛洲の館"
  },
  "浮島パークなんとう": {
    "zh": "浮島パークなんとう",
    "en": "Fushimapakunanto",
    "ja": "浮島パークなんとう"
  },
  "南海展望台": {
    "zh": "南海展望台",
    "en": "Nankaitenbodai",
    "ja": "南海展望台"
  },
  "中ノ磯展望台": {
    "zh": "中ノ磯展望台",
    "en": "Nakanoisotenbodai",
    "ja": "中ノ磯展望台"
  },
  "見江島展望台（ハートの入り江）": {
    "zh": "見江島展望台（ハートの入り江）",
    "en": "Kenejimatenbodai Hatonoirie",
    "ja": "見江島展望台（ハートの入り江）"
  },
  "道の駅奥伊勢おおだい": {
    "zh": "道の駅奥伊勢おおだい",
    "en": "Michinoekiokuiseodai",
    "ja": "道の駅奥伊勢おおだい"
  },
  "大杉谷登山道 （大杉谷登山センター）": {
    "zh": "大杉谷登山道 （大杉谷登山センター）",
    "en": "Osugitanitozando Osugitanitozansenta",
    "ja": "大杉谷登山道 （大杉谷登山センター）"
  },
  "御在所ロープウエイ": {
    "zh": "御在所索道",
    "en": "Ozaishoropuei",
    "ja": "御在所ロープウエイ"
  },
  "伊賀上野城": {
    "zh": "伊賀上野城",
    "en": "Igauenoshiro Castle",
    "ja": "伊賀上野城"
  },
  "伊賀流忍者博物館": {
    "zh": "伊賀流忍者博物馆",
    "en": "Igaryuninja Museum",
    "ja": "伊賀流忍者博物館"
  },
  "鳥羽展望台": {
    "zh": "鳥羽展望台",
    "en": "Tobatenbodai",
    "ja": "鳥羽展望台"
  },
  "鳥羽市立海の博物館": {
    "zh": "鳥羽市立海の博物馆",
    "en": "Tobashiritsumino Museum",
    "ja": "鳥羽市立海の博物館"
  },
  "鳥羽水族館": {
    "zh": "鸟羽水族馆",
    "en": "Toba Aquarium",
    "ja": "鳥羽水族館"
  },
  "オハイ": {
    "zh": "オハイ",
    "en": "Ohai",
    "ja": "オハイ"
  },
  "三木里ビーチ": {
    "zh": "三木里ビーチ",
    "en": "Mikisatobichi",
    "ja": "三木里ビーチ"
  },
  "尾鷲イタダキ市": {
    "zh": "尾鷲イタダキ市",
    "en": "Owaseitadakishi",
    "ja": "尾鷲イタダキ市"
  },
  "土井竹林": {
    "zh": "土井竹林",
    "en": "Tsuchichikurin",
    "ja": "土井竹林"
  },
  "尾鷲神社": {
    "zh": "尾鷲神社",
    "en": "Owase Shrine",
    "ja": "尾鷲神社"
  },
  "香落渓": {
    "zh": "香落渓",
    "en": "Kyochikei",
    "ja": "香落渓"
  },
  "赤目四十八滝": {
    "zh": "赤目四十八瀑布",
    "en": "Akameshijuhachi Falls",
    "ja": "赤目四十八滝"
  },
  "道の駅「飯高駅」": {
    "zh": "道の駅「飯高駅」",
    "en": "Michinoeki Idakaeki",
    "ja": "道の駅「飯高駅」"
  },
  "深野だんだん田": {
    "zh": "深野だんだん田",
    "en": "Fukanodandanta",
    "ja": "深野だんだん田"
  },
  "松阪農業公園ベルファーム": {
    "zh": "松阪農業公園ベルファーム",
    "en": "Matsusakanogyokoenberufuamu",
    "ja": "松阪農業公園ベルファーム"
  },
  "文化財センター「はにわ館」": {
    "zh": "文化財センター「はにわ館」",
    "en": "Bunkazaisenta Haniwakan",
    "ja": "文化財センター「はにわ館」"
  },
  "原田二郎旧宅": {
    "zh": "原田二郎旧宅",
    "en": "Haradajirokyutaku",
    "ja": "原田二郎旧宅"
  },
  "旧小津清左衛門家": {
    "zh": "旧小津清左衛門家",
    "en": "Kyuozuseizaemonie",
    "ja": "旧小津清左衛門家"
  },
  "旧長谷川治郎兵衛家": {
    "zh": "旧長谷川治郎兵衛家",
    "en": "Kyuhasegawajirobeie",
    "ja": "旧長谷川治郎兵衛家"
  },
  "松阪もめん手織りセンター": {
    "zh": "松阪もめん手織りセンター",
    "en": "Matsusakamomenteoririsenta",
    "ja": "松阪もめん手織りセンター"
  },
  "豪商のまち松阪観光交流センター": {
    "zh": "豪商のまち松阪観光交流センター",
    "en": "Goshonomachimatsusakakankokoryusenta",
    "ja": "豪商のまち松阪観光交流センター"
  },
  "御城番屋敷": {
    "zh": "御城番屋敷",
    "en": "Ojobanyashiki",
    "ja": "御城番屋敷"
  },
  "おはらい町": {
    "zh": "御祓町",
    "en": "Oharai-machi",
    "ja": "おはらい町"
  },
  "夫婦岩": {
    "zh": "夫妇岩",
    "en": "Meoto Iwa",
    "ja": "夫婦岩"
  },
  "伊勢神宮内宮（皇大神宮）": {
    "zh": "伊勢神宫内宮（皇大神宫）",
    "en": "Isejingunaigu Kodaijinmiya",
    "ja": "伊勢神宮内宮（皇大神宮）"
  },
  "賢島駅": {
    "zh": "賢島駅",
    "en": "Satoshishimaeki",
    "ja": "賢島駅"
  },
  "近鉄・五十鈴川駅": {
    "zh": "近鉄・五十鈴川駅",
    "en": "Kintetsu Isuzugawaeki",
    "ja": "近鉄・五十鈴川駅"
  },
  "福井県立若狭歴史博物館": {
    "zh": "福井县立若狭歴史博物馆",
    "en": "Fukuikenritsuwakasarekishi Museum",
    "ja": "福井県立若狭歴史博物館"
  },
  "羽賀寺": {
    "zh": "羽賀寺",
    "en": "Haga Temple",
    "ja": "羽賀寺"
  },
  "鵜の瀬": {
    "zh": "鵜の瀬",
    "en": "Unose",
    "ja": "鵜の瀬"
  },
  "福井県立恐竜博物館": {
    "zh": "福井县立恐竜博物馆",
    "en": "Fukuikenritsukyoryu Museum",
    "ja": "福井県立恐竜博物館"
  },
  "道の駅「うみんぴあ大飯」": {
    "zh": "道の駅「うみんぴあ大飯」",
    "en": "Michinoeki Umimpiaoi",
    "ja": "道の駅「うみんぴあ大飯」"
  },
  "三方五湖レインボーライン": {
    "zh": "三方五湖レインボーライン",
    "en": "Mikatagomizumireinborain",
    "ja": "三方五湖レインボーライン"
  },
  "ツリーピクニックアドベンチャーいけだ": {
    "zh": "ツリーピクニックアドベンチャーいけだ",
    "en": "Tsuripikunikkuadobenchaikeda",
    "ja": "ツリーピクニックアドベンチャーいけだ"
  },
  "あわら温泉": {
    "zh": "あわら温泉",
    "en": "Awara Onsen",
    "ja": "あわら温泉"
  },
  "東尋坊": {
    "zh": "东寻坊",
    "en": "Tojinbo Cliffs",
    "ja": "東尋坊"
  },
  "一乗谷朝倉氏遺跡博物館": {
    "zh": "一乗谷朝倉氏遺跡博物馆",
    "en": "Ichijotaniasakurashiseki Museum",
    "ja": "一乗谷朝倉氏遺跡博物館"
  },
  "福井駅恐竜広場": {
    "zh": "福井駅恐竜広場",
    "en": "Fukuiekikyoryuhiroba",
    "ja": "福井駅恐竜広場"
  },
  "めがねミュージアム": {
    "zh": "めがねミュージアム",
    "en": "Meganemyujiamu",
    "ja": "めがねミュージアム"
  },
  "かずら橋": {
    "zh": "かずら橋",
    "en": "Kazurahashi Bridge",
    "ja": "かずら橋"
  },
  "白山平泉寺 / 平泉寺白山神社": {
    "zh": "白山平泉寺 / 平泉寺白山神社",
    "en": "Hakusanhiraizumiji Hiraizumijihakusan Shrine",
    "ja": "白山平泉寺 / 平泉寺白山神社"
  },
  "越前大野城": {
    "zh": "越前大野城",
    "en": "Echizenono Castle",
    "ja": "越前大野城"
  },
  "名勝 蘇洞門": {
    "zh": "名勝 蘇洞門",
    "en": "Meisho Sotomo",
    "ja": "名勝 蘇洞門"
  },
  "気比神宮": {
    "zh": "気比神宫",
    "en": "Kehi Shrine",
    "ja": "気比神宮"
  },
  "名勝 養浩館庭園": {
    "zh": "名勝 養浩馆庭园",
    "en": "Meisho Yokokan Garden",
    "ja": "名勝 養浩館庭園"
  },
  "熊川宿": {
    "zh": "熊川宿",
    "en": "Kumakawayado",
    "ja": "熊川宿"
  },
  "UMIKARA": {
    "zh": "UMIKARA",
    "en": "Umikara",
    "ja": "UMIKARA"
  },
  "越前海岸": {
    "zh": "越前海岸",
    "en": "Echizen Coast",
    "ja": "越前海岸"
  },
  "北前船主の館 右近家": {
    "zh": "北前船主の馆 右近家",
    "en": "Kitamaefunanushinokan Ukonie",
    "ja": "北前船主の館 右近家"
  },
  "大本山 永平寺": {
    "zh": "大本山 永平寺",
    "en": "Omotoyama Eihei Temple",
    "ja": "大本山 永平寺"
  },
  "丸岡城": {
    "zh": "丸岡城",
    "en": "Maruoka Castle",
    "ja": "丸岡城"
  },
  "越前和紙の里": {
    "zh": "越前和紙の里",
    "en": "Echizenwashinosato",
    "ja": "越前和紙の里"
  },
  "小浜駅": {
    "zh": "小浜駅",
    "en": "Obamaeki",
    "ja": "小浜駅"
  },
  "敦賀駅": {
    "zh": "敦賀駅",
    "en": "Tsurugaeki",
    "ja": "敦賀駅"
  },
  "福井駅": {
    "zh": "福井駅",
    "en": "Fukuieki",
    "ja": "福井駅"
  },
  "芦原温泉駅": {
    "zh": "芦原温泉駅",
    "en": "Ashiharaonseneki",
    "ja": "芦原温泉駅"
  },
  "比叡山延暦寺": {
    "zh": "比叡山延历寺",
    "en": "Enryaku-ji Temple on Mount Hiei",
    "ja": "比叡山延暦寺"
  },
  "満月寺 浮御堂": {
    "zh": "満月寺 浮御堂",
    "en": "Mangetsuji Fumido",
    "ja": "満月寺 浮御堂"
  },
  "彦根城": {
    "zh": "彦根城",
    "en": "Hikone Castle",
    "ja": "彦根城"
  },
  "ミシガンクルーズ": {
    "zh": "ミシガンクルーズ",
    "en": "Mishigankuruzu",
    "ja": "ミシガンクルーズ"
  },
  "安土城址": {
    "zh": "安土城遗址",
    "en": "Azuchijoshi Castle Ruins",
    "ja": "安土城址"
  },
  "生水の郷": {
    "zh": "生水の郷",
    "en": "Namamizunosato",
    "ja": "生水の郷"
  },
  "膳所城跡公園": {
    "zh": "膳所城遗址公园",
    "en": "Zezeshiroato Park",
    "ja": "膳所城跡公園"
  },
  "大津城址": {
    "zh": "大津城遗址",
    "en": "Otsujoshi Castle Ruins",
    "ja": "大津城址"
  },
  "苗村神社": {
    "zh": "苗村神社",
    "en": "Naemura Shrine",
    "ja": "苗村神社"
  },
  "滋賀県立美術館": {
    "zh": "滋賀县立美术馆",
    "en": "Shigakentachi Art Museum",
    "ja": "滋賀県立美術館"
  },
  "太郎坊宮": {
    "zh": "太郎坊宮",
    "en": "Tarobomiya",
    "ja": "太郎坊宮"
  },
  "永源寺温泉 八風の湯": {
    "zh": "永源寺温泉 八風の湯",
    "en": "Eigenjionsen Happunoyu",
    "ja": "永源寺温泉 八風の湯"
  },
  "世界凧博物館 東近江大凧会館": {
    "zh": "世界凧博物馆 東近江大凧会馆",
    "en": "Sekaitakohakubutsukan Higashiomiodakokaikan",
    "ja": "世界凧博物館 東近江大凧会館"
  },
  "佐和山城跡": {
    "zh": "佐和山城遗址",
    "en": "Sawayama Castle Ruins",
    "ja": "佐和山城跡"
  },
  "多景島": {
    "zh": "多景島",
    "en": "Takeishima",
    "ja": "多景島"
  },
  "玄宮楽々園": {
    "zh": "玄宮楽々園",
    "en": "Genkyurakurakusono",
    "ja": "玄宮楽々園"
  },
  "ａｉ彩ひろば": {
    "zh": "ａｉ彩ひろば",
    "en": "Aisaihiroba",
    "ja": "ａｉ彩ひろば"
  },
  "岡村本家": {
    "zh": "岡村本家",
    "en": "Okamurahonke",
    "ja": "岡村本家"
  },
  "道の駅 竜王かがみの里": {
    "zh": "道の駅 竜王かがみの里",
    "en": "Michinoeki Ryuokagaminosato",
    "ja": "道の駅 竜王かがみの里"
  },
  "百済寺": {
    "zh": "百済寺",
    "en": "Kudara Temple",
    "ja": "百済寺"
  },
  "草津市立水生植物公園みずの森": {
    "zh": "草津市立水生植物公園みずの森",
    "en": "Kusatsushiritsusuiseishokubutsukoenmizunomori",
    "ja": "草津市立水生植物公園みずの森"
  },
  "いぶき薬草湯（伊吹薬草の里文化センター）": {
    "zh": "いぶき薬草湯（伊吹薬草の里文化センター）",
    "en": "Ibukiyakusoyu Ibukiyakusonoribunkasenta",
    "ja": "いぶき薬草湯（伊吹薬草の里文化センター）"
  },
  "清瀧寺徳源院": {
    "zh": "清泷寺徳源院",
    "en": "Kiyotakijitokugenin",
    "ja": "清瀧寺徳源院"
  },
  "BIG・BRETH": {
    "zh": "BIG・BRETH",
    "en": "Big Breth",
    "ja": "BIG・BRETH"
  },
  "伊藤忠兵衛記念館": {
    "zh": "伊藤忠兵衛記念馆",
    "en": "Itochube Memorial Museum",
    "ja": "伊藤忠兵衛記念館"
  },
  "豊郷小学校旧校舎群": {
    "zh": "豊郷小学校旧校舎群",
    "en": "Toyosatoshogakkokyukoshagun",
    "ja": "豊郷小学校旧校舎群"
  },
  "河内の風穴": {
    "zh": "河内の風穴",
    "en": "Kawauchinokazana",
    "ja": "河内の風穴"
  },
  "道の駅 せせらぎの里こうら": {
    "zh": "道の駅 せせらぎの里こうら",
    "en": "Michinoeki Seseraginosatokora",
    "ja": "道の駅 せせらぎの里こうら"
  },
  "石馬寺": {
    "zh": "石馬寺",
    "en": "Sekiba Temple",
    "ja": "石馬寺"
  },
  "道の駅 アグリパーク竜王": {
    "zh": "道の駅 アグリパーク竜王",
    "en": "Michinoeki Aguripakuryuo",
    "ja": "道の駅 アグリパーク竜王"
  },
  "滋賀農業公園ブルーメの丘": {
    "zh": "滋賀農業公園ブルーメの丘",
    "en": "Shiganogyokoenburumenoka",
    "ja": "滋賀農業公園ブルーメの丘"
  },
  "コテージ＆オートキャンプ場グリム冒険の森": {
    "zh": "コテージ＆オートキャンプ場グリム冒険の森",
    "en": "Koteji&otokyampubagurimubokennomori",
    "ja": "コテージ＆オートキャンプ場グリム冒険の森"
  },
  "五個荘近江商人屋敷": {
    "zh": "五個荘近江商人屋敷",
    "en": "Gokashomishoninyashiki",
    "ja": "五個荘近江商人屋敷"
  },
  "十二坊温泉ゆらら・十二坊温泉ファミリーキャンプ場": {
    "zh": "十二坊温泉ゆらら・十二坊温泉ファミリーキャンプ場",
    "en": "Junibonsenyurara Junibonsenfuamirikyampuba",
    "ja": "十二坊温泉ゆらら・十二坊温泉ファミリーキャンプ場"
  },
  "滋賀県立陶芸の森": {
    "zh": "滋賀县立陶芸の森",
    "en": "Shigakenritsutogeinomori",
    "ja": "滋賀県立陶芸の森"
  },
  "甲賀流リアル忍者館": {
    "zh": "甲賀流リアル忍者館",
    "en": "Kogaryuriaruninjakan",
    "ja": "甲賀流リアル忍者館"
  },
  "甲賀の里忍術村": {
    "zh": "甲賀の里忍术村",
    "en": "Kokanosatoninjutsumura",
    "ja": "甲賀の里忍術村"
  },
  "善水寺": {
    "zh": "善水寺",
    "en": "Zenmizu Temple",
    "ja": "善水寺"
  },
  "長寿寺": {
    "zh": "長寿寺",
    "en": "Choju Temple",
    "ja": "長寿寺"
  },
  "常楽寺": {
    "zh": "常楽寺",
    "en": "Joraku Temple",
    "ja": "常楽寺"
  },
  "びわこ地球市民の森": {
    "zh": "びわこ地球市民の森",
    "en": "Biwakochikyushiminnomori",
    "ja": "びわこ地球市民の森"
  },
  "佐川美術館": {
    "zh": "佐川美术馆",
    "en": "Sagawa Art Museum",
    "ja": "佐川美術館"
  },
  "国指定史跡草津宿本陣": {
    "zh": "国指定史跡草津宿本陣",
    "en": "Kunishiteishisekikusatsuyadohonjin",
    "ja": "国指定史跡草津宿本陣"
  },
  "琵琶湖博物館": {
    "zh": "琵琶湖博物馆",
    "en": "Biwako Museum",
    "ja": "琵琶湖博物館"
  },
  "Ogama（陶芸体験）": {
    "zh": "Ogama（陶芸体験）",
    "en": "Ogama Togeitaiken",
    "ja": "Ogama（陶芸体験）"
  },
  "MIHO MUSEUM": {
    "zh": "MIHO MUSEUM",
    "en": "Miho Museum",
    "ja": "MIHO MUSEUM"
  },
  "海洋堂フィギュアミュージアム黒壁": {
    "zh": "海洋堂フィギュアミュージアム黒壁",
    "en": "Kaiyodofuigyuamyujiamukurokabe",
    "ja": "海洋堂フィギュアミュージアム黒壁"
  },
  "びわこ箱館山": {
    "zh": "びわこ箱館山",
    "en": "Biwakohakodateyama",
    "ja": "びわこ箱館山"
  },
  "びわ湖テラス": {
    "zh": "びわ湖テラス",
    "en": "Biwamizumiterasu",
    "ja": "びわ湖テラス"
  },
  "三井寺（園城寺）": {
    "zh": "三井寺（園城寺）",
    "en": "Mitsuiji Onjoji",
    "ja": "三井寺（園城寺）"
  },
  "竹生島": {
    "zh": "竹生島",
    "en": "Takeoshima",
    "ja": "竹生島"
  },
  "白鬚神社": {
    "zh": "白鬚神社",
    "en": "Shirahige Shrine",
    "ja": "白鬚神社"
  },
  "近江神宮": {
    "zh": "近江神宫",
    "en": "Omi Shrine",
    "ja": "近江神宮"
  },
  "大津駅": {
    "zh": "大津駅",
    "en": "Otsueki",
    "ja": "大津駅"
  },
  "米原駅": {
    "zh": "米原駅",
    "en": "Maibaraeki",
    "ja": "米原駅"
  },
  "近江塩津駅": {
    "zh": "近江塩津駅",
    "en": "Omishiotsueki",
    "ja": "近江塩津駅"
  },
  "比叡山坂本駅": {
    "zh": "比叡山坂本駅",
    "en": "Hieizansakamotoeki",
    "ja": "比叡山坂本駅"
  },
  "近江八幡駅": {
    "zh": "近江八幡駅",
    "en": "Omihachimaneki",
    "ja": "近江八幡駅"
  },
  "伊根の舟屋": {
    "zh": "伊根舟屋",
    "en": "Funaya Boat Houses of Ine",
    "ja": "伊根の舟屋"
  },
  "天橋立": {
    "zh": "天桥立",
    "en": "Amanohashidate",
    "ja": "天橋立"
  },
  "宇治市観光センター（対鳳庵）": {
    "zh": "宇治市観光センター（対鳳庵）",
    "en": "Ujishikankosenta Tsuiotoriori",
    "ja": "宇治市観光センター（対鳳庵）"
  },
  "宇治十帖モニュメント": {
    "zh": "宇治十帖モニュメント",
    "en": "Ujijuchomonyumento",
    "ja": "宇治十帖モニュメント"
  },
  "宇治神社": {
    "zh": "宇治神社",
    "en": "Uji Shrine",
    "ja": "宇治神社"
  },
  "宇治上神社": {
    "zh": "宇治上神社",
    "en": "Ujiue Shrine",
    "ja": "宇治上神社"
  },
  "源氏物語ミュージアム": {
    "zh": "源氏物語ミュージアム",
    "en": "Genjimonogatarimyujiamu",
    "ja": "源氏物語ミュージアム"
  },
  "月桂冠大倉記念館": {
    "zh": "月桂冠大倉記念馆",
    "en": "Gekkeikanokura Memorial Museum",
    "ja": "月桂冠大倉記念館"
  },
  "寺田屋": {
    "zh": "寺田屋",
    "en": "Teradaya",
    "ja": "寺田屋"
  },
  "大成古墳群": {
    "zh": "大成古墳群",
    "en": "Taiseikofungun",
    "ja": "大成古墳群"
  },
  "道の駅「てんきてんき丹後」": {
    "zh": "道の駅「てんきてんき丹後」",
    "en": "Michinoeki Tenkitenkitango",
    "ja": "道の駅「てんきてんき丹後」"
  },
  "銀閣寺": {
    "zh": "银阁寺",
    "en": "Ginkaku-ji Temple",
    "ja": "銀閣寺"
  },
  "永観堂（禅林寺）": {
    "zh": "永観堂（禅林寺）",
    "en": "Eikando Zenrinji",
    "ja": "永観堂（禅林寺）"
  },
  "琵琶湖疏水記念館": {
    "zh": "琵琶湖疏水記念馆",
    "en": "Biwakososui Memorial Museum",
    "ja": "琵琶湖疏水記念館"
  },
  "平安神宮": {
    "zh": "平安神宫",
    "en": "Heian Shrine",
    "ja": "平安神宮"
  },
  "京都国立近代美術館": {
    "zh": "京都国立近代美术馆",
    "en": "Kyotokokuritsukindai Art Museum",
    "ja": "京都国立近代美術館"
  },
  "三栖閘門・三栖閘門資料館": {
    "zh": "三栖閘門・三栖閘門资料馆",
    "en": "Misukomon Misukomonshiryokan Museum",
    "ja": "三栖閘門・三栖閘門資料館"
  },
  "御香宮神社": {
    "zh": "御香宮神社",
    "en": "Okaorimiya Shrine",
    "ja": "御香宮神社"
  },
  "橋姫神社": {
    "zh": "橋姫神社",
    "en": "Hashihime Shrine",
    "ja": "橋姫神社"
  },
  "琴引浜鳴き砂文化館": {
    "zh": "琴引浜鳴き砂文化馆",
    "en": "Kotobikihamanakisunabunkakan",
    "ja": "琴引浜鳴き砂文化館"
  },
  "大原野神社": {
    "zh": "大原野神社",
    "en": "Oharano Shrine",
    "ja": "大原野神社"
  },
  "神護寺": {
    "zh": "神護寺",
    "en": "Shingo Temple",
    "ja": "神護寺"
  },
  "随心院": {
    "zh": "随心院",
    "en": "Zuishinin",
    "ja": "随心院"
  },
  "道の駅 ウッディー京北": {
    "zh": "道の駅 ウッディー京北",
    "en": "Michinoeki Uddeikeihoku",
    "ja": "道の駅 ウッディー京北"
  },
  "常照皇寺": {
    "zh": "常照皇寺",
    "en": "Joshoko Temple",
    "ja": "常照皇寺"
  },
  "浄住寺": {
    "zh": "浄住寺",
    "en": "Joju Temple",
    "ja": "浄住寺"
  },
  "高山寺": {
    "zh": "高山寺",
    "en": "Kozan Temple",
    "ja": "高山寺"
  },
  "三千院": {
    "zh": "三千院",
    "en": "Sanzenin",
    "ja": "三千院"
  },
  "里の駅大原": {
    "zh": "里の駅大原",
    "en": "Satonoekiohara",
    "ja": "里の駅大原"
  },
  "茶づな": {
    "zh": "茶づな",
    "en": "Chazuna",
    "ja": "茶づな"
  },
  "相槌神社": {
    "zh": "相槌神社",
    "en": "Aizuchi Shrine",
    "ja": "相槌神社"
  },
  "単伝庵（らくがき寺）": {
    "zh": "単伝庵（らくがき寺）",
    "en": "Tandeniori Rakugakiji",
    "ja": "単伝庵（らくがき寺）"
  },
  "飛行神社": {
    "zh": "飛行神社",
    "en": "Hiko Shrine",
    "ja": "飛行神社"
  },
  "神應寺": {
    "zh": "神應寺",
    "en": "Kamio Temple",
    "ja": "神應寺"
  },
  "善法律寺": {
    "zh": "善法律寺",
    "en": "Zemporitsu Temple",
    "ja": "善法律寺"
  },
  "正法寺": {
    "zh": "正法寺",
    "en": "Shobo Temple",
    "ja": "正法寺"
  },
  "京馬車": {
    "zh": "京馬車",
    "en": "Kyobasha",
    "ja": "京馬車"
  },
  "霧のテラス": {
    "zh": "霧のテラス",
    "en": "Kirinoterasu",
    "ja": "霧のテラス"
  },
  "京都丹波／亀岡 夢コスモス園": {
    "zh": "京都丹波／亀岡 夢コスモス園",
    "en": "Kyototamba Kameoka Yumekosumosusono",
    "ja": "京都丹波／亀岡 夢コスモス園"
  },
  "るり渓自然公園": {
    "zh": "るり渓自然公園",
    "en": "Rurikeishizen Park",
    "ja": "るり渓自然公園"
  },
  "七谷川の桜": {
    "zh": "七谷川の桜",
    "en": "Shichitanigawanosakura",
    "ja": "七谷川の桜"
  },
  "道の駅「和」": {
    "zh": "道の駅「和」",
    "en": "道の駅「和」",
    "ja": "道の駅「和」"
  },
  "日室ヶ獄遙拝所": {
    "zh": "日室ヶ獄遙拝所",
    "en": "Nichishitsukegokuyohaitokoro",
    "ja": "日室ヶ獄遙拝所"
  },
  "天岩戸神社": {
    "zh": "天岩戸神社",
    "en": "Teniwato Shrine",
    "ja": "天岩戸神社"
  },
  "保津川下り": {
    "zh": "保津川漂流",
    "en": "Hozugawa River Boat Ride",
    "ja": "保津川下り"
  },
  "美山かやぶきの里": {
    "zh": "美山かやぶきの里",
    "en": "Miyamakayabukinosato",
    "ja": "美山かやぶきの里"
  },
  "天王山": {
    "zh": "天王山",
    "en": "Tennozan",
    "ja": "天王山"
  },
  "柳谷観音（楊谷寺）": {
    "zh": "柳谷観音（楊谷寺）",
    "en": "Yanagitanikannon Yotaniji",
    "ja": "柳谷観音（楊谷寺）"
  },
  "乙訓寺": {
    "zh": "乙訓寺",
    "en": "Otokuni Temple",
    "ja": "乙訓寺"
  },
  "光明寺": {
    "zh": "光明寺",
    "en": "Komyo Temple",
    "ja": "光明寺"
  },
  "向日神社": {
    "zh": "向日神社",
    "en": "Mukogamisha Shrine",
    "ja": "向日神社"
  },
  "アサヒグループ大山崎山荘美術館": {
    "zh": "アサヒグループ大山崎山荘美術館",
    "en": "Asahigurupuoyamazakisanso Art Museum",
    "ja": "アサヒグループ大山崎山荘美術館"
  },
  "長岡天満宮": {
    "zh": "長岡天満宮",
    "en": "Nagaokatemmangu",
    "ja": "長岡天満宮"
  },
  "舞鶴港とれとれセンター": {
    "zh": "舞鶴港とれとれセンター",
    "en": "Maizuruminatotoretoresenta",
    "ja": "舞鶴港とれとれセンター"
  },
  "舟屋日和": {
    "zh": "舟屋日和",
    "en": "Funeyahiyori",
    "ja": "舟屋日和"
  },
  "福知山城": {
    "zh": "福知山城",
    "en": "Fukuchiyama Castle",
    "ja": "福知山城"
  },
  "金剛院": {
    "zh": "金剛院",
    "en": "Kongoin",
    "ja": "金剛院"
  },
  "あやべグンゼスクエア": {
    "zh": "あやべグンゼスクエア",
    "en": "Ayabegunzesukuea",
    "ja": "あやべグンゼスクエア"
  },
  "舞鶴赤レンガパーク": {
    "zh": "舞鶴赤レンガパーク",
    "en": "Maizuruakarengapaku",
    "ja": "舞鶴赤レンガパーク"
  },
  "天橋立 傘松公園": {
    "zh": "天橋立 傘松公园",
    "en": "Amanohashidate Kasamatsu Park",
    "ja": "天橋立 傘松公園"
  },
  "伊根湾めぐり遊覧船": {
    "zh": "伊根湾めぐり遊覧船",
    "en": "Inewanmeguriyuransen",
    "ja": "伊根湾めぐり遊覧船"
  },
  "けいはんな記念公園": {
    "zh": "けいはんな記念公園",
    "en": "Keihannakinen Park",
    "ja": "けいはんな記念公園"
  },
  "玉川の桜": {
    "zh": "玉川の桜",
    "en": "Tamagawanosakura",
    "ja": "玉川の桜"
  },
  "笠置寺": {
    "zh": "笠置寺",
    "en": "Kasagi Temple",
    "ja": "笠置寺"
  },
  "永谷宗円生家": {
    "zh": "永谷宗円生家",
    "en": "Nagatanisoenseika",
    "ja": "永谷宗円生家"
  },
  "光のページェント～TWINKLE JOYO～": {
    "zh": "光のページェント～TWINKLE JOYO～",
    "en": "Hikarinopejiento~twinkle Joyo~",
    "ja": "光のページェント～TWINKLE JOYO～"
  },
  "流れ橋": {
    "zh": "流れ橋",
    "en": "Nagarehashi Bridge",
    "ja": "流れ橋"
  },
  "背割堤のさくら": {
    "zh": "背割堤のさくら",
    "en": "Sewaritsutsuminosakura",
    "ja": "背割堤のさくら"
  },
  "三室戸寺": {
    "zh": "三室戸寺",
    "en": "Mimuroto Temple",
    "ja": "三室戸寺"
  },
  "酬恩庵一休寺": {
    "zh": "酬恩庵一休寺",
    "en": "Shuoniorikkyu Temple",
    "ja": "酬恩庵一休寺"
  },
  "石清水八幡宮": {
    "zh": "石清水八幡宮",
    "en": "Iwashimizuhachimangu",
    "ja": "石清水八幡宮"
  },
  "平等院": {
    "zh": "平等院",
    "en": "Byodo-in Temple",
    "ja": "平等院"
  },
  "浄瑠璃寺": {
    "zh": "浄瑠璃寺",
    "en": "Joruri Temple",
    "ja": "浄瑠璃寺"
  },
  "天空カフェ": {
    "zh": "天空カフェ",
    "en": "Tenkukafue",
    "ja": "天空カフェ"
  },
  "石寺の茶畑": {
    "zh": "石寺の茶畑",
    "en": "Ishideranochabatake",
    "ja": "石寺の茶畑"
  },
  "二条駅": {
    "zh": "二条駅",
    "en": "Nijoeki",
    "ja": "二条駅"
  },
  "ＪＲ京都駅": {
    "zh": "ＪＲ京都駅",
    "en": "Jrkyotoeki",
    "ja": "ＪＲ京都駅"
  },
  "宮津駅": {
    "zh": "宮津駅",
    "en": "Miyazueki",
    "ja": "宮津駅"
  },
  "西舞鶴駅": {
    "zh": "西舞鶴駅",
    "en": "Nishimaizurueki",
    "ja": "西舞鶴駅"
  },
  "京都駅": {
    "zh": "京都駅",
    "en": "Kyotoeki",
    "ja": "京都駅"
  },
  "三条駅": {
    "zh": "三条駅",
    "en": "Sanjoeki",
    "ja": "三条駅"
  },
  "JR宇治駅": {
    "zh": "JR宇治駅",
    "en": "Jrujieki",
    "ja": "JR宇治駅"
  },
  "京阪・伏見桃山駅": {
    "zh": "京阪・伏見桃山駅",
    "en": "Keihan Fushimimomoyamaeki",
    "ja": "京阪・伏見桃山駅"
  },
  "京都市営地下鉄東西線・東山駅": {
    "zh": "京都市営地下鉄東西線・東山駅",
    "en": "Kyotoshieichikatetsutozaisen Higashiyamaeki",
    "ja": "京都市営地下鉄東西線・東山駅"
  },
  "京都市バス・銀閣寺道バス停": {
    "zh": "京都市バス・銀閣寺道バス停",
    "en": "Kyotoshibasu Ginkakujimichibasutei",
    "ja": "京都市バス・銀閣寺道バス停"
  },
  "日本玩具博物館": {
    "zh": "日本玩具博物馆",
    "en": "Nippongangu Museum",
    "ja": "日本玩具博物館"
  },
  "姫路城": {
    "zh": "姬路城",
    "en": "Himeji Castle",
    "ja": "姫路城"
  },
  "書寫山圓教寺": {
    "zh": "書寫山圓教寺",
    "en": "Shoshayamaengyo Temple",
    "ja": "書寫山圓教寺"
  },
  "姫路城西御屋敷跡庭園 好古園": {
    "zh": "姫路城西御屋敷跡庭园 好古園",
    "en": "Himejijonishioyashikiatoteien Kokosono",
    "ja": "姫路城西御屋敷跡庭園 好古園"
  },
  "玄武洞公園・玄武洞ミュージアム": {
    "zh": "玄武洞公園・玄武洞ミュージアム",
    "en": "Gembuhorakoen Gembuhoramyujiamu",
    "ja": "玄武洞公園・玄武洞ミュージアム"
  },
  "太閤橋・ゆけむり広場": {
    "zh": "太閤橋・ゆけむり広場",
    "en": "Taikohashi Yukemurihiroba",
    "ja": "太閤橋・ゆけむり広場"
  },
  "鼓ヶ滝公園": {
    "zh": "鼓ヶ瀑布公园",
    "en": "Tsuzumiketakikosono Park",
    "ja": "鼓ヶ滝公園"
  },
  "湯泉神社": {
    "zh": "湯泉神社",
    "en": "Yuzen Shrine",
    "ja": "湯泉神社"
  },
  "瑞宝寺公園": {
    "zh": "瑞宝寺公园",
    "en": "Zuihoji Park",
    "ja": "瑞宝寺公園"
  },
  "塩田温泉": {
    "zh": "塩田温泉",
    "en": "Shioda Onsen",
    "ja": "塩田温泉"
  },
  "舞子海上プロムナード": {
    "zh": "舞子海上プロムナード",
    "en": "Maikokaijopuromunado",
    "ja": "舞子海上プロムナード"
  },
  "兵庫大仏（能福寺）": {
    "zh": "兵庫大仏（能福寺）",
    "en": "Hyogodaibutsu Nofukuji",
    "ja": "兵庫大仏（能福寺）"
  },
  "六甲高山植物園": {
    "zh": "六甲高山植物園",
    "en": "Rokkokozanshokubutsusono",
    "ja": "六甲高山植物園"
  },
  "ROKKO森の音ミュージアム": {
    "zh": "ROKKO森の音ミュージアム",
    "en": "Rokkomorinotomyujiamu",
    "ja": "ROKKO森の音ミュージアム"
  },
  "阪神・淡路大震災記念 人と未来防災センター": {
    "zh": "阪神・淡路大震災記念 人と未来防災センター",
    "en": "Hanshin Awajitaishinsaikinen Nintomiraibosaisenta",
    "ja": "阪神・淡路大震災記念 人と未来防災センター"
  },
  "菊正宗酒造記念館": {
    "zh": "菊正宗酒造記念馆",
    "en": "Kikumasamuneshuzo Memorial Museum",
    "ja": "菊正宗酒造記念館"
  },
  "沢の鶴資料館": {
    "zh": "沢の鶴资料馆",
    "en": "Sawanotsurushiryokan Museum",
    "ja": "沢の鶴資料館"
  },
  "白鶴酒造資料館": {
    "zh": "白鶴酒造資料馆",
    "en": "Hakutsurushuzoshiryokan Museum",
    "ja": "白鶴酒造資料館"
  },
  "ルミナス神戸２": {
    "zh": "ルミナス神戸２",
    "en": "Ruminasukobe2",
    "ja": "ルミナス神戸２"
  },
  "神戸リゾートクルーズ「boh boh KOBE」": {
    "zh": "神戸リゾートクルーズ「boh boh KOBE」",
    "en": "Koberizotokuruzu Boh Boh Kobe",
    "ja": "神戸リゾートクルーズ「boh boh KOBE」"
  },
  "豊岡市立コウノトリ文化館": {
    "zh": "豊岡市立コウノトリ文化館",
    "en": "Toyokashiritsukonotoribunkakan",
    "ja": "豊岡市立コウノトリ文化館"
  },
  "soraかさい": {
    "zh": "soraかさい",
    "en": "Sorakasai",
    "ja": "soraかさい"
  },
  "石の宝殿": {
    "zh": "石の宝殿",
    "en": "Ishinohoden",
    "ja": "石の宝殿"
  },
  "白雪ブルワリービレッジ長寿蔵": {
    "zh": "白雪ブルワリービレッジ長寿蔵",
    "en": "Shirayukiburuwaribirejjichojukura",
    "ja": "白雪ブルワリービレッジ長寿蔵"
  },
  "尼崎城": {
    "zh": "尼崎城",
    "en": "Amagasaki Castle",
    "ja": "尼崎城"
  },
  "コウノトリの郷公園": {
    "zh": "コウノトリの郷公園",
    "en": "Konotorinosato Park",
    "ja": "コウノトリの郷公園"
  },
  "明石海峡大橋": {
    "zh": "明石海峡大桥",
    "en": "Akashi Kaikyo Bridge",
    "ja": "明石海峡大橋"
  },
  "淡路人形座": {
    "zh": "淡路人形座",
    "en": "Awajiningyoza",
    "ja": "淡路人形座"
  },
  "株式会社たぶち農場": {
    "zh": "株式会社たぶち農場",
    "en": "Kabushikigaishatabuchinojo",
    "ja": "株式会社たぶち農場"
  },
  "玄武洞ミュージアム": {
    "zh": "玄武洞ミュージアム",
    "en": "Gembuhoramyujiamu",
    "ja": "玄武洞ミュージアム"
  },
  "豊岡市立植村直己冒険館": {
    "zh": "豊岡市立植村直己冒険馆",
    "en": "Toyokashiritsuemuranaokibokenkan",
    "ja": "豊岡市立植村直己冒険館"
  },
  "豊岡市立出石永楽館": {
    "zh": "豊岡市立出石永楽馆",
    "en": "Toyokashiritsuizushieirakukan",
    "ja": "豊岡市立出石永楽館"
  },
  "豊岡市立玄武洞公園": {
    "zh": "豊岡市立玄武洞公园",
    "en": "Toyokashiritsugembuhora Park",
    "ja": "豊岡市立玄武洞公園"
  },
  "リフレッシュパーク市川": {
    "zh": "リフレッシュパーク市川",
    "en": "Rifuresshupakuichikawa",
    "ja": "リフレッシュパーク市川"
  },
  "姫路市立美術館": {
    "zh": "姫路市立美术馆",
    "en": "Himejishitachi Art Museum",
    "ja": "姫路市立美術館"
  },
  "大野アルプスランド": {
    "zh": "大野アルプスランド",
    "en": "Onoarupusurando",
    "ja": "大野アルプスランド"
  },
  "桃井ミュージアム": {
    "zh": "桃井ミュージアム",
    "en": "Momoimyujiamu",
    "ja": "桃井ミュージアム"
  },
  "丹波伝統工芸公園 立杭陶の郷": {
    "zh": "丹波伝統工芸公园 立杭陶の郷",
    "en": "Tambadentokogeikoen Tachikuitonosato",
    "ja": "丹波伝統工芸公園 立杭陶の郷"
  },
  "神戸ハーバーランドumie": {
    "zh": "神戸ハーバーランドumie",
    "en": "Kobehabarandomie",
    "ja": "神戸ハーバーランドumie"
  },
  "プラトン装飾美術館（イタリア館）": {
    "zh": "プラトン装飾美術館（イタリア館）",
    "en": "Puratonsoshokubijutsukan Itariakan",
    "ja": "プラトン装飾美術館（イタリア館）"
  },
  "神戸布引ハーブ園／ロープウェイ": {
    "zh": "神户布引香草园／索道",
    "en": "Kobe Nunobiki Herb Gardens & Ropeway",
    "ja": "神戸布引ハーブ園／ロープウェイ"
  },
  "神戸海洋博物館・カワサキワールド": {
    "zh": "神戸海洋博物館・カワサキワールド",
    "en": "Kobekaiyohakubutsukan Kawasakiwarudo",
    "ja": "神戸海洋博物館・カワサキワールド"
  },
  "相楽園": {
    "zh": "相楽園",
    "en": "Sorakusono",
    "ja": "相楽園"
  },
  "白鶴美術館": {
    "zh": "白鶴美术馆",
    "en": "Hakutsuru Art Museum",
    "ja": "白鶴美術館"
  },
  "神戸市立六甲山牧場": {
    "zh": "神戸市立六甲山牧場",
    "en": "Kobeshiritsurokkosanbokujo",
    "ja": "神戸市立六甲山牧場"
  },
  "淡河宿本陣跡": {
    "zh": "淡河宿本陣跡",
    "en": "Ogoyadohonjinato",
    "ja": "淡河宿本陣跡"
  },
  "神戸三田プレミアム・アウトレット": {
    "zh": "神戸三田プレミアム・アウトレット",
    "en": "Kobemitapuremiamu Autoretto",
    "ja": "神戸三田プレミアム・アウトレット"
  },
  "グリコピア神戸": {
    "zh": "グリコピア神戸",
    "en": "Gurikopiakobe",
    "ja": "グリコピア神戸"
  },
  "道の駅 神戸フルーツ・フラワーパーク大沢": {
    "zh": "道の駅 神戸フルーツ・フラワーパーク大沢",
    "en": "Michinoeki Kobefurutsu Furawapakuosawa",
    "ja": "道の駅 神戸フルーツ・フラワーパーク大沢"
  },
  "神戸ワイナリー": {
    "zh": "神戸ワイナリー",
    "en": "Kobewainari",
    "ja": "神戸ワイナリー"
  },
  "橋の科学館": {
    "zh": "橋の科学館",
    "en": "Hashino Science Museum",
    "ja": "橋の科学館"
  },
  "須磨浦山上遊園": {
    "zh": "須磨浦山上遊園",
    "en": "Sumaurayamaueyuen",
    "ja": "須磨浦山上遊園"
  },
  "神戸市立須磨離宮公園": {
    "zh": "神戸市立須磨離宮公园",
    "en": "Kobeshiritsusumarikyu Park",
    "ja": "神戸市立須磨離宮公園"
  },
  "太山寺": {
    "zh": "太山寺",
    "en": "Taizan Temple",
    "ja": "太山寺"
  },
  "五色塚古墳": {
    "zh": "五色塚古墳",
    "en": "Goshikitsukakofun",
    "ja": "五色塚古墳"
  },
  "須磨寺": {
    "zh": "須磨寺",
    "en": "Suma Temple",
    "ja": "須磨寺"
  },
  "天神泉源": {
    "zh": "天神泉源",
    "en": "Tenjinizumigen",
    "ja": "天神泉源"
  },
  "銀の湯": {
    "zh": "銀の湯",
    "en": "Ginnoyu",
    "ja": "銀の湯"
  },
  "金の湯": {
    "zh": "金の湯",
    "en": "Kinnoyu",
    "ja": "金の湯"
  },
  "神戸市立森林植物園": {
    "zh": "神戸市立森林植物園",
    "en": "Kobeshiritsushinrinshokubutsuen",
    "ja": "神戸市立森林植物園"
  },
  "天覧台": {
    "zh": "天覧台",
    "en": "Tenrandai",
    "ja": "天覧台"
  },
  "掬星台": {
    "zh": "掬星台",
    "en": "Marihoshidai",
    "ja": "掬星台"
  },
  "摩耶山天上寺": {
    "zh": "摩耶山天上寺",
    "en": "Mayayamatenjo Temple",
    "ja": "摩耶山天上寺"
  },
  "六甲ガーデンテラス/自然体感展望台 六甲枝垂れ": {
    "zh": "六甲ガーデンテラス/自然体感展望台 六甲枝垂れ",
    "en": "Rokkogadenterasu Shizentaikantenbodai Rokkoedatare",
    "ja": "六甲ガーデンテラス/自然体感展望台 六甲枝垂れ"
  },
  "神戸ファッション美術館": {
    "zh": "神戸ファッション美術館",
    "en": "Kobefuasshon Art Museum",
    "ja": "神戸ファッション美術館"
  },
  "兵庫県立美術館": {
    "zh": "兵庫县立美术馆",
    "en": "Hyogokenritsu Art Museum",
    "ja": "兵庫県立美術館"
  },
  "神戸市立王子動物園": {
    "zh": "神戸市立王子动物园",
    "en": "Kobeshiritsuoji Zoo",
    "ja": "神戸市立王子動物園"
  },
  "櫻正宗記念館 櫻宴": {
    "zh": "樱正宗記念馆 樱宴",
    "en": "Sakuramasamunekinenkan Sakurautage",
    "ja": "櫻正宗記念館 櫻宴"
  },
  "神戸酒心館": {
    "zh": "神戸酒心馆",
    "en": "Kobeshushinkan",
    "ja": "神戸酒心館"
  },
  "浜福鶴吟醸工房": {
    "zh": "浜福鶴吟醸工房",
    "en": "Hamafukutsuruginjokobo",
    "ja": "浜福鶴吟醸工房"
  },
  "神戸どうぶつ王国": {
    "zh": "神户动物王国",
    "en": "Kobe Animal Kingdom",
    "ja": "神戸どうぶつ王国"
  },
  "南京町": {
    "zh": "南京町（神户中华街）",
    "en": "Nankinmachi Chinatown",
    "ja": "南京町"
  },
  "神戸市立博物館": {
    "zh": "神戸市立博物馆",
    "en": "Kobeshiritsu Museum",
    "ja": "神戸市立博物館"
  },
  "神戸ムスリムモスク": {
    "zh": "神戸ムスリムモスク",
    "en": "Kobemusurimumosuku",
    "ja": "神戸ムスリムモスク"
  },
  "萌黄の館": {
    "zh": "萌黄の館",
    "en": "Moeginokan",
    "ja": "萌黄の館"
  },
  "香りの家オランダ館": {
    "zh": "香りの家オランダ館",
    "en": "Kaorinoieorandakan",
    "ja": "香りの家オランダ館"
  },
  "ラインの館": {
    "zh": "ラインの館",
    "en": "Rainnokan",
    "ja": "ラインの館"
  },
  "うろこの家・展望ギャラリー": {
    "zh": "うろこの家・展望ギャラリー",
    "en": "Urokonoie Tenbogyarari",
    "ja": "うろこの家・展望ギャラリー"
  },
  "風見鶏の館": {
    "zh": "風見鶏の館",
    "en": "風見鶏の館",
    "ja": "風見鶏の館"
  },
  "生田神社": {
    "zh": "生田神社",
    "en": "Ikuta Shrine",
    "ja": "生田神社"
  },
  "神戸北野天満神社": {
    "zh": "神戸北野天満神社",
    "en": "Kobekitanotemma Shrine",
    "ja": "神戸北野天満神社"
  },
  "布引の滝": {
    "zh": "布引の滝",
    "en": "Nunobikino Falls",
    "ja": "布引の滝"
  },
  "竹中大工道具館": {
    "zh": "竹中大工道具馆",
    "en": "Takenakadaikudogukan",
    "ja": "竹中大工道具館"
  },
  "神戸ポートミュージアム": {
    "zh": "神戸ポートミュージアム",
    "en": "Kobepotomyujiamu",
    "ja": "神戸ポートミュージアム"
  },
  "青山歴史村・デカンショ館": {
    "zh": "青山歴史村・デカンショ館",
    "en": "Aoyamarekishimura Dekanshokan",
    "ja": "青山歴史村・デカンショ館"
  },
  "篠山城大書院": {
    "zh": "篠山城大書院",
    "en": "Shinoyamajotaishoin",
    "ja": "篠山城大書院"
  },
  "万葉の岬": {
    "zh": "万葉の岬",
    "en": "Manyonomisaki",
    "ja": "万葉の岬"
  },
  "洲本城跡": {
    "zh": "洲本城遗址",
    "en": "Sumoto Castle Ruins",
    "ja": "洲本城跡"
  },
  "うへ山の棚田": {
    "zh": "うへ山の棚田",
    "en": "Uheyamanotanada",
    "ja": "うへ山の棚田"
  },
  "たじま高原植物園": {
    "zh": "たじま高原植物園",
    "en": "Tajimakogenshokubutsuen",
    "ja": "たじま高原植物園"
  },
  "木の殿堂": {
    "zh": "木の殿堂",
    "en": "Kinodendo",
    "ja": "木の殿堂"
  },
  "大乗寺(応挙寺)": {
    "zh": "大乗寺(応挙寺)",
    "en": "Daijoji Okyoji",
    "ja": "大乗寺(応挙寺)"
  },
  "伊弉諾神宮": {
    "zh": "伊弉諾神宫",
    "en": "Izanagi Shrine",
    "ja": "伊弉諾神宮"
  },
  "淡路島 国営明石海峡公園": {
    "zh": "淡路島 国営明石海峡公园",
    "en": "Awajishima Kokueiakashikaikyo Park",
    "ja": "淡路島 国営明石海峡公園"
  },
  "兵庫県立公園 あわじ花さじき": {
    "zh": "兵庫県立公園 あわじ花さじき",
    "en": "Hyogokenritsukoen Awajihanasajiki",
    "ja": "兵庫県立公園 あわじ花さじき"
  },
  "美湯 松帆の郷": {
    "zh": "美湯 松帆の郷",
    "en": "Biyu Matsuhonosato",
    "ja": "美湯 松帆の郷"
  },
  "加古川市見土呂フルーツパーク": {
    "zh": "加古川市見土呂フルーツパーク",
    "en": "加古川市見土呂フルーツパーク",
    "ja": "加古川市見土呂フルーツパーク"
  },
  "鶴林寺": {
    "zh": "鶴林寺",
    "en": "Kakurin Temple",
    "ja": "鶴林寺"
  },
  "高御位山": {
    "zh": "高御位山",
    "en": "Takaokuraiyama",
    "ja": "高御位山"
  },
  "西宮能楽堂": {
    "zh": "西宮能楽堂",
    "en": "Nishinomiyanogakudo",
    "ja": "西宮能楽堂"
  },
  "甲子園歴史館": {
    "zh": "甲子園歴史馆",
    "en": "Koshienrekishikan",
    "ja": "甲子園歴史館"
  },
  "えびす宮総本社 西宮神社": {
    "zh": "えびす宮総本社 西宮神社",
    "en": "Ebisumiyasohonsha Nishinomiya Shrine",
    "ja": "えびす宮総本社 西宮神社"
  },
  "元気村かみくげ": {
    "zh": "元気村かみくげ",
    "en": "Genkimurakamikuge",
    "ja": "元気村かみくげ"
  },
  "柏原藩陣屋跡": {
    "zh": "柏原藩陣屋跡",
    "en": "Kashiwabarahanjinyato",
    "ja": "柏原藩陣屋跡"
  },
  "黒井城": {
    "zh": "黒井城",
    "en": "Kuroi Castle",
    "ja": "黒井城"
  },
  "沼島 上立神岩": {
    "zh": "沼島 上立神岩",
    "en": "Numashima Uetategamiwa",
    "ja": "沼島 上立神岩"
  },
  "うずの丘 大鳴門橋記念館": {
    "zh": "うずの丘 大鳴門橋記念館",
    "en": "Uzunoka Dainarutohashi Memorial Museum",
    "ja": "うずの丘 大鳴門橋記念館"
  },
  "淡路ファームパーク イングランドの丘": {
    "zh": "淡路ファームパーク イングランドの丘",
    "en": "Awajifuamupaku Ingurandonoka",
    "ja": "淡路ファームパーク イングランドの丘"
  },
  "砥峰高原": {
    "zh": "砥峰高原",
    "en": "Tominekogen",
    "ja": "砥峰高原"
  },
  "柳田國男生家": {
    "zh": "柳田国男生家",
    "en": "Yanagidakunioseika",
    "ja": "柳田國男生家"
  },
  "大庄屋三木家住宅": {
    "zh": "大庄屋三木家住宅",
    "en": "Oshoyamikiejutaku",
    "ja": "大庄屋三木家住宅"
  },
  "辻川山公園": {
    "zh": "辻川山公园",
    "en": "Tsujikawasankosono Park",
    "ja": "辻川山公園"
  },
  "天滝": {
    "zh": "天瀑布",
    "en": "Tendaki Falls",
    "ja": "天滝"
  },
  "明延鉱山探検坑道": {
    "zh": "明延鉱山探検坑道",
    "en": "Meienkozantankenkodo",
    "ja": "明延鉱山探検坑道"
  },
  "那珂ふれあい館": {
    "zh": "那珂ふれあい館",
    "en": "Nakafureaikan",
    "ja": "那珂ふれあい館"
  },
  "ラベンダーパーク多可": {
    "zh": "ラベンダーパーク多可",
    "en": "Rabendapakutaka",
    "ja": "ラベンダーパーク多可"
  },
  "新温泉町山陰海岸ジオパーク館": {
    "zh": "新温泉町山陰海岸ジオパーク館",
    "en": "Shinonsenmachiyamainkaiganjiopakukan",
    "ja": "新温泉町山陰海岸ジオパーク館"
  },
  "音水湖カヌークラブ": {
    "zh": "音水湖カヌークラブ",
    "en": "Otomizumizumikanukurabu",
    "ja": "音水湖カヌークラブ"
  },
  "ばんしゅう戸倉スキー場": {
    "zh": "ばんしゅう戸倉スキー場",
    "en": "Banshutokurasukiba",
    "ja": "ばんしゅう戸倉スキー場"
  },
  "ちくさ高原スキー場": {
    "zh": "ちくさ高原スキー場",
    "en": "Chikusakogensukiba",
    "ja": "ちくさ高原スキー場"
  },
  "最上山公園もみじ山": {
    "zh": "最上山公園もみじ山",
    "en": "Saijosankosonomomijiyama",
    "ja": "最上山公園もみじ山"
  },
  "兵庫県立但馬牧場公園": {
    "zh": "兵庫县立但馬牧場公园",
    "en": "Hyogokenritsutajimabokujo Park",
    "ja": "兵庫県立但馬牧場公園"
  },
  "AMAMI TERRACE": {
    "zh": "AMAMI TERRACE",
    "en": "Amami Terrace",
    "ja": "AMAMI TERRACE"
  },
  "赤穂城": {
    "zh": "赤穂城",
    "en": "Ako Castle",
    "ja": "赤穂城"
  },
  "飛龍の滝": {
    "zh": "飛龍の滝",
    "en": "Hiryuno Falls",
    "ja": "飛龍の滝"
  },
  "佐用町南光ひまわり畑": {
    "zh": "佐用町南光ひまわり畑",
    "en": "Sayomachinankohimawarihatake",
    "ja": "佐用町南光ひまわり畑"
  },
  "平福の街並み": {
    "zh": "平福の街並み",
    "en": "Hirafukunomachinamimi",
    "ja": "平福の街並み"
  },
  "加古大池公園": {
    "zh": "加古大池公园",
    "en": "Kakoike Park",
    "ja": "加古大池公園"
  },
  "道の駅北はりまエコミュージアム": {
    "zh": "道の駅北はりまエコミュージアム",
    "en": "Michinoekikitaharimaekomyujiamu",
    "ja": "道の駅北はりまエコミュージアム"
  },
  "播州織工房館": {
    "zh": "播州織工房馆",
    "en": "Banshushokkobokan",
    "ja": "播州織工房館"
  },
  "日本へそ公園": {
    "zh": "日本へそ公園",
    "en": "Nipponheso Park",
    "ja": "日本へそ公園"
  },
  "闘竜灘": {
    "zh": "闘竜灘",
    "en": "Toryunada",
    "ja": "闘竜灘"
  },
  "加東アート館": {
    "zh": "加東アート館",
    "en": "Katoatokan",
    "ja": "加東アート館"
  },
  "生野銀山": {
    "zh": "生野銀山",
    "en": "Ikunoginzan",
    "ja": "生野銀山"
  },
  "竹田城跡": {
    "zh": "竹田城遗址",
    "en": "Takeda Castle Ruins",
    "ja": "竹田城跡"
  },
  "神子畑選鉱場跡": {
    "zh": "神子畑選鉱場跡",
    "en": "Kamikohatakesenkobato",
    "ja": "神子畑選鉱場跡"
  },
  "浄土寺": {
    "zh": "浄土寺",
    "en": "Jodo Temple",
    "ja": "浄土寺"
  },
  "ひまわりの丘公園": {
    "zh": "ひまわりの丘公園",
    "en": "Himawarinoka Park",
    "ja": "ひまわりの丘公園"
  },
  "小野アルプス": {
    "zh": "小野アルプス",
    "en": "Onoarupusu",
    "ja": "小野アルプス"
  },
  "白雲谷温泉ゆぴか": {
    "zh": "白雲谷温泉ゆぴか",
    "en": "Hakuntanionsenyupika",
    "ja": "白雲谷温泉ゆぴか"
  },
  "たかさご万灯祭": {
    "zh": "たかさご万灯祭",
    "en": "Takasagomandomatsuri",
    "ja": "たかさご万灯祭"
  },
  "住吉神社（住吉公園）": {
    "zh": "住吉神社（住吉公园）",
    "en": "Sumiyoshijinja Sumiyoshikoen",
    "ja": "住吉神社（住吉公園）"
  },
  "旧波門崎燈籠堂（明石港旧灯台）": {
    "zh": "旧波門崎灯籠堂（明石港旧灯塔）",
    "en": "Kyunamikadosakitorodo Akashiminatokyutodai",
    "ja": "旧波門崎燈籠堂（明石港旧灯台）"
  },
  "魚の棚町商店街": {
    "zh": "魚の棚町商店街",
    "en": "Sakananotanamachi Shopping Street",
    "ja": "魚の棚町商店街"
  },
  "明石城（兵庫県立明石公園）": {
    "zh": "明石城（兵庫县立明石公园）",
    "en": "Akashijo Hyogokenritsuakashikoen",
    "ja": "明石城（兵庫県立明石公園）"
  },
  "明石市立天文科学館": {
    "zh": "明石市立天文科学馆",
    "en": "Akashishiritsutemmon Science Museum",
    "ja": "明石市立天文科学館"
  },
  "清涼山心月院": {
    "zh": "清涼山心月院",
    "en": "Seiryoyamashingetsuin",
    "ja": "清涼山心月院"
  },
  "有馬富士公園": {
    "zh": "有馬富士公园",
    "en": "Arimafuji Park",
    "ja": "有馬富士公園"
  },
  "武庫川桜づつみ回廊": {
    "zh": "武庫川桜づつみ回廊",
    "en": "Mukogawasakurazutsumikairo",
    "ja": "武庫川桜づつみ回廊"
  },
  "新宮晋 風のミュージアム": {
    "zh": "新宮晋 風のミュージアム",
    "en": "Shingususumu Kazenomyujiamu",
    "ja": "新宮晋 風のミュージアム"
  },
  "一庫ダム": {
    "zh": "一庫ダム",
    "en": "Ichikodamu",
    "ja": "一庫ダム"
  },
  "多田神社": {
    "zh": "多田神社",
    "en": "Tada Shrine",
    "ja": "多田神社"
  },
  "市立伊丹ミュージアム": {
    "zh": "市立伊丹ミュージアム",
    "en": "Shiritsuitamimyujiamu",
    "ja": "市立伊丹ミュージアム"
  },
  "伊丹市昆虫館": {
    "zh": "伊丹市昆虫馆",
    "en": "Itamishikonchukan",
    "ja": "伊丹市昆虫館"
  },
  "伊丹スカイパーク": {
    "zh": "伊丹スカイパーク",
    "en": "Itamisukaipaku",
    "ja": "伊丹スカイパーク"
  },
  "伊丹市立こども文化科学館": {
    "zh": "伊丹市立こども文化科学館",
    "en": "Itamishiritsukodomobunka Science Museum",
    "ja": "伊丹市立こども文化科学館"
  },
  "高座の滝": {
    "zh": "高座の滝",
    "en": "Kozano Falls",
    "ja": "高座の滝"
  },
  "芦屋市立美術博物館": {
    "zh": "芦屋市立美术博物馆",
    "en": "Ashiyashiritsubijutsu Museum",
    "ja": "芦屋市立美術博物館"
  },
  "浜坂駅": {
    "zh": "浜坂駅",
    "en": "Hamasakaeki",
    "ja": "浜坂駅"
  },
  "城崎温泉駅": {
    "zh": "城崎温泉駅",
    "en": "Kinosakionseneki",
    "ja": "城崎温泉駅"
  },
  "豊岡駅": {
    "zh": "豊岡駅",
    "en": "Toyokaeki",
    "ja": "豊岡駅"
  },
  "神戸電鉄・有馬温泉駅": {
    "zh": "神戸電鉄・有馬温泉駅",
    "en": "Kobedentetsu Arimaonseneki",
    "ja": "神戸電鉄・有馬温泉駅"
  },
  "JR元町駅": {
    "zh": "JR元町駅",
    "en": "Jrmotomachieki",
    "ja": "JR元町駅"
  },
  "吉水神社": {
    "zh": "吉水神社",
    "en": "Yoshimizu Shrine",
    "ja": "吉水神社"
  },
  "藤ノ木古墳": {
    "zh": "藤ノ木古墳",
    "en": "Fujinokikofun",
    "ja": "藤ノ木古墳"
  },
  "中宮寺": {
    "zh": "中宮寺",
    "en": "Chugu Temple",
    "ja": "中宮寺"
  },
  "法輪寺": {
    "zh": "法輪寺",
    "en": "Horin Temple",
    "ja": "法輪寺"
  },
  "安倍文殊院": {
    "zh": "安倍文殊院",
    "en": "Abemonjuin",
    "ja": "安倍文殊院"
  },
  "春日大社": {
    "zh": "春日大社",
    "en": "Kasuga Taisha Shrine",
    "ja": "春日大社"
  },
  "平城宮跡": {
    "zh": "平城宮跡",
    "en": "Narakyuseki",
    "ja": "平城宮跡"
  },
  "東大寺": {
    "zh": "东大寺",
    "en": "Todai-ji Temple",
    "ja": "東大寺"
  },
  "飛鳥寺": {
    "zh": "飛鳥寺",
    "en": "Asuka Temple",
    "ja": "飛鳥寺"
  },
  "大神神社": {
    "zh": "大神神社",
    "en": "Daijin Shrine",
    "ja": "大神神社"
  },
  "金峯山寺": {
    "zh": "金峯山寺",
    "en": "Mitake Temple",
    "ja": "金峯山寺"
  },
  "石舞台古墳": {
    "zh": "石舞台古墳",
    "en": "Ishibutaikofun",
    "ja": "石舞台古墳"
  },
  "奈良国立博物館": {
    "zh": "奈良国立博物馆",
    "en": "Narakokuritsu Museum",
    "ja": "奈良国立博物館"
  },
  "興福寺": {
    "zh": "興福寺",
    "en": "Kofuku Temple",
    "ja": "興福寺"
  },
  "藤原宮跡": {
    "zh": "藤原宮跡",
    "en": "Fujiwarakyuseki",
    "ja": "藤原宮跡"
  },
  "慈光院": {
    "zh": "慈光院",
    "en": "Jikoin",
    "ja": "慈光院"
  },
  "薬師寺": {
    "zh": "薬師寺",
    "en": "Yakushi Temple",
    "ja": "薬師寺"
  },
  "岡寺": {
    "zh": "岡寺",
    "en": "Nan Temple",
    "ja": "岡寺"
  },
  "信貴山玉蔵院（宿坊）": {
    "zh": "信貴山玉蔵院（宿坊）",
    "en": "Shigiyamatamazoin Shukubo",
    "ja": "信貴山玉蔵院（宿坊）"
  },
  "長谷寺": {
    "zh": "長谷寺",
    "en": "Hase Temple",
    "ja": "長谷寺"
  },
  "談山神社": {
    "zh": "談山神社",
    "en": "Tanzan Shrine",
    "ja": "談山神社"
  },
  "大峯山龍泉寺": {
    "zh": "大峯山龍泉寺",
    "en": "Omineyamaryusen Temple",
    "ja": "大峯山龍泉寺"
  },
  "谷瀬の吊り橋": {
    "zh": "谷瀬の吊り橋",
    "en": "Tanisenotsurihashi Bridge",
    "ja": "谷瀬の吊り橋"
  },
  "稲渕の棚田": {
    "zh": "稲渕の棚田",
    "en": "Inefuchinotanada",
    "ja": "稲渕の棚田"
  },
  "若草山": {
    "zh": "若草山",
    "en": "Wakakusayama",
    "ja": "若草山"
  },
  "曽爾高原": {
    "zh": "曽爾高原",
    "en": "Sojikogen",
    "ja": "曽爾高原"
  },
  "春日山原始林": {
    "zh": "春日山原始林",
    "en": "Kasugayamaharashihayashi",
    "ja": "春日山原始林"
  },
  "みたらい渓谷": {
    "zh": "みたらい渓谷",
    "en": "Mitaraikeikoku",
    "ja": "みたらい渓谷"
  },
  "斑鳩町文化財活用センター": {
    "zh": "斑鳩町文化財活用センター",
    "en": "Ikarugamachibunkazaikatsuyosenta",
    "ja": "斑鳩町文化財活用センター"
  },
  "法隆寺ｉセンター": {
    "zh": "法隆寺ｉセンター",
    "en": "Horyujisenta",
    "ja": "法隆寺ｉセンター"
  },
  "JA紀の里ファーマーズマーケット めっけもん広場": {
    "zh": "JA紀の里ファーマーズマーケット めっけもん広場",
    "en": "Jakinosatofuamazumaketto Mekkemonhiroba",
    "ja": "JA紀の里ファーマーズマーケット めっけもん広場"
  },
  "和歌浦漁港 おっとっと広場": {
    "zh": "和歌浦漁港 おっとっと広場",
    "en": "Wakauragyoko Ottottohiroba",
    "ja": "和歌浦漁港 おっとっと広場"
  },
  "養翠園": {
    "zh": "養翠園",
    "en": "Yosuisono",
    "ja": "養翠園"
  },
  "番所庭園": {
    "zh": "番所庭园",
    "en": "Bansho Garden",
    "ja": "番所庭園"
  },
  "紀州東照宮": {
    "zh": "紀州東照宮",
    "en": "Kishutoshogu",
    "ja": "紀州東照宮"
  },
  "不老橋": {
    "zh": "不老橋",
    "en": "Furohashi Bridge",
    "ja": "不老橋"
  },
  "玉津島神社": {
    "zh": "玉津島神社",
    "en": "Tamatsushima Shrine",
    "ja": "玉津島神社"
  },
  "粉河寺": {
    "zh": "粉河寺",
    "en": "Kokawa Temple",
    "ja": "粉河寺"
  },
  "道の駅・青洲の里": {
    "zh": "道の駅・青洲の里",
    "en": "Michinoeki Seishunosato",
    "ja": "道の駅・青洲の里"
  },
  "南紀勝浦温泉・湯川温泉": {
    "zh": "南紀勝浦温泉・湯川温泉",
    "en": "Nankikatsuraonsen Yukawa Onsen",
    "ja": "南紀勝浦温泉・湯川温泉"
  },
  "大門坂": {
    "zh": "大門坂",
    "en": "Daimonsaka",
    "ja": "大門坂"
  },
  "補陀洛山寺": {
    "zh": "補陀洛山寺",
    "en": "Fudarakuyamadera Temple",
    "ja": "補陀洛山寺"
  },
  "稲むらの火の館／濱口梧陵記念館": {
    "zh": "稲むらの火の館／濱口梧陵記念館",
    "en": "Inemuranohinokan Hamaguchigoryo Memorial Museum",
    "ja": "稲むらの火の館／濱口梧陵記念館"
  },
  "浜のうたせ": {
    "zh": "浜のうたせ",
    "en": "Hamanotase",
    "ja": "浜のうたせ"
  },
  "旧和歌山県議会議事堂（一乗閣）": {
    "zh": "旧和歌山县議会議事堂（一乗閣）",
    "en": "Kyuwakayamakengikaigijido Ichijokaku",
    "ja": "旧和歌山県議会議事堂（一乗閣）"
  },
  "根来寺（根來寺）": {
    "zh": "根来寺（根來寺）",
    "en": "Negoroji Negoroji",
    "ja": "根来寺（根來寺）"
  },
  "アドベンチャーワールド": {
    "zh": "冒险大世界",
    "en": "Adventure World",
    "ja": "アドベンチャーワールド"
  },
  "漆器蒔絵体験／紀州漆器伝統産業会館 うるわし館": {
    "zh": "漆器蒔絵体験／紀州漆器伝統産業会馆 うるわし馆",
    "en": "Shikkimakietaiken Kishushikkidentosangyokaikan Uruwashikan",
    "ja": "漆器蒔絵体験／紀州漆器伝統産業会館 うるわし館"
  },
  "トルコ記念館": {
    "zh": "トルコ記念館",
    "en": "Toruko Memorial Museum",
    "ja": "トルコ記念館"
  },
  "橋杭岩": {
    "zh": "橋杭岩",
    "en": "Hashiguiwa",
    "ja": "橋杭岩"
  },
  "円月島": {
    "zh": "円月島",
    "en": "Engetsushima",
    "ja": "円月島"
  },
  "白良浜": {
    "zh": "白良滨",
    "en": "Shirarahama Beach",
    "ja": "白良浜"
  },
  "あらぎ島": {
    "zh": "あらぎ島",
    "en": "Aragishima",
    "ja": "あらぎ島"
  },
  "白崎海洋公園": {
    "zh": "白崎海洋公园",
    "en": "Shirasakikaiyo Park",
    "ja": "白崎海洋公園"
  },
  "湯浅重要伝統的建造物群保存地区": {
    "zh": "湯浅重要伝統的建造物群保存地区",
    "en": "Yuasajuyodentotekikenzobutsugunhozonchiku",
    "ja": "湯浅重要伝統的建造物群保存地区"
  },
  "黒潮市場": {
    "zh": "黒潮市场",
    "en": "Kuroshioshijo Market",
    "ja": "黒潮市場"
  },
  "ニタマ駅長（和歌山電鉄貴志駅）": {
    "zh": "ニタマ駅長（和歌山電鉄貴志駅）",
    "en": "Nitamaekicho Wakayamadentetsukishieki",
    "ja": "ニタマ駅長（和歌山電鉄貴志駅）"
  },
  "丹生都比売神社": {
    "zh": "丹生都比売神社",
    "en": "Niuzuhime Shrine",
    "ja": "丹生都比売神社"
  },
  "奥之院": {
    "zh": "奥之院",
    "en": "Okuyukin",
    "ja": "奥之院"
  },
  "壇上伽藍": {
    "zh": "坛上伽蓝",
    "en": "Danjo Garan",
    "ja": "壇上伽藍"
  },
  "金剛峯寺": {
    "zh": "金刚峰寺",
    "en": "Kongobu-ji Temple",
    "ja": "金剛峯寺"
  },
  "熊野川舟下り": {
    "zh": "熊野川舟下り",
    "en": "Kumanogawafunekudari",
    "ja": "熊野川舟下り"
  },
  "神倉神社": {
    "zh": "神倉神社",
    "en": "Kamikura Shrine",
    "ja": "神倉神社"
  },
  "熊野速玉大社": {
    "zh": "熊野速玉大社",
    "en": "Kumano Hayatama Taisha",
    "ja": "熊野速玉大社"
  },
  "那智の滝": {
    "zh": "那智瀑布",
    "en": "Nachi Falls",
    "ja": "那智の滝"
  },
  "那智山青岸渡寺": {
    "zh": "那智山青岸渡寺",
    "en": "Nachiyamaseiganto Temple",
    "ja": "那智山青岸渡寺"
  },
  "熊野那智大社": {
    "zh": "熊野那智大社",
    "en": "Kumano Nachi Taisha",
    "ja": "熊野那智大社"
  },
  "湯の峰温泉 つぼ湯": {
    "zh": "湯の峰温泉 つぼ湯",
    "en": "Yunomineonsen Tsuboyu",
    "ja": "湯の峰温泉 つぼ湯"
  },
  "大斎原": {
    "zh": "大斎原",
    "en": "Daisaihara",
    "ja": "大斎原"
  },
  "熊野本宮大社": {
    "zh": "熊野本宮大社",
    "en": "Kumanomotomiya Shrine",
    "ja": "熊野本宮大社"
  },
  "和歌山港駅": {
    "zh": "和歌山港駅",
    "en": "Wakayamaminatoeki",
    "ja": "和歌山港駅"
  },
  "和歌山市駅": {
    "zh": "和歌山市駅",
    "en": "Wakayamashieki",
    "ja": "和歌山市駅"
  },
  "三徳山三佛寺投入堂": {
    "zh": "三徳山三佛寺投入堂",
    "en": "Santokusanzabutsujitonyudo",
    "ja": "三徳山三佛寺投入堂"
  },
  "鳥取砂丘": {
    "zh": "鸟取砂丘",
    "en": "Tottori Sand Dunes",
    "ja": "鳥取砂丘"
  },
  "山陰海岸ジオパーク 海と大地の自然館": {
    "zh": "山陰海岸ジオパーク 海と大地の自然館",
    "en": "Saninkaiganjiopaku Umitodaichinoshizenkan",
    "ja": "山陰海岸ジオパーク 海と大地の自然館"
  },
  "円形劇場 くらよしフィギュアミュージアム": {
    "zh": "円形劇場 くらよしフィギュアミュージアム",
    "en": "Enkeigekijo Kurayoshifuigyuamyujiamu",
    "ja": "円形劇場 くらよしフィギュアミュージアム"
  },
  "米子水鳥公園": {
    "zh": "米子水鳥公园",
    "en": "Yonagomizutori Park",
    "ja": "米子水鳥公園"
  },
  "夢みなとタワー": {
    "zh": "夢みなとタワー",
    "en": "Yumeminatotawa",
    "ja": "夢みなとタワー"
  },
  "大神山神社奥宮": {
    "zh": "大神山神社奥宮",
    "en": "Daijinsanshinshaokunomiya",
    "ja": "大神山神社奥宮"
  },
  "大山寺": {
    "zh": "大山寺",
    "en": "Oyama Temple",
    "ja": "大山寺"
  },
  "とっとり花回廊": {
    "zh": "とっとり花回廊",
    "en": "Tottorihanakairo",
    "ja": "とっとり花回廊"
  },
  "金持神社": {
    "zh": "金持神社",
    "en": "Kanemochi Shrine",
    "ja": "金持神社"
  },
  "オシドリ観察小屋": {
    "zh": "オシドリ観察小屋",
    "en": "Oshidorikansatsukoya",
    "ja": "オシドリ観察小屋"
  },
  "植田正治写真美術館": {
    "zh": "植田正治写真美术馆",
    "en": "Uedamasajishashim Art Museum",
    "ja": "植田正治写真美術館"
  },
  "中国庭園 燕趙園": {
    "zh": "中国庭园 燕趙園",
    "en": "Chugokuteien Enchosono",
    "ja": "中国庭園 燕趙園"
  },
  "倉吉白壁土蔵群": {
    "zh": "倉吉白壁土蔵群",
    "en": "Kurayoshishirakabedozogun",
    "ja": "倉吉白壁土蔵群"
  },
  "なしっこ館": {
    "zh": "なしっこ館",
    "en": "Nashikkokan",
    "ja": "なしっこ館"
  },
  "砂の美術館": {
    "zh": "砂の美術館",
    "en": "Sunano Art Museum",
    "ja": "砂の美術館"
  },
  "鳥取城跡": {
    "zh": "鳥取城遗址",
    "en": "Tottori Castle Ruins",
    "ja": "鳥取城跡"
  },
  "浦富海岸": {
    "zh": "浦富海岸",
    "en": "Uratonomikishi Coast",
    "ja": "浦富海岸"
  },
  "不動院岩屋堂": {
    "zh": "不動院岩屋堂",
    "en": "Fudoiniwayado",
    "ja": "不動院岩屋堂"
  },
  "氷ノ山": {
    "zh": "氷ノ山",
    "en": "Korinoyama",
    "ja": "氷ノ山"
  },
  "石谷家住宅": {
    "zh": "石谷家住宅",
    "en": "Ishigayaiejutaku",
    "ja": "石谷家住宅"
  },
  "鳥取温泉": {
    "zh": "鳥取温泉",
    "en": "Tottori Onsen",
    "ja": "鳥取温泉"
  },
  "鳥取駅": {
    "zh": "鳥取駅",
    "en": "Tottorieki",
    "ja": "鳥取駅"
  },
  "あせび温泉 やすらぎの郷": {
    "zh": "あせび温泉 やすらぎの郷",
    "en": "Asebionsen Yasuraginosato",
    "ja": "あせび温泉 やすらぎの郷"
  },
  "あすたむらんど徳島": {
    "zh": "あすたむらんど徳島",
    "en": "Asutamurandotokushima",
    "ja": "あすたむらんど徳島"
  },
  "四国八十八ヵ所巡礼第六番札所安楽寺": {
    "zh": "四国八十八ヵ所巡礼第六番札所安楽寺",
    "en": "Shikokuyasohachikatokorojunreidairokubanfudashoanraku Temple",
    "ja": "四国八十八ヵ所巡礼第六番札所安楽寺"
  },
  "技の館": {
    "zh": "技の館",
    "en": "Wazanokan",
    "ja": "技の館"
  },
  "鳴滝": {
    "zh": "鳴瀑布",
    "en": "Naru Falls",
    "ja": "鳴滝"
  },
  "土釜": {
    "zh": "土釜",
    "en": "Dogama",
    "ja": "土釜"
  },
  "美濃田の淵": {
    "zh": "美濃田の淵",
    "en": "Minotanofuchi",
    "ja": "美濃田の淵"
  },
  "吉野川ハイウェイオアシス": {
    "zh": "吉野川ハイウェイオアシス",
    "en": "Yoshinogawahaiueioashisu",
    "ja": "吉野川ハイウェイオアシス"
  },
  "ぶぶるパークみかも": {
    "zh": "ぶぶるパークみかも",
    "en": "Buburupakumikamo",
    "ja": "ぶぶるパークみかも"
  },
  "藍住町バラ園": {
    "zh": "藍住町バラ園",
    "en": "Aizumimachibarasono",
    "ja": "藍住町バラ園"
  },
  "大歩危小歩危": {
    "zh": "大歩危小歩危",
    "en": "Obokekoboke",
    "ja": "大歩危小歩危"
  },
  "道の駅大歩危": {
    "zh": "道の駅大歩危",
    "en": "Michinoekioboke",
    "ja": "道の駅大歩危"
  },
  "道の駅いたの": {
    "zh": "道の駅いたの",
    "en": "Michinoekitano",
    "ja": "道の駅いたの"
  },
  "道の駅貞光ゆうゆう館": {
    "zh": "道の駅貞光ゆうゆう館",
    "en": "Michinoekisadamitsuyuyukan",
    "ja": "道の駅貞光ゆうゆう館"
  },
  "渦潮観潮船(うずしお汽船)": {
    "zh": "渦潮観潮船(うずしお汽船)",
    "en": "Uzushiokanchofune Uzushiokisen",
    "ja": "渦潮観潮船(うずしお汽船)"
  },
  "うだつの町並み": {
    "zh": "うだつの町並み",
    "en": "Udatsunomachinami",
    "ja": "うだつの町並み"
  },
  "渦潮観潮船(鳴門観光汽船)": {
    "zh": "渦潮観潮船(鳴門観光汽船)",
    "en": "Uzushiokanchofune Narutokankokisen",
    "ja": "渦潮観潮船(鳴門観光汽船)"
  },
  "四国八十八カ所巡礼二十三番札所薬王寺": {
    "zh": "四国八十八カ所巡礼二十三番札所薬王寺",
    "en": "Shikokuyasohachikatokorojunreinijusambanfudashoyakuo Temple",
    "ja": "四国八十八カ所巡礼二十三番札所薬王寺"
  },
  "四国八十八カ所巡礼十二番札所焼山寺": {
    "zh": "四国八十八カ所巡礼十二番札所焼山寺",
    "en": "Shikokuyasohachikatokorojunreijunibanfudashotakiyama Temple",
    "ja": "四国八十八カ所巡礼十二番札所焼山寺"
  },
  "四国八十八カ所巡礼一番札所霊山寺": {
    "zh": "四国八十八カ所巡礼一番札所霊山寺",
    "en": "Shikokuyasohachikatokorojunreichibanfudashoryosen Temple",
    "ja": "四国八十八カ所巡礼一番札所霊山寺"
  },
  "城満寺": {
    "zh": "城満寺",
    "en": "Joman Temple",
    "ja": "城満寺"
  },
  "恵比須洞": {
    "zh": "恵比須洞",
    "en": "Ebisuhora",
    "ja": "恵比須洞"
  },
  "お松大権現": {
    "zh": "お松大権現",
    "en": "Omatsutaikengen",
    "ja": "お松大権現"
  },
  "大轟の滝": {
    "zh": "大轟の滝",
    "en": "Daitodorokino Falls",
    "ja": "大轟の滝"
  },
  "剣山": {
    "zh": "剣山",
    "en": "Kenzan",
    "ja": "剣山"
  },
  "八合霧": {
    "zh": "八合霧",
    "en": "Hachigokiri",
    "ja": "八合霧"
  },
  "落合集落": {
    "zh": "落合集落",
    "en": "Ochiaishuraku",
    "ja": "落合集落"
  },
  "大歩危峡観光遊覧船": {
    "zh": "大歩危峡観光遊覧船",
    "en": "Obokekyokankoyuransen",
    "ja": "大歩危峡観光遊覧船"
  },
  "藍の館": {
    "zh": "藍の館",
    "en": "Ainokan",
    "ja": "藍の館"
  },
  "土柱": {
    "zh": "土柱",
    "en": "Dochu",
    "ja": "土柱"
  },
  "ひょうたん島クルーズ": {
    "zh": "ひょうたん島クルーズ",
    "en": "Hyotanshimakuruzu",
    "ja": "ひょうたん島クルーズ"
  },
  "徳島中央公園（さくら）": {
    "zh": "徳島中央公園（さくら）",
    "en": "Tokushimanakaokoen Sakura",
    "ja": "徳島中央公園（さくら）"
  },
  "眉山天神社": {
    "zh": "眉山天神社",
    "en": "Bizantenjinsha Shrine",
    "ja": "眉山天神社"
  },
  "渦の道": {
    "zh": "渦の道",
    "en": "Uzunomichi",
    "ja": "渦の道"
  },
  "祖谷のかずら橋": {
    "zh": "祖谷葛藤桥",
    "en": "Iya Kazurabashi Vine Bridge",
    "ja": "祖谷のかずら橋"
  },
  "鳴門の渦潮": {
    "zh": "鸣门涡潮",
    "en": "Naruto Whirlpools",
    "ja": "鳴門の渦潮"
  },
  "阿波おどり会館": {
    "zh": "阿波おどり会館",
    "en": "Awaodorikaikan",
    "ja": "阿波おどり会館"
  },
  "南海フェリー徳島港": {
    "zh": "南海フェリー徳島港",
    "en": "Nankaifueritokushimaminato",
    "ja": "南海フェリー徳島港"
  },
  "千利休屋敷跡": {
    "zh": "千利休屋敷跡",
    "en": "Senrikyuyashikiato",
    "ja": "千利休屋敷跡"
  },
  "堺市役所21階展望ロビー": {
    "zh": "堺市役所21階展望ロビー",
    "en": "Sakaishiyakusho21kaitenborobi",
    "ja": "堺市役所21階展望ロビー"
  },
  "岸和田城": {
    "zh": "岸和田城",
    "en": "Kishiwada Castle",
    "ja": "岸和田城"
  },
  "泉佐野漁港・青空市場": {
    "zh": "泉佐野漁港・青空市场",
    "en": "Izumisanogyoko Aozorashijo Market",
    "ja": "泉佐野漁港・青空市場"
  },
  "仁徳天皇陵古墳": {
    "zh": "仁徳天皇陵古墳",
    "en": "Nintokutennoryokofun",
    "ja": "仁徳天皇陵古墳"
  },
  "犬鳴山温泉": {
    "zh": "犬鳴山温泉",
    "en": "Inunakiyama Onsen",
    "ja": "犬鳴山温泉"
  },
  "大阪中之島美術館": {
    "zh": "大阪中之島美术馆",
    "en": "Osakanakayukishima Art Museum",
    "ja": "大阪中之島美術館"
  },
  "百舌鳥八幡宮": {
    "zh": "百舌鳥八幡宮",
    "en": "Mozuhachimangu",
    "ja": "百舌鳥八幡宮"
  },
  "タグボート大正": {
    "zh": "タグボート大正",
    "en": "Tagubototaisho",
    "ja": "タグボート大正"
  },
  "中之島ラブセントラル": {
    "zh": "中之島ラブセントラル",
    "en": "Nakayukishimarabusentoraru",
    "ja": "中之島ラブセントラル"
  },
  "川の駅 はちけんや": {
    "zh": "川の駅 はちけんや",
    "en": "Kawanoeki Hachikenya",
    "ja": "川の駅 はちけんや"
  },
  "鉄炮鍛冶屋敷": {
    "zh": "鉄炮鍛冶屋敷",
    "en": "Teppokajiyashiki",
    "ja": "鉄炮鍛冶屋敷"
  },
  "堺市立町家歴史館 清学院": {
    "zh": "堺市立町家歴史馆 清学院",
    "en": "Sakaishitachimachierekishikan Kiyoshigakuin",
    "ja": "堺市立町家歴史館 清学院"
  },
  "堺市立町家歴史館 山口家住宅": {
    "zh": "堺市立町家歴史馆 山口家住宅",
    "en": "Sakaishitachimachierekishikan Yamaguchiejutaku",
    "ja": "堺市立町家歴史館 山口家住宅"
  },
  "本家小嶋": {
    "zh": "本家小嶋",
    "en": "Honkekojima",
    "ja": "本家小嶋"
  },
  "旧堺燈台": {
    "zh": "旧堺灯塔",
    "en": "Kyusakai Lighthouse",
    "ja": "旧堺燈台"
  },
  "百舌鳥古墳群ビジターセンター": {
    "zh": "百舌鳥古墳群ビジターセンター",
    "en": "Mozukofungunbijitasenta",
    "ja": "百舌鳥古墳群ビジターセンター"
  },
  "シマノ自転車博物館": {
    "zh": "シマノ自転車博物館",
    "en": "Shimanojitensha Museum",
    "ja": "シマノ自転車博物館"
  },
  "堺市博物館": {
    "zh": "堺市博物馆",
    "en": "Sakaishi Museum",
    "ja": "堺市博物館"
  },
  "開口神社": {
    "zh": "開口神社",
    "en": "Kaiko Shrine",
    "ja": "開口神社"
  },
  "方違神社": {
    "zh": "方違神社",
    "en": "Katatagae Shrine",
    "ja": "方違神社"
  },
  "南宗寺": {
    "zh": "南宗寺",
    "en": "Nanshu Temple",
    "ja": "南宗寺"
  },
  "堺 アルフォンス･ミュシャ館（堺市立文化館）": {
    "zh": "堺 アルフォンス･ミュシャ館（堺市立文化館）",
    "en": "Sakai Arufuonsuarufuonsumyushakan Sakaishitatebumikakan",
    "ja": "堺 アルフォンス･ミュシャ館（堺市立文化館）"
  },
  "道具屋和田商店": {
    "zh": "道具屋和田商店",
    "en": "Doguyawadashoten",
    "ja": "道具屋和田商店"
  },
  "堺・緑のミュージアム ハーベストの丘": {
    "zh": "堺・緑のミュージアム ハーベストの丘",
    "en": "Sakai Midorinomyujiamu Habesutonoka",
    "ja": "堺・緑のミュージアム ハーベストの丘"
  },
  "堺伝匠館": {
    "zh": "堺伝匠馆",
    "en": "Sakaidentakumikan",
    "ja": "堺伝匠館"
  },
  "大仙公園 日本庭園": {
    "zh": "大仙公园 日本庭园",
    "en": "Daisenkoen Nihon Garden",
    "ja": "大仙公園 日本庭園"
  },
  "さかい利晶の杜": {
    "zh": "さかい利晶の杜",
    "en": "Sakairiakinomori",
    "ja": "さかい利晶の杜"
  },
  "大阪府民の森ほりご園地（愛称：紀泉わいわい村 FUNNY HEARTH）": {
    "zh": "大阪府民の森ほりご園地（愛称：紀泉わいわい村 FUNNY HEARTH）",
    "en": "Osakafuminnomorihorigoenchi Aisho:kizumiwaiwaimura Funny Hearth",
    "ja": "大阪府民の森ほりご園地（愛称：紀泉わいわい村 FUNNY HEARTH）"
  },
  "大阪府民の森ちはや園地": {
    "zh": "大阪府民の森ちはや園地",
    "en": "Osakafuminnomorichihayaenchi",
    "ja": "大阪府民の森ちはや園地"
  },
  "大阪府民の森ほしだ園地": {
    "zh": "大阪府民の森ほしだ園地",
    "en": "Osakafuminnomorihoshidaenchi",
    "ja": "大阪府民の森ほしだ園地"
  },
  "大阪府立青少年海洋センター": {
    "zh": "大阪府立青少年海洋センター",
    "en": "Osakafuritsuseishonenkaiyosenta",
    "ja": "大阪府立青少年海洋センター"
  },
  "大阪市中央公会堂": {
    "zh": "大阪市中央公会堂",
    "en": "Osakashichuokokaido",
    "ja": "大阪市中央公会堂"
  },
  "大阪市立住まいのミュージアム大阪くらしの今昔館": {
    "zh": "大阪市立住まいのミュージアム大阪くらしの今昔館",
    "en": "Osakashiritsusumainomyujiamuosakakurashinokonjakukan",
    "ja": "大阪市立住まいのミュージアム大阪くらしの今昔館"
  },
  "てんしば（天王寺公園）": {
    "zh": "てんしば（天王寺公園）",
    "en": "Tenshiba Tennojikoen",
    "ja": "てんしば（天王寺公園）"
  },
  "天王寺動物園": {
    "zh": "天王寺动物园",
    "en": "Tennoji Zoo",
    "ja": "天王寺動物園"
  },
  "大阪歴史博物館": {
    "zh": "大阪歴史博物馆",
    "en": "Osakarekishi Museum",
    "ja": "大阪歴史博物館"
  },
  "大阪市立自然史博物館": {
    "zh": "大阪市立自然史博物馆",
    "en": "Osakashiritsushizenshi Museum",
    "ja": "大阪市立自然史博物館"
  },
  "大阪市立東洋陶磁美術館": {
    "zh": "大阪市立東洋陶磁美术馆",
    "en": "Osakashirittohiroshitoji Art Museum",
    "ja": "大阪市立東洋陶磁美術館"
  },
  "新幹線公園": {
    "zh": "新幹線公园",
    "en": "Shinkansen Park",
    "ja": "新幹線公園"
  },
  "大阪駅": {
    "zh": "大阪駅",
    "en": "Osakaeki",
    "ja": "大阪駅"
  },
  "大阪難波駅": {
    "zh": "大阪難波駅",
    "en": "Osakanambaeki",
    "ja": "大阪難波駅"
  },
  "新大阪駅": {
    "zh": "新大阪駅",
    "en": "Shinosakaeki",
    "ja": "新大阪駅"
  },
  "関西空港": {
    "zh": "关西机场",
    "en": "Kansai Airport",
    "ja": "関西空港"
  },
  "南海高野線堺東駅": {
    "zh": "南海高野線堺東駅",
    "en": "Nankaitakanosensakaihigashieki",
    "ja": "南海高野線堺東駅"
  },
  "大阪メトロ谷町4丁目駅": {
    "zh": "大阪メトロ谷町4丁目駅",
    "en": "Osakametorotanimachi4chomeki",
    "ja": "大阪メトロ谷町4丁目駅"
  }
};

function getDisplayPoiName(nameJa) {
  const key = (nameJa || '').trim();
  const row = POI_NAME_I18N[key];
  if (!row) return key;
  if (currentLanguage === 'zh') return row.zh || row.ja || key;
  if (currentLanguage === 'en') return row.en || row.ja || key;
  return row.ja || key;
}

const PREFECTURE_I18N = {
  '三重県': {zh:'三重县', en:'Mie Prefecture', ja:'三重県'},
  '福井県': {zh:'福井县', en:'Fukui Prefecture', ja:'福井県'},
  '滋賀県': {zh:'滋贺县', en:'Shiga Prefecture', ja:'滋賀県'},
  '京都府': {zh:'京都府', en:'Kyoto Prefecture', ja:'京都府'},
  '兵庫県': {zh:'兵库县', en:'Hyogo Prefecture', ja:'兵庫県'},
  '奈良県': {zh:'奈良县', en:'Nara Prefecture', ja:'奈良県'},
  '和歌山県': {zh:'和歌山县', en:'Wakayama Prefecture', ja:'和歌山県'},
  '鳥取県': {zh:'鸟取县', en:'Tottori Prefecture', ja:'鳥取県'},
  '徳島県': {zh:'德岛县', en:'Tokushima Prefecture', ja:'徳島県'},
  '大阪府': {zh:'大阪府', en:'Osaka Prefecture', ja:'大阪府'}
};

function getDisplayPrefectureName(prefJa) {
  const key = (prefJa || '').trim();
  const row = PREFECTURE_I18N[key];
  if (!row) return key;
  return row[currentLanguage] || row.ja || key;
}



const LANG_PACK = {
  zh: {
    categories: {shopping:'购物', nature:'自然', food:'美食', culture:'文化', entertainment:'娱乐'},
    pageTitle:'🏯 关西旅游推荐体验',
    pageSubtitle:'真实用户评分 + 580个精选景点',
    pageNote:'已去除低评论数景点，并排除了原始热门经典点的重复推荐',
    welcomeTitle:'👋 欢迎使用本软件',
    welcomeDesc1:'欢迎来到关西旅游推荐系统。您可以根据自己去过（或感兴趣）的景点与个人评分，快速获得更符合个人偏好的关西观光地推荐结果。',
    welcomeDesc2:'本系统将结合真实用户评分、清洗后的景点数据，并基于<b>协同过滤技术</b>进行推荐，为您分别生成<b>购物、自然、美食、文化、娱乐</b>五类推荐内容，帮助您更直观地发现可能感兴趣的新景点。',
    nonprofit:'本软件仅用于学习、演示与非盈利目的，不用于任何商业用途。',
    start:'开始使用 👉',
    back:'← 返回',
    backPrev:'← 返回上一步',
    backEdit:'← 返回修改评分',
    step1Title:'📍 1. 关西著名景点',
    step1Alert:'请选择您去过（或感兴趣）的景点（至少选4个），系统将根据您的选择与评分推断偏好类型，并推荐更符合偏好的新景点。',
    next:'下一步：偏好打分 👉',
    step2Title:'⭐ 2. 请为这些景点打分',
    step2Desc:'请根据您对这些景点的关心程度进行评分。无论是您已经去过，还是只是感兴趣，都可以按照兴趣程度给出1-5分评价：',
    generate:'✨ 生成五类推荐',
    mapChooserTitle:'选择地图',
    mapGoogle:'Google 地图',
    mapApple:'Apple 地图',
    mapAmap:'高德地图',
    mapCancel:'取消',
    openMap:'跳转地图',
    googleAttribution:'部分地点信息与评价数据来源于 Google Maps Platform。Google Maps 为 Google 的商标。',
    authorBy:'作者',
    authorRole:'Kong TV',
    cfExplainTitle:'什么是协同过滤？',
    cfExplainText:'协同过滤是一种根据“和你兴趣相似的人喜欢什么”，来推荐你可能也会喜欢的内容的信息检索方法。',
    feedbackTitle:'体验反馈',
    feedbackDesc:'欢迎填写简短反馈问卷。提交结果将发送至研究者邮箱，用于系统改进与研究分析。',
    feedbackQ1:'本系统整体上易于理解和操作。',
    feedbackQ2:'推荐结果整体上符合我的兴趣。',
    feedbackQ3:'五类分类（购物、自然、美食、文化、娱乐）对我有帮助。',
    feedbackQ4:'地图跳转功能对我有帮助。',
    feedbackQ5:'如果系统继续完善，我愿意再次使用。',
    feedbackQ6:'我愿意在实际关西旅行计划中参考本系统。',
    feedbackOpen1:'您认为本系统最有帮助的地方是什么？（选填）',
    feedbackOpen2:'您认为本系统还需要改进哪些地方？（选填）',
    feedbackEmail:'如愿意，可留下您的邮箱（选填）',
    feedbackPlaceholder1:'请输入您的想法',
    feedbackPlaceholder2:'请输入改进建议',
    feedbackEmailPlaceholder:'name@example.com',
    feedbackSubmit:'提交反馈',
    feedbackSubmitting:'正在提交...',
    feedbackSuccess:'感谢您的反馈，已成功提交。',
    feedbackError:'提交失败，请稍后重试。',
    feedbackRequiredHint:'请先完成所有必答题。',
    feedbackPrivacy:'提交即表示您同意将本次反馈用于系统改进与学术研究分析。',
    feedbackScale1:'1 非常不同意',
    feedbackScale2:'2 不同意',
    feedbackScale3:'3 一般',
    feedbackScale4:'4 同意',
    feedbackScale5:'5 非常同意',
    ratingLegend:'兴趣程度说明：1=完全不感兴趣，2=不太感兴趣，3=一般，4=比较感兴趣，5=非常感兴趣',
    ratingScale1:'1 完全不感兴趣',
    ratingScale2:'2 不太感兴趣',
    ratingScale3:'3 一般',
    ratingScale4:'4 比较感兴趣',
    ratingScale5:'5 非常感兴趣',
    resultTitle:'🎯 推荐结果',
    prefTitle:'🧠 您的类型偏好画像',
    judgeTitle:'🏆 系统判断',
    resultAlert:'下列结果来自清洗后的高质量候选池，系统已按 <b>评价人数优先</b>，并结合 Google Maps 评分进行排序。<br>为确保能够更准确地对应并搜索到实际观光地，推荐结果会优先显示较为可靠的中文或英文常用译名；对难以准确翻译、或译名可能产生歧义的景点，将保留<b>日文原名</b>显示。',
    loaded:'✔ 已载入真实用户评分与580个精选景点。',
    avg:'用户均分',
    min3:'请至少选择4个景点。',
    point:' 分',
    scoreUnit:'分',
    topSentence:'系统会综合您选择的“去过（或感兴趣）”景点及评分，判断您当前最偏好的景点类型是 <b>{type}</b>。',
    secondSentence:'次偏好类型：{type}。下方将分别展示五类推荐结果，每类显示约14个景点，并可在卡片内上下滚动查看。',
    recTitle:'{type}推荐',
    recSub:'基于您的偏好得分：{score}',
    noReco:'暂无可推荐景点',
    mainType:'主类型：{type}',
    rating:'⭐ 评分 {value}',
    reviews:'🗳️ 评价数 {value}'
  },
  en: {
    categories: {shopping:'Shopping', nature:'Nature', food:'Food', culture:'Culture', entertainment:'Entertainment'},
    pageTitle:'🏯 Kansai Travel Recommender',
    pageSubtitle:'Real user ratings + 580 curated spots',
    pageNote:'Low-review spots removed and duplicate classic spots excluded',
    welcomeTitle:'👋 Welcome',
    welcomeDesc1:'Welcome to the Kansai travel recommender. Based on places you have visited (or are interested in) and your ratings, the system suggests new attractions that better match your personal preferences.',
    welcomeDesc2:'Using real user ratings, cleaned attraction data, and recommendations based on <b>collaborative filtering</b>, the system generates suggestions across <b>Shopping, Nature, Food, Culture, and Entertainment</b> to help you discover new places that may interest you.',
    nonprofit:'This software is for learning, demonstration, and non-profit purposes only, and is not intended for any commercial use.',
    start:'Start 👉',
    back:'← Back',
    backPrev:'← Back',
    backEdit:'← Back to edit ratings',
    step1Title:'📍 1. Famous attractions in Kansai',
    step1Alert:'Please select at least 4 places you have visited (or are interested in). The system will infer your preference type from your choices and ratings.',
    next:'Next: Rate preferences 👉',
    step2Title:'⭐ 2. Rate these places',
    step2Desc:'Please rate your level of interest in these places. Whether you have visited them or are simply interested, give each place a score from 1 to 5.',
    generate:'✨ Generate recommendations',
    mapChooserTitle:'Choose a map',
    mapGoogle:'Google Maps',
    mapApple:'Apple Maps',
    mapAmap:'Amap',
    mapCancel:'Cancel',
    openMap:'Open map',
    googleAttribution:'Some place information and rating data are provided by Google Maps Platform. Google Maps is a trademark of Google.',
    authorBy:'Author',
    authorRole:'Kong TV',
    cfExplainTitle:'What is collaborative filtering?',
    cfExplainText:'Collaborative filtering is an information retrieval method that recommends content you may also like based on what people with interests similar to yours prefer.',
    feedbackTitle:'Feedback',
    feedbackDesc:'Please complete this short feedback form. Your response will be emailed to the researcher for system improvement and research analysis.',
    feedbackQ1:'The system is easy to understand and use overall.',
    feedbackQ2:'The recommendations generally match my interests.',
    feedbackQ3:'The five recommendation categories are helpful.',
    feedbackQ4:'The map jump feature is useful to me.',
    feedbackQ5:'I would use this system again if it is further improved.',
    feedbackQ6:'I would consider using this system in an actual Kansai travel plan.',
    feedbackOpen1:'What was the most helpful part of this system? (Optional)',
    feedbackOpen2:'What aspects of this system should be improved? (Optional)',
    feedbackEmail:'Optional email address',
    feedbackPlaceholder1:'Enter your thoughts',
    feedbackPlaceholder2:'Enter improvement suggestions',
    feedbackEmailPlaceholder:'name@example.com',
    feedbackSubmit:'Submit feedback',
    feedbackSubmitting:'Submitting...',
    feedbackSuccess:'Thank you. Your feedback has been submitted.',
    feedbackError:'Submission failed. Please try again later.',
    feedbackRequiredHint:'Please complete all required questions first.',
    feedbackPrivacy:'By submitting, you agree that your feedback may be used for system improvement and academic research analysis.',
    feedbackScale1:'1 Strongly disagree',
    feedbackScale2:'2 Disagree',
    feedbackScale3:'3 Neutral',
    feedbackScale4:'4 Agree',
    feedbackScale5:'5 Strongly agree',
    ratingLegend:'Interest level: 1 = Not interested at all, 2 = Not very interested, 3 = Neutral, 4 = Interested, 5 = Very interested',
    ratingScale1:'1 Not interested at all',
    ratingScale2:'2 Not very interested',
    ratingScale3:'3 Neutral',
    ratingScale4:'4 Interested',
    ratingScale5:'5 Very interested',
    resultTitle:'🎯 Recommendation Results',
    prefTitle:'🧠 Your preference profile',
    judgeTitle:'🏆 System insight',
    resultAlert:'The results below come from a cleaned high-quality candidate pool and are ranked primarily by <b>review count</b>, together with Google Maps ratings.<br>To preserve accuracy, the results will show multilingual names when reliable; attractions that are difficult to translate precisely or may be ambiguous will remain in <b>Japanese</b>.',
    loaded:'✔ Real user ratings and 580 curated spots loaded.',
    avg:'Average user rating',
    min3:'Please select at least 4 attractions.',
    point:' pts',
    scoreUnit:' pts',
    topSentence:'Based on your selected visited (or interesting) places and ratings, the system judges that your strongest preference type is <b>{type}</b>.',
    secondSentence:'Second preference type: {type}. Below, five categories are shown, with about 14 spots per card and vertical scrolling.',
    recTitle:'{type} Recommendations',
    recSub:'Based on your preference score: {score}',
    noReco:'No recommendable spots available',
    mainType:'Main type: {type}',
    rating:'⭐ Rating {value}',
    reviews:'🗳️ Reviews {value}'
  },
  ja: {
    categories: {shopping:'買い物', nature:'自然', food:'グルメ', culture:'文化', entertainment:'娯楽'},
    pageTitle:'🏯 関西観光レコメンド',
    pageSubtitle:'実ユーザー評価 + 厳選580スポット',
    pageNote:'レビュー数の少ないスポットを除外し、定番スポットの重複推薦も避けています',
    welcomeTitle:'👋 ようこそ',
    welcomeDesc1:'関西観光レコメンドへようこそ。行ったことのある場所、または興味のある場所とご自身の評価に基づき、個人の嗜好に合った新しい観光地をおすすめします。',
    welcomeDesc2:'実ユーザー評価、整理済み観光地データ、そして<b>協調フィルタリング技術</b>に基づいて、<b>買い物・自然・グルメ・文化・娯楽</b>の5カテゴリでおすすめを提示します。',
    nonprofit:'本ソフトは学習・デモ・非営利目的のみで使用され、いかなる商用利用も行いません。',
    start:'開始 👉',
    back:'← 戻る',
    backPrev:'← 前へ戻る',
    backEdit:'← 評価を修正',
    step1Title:'📍 1. 関西の有名観光地',
    step1Alert:'行ったことがある、または興味のある景点を4つ以上選択してください。選択内容と評価から好みのタイプを推定します。',
    next:'次へ：好みを評価 👉',
    step2Title:'⭐ 2. 景点を評価してください',
    step2Desc:'これらの景点に対する関心度を1〜5で評価してください。実際に訪れた場合でも、興味があるだけでも構いません。',
    generate:'✨ 5カテゴリの推薦を生成',
    mapChooserTitle:'地図を選択',
    mapGoogle:'Googleマップ',
    mapApple:'Appleマップ',
    mapAmap:'高徳地図',
    mapCancel:'キャンセル',
    openMap:'地図を開く',
    googleAttribution:'一部のスポット情報および評価データは Google Maps Platform に基づいています。Google Maps は Google の商標です。',
    authorBy:'作者',
    authorRole:'Kong TV',
    cfExplainTitle:'協調フィルタリングとは何ですか。',
    cfExplainText:'協調フィルタリングとは、「あなたと興味が似ている人が何を好むか」に基づいて、あなたも好む可能性のある内容を推薦する情報検索手法です。',
    feedbackTitle:'フィードバック',
    feedbackDesc:'簡単なフィードバックにご協力ください。送信内容は研究者のメールに送られ、システム改善と研究分析に利用されます。',
    feedbackQ1:'本システムは全体として理解しやすく、操作しやすい。',
    feedbackQ2:'推薦結果は全体として私の関心に合っている。',
    feedbackQ3:'5つの分類（買い物・自然・グルメ・文化・娯楽）は役に立つ。',
    feedbackQ4:'地図への遷移機能は役に立つ。',
    feedbackQ5:'さらに改善されれば、再度利用したい。',
    feedbackQ6:'実際の関西旅行計画でも本システムを参考にしたい。',
    feedbackOpen1:'本システムで最も役に立った点は何ですか。（任意）',
    feedbackOpen2:'本システムで改善が必要だと思う点は何ですか。（任意）',
    feedbackEmail:'よろしければメールアドレス（任意）',
    feedbackPlaceholder1:'ご意見をご入力ください',
    feedbackPlaceholder2:'改善提案をご入力ください',
    feedbackEmailPlaceholder:'name@example.com',
    feedbackSubmit:'フィードバックを送信',
    feedbackSubmitting:'送信中...',
    feedbackSuccess:'ありがとうございます。フィードバックを送信しました。',
    feedbackError:'送信に失敗しました。しばらくしてからもう一度お試しください。',
    feedbackRequiredHint:'必須項目に回答してください。',
    feedbackPrivacy:'送信により、フィードバックがシステム改善および学術研究分析に利用されることに同意したものとみなされます。',
    feedbackScale1:'1 まったくそう思わない',
    feedbackScale2:'2 そう思わない',
    feedbackScale3:'3 どちらでもない',
    feedbackScale4:'4 そう思う',
    feedbackScale5:'5 非常にそう思う',
    ratingLegend:'関心度の目安：1=まったく関心がない、2=あまり関心がない、3=どちらでもない、4=やや関心がある、5=非常に関心がある',
    ratingScale1:'1 まったく関心がない',
    ratingScale2:'2 あまり関心がない',
    ratingScale3:'3 どちらでもない',
    ratingScale4:'4 やや関心がある',
    ratingScale5:'5 非常に関心がある',
    resultTitle:'🎯 推薦結果',
    prefTitle:'🧠 あなたの嗜好プロフィール',
    judgeTitle:'🏆 システム判定',
    resultAlert:'以下の結果は、整理済みの高品質候補群から抽出され、<b>レビュー数優先</b>で Google Maps 評価を加味して並べています。<br>観光地をより正確に表記するため、信頼できる中国語・英語訳がある場合のみそれを表示し、訳語が不正確になりうる景点は<b>日本語原文</b>のまま表示します。',
    loaded:'✔ 実ユーザー評価と厳選580スポットを読み込みました。',
    avg:'ユーザー平均',
    min3:'少なくとも4つの景点を選択してください。',
    point:' 点',
    scoreUnit:'点',
    topSentence:'選択した「行ったことがある（または興味のある）」景点と評価に基づき、現在もっとも好みの強いタイプは <b>{type}</b> と判断されます。',
    secondSentence:'次に高い好みのタイプ：{type}。下に5カテゴリを表示し、各カードで約14件をスクロール表示します。',
    recTitle:'{type}のおすすめ',
    recSub:'あなたの嗜好スコア：{score}',
    noReco:'おすすめできる景点がありません',
    mainType:'主タイプ：{type}',
    rating:'⭐ 評価 {value}',
    reviews:'🗳️ 件数 {value}'
  }
};

function tt(key, vars) {
  let s = (LANG_PACK[currentLanguage] || LANG_PACK.zh)[key] || '';
  if (vars) {
    Object.keys(vars).forEach(k => {
      s = s.split('{' + k + '}').join(vars[k]);
    });
  }
  return s;
}

function updateTypeLabels() {
  const c = (LANG_PACK[currentLanguage] || LANG_PACK.zh).categories;
  Object.keys(c).forEach(k => TYPE_LABELS[k] = c[k]);
}

function applyLanguageStatic() {
  updateTypeLabels();
  const setText = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  const setHTML = (id, v) => { const el = document.getElementById(id); if (el) el.innerHTML = v; };

  setText('pageTitle', tt('pageTitle'));
  setText('pageSubtitle', tt('pageSubtitle'));
  setText('pageNote', tt('pageNote'));
  setText('welcomeTitle', tt('welcomeTitle'));
  setText('welcomeDesc1', tt('welcomeDesc1'));
  setHTML('welcomeDesc2', tt('welcomeDesc2'));
  setText('cfExplainTitle', tt('cfExplainTitle'));
  setText('cfExplainText', tt('cfExplainText'));
  setText('welcomeNonprofit', tt('nonprofit'));
  setText('startBtn', tt('start'));
  setText('backBtn1', tt('back'));
  setText('step1Title', tt('step1Title'));
  setText('step1Alert', tt('step1Alert'));
  setText('step1NextBtn', tt('next'));
  setText('backBtn2', tt('backPrev'));
  setText('step2Title', tt('step2Title'));
  setText('step2Desc', tt('step2Desc'));
  setText('step2GenerateBtn', tt('generate'));
  setText('mapChooserTitle', tt('mapChooserTitle'));
  setText('mapGoogleBtn', tt('mapGoogle'));
  setText('mapAppleBtn', tt('mapApple'));
  setText('mapAmapBtn', tt('mapAmap'));
  setText('mapCancelBtn', tt('mapCancel'));

  const actions = document.querySelector('#mapChooserModal .map-chooser-actions');
  const googleBtn = document.getElementById('mapGoogleBtn');
  const appleBtn = document.getElementById('mapAppleBtn');
  const amapBtn = document.getElementById('mapAmapBtn');
  const cancelBtn = document.getElementById('mapCancelBtn');
  if (actions && googleBtn && appleBtn && amapBtn && cancelBtn) {
    actions.innerHTML = '';
    if (currentLanguage === 'zh') {
      actions.appendChild(amapBtn);
      actions.appendChild(appleBtn);
      actions.appendChild(googleBtn);
    } else {
      actions.appendChild(googleBtn);
      actions.appendChild(appleBtn);
      actions.appendChild(amapBtn);
    }
    actions.appendChild(cancelBtn);
  }
  setText('backBtn3', tt('backEdit'));
  setText('step3Title', tt('resultTitle'));
  setText('prefSummaryTitle', tt('prefTitle'));
  setText('judgeTitle', tt('judgeTitle'));
  setHTML('resultAlert', tt('resultAlert'));
  setText('globalAttributionFooter', tt('googleAttribution'));
  setText('authorNameLine', 'Kong TV');
  setText('authorRoleLine', tt('authorBy'));
  renderFeedbackSection();
}

function changeLanguage(lang) {
  currentLanguage = lang;
  applyLanguageStatic(); const nonprofitEl = document.getElementById('welcomeNonprofit'); if (nonprofitEl) nonprofitEl.textContent = tt('nonprofit');
  showStatus('success', tt('loaded'));
  refreshSelectionCardsLanguage();
  refreshRatingItemNames();
  refreshRatingCardsLanguage();
  if (currentResultPayload && currentResultPayload.type_scores && currentResultPayload.type_scores_normalized) {
    renderPreferenceSummary(currentResultPayload.type_scores, currentResultPayload.type_scores_normalized);
    renderTopTypeSummary(currentResultPayload.type_scores);
    renderCategoryRecommendations(currentResultPayload.type_scores, currentResultPayload.type_scores_normalized);
  }
}

function refreshSelectionCardsLanguage() {
  document.querySelectorAll('#attractionSelectionArea .card-select').forEach((card, idx) => {
    const item = ATTRACTION_CONFIG[idx];
    const titleEl = card.querySelector('.fw-bold');
    const noteEl = card.querySelector('.small-note');
    if (item && titleEl) titleEl.textContent = getAttractionName(item);
    if (item && noteEl) noteEl.textContent = tt('avg') + ' ' + seedPopularity(item.id).toFixed(1) + ' / 5';
  });
}


function refreshRatingItemNames() {
  document.querySelectorAll('#ratingArea .bg-white.p-3.border.rounded').forEach(box => {
    const label = box.querySelector('label');
    const slider = box.querySelector('.rating-slider');
    if (!label || !slider) return;
    const pid = slider.dataset.pid;
    const item = ATTRACTION_CONFIG.find(x => x.id === pid);
    if (item) label.textContent = `${item.img} ${getAttractionName(item)}`;
  });
}

function refreshRatingCardsLanguage() {
  document.querySelectorAll('#ratingArea .rating-value').forEach(el => {
    const num = String(el.textContent).replace(/[^0-9.]/g, '') || '3';
    el.textContent = num + tt('point');
  });
  document.querySelectorAll('#ratingArea .rating-scale-row').forEach(row => {
    const pills = row.querySelectorAll('.rating-scale-pill');
    const keys = ['ratingScale1','ratingScale2','ratingScale3','ratingScale4','ratingScale5'];
    pills.forEach((pill, idx) => {
      if (keys[idx]) pill.textContent = tt(keys[idx]);
    });
  });
}

let dataset = [];
let csvHeaderMap = {};
let cleanedMatrix = [];
let userSelections = [];
let userRatings = {};
let currentResultPayload = null;
let pendingMapPlace = { poiName: '', prefectureName: '' };

function getMapSearchUrl(provider, poiName, prefectureName) {
  const query = `${poiName} ${prefectureName}`.trim();
  const enc = encodeURIComponent(query);
  if (provider === 'apple') {
    return `https://maps.apple.com/?q=${enc}`;
  }
  if (provider === 'amap') {
    return `https://uri.amap.com/search?keyword=${enc}`;
  }
  return `https://www.google.com/maps/search/?api=1&query=${enc}`;
}

function openMapChooser(poiName, prefectureName) {
  pendingMapPlace = { poiName, prefectureName };
  const modal = document.getElementById('mapChooserModal');
  if (modal) modal.style.display = 'flex';
}

function closeMapChooser() {
  const modal = document.getElementById('mapChooserModal');
  if (modal) modal.style.display = 'none';
}

function chooseMapProvider(provider) {
  const url = getMapSearchUrl(provider, pendingMapPlace.poiName, pendingMapPlace.prefectureName);
  closeMapChooser();
  window.open(url, '_blank', 'noopener,noreferrer');
}



let feedbackDraft = {
  q1: '', q2: '', q3: '', q4: '', q5: '', q6: '',
  open1: '', open2: '', email: '', honeypot: ''
};
let feedbackSubmitting = false;

function getFeedbackContext() {
  const selectedItems = Array.isArray(userSelections)
    ? userSelections.map(id => {
        return getSeedEnglishNameById(id);
      })
    : [];
  const topType = currentResultPayload?.type_scores
    ? Object.keys(currentResultPayload.type_scores).sort((a,b) => currentResultPayload.type_scores[b] - currentResultPayload.type_scores[a])[0]
    : '';
  return {
    language: currentLanguage,
    selected_items: selectedItems,
    selected_item_ids: Array.isArray(userSelections) ? [...userSelections] : [],
    top_type_key: topType,
    top_type_label: topType ? TYPE_LABELS[topType] : '',
    page_url: window.location.href,
    submitted_at: new Date().toISOString(),
    user_agent: navigator.userAgent
  };
}

function renderLikertField(name, labelText) {
  const keys = ['feedbackScale1','feedbackScale2','feedbackScale3','feedbackScale4','feedbackScale5'];
  return `
    <div class="feedback-item">
      <div class="feedback-label">${labelText}<span class="feedback-required">*</span></div>
      <div class="likert-row">
        ${[1,2,3,4,5].map((n, idx) => `
          <label class="likert-option ${Number(feedbackDraft[name]) === n ? 'active' : ''}" data-name="${name}" data-value="${n}">
            <input type="radio" name="${name}" value="${n}" ${Number(feedbackDraft[name]) === n ? 'checked' : ''}>
            <span>${tt(keys[idx])}</span>
          </label>
        `).join('')}
      </div>
    </div>
  `;
}

function renderFeedbackSection() {
  const container = document.getElementById('feedbackSectionInner');
  if (!container) return;

  container.innerHTML = `
    <div class="feedback-card">
      <div class="feedback-title">${tt('feedbackTitle')}</div>
      <div class="feedback-desc">${tt('feedbackDesc')}</div>
      <form id="feedbackForm" class="feedback-grid">
        ${renderLikertField('q1', tt('feedbackQ1'))}
        ${renderLikertField('q2', tt('feedbackQ2'))}
        ${renderLikertField('q3', tt('feedbackQ3'))}
        ${renderLikertField('q4', tt('feedbackQ4'))}
        ${renderLikertField('q5', tt('feedbackQ5'))}
        ${renderLikertField('q6', tt('feedbackQ6'))}

        <div class="feedback-item">
          <div class="feedback-label">${tt('feedbackOpen1')}</div>
          <textarea class="feedback-textarea" id="feedbackOpen1" placeholder="${tt('feedbackPlaceholder1')}">${feedbackDraft.open1 || ''}</textarea>
        </div>

        <div class="feedback-item">
          <div class="feedback-label">${tt('feedbackOpen2')}</div>
          <textarea class="feedback-textarea" id="feedbackOpen2" placeholder="${tt('feedbackPlaceholder2')}">${feedbackDraft.open2 || ''}</textarea>
        </div>

        <div class="feedback-item">
          <div class="feedback-label">${tt('feedbackEmail')}</div>
          <input class="feedback-input" id="feedbackEmail" type="email" placeholder="${tt('feedbackEmailPlaceholder')}" value="${feedbackDraft.email || ''}">
        </div>

        <input class="feedback-hidden" id="feedbackHoneypot" type="text" autocomplete="off" tabindex="-1" value="${feedbackDraft.honeypot || ''}">

        <div class="feedback-note">${tt('feedbackPrivacy')}</div>

        <div class="feedback-actions">
          <button id="feedbackSubmitBtn" type="submit" class="feedback-submit-btn" ${feedbackSubmitting ? 'disabled' : ''}>
            ${feedbackSubmitting ? tt('feedbackSubmitting') : tt('feedbackSubmit')}
          </button>
          <div id="feedbackStatus" class="feedback-status"></div>
        </div>
      </form>
    </div>
  `;

  bindFeedbackForm();
}

function bindFeedbackForm() {
  const form = document.getElementById('feedbackForm');
  if (!form) return;

  form.querySelectorAll('.likert-option').forEach(label => {
    label.addEventListener('click', () => {
      const name = label.dataset.name;
      const value = label.dataset.value;
      feedbackDraft[name] = value;
      renderFeedbackSection();
    });
  });

  const open1 = document.getElementById('feedbackOpen1');
  const open2 = document.getElementById('feedbackOpen2');
  const email = document.getElementById('feedbackEmail');
  const honeypot = document.getElementById('feedbackHoneypot');

  if (open1) open1.addEventListener('input', e => feedbackDraft.open1 = e.target.value);
  if (open2) open2.addEventListener('input', e => feedbackDraft.open2 = e.target.value);
  if (email) email.addEventListener('input', e => feedbackDraft.email = e.target.value);
  if (honeypot) honeypot.addEventListener('input', e => feedbackDraft.honeypot = e.target.value);

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const required = ['q1','q2','q3','q4','q5','q6'];
    if (required.some(k => !feedbackDraft[k])) {
      const status = document.getElementById('feedbackStatus');
      if (status) status.textContent = tt('feedbackRequiredHint');
      return;
    }

    feedbackSubmitting = true;
    renderFeedbackSection();

    try {
      const payload = {
        ...feedbackDraft,
        context: getFeedbackContext()
      };

      const res = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json().catch(() => ({}));
      const status = document.getElementById('feedbackStatus');

      if (!res.ok) {
        throw new Error(data.error || 'Request failed');
      }

      if (status) status.textContent = tt('feedbackSuccess');
      feedbackDraft = { q1:'', q2:'', q3:'', q4:'', q5:'', q6:'', open1:'', open2:'', email:'', honeypot:'' };
      feedbackSubmitting = false;
      renderFeedbackSection();
      const status2 = document.getElementById('feedbackStatus');
      if (status2) status2.textContent = tt('feedbackSuccess');
    } catch (err) {
      feedbackSubmitting = false;
      renderFeedbackSection();
      const status = document.getElementById('feedbackStatus');
      if (status) status.textContent = tt('feedbackError');
      console.error(err);
    }
  });
}

function normalize(str) {
 return str ? str.toString().toLowerCase().trim().replace(/[^a-z0-9]/g, '') : '';
}
function mean(arr) {
 if (!arr.length) return 0;
 return arr.reduce((a,b) => a+b, 0) / arr.length;
}
function showStatus(type, msg) {
 document.getElementById('fileStatus').innerHTML = `<div class="alert alert-${type} mb-0">${msg}</div>`;
}
function switchStep(from, to) {
 document.getElementById(from).classList.remove('active');
 document.getElementById(to).classList.add('active');
 window.scrollTo(0,0);
}

function initializeEmbeddedData() {
 dataset = EMBEDDED_DATASET;
 const headers = Object.keys(dataset[0] || {});
 csvHeaderMap = {};
 ATTRACTION_CONFIG.forEach(item => {
  const found = headers.find(h => item.dataKeyCandidates.some(k => normalize(h) === normalize(k)));
  if (found) csvHeaderMap[item.id] = found;
 });
 cleanedMatrix = dataset.map(row => {
  const obj = {};
  ATTRACTION_CONFIG.forEach(item => {
   const key = csvHeaderMap[item.id];
   const raw = key ? row[key] : 0;
   const num = Number(raw);
   obj[item.id] = Number.isFinite(num) && num > 0 ? Math.min(5, Math.max(1, Math.round(num))) : 0;
  });
  return obj;
 });
 initStep1();
 showStatus('success', tt('loaded'));
}

function startStudy() {
 switchStep('step0', 'step1');
}

function seedPopularity(id) {
 const vals = cleanedMatrix.map(x => x[id]).filter(v => v > 0);
 return vals.length ? mean(vals) : 0;
}

function initStep1() {
  userSelections = [];
  userRatings = {};
  currentResultPayload = null;
  const container = document.getElementById('attractionSelectionArea');
  container.innerHTML = '';
  ATTRACTION_CONFIG.forEach(item => {
    const col = document.createElement('div');
    col.className = 'col-6 col-md-4 col-lg-3';
    col.innerHTML = `
      <div class="card card-select p-3 text-center h-100" onclick="toggleSelect(this, '${item.id}')">
        <img class="seed-photo" src="${getSeedPhotoById(item.id)}" alt="${getAttractionName(item)}">
        <div style="font-size:1.6rem;">${item.img}</div>
        <div class="mt-2 fw-bold">${getAttractionName(item)}</div>

      </div>
    `;
    container.appendChild(col);
  });
}

function toggleSelect(el, id) {
 el.classList.toggle('selected');
 if (userSelections.includes(id)) {
  userSelections = userSelections.filter(k => k !== id);
  delete userRatings[id];
 } else {
  userSelections.push(id);
 }
}

function goToStep2() {
  if (userSelections.length < 4) {
    alert(tt('min3'));
    return;
  }
  const container = document.getElementById('ratingArea');
  container.innerHTML = '';
  userSelections.forEach(id => {
    const item = ATTRACTION_CONFIG.find(x => x.id === id);
    const div = document.createElement('div');
    div.className = 'col-12 col-md-6';
    div.innerHTML = `
      <div class="bg-white p-3 border rounded h-100">
        <img class="seed-photo" src="${getSeedPhotoById(item.id)}" alt="${getAttractionName(item)}">
        <label class="fw-bold mb-2">${item.img} ${getAttractionName(item)}</label>
        <input type="range" class="form-range rating-slider" min="1" max="5" value="3" data-pid="${id}">
        <div class="rating-scale-row">
          <div class="rating-scale-pill" data-score="1">${tt('ratingScale1')}</div>
          <div class="rating-scale-pill" data-score="2">${tt('ratingScale2')}</div>
          <div class="rating-scale-pill active" data-score="3">${tt('ratingScale3')}</div>
          <div class="rating-scale-pill" data-score="4">${tt('ratingScale4')}</div>
          <div class="rating-scale-pill" data-score="5">${tt('ratingScale5')}</div>
        </div>
        <div class="text-end text-primary fw-bold rating-value mt-2">3${tt('point')}</div>
      </div>
    `;
    container.appendChild(div);
    userRatings[id] = 3;
  });

  function syncRatingBox(box, value) {
    const slider = box.querySelector('.rating-slider');
    const valueEl = box.querySelector('.rating-value');
    const pills = box.querySelectorAll('.rating-scale-pill');
    if (slider) slider.value = String(value);
    if (valueEl) valueEl.textContent = value + tt('point');
    pills.forEach(p => p.classList.toggle('active', Number(p.dataset.score) === Number(value)));
  }

  container.querySelectorAll('.bg-white.p-3.border.rounded').forEach(box => {
    const slider = box.querySelector('.rating-slider');
    const pid = slider?.dataset.pid;
    if (!slider || !pid) return;

    slider.addEventListener('input', function() {
      const value = parseInt(this.value, 10);
      userRatings[pid] = value;
      syncRatingBox(box, value);
    });

    box.querySelectorAll('.rating-scale-pill').forEach(pill => {
      pill.addEventListener('click', function() {
        const value = parseInt(this.dataset.score, 10);
        userRatings[pid] = value;
        syncRatingBox(box, value);
      });
    });

    syncRatingBox(box, 3);
  });

  switchStep('step1', 'step2');
}

function inferTypeScores() {
 const scores = { shopping:0, nature:0, food:0, culture:0, entertainment:0 };
 userSelections.forEach(id => {
  const item = ATTRACTION_CONFIG.find(x => x.id === id);
  const rating = Number(userRatings[id] || 0);
  if (!item || rating <= 0) return;
  Object.entries(item.types || {}).forEach(([t, w]) => {
   scores[t] += rating * Number(w || 0);
  });
 });
 return scores;
}

function normalizeTypeScores(scores) {
 const total = Object.values(scores).reduce((a,b) => a+b, 0);
 if (!total) return Object.fromEntries(Object.keys(scores).map(k => [k, 0]));
 const out = {};
 Object.entries(scores).forEach(([k,v]) => out[k] = v / total);
 return out;
}

function selectedSeedNames() {
 return new Set(userSelections.map(id => (ATTRACTION_CONFIG.find(x => x.id === id)?.name || '').trim()));
}

function isCandidateOfType(p, typeKey) {
 return Number(p['type_' + typeKey] || 0) === 1 || p.main_type === typeKey;
}

function rankWithinType(typeKey, prefsNorm) {
  const seenNames = selectedSeedNames();
  const candidates = EXPANDED_CATALOG
    .filter(p => p.google_rating > 0)
    .filter(p => !seenNames.has((p.name_ja || '').trim()))
    .filter(p => isCandidateOfType(p, typeKey))
    .map(p => {
      const rating = Number(p.google_rating || 0);
      const reviewCount = Number(p.google_user_ratings_total || 0);
      const mainBonus = p.main_type === typeKey ? 0.15 : 0;
      const personalized = (prefsNorm[typeKey] || 0) + mainBonus;

      const reviewStrength = Math.log10(reviewCount + 1);
      const lowCountPenalty =
        reviewCount < 50 ? 1.2 :
        reviewCount < 100 ? 0.7 :
        reviewCount < 300 ? 0.25 : 0;

      const score =
        (rating * 35) +
        (reviewStrength * 30) +
        (personalized * 8) -
        lowCountPenalty;

      const isKix = ((p.name_ja || '').includes('関西空港') || (p.name_ja || '').includes('关西空港'));
      const displayName = isKix ? '関西空港 T1' : (p.name_ja || '');

      return { ...p, display_name_ja: displayName, final_rank_score: score };
    })
    .sort((a, b) => {
      const aCount = Number(a.google_user_ratings_total || 0);
      const bCount = Number(b.google_user_ratings_total || 0);
      const aRating = Number(a.google_rating || 0);
      const bRating = Number(b.google_rating || 0);

      if (bCount !== aCount) return bCount - aCount;
      if (bRating !== aRating) return bRating - aRating;
      return (b.final_rank_score || 0) - (a.final_rank_score || 0);
    });
  return candidates;
}

function renderPreferenceSummary(typeScores, prefsNorm) {
 const ordered = Object.keys(typeScores).sort((a,b) => typeScores[b] - typeScores[a]);
 document.getElementById('preferenceSummary').innerHTML = ordered.map(t => {
  const pct = Math.round((prefsNorm[t] || 0) * 100);
  return `
   <div class="mb-3">
    <div class="d-flex justify-content-between mb-1">
     <span class="fw-bold">${TYPE_LABELS[t]}</span>
     <span>${typeScores[t].toFixed(2)}${tt('scoreUnit')}</span>
    </div>
    <div class="pref-bar-wrap"><div class="pref-bar" style="width:${pct}%"></div></div>
    <div class="small-note mt-1">${pct}%</div>
   </div>
  `;
 }).join('');
}

function renderTopTypeSummary(typeScores) {
  const ordered = Object.keys(typeScores).sort((a,b) => typeScores[b] - typeScores[a]);
  document.getElementById('topTypeSummary').innerHTML = `
    <div class="hero-summary">
      <div class="mb-3"><span class="type-chip">${TYPE_LABELS[ordered[0]]}</span></div>
      <div class="mb-2">${tt('topSentence', {type: TYPE_LABELS[ordered[0]]})}</div>
      <div class="small-note">${tt('secondSentence', {type: TYPE_LABELS[ordered[1]]})}</div>
    </div>
  `;
}


function adjustKixForDisplay(typeKey, ranked) {
  const isKixItem = (p) => {
    const n = (p.display_name_ja || p.name_ja || '').trim();
    return n.includes('関西空港') || n.includes('关西空港');
  };

  let items = [...ranked];

  if (typeKey === 'entertainment') {
    items = items.filter(p => !isKixItem(p));
    return items;
  }

  if (typeKey === 'shopping') {
    const idx = items.findIndex(isKixItem);
    if (idx !== -1) {
      const kix = items.splice(idx, 1)[0];
      const targetPositions = [3, 4, 5]; // zero-based => 4th-6th
      const chosen = targetPositions[Math.floor(Math.random() * targetPositions.length)];
      const insertAt = Math.min(chosen, items.length);
      items.splice(insertAt, 0, kix);
    }
    return items;
  }

  return items;
}

function renderCategoryRecommendations(typeScores, prefsNorm) {
  const orderedTypes = Object.keys(typeScores).sort((a,b) => typeScores[b] - typeScores[a]);
  const container = document.getElementById('categoryRecommendations');
  container.innerHTML = '<div class="category-grid" id="categoryGridInner"></div>';
  const grid = document.getElementById('categoryGridInner');

  orderedTypes.forEach(typeKey => {
    let ranked = rankWithinType(typeKey, prefsNorm);
    ranked = adjustKixForDisplay(typeKey, ranked).slice(0, 14);
    const wrapper = document.createElement('div');
    wrapper.className = 'category-card';

    let html = `
      <div class="category-card-header">
        <div>
          <div class="category-card-title">${tt('recTitle', {type: TYPE_LABELS[typeKey]})}</div>
          <div class="category-card-subtitle">${tt('recSub', {score: typeScores[typeKey].toFixed(2)})}</div>
        </div>
        <span class="category-badge">${TYPE_LABELS[typeKey]}</span>
      </div>
      <div class="category-card-body-scroll">
    `;

    if (!ranked.length) {
      html += `<div class="text-muted">${tt('noReco')}</div>`;
    } else {
      ranked.forEach((p, idx) => {
        html += `
          <div class="poi-card">
            <div class="d-flex gap-3 align-items-start">
              <div class="poi-rank">${idx + 1}</div>
              <div class="flex-grow-1">
                <div class="poi-name">${getDisplayPoiName(p.display_name_ja || p.name_ja)}</div>
                <div class="poi-meta">${getDisplayPrefectureName(p.prefecture_ja)} · ${tt('mainType', {type: TYPE_LABELS[p.main_type] || p.main_type})}</div>
                <div class="metric-row">
                  <span class="metric-pill">${tt('rating', {value: Number(p.google_rating).toFixed(1)})}</span>
                  <span class="metric-pill">${tt('reviews', {value: (p.google_user_ratings_total || 0).toLocaleString()})}</span>
                </div>
                <div class="mt-2">
                  <button class="map-link-btn" data-poi="${encodeURIComponent(p.display_name_ja || p.name_ja)}" data-pref="${encodeURIComponent(p.prefecture_ja)}" onclick="openMapChooser(decodeURIComponent(this.dataset.poi), decodeURIComponent(this.dataset.pref))">${tt('openMap')}</button>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    }

    html += `</div>`;
    wrapper.innerHTML = html;
    grid.appendChild(wrapper);
  });
}

function generateRecommendations() {
 const typeScores = inferTypeScores();
 const prefsNorm = normalizeTypeScores(typeScores);
 renderPreferenceSummary(typeScores, prefsNorm);
 renderTopTypeSummary(typeScores);
 renderCategoryRecommendations(typeScores, prefsNorm);

 currentResultPayload = {
  selected_input_items: userSelections.map(id => {
   const item = ATTRACTION_CONFIG.find(x => x.id === id);
   return { id, name: item?.name || id, rating: userRatings[id] || 0 };
  }),
  type_scores: typeScores,
  type_scores_normalized: prefsNorm,
  top_recommendations_by_type: Object.fromEntries(
   Object.keys(typeScores).map(t => [t, rankWithinType(t, prefsNorm).slice(0, 8)])
  )
 };
 renderFeedbackSection();
 switchStep('step2', 'step3');
}




function goBackToWelcome() {
 switchStep('step1', 'step0');
}

function goBackToSelection() {
 switchStep('step2', 'step1');
}

function goBackToRatings() {
 switchStep('step3', 'step2');
}

window.addEventListener('DOMContentLoaded', () => { initializeEmbeddedData(); applyLanguageStatic(); const el = document.getElementById('welcomeNonprofit'); if (el) el.textContent = tt('nonprofit'); });
