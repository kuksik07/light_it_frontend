import React, {Component} from 'react'
import {Link} from "react-router-dom"
import PropTypes from 'prop-types';
import {withFormik} from 'formik'
import * as Yup from 'yup'
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
import {signIn} from '../redux/actions/auth.action'

const styles = {
    card: {
        margin: '64px auto 0',
        width: '350px'
    },
    cardActions: {
        display: 'block',
    },
    btn: {
        margin: '0 auto'
    },
    link: {
        textDecoration: 'none',
        color: 'inherit',
    },
}

class SignIn extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showPassword: false
        }
    }

    componentDidUpdate(prevProps, prevStates, snapshot) {
        if (prevProps !== this.props) {
            this.props.user && this.props.user.success && this.props.history.push('/')
        }
    }

    handleMouseDownPassword = event => {
        event.preventDefault();
    }

    handleClickShowPassword = () => {
        this.setState(state => ({showPassword: !state.showPassword}));
    }

    render() {
        const {
            classes,
            user,
            values,
            errors,
            touched,
            isSubmitting,
            handleChange,
            handleBlur,
            handleSubmit,
        } = this.props
        return (
            <form onSubmit={handleSubmit}>
                <Card raised className={classes.card}>
                    <CardContent>
                        <Typography variant="title" align="center">
                            Sign In
                        </Typography>
                        <TextField
                            error={errors.username && touched.username && true}
                            name="username"
                            label={errors.username && touched.username ? errors.username : 'Username'}
                            margin="normal"
                            value={values.username}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            fullWidth
                        />
                        <TextField
                            error={errors.password && touched.password && true}
                            name="password"
                            label={errors.password && touched.password ? errors.password : 'Password'}
                            margin="normal"
                            type={this.state.showPassword ? 'text' : 'password'}
                            value={values.password}
                            onChange={handleChange}
                            onBlur={handleBlur}
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
                        <Typography variant="caption" align="center" color="error">
                            {user && user.message}
                        </Typography>
                    </CardContent>
                    <CardActions className={classes.cardActions}>
                        <Button
                            variant="contained"
                            size="large"
                            type='submit'
                            color="primary"
                            disabled={isSubmitting}
                            fullWidth
                        >
                            Sign In
                        </Button>
                        <Link to={'/signUp'} className={classes.link}>
                            <Typography variant="body1" align="center">
                                No account? Sign up
                            </Typography>
                        </Link>
                    </CardActions>
                </Card>
            </form>
        )
    }
}

SignIn.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object,
    values: PropTypes.object.isRequired,
    touched: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired,
    isSubmitting: PropTypes.bool.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleBlur: PropTypes.func.isRequired,
    handleSubmit: PropTypes.func.isRequired,
}

SignIn.defaultProps = {
    user: null,
}

const mapStateToProps = store => ({
    user: store.user
})

export default connect(mapStateToProps)(withFormik({
    mapPropsToValues: () => ({
        username: '',
        password: '',
    }),

    validationSchema: Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        password: Yup.string()
            .min(6, 'The minimum password length is 6')
            .required('Password is required'),
    }),
    handleSubmit: (values, {props, setSubmitting}) => {
        setTimeout(() => {
            props.dispatch(signIn(values))
            setSubmitting(false)
        }, 500)
    },
    displayName: 'SignIn',
})(withStyles(styles)(SignIn)))