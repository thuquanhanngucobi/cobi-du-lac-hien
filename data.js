const gameData = {
  // ==========================================
  // 1. LUYỆN KHÍ TĨNH THẤT (Bài 1 đến Bài 20)
  // ==========================================
  lessons: [
    {
      id: "lesson_1",
      title: "Bài 1: Quyển 1 - Chào hỏi & Đại từ",
      words: [
        { hanzi: "你", pinyin: "nǐ", meaning: "bạn / anh / chị" },
        { hanzi: "我", pinyin: "wǒ", meaning: "tôi / tớ / mình" },
        { hanzi: "他", pinyin: "tā", meaning: "anh ấy / ông ấy" },
        { hanzi: "她", pinyin: "tā", meaning: "cô ấy / bà ấy" },
        { hanzi: "们", pinyin: "men", meaning: "hậu tố số nhiều" },
        { hanzi: "好", pinyin: "hǎo", meaning: "tốt / khỏe / hay" },
        { hanzi: "再见", pinyin: "zài jiàn", meaning: "tạm biệt" },
        { hanzi: "老师", pinyin: "lǎo shī", meaning: "thầy / cô giáo" },
        { hanzi: "学生", pinyin: "xué sheng", meaning: "học sinh" }
      ],
      sentences: []
    },
    {
      id: "lesson_2",
      title: "Bài 2: Quyển 1 - Giới thiệu & Số đếm",
      words: [
        { hanzi: "零", pinyin: "líng", meaning: "số 0" },
        { hanzi: "一", pinyin: "yī", meaning: "số 1" },
        { hanzi: "二", pinyin: "èr", meaning: "số 2" },
        { hanzi: "三", pinyin: "sān", meaning: "số 3" },
        { hanzi: "四", pinyin: "sì", meaning: "số 4" },
        { hanzi: "五", pinyin: "wǔ", meaning: "số 5" },
        { hanzi: "六", pinyin: "liù", meaning: "số 6" },
        { hanzi: "七", pinyin: "qī", meaning: "số 7" },
        { hanzi: "八", pinyin: "bā", meaning: "số 8" },
        { hanzi: "九", pinyin: "jiǔ", meaning: "số 9" },
        { hanzi: "十", pinyin: "shí", meaning: "số 10" }
      ],
      sentences: []
    },
    {
      id: "lesson_3",
      title: "Bài 3: Quyển 1 - Gia đình & Nhân thân",
      words: [
        { hanzi: "爸爸", pinyin: "bà ba", meaning: "bố / ba" },
        { hanzi: "妈妈", pinyin: "mā ma", meaning: "mẹ / má" },
        { hanzi: "哥哥", pinyin: "gē ge", meaning: "anh trai" },
        { hanzi: "弟弟", pinyin: "dì di", meaning: "em trai" },
        { hanzi: "姐姐", pinyin: "jiě jie", meaning: "chị gái" },
        { hanzi: "妹妹", pinyin: "mèi mei", meaning: "em gái" },
        { hanzi: "家", pinyin: "jiā", meaning: "nhà / gia đình" }
      ],
      sentences: []
    },
    {
      id: "lesson_4",
      title: "Bài 4: Quyển 1 - Đồ vật & Sinh hoạt",
      words: [
        { hanzi: "书", pinyin: "shū", meaning: "sách" },
        { hanzi: "本", pinyin: "běn", meaning: "quyển / cuốn" },
        { hanzi: "笔", pinyin: "bǐ", meaning: "bút" },
        { hanzi: "桌子", pinyin: "zhuō zi", meaning: "cái bàn" },
        { hanzi: "椅子", pinyin: "yǐ zi", meaning: "cái ghế" },
        { hanzi: "电脑", pinyin: "diàn nǎo", meaning: "máy tính" }
      ],
      sentences: []
    },
    {
      id: "lesson_5",
      title: "Bài 5: Quyển 1 - Thời gian & Biểu đạt",
      words: [
        { hanzi: "今天", pinyin: "jīn tiān", meaning: "hôm nay" },
        { hanzi: "明天", pinyin: "míng tiān", meaning: "ngày mai" },
        { hanzi: "昨天", pinyin: "zuó tiān", meaning: "hôm qua" },
        { hanzi: "年", pinyin: "nián", meaning: "năm" },
        { hanzi: "月", pinyin: "yuè", meaning: "tháng" },
        { hanzi: "日", pinyin: "rì", meaning: "ngày" }
      ],
      sentences: []
    },
    {
      id: "lesson_6",
      title: "Bài 6: Quyển 1 - Sở thích & Hoạt động",
      words: [
        { hanzi: "喜欢", pinyin: "xǐ huan", meaning: "thích" },
        { hanzi: "爱", pinyin: "ài", meaning: "yêu / thích" },
        { hanzi: "听", pinyin: "tīng", meaning: "nghe" },
        { hanzi: "说", pinyin: "shuō", meaning: "nói" },
        { hanzi: "读", pinyin: "dú", meaning: "đọc" },
        { hanzi: "写", pinyin: "xiě", meaning: "viết" }
      ],
      sentences: []
    },
    {
      id: "lesson_7",
      title: "Bài 7: Quyển 1 - Mua sắm & Giá cả",
      words: [
        { hanzi: "买", pinyin: "mǎi", meaning: "mua" },
        { hanzi: "卖", pinyin: "mài", meaning: "bán" },
        { hanzi: "多少", pinyin: "duō shao", meaning: "bao nhiêu" },
        { hanzi: "钱", pinyin: "qián", meaning: "tiền" },
        { hanzi: "块", pinyin: "kuài", meaning: "đồng (tệ)" },
        { hanzi: "贵", pinyin: "guì", meaning: "đắt" },
        { hanzi: "便宜", pinyin: "pián yi", meaning: "rẻ" }
      ],
      sentences: []
    },
    {
      id: "lesson_8",
      title: "Bài 8: Quyển 1 - Không gian & Vị trí",
      words: [
        { hanzi: "在", pinyin: "zài", meaning: "ở / tại" },
        { hanzi: "哪儿", pinyin: "nǎr", meaning: "ở đâu" },
        { hanzi: "这里", pinyin: "zhè lǐ", meaning: "ở đây" },
        { hanzi: "那里", pinyin: "nà lǐ", meaning: "ở đó / kia" },
        { hanzi: "上", pinyin: "shàng", meaning: "trên" },
        { hanzi: "下", pinyin: "xià", meaning: "dưới" }
      ],
      sentences: []
    },
    {
      id: "lesson_9",
      title: "Bài 9: Quyển 1 - Thức ăn & Đồ uống",
      words: [
        { hanzi: "吃", pinyin: "chī", meaning: "ăn" },
        { hanzi: "喝", pinyin: "hē", meaning: "uống" },
        { hanzi: "水", pinyin: "shuǐ", meaning: "nước" },
        { hanzi: "茶", pinyin: "chá", meaning: "trà" },
        { hanzi: "苹果", pinyin: "píng guǒ", meaning: "quả táo" },
        { hanzi: "米饭", pinyin: "mǐ fàn", meaning: "cơm" }
      ],
      sentences: []
    },
    {
      id: "lesson_10",
      title: "Bài 10: Quyển 1 - Tổng kết Sơ cấp 1",
      words: [
        { hanzi: "工作", pinyin: "gōng zuò", meaning: "công việc / làm việc" },
        { hanzi: "医生", pinyin: "yī shēng", meaning: "bác sĩ" },
        { hanzi: "医院", pinyin: "yī yuàn", meaning: "bệnh viện" },
        { hanzi: "学校", pinyin: "xué xiào", meaning: "trường học" },
        { hanzi: "商店", pinyin: "shāng diàn", meaning: "cửa hàng" }
      ],
      sentences: []
    },
    // --- QUYỂN 2 (Từ bài 11 đến bài 20 - Áp dụng Game 3 Luyện Nghe Câu) ---
    {
      id: "lesson_11",
      title: "Bài 11: Quyển 2 - Hành động tiếp diễn",
      words: [
        { hanzi: "正在", pinyin: "zhèng zài", meaning: "đang" },
        { hanzi: "学习", pinyin: "xué xí", meaning: "học tập" },
        { hanzi: "汉", pinyin: "hàn", meaning: "Hán" }
      ],
      sentences: [
        { hanzi: "他在is working.", pinyin: "tā zài gōng zuò." },
        { hanzi: "正在学习汉语。", pinyin: "zhèng zài xué xí hàn yǔ." }
      ]
    },
    {
      id: "lesson_12",
      title: "Bài 12: Quyển 2 - Thể thao & Vận động",
      words: [
        { hanzi: "运动", pinyin: "yùn dòng", meaning: "vận động / thể thao" },
        { hanzi: "游泳", pinyin: "yóu yǒng", meaning: "bơi lội" },
        { hanzi: "踢", pinyin: "tī", meaning: "đá" },
        { hanzi: "足球", pinyin: "zú qiú", meaning: "bóng đá" }
      ],
      sentences: [
        { hanzi: "我喜欢运动。", pinyin: "wǒ xǐ huan yùn dòng." },
        { hanzi: "他去游泳.", pinyin: "tā qù yóu yǒng." }
      ]
    },
    {
      id: "lesson_13",
      title: "Bài 13: Quyển 2 - Du lịch & Di chuyển",
      words: [
        { hanzi: "旅游", pinyin: "lǚ yóu", meaning: "du lịch" },
        { hanzi: "机场", pinyin: "jī chǎng", meaning: "sân bay" },
        { hanzi: "飞机", pinyin: "fēi jī", meaning: "máy bay" },
        { hanzi: "坐", pinyin: "zuò", meaning: "ngồi / đi (phương tiện)" }
      ],
      sentences: [
        { hanzi: "我们要去机场。", pinyin: "wǒ men yào qù jī chǎng." },
        { hanzi: "坐飞机去北京。", pinyin: "zuò fēi jī qù běi jīng." }
      ]
    },
    {
      id: "lesson_14",
      title: "Bài 14: Quyển 2 - Thời tiết & Khí hậu",
      words: [
        { hanzi: "天气", pinyin: "tiān qì", meaning: "thời tiết" },
        { hanzi: "下雨", pinyin: "xià yǔ", meaning: "mưa" },
        { hanzi: "冷", pinyin: "lěng", meaning: "lạnh" },
        { hanzi: "热", pinyin: "rè", meaning: "nóng" }
      ],
      sentences: [
        { hanzi: "今天天气 很好。", pinyin: "jīn tiān tiān qì hěn hǎo." },
        { hanzi: "外面下雨了。", pinyin: "wài mian xià yǔ le." }
      ]
    },
    {
      id: "lesson_15",
      title: "Bài 15: Quyển 2 - Sức khỏe & Thân thể",
      words: [
        { hanzi: "身体", pinyin: "shēn tǐ", meaning: "thân thể / sức khỏe" },
        { hanzi: "生病", pinyin: "shēng bìng", meaning: "ốm / bị bệnh" },
        { hanzi: "休息", pinyin: "xiū xi", meaning: "nghỉ ngơi" },
        { hanzi: "药", pinyin: "yào", meaning: "thuốc" }
      ],
      sentences: [
        { hanzi: "祝你身体健康。", pinyin: "zhù nǐ shēn tǐ jiàn kāng." },
        { hanzi: "多休息.", pinyin: "duō xiū xi." }
      ]
    },
    {
      id: "lesson_16",
      title: "Bài 16: Quyển 2 - Hỏi đường & Địa điểm",
      words: [
        { hanzi: "路", pinyin: "lù", meaning: "đường" },
        { hanzi: "远", pinyin: "yuǎn", meaning: "xa" },
        { hanzi: "近", pinyin: "jìn", meaning: "gần" },
        { hanzi: "左", pinyin: "zuǒ", meaning: "bên trái" },
        { hanzi: "右", pinyin: "yòu", meaning: "bên phải" }
      ],
      sentences: [
        { hanzi: "离这里远吗？", pinyin: "lí zhè lǐ yuǎn ma?" },
        { hanzi: "向左走.", pinyin: "xiàng zuǒ zǒu." }
      ]
    },
    {
      id: "lesson_17",
      title: "Bài 17: Quyển 2 - Mua sắm & Kích cỡ",
      words: [
        { hanzi: "穿", pinyin: "chuān", meaning: "mặc / đeo" },
        { hanzi: "衣服", pinyin: "yī fu", meaning: "quần áo" },
        { hanzi: "颜色", pinyin: "yán sè", meaning: "màu sắc" },
        { hanzi: "红", pinyin: "hóng", meaning: "màu đỏ" }
      ],
      sentences: [
        { hanzi: "这件衣服 很好看。", pinyin: "zhè jiàn yī fu hěn hǎo kàn." },
        { hanzi: "你喜欢什么颜色？", pinyin: "nǐ xǐ huan shén me yán sè?" }
      ]
    },
    {
      id: "lesson_18",
      title: "Bài 18: Quyển 2 - Công việc & Văn phòng",
      words: [
        { hanzi: "公司", pinyin: "gōng sī", meaning: "công ty" },
        { hanzi: "经理", pinyin: "jīng lǐ", meaning: "giám đốc / quản lý" },
        { hanzi: "会议", pinyin: "huì yì", meaning: "hội nghị / cuộc họp" },
        { hanzi: "忙", pinyin: "máng", meaning: "bận" }
      ],
      sentences: [
        { hanzi: "我在公司工作。", pinyin: "wǒ zài gōng sī gōng zuò." },
        { hanzi: "经理很忙。", pinyin: "jīng lǐ hěn máng." }
      ]
    },
    {
      id: "lesson_19",
      title: "Bài 19: Quyển 2 - Thăm hỏi & Gặp gỡ",
      words: [
        { hanzi: "欢迎", pinyin: "huān yíng", meaning: "hoan nghênh / chào mừng" },
        { hanzi: "客气", pinyin: "kè qi", meaning: "khách sáo" },
        { hanzi: "高兴", pinyin: "gāo xìng", meaning: "vui vẻ / vui mừng" },
        { hanzi: "认识", pinyin: "rèn shi", meaning: "quen biết" }
      ],
      sentences: [
        { hanzi: "欢迎 你们！", pinyin: "huān yíng nǐ men!" },
        { hanzi: "很高兴认识你。", pinyin: "hěn gāo xìng rèn shi nǐ." }
      ]
    },
    {
      id: "lesson_20",
      title: "Bài 20: Quyển 2 - Tổng kết Sơ cấp 2",
      words: [
        { hanzi: "希望", pinyin: "xī wàng", meaning: "hy vọng" },
        { hanzi: "帮", pinyin: "bāng", meaning: "giúp / giúp đỡ" },
        { hanzi: "事情", pinyin: "shì qing", meaning: "sự việc / công việc" },
        { hanzi: "懂", pinyin: "dǒng", meaning: "hiểu" }
      ],
      sentences: [
        { hanzi: "希望 ics happy.", pinyin: "xī wàng nǐ kuài lè." },
        { hanzi: "我 懂了。", pinyin: "wǒ dǒng le." }
      ]
    }
  ],

  // ==========================================
  // 2. CẢNH GIỚI TĨNH THẤT (HSK 1, HSK 2, HSK 3)
  // ==========================================
  hsk: [
    {
      id: "hsk1",
      title: "HSK 1 - Cảnh giới Sơ Khái (初阶)",
      words: [
        { hanzi: "爱", pinyin: "ài", meaning: "yêu, thích" },
        { hanzi: "八", pinyin: "bā", meaning: "số 8" },
        { hanzi: "爸爸", pinyin: "bà ba", meaning: "bố" },
        { hanzi: "杯子", pinyin: "bēi zi", meaning: "cái cốc" },
        { hanzi: "北京", pinyin: "běi jīng", meaning: "Bắc Kinh" },
        { hanzi: "本", pinyin: "běn", meaning: "quyển, cuốn" },
        { hanzi: "不客气", pinyin: "bú kèqi", meaning: "không có chi" },
        { hanzi: "不", pinyin: "bù", meaning: "không" },
        { hanzi: "菜", pinyin: "cài", meaning: "món ăn, rau" },
        { hanzi: "茶", pinyin: "chá", meaning: "trà" }
      ],
      sentences: [
        { hanzi: "我爱我的妈妈。", pinyin: "wǒ ài wǒ de māma." },
        { hanzi: "我家有八个人。", pinyin: "wǒ jiā yǒu bā gè rén." },
        { hanzi: "杯子en the table.", pinyin: "bēi zi zài zhuōzi shang." }
      ]
    },
    {
      id: "hsk2",
      title: "HSK 2 - Cảnh giới Trúc Cơ (筑基)",
      words: [
        { hanzi: "吧", pinyin: "ba", meaning: "nhé, đi (trợ từ)" },
        { hanzi: "白", pinyin: "bái", meaning: "màu trắng" },
        { hanzi: "百", pinyin: "bǎi", meaning: "trăm" },
        { hanzi: "帮助", pinyin: "bāngzhù", meaning: "giúp đỡ" },
        { hanzi: "报纸", pinyin: "bàozhǐ", meaning: "báo" },
        { hanzi: "比", pinyin: "bǐ", meaning: "so với" },
        { hanzi: "别", pinyin: "bié", meaning: "đừng" },
        { hanzi: "长", pinyin: "cháng", meaning: "dài" },
        { hanzi: "唱歌", pinyin: "chànggē", meaning: "hát" },
        { hanzi: "出", pinyin: "chū", meaning: "ra" }
      ],
      sentences: [
        { hanzi: "我们走吧。", pinyin: "wǒ men zǒu ba." },
        { hanzi: "谢谢你的帮助。", pinyin: "xiè xie nǐ de bāng zhù." },
        { hanzi: "他在看报纸。", pinyin: "tā zài kàn bào zhǐ." }
      ]
    },
    {
      id: "hsk3",
      title: "HSK 3 - Cảnh giới Kim Đan (金丹)",
      words: [
        { hanzi: "阿姨", pinyin: "āyí", meaning: "dì, cô, bác gái" },
        { hanzi: "啊", pinyin: "a", meaning: "à, ừ (thán từ)" },
        { hanzi: "矮", pinyin: "ǎi", meaning: "thấp" },
        { hanzi: "爱好", pinyin: "àihào", meaning: "sở thích" },
        { hanzi: "安静", pinyin: "ānjìng", meaning: "yên tĩnh" },
        { hanzi: "把", pinyin: "bǎ", meaning: "cầm, nắm (giới từ)" },
        { hanzi: "搬", pinyin: "bān", meaning: "dọn, chuyển" },
        { hanzi: "班", pinyin: "bān", meaning: "lớp" },
        { hanzi: "半", pinyin: "bàn", meaning: "một nửa" },
        { hanzi: "办法", pinyin: "bànfǎ", meaning: "biện pháp, cách" }
      ],
      sentences: [
        { hanzi: "我的爱好是看书。", pinyin: "wǒ de ài hào shì kàn shū." },
        { hanzi: "这里 很高兴 and quiet.", pinyin: "zhè lǐ hěn ān jìng." },
        { hanzi: "请把门打开。", pinyin: "qǐng bǎ mén dǎ kāi." }
      ]
    }
  ]
};
