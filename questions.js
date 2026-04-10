// CSTI 四个离谱维度
// C - Combat Style: 枪法刚猛(C) vs 老六阴人(S)
// S - Survival: 白给送头(F) vs 苟活保命(A)  
// T - Teamwork: 孤狼独狼(L) vs 团队混子(B)
// I - Intellect: 战术大脑(M) vs 无脑冲锋(D)

const questions = [
  {
    id: 1,
    text: "开局买完枪后，你的第一反应是？",
    options: [
      { text: "RUSH B！干就完事了！", dimension: "C", value: 2 },
      { text: "找个老六位蹲着，等人来送", dimension: "S", value: 2 },
      { text: "跟着大部队走，不落下", dimension: "T", value: 2 },
      { text: "看经济、算道具、分析对手", dimension: "I", value: 2 }
    ]
  },
  {
    id: 2,
    text: "1v1残局时你的心理活动？",
    options: [
      { text: "我就是天才少年，操作拉满！", dimension: "C", value: 2 },
      { text: "别急别急，等他失误", dimension: "S", value: 2 },
      { text: "兄弟们对不起，我要白给了", dimension: "T", value: 2 },
      { text: "根据概率他应该在A点...", dimension: "I", value: 2 }
    ]
  },
  {
    id: 3,
    text: "队友让你起狙击枪(AWP)，你会？",
    options: [
      { text: "直接起！瞄准就是一枪一个", dimension: "C", value: 2 },
      { text: "拿着狙当步枪打，近战也能刚", dimension: "S", value: 2 },
      { text: "给大佬起，我起把P90混烟", dimension: "T", value: 2 },
      { text: "计算经济最优解，不浪费钱", dimension: "I", value: 2 }
    ]
  },
  {
    id: 4,
    text: "队友残血逃跑，你会？",
    options: [
      { text: "我帮你报仇！干掉对面！", dimension: "C", value: 2 },
      { text: "还好没死我旁边，赶紧溜", dimension: "S", value: 2 },
      { text: "没事兄弟，下一把", dimension: "T", value: 2 },
      { text: "根据他的走位，必死无疑", dimension: "I", value: 2 }
    ]
  },
  {
    id: 5,
    text: "你的投掷物(道具)一般怎么用？",
    options: [
      { text: "闪自己、闪队友，就是不闪敌人", dimension: "C", value: 2 },
      { text: "烟雾弹躲里面保命，完美", dimension: "S", value: 2 },
      { text: "队友要什么我给什么", dimension: "T", value: 2 },
      { text: "精心计算的道具路线", dimension: "I", value: 2 }
    ]
  },
  {
    id: 6,
    text: "被人从背后偷袭后，你的反应是？",
    options: [
      { text: "开挂了吧！举报举报！", dimension: "C", value: 2 },
      { text: "下次我绝对要架住那个位置", dimension: "S", value: 2 },
      { text: "我的锅我的锅，没报点", dimension: "T", value: 2 },
      { text: "他在我的预判之内...", dimension: "I", value: 2 }
    ]
  },
  {
    id: 7,
    text: "你的游戏麦克风一般是什么状态？",
    options: [
      { text: "一直喊冲冲冲！", dimension: "C", value: 2 },
      { text: "安静如鸡，只在必要时说话", dimension: "S", value: 2 },
      { text: "和队友疯狂互动，气氛组组长", dimension: "T", value: 2 },
      { text: "指挥全场，安排战术", dimension: "I", value: 2 }
    ]
  },
  {
    id: 8,
    text: "经济局(没钱)时你的态度？",
    options: [
      { text: "沙鹰！一枪一个！", dimension: "C", value: 2 },
      { text: "起个P90，苟住就是胜利", dimension: "S", value: 2 },
      { text: "给队友发枪，我做贡献", dimension: "T", value: 2 },
      { text: "这是战术性经济重置", dimension: "I", value: 2 }
    ]
  },
  {
    id: 9,
    text: "被人用AWP架住时你会？",
    options: [
      { text: "干拉！看谁快！", dimension: "C", value: 2 },
      { text: "绕他800个身位", dimension: "S", value: 2 },
      { text: "让队友去拉枪线", dimension: "T", value: 2 },
      { text: "计算他的视角盲区", dimension: "I", value: 2 }
    ]
  },
  {
    id: 10,
    text: "你最喜欢的游戏模式？",
    options: [
      { text: "竞技模式，拼的就是枪法", dimension: "C", value: 2 },
      { text: "休闲模式，娱乐至上", dimension: "S", value: 2 },
      { text: "组队匹配，和兄弟一起", dimension: "T", value: 2 },
      { text: "死斗模式，练枪练道具", dimension: "I", value: 2 }
    ]
  },
  {
    id: 11,
    text: "队友说你菜，你会？",
    options: [
      { text: "不服SOLO！看谁厉害！", dimension: "C", value: 2 },
      { text: "默默不说话，继续苟", dimension: "S", value: 2 },
      { text: "对不起对不起，我的锅", dimension: "T", value: 2 },
      { text: "分析数据证明我不菜", dimension: "I", value: 2 }
    ]
  },
  {
    id: 12,
    text: "你在队伍里的角色定位？",
    options: [
      { text: "突破手，就是刚！", dimension: "C", value: 2 },
      { text: "断后/老六，保护队友", dimension: "S", value: 2 },
      { text: "自由人，哪需要去哪", dimension: "T", value: 2 },
      { text: "指挥，掌控全局", dimension: "I", value: 2 }
    ]
  },
  {
    id: 13,
    text: "被对面打崩后你的心态？",
    options: [
      { text: "越输越勇，越刚越兴奋", dimension: "C", value: 2 },
      { text: "保枪保枪，不能全送", dimension: "S", value: 2 },
      { text: "没事没事，下一把", dimension: "T", value: 2 },
      { text: "分析崩盘点，制定新战术", dimension: "I", value: 2 }
    ]
  },
  {
    id: 14,
    text: "你的准星一般是什么颜色？",
    options: [
      { text: "绿色！经典！", dimension: "C", value: 2 },
      { text: "黄色/青色，看得清楚", dimension: "S", value: 2 },
      { text: "和队友一样的颜色", dimension: "T", value: 2 },
      { text: "根据科学分析选的", dimension: "I", value: 2 }
    ]
  },
  {
    id: 15,
    text: "你在游戏中最常说的话？",
    options: [
      { text: "RUSH B！ / 干拉！", dimension: "C", value: 2 },
      { text: "有人！/ 老六！/ 苟住！", dimension: "S", value: 2 },
      { text: "Nice！/ 我的锅 / 加油！", dimension: "T", value: 2 },
      { text: "A1一个 / 道具 / 下包了", dimension: "I", value: 2 }
    ]
  },
  {
    id: 16,
    text: "你的KD（击杀死亡比）一般是？",
    options: [
      { text: "1.5+，Carry全场", dimension: "C", value: 2 },
      { text: "0.8-1.0，活着就行", dimension: "S", value: 2 },
      { text: "0.6-0.8，躺好了兄弟", dimension: "T", value: 2 },
      { text: "1.0左右，稳定发挥", dimension: "I", value: 2 }
    ]
  },
  {
    id: 17,
    text: "拆包/下包时你的习惯？",
    options: [
      { text: "直接冲进去，管他那么多", dimension: "C", value: 2 },
      { text: "等时间差不多了再去", dimension: "S", value: 2 },
      { text: "看队友决定", dimension: "T", value: 2 },
      { text: "根据局势判断最佳时机", dimension: "I", value: 2 }
    ]
  },
  {
    id: 18,
    text: "面对挂哥你会？",
    options: [
      { text: "跟他硬刚！证明实力！", dimension: "C", value: 2 },
      { text: "苟着打，让他找不到", dimension: "S", value: 2 },
      { text: "举报就完事了", dimension: "T", value: 2 },
      { text: "录像取证，理性举报", dimension: "I", value: 2 }
    ]
  },
  {
    id: 19,
    text: "你的游戏时间一般怎么分配？",
    options: [
      { text: "死斗练枪，就喜欢刚枪", dimension: "C", value: 2 },
      { text: "匹配娱乐，轻松愉快", dimension: "S", value: 2 },
      { text: "和朋友组队开黑", dimension: "T", value: 2 },
      { text: "看职业比赛学技术", dimension: "I", value: 2 }
    ]
  },
  {
    id: 20,
    text: "如果用一句话形容你的CS水平？",
    options: [
      { text: "我枪硬就是道理！", dimension: "C", value: 2 },
      { text: "意识流玩家，懂的都懂", dimension: "S", value: 2 },
      { text: "气氛组组长，快乐就完事", dimension: "T", value: 2 },
      { text: "战术大师，用脑子打游戏", dimension: "I", value: 2 }
    ]
  }
];

