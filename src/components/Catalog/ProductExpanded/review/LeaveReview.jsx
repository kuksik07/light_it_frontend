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
        marginBottom: '16px'
    }
}

class LeaveReview extends Component {
    state = {
        rate: 0,
        text: '',
        errors: {
            rate: '',
            text: '',
        },
        isSubmitting: false
    }

    handleChange = event => {
        this.setState({
            text: event.target.value
        })
        this.handleTextError(event.target.value)
    }

    componentWillUpdate(nextProps, nextStates, snapshot) {
        if (nextStates.rate !== this.state.rate) {
            if (!nextStates.isSubmitting) {
                this.handleRateError(nextStates.rate)
            } else {
                this.setState({
                    isSubmitting: false
                })
            }
        }
    }

    handleRateError = rate => {
        let error = this.state.errors
        error.rate = rate === 0 ? "Please rate" : ''
        this.setState({
            errors: error
        })
    }

    handleTextError = text => {
        let error = this.state.errors
        error.text = !text ? "Please fill in this field" : ''
        this.setState({
            errors: error
        })
    }

    handleBlur = () => {
        this.handleTextError(this.state.text)
    }

    handleSubmit = event => {
        event.preventDefault()
        if (this.state.rate !== 0 && this.state.text) {
            let review = {rate: this.state.rate, text: this.state.text}
            this.props.dispatch(leaveReview(review, this.props.id))
            this.setState({
                rate: 0,
                text: '',
                isSubmitting: true
            })
        } else {
            if (!this.state.text) this.handleTextError(this.state.text)
            if (this.state.rate === 0) this.handleRateError(this.state.rate)
        }
    }

    onStarClick = value => this.setState({
        rate: value !== this.state.rate ? value : 0
    })

    render() {
        const {rate, text} = this.state
        const {classes} = this.props
        return (
            <div>
                <Typography gutterBottom variant="title">
                    Send a review
                </Typography>
                <div className={classes.root}>
                    <form onSubmit={this.handleSubmit}>
                        <Typography color="error" variant="caption">
                            {this.state.errors.rate}
                        </Typography>
                        <StarsRating
                            value={rate}
                            onClickStar={this.onStarClick.bind(this)}
                            isReadOnly={false}
                        />
                        <TextField
                            error={!!this.state.errors.text}
                            name="text"
                            label={this.state.errors.text ? this.state.errors.text : "Leave a review"}
                            multiline
                            rows={"2"}
                            fullWidth
                            value={text}
                            onChange={this.handleChange}
                            onBlur={this.handleBlur}
                            className={classes.text}
                        />
                        <Button
                            variant='contained'
                            type='submit'
                            color='primary'
                            margin="normal"
                            className={classes.btn}
                        >
                            Submit
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