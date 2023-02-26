'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    let roleSeed = []
    roleSeed.push({
      privilege: "Admin",
      createdAt: new Date(),
      updatedAt: new Date()
    })
    roleSeed.push({
      privilege: "Doctor",
      createdAt: new Date(),
      updatedAt: new Date()
    })
    roleSeed.push({
      privilege: "Client",
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return queryInterface.bulkInsert("Roles", roleSeed);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Roles", null, {});
  }
};
