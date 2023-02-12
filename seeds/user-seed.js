const { User } = require('../models');

const userData = [
    {
        username: 'Smith',
        password: 'Smith@123'
    },
    {
        username: 'John',
        password: 'John@123'
    },
    {
        username: 'Willian',
        password: 'Willian@123'
    },
    {
        username: 'James',
        password: 'James@123'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;