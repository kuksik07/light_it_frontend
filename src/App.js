import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header'
import ProductsCatalog from './components/ProductsCatalog'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import {createMuiTheme, MuiThemeProvider} from "@material-ui/core/es/styles/";
import cyan from '@material-ui/core/colors/cyan';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: cyan.A700,
            dark: cyan["600"],
            contrastText: '#fff'
        },
        secondary: {
            main: '#fff',
        },
    },
})

const App = () => {
    return (
        <Router>
            <MuiThemeProvider theme={theme}>
                <Header/>
                <Route exact path={'/'} component={ProductsCatalog}/>
                <Route path={'/signIn'} component={SignIn}/>
                <Route path={'/signUp'} component={SignUp}/>
            </MuiThemeProvider>
        </Router>
    )
}



export default App;
