# oc_kasa #

This is the front end and back end server for Project of the OpenClassrooom Web Developer path.

M. Laouiti : I developed the React front application and the back server


// Installer les packages ci-dessous pour l'execution, React vous affichera un message si necessaire :
>npm install react-router-dom
>npm install styled-components


// J'ai volontairement laissé 3 methodes d'application du style CSS : 
	- L'interet du style dans un composant. Accessible directement comme dans l'exemple : /src/components/card.index.jsx
	- L'utilisation du fichier GlobalStyle.jsx dans le repertoire /src/utils/style/
	- L'utilisation de "Sass" qui apporte de la structure dans l'organisation du style des pages du projet oc_kasa
 


// Demarrer le serveur backend dans la directory /back pour mettre à disposition la ressource data logement
/back>nodemon server
Listening on port 8000

API : http://localhost:8000/logements
API : http://localhost:8000/logement/:Id (example : http://localhost:8000/logement/c67ab8a7)

# Demarrer l'application
>npm run start


