/***************************************************************/
// Fichier de nos logiques : logements
/***************************************************************/

const logementsData = require('../assets/logements');

/***************************************************************/
// API de type GET :  : '/api/logements/:id'
/***************************************************************/
function getOneLogement(id) {
	console.log("function getOneLogement(id) id : ", id)
	const logement = logementsData.find((logement => logement.id === id))
	console.log("function getOneLogement(id) logement : ", logement)
	return logement
}

module.exports = getOneLogement

/*******************/
/*** End Of File ***/
/*******************/