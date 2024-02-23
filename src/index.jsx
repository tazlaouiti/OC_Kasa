// Création des composants de pages
import React from 'react'
import ReactDOM from 'react-dom/client';

import { BrowserRouter as Router, Route, Routes, HashRouter} from 'react-router-dom'


import Home from './pages/home'
import About from './pages/about'
import Logement from './pages/logement'
import Error from './pages/error'
import Header from './components/Header'
import Banner from './components/Banner'
import Footer from './components/Footer'

// Utilisation du fichier de style CSS construit avec SASS './utils/style/style.css' => File prefixed : './utils/style/prefixed/style.css'
import './utils/style/prefixed/style.css'
// Utilisation d'une 2nde methode avec le fichier de style globalstyle.js 
import GlobalStyle from './utils/style/globalstyle'
// Utilisation pour l'exercice d'une 3eme methode styled-components dans le fichier card/index.jsx

// Contexte
import { ThemeProvider, LayoutFlagProvider, BannerImageProvider } from './utils/context'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<HashRouter>  
			<ThemeProvider>
			<LayoutFlagProvider>
			{/* Provider pour afficher l'image de fond de la banniere selon la page. */}
			<BannerImageProvider>
				<GlobalStyle />
				<Header />
				<Banner />
				{/* <Switch> */}
				<Routes> 
					{/* V5 vs V6 : In react-router-dom, you also do not need to use the exact in the Route declaration.
					Si vous allez sur l'URL http://localhost:3000/, on a bien la page d'accueil qui s'affiche. Mais, pour http://localhost:3000/survey… 
					Ohoh ! Les deux s'affichent.. Il suffit d'ajouter la prop  exact  dans votre route pour  Home
					La prop exact ci-dessus  indique au composant Router de correspondre le chemin exact. Si on n'inclue pas la prop  exact  dans le chemin / , cette route va correspondre à toutes les URL qui contiennent /.
					<Route exact path="/"> 
					<Route exact path="/"><Home /></Route> */}
					<Route path='/'								element={<Home />} />
					<Route path="/oc_kasa"						element={<Home />} />
					<Route path="/oc_kasa/"						element={<Home />} /> 

					<Route path="/apropos"						element={<About />} />
					
					<Route path="/fiche_logement/*"				element={<Logement />} />
					<Route path="/oc_kasa/fiche_logement/*"		element={<Logement />} />
			
					{/* How do I add a No Match (404) Route in react-router v6? In v6 use the new element prop, pass path="*" : <Route exact path="*" element={<NoMatch />} /> */}
					<Route path="*" element={<Error />} />
										
				</Routes>
				<Footer />
			</BannerImageProvider>
			</LayoutFlagProvider>
			</ThemeProvider>
		</HashRouter>
	</React.StrictMode>
)


