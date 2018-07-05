import React, { Component } from 'react'
/*import axios from "axios/index";
import PropTypes from 'prop-types';*/
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';

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

class StarsRating extends Component{
    constructor(props){
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
        console.log(this.state)
    }

    render () {
        const { classes } = this.props
        return (
            <form onSubmit={this.handleSubmit}>
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
                        <Button className={classes.btn} color="primary" type='submit'>Sign In</Button>
                    </CardActions>
                </Card>
            </form>
        )
    }
}

export default withStyles(styles)(StarsRating)