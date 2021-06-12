const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('../server/config/db.js');
const productRoutes = require('../server/routes/routes.js')


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());

app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 500;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("CONNECTION SUCCESS");
    })
})



