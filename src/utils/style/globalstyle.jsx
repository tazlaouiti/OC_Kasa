import { createGlobalStyle } from 'styled-components'
import colors from '../../utils/style/colors'
import { useTheme } from '../hooks'

const StyledGlobalStyle = createGlobalStyle`
    * {
      font-family: 'Montserrat', sans-serif;
    }

    body {
        background-color: ${(props) =>
          props.isDarkMode ? colors.darkmode : 'white'};
        margin: 0;
    }
`

function GlobalStyle() {
  const { theme } = useTheme()

  return <StyledGlobalStyle isDarkMode={theme === 'dark'} />
}

export default GlobalStyle
