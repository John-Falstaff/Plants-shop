const {Router} = require('express')
const Plant = require('../models/plant')
const router = Router()

router.get('/', async (req, res) => {
  const plant = await Plant.find()
  
  let getData = []
  
  plant.forEach( item => {
    let data = {
      "name": item.name,
      "type": item.type,
      "img": item.img,
      "price": item.price,
      "id": item.id
    }
    getData.push(data)
  })
  // console.log(getData)
  res.render('add_plants', {
    title: "add plants",
    items: getData,
    plant
  })
})

router.get('/:id/edit', async (req, res) => {
  if(!req.query.allow) {
    return res.redirect('/')
  }
  
  const plant = await Plant.findById(req.params.id)
  res.render('edit', {
    title: `${plant.name} info`,
    name: plant.name,
    type: plant.type,
    img: plant.img,
    price: plant.price,
    id: plant.id,
    plant
  })
})

router.post('/edit', async (req, res) => {
  const {id} = req.body
  delete req.body.id
  const plant = await Plant.findOneAndUpdate(id,req.body)
  res.redirect('/add_plants')
  
})

router.post('/remove', async (req,res) => {
  try {
    await Plant.deleteOne({
      _id: req.body.id}
    )
    res.redirect('/add_plants')
  } catch (e) {
    console.log(e)
  }
})


router.post('/', async (req,res, next) => {
  
  const plant = new Plant({
    name: req.body.name,
    type: req.body.type,
    img: req.body.img,
    price: req.body.price
  })
  
  try {
    await plant.save()
    res.redirect('/add_plants')
  } catch (e) {
    console.log(e)
  }
  next()
})

module.exports = router
