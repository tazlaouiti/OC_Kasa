// Remarque : j'ai volontairement laissé 2 methodes d'application du style dans le projet pour la demonstration de l'exercice de la soutenance

import React, { useCallback, useState } from 'react';

import PropTypes from 'prop-types'

import styled from 'styled-components'
import colors from '../../utils/style/colors'
import DefaultPicture from '../../assets/profile.png'

const CardWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
	align-items: center;

	/* Figma Desktop : 340 x 340px of container size (1240px) = 27.41% Responsiv design proportion respected */
	width: 27%;
	margin: 0 10px 50px 50px;
	padding: 10px;
	border-radius: 10px;

	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
	transition-duration: 0.3s;	
	background: linear-gradient(to bottom, ${colors.primary}, ${colors.secondary});

	// La syntaxe  &:hover  nous permet d'accéder au pseudosélecteur du survol de la souris, et on a bien l'effet souhaité ! 
	&:hover {
	background: linear-gradient(to top, ${colors.primary}, ${colors.secondary});
	box-shadow: 0px 13px 13px rgb(180, 180, 180);
	transition: 0.3s;
	}
	a {
		width: 100%;
		height: 100%;
		text-decoration: none;
	}

	// How to use media queries with styled components : Tablette
	@media screen and (min-width: 768px) and (max-width: 1200px) {
	width: 40%;
	}
	// How to use media queries with styled components : Mobile
	@media screen and (max-width: 768px) {
	width: 100%;
	margin: 0 0 20px 0;
  }
	
`

const CardImage = styled.img`
	width: 100%;
	height: 70%;
	border-radius: 5%;
	object-fit: cover;
	@media screen and (min-width: 768px) and (max-width: 1200px) {
	height: 80%;
	}
`

const CardTitle = styled.div`
	margin-top: 10px; 
	margin-bottom: 5px; 
	color: white; 
	font-family: "Montserrat", sans-serif;
	font-size: 18px;
	font-weight: normal;
	align-items: left;
`

// Dans un composant fonctionnel, les propriétés sont passées comme argument de la fonction. 
function Card ({logementId, title, cover, theme}) {

	const [ isFavorite, setFavorite ] = useState(false)

	const updateIsFavorite = useCallback(() => {
       setFavorite(!isFavorite) 
	}, [isFavorite]);            // add dependent variables here

	const star = isFavorite ? '⭐️' : ''

	const URLLogementId = '#/fiche_logement/?logementId=' + logementId	
	
	return (
		// On peut créer un effet d'ombre au survol de la souris. Pour ça, on crée un  CardWrapper  qui vient remplacer notre précédente  div
		<CardWrapper theme={theme} onClick={ updateIsFavorite }>
			<a href={URLLogementId} >
				<CardImage src={cover} alt="Photos de logement" />
				<CardTitle theme={theme}>
					{star} {title} {star}
				</CardTitle>
			</a>
		</CardWrapper>
	)
}

// Préciser qu'une prop est requise pour le bon fonctionnement de l'application. Pour cela, il suffit d'ajouter  isRequired  à la suite du type déclaré.
Card.propTypes = {
	logementId: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	cover: PropTypes.string.isRequired,
	theme: PropTypes.string.isRequired,
}
// Au lieu de déclencher une erreur pour notre propriété manquante (alors qu'on avait précisé  isRequired  ), 
// nous aurions pu aussi déclarer une propriété par défaut.
Card.defaultProps = {
	logementId: '',
	title: '',
	cover: DefaultPicture,
	theme: 'light',
}

export default Card
