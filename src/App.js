import React, {Fragment} from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Header from './components/Header'
import ProductsCatalog from './components/ProductsCatalog'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'

const App = () =>
    <Router>
        <Fragment>
            <Header/>
            <Route exact path={'/'} component={ProductsCatalog}/>
            <Route path={'/signIn'} component={SignIn}/>
            <Route path={'/signUp'} component={SignUp}/>
        </Fragment>
    </Router>


export default App;
