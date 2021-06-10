import Sequelize, { Model } from 'sequelize';

class ConcertBands extends Model {
  static init(sequelize) {
    super.init(
      {
        band_id: Sequelize.INTEGER,
        concert_id: Sequelize.INTEGER,
        approved: Sequelize.BOOLEAN, 
      },
      {
        sequelize,        
      }
    );    

    return this;
  }  

  static associate(models) {
    this.belongsToMany(models.Concert, { foreignKey: 'concert_id', through: 'concert_bands', as: 'concerts' });
    this.belongsToMany(models.Band, { foreignKey: 'band_id', through: 'concert_bands', as: 'bands' });
  }
}

export default ConcertBands;