
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json()); // Parse JSON bodies

mongoose.connect('mongodb://localhost:27017/hshop', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const User = mongoose.model('User', new mongoose.Schema({
  name: String,
  email: String,
  image: String,
}));

const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
}));

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.status(201).json(product);
});

app.get('/api/products/hot', async (req, res) => {
  try {
    const hotProducts = await Product.find({ isHot: true }); 
    res.json(hotProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.get('/api/sale-products', async (req, res) => {
  try{
  const saleProducts = await Product.find({ salePrice:Number }); 
    res.json(saleProducts);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});
app.listen(4000, () => {
  console.log('Server is running on http://localhost:4000');
});
