const { Post } = require('../models');

const postData = [
    {
        title: 'test post',
        text: 'This is the test post',
        user_id: 1

    },
    {
        title: 'test post 1',
        text: 'Again..This is the test post',
        user_id: 2

    },
    {
        title: 'test post 2',
        text: 'Again..This is the test post',
        user_id: 3

    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts