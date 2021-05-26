module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'm12345',
    database: 'testegig',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};

// module.exports = {
//     dialect: 'postgres',
//     dialectOptions: {
//         ssl: {
//             require: true,
//             rejectUnauthorized: false
//         }
//     },
//     host: 'ec2-52-0-114-209.compute-1.amazonaws.com',
//     username: 'giftmojlglgsbe',
//     password: '1acd9b982bcc1045d39f66ee450b6a9e5c91e02914a98bf14d461b2e40d94b1e',
//     database: 'd2uc06nd8h6o51',
//     ssl: true,
//     define: {
//         timestamps: true,
//         underscored: true,
//         underscoredAll: true,
//     },
// };