import React, { useEffect } from 'react'
import { useLayoutFlag, useBannerImage } from '../../utils/hooks'
import Dropdown from '../../components/Dropdown'
import Montagne from '../../assets/montagne.png'	// 'kalen-emsley-Bkci_8qcdvQ-unsplash.png'

function APropos() {
	//console.log("pages/apropos APropos()")

	const { layoutFlag, changeLayoutFlag } = useLayoutFlag()
	// Page Avec banniere - Sans text de banniere - Avec footer.
	useEffect(() => {
		changeLayoutFlag("101")
	}, [layoutFlag, changeLayoutFlag])

	const { imageDeFond, changeBannerImage} = useBannerImage()
	useEffect(() => {
	changeBannerImage(Montagne)
	}, [imageDeFond, changeBannerImage])

	//console.log("pages/apropos APropos() - imageDeFond : ", imageDeFond)

	return (
		<div className="aboutContainer">
			<Dropdown summaryTitle="Fiabilité"
				list="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
			/>
			<Dropdown summaryTitle="Respect"
				list="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
			/>
			<Dropdown summaryTitle="Service"
				list="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
			/>
			<Dropdown summaryTitle="Responsabilité"
				list="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
			/>
		</div>
	)
}

export default APropos

