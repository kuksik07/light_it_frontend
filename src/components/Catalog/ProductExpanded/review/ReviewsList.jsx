import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Review from './Review'
import LeaveReview from './SendReview'
import moment from 'moment/moment'
import { Link } from 'react-router-dom'

const ReviewsList = ({ reviews, id, user }) =>
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

ReviewsList.propTypes = {
  reviews: PropTypes.array.isRequired,
  id: PropTypes.number,
}

const mapStateToProps = store => ({
  reviews: store.review.reviews.sort((a, b) => moment(b.created_at) - moment(a.created_at)),
  user: store.auth.user,
  id: store.product.product.id
})

export default connect(mapStateToProps)(ReviewsList)
