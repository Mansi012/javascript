const jwt = require("jsonwebtoken")
const authenticate = async function (req, res, next) {
    let token = req.headers["x-auth-token"];
    if (!token) {
        return res.send({ status: false, msg: "token is invalid" })

    }
    let decodedToken = jwt.verify(token,"lithium-mansi")
    if (!decodedToken) {
        return res.send({ status: false, msg: "token must be required" })
    }
    req.userLoggedIn=decodedToken.userId
   // console.log(decodedToken)
    next()
}

const authorise = async function (req, res, next) {
    // comapre the logged in user's id and the id in request
    let checkId = req.params.userId
    if (checkId !== req.userLoggedIn) {
        return res.send({ status: false, msg: "Unauthorized acess" })
    }
    next()
}
module.exports.authenticate = authenticate
module.exports.authorise = authorise