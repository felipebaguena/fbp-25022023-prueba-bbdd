const { User } = require("../models");

const userController = {};

userController.createUser = async(req,res) =>{
    try {
        const {name, surname, nif, birth_date, direction, email, phone, password} = req.body;
        const newUser = {
            name,
            surname,
            nif,
            birth_date,
            direction,
            email,
            phone,
            password
        }
        const user = await User.create(newUser)
        return res.json(user)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

userController.deleteUser = async(req, res) => {
    try {
        const userId = req.params.id;
        const deleteUser = await User.destroy({where: { id: userId}})
        return res.json(deleteUser);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

userController.getUser = async(req, res)=> {

    try {
        const users = await User.findAll();
        return res.json(users);
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = userController;
