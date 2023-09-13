import { writable } from 'svelte/store';

export const cards = writable([
	{
		hint: '我',
		question: 'wǒ',
		answer: 'I, me'
	},
	{
		hint: '我们',
		question: 'wǒmen',
		answer: 'we, us (pl.)'
	},
	{
		hint: '你',
		question: 'nǐ',
		answer: 'you'
	},
	{
		hint: '你们',
		question: 'nǐmen',
		answer: 'you (pl.)'
	},
	{
		hint: '他',
		question: 'tā',
		answer: 'he, him'
	},
	{
		hint: '她',
		question: 'tā',
		answer: 'she, her'
	},
	{
		hint: '他们',
		question: 'tāmen',
		answer: 'they (male+female / male, pl.)'
	},
	{
		hint: '她们',
		question: 'tāmen',
		answer: 'they (females, pl.)'
	},
	{
		hint: '这 (这儿)',
		question: 'zhè ( zhèr)',
		answer: 'here, this'
	},
	{
		hint: '那 (那儿)',
		question: 'nà (nàr)',
		answer: 'there, that'
	},
	{
		hint: '哪（哪儿）',
		question: 'nǎ (nǎr)',
		answer: 'where'
	},
	{
		hint: '谁',
		question: 'shuí',
		answer: 'who'
	},
	{
		hint: '什么',
		question: 'shén me',
		answer: 'what, why'
	},
	{
		hint: '多少',
		question: 'duōshǎo',
		answer: 'how many, how much'
	},
	{
		hint: '几',
		question: 'jǐ',
		answer: 'a few, how many'
	},
	{
		hint: '怎么',
		question: 'zěnme',
		answer: 'how'
	},
	{
		hint: '怎么样',
		question: 'zěnmeyàng',
		answer: 'how about'
	},
	{
		hint: '一',
		question: 'yī',
		answer: 'one'
	},
	{
		hint: '二',
		question: 'èr',
		answer: 'two'
	},
	{
		hint: '三',
		question: 'sān',
		answer: 'three'
	},
	{
		hint: '四',
		question: 'sì',
		answer: 'four'
	},
	{
		hint: '五',
		question: 'wǔ',
		answer: 'five'
	},
	{
		hint: '六',
		question: 'liù',
		answer: 'six'
	},
	{
		hint: '七',
		question: 'qī',
		answer: 'seven'
	},
	{
		hint: '八',
		question: 'bā',
		answer: 'eight'
	},
	{
		hint: '九',
		question: 'jiǔ',
		answer: 'nine'
	},
	{
		hint: '十',
		question: 'shí',
		answer: 'ten'
	},
	{
		hint: '零',
		question: 'líng',
		answer: 'zero'
	},
	{
		hint: '个',
		question: 'gè',
		answer: 'one, a, an'
	},
	{
		hint: '岁',
		question: 'suì',
		answer: 'year'
	},
	{
		hint: '本',
		question: 'běn',
		answer: 'volume'
	},
	{
		hint: '些',
		question: 'xiē',
		answer: 'some'
	},
	{
		hint: '块',
		question: 'kuài',
		answer: 'piece'
	},
	{
		hint: '不',
		question: 'bù',
		answer: 'no'
	},
	{
		hint: '没',
		question: 'méi',
		answer: 'no'
	},
	{
		hint: '很',
		question: 'hěn',
		answer: 'quite, very'
	},
	{
		hint: '太',
		question: 'tài',
		answer: 'too'
	},
	{
		hint: '都',
		question: 'dōu',
		answer: 'all'
	},
	{
		hint: '和',
		question: 'hé',
		answer: 'and'
	},
	{
		hint: '在',
		question: 'zài',
		answer: 'in, at'
	},
	{
		hint: '的',
		question: 'de',
		answer: ''
	},
	{
		hint: '了',
		question: 'le',
		answer: ''
	},
	{
		hint: '吗',
		question: 'ma',
		answer: ''
	},
	{
		hint: '呢',
		question: 'ne',
		answer: ''
	},
	{
		hint: '喂',
		question: 'wèi',
		answer: 'hello'
	},
	{
		hint: '家',
		question: 'jiā',
		answer: 'home'
	},
	{
		hint: '学校',
		question: 'xuéxiào',
		answer: 'school'
	},
	{
		hint: '饭店',
		question: 'fàndiàn',
		answer: 'restaurant'
	},
	{
		hint: '商店',
		question: 'shāngdiàn',
		answer: 'store'
	},
	{
		hint: '医院',
		question: 'yīyuàn',
		answer: 'hospital'
	},
	{
		hint: '火车站',
		question: 'huǒchēzhàn',
		answer: 'train station'
	},
	{
		hint: '中国',
		question: 'zhōng guó',
		answer: 'China'
	},
	{
		hint: '北京',
		question: 'běijīng',
		answer: 'Beijing'
	},
	{
		hint: '上',
		question: 'shàng',
		answer: 'up'
	},
	{
		hint: '下',
		question: 'xià',
		answer: 'down'
	},
	{
		hint: '前面',
		question: 'qiánmiàn',
		answer: 'front'
	},
	{
		hint: '后面',
		question: 'hòumiàn',
		answer: 'behind'
	},
	{
		hint: '里',
		question: 'lǐmiàn',
		answer: 'inside'
	},
	{
		hint: '今天',
		question: 'jīntiān',
		answer: 'today'
	},
	{
		hint: '明天',
		question: 'míngtiān',
		answer: 'tomorrow'
	},
	{
		hint: '昨天',
		question: 'zuótiān',
		answer: 'yesterday'
	},
	{
		hint: '上午',
		question: 'shàngwǔ',
		answer: 'morning'
	},
	{
		hint: '中午',
		question: 'zhōngwǔ',
		answer: 'noon'
	},
	{
		hint: '下午',
		question: 'xiàwǔ',
		answer: 'afternoon'
	},
	{
		hint: '年',
		question: 'nián',
		answer: 'year'
	},
	{
		hint: '月',
		question: 'yuè',
		answer: 'month'
	},
	{
		hint: '日',
		question: 'rì',
		answer: 'day'
	},
	{
		hint: '星期',
		question: 'xīngqī',
		answer: 'week'
	},
	{
		hint: '点',
		question: 'diǎn',
		answer: 'dot, spot'
	},
	{
		hint: '分钟',
		question: 'fēnzhōng',
		answer: 'minute'
	},
	{
		hint: '现在',
		question: 'xiànzài',
		answer: 'now'
	},
	{
		hint: '时候',
		question: 'shíhou',
		answer: 'time'
	},
	{
		hint: '爸爸',
		question: 'bàba',
		answer: 'father'
	},
	{
		hint: '妈妈',
		question: 'māma',
		answer: 'mother'
	},
	{
		hint: '儿子',
		question: 'érzi',
		answer: 'son'
	},
	{
		hint: '女儿',
		question: 'nǚér',
		answer: 'daughter'
	},
	{
		hint: '老师',
		question: 'lǎoshī',
		answer: 'teacher'
	},
	{
		hint: '学生',
		question: 'xuéshēng',
		answer: 'student'
	},
	{
		hint: '同学',
		question: 'tóngxué',
		answer: 'shoolmate'
	},
	{
		hint: '朋友',
		question: 'péngyou',
		answer: 'friend'
	},
	{
		hint: '医生',
		question: 'yīshēng',
		answer: 'doctor'
	},
	{
		hint: '先生',
		question: 'xiānsheng',
		answer: 'sir'
	},
	{
		hint: '小姐',
		question: 'xiǎojiě',
		answer: 'Miss'
	},
	{
		hint: '衣服',
		question: 'yīfu',
		answer: 'cloth'
	},
	{
		hint: '水',
		question: 'shuǐ',
		answer: 'water'
	},
	{
		hint: '菜',
		question: 'cài',
		answer: 'vegetable'
	},
	{
		hint: '米饭',
		question: 'mǐfàn',
		answer: 'rice'
	},
	{
		hint: '水果',
		question: 'shuǐguǒ',
		answer: 'fruit'
	},
	{
		hint: '苹果',
		question: 'píngguǒ',
		answer: 'apple'
	},
	{
		hint: '茶',
		question: 'chá',
		answer: 'tea'
	},
	{
		hint: '杯子',
		question: 'bēizi',
		answer: 'cup'
	},
	{
		hint: '钱',
		question: 'qián',
		answer: 'money'
	},
	{
		hint: '飞机',
		question: 'fēijī',
		answer: 'airplane'
	},
	{
		hint: '出租车',
		question: 'chūzūchē',
		answer: 'taxi'
	},
	{
		hint: '电视',
		question: 'diànshì',
		answer: 'television'
	},
	{
		hint: '电脑',
		question: 'diànnǎo',
		answer: 'computer'
	},
	{
		hint: '电影',
		question: 'diànyǐng',
		answer: 'movie'
	},
	{
		hint: '天气',
		question: 'tiānqì',
		answer: 'weather'
	},
	{
		hint: '猫',
		question: 'māo',
		answer: 'cat'
	},
	{
		hint: '狗',
		question: 'gǒu',
		answer: 'dog'
	},
	{
		hint: '东西',
		question: 'dōngxi',
		answer: 'thing'
	},
	{
		hint: '人',
		question: 'rén',
		answer: 'person'
	},
	{
		hint: '名字',
		question: 'míngzi',
		answer: 'name'
	},
	{
		hint: '书',
		question: 'shū',
		answer: 'book'
	},
	{
		hint: '汉语',
		question: 'hànyǔ',
		answer: 'mandarin Chinese'
	},
	{
		hint: '字',
		question: 'zì',
		answer: 'character'
	},
	{
		hint: '桌子',
		question: 'zhuōzi',
		answer: 'desk'
	},
	{
		hint: '椅子',
		question: 'yǐzi',
		answer: 'chair'
	},
	{
		hint: '谢谢',
		question: 'xièxie',
		answer: 'thank'
	},
	{
		hint: '不客气',
		question: 'búkèqì',
		answer: 'you are welcome'
	},
	{
		hint: '再见',
		question: 'zàijiàn',
		answer: 'good-bye'
	},
	{
		hint: '请',
		question: 'qǐng',
		answer: 'please'
	},
	{
		hint: '对不起',
		question: 'duìbùqǐ',
		answer: 'sorry'
	},
	{
		hint: '没关系',
		question: 'méiguānxì',
		answer: 'It doesn’t matter'
	},
	{
		hint: '是',
		question: 'shì',
		answer: 'be (am, is, are)'
	},
	{
		hint: '有',
		question: 'yǒu',
		answer: 'have'
	},
	{
		hint: '看',
		question: 'kàn',
		answer: 'look'
	},
	{
		hint: '听',
		question: 'tīng',
		answer: 'listen'
	},
	{
		hint: '说话',
		question: 'shuōhuà',
		answer: 'speak'
	},
	{
		hint: '读',
		question: 'dú',
		answer: 'read'
	},
	{
		hint: '写',
		question: 'xiě',
		answer: 'write'
	},
	{
		hint: '看见',
		question: 'kànjiàn',
		answer: 'see'
	},
	{
		hint: '叫',
		question: 'jiào',
		answer: 'call'
	},
	{
		hint: '来',
		question: 'lái',
		answer: 'come'
	},
	{
		hint: '回',
		question: 'huí',
		answer: 'return'
	},
	{
		hint: '去',
		question: 'qù',
		answer: 'go'
	},
	{
		hint: '吃',
		question: 'chī',
		answer: 'eat'
	},
	{
		hint: '喝',
		question: 'hē',
		answer: 'drink'
	},
	{
		hint: '睡觉',
		question: 'shuìjiào',
		answer: 'sleep'
	},
	{
		hint: '打电话',
		question: 'dǎdiànhuà',
		answer: 'call up'
	},
	{
		hint: '做',
		question: 'zuò',
		answer: 'do'
	},
	{
		hint: '买',
		question: 'mǎi',
		answer: 'buy'
	},
	{
		hint: '开',
		question: 'kāi',
		answer: 'open'
	},
	{
		hint: '坐',
		question: 'zuò',
		answer: 'sit'
	},
	{
		hint: '住',
		question: 'zhù',
		answer: 'live'
	},
	{
		hint: '学习',
		question: 'xuéxí',
		answer: 'study'
	},
	{
		hint: '工作',
		question: 'gōngzuò',
		answer: 'work'
	},
	{
		hint: '下雨',
		question: 'xiàyǔ',
		answer: 'rain'
	},
	{
		hint: '爱',
		question: 'ài',
		answer: 'love'
	},
	{
		hint: '喜欢',
		question: 'xǐhuān',
		answer: 'love, like'
	},
	{
		hint: '想',
		question: 'xiǎng',
		answer: 'want'
	},
	{
		hint: '认识',
		question: 'rènshi',
		answer: 'know'
	},
	{
		hint: '会',
		question: 'huì',
		answer: 'can'
	},
	{
		hint: '能',
		question: 'néng',
		answer: 'can, be able to'
	},
	{
		hint: '好',
		question: 'hǎo',
		answer: 'good'
	},
	{
		hint: '大',
		question: 'dà',
		answer: 'big'
	},
	{
		hint: '小',
		question: 'xiǎo',
		answer: 'small'
	},
	{
		hint: '多',
		question: 'duō',
		answer: 'many, much'
	},
	{
		hint: '少',
		question: 'shǎo',
		answer: 'few, little'
	},
	{
		hint: '冷',
		question: 'lěng',
		answer: 'cold'
	},
	{
		hint: '热',
		question: 'rè',
		answer: 'hot'
	},
	{
		hint: '高兴',
		question: 'gāoxìng',
		answer: 'happy'
	},
	{
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
