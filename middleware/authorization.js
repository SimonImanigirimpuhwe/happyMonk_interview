const jwt = require("jsonwebtoken");

const privateKey = process.env.SECRET_KEY || "xsdscdds";

const genToken = (data) => {
    const token = jwt.sign(data, privateKey);
    return token;
};

const verifyToken = (req, res, next) => {
    let verified;
    try {
        const token = req.headers.authorization.split(' ')[1];
    
        if (!token)  return res.status(400).json({message: "Please login"});
    
        if (token) {
            verified = jwt.verify(token, privateKey);
        
            verified = req.username;
            return next();

        }   
    } catch (error) {
        console.log(verified)
        return res.status(500).json({error: "Somenthing went wrong", error})
    }
};


module.exports = {
    genToken,
    verifyToken
}