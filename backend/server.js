import express from 'express'
import products from './data/products.js'

const app = express()

app.get('/', (req, res) => {
  res.send('ProShop API')
})

app.get('/api/products', (req, res) => {
  res.json(products)
})
app.get('/api/products/:id', (req, res) => {
  const product = products.find((p) => p._id === req.params.id)
  if (!product) {
    res.json({ message: 'No product with given ID in database.' })
  }
  res.json(product)
})

app.listen('5000', () => {
  console.log('Server Running On Port 5000')
})
