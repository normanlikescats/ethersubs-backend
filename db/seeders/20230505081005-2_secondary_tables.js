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
          image: "https://pbs.twimg.com/profile_images/1656044798090854429/2v6CCeiE_400x400.jpg",
          twitter: "https://twitter.com/zachxbt",
          substack: null,
          discord: null,
          youtube: null,
          website: "https://zachxbt.mirror.xyz/",
          tier_1: 0.05,
          tier_2: 0.2,
          tier_3: 0.3,
          threshold: 0.3,
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
              user_id: 5,
              bio: `The Daily Degen is a daily synopsis of the most important news/data/alerts in defi and macro! Every day, 365 days a year!`,
              name: "The Daily Degen",
              image: "https://pbs.twimg.com/media/FwKY1vdaAAAOqbW?format=jpg&name=small",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 5,
              user_id: 5,
              bio: `Software Engineer. I explain crypto topics in simple terms`,
              name: "0xCygaar",
              image: "https://pbs.twimg.com/profile_images/1522469965739139072/_F1ailAk_400x400.jpg",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 6,
              user_id: 5,
              bio: `Top tier shitposter. Follow me for the absolute worst takes in crypto`,
              name: "Poop.eth",
              image: "https://pbs.twimg.com/media/FZeHqxlVUAER7j0.jpg:large",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 7,
              user_id: 5,
              bio: `Helping you find personal freedom by getting 1% better every day | 24,000+ improving themselves weekly through my free newsletter`,
              name: "NFT God",
              image: "https://pbs.twimg.com/profile_images/1489268127565324291/ZQK5RoFg_400x400.jpg",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 8,
              user_id: 5,
              bio: `Community strategist • Helping you build your unique community edge • Writing about community, culture & branding in Web3`,
              name: "alea.eth",
              image: "https://pbs.twimg.com/profile_images/1639643683149561856/EmK3CklP_400x400.jpg",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 9,
              user_id: 5,
              bio: `Creator of AlphaPleaseHQ. Doing research on DeFi so you don't have to.`,
              name: "Aylo",
              image: "https://pbs.twimg.com/profile_images/1504139683751763971/YDAbI0Ay_400x400.jpg",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 10,
              user_id: 5,
              bio: `Breaking down the psychology of success to accelerate your personal growth 📈. Subscribe to my newsletter for weekly digests.`,
              name: "Kelano.eth",
              image: "https://pbs.twimg.com/profile_images/1655260163610222594/Zome3Rb5_400x400.jpg",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 11,
              user_id: 5,
              bio: `I will teach you how to navigate the world of cryptocurrency. Learn with me and sail to financial freedom!`,
              name: "crypthoem",
              image: "https://pbs.twimg.com/profile_images/1583462717498728455/puvD9UlZ_400x400.jpg",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 12,
              user_id: 5,
              bio: `Finding vulnerabilities @ Solidity smart contracts | Writes about the process occasionally`,
              name: "Byte032",
              image: "https://pbs.twimg.com/profile_images/1617603360261083147/BuUicTNm_400x400.jpg",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 13,
              user_id: 5,
              bio: `Narratives trader. No long term positions. No biases. Only PnL`,
              name: "Byzantine General",
              image: "https://static.wixstatic.com/media/cd049f_38e3154906ec48309ea273a871181a19~mv2.jpg/v1/fill/w_400,h_400,al_c/cd049f38e3154906ec48309ea273a871181a19~mv2.jpg",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 14,
              user_id: 5,
              bio: `Building the next big onboarding solution for Web3.`,
              name: "Johnny Buidler",
              image: "https://img.freepik.com/premium-photo/artificial-intelligence-humanoid-head-with-neural-network-thinks-futuristic-modern-3d-illustration_76964-5497.jpg",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
              created_at: new Date(),
              updated_at: new Date()
        },
        {
          id: 15,
              user_id: 5,
              bio: `Data Wizard ✨ Contributor to DeFiLlama and Dune Analytics`,
              name: "Kofi",
              image: "https://pbs.twimg.com/profile_images/1387869109015220227/8HJxHNxq_400x400.jpg",
              twitter: "https://twitter.com/",
              website: "https://mirror.xyz/",
              substack: "https://substack.com/",
              discord: "https://discord.com/",
              youtube: "https://www.youtube.com/",
              tier_1: 0.01,
              tier_2: 0.05,
              tier_3: 0.1,
              threshold: 0.08,
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
          created_at: new Date("2023-03-31 16:02:24.921+08"),
          updated_at: new Date("2023-03-31 16:02:24.921+08")
        },
        {
          id:2,
          creator_id:1,
          title: "Traditional Markets In Pain",
          image: "https://s3.tradingview.com/snapshots/n/NRHWc7cK.png",
          content: `Traditional markets dip hard ahead of the upcoming FOMC with Jerome Powell. Markets seem to expect another 25bps rate hike despite weak GDP.
          
          If you're not a good scalper or daytader, stay away until the market establishes a new range...`,
          created_at: new Date("2023-04-06 16:02:24.921+08"),
          updated_at: new Date("2023-04-06 16:02:24.921+08")
        },
        {
          id:3,
          creator_id:3,
          title: "ZJZ.eth rugs WSB Memecoin",
          image: "https://pbs.twimg.com/profile_images/1577890149630976000/dR_Jyh4v_400x400.jpg",
          content: `Moderator of popular degen subreddit, WallStreetBets, rugpulls their own memecoin, WSB, draining ~330ETH in liquidity by dumping a large portion of the team's supply. The price of the WSB token cratered, quickly leaving community memebers in shambles.

          ZJZ.eth is now on the run. He has claimed innocence, accusing fellow moderator, WSBMod of stealing from the team funds although WSBMod denies the allegations.`,
          created_at: new Date("2023-04-04 16:02:24.921+08"),
          updated_at: new Date("2023-04-04 16:02:24.921+08")
        },
        {
          id:4,
          creator_id:3,
          title: "Soulja Soul To The Devil: 3 Rugs In A Week",
          image: "https://nftevening.com/wp-content/uploads/2023/04/Untitled-design-1.png",
          content: `Famous, but I guess, broke, rapper, Soulja Boy, rugs not one, not two, but three, NFT collections in a single week.
          
          Inflation is going up but damn, Soulja must be trash at finances.`,
          created_at: new Date("2023-04-11 16:02:24.921+08"),
          updated_at: new Date("2023-04-11 16:02:24.921+08")
        },
        {
          id:5,
          creator_id:3,
          title: "Ben.eth: A Crook Never Changes",
          image: "https://pbs.twimg.com/profile_images/1595481185068597248/vPgn5glR_400x400.png",
          content: `Ben.eth launches his own memecoin, $PSYOP, releasing a contract only, with no website, no twitter, just a contract. But the apes don't seem to care. The contract has so far collected more than $7m and the numbers continue to rise. Some people seem convinced that Ben has something exciting planned for the coin, but the skeptic in me says it's definitely gonna rug within a week from now. Grifters don't change.`,
          created_at: new Date("2023-05-14 16:02:24.921+08"),
          updated_at: new Date("2023-05-14 16:02:24.921+08")
        },
        {
          id:6,
          creator_id:3,
          title: "GemSwap rugpulls",
          image: "https://pbs.twimg.com/media/Fs4u9IxWYAgCEs9.jpg",
          content: `ZkSync Era has been one of the hottest new chains, but not always for the right reasons. ZkSync DEX, GemSwap, rugpulled last night, dumping the entire team's supply on the open market, leaving investors holding the bag as the token dumps 96% in a swift candle. ZkSync may be a prime target for farming airdrops, but stay vigilant as where the attention goes, scammers will soon follow.`,
          created_at: new Date("2023-05-07 16:02:24.921+08"),
          updated_at: new Date("2023-05-07 16:02:24.921+08")
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
