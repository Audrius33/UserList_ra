const usersDb = require('../schemas/UsersSchema')

module.exports = {
    saveItems: async (req, res) => {
        const {
            userName,
            userAge,
            userEmail,
            userPassword
        } = req.body

        const users = new usersDb()
        users.username = userName
        users.age = userAge
        users.email = userEmail
        users.password = userPassword

        users.save().then(data => {
            res.send({success: true})
        })
    },
    sendUsers: async (req, res) => {
        let allUsers = await usersDb.find()
        res.send(allUsers)
    },
    deleteUser: async (req, res) => {
        await usersDb.findByIdAndDelete({_id: req.params.id})
        let allUsers = await usersDb.find()
        res.send(allUsers)
    },
    updateUser: async (req, res) => {
        const {email} = req.params
        const oneUser = await usersDb.find({email: email})
        res.send({success: true, user: oneUser})
    },
    userToBeUpdated: async (req, res) => {
        const {id, username, age, email, psw} = req.body
        await usersDb.findOneAndUpdate({_id: id}, {$set: {username, age, email, password: psw}})
        res.send({success: true})
    }

}