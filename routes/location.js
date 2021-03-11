const {Router} = require('express')
const router = Router()

router.get('/', (req,res) => {
  res.render('location', {
    title: 'Our location'
  })
})

module.exports = router