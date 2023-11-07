const names = [
    'Aaran',
    'Aaren',
    'Aarez',
    'Aarman',
    'Aaron',
    'Aaron-James',
    'Aarron',
    'Aaryan',
    'Aaryn',
    'Aayan',
    'Aazaan',
    'Abaan',
    'Abbas',
    'Abdallah',
    'Abdalroof',
    'Abdihakim',
    'Abdirahman',
    'Abdisalam',
    'Abdul',
    'Abdul-Aziz',
    'Abdulbasir',
    'Abdulkadir',
    'Abdulkarem',
    'Smith',
    'Jones',
    'Coollastname',
    'enter_name_here',
    'Ze',
    'Zechariah',
    'Zeek',
    'Zeeshan',
    'Zeid',
    'Zein',
    'Zen',
    'Zendel',
    'Zenith',
    'Zennon',
    'Zeph',
    'Zerah',
    'Zhen',
    'Zhi',
    'Zhong',
    'Zhuo',
    'Zi',
    'Zidane',
    'Zijie',
    'Zinedine',
    'Zion',
    'Zishan',
    'Ziya',
    'Ziyaan',
    'Zohaib',
    'Zohair',
    'Zoubaeir',
    'Zubair',
    'Zubayr',
    'Zuriel',
    'Xander',
    'Jared',
    'Courtney',
    'Gillian',
    'Clark',
    'Jared',
    'Grace',
    'Kelsey',
    'Tamar',
    'Alex',
    'Mark',
    'Tamar',
    'Farish',
    'Sarah',
    'Nathaniel',
    'Parker',
];

const thoughts = [
    'There is no remedy for love, but to love more.',
    'Total absence of humor renders life impossible.',
    'No good deed goes unpunished.',
    'I do not like composers who think. It gets in the way of plagiarism.',
    'Learning to love yourself is the greatest love of all.',
    'Things are seldom what they seem. Skim milk masquerades as cream.',
    'What we call progress is the exchange of one nuissance for another.',
    'We are continually faced with a series of great opportunities disguised as insoluble problems.',
    'Youth is not always all that it is touted to be.',
    'Nobody believes the official spokesperson, but everybody trusts an anonymous source.',
    'Life is just a bowl of pits.',
    'Nobody goes there nowadays, it is too crowded.',
    'Goals transform a random walk into a chase.',
];

const reactions = [
    'Love it!',
    'Hate it!',
    'This is great advice.',
    'This is terrible advice.',
    'This makes me sad.',
    'This makes me happy.',
    'I wish I heard this sooner.',
    'Interesting...',
    'What a bunch of bologne.',
    'Rude.',
    'Amazing!',
    'Life-changing.',
    '10/10 would recommend to a friend!'
]

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
const getRandomName = () =>
    `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Gets a random thought
const getRandomThought = () => getRandomArrItem(thoughts);

// Gets a random reaction
const getRandomReaction = () => getRandomArrItem(reactions);

module.exports = { getRandomName, getRandomThought, getRandomReaction };