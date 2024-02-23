import { useLayoutFlag, useBannerImage } from '../../utils/hooks'
import Mer from '../../assets/mer.png'				// 'eric-muhr-P_XxsdVgtpQ-unsplash.png'

function Banner() {
	//console.log('components/Banner Banner()')
	
	const { layoutFlag } = useLayoutFlag()
	
	const { imageDeFond } = useBannerImage()

	let imageDeFondDescription = ""
	if (imageDeFond === Mer) {
		imageDeFondDescription = "Image de fond avec une mer agitée et des rochers"
	}
	else { imageDeFondDescription = "Image de fond avec une montagne" }
	
	// Page Avec banniere - Avec text de banniere - Avec footer : changeBannerFlag(111) => Home	
	if ( layoutFlag === "111" ) {
		return <div className='banner' >
			<img src= {imageDeFond} alt= {imageDeFondDescription}/>
				{/* HTML <wbr> ne fonctionne pas */}
	<span className='banner__txt'>Chez vous, partout et ailleurs</span>
		</div>
	}
	// Page Avec banniere - Sans text de banniere - Avec footer : changeBannerFlag(101)	=> About
	else if ( layoutFlag === "101" )  {
		return <div className='banner' >
			<img src= {imageDeFond} alt= {imageDeFondDescription}/>
		</div>
	}
	// Page Sans banniere - Sans text de banniere - Avec footer : changeBannerFlag(001)	=> fiche-logement
	// Page Sans banniere - Sans text de banniere - Sans footer : changeBannerFlag(000) => error
	// Render sans banniere
	return ; 
	

}

export default Banner
