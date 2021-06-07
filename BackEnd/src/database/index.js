import Sequelize from 'sequelize';
import DatabaseConfig from '../config/database';

import User from '../app/models/User';
import Band from '../app/models/Band';
import Venue from '../app/models/Venue';
import Concert from '../app/models/Concert';

const models = [User, Band, Venue, Concert];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(DatabaseConfig);

        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models)); 
    }
}

export default new DataBase();