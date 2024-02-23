import { useTheme, useLayoutFlag } from '../../utils/hooks'
import { Link } from 'react-router-dom'
import Logo from '../../assets/logo-kasa--white.svg'

function Footer() {
	const { toggleTheme, theme } = useTheme()
	
	const { layoutFlag } = useLayoutFlag()

	if ( layoutFlag === "111" || layoutFlag === "101" || layoutFlag === "001" ) { 
		return (	
			<div className="FooterContainer" >
				<Link to="/OC_Kasa">
					<img src={Logo} alt="Logo Kasa" />
				</Link>
				<p className="FooterText" >
					© 2020 Kasa, All rights reserved
				</p>
			
				{/* NightMode : Ce bouton dans notre Footer permettra de déclencher le dark mode de l’application. On utilise le Provider de Contexte pour le thème. */}
				<button className="FooterText" onClick={() => toggleTheme()}>
					Changer de mode : {theme === 'light' ? '☀️' : '🌙'}
				</button>

			</div>
		)
	}
	// Render sans footer
	return ;

}

export default Footer
