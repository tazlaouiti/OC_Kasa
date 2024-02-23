import Arrow_Forward from '../../assets/Arrow_Forward.svg'
import Arrow_Backward from '../../assets/Arrow_Backward.svg'
import { useState } from 'react';

function Carrousel(props) {
    const pictures = props.pictures;
	//console.log("components/slideshow slideshow(props) - pictures.length : ", pictures.length)
	
	// Si une propriété n’a qu’une seule image, on ne devrait voir ni flèche ni bullet point.
    const showCommands = pictures.length > 1 ? true : false;
	
	let slideshowCommandsStatus = showCommands ? `slideshowCommands--Ok` : `slideshowCommands--NotOk`
	//console.log("components/slideshow slideshow(props) - slideshowCommandsStatus : ", slideshowCommandsStatus)
	
    const [cursorSlide, setcursorSlide] = useState(0);
	//console.log("components/slideshow slideshow(props) - cursorSlide : ", cursorSlide)

	function nextSlide() {
        // Si clic sur dernier slide, on bascule au 1er ( index 0 ) / else on incremente le compteur curseur
		if ( cursorSlide === ( pictures.length -1 ) ) {
			setcursorSlide( 0 )
		}
		else { 
			setcursorSlide( cursorSlide +1 ) 
		}
    }
    function backSlide() {
        if ( cursorSlide === 0 ) {
			setcursorSlide( pictures.length -1 )
		}
		else { 
			setcursorSlide( cursorSlide -1 ) 
		}
    }

    return(
        <div className='slideshowContainer'>
			<img className= "slideshowImg" src= { pictures[cursorSlide] } alt="Slideshow" />

			<div className={ `slideshowCommands ` + slideshowCommandsStatus }>
				<button onClick= { backSlide } >  <img src= { Arrow_Backward } alt="Arrow Backward" /> </button>
                <button onClick= { nextSlide } >  <img src= { Arrow_Forward } alt="Arrow Forward" /> </button>
				
                <div className="slideshowBulletPoints">
                    { cursorSlide + 1 } / { pictures.length }
                </div>
            </div>
        </div> 
    );
}

export default Carrousel;
