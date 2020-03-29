const express = require('express');

const OngContrller = require('./controllers/OngController');
const IncidentController = require('./controllers/incidentController');
const profileController = require('./controllers/profileController');
const sessionController = require('./controllers/sessionControllers');

const routes = express.Router();

routes.post("/session", sessionController.create);

routes.get('/profile', profileController.index);

routes.get('/ongs', OngContrller.index);
routes.post('/ongs', OngContrller.create );

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;