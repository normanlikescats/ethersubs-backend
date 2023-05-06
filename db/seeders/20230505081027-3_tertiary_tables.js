'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("comments",[
      {
        id:1,
        user_id:1,
        post_id:1,
        comment:"Woooo love it man LFG!",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:2,
        user_id:3,
        post_id:1,
        comment:"$WOJAK and $CHAD is where it's at...iykyk",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:3,
        user_id:3,
        post_id:2,
        comment:"Sheesh, tradfi always a bummer...",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:4,
        user_id:1,
        post_id:3,
        comment:"Man, WSB was actually cool. Sad to see. Hope karma catches up to him.",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:5,
        user_id:1,
        post_id:4,
        comment:"Thank u ser for the work u do.",
        created_at: new Date(),
        updated_at: new Date()
      },
    ],{});
    await queryInterface.bulkInsert("transactions",[
      {
        id:1,
        user_id:1,
        creator_id:1,
        amount:5,
        asset: "USDT",
        transaction_hash: "0x3555f9376ef2063b9b7a514023a860a4a1548a0a36a0eaf504e2d36049120eae",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:2,
        user_id:1,
        creator_id:1,
        amount:10,
        asset: "DAI",
        transaction_hash: "0xdcc1239562e8c72984c530c00615db7d6ec18903bedb11407e2d2014681ef0a6",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:3,
        user_id:2,
        creator_id:2,
        amount:100,
        asset: "USDC",
        transaction_hash: "0xbcb2924b130a1ca756bd9e6650d0bbce537c30b23190bb9e0af09ebd08a3776c",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:4,
        user_id:3,
        creator_id:2,
        amount:0.01,
        asset: "ETH",
        transaction_hash: "0x4430c5936eaeae99f34bf1f7ede51710126cccb165ae00f852c321ede14cedbf",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:5,
        user_id:4,
        creator_id:1,
        amount:0.1,
        asset: "ETH",
        transaction_hash: "0xd211db11a418cdedcfb5bb33949b85cd634811314f3622e29a9047a6125aa2d9",
        created_at: new Date(),
        updated_at: new Date()
      }
    ],{});
    await queryInterface.bulkInsert("follows",[
      {
        id: 1,
        user_id: 1,
        creator_id: 1
      },
      {
        id: 2,
        user_id: 1,
        creator_id: 2
      },
      {
        id: 3,
        user_id: 3,
        creator_id: 1
      },
      {
        id: 4,
        user_id: 3,
        creator_id: 2
      },
      {
        id: 5,
        user_id: 2,
        creator_id: 2
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {})
    await queryInterface.bulkDelete("transactions", null, {})
    await queryInterface.bulkDelete("follows", null, {})
  }
};
