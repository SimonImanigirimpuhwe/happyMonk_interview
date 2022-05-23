const express = require("express");
const { generateBinary } = require("./controller/getBinary");
const { login } = require("./controller/login");
const {result} = require("./controller/printPrimes");
const { verifyToken } = require("./middleware/authorization");

const app = express();

app.use(express.json());

const router = express.Router();


router.post('/login',  (req, res)  => login(req, res))

/*START Generate binary API */
router.get ('/binary', (req, res) => {
    return res.status(200).json({
        binaries: generateBinary(result)
    })
})
/*END Generate binary API */

router.get('/getprime', verifyToken, (req, res) => {
    return res.status(200).json({
        primes: result
    })
})

app.use(router);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))


