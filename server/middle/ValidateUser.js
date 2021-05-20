const symbols = "!@#$%^&*()_>?,.';][\/*"
const lengthValidate = (value) => {
    return value.length > 4 && value.length < 30

}
let nameValid = true
let passwordValid = true
let emailValid = true
module.exports = {

    validatingUser: async (req, res, next) => {
        const {
            userName,
            userAge,
            userEmail,
            userPassword
        } = req.body

        function errorSend(error, message) {
            res.send({error: error, message: message})
        }

        if (userName.length > 100 || userName.length < 6) {
            return errorSend(true, 'Title length is not valid')
        }

        for (let i = 0; i < symbols.length; i++) {
            if (userName.includes(symbols[i])) {
                return errorSend(true, 'Cant use symbols')
            }
        }
        if (!lengthValidate(userPassword)) {
            return errorSend(false, "password too short or it is too long")
        }
        if (!userEmail.includes(" ") ) {
            return errorSend(false, "please include email")
        }

        next()
    }

}