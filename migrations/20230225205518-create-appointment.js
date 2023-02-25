'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Appointments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      Doctor_Id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Doctors",
          key:"id"
        } 
      },
      Patient_Id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Patients",
          key:"id"
        } 
      },
      Intervention_Id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Interventions",
          key:"id"
        } 
      },
      date: {
        type: Sequelize.DATE
      },
      comments: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Appointments');
  }
};