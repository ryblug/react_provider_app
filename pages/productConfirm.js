import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Redirect } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuDrawer from '../components/menuDrawer';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import { Grid } from '@material-ui/core';

import { authMiddleWare } from '../util/auth';

import { db } from '../config';

import customerLogo from '../images/providers/customer_logo_small.png';
import bigCustomerLogo from '../images/providers/customers_logo.png';
import addLogo from '../images/providers/category_add_big.png';

import "./login.css";

const firebase = require("firebase");
require("firebase/firestore");

const styles = (theme) => ({
    root: {
        display: 'flex',
        backgroundColor: "#fafafa"
    },
    cardRoot: {
        backgroundColor: '#fff',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        backgroundColor: '#53E7C3',
    },
    appBarText: {
        color: '#494B96',
        textAlign: "center"
    },
    toolbar: {
        justifyContent: "center"
    },
    mainNavigationText: {
        fontWeight: 'bold'
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(0),
        backgroundColor: "#fafafa"
    },
    captionText: {
        color: '#494B96',
        textAlign: "center"
    },
    gridTop: {
        backgroundColor: '#53E7C3',
        height: "4rem",
        width: "100%",
        textAlign: "center",        
    },
    gridBottom: {
        height: "1.5rem",
        width: "100%"
    },
    avatarLogo: {
        marginTop: "0.5rem",
        marginLeft: "0.5rem"
    },
    list: {
        padding: theme.spacing(3),
    },
    buttonRoot: {
        backgroundColor: '#53E7C3',
        color: '#494B96'
    },
    logo: {
        marginTop: "1rem",        
    },
    textContainer: {
        height: "100vh",
        position: "relative",
    },    
    verticalCenter: {
        margin: "0",
        position: "absolute",
        top: "30%",
        transform: "translateY(-30%)",
        width: "100%"
    },
    hide: {
        display: "none"
    }
});

class ProductConfirm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerName: '',
            isUpdate: ''
        };
    }

    componentDidMount() {
        authMiddleWare(this.props.history);
        const data = JSON.parse(localStorage.getItem('redirectData'));
        if (data && data['customerName']) {
            this.setState({
                customerName: data['customerName'],
                isUpdate: data['isUpdate']
            })
        }
    }

    render() {
        const { classes } = this.props;
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Customer
          					</Typography>
                        </Toolbar>
                    </AppBar>

                    <MenuDrawer />

                    <main className={classes.content}>
                        <Toolbar />
                        <Grid
                            fullWidth
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >

                            <Grid item fullWidth className={classes.gridTop}>
                                <img src={bigCustomerLogo} className={classes.logo} alt="" />
                            </Grid>
                            <Grid item fullWidth className={classes.gridBottom}></Grid>
                        </Grid>

                        <div className={classes.textContainer}>
                            <div className={classes.verticalCenter}>
                                <Typography variant="h6" className={`${classes.captionText} ${this.state.isUpdate === '1' ? '' : classes.hide}`}>
                                    Your updated information has been sent to {this.state.customerName}
          				        </Typography>

                                <Typography variant="h6" className={`${classes.captionText} ${this.state.isUpdate !== '1' ? '' : classes.hide}`}>
                                    Your Syncosa invite and product information has been sent to {this.state.customerName}
          				        </Typography>
                          </div>
                        </div>

                    </main>
                </div>
            );
        }
}

export default withStyles(styles)(ProductConfirm);