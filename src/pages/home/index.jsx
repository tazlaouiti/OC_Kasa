import React, { useEffect } from 'react'
import Card from '../../components/Card'
import { Loader } from '../../utils/style/atoms'
import { useFetch, useTheme, useLayoutFlag, useBannerImage  } from '../../utils/hooks'
import Mer from '../../assets/mer.png'				// 'eric-muhr-P_XxsdVgtpQ-unsplash.png'

function Home() {
	
	const { layoutFlag, changeLayoutFlag } = useLayoutFlag()
	// Page Avec banniere - Avec text de banniere - Avec footer.

	useEffect(() => {
		changeLayoutFlag("111")
	}, [layoutFlag, changeLayoutFlag])	
	
	const { imageDeFond, changeBannerImage} = useBannerImage()
	useEffect(() => {
	changeBannerImage(Mer)
	}, [imageDeFond, changeBannerImage])
	//console.log("pages/home Logements() - imageDeFond : ", imageDeFond)

	const { theme } = useTheme()
	const { data, isLoading, error } = useFetch(`http://localhost:8000/logements`)
	//console.log("pages/Home Logements() data : ", data);

	const logementsList = data?.logementsList
	
	let CardsContainerTheme = "";
	if (theme === 'light') { CardsContainerTheme="CardsContainer--lightgrey" } else { CardsContainerTheme="CardsContainer--darkgrey" }

	if (error) {
		return <span>Bonjour, nos serveurs sont actuellement indisponibles, veuillez re-essayez ultérieurement, merci pour votre compréhension.<br/>Demarrer avec VSCode la partie serveur /oc_kasa/back> nodemon server.</span>
	}

	//console.log("home logementsList : ", logementsList)	

	return (
		<div>
			{isLoading ? (
			<div className="LoaderWrapper">
				<Loader theme={theme} data-testid="loader" />
			</div>
			) : (
			<div className={ `CardsContainer ` + CardsContainerTheme } theme={theme} >
				{logementsList?.map((logement, index) => (
				<Card
					key={`${logement.title}-${index}`}
					logementId={logement.id}
					title={logement.title}
					cover={logement.cover}
					theme={theme}
				/>
				))}
			</div>
			)}
		</div>
	)
}

export default Home
