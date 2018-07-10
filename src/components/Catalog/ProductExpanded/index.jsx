import React, {Fragment, Component} from 'react'
// import PropTypes from 'prop-types';
import ProductMoreInfo from './ProductInfo'
import ReviewsList from './review/ReviewsList'
import Paper from "@material-ui/core/es/Paper/Paper";
import {connect} from "react-redux";
import {loadProduct} from "../../../redux/actions/product.action";

class ProductExpanded extends Component {
    componentWillMount() {
        this.props.dispatch(loadProduct(this.props.match.params.id))
    }

    render() {
        const {product} = this.props
        return (
            <div>
                {
                    product &&
                    <Fragment>
                        <Paper style={{width: '800px', padding: '16px', margin: '16px auto 0'}}>
                            <ProductMoreInfo id={product.id} product={product}/>
                            <ReviewsList id={product.id}/>
                        </Paper>
                    </Fragment>
                }
            </div>
        )
    }
}

ProductExpanded.defaultProps = {
    product: null,
}

const mapStateToProps = store => ({
    product: store.product.product
})

export default connect(mapStateToProps)(ProductExpanded)