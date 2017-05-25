import React from 'react';

import styles from '../styles.css';

// 同一個方框框 [ ] 包住的東西每一項必須有獨立的 key.
// 可以是任何字串，只要同一個方框裡面都不一樣就好。
//
//
// spakers: [{
//   id: string, // to link with program
//   name: {en: string, zh: string},
//   affliation: ({en: string, zh: string} || null),
//   intro: {en: string, zh: string},
//   profile: string,
//   profileProps:
// }]
const SpeakerData = Object.freeze({
  speakers: [
    {
      id: '吳崢',
      uid: 'Wu',
      name: {
        en: '吳崢',
        zh: '吳崢',
      },
      affiliation: {
        en: '時代力量',
        zh: '時代力量',
      },
      intro: {
        en: '曾任林昶佐國會辦公室助理、林昶佐競選團隊總幹事。參與2014年318運動。從街頭、社會運動、選舉到政黨，不知不覺加入時代力量的行列已將近兩年，這兩年來在不同的崗位上，從不同角度參與和實踐政治工作，深深體會政治的複雜以及推動改革的不易，但仍希望在可預見的將來，能夠為時代力量和台灣的發展出一份心力。',
        zh: '曾任林昶佐國會辦公室助理、林昶佐競選團隊總幹事。參與2014年318運動。從街頭、社會運動、選舉到政黨，不知不覺加入時代力量的行列已將近兩年，這兩年來在不同的崗位上，從不同角度參與和實踐政治工作，深深體會政治的複雜以及推動改革的不易，但仍希望在可預見的將來，能夠為時代力量和台灣的發展出一份心力。',
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '林穎孟',
      uid: 'LinMY',
      name: {
        en: '林穎孟',
        zh: '林穎孟',
      },
      affiliation: {
        en: '時代力量',
        zh: '時代力量',
      },
      intro: {
        en: '時代力量發言人、林昶佐國會辦公室法案助理。曾任GAMANIA APP開發資深產品企劃、遊戲媒體社群企劃、台灣大學婦女研究室學程助理。清華大學人文社會學系學士、台灣大學社會學碩士。大學以來不斷思考「如何改變社會」，積極參與人權相關社會運動，畢業後在企業界打滾四年多，抱持持續關注政治的理念和行動。2016年為了實踐更多理想進入國會；但國會運作真正不簡單，有更多事要面對。',
        zh: '時代力量發言人、林昶佐國會辦公室法案助理。曾任GAMANIA APP開發資深產品企劃、遊戲媒體社群企劃、台灣大學婦女研究室學程助理。清華大學人文社會學系學士、台灣大學社會學碩士。大學以來不斷思考「如何改變社會」，積極參與人權相關社會運動，畢業後在企業界打滾四年多，抱持持續關注政治的理念和行動。2016年為了實踐更多理想進入國會；但國會運作真正不簡單，有更多事要面對。',
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '陳乃嘉',
      uid: 'Chen',
      name: {
        en: '陳乃嘉',
        zh: '陳乃嘉',
      },
      affiliation: {
        en: '時代力量',
        zh: '時代力量',
      },
      intro: {
        en: '時代力量新聞輿情部聯絡人。曾任時代力量立法院黨團法案助理、外商商用房地產租賃公司總經理特助既行銷助理。台灣大學政治系國際關係組學士。大學畢業後先到私部門工作，在318學運之後才開始認真思考投入政治工作的可能性，2016年大選後加入時代力量，雖然政治工作似乎與日常生活非常遙遠，但每一分鐘的努力都扎實地在為生活爭取更好一點點的可能。',
        zh: '時代力量新聞輿情部聯絡人。曾任時代力量立法院黨團法案助理、外商商用房地產租賃公司總經理特助既行銷助理。台灣大學政治系國際關係組學士。大學畢業後先到私部門工作，在318學運之後才開始認真思考投入政治工作的可能性，2016年大選後加入時代力量，雖然政治工作似乎與日常生活非常遙遠，但每一分鐘的努力都扎實地在為生活爭取更好一點點的可能。',
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '劉彥廷',
      uid: 'Liu',
      name: {
        en: '劉彥廷',
        zh: '劉彥廷',
      },
      affiliation: {
        en: '紐約哲學星期五、海外台灣青年陣線、紐約 g0v',
        zh: '紐約哲學星期五、海外台灣青年陣線、紐約 g0v',
      },
      intro: {
        en: '因人脈廣闊故有「美東王金平，紐約彭于晏」之稱，2014年參與初始籌辦紐約哲五，至今紐哲已經超過 1000 人次參加。2016 年號招志工主辦紐約 g0v，也吸引超過 100 人參與。「聲援婚姻平權」、「營救李明哲」等紐約街頭運動發起人，也曾投書刊登在如《想想論壇》、《菜市場政治學》、《報導者》等海內外平面媒體。',
        zh: '因人脈廣闊故有「美東王金平，紐約彭于晏」之稱，2014年參與初始籌辦紐約哲五，至今紐哲已經超過 1000 人次參加。2016 年號招志工主辦紐約 g0v，也吸引超過 100 人參與。「聲援婚姻平權」、「營救李明哲」等紐約街頭運動發起人，也曾投書刊登在如《想想論壇》、《菜市場政治學》、《報導者》等海內外平面媒體。',
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '杜荷洲',
      uid: 'Du',
      name: {
        en: '杜荷洲',
        zh: '杜荷洲',
      },
      affiliation: {
        en: '台灣人公共事務會麻州分會、CafePhilo@Boston的義工、Boston Taiwanese Biotechnology Association (BTBA) 的創會會員',
        zh: '台灣人公共事務會麻州分會、CafePhilo@Boston的義工、Boston Taiwanese Biotechnology Association (BTBA) 的創會會員',
      },
      intro: {
        en: '台北長大，成長在一個” 美麗島時還沒出生，野百合時還太小，野草莓時已出國，太陽花時年已過三十” 的世代；一個台灣主體意識雖已漸漸萌芽，但還是徹底接受了完整的黨國教育的世代。我的夢想是希望台灣能夠正正常常的享有一個「國家」的身分。我覺得，既然我們人在美國，就應該做只有在海外才能為台灣做的事: 將台灣介紹到世界的舞台上. 2011 年到Boston工作後，加入FAPA草根民運的行列，向美國大眾介紹台灣, 也到國會遊說有利於台灣及台美關係的法案。',
        zh: '台北長大，成長在一個” 美麗島時還沒出生，野百合時還太小，野草莓時已出國，太陽花時年已過三十” 的世代；一個台灣主體意識雖已漸漸萌芽，但還是徹底接受了完整的黨國教育的世代。我的夢想是希望台灣能夠正正常常的享有一個「國家」的身分。我覺得，既然我們人在美國，就應該做只有在海外才能為台灣做的事: 將台灣介紹到世界的舞台上. 2011 年到Boston工作後，加入FAPA草根民運的行列，向美國大眾介紹台灣, 也到國會遊說有利於台灣及台美關係的法案。',
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '鍾佳君',
      uid: 'Chong',
      name: {
        en: '鍾佳君',
        zh: '鍾佳君',
      },
      affiliation: {
        en: '台灣人公共事務會（FAPA）全國常務委員。波士頓哲學星期五志工',
        zh: '台灣人公共事務會（FAPA）全國常務委員。波士頓哲學星期五志工',
      },
      intro: {
        en: '曾任波士頓台灣同鄉會幹事、 FAPA 麻州分會會長及區域委員。2011 年擔任紀錄片《好國好民》英文字幕翻譯及北美巡迴宣傳志工，三個月內趁周末造訪各地共十一州，主持了十七場電影放映討論。2010 年與朋友共同發起在哈佛廣場直接向公眾闡述台灣議題的 “Taiwan Outreach” 活動，每個月固定行動從無間斷至今。平常是個工程師, 致力於推動美國紡織產業的的下一波創新。喜歡以腳踏車的速度看世界。',
        zh: '曾任波士頓台灣同鄉會幹事、 FAPA 麻州分會會長及區域委員。2011 年擔任紀錄片《好國好民》英文字幕翻譯及北美巡迴宣傳志工，三個月內趁周末造訪各地共十一州，主持了十七場電影放映討論。2010 年與朋友共同發起在哈佛廣場直接向公眾闡述台灣議題的 “Taiwan Outreach” 活動，每個月固定行動從無間斷至今。平常是個工程師, 致力於推動美國紡織產業的的下一波創新。喜歡以腳踏車的速度看世界。',
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '林倢',
      uid: 'LinJ',
      name: {
        en: '林倢',
        zh: '林倢',
      },
      affiliation: {
        en: '台灣人公共事務會（FAPA）',
        zh: '台灣人公共事務會（FAPA）',
      },
      intro: {
        en: '作為318運動參與者之一，林倢在佔領行動結束後積極投入社會運動工作，與議場內其他參與者共組青年團體「民主鬥陣」(現與台左為新合併為「民主維新」)，持續針對兩岸政治、經貿問題進行倡議與監督。除體制外倡議工作之外，2014年林倢曾作為台灣戰略模擬學會的研究助理，組成柯文哲台北市長選舉中的戰情部；2015至16年，她曾任李登輝基金會的研究部專員，並在2016選舉後成為蘇治芬委員的國會助理。現在，林倢在華府的台灣人公共事務會擔任政策助理（Policy Associate），持續關心兩岸關係、台美關係與青年世代正義、分配正義等相關議題，並致力於拓展台灣國際空間與促進國家正常化。',
        zh: '作為318運動參與者之一，林倢在佔領行動結束後積極投入社會運動工作，與議場內其他參與者共組青年團體「民主鬥陣」(現與台左為新合併為「民主維新」)，持續針對兩岸政治、經貿問題進行倡議與監督。除體制外倡議工作之外，2014年林倢曾作為台灣戰略模擬學會的研究助理，組成柯文哲台北市長選舉中的戰情部；2015至16年，她曾任李登輝基金會的研究部專員，並在2016選舉後成為蘇治芬委員的國會助理。現在，林倢在華府的台灣人公共事務會擔任政策助理（Policy Associate），持續關心兩岸關係、台美關係與青年世代正義、分配正義等相關議題，並致力於拓展台灣國際空間與促進國家正常化。',
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '苗博雅',
      uid: 'Miao',
      name: {
        en: '苗博雅',
        zh: '苗博雅',
      },
      affiliation: {
        en: '社會民主黨、前台灣廢除死刑推動聯盟法務主任',
        zh: '社會民主黨、前台灣廢除死刑推動聯盟法務主任',
      },
      intro: {
        en: '努力在現實中實現理想的青年政治工作者。社會民主黨全國委員，台大法律財經法學士。 \n 曾於律師事務所及科技公司擔任法務。在成為全職NGO工作者後，開啟一段雖千夫所指吾往矣的人生。 \n 318佔領運動後，參與籌組社會民主黨，參加2016年台北市立法委員選舉，在兩大黨夾殺之下取得12.5%選民認同。 \n 關注勞工權益、司法改革、性別平等、憲政民主發展、國家正常化。希望能讓台灣的下一代，在團結、平等、自由的國家，快樂成長。',
        zh: '努力在現實中實現理想的青年政治工作者。社會民主黨全國委員，台大法律財經法學士。 \n 曾於律師事務所及科技公司擔任法務。在成為全職NGO工作者後，開啟一段雖千夫所指吾往矣的人生。 \n 318佔領運動後，參與籌組社會民主黨，參加2016年台北市立法委員選舉，在兩大黨夾殺之下取得12.5%選民認同。 \n 關注勞工權益、司法改革、性別平等、憲政民主發展、國家正常化。希望能讓台灣的下一代，在團結、平等、自由的國家，快樂成長。'
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '徐歆惠',
      uid: 'Hsu',
      name: {
        en: '徐歆惠',
        zh: '徐歆惠',
      },
      affiliation: {
        en: '紐約哲學星期五、海外台灣青年陣線',
        zh: '紐約哲學星期五、海外台灣青年陣線',
      },
      intro: {
        en: '紐約哲五志工、紐約大學國際事務碩士，研究興趣是經濟發展對人權與武裝衝突的影響，特別關注中國在緬甸的投資與緬甸的和平進程。是個老草莓，從大學起在一些抗爭運動沾過醬油，在紐約參與組織過聲援太陽花學運、支持台灣加入WHA等活動。對於組織與社群經營，不懂的比懂的多，希望與大家多切磋學習。',
        zh: '紐約哲五志工、紐約大學國際事務碩士，研究興趣是經濟發展對人權與武裝衝突的影響，特別關注中國在緬甸的投資與緬甸的和平進程。是個老草莓，從大學起在一些抗爭運動沾過醬油，在紐約參與組織過聲援太陽花學運、支持台灣加入WHA等活動。對於組織與社群經營，不懂的比懂的多，希望與大家多切磋學習。'
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '邱澗庚',
      uid: 'Chiu',
      name: {
        en: '邱澗庚',
        zh: '邱澗庚',
      },
      affiliation: {
        en: '北卡草根論壇、海外台灣青年陣線',
        zh: '北卡草根論壇、海外台灣青年陣線',
      },
      intro: {
        en: '海外台灣青年陣線成員、北卡草根論壇發起人及美編，是研究生物數學的理工宅，從330海外串連之後才開始接觸社運組織，兩年來搞組織搞串聯，把各種錯誤都犯盡，連累許多人之後，想把試誤的歷史開源，讓大家多走點我沒走過的冤枉路（？） 做理論的人喜歡幻想，但持續在天真幻想和接地的中間找尋自己的位置。',
        zh: '海外台灣青年陣線成員、北卡草根論壇發起人及美編，是研究生物數學的理工宅，從330海外串連之後才開始接觸社運組織，兩年來搞組織搞串聯，把各種錯誤都犯盡，連累許多人之後，想把試誤的歷史開源，讓大家多走點我沒走過的冤枉路（？） 做理論的人喜歡幻想，但持續在天真幻想和接地的中間找尋自己的位置。'
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '吳濬彥',
      uid: 'WuJY',
      name: {
        en: '吳濬彥',
        zh: '吳濬彥',
      },
      affiliation: {
        en: '民主維新',
        zh: '民主維新',
      },
      intro: {
        en: '1988年出生，現為民主維新協會理事長（臺左維新與民主鬥陣青年組織合併）目標帶青年推動正名、制憲、入聯工作；同時與一些NGO工作者、學者、律師與地方工作者成立北北新巢協會，研究傳統產業轉型與在地經濟議題。目前正在推動大稻埕永樂布市的訪調與轉型計畫。',
        zh: '1988年出生，現為民主維新協會理事長（臺左維新與民主鬥陣青年組織合併）目標帶青年推動正名、制憲、入聯工作；同時與一些NGO工作者、學者、律師與地方工作者成立北北新巢協會，研究傳統產業轉型與在地經濟議題。目前正在推動大稻埕永樂布市的訪調與轉型計畫。'
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    },
    {
      id: '蕭新晟',
      uid: 'Hsiao',
      name: {
        en: '蕭新晟',
        zh: '蕭新晟',
      },
      affiliation: {
        en: '紐約 g0v 主辦人，國家寶藏、台灣正名器專案核心推手',
        zh: '紐約 g0v 主辦人，國家寶藏、台灣正名器專案核心推手',
      },
      intro: {
        en: '是美東 g0v 社群的靈魂人物之一，專長囊括前端後端的「全端」工程師。除了歷屆美東黑客松無役不與之外，更在婚姻平權串連時，發動一人黑客松連夜做出打卡聲援地圖。',
        zh: '是美東 g0v 社群的靈魂人物之一，專長囊括前端後端的「全端」工程師。除了歷屆美東黑客松無役不與之外，更在婚姻平權串連時，發動一人黑客松連夜做出打卡聲援地圖。'
      },
      profileImageSource: null,
      profileImageExtraProps: null,
    }
  ]
});

export default SpeakerData;
