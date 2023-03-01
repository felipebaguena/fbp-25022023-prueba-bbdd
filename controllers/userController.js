const { User } = require("../models");

const userController = {};
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

userController.createUser = async(req,res) =>{
    try {
        const {name, surname, nif, birth_date, direction, email, phone, password} = req.body;

        const encryptedPassword = bcrypt.hashSync(password, 10);

        const newUser = {
            name,
            surname,
            nif,
            birth_date,
            direction,
            email,
            phone,
            password: encryptedPassword
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

userController.getUserRole = async (req, res) => {
    const userId = req.params.id;

    const userrole = await User.findByPk(userId, {
        include: {all: true}
    });

    return res.json(userrole);
}

userController.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne(
            {
                where: {
                    email: email
                }
            }
        );

        if (!user) {
            return res.send('Wrong Credentials')
        }

        const isMatch = bcrypt.compareSync(password, user.password);

        if (!isMatch) {
            return res.send('Wrong Credentials')
        }

        const token = jwt.sign(
            { 
                userId: user.id,
                email: user.email,
                // roleId: user.Roles[0].privilege
            }, 
            'secreto',
            { expiresIn: '2h'}
        );

        return res.json(token)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = userController;
