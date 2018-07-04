import React, { Component} from 'react'
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const styles = {
    root: {
        flexGrow: 1,
        background: '#212121',
        padding: '0 100px'
    },
    flex: {
        flex: 1,
    },
}

class Header extends Component {
    render () {
        const { classes } = this.props
        return (
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Product catalog
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBar>
        )
    }
}

export default withStyles(styles)(Header);