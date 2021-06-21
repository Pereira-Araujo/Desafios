import { createMuiTheme } from '@material-ui/core/styles';
import {defaultColor,secondaryColor} from './colors'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: defaultColor,
    },
    secondary:{
       main:secondaryColor,
    }
  },
});
export default theme