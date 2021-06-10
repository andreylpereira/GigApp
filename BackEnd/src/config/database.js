
// banco local

// module.exports = {
//     dialect: 'postgres',
//     host: 'localhost',
//     username: 'postgres',
//     password: 'm12345',
//     database: 'testegig',
//     define: {
//         timestamps: true,
//         underscored: true,
//         underscoredAll: true,
//     },
// };


//banco produção

module.exports = {
    dialect: 'postgres',
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false
        }
    },
    host: 'ec2-52-6-77-239.compute-1.amazonaws.com',
    username: 'wlkbalitflrxuk',
    password: '948b3bfb1b4ce96727167dc17f58f4a3328f8fe8c589ec2036431ebd0dce2e2b',
    database: 'dcpjsatobsopbq',
    ssl: true,
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};