// SDK de Mercado Pago
const mercadopago = require ('mercadopago');
// Agrega credenciales

// TEST-7134561298927169-051018-e862f567dc639aa7a6cd2ce9e1be1db9-126527576 Credenciales de prueba

mercadopago.configure({
  access_token: 'YOUR_API_KEY'
});

let postPay =  (req, res) => {
    let preference = {
        items: [
          {
            id: req.body.id,
            title: req.body.title,
            unit_price: parseInt(req.body.price),
            quantity: 1,
          }
        ],
      back_urls: {
        success: `http://localhost:3000/paysuccess/${req.body.id}`,
        failure: `http://localhost:3000/payfailled/${req.body.id}`,
        pending: `http://localhost:3000/paypending/${req.body.id}`
      },

      auto_return: "approved",
      payer: {
        email: req.body.email,
    },
      };

      
  
    mercadopago.preferences.create(preference)
    .then(function(response){
      res.redirect(response.body.init_point);
    }).catch(function(error){
      console.log(error);
    });
}


module.exports = {
    postPay
}

