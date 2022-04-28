"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "senders",
      [
        {
          name: "Mom",
          giftMessage: "Love you. Hope you like it",
          createdAt: new Date(),
          updatedAt: new Date(),
          itemId: 1,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("senders", null, {});
  },
};
