// CSTI 四个离谱维度
// 第一维度: 枪法刚猛(C) vs 老六阴人(S)
// 第二维度: 白给送头(F) vs 苟活保命(A)
// 第三维度: 孤狼独狼(L) vs 团队混子(B)
// 第四维度: 战术大脑(M) vs 无脑冲锋(D)

const questions = [
  {
    id: 1,
    text: "开局买完枪后，你的第一反应是？",
    options: [
      { text: "RUSH B！干就完事了！", dimension: "C", value: 2 },
      { text: "找个老六位蹲着，等人来送", dimension: "S", value: 2 },
      { text: "跟着大部队走，不落下", dimension: "L", value: 2 },
      { text: "看经济、算道具、分析对手", dimension: "M", value: 2 }
    ]
  },
  {
    id: 2,
    text: "1v1残局时你的心理活动？",
    options: [
      { text: "我就是天才少年，操作拉满！", dimension: "C", value: 2 },
      { text: "别急别急，等他失误", dimension: "S", value: 2 },
      { text: "兄弟们对不起，我要白给了", dimension: "F", value: 2 },
      { text: "根据概率他应该在A点...", dimension: "M", value: 2 }
    ]
  },
  {
    id: 3,
    text: "队友让你起狙击枪(AWP)，你会？",
    options: [
      { text: "直接起！瞄准就是一枪一个", dimension: "C", value: 2 },
      { text: "拿着狙当步枪打，近战也能刚", dimension: "S", value: 2 },
      { text: "给大佬起，我起把P90混烟", dimension: "B", value: 2 },
      { text: "计算经济最优解，不浪费钱", dimension: "M", value: 2 }
    ]
  },
  {
    id: 4,
    text: "队友残血逃跑，你会？",
    options: [
      { text: "我帮你报仇！干掉对面！", dimension: "C", value: 2 },
      { text: "还好没死我旁边，赶紧溜", dimension: "A", value: 2 },
      { text: "没事兄弟，下一把", dimension: "B", value: 2 },
      { text: "根据他的走位，必死无疑", dimension: "M", value: 2 }
    ]
  },
  {
    id: 5,
    text: "你的投掷物(道具)一般怎么用？",
    options: [
      { text: "闪自己、闪队友，就是不闪敌人", dimension: "D", value: 2 },
      { text: "烟雾弹躲里面保命，完美", dimension: "A", value: 2 },
      { text: "队友要什么我给什么", dimension: "B", value: 2 },
      { text: "精心计算的道具路线", dimension: "M", value: 2 }
    ]
  },
  {
    id: 6,
    text: "被人从背后偷袭后，你的反应是？",
    options: [
      { text: "开挂了吧！举报举报！", dimension: "C", value: 2 },
      { text: "下次我绝对要架住那个位置", dimension: "S", value: 2 },
      { text: "我的锅我的锅，没报点", dimension: "B", value: 2 },
      { text: "他在我的预判之内...", dimension: "M", value: 2 }
    ]
  },
  {
    id: 7,
    text: "你的游戏麦克风一般是什么状态？",
    options: [
      { text: "一直喊冲冲冲！", dimension: "D", value: 2 },
      { text: "安静如鸡，只在必要时说话", dimension: "S", value: 2 },
      { text: "和队友疯狂互动，气氛组组长", dimension: "B", value: 2 },
      { text: "指挥全场，安排战术", dimension: "M", value: 2 }
    ]
  },
  {
    id: 8,
    text: "经济局(没钱)时你的态度？",
    options: [
      { text: "沙鹰！一枪一个！", dimension: "C", value: 2 },
      { text: "起个P90，苟住就是胜利", dimension: "A", value: 2 },
      { text: "给队友发枪，我做贡献", dimension: "B", value: 2 },
      { text: "这是战术性经济重置", dimension: "M", value: 2 }
    ]
  },
  {
    id: 9,
    text: "被人用AWP架住时你会？",
    options: [
      { text: "干拉！看谁快！", dimension: "D", value: 2 },
      { text: "绕他800个身位", dimension: "S", value: 2 },
      { text: "让队友去拉枪线", dimension: "L", value: 2 },
      { text: "计算他的视角盲区", dimension: "M", value: 2 }
    ]
  },
  {
    id: 10,
    text: "你最喜欢的游戏模式？",
    options: [
      { text: "竞技模式，拼的就是枪法", dimension: "C", value: 2 },
      { text: "休闲模式，娱乐至上", dimension: "A", value: 2 },
      { text: "组队匹配，和兄弟一起", dimension: "B", value: 2 },
      { text: "死斗模式，练枪练道具", dimension: "M", value: 2 }
    ]
  },
  {
    id: 11,
    text: "队友说你菜，你会？",
    options: [
      { text: "不服SOLO！看谁厉害！", dimension: "C", value: 2 },
      { text: "默默不说话，继续苟", dimension: "A", value: 2 },
      { text: "对不起对不起，我的锅", dimension: "B", value: 2 },
      { text: "分析数据证明我不菜", dimension: "M", value: 2 }
    ]
  },
  {
    id: 12,
    text: "你在队伍里的角色定位？",
    options: [
      { text: "突破手，就是刚！", dimension: "C", value: 2 },
      { text: "断后/老六，保护队友", dimension: "S", value: 2 },
      { text: "自由人，哪需要去哪", dimension: "L", value: 2 },
      { text: "指挥，掌控全局", dimension: "M", value: 2 }
    ]
  },
  {
    id: 13,
    text: "被对面打崩后你的心态？",
    options: [
      { text: "越输越勇，越刚越兴奋", dimension: "D", value: 2 },
      { text: "保枪保枪，不能全送", dimension: "A", value: 2 },
      { text: "没事没事，下一把", dimension: "B", value: 2 },
      { text: "分析崩盘点，制定新战术", dimension: "M", value: 2 }
    ]
  },
  {
    id: 14,
    text: "你的准星一般是什么颜色？",
    options: [
      { text: "绿色！经典！", dimension: "C", value: 2 },
      { text: "黄色/青色，看得清楚", dimension: "A", value: 2 },
      { text: "和队友一样的颜色", dimension: "B", value: 2 },
      { text: "根据科学分析选的", dimension: "M", value: 2 }
    ]
  },
  {
    id: 15,
    text: "你在游戏中最常说的话？",
    options: [
      { text: "RUSH B！ / 干拉！", dimension: "D", value: 2 },
      { text: "有人！/ 老六！/ 苟住！", dimension: "S", value: 2 },
      { text: "Nice！/ 我的锅 / 加油！", dimension: "B", value: 2 },
      { text: "A1一个 / 道具 / 下包了", dimension: "M", value: 2 }
    ]
  },
  {
    id: 16,
    text: "你的KD（击杀死亡比）一般是？",
    options: [
      { text: "1.5+，Carry全场", dimension: "C", value: 2 },
      { text: "0.8-1.0，活着就行", dimension: "A", value: 2 },
      { text: "0.6-0.8，躺好了兄弟", dimension: "B", value: 2 },
      { text: "1.0左右，稳定发挥", dimension: "M", value: 2 }
    ]
  },
  {
    id: 17,
    text: "拆包/下包时你的习惯？",
    options: [
      { text: "直接冲进去，管他那么多", dimension: "D", value: 2 },
      { text: "等时间差不多了再去", dimension: "A", value: 2 },
      { text: "看队友决定", dimension: "B", value: 2 },
      { text: "根据局势判断最佳时机", dimension: "M", value: 2 }
    ]
  },
  {
    id: 18,
    text: "面对挂哥你会？",
    options: [
      { text: "跟他硬刚！证明实力！", dimension: "C", value: 2 },
      { text: "苟着打，让他找不到", dimension: "S", value: 2 },
      { text: "举报就完事了", dimension: "B", value: 2 },
      { text: "录像取证，理性举报", dimension: "M", value: 2 }
    ]
  },
  {
    id: 19,
    text: "你的游戏时间一般怎么分配？",
    options: [
      { text: "死斗练枪，就喜欢刚枪", dimension: "C", value: 2 },
      { text: "匹配娱乐，轻松愉快", dimension: "A", value: 2 },
      { text: "和朋友组队开黑", dimension: "B", value: 2 },
      { text: "看职业比赛学技术", dimension: "M", value: 2 }
    ]
  },
  {
    id: 20,
    text: "如果用一句话形容你的CS水平？",
    options: [
      { text: "我枪硬就是道理！", dimension: "C", value: 2 },
      { text: "意识流玩家，懂的都懂", dimension: "S", value: 2 },
      { text: "气氛组组长，快乐就完事", dimension: "B", value: 2 },
      { text: "战术大师，用脑子打游戏", dimension: "M", value: 2 }
    ]
  }
];

// 16种离谱人格类型 (对应4个维度各2个选项的所有组合)
// dim1: C(枪法刚猛) vs S(老六阴人)
// dim2: F(白给送头) vs A(苟活保命)
// dim3: L(孤狼独狼) vs B(团队混子)
// dim4: M(战术大脑) vs D(无脑冲锋)
const personalityTypes = {
  "CFLM": {
    name: "莽夫战神",
    emoji: "🔥",
    description: "你就是CS界的人形自走炮！RUSH B是你的信仰，干拉是你的日常。你的字典里没有'苟'字，只有'刚'和'更刚'。",
    fun: "开局30秒，你已经白给了，但击杀视角里你甚至拉出了半个身位。",
    traits: ["永远在冲锋的路上", "白给也要姿态帅", "敌人眼中的疯狗", "队友眼中的战神", "死斗模式常驻玩家"],
    color: "#ff4444"
  },
  "CFLD": {
    name: "无脑冲锋",
    emoji: "💀",
    description: "思考是什么？能吃吗？你就是CS界的无头苍蝇，但苍蝇多了也能撞大运。你的特点就是头铁！",
    fun: "你冲出去才发现对面有5个人，然后你在公屏打字：“对面开了？”",
    traits: ["从不思考", "头铁就完事了", "白给次数最多", "但偶尔能赢", "快乐游戏代言人"],
    color: "#ff6666"
  },
  "CFBM": {
    name: "独狼刺客",
    emoji: "🐺",
    description: "你不需要同伴！你是一匹孤狼，来去如风。虽然经常白给，但偶尔也能打出天秀操作，让所有人惊掉下巴。",
    fun: "你总是能精准地在队友全死后，完成一波极其华丽的1v4，虽然最后被拆包了。",
    traits: ["独来独往", "偶尔天秀", "经常白给但姿态帅", "有自己的打法节奏", "不喜欢听指挥"],
    color: "#ff8888"
  },
  "CFBD": {
    name: "莽夫混子",
    emoji: "🎭",
    description: "你虽然也很莽，但你更会混。跟着大部队冲，躲在后面补枪，你就是那种看似很猛其实在苟的玩家。",
    fun: "队友死光了你还在，然后你收下了第5个残局人头，KDA瞬间全场第一。",
    traits: ["看似很猛其实在混", "补枪第一名", "跟风RUSH", "存活率意外的高", "KDA很好看"],
    color: "#ffaaaa"
  },
  "CALM": {
    name: "战术老六",
    emoji: "🦊",
    description: "老六的最高境界！你不是在蹲人，就是在去蹲人的路上。你的耐心堪比忍者，你的阴招让对手怀疑人生。",
    fun: "你就像一开始蹲在一个地方，本来想偷背身，但是被偷正面了。",
    traits: ["专业蹲人100年", "地图就是你的棋盘", "敌人永远猜不到你在哪", "耐心堪比忍者", "老六教科书"],
    color: "#44ff44"
  },
  "CALD": {
    name: "苟且偷生",
    emoji: "🐢",
    description: "你的生存欲望极强，强到对手都怀疑人生。你就是那种全队在打4v6，而你在角落瑟瑟发抖的玩家。",
    fun: "队友在A点打得天崩地裂，你在B点包点角落里把静步键按出了火星子。",
    traits: ["全队在打4v6你在苟", "对手都找不到你", "苟到就是赚到", "残局压力山大", "保枪比杀人多"],
    color: "#66ff66"
  },
  "CABM": {
    name: "苟王之王",
    emoji: "👑",
    description: "活着就是胜利！你是CS界的苟王，队友都死光了你还活着。不是因为你强，是因为你太能苟了！",
    fun: "队友问你在哪，你说“我在C”，然后发现你在C点最外面的那个只有鬼知道的缝隙里。",
    traits: ["苟住就是胜利", "队友祭天法力无边", "残局永远在1v多", "保枪小能手", "存活率第一"],
    color: "#88ff88"
  },
  "CABD": {
    name: "白给先知",
    emoji: "🔮",
    description: "你能预感到哪里有人，但你的反应速度永远慢半拍。你就是那种知道人在哪，但还是被打死的悲剧先知。",
    fun: "你报点极其精准：“A大两个，A小一个”，然后你被对面A大那个用沙鹰爆头了。",
    traits: ["能预判敌人位置", "但反应慢半拍", "悲剧型先知", "死前能报点", "虽死犹荣"],
    color: "#aaffaa"
  },
  "SFLM": {
    name: "白给战神",
    emoji: "💪",
    description: "你虽然总是白给，但你的气势 never say die！你就是那种第一个冲出去送，但能让队友知道对面位置的伟大牺牲者。",
    fun: "你总是第一个死，但你的死非常有价值——因为你死的位置告诉了全队对面5个人都在哪。",
    traits: ["开局第一个白给", "但报点很准", "气势不能输", "队友的活体雷达", "虽败犹荣"],
    color: "#ffaa00"
  },
  "SFLD": {
    name: "白给混子",
    emoji: "🤪",
    description: "白给界的混子，混子界的白给。你就是那种又菜又爱玩，但队友还舍不得踢的宝藏男孩。",
    fun: "你整局游戏就在做两件事：扔烟雾弹，然后在烟雾弹里把自己闪白。",
    traits: ["又菜又爱玩", "队友的开心果", "气氛组组长", "白给也要有仪式感", "娱乐玩家"],
    color: "#ffcc00"
  },
  "SFBM": {
    name: "团队莽夫",
    emoji: "🤝",
    description: "你是团队的突破手，但你的突破方式就是带头冲。兄弟们跟我上！然后...一起白给。",
    fun: "你带头RUSH B，结果发现对面5个都在架枪，然后全队5个人同时倒在包点。",
    traits: ["带头冲锋", "带队友一起白给", "团队气势担当", "虽然莽但有兄弟", "团队型莽夫"],
    color: "#ffdd00"
  },
  "SFBD": {
    name: "团队孤狼",
    emoji: "🎮",
    description: "你在团队里，但你打的像个路人。你不听指挥、不配合，但偶尔能carry。队友又爱又恨。",
    fun: "指挥在麦里喊了半天战术，你回了一句“别吵”，然后出去干拉拿了个三杀。",
    traits: ["在队但像路人", "不听指挥", "偶尔Carry", "个人能力突出", "团队毒瘤"],
    color: "#ffee00"
  },
  "SALM": {
    name: "团队大脑",
    emoji: "🧠",
    description: "你是团队的指挥和大脑，掌控全局。但你的队友...有时候真的带不动啊！你就是那种战术大师但队员不执行的痛苦指挥。",
    fun: "你战术安排得天衣无缝，但队友全在自由发挥，最后你只能痛苦地闭上眼。",
    traits: ["团队指挥", "战术大师", "但队友不听话", "痛苦指挥", "心累但坚持"],
    color: "#aaff00"
  },
  "SALD": {
    name: "纸上谈兵",
    emoji: "📝",
    description: "你的理论知识世界第一，但实际操作...你就是那种能讲一堆战术但自己一个都打不出来的理论派。",
    fun: "你能把职业选手的战术复盘讲得头头是道，但自己一上号就被人家用P90 RUSH了。",
    traits: ["理论知识世界第一", "但操作拉胯", "能讲一堆战术", "但一个都打不出", "理论派玩家"],
    color: "#ccff00"
  },
  "SABM": {
    name: "团队混子",
    emoji: "🎪",
    description: "你是团队里最受欢迎的人！因为你虽然不Carry，但你听话、不压力、还能搞气氛。你就是完美的团队拼图！",
    fun: "你整局游戏就干了三件事：发“Nice！”、扔烟雾弹掩护队友、然后在公屏扣“666”。",
    traits: ["听话照做", "不压力队友", "搞气氛第一名", "团队粘合剂", "谁都喜欢"],
    color: "#eeff00"
  },
  "SABD": {
    name: "快乐白给",
    emoji: "😂",
    description: "你就是来玩玩的！输赢无所谓，快乐最重要。你的笑声回荡在整个服务器，感染每一个人。",
    fun: "你拿着一把P90冲出去送人头，死后在语音里笑得像刚中了彩票。",
    traits: ["快乐游戏第一", "白给也要笑", "气氛担当", "心态超好", "人见人爱"],
    color: "#ffff00"
  }
};
