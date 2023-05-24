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
        created_at: new Date("2023-04-01 16:02:24.921+08"),
        updated_at: new Date("2023-04-01 16:02:24.921+08")
      },
      {
        id:2,
        user_id:3,
        post_id:1,
        comment:"$WOJAK and $CHAD is where it's at...iykyk",
        created_at: new Date("2023-03-31 16:02:24.921+08"),
        updated_at: new Date("2023-03-31 16:02:24.921+08")
      },
      {
        id:3,
        user_id:3,
        post_id:2,
        comment:"Sheesh, tradfi always a bummer...",
        created_at: new Date("2023-04-07 16:02:24.921+08"),
        updated_at: new Date("2023-04-07 16:02:24.921+08")
      },
      {
        id:4,
        user_id:1,
        post_id:3,
        comment:"Man, WSB was actually cool. Sad to see. Hope karma catches up to him.",
        created_at: new Date("2023-04-04 16:02:24.921+08"),
        updated_at: new Date("2023-04-04 16:02:24.921+08")
      },
      {
        id:5,
        user_id:1,
        post_id:4,
        comment:"Thank u ser for the work u do.",
        created_at: new Date("2023-04-11 16:02:24.921+08"),
        updated_at: new Date("2023-04-11 16:02:24.921+08")
      },
      {
        id:6,
        user_id:6,
        post_id:5,
        comment:"Ok all in $PSYOP.",
        created_at: new Date("2023-05-15 16:02:24.921+08"),
        updated_at: new Date("2023-05-15 16:02:24.921+08")
      },
      {
        id:7,
        user_id:7,
        post_id:5,
        comment:"Damn I'm alr all in bro",
        created_at: new Date("2023-05-14 16:02:24.921+08"),
        updated_at: new Date("2023-05-14 16:02:24.921+08")
      },
      {
        id:8,
        user_id:8,
        post_id:5,
        comment:"yeeaaa gonna avoid the current memecoin frenzy. Me thinks it's gonna dump soon...",
        created_at: new Date("2023-05-15 16:02:24.921+08"),
        updated_at: new Date("2023-05-15 16:02:24.921+08")
      },
      {
        id:9,
        user_id:9,
        post_id:5,
        comment:"Absolutely whack that this guy just got 7m outta nowhere",
        created_at: new Date("2023-05-16 16:02:24.921+08"),
        updated_at: new Date("2023-05-16 16:02:24.921+08")
      },
      {
        id:10,
        user_id:10,
        post_id:6,
        comment:"Damn...worst piece of news to wake up to. Lost 5ETH sheesh",
        created_at: new Date("2023-05-07 16:02:24.921+08"),
        updated_at: new Date("2023-05-07 16:02:24.921+08")
      },
      {
        id:11,
        user_id:1,
        post_id:6,
        comment:"ZkSync? more like ZkScam.",
        created_at: new Date("2023-05-09 16:02:24.921+08"),
        updated_at: new Date("2023-05-10 16:02:24.921+08")
      },
      {
        id:12,
        user_id:1,
        post_id:6,
        comment:"The zk in zkSync represents the amount of knowledge the average user has lol.",
        created_at: new Date("2023-05-11 16:02:24.921+08"),
        updated_at: new Date("2023-05-11 16:02:24.921+08")
      }
    ],{});
    await queryInterface.bulkInsert("transactions",[
      {
        id:1,
        user_id:1,
        creator_id:2,
        amount:5,
        asset: "USDT",
        transaction_hash: "0x3555f9376ef2063b9b7a514023a860a4a1548a0a36a0eaf504e2d36049120eae",
        created_at: new Date("2023-04-05 16:02:24.921+08"),
        updated_at: new Date("2023-04-05 16:02:24.921+08")
      },
      {
        id:2,
        user_id:1,
        creator_id:1,
        amount:1,
        asset: "USDT",
        transaction_hash: "0xdcc1239562e8c72984c530c00615db7d6ec18903bedb11407e2d2014681ef0a6",
        created_at: new Date("2023-04-04 16:02:24.921+08"),
        updated_at: new Date("2023-04-04 16:02:24.921+08")
      },
      {
        id:3,
        user_id:2,
        creator_id:2,
        amount:100,
        asset: "USDC",
        transaction_hash: "0xbcb2924b130a1ca756bd9e6650d0bbce537c30b23190bb9e0af09ebd08a3776c",
        created_at: new Date("2023-03-12 16:02:24.921+08"),
        updated_at: new Date("2023-03-12 16:02:24.921+08")
      },
      {
        id:4,
        user_id:3,
        creator_id:2,
        amount:0.01,
        asset: "ETH",
        transaction_hash: "0x4430c5936eaeae99f34bf1f7ede51710126cccb165ae00f852c321ede14cedbf",
        created_at: new Date("2023-02-28 16:02:24.921+08"),
        updated_at: new Date("2023-02-28 16:02:24.921+08")
      },
      {
        id:5,
        user_id:4,
        creator_id:2,
        amount:0.2616,
        asset: "ETH",
        transaction_hash: "0xd211db11a418cdedcfb5bb33949b85cd634811314f3622e29a9047a6125aa2d9",
        created_at: new Date("2023-04-09 16:02:24.921+08"),
        updated_at: new Date("2023-04-09 16:02:24.921+08")
      },
      {
        id:6,
        user_id:1,
        creator_id:3,
        amount:0.08,
        asset: "ETH",
        transaction_hash: "0xf048c846cfa890a33b49d4126b8fa8058280c1ded4723666ea0422f0cd0bdad6",
        created_at: new Date("2023-01-23 16:02:24.921+08"),
        updated_at: new Date("2023-01-23 16:02:24.921+08")
      },
      {
        id:7,
        user_id:1,
        creator_id:3,
        amount:0.08,
        asset: "ETH",
        transaction_hash: "0xd41723f9227c02ec86db047c03096e9102f58ffe089355bb8fafeaa8f31cda2c",
        created_at: new Date("2023-02-20 16:02:24.921+08"),
        updated_at: new Date("2023-02-20 16:02:24.921+08")
      },
      {
        id:8,
        user_id:1,
        creator_id:3,
        amount:100,
        asset: "USDC",
        transaction_hash: "0x8bac2fdc689ce46f0edbe0607f7419e2f8070e503c83dc3dc7a263edd21ff779",
        created_at: new Date("2023-04-19 16:02:24.921+08"),
        updated_at: new Date("2023-04-19 16:02:24.921+08")
      },
      {
        id:9,
        user_id:1,
        creator_id:3,
        amount:200,
        asset: "DAI",
        transaction_hash: "0x1d28091705b3141bf84e088615842b33129bb657237c5ff4eec9c3730049179a",
        created_at: new Date("2023-05-01 16:02:24.921+08"),
        updated_at: new Date("2023-05-01 16:02:24.921+08")
      },
      

    ],{});
    await queryInterface.bulkInsert("follows",[
      {
        id: 1,
        user_id: 1,
        creator_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 2,
        user_id: 1,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        user_id: 3,
        creator_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        user_id: 3,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        user_id: 2,
        creator_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      }, 
      {
        id: 6,
        user_id: 1,
        creator_id: 12,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 7,
        user_id: 1,
        creator_id: 8,
        created_at: new Date(),
        updated_at: new Date()
      }
    ],{})
    await queryInterface.bulkInsert("thresholds",[
      {
        id: 1,
        user_id: 1,
        creator_id: 1,
        total_contribution: 0.0005263157895,
        status: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id:2,
        user_id: 2,
        creator_id: 1,
        total_contribution: 0.002631578947,
        status: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 3,
        user_id: 2,
        creator_id: 2,
        total_contribution: 0.05263157895,
        status: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 4,
        user_id: 3,
        creator_id: 2,
        total_contribution: 0.01,
        status: false,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 5,
        user_id: 4,
        creator_id: 2,
        total_contribution: 0.2616,
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: 6,
        user_id: 1,
        creator_id: 3,
        total_contribution: 0.3178947368,
        status: true,
        created_at: new Date(),
        updated_at: new Date()
      },
      
    ],{})
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("comments", null, {})
    await queryInterface.bulkDelete("transactions", null, {})
    await queryInterface.bulkDelete("follows", null, {})
    await queryInterface.bulkDelete("thresholds", null, {})
  }
};
