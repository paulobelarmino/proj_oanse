const exxpress = require('express')
const router = express.Router()

router.get('/',(req,res) => {
    res.send('OANSE')
})

module.exports = router