const { User } = require('../models');

const userData = [{
    username: 'John',
    password: 'John@123'

},
{
    username: 'Mike',
    password: 'Mike@123'
},
{
    username: 'James',
    password: 'James@123'
}
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;