// Page sans footer et donc sans la fonctionnalité boutton theme Nuit/Jour
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useLayoutFlag } from '../../utils/hooks'
import ErrorIllustration from '../../assets/404.svg'

function Error() {
	const { layoutFlag, changeLayoutFlag } = useLayoutFlag()
	// Page Sans banniere - Sans text de banniere - Sans footer.
	useEffect(() => {
		changeLayoutFlag("000")
	}, [layoutFlag, changeLayoutFlag])

	return (
		<div className="ErrorContainer" >
			<img className="ErrorIllustration" src={ErrorIllustration} alt="Code 404 indiquant la page erreur" />
			<div className="ErrorSubtitle" >
				Oups! La page que vous demandez n’existe pas.
			</div>
			<Link className="ErrorLink" to="/">Retournez sur la page d'accueil</Link>
		</div>
	)
}

export default Error
