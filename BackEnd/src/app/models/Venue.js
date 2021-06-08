import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Venue extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        provider: Sequelize.BOOLEAN,
        phone: Sequelize.STRING,
        city: Sequelize.STRING,
        state: Sequelize.STRING,
        add: Sequelize.STRING,
        rating: Sequelize.DECIMAL(10,1),
        lat: Sequelize.DOUBLE,
        long: Sequelize.DOUBLE,
        image: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
  static associate(models) {
    this.hasMany(models.Concert, { foreignKey: 'venue_id', as: 'concerts' });
  }
}

export default Venue;