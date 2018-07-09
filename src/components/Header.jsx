import React, {Component} from 'react'
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux'
import {withRouter} from 'react-router'
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

const styles = {
    root: {
        flexGrow: 1,
        background: 'linear-gradient(-45deg, #1de9b6, #00b8d4)',
        padding: '0 100px',
    },
    flex: {
        flex: 1,
    },
    link: {
        display: 'block',
        textDecoration: 'none',
        color: 'inherit',
        '&:focus': {
            outline: 'none',
        },
    },
    tabs: {
        color: '#fff',
    },
}

class Header extends Component {
    state = {
        value: 0,
    }

    handleChange = (event, value) => {
        this.setState({value});
    }

    handleChangeLocation = () => {
        switch (this.props.history.location.pathname) {
            case ('/'):
                return this.setState({value: 0});
            case ('/signIn'):
                return this.setState({value: 1});
            case ('/signUp'):
                return this.setState({value: 2});
            default:
                return this.setState({value: 0});
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.history.location !== this.props.history.location) {
            console.log('this', nextProps.history.location)
            console.log('next', this.props.history.location)
        }
    }


    componentWillMount() {
        this.handleChangeLocation()
    }

    render() {
        const {classes} = this.props
        const {value} = this.state
        return (
            <AppBar position="static" color="primary" className={classes.root}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Product catalog
                    </Typography>
                    <Tabs
                        value={value}
                        onChange={this.handleChange}
                        className={classes.tabs}
                    >
                        <Tab label="Home" component={Link} to='/'/>
                        <Tab label="Login" component={Link} to='/signIn'/>
                        <Tab label="Register" component={Link} to='/signUp'/>
                    </Tabs>
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (store) => ({
    user: store.user
})

export default connect(mapStateToProps)(withRouter(withStyles(styles)(Header)))