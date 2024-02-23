/***************************************************************/
// Fichier de nos logiques : logements
/***************************************************************/

const logementsData = require('../assets/logements');

/***************************************************************/
// API de type GET :  : '/api/logements'

function getAllLogements() {
	return logementsData.map(({ id, title, cover, description }) => ({
		id,
		title, 
		cover, 
		description
	}))
}

module.exports = getAllLogements

/*******************/
/*** End Of File ***/
/*******************/