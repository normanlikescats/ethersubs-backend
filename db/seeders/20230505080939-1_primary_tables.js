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
        }
      ],{}
    )
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete("users", null, {})
  }
};
