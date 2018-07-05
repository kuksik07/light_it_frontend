import React, { Component } from 'react'
import axios from 'axios'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ProductLessInfo from './ProductLessInfo'

const styles = {
    catalog_wrapper: {
        padding: '0 100px',
        margin: '0 auto'
    }
}

class ProductsCatalog extends Component{
    constructor(props){
        super(props)

        this.state = {
            products: []
        }
    }

    componentDidMount () {
        axios.get('http://smktesting.herokuapp.com/api/products/')
            .then(res => {
                this.setState({
                    products: res.data
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render () {
        const { classes } = this.props;
        const { products } = this.state

        return (
            <div className={classes.catalog_wrapper}>
                {products.map((product) =>
                    <ProductLessInfo
                        key = { product.id }
                        imagePath = { `http://smktesting.herokuapp.com/static/${product.img}` }
                        title = { product.title }
                        id = { product.id }
                    />
                )}
            </div>
        )
    }
}

ProductsCatalog.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(ProductsCatalog)