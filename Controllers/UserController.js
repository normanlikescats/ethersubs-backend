class UserController {
  constructor(userModel) {
    this.userModel = userModel;
  }

  // Find or Create User Profile
  getOrCreate = async (req, res) => {
    const wallet = req.body.wallet
    try {
      const [user, created] = await this.userModel.findOrCreate(
        {
          where: {
            wallet: wallet
          },
          defaults :{
            photo_url: "https://firebasestorage.googleapis.com/v0/b/ethersubs.appspot.com/o/images%2Fplaceholderpfp.png?alt=media&token=56fa49bb-f60a-41fc-ae2b-7a8945173cca",
            creator: false
          }
        }
      );
      console.log(created)
      return res.json(user);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };

  // Find User Profile by Id
  getOneProfile = async (req, res) => {
    const id = req.params.id
    try {
      const oneUser = await this.userModel.findAll(
        {
          where:{
            id: id
          }
        }
      );
      return res.json(oneUser);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };


  // Edit User Profile
  editProfile = async (req, res) => {
    const { wallet, display_name, creator, photo_url } = req.body;
    try {
      const updatedProfile = await this.userModel.update(
        {
          display_name: display_name,
          creator: creator,
          photo_url: photo_url
        },
        {
          returning: true,
          where: {
            wallet: wallet
          },
        }
      );
      return res.json(updatedProfile);
    } catch (err) {
      return res.status(400).json({ error: true, msg: err });
    }
  };
}

module.exports = UserController;
