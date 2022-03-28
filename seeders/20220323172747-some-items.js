"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "items",
      [
        {
          title: "High chair",
          imgUrl: "https://media.s-bol.com/7lq5ZV22B0O/781x1200.jpg",
          price: 200,
          itemUrl:
            "https://www.stokke.com/NLD/nl-nl/100101.html?gclid=CjwKCAjwiuuRBhBvEiwAFXKaNK89PA2ocwkDRQ5Ufs1OUQmmg5s_nfYosbPTzS4ggztbxE2HXqHprhoCvrwQAvD_BwE",
          fulfilled: true,
          details: "color: wood",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Rocking chair",
          imgUrl:
            "https://www.furndaily.com/wp-content/uploads/2020/11/SDB2021-11-02_0001-18-2.jpg",
          price: 289,
          itemUrl:
            "https://www.furndaily.com/product/schommelstoel-steerne-beige-velvet",
          fulfilled: false,
          details: "color: white",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("items", null, {});
  },
};
