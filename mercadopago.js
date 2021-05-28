const express = require('express');
const app = express();
const mercadoPagoPay = require("./mercadoPagoPay")


// Creamos rutas http
app.post('/procesar-pago', mercadoPagoPay.postPay);


module.exports = app;