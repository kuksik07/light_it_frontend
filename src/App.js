import React from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Header from './components/Header'
import Catalog from './components/Catalog/Catalog'
import SignIn from './components/auth/SignIn'
import SignUp from './components/auth/SignUp'
import ProductExpanded from './components/Catalog/ProductExpanded'
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
                <Route exact path={'/'} render={() => <Redirect to="/products"/>}/>
                <Route exact path={'/products'} component={Catalog}/>
                <Route exact path={'/signIn'} component={SignIn}/>
                <Route exact path={'/signUp'} component={SignUp}/>
                <Route path={'/products/:id'} component={ProductExpanded}/>
            </MuiThemeProvider>
        </Router>
    )
}



export default App;
