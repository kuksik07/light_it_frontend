import React, {Component} from 'react'
// import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles'
import Star from '@material-ui/icons/Star'
import StarBorder from '@material-ui/icons/StarBorder'
import StarHalf from '@material-ui/icons/StarHalf'
import IconButton from '@material-ui/core/es/IconButton/IconButton'

const styles = {
    root: {
        display: 'flex'
    },
    starsRead: {
        color: '#ffb74d',
        fontSize: '18px'
    },
    starsNoReadEmpty: {
        color: '#b0bec5',
    },
    text: {
        margin: 'auto 10px',
        display: 'inline-block'
    },
    iconBtn: {
        width: '32px',
        height: '32px',
    }
}

class StarsRating extends Component {
    renderStars = () => {
        const {classes, isReadOnly, onClickStar, value} = this.props

        let stars = []

        if (isReadOnly) {
            for (let i = 0; i < 5; i++) {
                if (value - i >= 0.75) {
                    stars.push(<Star key={i} className={this.props.classes.starsRead}/>)
                } else if (value - i >= 0.25 && value - i < 0.75) {
                    stars.push(<StarHalf key={i} className={this.props.classes.starsRead}/>)
                } else {
                    stars.push(<StarBorder key={i} className={this.props.classes.starsRead}/>)
                }
            }
        } else {
            for (let i = 0; i < 5; i++) {
                if (value - i >= 1) {
                    stars.push(
                        <IconButton
                            key={i}
                            className={classes.iconBtn}
                            color="primary"
                            onClick={() => onClickStar(++i)}
                        >
                            <Star/>
                        </IconButton>
                    )
                } else {
                    stars.push(
                        <IconButton
                            key={i}
                            className={classes.iconBtn}
                            onClick={() => onClickStar(++i)}>
                            <Star className={classes.starsNoReadEmpty}/>
                        </IconButton>
                    )
                }
            }
        }
        return stars
    }

    render() {
        const {classes, countReviews, value, isReadOnly} = this.props
        return (
            <React.Fragment>
                <div className={classes.root}>
                    {this.renderStars()}
                    <Typography variant="caption" className={classes.text}>
                        {isReadOnly ? countReviews && `${value.toFixed(2)} (${countReviews})` :
                            value !== 0 && `${value} ${value === 1 ? 'star' : 'stars'}`
                        }
                    </Typography>
                </div>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(StarsRating)