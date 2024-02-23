import { useState, useEffect, useContext } from 'react'
import { ThemeContext, LayoutFlagContext, BannerImageContext } from '../context'

export function useFetch(url) {
	// data  va nous permettre de stocker l’objet qui a été retourné par l’API.
	const [data, setData] = useState({})

	// Creation d'un state loading pour eviter les moments de blanc = correspond au temps entre lequel le composant est render (généré) et celui où lequel les données sont chargées.
	const [isLoading, setLoading] = useState(true)
	const [error, setError] = useState(false)

	useEffect(() => {
	//console.log('utils/hooks useFetch(' + url + ') useEffect')
	if (!url) return
	setLoading(true)		
	async function fetchData() {
	  try {
		const response = await fetch(url)
		// Parser ce qui est retourné avec data.json()
		const data = await response.json()
		// Affectation de data du useState avec la fonction setData(data) par l'objet data recu de l'API fetch
		setData(data)
	  } catch (err) {
		console.log(err)
		setError(true)
	  } finally {
			setLoading(false)
	  }
	}
	fetchData()
	}, [url])
	
	return { isLoading, data, error }
}

export function useTheme() {
	//console.log('utils/hooks useTheme()')
	const { theme, toggleTheme } = useContext(ThemeContext)
	return { theme, toggleTheme }
}

export function useLayoutFlag() {
	//console.log('utils/hooks useLayoutFlag()')
	const { layoutFlag, changeLayoutFlag } = useContext(LayoutFlagContext)
	return { layoutFlag, changeLayoutFlag }
}

export function useBannerImage() {
	//console.log('utils/hooks useBannerImage()')
	const { imageDeFond, changeBannerImage } = useContext(BannerImageContext)
	return { imageDeFond, changeBannerImage }
}
