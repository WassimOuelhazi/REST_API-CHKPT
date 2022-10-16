const userSchema= require('../Models/User')


// create user
exports.createUser = async (req, res) => {
    try {

        const newUser = new userSchema(req.body)
        await newUser.save();
        res.status(200).send({ msg: "a new person has been successfully created .. !", newUser })

    } catch (error) {
        res.status(500).send("problem in creating a new user")
        console.log(error);
    }
}



// Get all user

exports.getAllusers = async (req, res) => {
    try {

        const users = await userSchema.find()
        res.status(200).send(users)

    } catch (error) {
        res.status(500).send("problem in getting all users")
        console.log(error);
    }
}










// remove user


exports.removeUser = async (req, res) => {
    try {

        const { id } = req.params
        await userSchema.findByIdAndRemove(id)
        res.status(200).send("user has been successfully removed from your db")

    } catch (error) {
        res.status(500).send("problem in removing user")
        console.log(error);
    }
}
// update  user
exports.Updateuser = async (req, res) => {
    try {

        const query = req.body
        const { id } = req.params
        console.log(query)
   
        const user = await userSchema.findByIdAndUpdate(id, query) // new is set to true to return an updated model
        res.status(200).send(user)

    } catch (error) {
        res.status(500).send("problem in updating person ; new methode mongoose")
        console.log(error);
    }
}


