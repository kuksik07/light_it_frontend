import React, { Component } from 'react'
import { ASSETS_URL } from '../../../services/api'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import StarsRating from '../../StarsRating'
import { connect } from 'react-redux'

const styles = {
  wrapper: {
    marginBottom: '16px'
  },
  product: {
    display: 'flex',
  },
  reviews: {
    margin: '15px auto 0',
  },
  content: {
    paddingTop: 0,
  },
  media: {
    backgroundSize: 'contain',
    width: '200px',
    height: '200px',
  },
  description: {
    margin: '16px 0',
  },
}

class ProductInfo extends Component {
  state = {
    rate: null,
    rateReviewsCount: null
  }

  getRating = () => {
    let rateSum = 0
    let reviewsCount = 0

    this.props.reviews.map((review) => {
      rateSum += review.rate
      reviewsCount++
      return {}
    })

    const rateAvg = rateSum / reviewsCount
    this.setState({
      rate: rateAvg,
      rateReviewsCount: reviewsCount
    })
  }

  componentDidMount() {
    this.getRating()
  }

  componentDidUpdate(prevProps, prevStates, snapshot) {
    if (this.props.reviews !== prevProps.reviews) {
      this.getRating()
    }
  }

  render() {
    const { rate, rateReviewsCount } = this.state
    const { classes, product } = this.props
    return (
      <div className={classes.wrapper}>
        <div className={classes.product}>
          <CardMedia
            className={classes.media}
            image={ASSETS_URL + product.img}
            title={product.title}
          />
          <CardContent className={classes.content}>
            <Typography gutterBottom variant="headline">
              {product.title}
            </Typography>
            <StarsRating isReadOnly={true} value={rate} countReviews={rateReviewsCount} />
            <Typography variant="subheading" color="textSecondary" className={classes.description}>
              {product.text}
            </Typography>
          </CardContent>
        </div>
      </div>
    )
  }
}

ProductInfo.propTypes = {
  classes: PropTypes.object.isRequired,
  product: PropTypes.object.isRequired,
  reviews: PropTypes.array.isRequired,
}

const mapStateToProps = store => ({
  reviews: store.review.reviews
})

export default connect(mapStateToProps)(withStyles(styles)(ProductInfo))
