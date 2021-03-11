const {Router} = require('express')
const router = Router()

router.get('/', (req,res) => {
  res.render('bucket', {
    title: 'bucket'
  })
})

module.exports = router