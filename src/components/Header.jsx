// Remarque : j'ai volontairement laissé 2 methodes d'organisation de structures de fichiers pour la demonstration de l'exercice de la soutenance
import { Link } from 'react-router-dom'
import { StyledLink } from '../utils/style/atoms'
import LightTheme from '../assets/logo-kasa.svg'
import DarkTheme from '../assets/logo-kasa--white.svg'
import { useTheme, useBannerImage } from '../utils/hooks'

function Header() {
	//console.log("components/Header Header()")
	const { theme } = useTheme()
	const { imageDeFond } = useBannerImage()
	
	return (
		<nav className="HeaderNavContainer">
			<Link to="/oc_kasa">
				<img className="HeaderHomeLogo" src={theme === 'light' ? LightTheme : DarkTheme} alt="Logo Kasa" />
			</Link>
	
			<div>
				{/* Sans $ : cela ne fonctionne pas */}
				<StyledLink $theme={theme} $imageDeFond={imageDeFond} to="/oc_kasa">
					Accueil
				</StyledLink>
				<StyledLink $theme={theme} $imageDeFond={imageDeFond} to="/apropos">
					A Propos
				</StyledLink>
			</div>
		</nav>
	)
}

export default Header

