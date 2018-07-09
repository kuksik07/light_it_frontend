import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import moment from 'moment'
import Card from '@material-ui/core/Card';
import Avatar from "@material-ui/core/es/Avatar/Avatar";
import Typography from '@material-ui/core/Typography';
import StarsRating from '../../../StarsRating';

const styles = {
    root: {
        marginBottom: '16px',
        padding: '16px',
    },
    reviewWrapper: {
        display: 'flex',
    },
    reviewBody: {
        marginLeft: '16px',
        width: '100%',
    },
    head: {
        display: 'flex',
    },
    headLine: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    reviewText: {
        marginTop: '8px',
    },
}

const initialsFromUsername = username => {
    let initials;
    if (username.split(' ').length > 1) {
        return username.split(' ')[0].charAt(0).toUpperCase() + username.split(" ")[1].charAt(0).toUpperCase();
    } else {
        initials = username.charAt(0).toUpperCase();
        if (username.length === 1)
            return initials;
        let numbers = parseInt(username.replace(/\D+/g, ""), 10);
        if (!isNaN(numbers))
            return initials + numbers[0].toUpperCase();
        else
            return initials + username.charAt(1).toUpperCase();
    }
}

class Reviews extends Component {
    render() {
        const {classes, review} = this.props;
        return (
            <Card className={classes.root}>
                <div className={classes.reviewWrapper}>
                    <Avatar
                        style={{backgroundColor: '#b0bec5'}}>{initialsFromUsername(review.created_by.username)}</Avatar>
                    <div className={classes.reviewBody}>
                        <div className={classes.headLine}>
                            <Typography variant="body2">
                                {review.created_by.username}
                            </Typography>
                            <Typography variant="caption">
                                {moment(review.created_at).fromNow()}
                            </Typography>
                        </div>
                        <StarsRating value={review.rate} isReadOnly={true}/>
                        <Typography className={classes.reviewText} variant="body1">
                            {review.text}
                        </Typography>
                    </div>
                </div>
            </Card>
        )
    }
}

Reviews.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Reviews)