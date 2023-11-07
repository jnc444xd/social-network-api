const connection = require('../config/connection');
const { getRandomName, getRandomThought, getRandomReaction } = require('./data');
const { User, Thought } = require('../models');

connection.on('error', (err) => err);

connection.once('open', async () => {

    console.log('connected');

    let userCheck = await connection.db.listCollections({ name: 'User' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('User');
    };

    let thoughtCheck = await connection.db.listCollections({ name: 'Thought' }).toArray();
    if (thoughtCheck.length) {
        await connection.dropCollection('Thought');
    };

    const users = [];

    for (let i = 0; i < 20; i++) {
        const username = getRandomName();
        const email = `${username}${Math.floor(Math.random() * (100) + 50)}`;
        const thoughts = Math.floor(Math.random() * 20);
        const friends = Math.floor(Math.random() * 20);

        users.push({
            username,
            email,
            thoughts,
            friends,
        });
    };

    const thoughts = [];

    for (let i = 0; i < 20; i++) {
        const thoughtText = getRandomThought();
        const username = Math.floor(Math.random() * 20);
        const reactions = getRandomReaction(2);

        thoughts.push({
            thoughtText,
            username,
            reactions,
        })
    }

    await User.collection.insertMany(users);

    await Thought.collection.insertMany(thoughts);

    console.table(users);
    console.table(thoughts);
    console.info('Seeding complete! 🌱');
    process.exit(0);
});