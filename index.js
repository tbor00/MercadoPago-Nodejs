require("./config")
const express = require('express');
const bodyParser = require('body-parser');
const app = express();


// Hacemos un MIddleware para body parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


// Importamos las rutas que necesitamos
app.use(require('./mercadopago'));

// Salida del puerto HTTP
app.listen(process.env.PORT, () => {
    console.log(`Esta habilitado el puerto ${process.env.PORT}`);
}); 