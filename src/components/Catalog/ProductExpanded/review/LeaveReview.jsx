import React, {Component} from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import {leaveReview} from "../../../../redux/actions/product.action";
import StarsRating from '../../../StarsRating';
import Typography from "@material-ui/core/es/Typography/Typography";

const styles = {
    root: {
        marginBottom: '16px',
    },
    btn: {
        display: 'block',
    },
    text: {
        margin: '8px 0 16px'
    }
}

class LeaveReview extends Component {
    state = {
        rate: 0,
        text: '',
    }

    handleChange = event => this.setState({
        text: event.target.value
    })

    handleSubmit = event => {
        event.preventDefault()
        this.props.dispatch(leaveReview(this.state, this.props.id))
    }

    onStarClick = value => this.setState({
        rate: value
    })

    render() {
        const {rate, text} = this.state
        const {classes} = this.props
        return (
            <div>
            <Typography gutterBottom variant="title">
                Leave a review
            </Typography>
            <div className={classes.root}>
                <form onSubmit={this.handleSubmit}>
                    <StarsRating
                        value={rate}
                        onClickStar={this.onStarClick.bind(this)}
                        isReadOnly={false}
                    />
                    <TextField
                        // error={errors.text && touched.text && true}
                        name="text"
                        // label={errors.text && touched.text ? errors.text : "Leave a review"}
                        label="Leave a review"
                        multiline
                        rows={"2"}
                        fullWidth
                        value={text}
                        onChange={this.handleChange}
                        // onBlur={handleBlur}
                        className={classes.text}
                    />
                    <Button
                        variant='contained'
                        type='submit'
                        color='primary'
                        margin="normal"
                        className={classes.btn}
                    >
                        Submit review
                    </Button>
                </form>
            </div>
            </div>
        )
    }
}

LeaveReview.propTypes = {
    classes: PropTypes.object.isRequired,
}

export default connect()(withStyles(styles)(LeaveReview))