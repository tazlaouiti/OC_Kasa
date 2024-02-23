import React from 'react';
// La definition des fichiers .png exportes de Figma n'ont pas une bonne définition => .svg
import star from '../../assets/starRating.svg';
import nostar from '../../assets/nostarRating.svg'

const Rating = ({rating}) => {
  
	let starsTab  = []
	
	const ratingInt = parseInt(rating)
	
	switch(ratingInt){
		case 1: 
			starsTab =[star, nostar, nostar, nostar, nostar]
           break;
		case 2: 
			starsTab =[star, star, nostar, nostar, nostar]
           break;
 		case 3: 
			starsTab =[star, star, star, nostar, nostar]
           break;
		case 4: 
			starsTab =[star, star, star, star, nostar]
           break;
		case 5: 
			starsTab =[star, star, star, star, star]
           break;		   
		default:
			return
	}
	//console.table("starsTab : ", starsTab)

	return (
		<div className='RatingStar'>
			{starsTab.map((star, index) => <img key={ index } src={ star } alt="Etoile" /> )}
		</div>
	)
};

export default Rating;

