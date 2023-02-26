'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    let usersSeed = []
    usersSeed.push({
      name: "Felipe",
      surname: "Báguena",
      nif: "22555333P",
      birth_date: "1987-08-21",
      direction: "Ruzafa",
      email: "felipe@gmail.com",
      phone: "666777888",
      password: "passwordsuperfalsa1",
      createdAt: new Date(),
      updatedAt: new Date()
    })
    usersSeed.push({
      name: "Fernando",
      surname: "Martinez",
      nif: "22444333A",
      birth_date: "1986-08-06",
      direction: "Patraix",
      email: "fernando@gmail.com",
      phone: "666555888",
      password: "passwordsuperfalsa2",
      createdAt: new Date(),
      updatedAt: new Date()
    })
    return queryInterface.bulkInsert("Users", usersSeed);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete("Users", null, {});
  }
};
