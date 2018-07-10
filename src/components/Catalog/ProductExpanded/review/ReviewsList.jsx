import React, {Component} from 'react'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {loadReviews} from "../../../../redux/actions/product.action"
import Review from "./Review";
import LeaveReview from './LeaveReview'
import moment from "moment/moment";
import {Link} from "react-router-dom";

const styles = {};

class ReviewsList extends Component {
    componentWillReceiveProps(nextProps) {
        if (nextProps.leaveReviewResponse !== this.props.leaveReviewResponse) {
            if (nextProps.leaveReviewResponse !== null && nextProps.leaveReviewResponse.success === true) {
                this.props.dispatch(loadReviews(this.props.id))
            }
        }
    }

    render() {
        const {classes, reviews, id, user} = this.props;
        return (
            <div className={classes.root}>
                {user ? <LeaveReview id={id}/> :
                    <Typography gutterBottom color="primary" align="center" variant="body1">
                        <Link style={{color: 'inherit'}} to={'/signUp'}>Sign up</Link> to leave a comment
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
    classes: PropTypes.object.isRequired,
    reviews: PropTypes.array,
    leaveReviewResponse: PropTypes.object,
}

ReviewsList.defaultProps = {
    user: null,
    reviews: [],
    leaveReviewResponse: null
}

const mapStateToProps = store => ({
    user: store.auth.user,
    reviews: store.product.reviews.sort((a, b) => moment(b.created_at) - moment(a.created_at)),
    leaveReviewResponse: store.product.leaveReviewResponse
})

export default connect(mapStateToProps)(withStyles(styles)(ReviewsList))