const { genToken } = require("../middleware/authorization")


const users = [
    { username: 'simon'}
]
const login = async(req, res) => {
console.log(req.body)
    if (users[0].username.toLowerCase() === req.body.username) {
        const token = await genToken(req.body.username);
        return  res.status(200).json({
            username: users[0].username,
            token
        })
    } else {
        return res.status(404).json({
            message: "Invalid credentials"
        })
    }
}


module.exports = {
    login
}