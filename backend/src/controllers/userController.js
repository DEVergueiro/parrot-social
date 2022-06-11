const { User } = require("../database/models/index")

const UserController = {
    async create(req,res) {
        const newUser = await User.create({
            ...req.body
        })

        return res.status(201).json(newUser)
    }
}

module.exports = UserController