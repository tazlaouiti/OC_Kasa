import React, { useEffect } from 'react';
import { Navigate, useParams, useSearchParams, useLocation} from 'react-router-dom';
import { useFetch, useTheme, useLayoutFlag, useBannerImage  } from '../../utils/hooks'
import styled from 'styled-components'
import { Loader } from '../../utils/style/atoms'
import Carrousel from '../../components/Carrousel';
import Rating from '../../components/Rating';
import Dropdown from '../../components/Dropdown';
import Mer from '../../assets/mer.png'				// 'eric-muhr-P_XxsdVgtpQ-unsplash.png'

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
`

function Logement() {
	console.log("pages/fichelogement Logement() ");

	const { layoutFlag, changeLayoutFlag } = useLayoutFlag()
	// Page Sans banniere - Sans text de banniere - Avec footer.
	useEffect(() => {
		changeLayoutFlag("001")
	}, [layoutFlag, changeLayoutFlag]) 
	
	const { imageDeFond, changeBannerImage} = useBannerImage()
	useEffect(() => {
	changeBannerImage(Mer)
	}, [imageDeFond, changeBannerImage])
	//console.log("pages/fichelogement - imageDeFond : ", imageDeFond)
	
	const { theme } = useTheme()

/*******************************************************/
	// URLSearchParams()
/*******************************************************/
 	const [queryParameters] = useSearchParams()
	//const queryParameters = new URLSearchParams(window.location.search)
	const logementId = queryParameters.get("logementId")
	console.log("logementId : ", logementId);
	
	const maChaine = `/logement/` + logementId
	
	console.log("useFetch : ", maChaine);

	const { data, isLoading, error } = useFetch(`http://localhost:8000/logement/` + logementId); // API pour recuperer la data appartement (Id from URL) du fichier Logement.js (from logement.JSON)


	if (error) {
		console.log("Error logement\index.jsx : ", error);
		return (
			<div> 
				<Navigate to="/error" replace={true} /> {/* replace={true} : La page Error ne sera pas mise dans la history stack. */}
			</div>
		)
	}
   
	return (
		<div>
			{isLoading ? (
				<LoaderWrapper>
					<Loader theme={theme} data-testid="loader" />
				</LoaderWrapper>
			) : (

				<div className="logementContainer">
					
					{/* Container 01 : Carrousel des photos (Étape 7 : Créez le carrousel de la page de logement)*/}
					<Carrousel pictures={data.logementData.pictures} />

					{/* Container 02  : Middle page*/}			
					<div className='logementMiddleContainer'>					
						{/* Container A  : Infos */}			
						<div className='logementInfosContainer'>
							<h1 className='logementInfosTitle'>
								{data.logementData.title}
							</h1>
							<div className='logementInfosLocation'>
								{data.logementData.location}
							</div>				
							<div className="logementInfosTags">
										{data.logementData.tags.length > 0 ? data.logementData.tags.map((tag,index) => ( <div className="logementInfosTags__tag" key={`${tag}-${index}`} > {tag} </div> )) : ''}
							</div>						
						</div>
						
						{/* Container B : Recherche mots cles et avis */}		
						<div className='logementHostContainer'>
							<div className='logementHost'>
								<span className='logementHostName'>
									{data.logementData.host.name}
								</span>
								<img className='logementHostPicture' src={data.logementData.host.picture} alt="Photos profile du propriétaire"/>
							</div>
							<Rating rating={data.logementData.rating} />
						</div>
					</div>
					
					{/* Container 04 : Description et Equipements */}		
					<div className='logementDropdown'>
						<div className='logementDropdownDetail'>
							<Dropdown summaryTitle="Description"
								list={data.logementData.description}
							/>
						</div>
						<div className='logementDropdownDetail'>
							<Dropdown summaryTitle="Equipements"
								list={data.logementData.equipments}
							/>
						</div>
					</div>
					
				</div>
			)}
		</div>
	)
   
}

export default Logement
