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
import AccountCircle from "@material-ui/icons/es/AccountCircle";
import Button from "@material-ui/core/es/Button/Button";
import Menu from "@material-ui/core/es/Menu/Menu";
import MenuItem from "@material-ui/core/es/MenuItem/MenuItem";
import {logout} from "../redux/actions/auth.action";

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
    user: {
        display: 'flex',
    },
}

class Header extends Component {
    state = {
        value: 0,
        anchorEl: null
    }

    onLogout = () => {
        this.setState({ anchorEl: null })
        this.props.dispatch(logout())
    }

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget })
    }

    handleClose = () => {
        this.setState({ anchorEl: null })
    }

    handleChangeTab = (event, value) => {
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
        const {classes, user} = this.props
        const {value, anchorEl} = this.state
        console.log(user)
        return (
            <AppBar position="static" color="primary" className={classes.root}>
                <Toolbar>
                    <Typography variant="title" color="inherit" className={classes.flex}>
                        Product catalog
                    </Typography>
                    {!user ?
                        <Tabs
                            value={value}
                            onChange={this.handleChangeTab}
                            className={classes.tabs}
                        >
                            <Tab label="Home" component={Link} to='/'/>
                            <Tab label="Login" component={Link} to='/signIn'/>
                            <Tab label="Register" component={Link} to='/signUp'/>
                        </Tabs>
                        :
                        <div>
                            <Tab label="Home" component={Link} to='/'/>
                            <Button color="secondary" style={{minWidth: '160px'}} onClick={this.handleMenu}>
                                <AccountCircle/>
                                <Typography variant="body2" color="inherit" style={{marginLeft: '8px'}}>
                                    {localStorage.getItem('username')}
                                </Typography>
                            </Button>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorEl)}
                                onClose={this.handleClose}
                            >
                                <MenuItem onClick={this.handleClose}>Back</MenuItem>
                                <MenuItem onClick={this.onLogout}>Logout</MenuItem>
                            </Menu>
                        </div>
                    }
                </Toolbar>
            </AppBar>
        )
    }
}

const mapStateToProps = (store) => ({
    user: store.auth.user
})

export default connect(mapStateToProps)(withRouter(withStyles(styles)(Header)))