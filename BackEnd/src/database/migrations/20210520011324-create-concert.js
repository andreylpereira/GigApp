'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('concerts', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      venue_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'venues', key: 'id' },
        onUpdate: 'CASCADE',        
      },
      band_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'bands', key: 'id' },
        onUpdate: 'CASCADE',        
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      date: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      ticketPrice: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('concerts');
  },
};
