const {Router} = require('express')
const router = Router()

router.get('/', (req,res) => {
  res.render('shop', {
    title: 'Shop'
  })
})

module.exports = router