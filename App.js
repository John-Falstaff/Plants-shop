const express = require('express')
const exprHbs = require('express-handlebars')
const homeRouter = require('./routes/home')
const servicesRouter = require('./routes/services')
const locationRouter = require('./routes/location')
const bucketRouter = require('./routes/bucket')
const shopRouter = require('./routes/shop')
const contactsRouter = require('./routes/contacts')

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
app.use('/', homeRouter)
app.use('/services', servicesRouter)
app.use('/location', locationRouter)
app.use('/bucket', bucketRouter)
app.use('/shop', shopRouter)
app.use('/contacts', contactsRouter)


const PORT = process.env.port || 4000
app.listen(PORT, () => console.log(`server is running..`))