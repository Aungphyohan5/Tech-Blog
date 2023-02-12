const seedComments = require('./comment-seed');
const seedUsers = require('./user-seed');
const seedPosts = require('./post-seed');

// connect to db
const sequelize = require('../config/connect')

const seedDatas = async () => {
    await sequelize.sync({ force: true });
    await seedUsers();
    await seedPosts();
    await seedComments();
    process.exit(0);
};

seedDatas();