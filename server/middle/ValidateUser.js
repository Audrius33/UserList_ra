const symbols = "!@#$%^&*()_>?,.';ąčėįšųūž][\/*"
const validator = require("email-validator");


const lengthValidate = (value) => {
    return value.length > 4 && value.length < 30

}

module.exports = {

    validatingUser: async (req, res, next) => {
        const {
            userName,
            userAge,
            userEmail,
            userPassword
        } = req.body
        console.log(userEmail)

        function errorSend(error, message) {
            res.send({error: error, message: message})
        }


        if (userName.length > 100 || userName.length < 6) {
            return errorSend(true, 'username length is not valid')
        }

        for (let i = 0; i < symbols.length; i++) {
            if (userName.includes(symbols[i])) {
                return errorSend(true, 'Cant use symbols')
            }
        }
        if (!userAge) {
            return errorSend(true, 'age required')
        }

        if (!validator.validate(userEmail)) {
            return errorSend(true, 'need to put @ or .com Example name.surname@gmail.com ')
        }

        if (!lengthValidate(userPassword)) {
            return errorSend(false, "password too short or it is too long")
        }

        next()
    }

}