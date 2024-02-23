/***************************************************************/
// Fichier qui contient notre application.
/***************************************************************/
// Pas d'authentification demandé (ni signUp ni login) dans ce projet.
/***************************************************************/

const express = require('express');

const app = express();

app.use(express.json());

/***************************************************************/
// Pour eviter les erreurs de CORS (securite entre serveurs).
/***************************************************************/
// On ajoute un middleware generique(generique = sans route pour qu'il puisse s'appliquer à toutes les API 
// quelques soit la route specifiée dans les requetes) pour acceder à l'API.
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
	next();
});

/***************************************************************/
// Favicon.
/***************************************************************/
const favicon = require('serve-favicon');
app.use(favicon(__dirname + '/favicon.jpg'));

/***************************************************************/
// Middleware logger : log les URL des requetes soumises au serveur.
/***************************************************************/
const logger = (req, res, next)=> {
	console.log(`URL : ${req.url}`);
	next();
};
app.use(logger);

const morgan = require('morgan')
app.use(morgan('dev')) // methode use pour attacher notre middleware morgan à notre API REST. 

/***************************************************************/
// Router.
/***************************************************************/
const logementRoutes = require('./routes/logements');

app.use('/', logementRoutes);


/***************************************************************/
// Mise à disposition de notre Application.
/***************************************************************/
module.exports = app; 

/*************/
// End of File.
/*************/