const express = require('express')
const exprHbs = require('express-handlebars')
const mongoose = require('mongoose')
const homeRouter = require('./routes/home')
const servicesRouter = require('./routes/services')
const locationRouter = require('./routes/location')
const bucketRouter = require('./routes/bucket')
const shopRouter = require('./routes/shop')
const contactsRouter = require('./routes/contacts')
const addRouter = require('./routes/add_plants')

const app = express()
const hbs = exprHbs.create({
  defaultLayout: "main",
  extname: "hbs"
})

app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')
app.set('views', 'views')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use('/', homeRouter)
app.use('/services', servicesRouter)
app.use('/location', locationRouter)
app.use('/bucket', bucketRouter)
app.use('/shop', shopRouter)
app.use('/contacts', contactsRouter)
app.use('/add_plants', addRouter)
app.disable('x-powered-by')

const PORT = process.env.port || 4000
async function start () {
  try {
    const url = 'mongodb+srv://noo8xl:HXkUAjNg6ksL4A9v@cluster0.kqpat.mongodb.net/plants'
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    })
    app.listen(PORT, () => console.log(`server is running on http://localhost:${PORT}`))
  } catch (e){
    console.log(e)
  }
}
start()
