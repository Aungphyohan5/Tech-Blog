const { Comment } = require('../models');

const commentData = [
    {
        commentText: 'This is the first comment',
        user_id: 1,
        post_id: 1
    },
    {
        commentText: 'This is the second comment',
        user_id: 2,
        post_id: 2
    },
    {
        commentText: 'This is the third comment',
        user_id: 3,
        post_id: 3
    }
];

const seedComment = () => Comment.bulkCreate(commentData);

module.exports = seedComment;