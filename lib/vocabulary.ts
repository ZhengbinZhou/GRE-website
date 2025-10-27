export interface VocabularyWord {
  id: number;
  word: string;
  pronunciation: string;
  definition: string;
  chineseDefinition: string;
  example: string;
  chineseExample: string;
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
}

export const vocabularyData: VocabularyWord[] = [
  {
    id: 1,
    word: "aberrant",
    pronunciation: "/əˈberənt/",
    definition: "deviating from the norm",
    chineseDefinition: "异常的，偏离正常的",
    example: "His aberrant behavior worried his friends.",
    chineseExample: "他异常的行为让朋友们担心。",
    difficulty: "medium",
    category: "behavior"
  },
  {
    id: 2,
    word: "abeyance",
    pronunciation: "/əˈbeɪəns/",
    definition: "temporary suspension or inactivity",
    chineseDefinition: "暂停，中止",
    example: "The project was held in abeyance until funding was secured.",
    chineseExample: "项目在获得资金之前被暂停。",
    difficulty: "hard",
    category: "state"
  },
  {
    id: 3,
    word: "abjure",
    pronunciation: "/æbˈdʒʊr/",
    definition: "to renounce or reject formally",
    chineseDefinition: "正式放弃，发誓断绝",
    example: "She abjured her former beliefs after the revelation.",
    chineseExample: "在真相揭露后，她放弃了以前的信仰。",
    difficulty: "hard",
    category: "action"
  },
  {
    id: 4,
    word: "abrogate",
    pronunciation: "/ˈæbrəˌgeɪt/",
    definition: "to abolish or annul by authority",
    chineseDefinition: "废除，取消",
    example: "The government abrogated the controversial law.",
    chineseExample: "政府废除了这项有争议的法律。",
    difficulty: "hard",
    category: "action"
  },
  {
    id: 5,
    word: "abscond",
    pronunciation: "/æbˈskɑnd/",
    definition: "to leave hurriedly and secretly",
    chineseDefinition: "潜逃，偷偷离开",
    example: "The thief absconded with the stolen goods.",
    chineseExample: "小偷带着赃物潜逃了。",
    difficulty: "medium",
    category: "action"
  },
  {
    id: 6,
    word: "abstemious",
    pronunciation: "/æbˈstimiəs/",
    definition: "moderate in eating and drinking",
    chineseDefinition: "节制的，有节制的",
    example: "He maintained an abstemious diet throughout his life.",
    chineseExample: "他一生都保持着节制的饮食。",
    difficulty: "hard",
    category: "behavior"
  },
  {
    id: 7,
    word: "abstruse",
    pronunciation: "/æbˈstrus/",
    definition: "difficult to understand",
    chineseDefinition: "深奥的，难懂的",
    example: "The professor's abstruse lecture confused most students.",
    chineseExample: "教授深奥的讲座让大多数学生感到困惑。",
    difficulty: "medium",
    category: "description"
  },
  {
    id: 8,
    word: "accolade",
    pronunciation: "/ˈækəˌleɪd/",
    definition: "an award or expression of praise",
    chineseDefinition: "嘉奖，赞美",
    example: "She received many accolades for her humanitarian work.",
    chineseExample: "她的人道主义工作获得了许多嘉奖。",
    difficulty: "medium",
    category: "achievement"
  },
  {
    id: 9,
    word: "acerbic",
    pronunciation: "/əˈsɜrbɪk/",
    definition: "sharp and forthright in speech or manner",
    chineseDefinition: "尖刻的，辛辣的",
    example: "His acerbic wit made him both feared and admired.",
    chineseExample: "他尖刻的机智既让人害怕又让人钦佩。",
    difficulty: "medium",
    category: "description"
  },
  {
    id: 10,
    word: "acrimonious",
    pronunciation: "/ˌækrəˈmoʊniəs/",
    definition: "angry and bitter",
    chineseDefinition: "激烈的，尖刻的",
    example: "The divorce proceedings were acrimonious.",
    chineseExample: "离婚程序进行得很激烈。",
    difficulty: "hard",
    category: "emotion"
  },
  {
    id: 11,
    word: "adroit",
    pronunciation: "/əˈdrɔɪt/",
    definition: "clever or skillful in using hands or mind",
    chineseDefinition: "灵巧的，熟练的",
    example: "She was adroit at solving complex puzzles.",
    chineseExample: "她擅长解决复杂的谜题。",
    difficulty: "medium",
    category: "skill"
  },
  {
    id: 12,
    word: "adulation",
    pronunciation: "/ˌædʒəˈleɪʃən/",
    definition: "excessive admiration or praise",
    chineseDefinition: "奉承，谄媚",
    example: "The celebrity was uncomfortable with the adulation.",
    chineseExample: "这位名人对于奉承感到不舒服。",
    difficulty: "medium",
    category: "emotion"
  },
  {
    id: 13,
    word: "aesthetic",
    pronunciation: "/ɛsˈθɛtɪk/",
    definition: "concerned with beauty or artistic taste",
    chineseDefinition: "美学的，审美的",
    example: "The building's aesthetic appeal attracted many visitors.",
    chineseExample: "这座建筑的美学吸引力吸引了许多游客。",
    difficulty: "easy",
    category: "art"
  },
  {
    id: 14,
    word: "affable",
    pronunciation: "/ˈæfəbəl/",
    definition: "friendly and easy to talk to",
    chineseDefinition: "和蔼可亲的，友善的",
    example: "His affable nature made him popular at parties.",
    chineseExample: "他和蔼可亲的性格让他在聚会上很受欢迎。",
    difficulty: "medium",
    category: "personality"
  },
  {
    id: 15,
    word: "alacrity",
    pronunciation: "/əˈlækrəti/",
    definition: "brisk and cheerful readiness",
    chineseDefinition: "敏捷，欣然",
    example: "She accepted the challenge with alacrity.",
    chineseExample: "她欣然接受了挑战。",
    difficulty: "hard",
    category: "behavior"
  },
  {
    id: 16,
    word: "allegory",
    pronunciation: "/ˈæləˌgɔri/",
    definition: "a story with a hidden meaning",
    chineseDefinition: "寓言，讽喻",
    example: "Animal Farm is an allegory about political power.",
    chineseExample: "《动物农场》是一个关于政治权力的寓言。",
    difficulty: "medium",
    category: "literature"
  },
  {
    id: 17,
    word: "altruistic",
    pronunciation: "/ˌæltruˈɪstɪk/",
    definition: "showing selfless concern for others",
    chineseDefinition: "利他的，无私的",
    example: "Her altruistic actions inspired the community.",
    chineseExample: "她利他的行为激励了整个社区。",
    difficulty: "medium",
    category: "behavior"
  },
  {
    id: 18,
    word: "ambiguous",
    pronunciation: "/æmˈbɪɡjuəs/",
    definition: "unclear or having multiple meanings",
    chineseDefinition: "模糊的，歧义的",
    example: "The contract's terms were ambiguous.",
    chineseExample: "合同的条款是模糊的。",
    difficulty: "easy",
    category: "description"
  },
  {
    id: 19,
    word: "ameliorate",
    pronunciation: "/əˈmiljəˌreɪt/",
    definition: "to make better or improve",
    chineseDefinition: "改善，改进",
    example: "The new policy will ameliorate working conditions.",
    chineseExample: "新政策将改善工作条件。",
    difficulty: "hard",
    category: "action"
  },
  {
    id: 20,
    word: "anachronistic",
    pronunciation: "/əˌnækrəˈnɪstɪk/",
    definition: "belonging to a different time period",
    chineseDefinition: "时代错误的，过时的",
    example: "Using a typewriter today seems anachronistic.",
    chineseExample: "今天使用打字机似乎过时了。",
    difficulty: "hard",
    category: "time"
  },
  {
    id: 21,
    word: "anomaly",
    pronunciation: "/əˈnɑməli/",
    definition: "something that deviates from the norm",
    chineseDefinition: "异常，反常",
    example: "The test results showed an anomaly in the data.",
    chineseExample: "测试结果显示数据中有异常。",
    difficulty: "medium",
    category: "description"
  },
  {
    id: 22,
    word: "antagonistic",
    pronunciation: "/ænˌtæɡəˈnɪstɪk/",
    definition: "showing hostility or opposition",
    chineseDefinition: "敌对的，对抗的",
    example: "The two politicians had antagonistic views.",
    chineseExample: "这两位政治家持有敌对的观点。",
    difficulty: "medium",
    category: "emotion"
  },
  {
    id: 23,
    word: "apathy",
    pronunciation: "/ˈæpəθi/",
    definition: "lack of interest or enthusiasm",
    chineseDefinition: "冷漠，无动于衷",
    example: "Student apathy toward politics is concerning.",
    chineseExample: "学生对政治的冷漠令人担忧。",
    difficulty: "easy",
    category: "emotion"
  },
  {
    id: 24,
    word: "arbitrary",
    pronunciation: "/ˈɑrbəˌtrɛri/",
    definition: "based on random choice rather than reason",
    chineseDefinition: "任意的，武断的",
    example: "The teacher's grading seemed arbitrary.",
    chineseExample: "老师的评分似乎很武断。",
    difficulty: "easy",
    category: "description"
  },
  {
    id: 25,
    word: "arcane",
    pronunciation: "/ɑrˈkeɪn/",
    definition: "mysterious or secret",
    chineseDefinition: "神秘的，秘密的",
    example: "The ancient text contained arcane knowledge.",
    chineseExample: "古代文本包含了神秘的知识。",
    difficulty: "medium",
    category: "description"
  },
  {
    id: 26,
    word: "arduous",
    pronunciation: "/ˈɑrdʒuəs/",
    definition: "involving great effort or difficulty",
    chineseDefinition: "艰巨的，困难的",
    example: "The mountain climb was arduous but rewarding.",
    chineseExample: "登山很艰巨但很有收获。",
    difficulty: "medium",
    category: "description"
  },
  {
    id: 27,
    word: "articulate",
    pronunciation: "/ɑrˈtɪkjələt/",
    definition: "able to express ideas clearly",
    chineseDefinition: "善于表达的，口齿清晰的",
    example: "She was articulate in defending her position.",
    chineseExample: "她在为自己的立场辩护时表达得很清楚。",
    difficulty: "easy",
    category: "skill"
  },
  {
    id: 28,
    word: "ascertain",
    pronunciation: "/ˌæsərˈteɪn/",
    definition: "to find out or discover",
    chineseDefinition: "查明，确定",
    example: "We need to ascertain the facts before deciding.",
    chineseExample: "在决定之前，我们需要查明事实。",
    difficulty: "medium",
    category: "action"
  },
  {
    id: 29,
    word: "assiduous",
    pronunciation: "/əˈsɪdʒuəs/",
    definition: "showing great care and attention",
    chineseDefinition: "勤奋的，刻苦的",
    example: "His assiduous study habits led to success.",
    chineseExample: "他勤奋的学习习惯带来了成功。",
    difficulty: "hard",
    category: "behavior"
  },
  {
    id: 30,
    word: "astute",
    pronunciation: "/əˈstut/",
    definition: "having sharp judgment or insight",
    chineseDefinition: "敏锐的，精明的",
    example: "The astute investor avoided the market crash.",
    chineseExample: "精明的投资者避免了市场崩盘。",
    difficulty: "medium",
    category: "skill"
  },
  {
    id: 31,
    word: "atypical",
    pronunciation: "/eɪˈtɪpɪkəl/",
    definition: "not representative of a type or group",
    chineseDefinition: "非典型的，不正常的",
    example: "His atypical approach surprised everyone.",
    chineseExample: "他非典型的方法让每个人都感到惊讶。",
    difficulty: "easy",
    category: "description"
  },
  {
    id: 32,
    word: "audacious",
    pronunciation: "/ɔˈdeɪʃəs/",
    definition: "showing willingness to take bold risks",
    chineseDefinition: "大胆的，鲁莽的",
    example: "The audacious plan required great courage.",
    chineseExample: "这个大胆的计划需要很大的勇气。",
    difficulty: "medium",
    category: "behavior"
  },
  {
    id: 33,
    word: "austere",
    pronunciation: "/ɔˈstɪr/",
    definition: "severe or strict in manner or appearance",
    chineseDefinition: "严厉的，朴素的",
    example: "The monastery had an austere atmosphere.",
    chineseExample: "修道院有一种朴素的气氛。",
    difficulty: "medium",
    category: "description"
  },
  {
    id: 34,
    word: "authentic",
    pronunciation: "/ɔˈθɛntɪk/",
    definition: "genuine or original",
    chineseDefinition: "真正的，真实的",
    example: "The museum displayed authentic artifacts.",
    chineseExample: "博物馆展出了真正的文物。",
    difficulty: "easy",
    category: "description"
  },
  {
    id: 35,
    word: "avaricious",
    pronunciation: "/ˌævəˈrɪʃəs/",
    definition: "extremely greedy for wealth",
    chineseDefinition: "贪婪的，贪财的",
    example: "The avaricious merchant exploited his workers.",
    chineseExample: "贪婪的商人剥削他的工人。",
    difficulty: "hard",
    category: "personality"
  },
  {
    id: 36,
    word: "banal",
    pronunciation: "/bəˈnæl/",
    definition: "lacking originality or freshness",
    chineseDefinition: "平庸的，陈腐的",
    example: "The speech was filled with banal clichés.",
    chineseExample: "演讲充满了陈腐的陈词滥调。",
    difficulty: "medium",
    category: "description"
  },
  {
    id: 37,
    word: "benevolent",
    pronunciation: "/bəˈnɛvələnt/",
    definition: "well-meaning and kindly",
    chineseDefinition: "仁慈的，慈善的",
    example: "The benevolent king cared for his subjects.",
    chineseExample: "仁慈的国王关心他的臣民。",
    difficulty: "medium",
    category: "personality"
  },
  {
    id: 38,
    word: "berate",
    pronunciation: "/bɪˈreɪt/",
    definition: "to scold or criticize angrily",
    chineseDefinition: "责骂，严厉批评",
    example: "The coach berated the team for poor performance.",
    chineseExample: "教练因表现不佳而严厉批评了球队。",
    difficulty: "medium",
    category: "action"
  },
  {
    id: 39,
    word: "bias",
    pronunciation: "/ˈbaɪəs/",
    definition: "prejudice in favor of or against something",
    chineseDefinition: "偏见，偏向",
    example: "The judge showed no bias in the trial.",
    chineseExample: "法官在审判中没有表现出偏见。",
    difficulty: "easy",
    category: "concept"
  },
  {
    id: 40,
    word: "bombastic",
    pronunciation: "/bɑmˈbæstɪk/",
    definition: "high-sounding but with little meaning",
    chineseDefinition: "浮夸的，华而不实的",
    example: "His bombastic speech impressed no one.",
    chineseExample: "他浮夸的演讲没有打动任何人。",
    difficulty: "hard",
    category: "description"
  },
  {
    id: 41,
    word: "bureaucratic",
    pronunciation: "/ˌbjʊrəˈkrætɪk/",
    definition: "relating to complex administrative procedures",
    chineseDefinition: "官僚的，官僚主义的",
    example: "The bureaucratic process was frustrating.",
    chineseExample: "官僚程序令人沮丧。",
    difficulty: "medium",
    category: "system"
  },
  {
    id: 42,
    word: "cacophony",
    pronunciation: "/kəˈkɑfəni/",
    definition: "a harsh, discordant mixture of sounds",
    chineseDefinition: "刺耳的声音，噪音",
    example: "The construction site created a cacophony.",
    chineseExample: "建筑工地产生了刺耳的噪音。",
    difficulty: "hard",
    category: "sound"
  },
  {
    id: 43,
    word: "cajole",
    pronunciation: "/kəˈdʒoʊl/",
    definition: "to persuade someone to do something by coaxing",
    chineseDefinition: "哄骗，劝诱",
    example: "She tried to cajole him into helping.",
    chineseExample: "她试图哄骗他帮忙。",
    difficulty: "medium",
    category: "action"
  },
  {
    id: 44,
    word: "capricious",
    pronunciation: "/kəˈprɪʃəs/",
    definition: "given to sudden changes in mood or behavior",
    chineseDefinition: "反复无常的，任性的",
    example: "The capricious weather ruined our picnic.",
    chineseExample: "反复无常的天气毁了我们的野餐。",
    difficulty: "hard",
    category: "personality"
  },
  {
    id: 45,
    word: "catalyst",
    pronunciation: "/ˈkætəlɪst/",
    definition: "a person or thing that causes change",
    chineseDefinition: "催化剂，促进因素",
    example: "The protest was a catalyst for reform.",
    chineseExample: "抗议是改革的催化剂。",
    difficulty: "medium",
    category: "concept"
  },
  {
    id: 46,
    word: "cathartic",
    pronunciation: "/kəˈθɑrtɪk/",
    definition: "providing psychological relief",
    chineseDefinition: "宣泄的，净化的",
    example: "Writing in her journal was cathartic.",
    chineseExample: "写日记对她来说是宣泄性的。",
    difficulty: "hard",
    category: "emotion"
  },
  {
    id: 47,
    word: "caustic",
    pronunciation: "/ˈkɔstɪk/",
    definition: "sarcastic in a scathing and bitter way",
    chineseDefinition: "刻薄的，腐蚀性的",
    example: "His caustic remarks offended many people.",
    chineseExample: "他刻薄的言论冒犯了许多人。",
    difficulty: "medium",
    category: "description"
  },
  {
    id: 48,
    word: "censure",
    pronunciation: "/ˈsɛnʃər/",
    definition: "to express severe disapproval",
    chineseDefinition: "谴责，批评",
    example: "The committee censured the senator's behavior.",
    chineseExample: "委员会谴责了参议员的行为。",
    difficulty: "medium",
    category: "action"
  },
  {
    id: 49,
    word: "charlatan",
    pronunciation: "/ˈʃɑrlətən/",
    definition: "a person who pretends to have knowledge",
    chineseDefinition: "骗子，江湖郎中",
    example: "The charlatan claimed to cure all diseases.",
    chineseExample: "这个骗子声称能治愈所有疾病。",
    difficulty: "hard",
    category: "person"
  },
  {
    id: 50,
    word: "circumspect",
    pronunciation: "/ˈsɜrkəmˌspɛkt/",
    definition: "wary and unwilling to take risks",
    chineseDefinition: "谨慎的，小心的",
    example: "She was circumspect about the investment opportunity.",
    chineseExample: "她对投资机会很谨慎。",
    difficulty: "hard",
    category: "behavior"
  }
];
