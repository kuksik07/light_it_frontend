import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles/index'
import ProductMoreInfo from './ProductInfo'
import ReviewsList from './review/ReviewsList'
import Paper from '@material-ui/core/es/Paper/Paper'
import { connect } from 'react-redux'
import { getProduct } from '../../../redux/actions/product.action'

const styles = {
  root: {
    width: '800px',
    padding: '16px',
    margin: '16px auto 0'
  }
}

class ProductExpanded extends Component {
  componentWillMount() {
    this.props.dispatch(getProduct(this.props.match.params.id))
  }

  render() {
    const { classes, product } = this.props
    return (
      <div>
        {
          product &&
          <Fragment>
            <Paper className={classes.root}>
              <ProductMoreInfo id={product.id} product={product} />
              <ReviewsList id={product.id} />
            </Paper>
          </Fragment>
        }
      </div>
    )
  }
}

ProductExpanded.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object,
}

const mapStateToProps = store => ({
  product: store.product.product
})

export default connect(mapStateToProps)(withStyles(styles)(ProductExpanded))
