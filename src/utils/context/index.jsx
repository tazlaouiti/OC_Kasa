
import React, { useState, createContext } from 'react'
import Mer from '../../assets/mer.png'				// 'eric-muhr-P_XxsdVgtpQ-unsplash.png'

// Création d'un Dark Mode (mode nuit) pour notre application.
export const ThemeContext = createContext()


export const ThemeProvider = ({ children }) => {
	//console.log("utils/context ThemeProvider")

	const [theme, setTheme] = useState('light')
	// toggle=basculer
	const toggleTheme = () => {
	setTheme(theme === 'light' ? 'dark' : 'light')
	}

	return (
	<ThemeContext.Provider value={{ theme, toggleTheme }}>
		{children}
	</ThemeContext.Provider>
	)
}

// Composant pour afficher la banniere, le text, le footer ou pas selon la page.
export const LayoutFlagContext = createContext()

export const LayoutFlagProvider = ({ children }) => {
	//console.log("utils/context LayoutFlagProvider")

	const [layoutFlag, setLayoutFlag] = useState("111");
	
	const changeLayoutFlag = (flagParam) => {
		setLayoutFlag(flagParam)
	}
	
	return (
	<LayoutFlagContext.Provider value={{ layoutFlag, changeLayoutFlag }}>
		{children}
	</LayoutFlagContext.Provider>
	)
}

// Composant pour afficher l'image de fond de la banniere selon la page.
export const BannerImageContext = createContext()

export const BannerImageProvider = ({ children }) => {
	//console.log("utils/context BannerImageProvider")

	const [imageDeFond, setImage] = useState(Mer)
	//console.log("utils/context imageDeFond 01 : ", imageDeFond)
	const changeBannerImage = (imageParam) => {
		setImage(imageParam)
	}


	return (
	<BannerImageContext.Provider value={{ imageDeFond, changeBannerImage }}>
		{children}
	</BannerImageContext.Provider>
	)
}
