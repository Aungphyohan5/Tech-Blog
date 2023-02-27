
const sequelize = require('../config/connect');
const { Comment, Post, User } = require('../models')
const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('homepage')

    // Post.findAll({
    //     attributes: [
    //         'id',
    //         'title',
    //         'content',
    //         'created_at'
    //     ]
    // })
});

router.get('/login', (req, res) => {
    res.render('login')
});

module.exports = router;