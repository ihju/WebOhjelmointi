const { response } = require('express')
const express = require('express')
const app = express()
app.use(express.json())

const shopProductRouter = require('./Routes/shopProduct');
const userRouter = require('./Routes/user');
const invoiceRouter = require('./Routes/invoice');


app.use('/shopProduct', shopProductRouter);
app.use('/invoice', invoiceRouter);
app.use('/user', userRouter);

module.exports = app;