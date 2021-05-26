import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Band extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
        phone: Sequelize.STRING,
        style: Sequelize.STRING,
        description: Sequelize.STRING,
        rating: Sequelize.INTEGER,
        lat: Sequelize.INTEGER,
        long: Sequelize.INTEGER, 
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async band => {
      if (band.password) {
        band.password_hash = await bcrypt.hash(band.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }

  static associate(models) {    
    this.belongsToMany(models.Concert, { foreignKey: 'band_id', as: 'concert' });
  }
}

export default Band;