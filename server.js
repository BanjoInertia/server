const express = require('express')
const app = express()
const mongoose = require('mongoose')
const Product = require('./models/product')
const productRoute = require('./routes/product.route')

app.use(express.json())

require('dotenv/config')
mongoose.connect(process.env.DB_CONNECTION)

app.use("/api/products", productRoute)

app.listen(5000, () => { console.log("Server started on port 5000") })