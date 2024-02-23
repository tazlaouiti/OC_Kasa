import React, { useCallback, useState } from 'react';
import arrowTop from '../../assets/Arrow_Top.svg'
import arrowBottom from '../../assets/Arrow_Bottom.svg'

function Dropdown({ summaryTitle, list }) {

	const [ arrowState, setFavorite ] = useState(arrowTop)
	
	const arrowChange = useCallback(() => {
	   	if (arrowState === arrowTop) { setFavorite(arrowBottom) } else { setFavorite(arrowTop)  }
		//console.log("arrowChange() arrowState : ", arrowState)
	}, [arrowState]); 

	if ( Array.isArray(list) && list.length > 0 ) {
		//console.log("Dropdown - function Dropdown({ summaryTitle, list }) - if ( Array.isArray(list) && list.length > 0 ) ")
		return (
			<details>
					<summary><span>{summaryTitle} </span><img src={ arrowState } alt="Fleche de control" onClick={ arrowChange } /></summary>
				<div>
				{/* Ne pas encapsuler entre balises <p> : Warning: validateDOMNesting(...): <ul> cannot appear as a descendant of <p>. */}
 					<ul>{list.map((data, index) => ( <li key={index}>{data}</li> ))}</ul>
				</div>
			</details>
		);
	}
	else if ( Array.isArray(list) && list.length === 0 ) {
		return (
			<details>
					<summary><span>{summaryTitle} </span><img src={ arrowState } alt="Fleche de control" onClick={ arrowChange } /></summary>
				<div>
					<p>!!! No data !!!</p> {/* Message informationnel si pas de données */}
				</div>
			</details>
		);
	}
	else if ( !Array.isArray(list) ) {
		return (
			<details>
					<summary><span>{summaryTitle} </span><img src={ arrowState } alt="Fleche de control" onClick={ arrowChange } /></summary>
				<div>
					<p>{list}</p>
				</div>
			</details>
		);
	}	
}

export default Dropdown;


