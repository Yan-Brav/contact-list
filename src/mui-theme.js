import createMuiTheme from '@material-ui/core/styles/createMuiTheme';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

export default createMuiTheme({
    palette: {
        primary: {
            main: blue[800],
            light: blue[700]
        },
        secondary: {
            main: green[900],
        }
    }
});
