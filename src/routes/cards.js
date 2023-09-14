import { writable } from 'svelte/store';

export const cards = writable([
	{
		id: 1,
		hint: '我',
		question: 'wǒ',
		answer: 'I, me'
	},
	{
		id: 2,
		hint: '我们',
		question: 'wǒmen',
		answer: 'we, us (pl.)'
	},
	{
		id: 3,
		hint: '你',
		question: 'nǐ',
		answer: 'you'
	},
	{
		id: 4,
		hint: '你们',
		question: 'nǐmen',
		answer: 'you (pl.)'
	},
	{
		id: 5,
		hint: '他',
		question: 'tā',
		answer: 'he, him'
	},
	{
		id: 6,
		hint: '她',
		question: 'tā',
		answer: 'she, her'
	},
	{
		id: 7,
		hint: '他们',
		question: 'tāmen',
		answer: 'they (male+female / male, pl.)'
	},
	{
		id: 8,
		hint: '她们',
		question: 'tāmen',
		answer: 'they (females, pl.)'
	},
	{
		id: 9,
		hint: '这 (这儿)',
		question: 'zhè ( zhèr)',
		answer: 'here, this'
	},
	{
		id: 10,
		hint: '那 (那儿)',
		question: 'nà (nàr)',
		answer: 'there, that'
	},
	{
		id: 11,
		hint: '哪（哪儿）',
		question: 'nǎ (nǎr)',
		answer: 'where'
	},
	{
		id: 12,
		hint: '谁',
		question: 'shuí',
		answer: 'who'
	},
	{
		id: 13,
		hint: '什么',
		question: 'shén me',
		answer: 'what, why'
	},
	{
		id: 14,
		hint: '多少',
		question: 'duōshǎo',
		answer: 'how many, how much'
	},
	{
		id: 15,
		hint: '几',
		question: 'jǐ',
		answer: 'a few, how many'
	},
	{
		id: 16,
		hint: '怎么',
		question: 'zěnme',
		answer: 'how'
	},
	{
		id: 17,
		hint: '怎么样',
		question: 'zěnmeyàng',
		answer: 'how about'
	},
	{
		id: 18,
		hint: '一',
		question: 'yī',
		answer: 'one'
	},
	{
		id: 19,
		hint: '二',
		question: 'èr',
		answer: 'two'
	},
	{
		id: 20,
		hint: '三',
		question: 'sān',
		answer: 'three'
	},
	{
		id: 21,
		hint: '四',
		question: 'sì',
		answer: 'four'
	},
	{
		id: 22,
		hint: '五',
		question: 'wǔ',
		answer: 'five'
	},
	{
		id: 23,
		hint: '六',
		question: 'liù',
		answer: 'six'
	},
	{
		id: 24,
		hint: '七',
		question: 'qī',
		answer: 'seven'
	},
	{
		id: 25,
		hint: '八',
		question: 'bā',
		answer: 'eight'
	},
	{
		id: 26,
		hint: '九',
		question: 'jiǔ',
		answer: 'nine'
	},
	{
		id: 27,
		hint: '十',
		question: 'shí',
		answer: 'ten'
	},
	{
		id: 28,
		hint: '零',
		question: 'líng',
		answer: 'zero'
	},
	{
		id: 29,
		hint: '个',
		question: 'gè',
		answer: 'one, a, an'
	},
	{
		id: 30,
		hint: '岁',
		question: 'suì',
		answer: 'year'
	},
	{
		id: 31,
		hint: '本',
		question: 'běn',
		answer: 'volume'
	},
	{
		id: 32,
		hint: '些',
		question: 'xiē',
		answer: 'some'
	},
	{
		id: 33,
		hint: '块',
		question: 'kuài',
		answer: 'piece'
	},
	{
		id: 34,
		hint: '不',
		question: 'bù',
		answer: 'no'
	},
	{
		id: 35,
		hint: '没',
		question: 'méi',
		answer: 'no'
	},
	{
		id: 36,
		hint: '很',
		question: 'hěn',
		answer: 'quite, very'
	},
	{
		id: 37,
		hint: '太',
		question: 'tài',
		answer: 'too'
	},
	{
		id: 38,
		hint: '都',
		question: 'dōu',
		answer: 'all'
	},
	{
		id: 39,
		hint: '和',
		question: 'hé',
		answer: 'and'
	},
	{
		id: 40,
		hint: '在',
		question: 'zài',
		answer: 'in, at'
	},
	{
		id: 41,
		hint: '的',
		question: 'de',
		answer: ''
	},
	{
		id: 42,
		hint: '了',
		question: 'le',
		answer: ''
	},
	{
		id: 43,
		hint: '吗',
		question: 'ma',
		answer: ''
	},
	{
		id: 44,
		hint: '呢',
		question: 'ne',
		answer: ''
	},
	{
		id: 45,
		hint: '喂',
		question: 'wèi',
		answer: 'hello'
	},
	{
		id: 46,
		hint: '家',
		question: 'jiā',
		answer: 'home'
	},
	{
		id: 47,
		hint: '学校',
		question: 'xuéxiào',
		answer: 'school'
	},
	{
		id: 48,
		hint: '饭店',
		question: 'fàndiàn',
		answer: 'restaurant'
	},
	{
		id: 49,
		hint: '商店',
		question: 'shāngdiàn',
		answer: 'store'
	},
	{
		id: 50,
		hint: '医院',
		question: 'yīyuàn',
		answer: 'hospital'
	},
	{
		id: 51,
		hint: '火车站',
		question: 'huǒchēzhàn',
		answer: 'train station'
	},
	{
		id: 52,
		hint: '中国',
		question: 'zhōng guó',
		answer: 'China'
	},
	{
		id: 53,
		hint: '北京',
		question: 'běijīng',
		answer: 'Beijing'
	},
	{
		id: 54,
		hint: '上',
		question: 'shàng',
		answer: 'up'
	},
	{
		id: 55,
		hint: '下',
		question: 'xià',
		answer: 'down'
	},
	{
		id: 56,
		hint: '前面',
		question: 'qiánmiàn',
		answer: 'front'
	},
	{
		id: 57,
		hint: '后面',
		question: 'hòumiàn',
		answer: 'behind'
	},
	{
		id: 58,
		hint: '里',
		question: 'lǐmiàn',
		answer: 'inside'
	},
	{
		id: 59,
		hint: '今天',
		question: 'jīntiān',
		answer: 'today'
	},
	{
		id: 60,
		hint: '明天',
		question: 'míngtiān',
		answer: 'tomorrow'
	},
	{
		id: 61,
		hint: '昨天',
		question: 'zuótiān',
		answer: 'yesterday'
	},
	{
		id: 62,
		hint: '上午',
		question: 'shàngwǔ',
		answer: 'morning'
	},
	{
		id: 63,
		hint: '中午',
		question: 'zhōngwǔ',
		answer: 'noon'
	},
	{
		id: 64,
		hint: '下午',
		question: 'xiàwǔ',
		answer: 'afternoon'
	},
	{
		id: 65,
		hint: '年',
		question: 'nián',
		answer: 'year'
	},
	{
		id: 66,
		hint: '月',
		question: 'yuè',
		answer: 'month'
	},
	{
		id: 67,
		hint: '日',
		question: 'rì',
		answer: 'day'
	},
	{
		id: 68,
		hint: '星期',
		question: 'xīngqī',
		answer: 'week'
	},
	{
		id: 69,
		hint: '点',
		question: 'diǎn',
		answer: 'dot, spot'
	},
	{
		id: 70,
		hint: '分钟',
		question: 'fēnzhōng',
		answer: 'minute'
	},
	{
		id: 71,
		hint: '现在',
		question: 'xiànzài',
		answer: 'now'
	},
	{
		id: 72,
		hint: '时候',
		question: 'shíhou',
		answer: 'time'
	},
	{
		id: 73,
		hint: '爸爸',
		question: 'bàba',
		answer: 'father'
	},
	{
		id: 74,
		hint: '妈妈',
		question: 'māma',
		answer: 'mother'
	},
	{
		id: 75,
		hint: '儿子',
		question: 'érzi',
		answer: 'son'
	},
	{
		id: 76,
		hint: '女儿',
		question: 'nǚér',
		answer: 'daughter'
	},
	{
		id: 77,
		hint: '老师',
		question: 'lǎoshī',
		answer: 'teacher'
	},
	{
		id: 78,
		hint: '学生',
		question: 'xuéshēng',
		answer: 'student'
	},
	{
		id: 79,
		hint: '同学',
		question: 'tóngxué',
		answer: 'shoolmate'
	},
	{
		id: 80,
		hint: '朋友',
		question: 'péngyou',
		answer: 'friend'
	},
	{
		id: 81,
		hint: '医生',
		question: 'yīshēng',
		answer: 'doctor'
	},
	{
		id: 82,
		hint: '先生',
		question: 'xiānsheng',
		answer: 'sir'
	},
	{
		id: 83,
		hint: '小姐',
		question: 'xiǎojiě',
		answer: 'Miss'
	},
	{
		id: 84,
		hint: '衣服',
		question: 'yīfu',
		answer: 'cloth'
	},
	{
		id: 85,
		hint: '水',
		question: 'shuǐ',
		answer: 'water'
	},
	{
		id: 86,
		hint: '菜',
		question: 'cài',
		answer: 'vegetable'
	},
	{
		id: 87,
		hint: '米饭',
		question: 'mǐfàn',
		answer: 'rice'
	},
	{
		id: 88,
		hint: '水果',
		question: 'shuǐguǒ',
		answer: 'fruit'
	},
	{
		id: 89,
		hint: '苹果',
		question: 'píngguǒ',
		answer: 'apple'
	},
	{
		id: 90,
		hint: '茶',
		question: 'chá',
		answer: 'tea'
	},
	{
		id: 91,
		hint: '杯子',
		question: 'bēizi',
		answer: 'cup'
	},
	{
		id: 92,
		hint: '钱',
		question: 'qián',
		answer: 'money'
	},
	{
		id: 93,
		hint: '飞机',
		question: 'fēijī',
		answer: 'airplane'
	},
	{
		id: 94,
		hint: '出租车',
		question: 'chūzūchē',
		answer: 'taxi'
	},
	{
		id: 95,
		hint: '电视',
		question: 'diànshì',
		answer: 'television'
	},
	{
		id: 96,
		hint: '电脑',
		question: 'diànnǎo',
		answer: 'computer'
	},
	{
		id: 97,
		hint: '电影',
		question: 'diànyǐng',
		answer: 'movie'
	},
	{
		id: 98,
		hint: '天气',
		question: 'tiānqì',
		answer: 'weather'
	},
	{
		id: 99,
		hint: '猫',
		question: 'māo',
		answer: 'cat'
	},
	{
		id: 100,
		hint: '狗',
		question: 'gǒu',
		answer: 'dog'
	},
	{
		id: 101,
		hint: '东西',
		question: 'dōngxi',
		answer: 'thing'
	},
	{
		id: 102,
		hint: '人',
		question: 'rén',
		answer: 'person'
	},
	{
		id: 103,
		hint: '名字',
		question: 'míngzi',
		answer: 'name'
	},
	{
		id: 104,
		hint: '书',
		question: 'shū',
		answer: 'book'
	},
	{
		id: 105,
		hint: '汉语',
		question: 'hànyǔ',
		answer: 'mandarin Chinese'
	},
	{
		id: 106,
		hint: '字',
		question: 'zì',
		answer: 'character'
	},
	{
		id: 107,
		hint: '桌子',
		question: 'zhuōzi',
		answer: 'desk'
	},
	{
		id: 108,
		hint: '椅子',
		question: 'yǐzi',
		answer: 'chair'
	},
	{
		id: 109,
		hint: '谢谢',
		question: 'xièxie',
		answer: 'thank'
	},
	{
		id: 110,
		hint: '不客气',
		question: 'búkèqì',
		answer: 'you are welcome'
	},
	{
		id: 111,
		hint: '再见',
		question: 'zàijiàn',
		answer: 'good-bye'
	},
	{
		id: 112,
		hint: '请',
		question: 'qǐng',
		answer: 'please'
	},
	{
		id: 113,
		hint: '对不起',
		question: 'duìbùqǐ',
		answer: 'sorry'
	},
	{
		id: 114,
		hint: '没关系',
		question: 'méiguānxì',
		answer: 'It doesn’t matter'
	},
	{
		id: 115,
		hint: '是',
		question: 'shì',
		answer: 'be (am, is, are)'
	},
	{
		id: 116,
		hint: '有',
		question: 'yǒu',
		answer: 'have'
	},
	{
		id: 117,
		hint: '看',
		question: 'kàn',
		answer: 'look'
	},
	{
		id: 118,
		hint: '听',
		question: 'tīng',
		answer: 'listen'
	},
	{
		id: 119,
		hint: '说话',
		question: 'shuōhuà',
		answer: 'speak'
	},
	{
		id: 120,
		hint: '读',
		question: 'dú',
		answer: 'read'
	},
	{
		id: 121,
		hint: '写',
		question: 'xiě',
		answer: 'write'
	},
	{
		id: 122,
		hint: '看见',
		question: 'kànjiàn',
		answer: 'see'
	},
	{
		id: 123,
		hint: '叫',
		question: 'jiào',
		answer: 'call'
	},
	{
		id: 124,
		hint: '来',
		question: 'lái',
		answer: 'come'
	},
	{
		id: 125,
		hint: '回',
		question: 'huí',
		answer: 'return'
	},
	{
		id: 126,
		hint: '去',
		question: 'qù',
		answer: 'go'
	},
	{
		id: 127,
		hint: '吃',
		question: 'chī',
		answer: 'eat'
	},
	{
		id: 128,
		hint: '喝',
		question: 'hē',
		answer: 'drink'
	},
	{
		id: 129,
		hint: '睡觉',
		question: 'shuìjiào',
		answer: 'sleep'
	},
	{
		id: 130,
		hint: '打电话',
		question: 'dǎdiànhuà',
		answer: 'call up'
	},
	{
		id: 131,
		hint: '做',
		question: 'zuò',
		answer: 'do'
	},
	{
		id: 132,
		hint: '买',
		question: 'mǎi',
		answer: 'buy'
	},
	{
		id: 133,
		hint: '开',
		question: 'kāi',
		answer: 'open'
	},
	{
		id: 134,
		hint: '坐',
		question: 'zuò',
		answer: 'sit'
	},
	{
		id: 135,
		hint: '住',
		question: 'zhù',
		answer: 'live'
	},
	{
		id: 136,
		hint: '学习',
		question: 'xuéxí',
		answer: 'study'
	},
	{
		id: 137,
		hint: '工作',
		question: 'gōngzuò',
		answer: 'work'
	},
	{
		id: 138,
		hint: '下雨',
		question: 'xiàyǔ',
		answer: 'rain'
	},
	{
		id: 139,
		hint: '爱',
		question: 'ài',
		answer: 'love'
	},
	{
		id: 140,
		hint: '喜欢',
		question: 'xǐhuān',
		answer: 'love, like'
	},
	{
		id: 141,
		hint: '想',
		question: 'xiǎng',
		answer: 'want'
	},
	{
		id: 142,
		hint: '认识',
		question: 'rènshi',
		answer: 'know'
	},
	{
		id: 143,
		hint: '会',
		question: 'huì',
		answer: 'can'
	},
	{
		id: 144,
		hint: '能',
		question: 'néng',
		answer: 'can, be able to'
	},
	{
		id: 145,
		hint: '好',
		question: 'hǎo',
		answer: 'good'
	},
	{
		id: 146,
		hint: '大',
		question: 'dà',
		answer: 'big'
	},
	{
		id: 147,
		hint: '小',
		question: 'xiǎo',
		answer: 'small'
	},
	{
		id: 148,
		hint: '多',
		question: 'duō',
		answer: 'many, much'
	},
	{
		id: 149,
		hint: '少',
		question: 'shǎo',
		answer: 'few, little'
	},
	{
		id: 150,
		hint: '冷',
		question: 'lěng',
		answer: 'cold'
	},
	{
		id: 151,
		hint: '热',
		question: 'rè',
		answer: 'hot'
	},
	{
		id: 152,
		hint: '高兴',
		question: 'gāoxìng',
		answer: 'happy'
	},
	{
		id: 153,
		hint: '漂亮',
		question: 'piàoliàng',
		answer: 'beautiful'
	}
]);

/**
 *
 * @param {*} array
 * @returns array
 */
export const shuffle = (array) => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
};
