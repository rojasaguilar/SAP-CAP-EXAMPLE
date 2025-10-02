const userSchema = require("../models/mongodb/user");

GetAllUsers = async () => {
  try {
    return await userSchema.find().lean();
  } catch (error) {
    throw Error(300, error);
  }
};

AddOneUser = async (user) => {
  try {
    return JSON.stringify(await userSchema.insertOne(user));
  } catch (error) {
    throw Error(300, error);
  }
};

DeleteOneUser = async (id) => {
  console.log(id);
  try {
    const user = await userSchema.findOneAndDelete({ USERID: id });
    if (user) {
      return JSON.stringify({
        status: 200,
        message: `User ${user} deleted`,
      });
    }
    const notFoundError = new Error(`User with ID ${id} not found.`);
    notFoundError.code = 404;
    throw notFoundError
  } catch (error) {
    throw error
  }
};

module.exports = {
  GetAllUsers,
  AddOneUser,
  DeleteOneUser,
};
