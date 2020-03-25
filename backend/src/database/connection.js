const knex = require('knex');
const comfiguration = require('../../knexfile');

const connetion = knex (comfiguration.development);

module.exports = connetion;