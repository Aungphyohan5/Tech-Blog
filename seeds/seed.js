const seedComment = require('./comment-seed');
const seedUsers = require('./user-seed');
const seedPosts = require('./post-seed');

// connect to db
const sequelize = require('../config/connect')

const seedDatas = async () => {
    await sequelize.sync({ force: true });

    await seedComment();

    await seedPosts();

    await seedUsers();

    process.exit(0);
};

seedDatas();