import React, {Component} from 'react'
/*import axios from "axios/index";
import PropTypes from 'prop-types';*/
import {connect} from 'react-redux'
import {withStyles} from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import {signIn} from "../redux/actions/auth.action"

const styles = {
    card: {
        margin: '64px auto 0',
        textAlign: 'center',
        width: '350px',
    },
    btn: {
        margin: '0 auto',
    }
}

class StarsRating extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        this.props.dispatch(signIn(this.state))
    }

    render() {
        const {classes, user} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                {console.log(user)}
                <Card className={classes.card}>
                    <CardContent>
                        <Typography variant="title">
                            Sign In
                        </Typography>
                        <TextField
                            id="username"
                            label="Username"
                            onChange={this.handleChange('username')}
                            margin="normal"
                        />
                        <TextField
                            id="password"
                            label="Password"
                            onChange={this.handleChange('password')}
                            margin="normal"
                        />
                    </CardContent>
                    <CardActions>
                        <Button type='submit' className={classes.btn} color="primary">Sign In</Button>
                    </CardActions>
                </Card>
            </form>
        )
    }
}

export default connect()(withStyles(styles)(StarsRating))