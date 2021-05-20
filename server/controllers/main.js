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
        console.log(req.params)
        let oneUser = await usersDb.findOne({_email: req.params._id})
        console.log({oneUser})
        res.send({oneUser})
    }
}