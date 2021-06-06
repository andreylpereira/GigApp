import Sequelize, { Model } from 'sequelize';

class Concert extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        date: Sequelize.STRING,
        ticketPrice: Sequelize.DECIMAL(8, 2)
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.hasMany(models.Venue, { foreignKey: 'venue_id', as: 'venues' });
    this.belongsToMany(models.Band, { foreignKey: 'band_id', as: 'bands' });
  }
}

export default Concert;