"use strict";
const bcrypt = require("bcryptjs");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Eduardo Cassano",
          username: "ecassano",
          email: "educassano54@gmail.com",
          password: bcrypt.hashSync("123456", 10),
          birthday: new Date(2000, 12, 8),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {},
};
