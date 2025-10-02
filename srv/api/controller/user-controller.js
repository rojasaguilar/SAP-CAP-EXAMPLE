const cds = require('@sap/cds');
const User = require('./../service/user-service')

class UserClass extends cds.ApplicationService{
    async init() {
        this.on('getall',async(req) => {
            return User.GetAllUsers();
        });

        this.on('addOne', async(req) => {
            const newUser = req.data.user
            const createdUser =  await User.AddOneUser(newUser);
             req._.res.statusCode = 202; //to add custom response codes
             return createdUser;
        });

        this.on('deleteOne', async(req) => {
            const {USERID} = req.data.user;
            return User.DeleteOneUser(USERID);
        })
        return await super.init();
    };
};
module.exports = UserClass;