import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import { getReviews } from '../../../../redux/actions/review.action'
import Review from './Review'
import LeaveReview from './SendReview'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'

class ReviewsList extends Component {
  componentWillMount() {
    this.props.dispatch(getReviews(this.props.id))
  }

  render() {
    const { reviews, id, user } = this.props
    return (
      <div>
        {user ? <LeaveReview id={id} /> :
          <Typography gutterBottom color="primary" align="center" variant="body1">
            <Link style={{ color: 'inherit' }} to={'/signUp'}>Sign up</Link> to leave a comment
          </Typography>
        }
        <Typography gutterBottom variant="title">
          Reviews
        </Typography>
        <div>
          {
            reviews.map(review =>
              <Review
                key={review.id}
                id={review.id}
                review={review}
              />
            )
          }
        </div>
      </div>
    )
  }
}

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  id: PropTypes.number.isRequired,
}

const mapStateToProps = store => ({
  reviews: store.review.reviews.sort((a, b) => moment(b.created_at) - moment(a.created_at)),
  user: store.auth.user
})

export default connect(mapStateToProps)(ReviewsList)
