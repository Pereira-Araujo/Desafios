import SinglePage from "./SinglePage/index";

import {ThemeProvider} from '@material-ui/core/styles'
import theme from './Constanst/theme'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <SinglePage />
    </ThemeProvider>
  );
}

export default App;
