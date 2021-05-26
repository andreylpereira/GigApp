import Sequelize from 'sequelize';
import DatabaseConfig from '../config/database';

import User from '../app/models/User';
import Band from '../app/models/Band';
import Venue from '../app/models/Venue';

const models = [User, Band, Venue];

class DataBase {
    constructor() {
        this.init();
    }

    init() {
        this.connection = new Sequelize(DatabaseConfig);

        models.map(model => model.init(this.connection));
    }
}

export default new DataBase();