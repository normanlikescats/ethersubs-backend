'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          id: 1,
          display_name: "John Doe",
          wallet: "0x341c0888b574d910e85989d6e8cdd59bd7932399",
          creator: false,
          photo_url: "https://larvalabs.com/public/images/blog/meebits/dancerTpose.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          display_name: "0xToad",
          wallet: "0x654a845777667d02b8c76a788353e82f5200f461",
          creator: true,
          photo_url: "https://news.artnet.com/app/news-upload/2021/09/Yuga-Labs-Bored-Ape-Yacht-Club-4466.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          display_name: "Azuki Whale",
          wallet: "0xa5f9ea7bfd35e5ae8dd49a5aeb0a9bd50672916d",
          creator: false,
          photo_url: "https://i.seadn.io/gcs/files/4d764d40aa6dfc88d03f18c1c299325d.png?auto=format&w=1000",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          display_name: "Andre",
          wallet: "0x87035051fed316d79490e9c50b3a0ae42f420d04",
          creator: true,
          photo_url: "https://i.seadn.io/gae/yo9NvKEP2Mru9pzjnCR8ASTh5bimm5WKtZMY_1My0-4P80Q0xEBYxkAnpk2H0UKbDe3sB2kKDHCNlLgrpKNz-YKKl8tzlJWwqP9FS6U?auto=format&w=1000",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          display_name: "Do Kwon",
          wallet: "0x14ec3036448afe9f4248676d446fe1eb8332b3cd",
          creator: true,
          photo_url: "https://ichef.bbci.co.uk/news/976/cpsprodpb/3A57/production/_126853941_104d47ed-d95d-44aa-97c9-b35e3c5067d4.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
                {
          id: 6,
          display_name: "Vitalik",
          wallet: "0xbd0c46dff928ecf13eed5b7772f48e397b476842",
          creator: false,
          photo_url: "https://pbs.twimg.com/media/FOKvkYBVgAA4s37.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 7,
          display_name: "Brother CZ",
          wallet: "0xf921640daca3cbadc982e4cd3e1352dfc3a6b39e",
          creator: false,
          photo_url: "https://pbs.twimg.com/media/EEvJvK7XkAAEXhL.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 8,
          display_name: "ApeMan99",
          wallet: "0xea213dd473bbe1f51eda82f66e16322453025561",
          creator: false,
          photo_url: "https://pbs.twimg.com/media/Fr5HyvBXgAMAFKt.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 9,
          display_name: "ETHMasterRace",
          wallet: "0x518653a40d32d281a0dd8299717062a1ae17d516",
          creator: false,
          photo_url: "https://img.capital.com/imgs/articles/800x600x1/shutterstock_1958528764.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 10,
          display_name: "PEPEtothemoon",
          wallet: "0xcadc3b2eabcb327c96126a6d49b2b3845fd14268",
          creator: false,
          photo_url: "https://static-cdn.jtvnw.net/jtv_user_pictures/2cc74196-ce8c-43c9-88c1-2753d6ca42cf-profile_image-300x300.png",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 11,
          display_name: "degensOnly",
          wallet: "0xbfa3366c602a3f620b709e8d9b1c4aa2fcc60248",
          creator: false,
          photo_url: "https://pbs.twimg.com/profile_images/1608325033033895938/US2YmCwR_400x400.jpg",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 12,
          display_name: "shadowy secret coder",
          wallet: "0x9ec968b0f1a55d01823290b78e0fcd13d656d80d",
          creator: false,
          photo_url: "https://www.arweave.net/ZEuF867R55usyzHxWSElj4evdwh40xkqoRJqCNReYVU?ext=PNG",
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 13,
          display_name: "pirate_bob",
          wallet: "0x91b3136722300c0c8a9d4f45598ca00a2c931326",
          creator: false,
          photo_url: "https://images.nightcafe.studio/jobs/KkLKImeHdOJBJgMYaoMY/KkLKImeHdOJBJgMYaoMY--1--0lgqt.jpg?tr=w-1600,c-at_max",
          created_at: new Date(),
          updated_at: new Date()
        }
      ],{}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {})
  }
};
