import pandas as pd
import json

# 1. Đọc Quyển 1 (11 sheet: Bài 1 đến 10 + Từ vựng bổ sung)
xls_q1 = pd.ExcelFile('Q1-TỪ VỰNG MSUTONG SƠ CẤP Q1.xlsx')
lessons = []

for i, sheet in enumerate(xls_q1.sheet_names):
    df = pd.read_excel('Q1-TỪ VỰNG MSUTONG SƠ CẤP Q1.xlsx', sheet_name=sheet)
    words = []
    sentences = []
    for _, row in df.iterrows():
        hanzi = str(row.get('Từ vựng', '')).strip()
        pinyin = str(row.get('Pinyin', '')).strip()
        meaning = str(row.get('Nghĩa', '')).strip()
        if hanzi and hanzi != 'nan':
            words.append({"hanzi": hanzi, "pinyin": pinyin, "meaning": meaning})
            
        ex = row.get('Ví dụ')
        if pd.notna(ex) and str(ex).strip() != 'nan':
            sentences.append({"hanzi": str(ex).strip(), "pinyin": ""})
            
    lessons.append({
        "id": f"q1_lesson_{i+1}",
        "title": f"Quyển 1 - {sheet.strip()}",
        "words": words,
        "sentences": sentences if sentences else [{"hanzi": "好好学习，天天向上。", "pinyin": ""}]
    })

# 2. Đọc Quyển 2 (10 sheet: Bài 1 đến Bài 10)
xls_q2 = pd.ExcelFile('Q2-TỪ VỰNG MSUTONG SƠ CẤP QUYỂN 2.xlsx')
for i, sheet in enumerate(xls_q2.sheet_names):
    df = pd.read_excel('Q2-TỪ VỰNG MSUTONG SƠ CẤP QUYỂN 2.xlsx', sheet_name=sheet)
    words = []
    sentences = []
    for _, row in df.iterrows():
        hanzi = str(row.get('Từ vựng', '')).strip()
        pinyin = str(row.get('Pinyin', '')).strip()
        meaning = str(row.get('Nghĩa', '')).strip()
        if hanzi and hanzi != 'nan':
            words.append({"hanzi": hanzi, "pinyin": pinyin, "meaning": meaning})
            
        ex = row.get('Ví dụ (kèm Pinyin)') or row.get('Ví dụ ')
        if pd.notna(ex) and str(ex).strip() != 'nan':
            sentences.append({"hanzi": str(ex).strip(), "pinyin": ""})
            
    lessons.append({
        "id": f"q2_lesson_{i+1}",
        "title": f"Quyển 2 - {sheet.strip()}",
        "words": words,
        "sentences": sentences if sentences else [{"hanzi": "好好学习，天天向上。", "pinyin": ""}]
    })

# 3. Đọc HSK 1, 2, 3 từ file tổng hợp
xls_hsk = pd.ExcelFile('TỪ VỰNG HSK 3.0 TỔNG HỢP.xlsx')
hsk_data = []
title_map = {
    'hsk1': 'Cảnh Giới HSK1 - Sơ Khái (初阶)',
    'hsk2': 'Cảnh Giới HSK2 - Trúc Cơ (筑基)',
    'hsk3': 'Cảnh Giới HSK3 - Kim Đan (金丹)'
}

for sheet in xls_hsk.sheet_names:
    df = pd.read_excel('TỪ VỰNG HSK 3.0 TỔNG HỢP.xlsx', sheet_name=sheet)
    words = []
    sentences = []
    for _, row in df.iterrows():
        hanzi = str(row.get('Từ / Cụm từ', '')).strip()
        pinyin = str(row.get('Phiên âm', '')).strip()
        meaning = str(row.get('Nghĩa tiếng Việt', '')).strip()
        if hanzi and hanzi != 'nan':
            words.append({"hanzi": hanzi, "pinyin": pinyin, "meaning": meaning})
            
        ex = row.get('Câu ví dụ')
        if pd.notna(ex) and str(ex).strip() != 'nan':
            sentences.append({"hanzi": str(ex).strip(), "pinyin": ""})
            
    hsk_id = sheet.lower().strip()
    hsk_data.append({
        "id": hsk_id,
        "title": title_map.get(hsk_id, f"Cảnh Giới {sheet}"),
        "words": words,
        "sentences": sentences if sentences else [{"hanzi": "好好学习，天天向上。", "pinyin": ""}]
    })

# Xuất thành file data.js hoàn chỉnh
js_content = f"const gameData = {{\n  lessons: {json.dumps(lessons, ensure_ascii=False, indent=4)},\n  hsk: {json.dumps(hsk_data, ensure_ascii=False, indent=4)}\n}};"

with open('data.js', 'w', encoding='utf-8') as f:
    f.write(js_content)

print("Đã tạo xong file data.js với toàn bộ từ vựng thực tế từ Excel!")