// 16种离谱人格类型
const personalityTypes = {
  "CSLM": {
    name: "莽夫战神",
    emoji: "🔥",
    description: "你就是CS界的人形自走炮！RUSH B是你的信仰，干拉是你的日常。你的字典里没有'苟'字，只有'刚'和'更刚'。",
    traits: ["永远在冲锋的路上", "白给也要姿态帅", "敌人眼中的疯狗", "队友眼中的战神", "死斗模式常驻玩家"],
    famousPlayers: "s1mple（巅峰期）、NiKo",
    color: "#ff4444"
  },
  "CSLB": {
    name: "独狼刺客",
    emoji: "🐺",
    description: "你不需要同伴！你是一匹孤狼，来去如风。虽然经常白给，但偶尔也能打出天秀操作，让所有人惊掉下巴。",
    traits: ["独来独往", "偶尔天秀", "经常白给但姿态帅", "有自己的打法节奏", "不喜欢听指挥"],
    famousPlayers: "ZywOo（路人局）、sh1ro",
    color: "#ff6666"
  },
  "CSLM": {
    name: "无脑冲锋",
    emoji: "💀",
    description: "思考是什么？能吃吗？你就是CS界的无头苍蝇，但苍蝇多了也能撞大运。你的特点就是头铁！",
    traits: ["从不思考", "头铁就完事了", "白给次数最多", "但偶尔能赢", "快乐游戏代言人"],
    famousPlayers: "一些路人王",
    color: "#ff8888"
  },
  "CSLD": {
    name: "莽夫混子",
    emoji: "🎭",
    description: "你虽然也很莽，但你更会混。跟着大部队冲，躲在后面补枪，你就是那种看似很猛其实在苟的玩家。",
    traits: ["看似很猛其实在混", "补枪第一名", "跟风RUSH", "存活率意外的高", "KDA很好看"],
    famousPlayers: "某些冠军队伍的成员",
    color: "#ffaaaa"
  },
  "CSAM": {
    name: "战术老六",
    emoji: "🦊",
    description: "老六的最高境界！你不是在蹲人，就是在去蹲人的路上。你的耐心堪比忍者，你的阴招让对手怀疑人生。",
    traits: ["专业蹲人100年", "地图就是你的棋盘", "敌人永远猜不到你在哪", "耐心堪比忍者", "老六教科书"],
    famousPlayers: "Jame、某些战术大师",
    color: "#44ff44"
  },
  "CSAB": {
    name: "苟王之王",
    emoji: "👑",
    description: "活着就是胜利！你是CS界的苟王，队友都死光了你还活着。不是因为你强，是因为你太能苟了！",
    traits: ["苟住就是胜利", "队友祭天法力无边", "残局永远在1v多", "保枪小能手", "存活率第一"],
    famousPlayers: "某些决赛选手",
    color: "#66ff66"
  },
  "SSLM": {
    name: "白给战神",
    emoji: "💪",
    description: "你虽然总是白给，但你的气势 never say die！你就是那种第一个冲出去送，但能让队友知道对面位置的伟大牺牲者。",
    traits: ["开局第一个白给", "但报点很准", "气势不能输", "队友的活体雷达", "虽败犹荣"],
    famousPlayers: "一些战队的突破手",
    color: "#ffaa00"
  },
  "SSLD": {
    name: "白给混子",
    emoji: "🤪",
    description: "白给界的混子，混子界的白给。你就是那种又菜又爱玩，但队友还舍不得踢的宝藏男孩。",
    traits: ["又菜又爱玩", "队友的开心果", "气氛组组长", "白给也要有仪式感", "娱乐玩家"],
    famousPlayers: "一些娱乐主播",
    color: "#ffcc00"
  },
  "SSAM": {
    name: "苟且偷生",
    emoji: "🐢",
    description: "你的生存欲望极强，强到对手都怀疑人生。你就是那种全队在打4v6，而你在角落瑟瑟发抖的玩家。",
    traits: ["全队在打4v6你在苟", "对手都找不到你", "苟到就是赚到", "残局压力山大", "保枪比杀人多"],
    famousPlayers: "某些防守专家",
    color: "#aaff00"
  },
  "SSBD": {
    name: "苟且混子",
    emoji: "😴",
    description: "你是CS界的最强混子，没有之一。你不杀人、不白给、不指挥，你就在那里...存在着。",
    traits: ["存在感极低", "但也没犯错", "透明人玩家", "但胜率不低", "躺赢小能手"],
    famousPlayers: "某些冠军队伍的替补",
    color: "#ccff00"
  },
  "TSLM": {
    name: "团队莽夫",
    emoji: "🤝",
    description: "你是团队的突破手，但你的突破方式就是带头冲。兄弟们跟我上！然后...一起白给。",
    traits: ["带头冲锋", "带队友一起白给", "团队气势担当", "虽然莽但有兄弟", "团队型莽夫"],
    famousPlayers: "某些战队的突破手组合",
    color: "#00aaff"
  },
  "TSLB": {
    name: "团队孤狼",
    emoji: "🎮",
    description: "你在团队里，但你打的像个路人。你不听指挥、不配合，但偶尔能carry。队友又爱又恨。",
    traits: ["在队但像路人", "不听指挥", "偶尔Carry", "个人能力突出", "团队毒瘤"],
    famousPlayers: "某些天才少年",
    color: "#0088ff"
  },
  "TSAM": {
    name: "团队大脑",
    emoji: "🧠",
    description: "你是团队的指挥和大脑，掌控全局。但你的队友...有时候真的带不动啊！你就是那种战术大师但队员不执行的痛苦指挥。",
    traits: ["团队指挥", "战术大师", "但队友不听话", "痛苦指挥", "心累但坚持"],
    famousPlayers: "gla1ve、karrigan",
    color: "#0066ff"
  },
  "TSBD": {
    name: "团队混子",
    emoji: "🎪",
    description: "你是团队里最受欢迎的人！因为你虽然不Carry，但你听话、不压力、还能搞气氛。你就是完美的团队拼图！",
    traits: ["听话照做", "不压力队友", "搞气氛第一名", "团队粘合剂", "谁都喜欢"],
    famousPlayers: "某些队伍的第六人",
    color: "#0044ff"
  },
  "ISLM": {
    name: "直觉莽夫",
    emoji: "⚡",
    description: "你的直觉准得离谱，但你的枪法配不上你的直觉。你就是那种能猜到人在哪，但就是打不中的天选之子。",
    traits: ["直觉准得离谱", "但枪法配不上", "意识流莽夫", "差一点就C了", "天选之子"],
    famousPlayers: "一些直觉型选手",
    color: "#ff00ff"
  },
  "ISLB": {
    name: "白给先知",
    emoji: "🔮",
    description: "你能预感到哪里有人，但你的反应速度永远慢半拍。你就是那种知道人在哪，但还是被打死的悲剧先知。",
    traits: ["能预判敌人位置", "但反应慢半拍", "悲剧型先知", "死前能报点", "虽死犹荣"],
    famousPlayers: "一些意识流选手",
    color: "#ff44ff"
  },
  "ISAM": {
    name: "战术直觉",
    emoji: "✨",
    description: "你的直觉和战术完美结合，你就是那种既能猜到人又能打死人的恐怖存在。对手眼里的挂哥。",
    traits: ["直觉+战术完美结合", "既能猜到又能打死", "对手眼里的挂哥", "意识流天花板", "恐怖如斯"],
    famousPlayers: "s1mple、ZywOo",
    color: "#ff88ff"
  },
  "ISBD": {
    name: "直觉混子",
    emoji: "🌟",
    description: "你有很好的直觉，但你选择当个混子。你知道人在哪，但你让队友去处理。你就是那种有实力但选择躺的玩家。",
    traits: ["有直觉但选择躺", "知道人在但不去", "让队友处理", "有实力的混子", "躺得明明白白"],
    famousPlayers: "某些老将",
    color: "#ffaaff"
  },
  "ILDM": {
    name: "分析莽夫",
    emoji: "📊",
    description: "你会分析所有数据，但你的结论永远是：RUSH B！你就是那种用科学方法证明应该干拉的分析鬼才。",
    traits: ["分析数据后得出结论：干拉", "科学莽夫", "有理有据地白给", "分析型莽夫", "学术型RUSH"],
    famousPlayers: "一些数据分析师转型",
    color: "#ffdd00"
  },
  "ILDB": {
    name: "纸上谈兵",
    emoji: "📝",
    description: "你的理论知识世界第一，但实际操作...你就是那种能讲一堆战术但自己一个都打不出来的理论派。",
    traits: ["理论知识世界第一", "但操作拉胯", "能讲一堆战术", "但一个都打不出", "理论派玩家"],
    famousPlayers: "一些退役选手/主播",
    color: "#ffee00"
  },
  "IDAM": {
    name: "战术大师",
    emoji: "♟️",
    description: "你就是CS界的诸葛亮！分析、战术、预判，你样样精通。你就是那种能让对手怀疑人生的战术鬼才。",
    traits: ["CS界诸葛亮", "分析战术预判全能", "战术鬼才", "掌控全场节奏", "真正的指挥"],
    famousPlayers: "gla1ve巅峰期、karrigan",
    color: "#ffff00"
  },
  "IDBD": {
    name: "分析混子",
    emoji: "🤓",
    description: "你能分析出对面所有战术，但你的应对方式是...苟在角落看戏。你就是那种看得透但选择不参与的高人。",
    traits: ["能分析所有战术", "但选择看戏", "看透不说透", "高人风范", "苟得明明白白"],
    famousPlayers: "一些老将",
    color: "#ffff44"
  }
};
