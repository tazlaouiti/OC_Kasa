/***************************************************************/
// Fichier de nos routes : logement
/***************************************************************/

const express = require('express');

const router = express.Router(); 

const getAllLogements = require('../controllers/logements');

const getOneLogement = require('../controllers/logement');


/***************************************************************/
// API de type GET
/***************************************************************/

/***************************************************************/
// Mise à disposition de notre routes.
/***************************************************************/
module.exports = router;

router.get('/logements', function (req, res, next) {
	require('log-timestamp');

	const logementsList = getAllLogements()
	res.send({logementsList})
})

router.get('/logement/:logementId', function (req, res) {
	require('log-timestamp');
	console.log("/routes/logements.js router.get('/logement/logementId'...")
	const logementId = req.params.logementId
	console.log("/routes/logements.js logementId : ", logementId)
	const logementData = getOneLogement(logementId)
		if (!logementData) {
			res.status(400).send('Not found.')
		} else {
			res.send({ logementData })
		}
})

router.get('/', function (req, res, next) {
	res.render('index', { title: 'API - React intermédiaire' })
})
