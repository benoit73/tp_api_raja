const express = require('express')
const cors = require('cors');
const productRoutes = require('./routes/product.routes');
const userRoutes = require('./routes/user.routes');
const sequelize = require('./config/sequelize');
const Product = require('./models/product.model');
const User = require('./models/user.model');
const bodyParser = require('body-parser');

const app = express()
const port = 3000
app.use(bodyParser.json());
app.use(cors());

app.use('', productRoutes);
app.use('', userRoutes);

async function syncDb() {
  try{
    await sequelize.sync();
    console.log('sync bonne');
  }
  catch(error)
  {
    console.error(error);
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

syncDb();
