import { Link } from 'react-router-dom'
import colors from './colors'
import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

// Loader  en CSS, directement dans le fichier utils/Atoms.jsx Pour cela, on a également besoin d’importer keyframes  depuis la bibliothèque styled-components
export const Loader = styled.div`
  padding: 10px;
  border: 6px solid ${colors.primary};
  border-bottom-color: transparent;
  border-radius: 22px;
  animation: ${rotate} 1s infinite linear;
  height: 0;
  width: 0;
`

export const StyledLink = styled(Link)`
	margin-left: 57px;
	padding: 0; 
	font-family: 'Montserrat';
	font-style: normal;
	/* Figma typography : 500 */
	font-weight: 500;
	font-size: 24px;
	color: ${({ $theme }) => ($theme === 'light' ? colors.primary : colors.white)};
	//color: ${colors.primary};
	text-align: center;
	text-decoration: none;
	/* Attention à ne pas oublier la bordure rouge qui s’affiche au survol. */
    &:hover {
		border-bottom: 2px solid ${colors.primary};
		/* Arrow cursor */
		cursor: default;
	}
	@media screen and (min-width: 768px) and (max-width: 1200px) {
	margin-left: 30px;
	font-size: 18px;
	}
	// How to use media queries with styled components : Mobile
	@media screen and (max-width: 768px) {
	margin-left: 10px;
	font-size: 12px;
  }

`

