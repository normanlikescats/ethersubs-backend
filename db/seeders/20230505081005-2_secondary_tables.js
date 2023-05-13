'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "creators",[
        {
          id: 1,
          user_id: 4,
          bio: `Trade with me! Millionaires or homeless, there is no in-between.\n\n Just another team of degens looking to make it big in the space and help fellow plebs like ourselves pump shitcoins.`,
          name: "Low IQ Tradooors",
          image: "https://us-tuna-sounds-images.voicemod.net/85a4e056-1746-4aad-8a13-b2cef0defaa3-1672243883094.jpg",
          twitter: "https://twitter.com/ColdBloodShill",
          substack: "https://thedailydegen.substack.com/",
          discord: "https://discord.com/",
          youtube: "https://www.youtube.com/@thetradingchannel",
          website: "https://www.babypips.com/",
          tier_1: 0.01,
          tier_2: 0.05,
          tier_3: 0.1,
          threshold: 0.06,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          user_id: 4,
          bio: `Struggling to make sense of all the token charts you stare at all day? Wondering why you can't make money despite being glued to TradingView? \n\n Fret not, we're here to demystify every single chart for you! \n\n Join us at TA Gods!`,
          name: "TA Gods",
          image: "https://openseauserdata.com/files/9df33d90bde1bc5a67ca1d006437d272.jpg",
          twitter: "https://twitter.com/ColdBloodShill",
          substack: "https://thedailydegen.substack.com/",
          discord: "https://discord.com/",
          youtube: "https://www.youtube.com/@thetradingchannel",
          website: "https://www.babypips.com/",
          tier_1: 0.01,
          tier_2: 0.05,
          tier_3: 0.1,
          threshold: 0.08,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          user_id: 2,
          bio: `Afraid of scams? Anonymous on-chain sleuth shares all on the ZachXBT podcast. New scams every week, new episodes weekly.`,
          name: "ZachXBT",
          image: "https://pbs.twimg.com/profile_images/1607849212758183938/1cSApRP3_400x400.jpg",
          twitter: "https://twitter.com/zachxbt",
          substack: null,
          discord: null,
          youtube: null,
          website: "https://zachxbt.mirror.xyz/",
          tier_1: 0.08,
          tier_2: 0.28,
          tier_3: 0.3,
          threshold: 0.88,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
    await queryInterface.bulkInsert(
      "posts",[
        {
          id: 1,
          creator_id:1,
          title: "$PEPE Dominates the Markets",
          image: "https://pbs.twimg.com/media/CMuXE4lUEAAcA9K.jpg",
          content: `$PEPE memecoin dominates the on-chain trading scene, with related memecoins $WOJAK, $CHAD and more trading in tandem.

The rise in memecoins seem to indicate retail mania at least contained within this segment of the market cycle. Expecting a sharp pullback soon as market participants turn euphoric.

Trade safe frens.`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id:2,
          creator_id:1,
          title: "Traditional Markets In Pain",
          image: "https://s3.tradingview.com/snapshots/n/NRHWc7cK.png",
          content: `Traditional markets dip hard ahead of the upcoming FOMC with Jerome Powell. Markets seem to expect another 25bps rate hike despite weak GDP.
          
          If you're not a good scalper or daytader, stay away until the market establishes a new range...`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id:3,
          creator_id:3,
          title: "ZJZ.eth rugs WSB Memecoin",
          image: "https://pbs.twimg.com/profile_images/1577890149630976000/dR_Jyh4v_400x400.jpg",
          content: `Moderator of popular degen subreddit, WallStreetBets, rugpulls their own memecoin, WSB, draining ~330ETH in liquidity by dumping a large portion of the team's supply. The price of the WSB token cratered, quickly leaving community memebers in shambles.

          ZJZ.eth is now on the run. He has claimed innocence, accusing fellow moderator, WSBMod of stealing from the team funds although WSBMod denies the allegations.`,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id:4,
          creator_id:3,
          title: "Soulja Soul To The Devil: 3 Rugs In A Week",
          image: "https://nftevening.com/wp-content/uploads/2023/04/Untitled-design-1.png",
          content: `Famous, but I guess, broke, rapper, Soulja Boy, rugs not one, not two, but three, NFT collections in a single week.
          
          Inflation is going up but damn, Soulja must be trash at finances.`,
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("posts", null, {})
    await queryInterface.bulkDelete("creators", null, {})
  }
};
