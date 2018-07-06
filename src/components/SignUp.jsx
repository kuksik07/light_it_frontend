import React, {Component} from 'react'
import {Link} from "react-router-dom"
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
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'
import IconButton from '@material-ui/core/es/IconButton/IconButton'
import InputAdornment from '@material-ui/core/es/InputAdornment/InputAdornment'
import {signUp} from "../redux/actions/auth.action"

const styles = {
    card: {
        margin: '64px auto 0',
        textAlign: 'center',
        width: '350px',
    },
    cardActions: {
        display: 'block',
    },
    btn: {
        margin: '0 auto',
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
        margin: '0 auto',
    },
    pg8: {
        padding: '8px'
    },
    content: {
        width: '250px',
        margin: '0 auto'
    }
}

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            isPasswordMatch: true,
            showPassword: false,
            showConfirmPassword: false
        }
    }

    handleChange = name => event => {
        this.setState({
            [name]: event.target.value,
        })
    }

    handlePasswordMatch = async () => {
        if (this.state.password === this.state.confirmPassword) {
            await this.setState({
                isPasswordMatch: true,
            })
        } else {
            await this.setState({
                isPasswordMatch: false,
            })
        }
        return this.state.isPasswordMatch
    }

    handleSubmit = event => {
        event.preventDefault()
        let isPasswordError = this.handlePasswordMatch()
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        if (isPasswordError) {
            this.props.dispatch(signUp(user))
        }
    }

    componentDidUpdate(prevProps, prevStates, snapshot) {
        if (prevProps !== this.props) {
            this.props.user && this.props.user.success && this.props.history.push('/')
        }
    }

    handleMouseDownPassword = event => {
        event.preventDefault();
    };

    handleClickShowPassword = () => {
        this.setState(state => ({showPassword: !state.showPassword}));
    };

    handleClickShowConfirmPassword = () => {
        this.setState(state => ({showConfirmPassword: !state.showConfirmPassword}));
    };

    render() {
        const {isPasswordMatch} = this.state
        const {classes} = this.props
        return (
            <form onSubmit={this.handleSubmit}>
                <Card className={classes.card}>
                    <CardContent className={classes.content}>
                        <Typography variant="title">
                            Sign Up
                        </Typography>
                        <TextField
                            id="username"
                            label="Username"
                            onChange={this.handleChange('username')}
                            margin="normal"
                            fullWidth
                        />
                        <TextField
                            id="password"
                            label="Password"
                            onChange={this.handleChange('password')}
                            margin="normal"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={this.state.password}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                            {this.state.showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <TextField
                            id="confirmPassword"
                            label="Confirm password"
                            onChange={this.handleChange('confirmPassword')}
                            margin="normal"
                            type={this.state.showConfirmPassword ? 'text' : 'password'}
                            value={this.state.confirmPassword}
                            fullWidth
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowConfirmPassword}
                                            onMouseDown={this.handleMouseDownPassword}
                                        >
                                            {this.state.showConfirmPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <Typography variant="caption" color="error">
                            {!isPasswordMatch && 'Passwords do not match'}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button type='submit' className={classes.btn} color="primary">Sign Up</Button>
                        <Link to={'/signIn'} className={classes.link}>
                            <Typography variant="caption" className={classes.pg8}>
                                Have an account?
                            </Typography>
                        </Link>
                    </CardActions>
                </Card>
            </form>
        )
    }
}

const mapStateToProps = store => ({
    user: store.user
})

export default connect(mapStateToProps)(withStyles(styles)(SignUp))