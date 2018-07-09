import React, {Component} from 'react'
import {connect} from 'react-redux'
// import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles'
import ProductLessInfo from './CatalogProduct'
import {loadProducts} from "../../redux/actions/product.action"

const styles = {
    catalog_wrapper: {
        padding: '0 100px',
        margin: '0 auto'
    }
}

class Catalog extends Component {
    componentWillMount() {
        this.props.dispatch(loadProducts())
    }

    render() {
        const {products, classes} = this.props
        return (
            <div className={classes.catalog_wrapper}>
                {products.map((product, index) =>
                    <ProductLessInfo
                        key={product.id}
                        imagePath={`http://smktesting.herokuapp.com/static/${product.img}`}
                        title={product.title}
                        id={product.id}
                    />
                )}
            </div>
        )
    }
}

Catalog.defaultProps = {
    products: [],
}

const mapStateToProps = store => ({
    products: store.product.products
})

export default connect(mapStateToProps)(withStyles(styles)(Catalog))