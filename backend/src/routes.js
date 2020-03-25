const express = require('express');
const crypto = require('crypto');
const routes = express.Router();

const connection = require('./database/connection');

routes.post('/ongs',(request, response)=>{
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    connection('ongs').insert({
        id,
        name,
        email,
        whatsapp,
        city,
        uf,
    })

    return response.json({id});
});

module.exports = routes;