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
    captionText1: {
        color: '#000000',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.4rem"
    },
    captionText2: {
        color: '#000000',
        textAlign: "center",
        fontSize: "1rem"
    },
    captionText3: {
        color: '#000000',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.2rem"
    },
    captionText4: {
        color: '#000000',
        textAlign: "center",
        fontSize: "1rem"
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

class AboutUs extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    componentDidMount() {
        authMiddleWare(this.props.history);
    }

    render() {
        const { classes } = this.props;
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                About Us
          					</Typography>
                        </Toolbar>
                    </AppBar>

                    <MenuDrawer />

                    <main className={classes.content}>
                        <Toolbar />

                        <div className={classes.textContainer}>
                            <div className={classes.verticalCenter}>
                                <Typography variant="h6" className={`${classes.captionText1}`}>
                                    We want to help you<br />'Get in Sync'<br />with your customers
			        </Typography>
			        <p></p>
                                <Typography variant="h6" className={`${classes.captionText2}`}>
                                Syncosa is a small and nimble privately owned organisation that is big on great ideas to help make your life easier.<br /><br />
                                Our team members are highly innovative and make use of technology to enhance the lives of real people.<br /><br />
                                Syncosa offers a, simple to use, digital tool that fits seamlessly into your busy lives.<br /><br />
                                We are not bogged down by big corporate inefficiencies and can react quickly to ensure that we keep delivering the features that you need.

          				        </Typography>

                                  <p></p>

                                  <Typography variant="h6" className={`${classes.captionText3}`}>
                                  Welcome to Syncosa
			        </Typography>

                    <p></p>

                                <Typography variant="h6" className={`${classes.captionText3}`}>
					Life’s better in Sync!
			        </Typography>

                    <p></p>

                                <Typography variant="h6" className={`${classes.captionText4}`}>
					build 1.0.0 (36)
			        </Typography>
                          </div>
                        </div>

                    </main>
                </div>
            );
        }
}

export default withStyles(styles)(AboutUs);