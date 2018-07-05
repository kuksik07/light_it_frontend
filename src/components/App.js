import React, { Component, Fragment } from 'react';
import Header from './Header'
import ProductsCatalog from './ProductsCatalog'

class App extends Component {
  render() {
    return (
        <Fragment>
            <Header />
            <ProductsCatalog />
        </Fragment>
    );
  }
}

export default App;
