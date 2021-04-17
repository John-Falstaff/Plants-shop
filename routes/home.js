const {Router} = require('express')
const Plant = require('../models/plant')
const router = Router()

router.get('/', async (req,res) => {
  const plant = await Plant.find()
  res.render('home', {
    title: 'Plants Shop',
    counter: plant.length,
    plant
  })
})

module.exports = router
