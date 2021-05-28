import Sequelize, { Model } from 'sequelize';

class Concert extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        date: Sequelize.STRING,        
        ticketPrice: Sequelize.DECIMAL(8,2)
      },
      {
        sequelize,
      }
    );    

    return this;
  }  
}

export default Concert;