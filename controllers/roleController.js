const { Role } = require("../models");

const roleController = {};

roleController.createRole = async(req,res) =>{
    try {
        const {privilege} = req.body;
        const newPrivilege = {
        privilege
        }
        const role = await Role.create(newPrivilege)
        return res.json(role)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = roleController;