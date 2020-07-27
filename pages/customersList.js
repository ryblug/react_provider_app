import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Redirect } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuDrawer from '../components/menuDrawer';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import BackDrop from '../components/backDrop';
import AlertDialog from '../components/alertDialog';

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
        cursor: "pointer"
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
        color: "rgb(153, 153, 153, 1)",
        textAlign: "center"
    },
    gridTop: {
        backgroundColor: '#53E7C3',
        height: "3rem",
        width: "100%"
    },
    gridBottom: {
        height: "1.5rem",
        width: "100%"
    },
    avatarLogo: {
        marginTop: "0.5rem",
        marginLeft: "0.5rem",
        width: "5rem"
    },
    list: {
        padding: theme.spacing(3),
    },
    buttonRoot: {
        backgroundColor: '#53E7C3 !important',
        color: '#494B96',
        cursor: "pointer",
        height: "3rem"
    },
    deleteLogo: {
        color: '#494B96'
    },
    deleteDiv: {
        float: "right",
        marginTop: "-4.1rem",
        marginRight: "1rem"
    },
    noRecordsMessageBox: {
        marginTop: "7rem"
    },
    noRecordsMessage: {
        textAlign: "center",
        color: 'rgb(153, 153, 153, 1)',
        fontWeight: "bold",
        fontSize: "1.4rem",
    },
    buttonAvatar: {
        width: "3rem"
    },
    hidden: {
        display: "none"
    }
});

class CustomersList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            uiLoading: false,
            openAddPage: false,
            openDialog: false,
            openBackDrop: true,
        };
    }

    getStatus(status) {
        if (status === '1') {
            return 'No request has been made';
        } else if (status === '2') {
            return 'Request has been made but not accepted yet';
        } else if (status === '3') {
            return 'Connected';
        }
        return '';
    }

    componentDidMount() {
        authMiddleWare(this.props.history);
        const that = this;
        localStorage.setItem('customerID', '');
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

                var userId = firebase.auth().currentUser.uid;
                console.log('userId', userId);
                db.collection("syncosacustomer").where("userID", "==", userId)
                    //.get()
                    //.then
                    .onSnapshot(function (querySnapshot) {
                        const data = [];
                        querySnapshot.forEach((doc) => {
                            const userData = doc.data();
                            data.push({ id: doc.id, firstName: userData.firstName, status: that.getStatus(userData.status) });
                        });
                        that.setState({ userId, data, openBackDrop: false, count: 1 });
                    });
                // .catch(function (error) {
                //     console.log("Error getting documents: ", error);
                //     that.setState({ ...that.state, uiLoading: false });
                // });

            }
        });
    }

    openAddPage() {
        localStorage.setItem('editProductID', '');
        this.setState({
            openAddPage: true
        });
    }

    renderRedirect() {
        if (this.state.openAddPage) {
            return (
                <Redirect
                    to={`/customer-add`}
                />
            );
        }
    };

    processCustomerDelete = async () => {
        this.setState({
            openBackDrop: true,
            openDialog: false,
        });

        db.collection("syncosacustomer").doc(this.state.docId).delete();

        const sendNotification = firebase.functions().httpsCallable('deleteCustomer');
        const resp = await sendNotification({
            'syncosacustomerID': this.state.docId,
            'providerID': this.state.userId,
            'customerID': this.state.customerID
        });

        this.setState({
            openBackDrop: false,
        });
    }

    deleteCustomer(docId, customerID) {

        this.setState({
            openDialog: true,
            docId,
            customerID: customerID ? customerID : '',
            actionButtonTitle: 'Delete',
            actionClass: 'show',            
            handlePopupAction: this.processCustomerDelete,
            dialogTitle: 'Delete',
            dialogDescription: 'Are you sure you want to delete this customer?',
            cancelButtonTitle: 'Close'
        
        });      

    }

    openCustomerDetails = (id) => {
        localStorage.setItem('customerID', id);
        this.openAddPage();
    }

    handlePopupAction() {
        if (this.state.handlePopupAction) {
            this.state.handlePopupAction();
        }
    }

    render() {
        const { classes } = this.props;
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <AlertDialog that={this} open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupAction={this.handlePopupAction.bind(this)} handlePopupClose={() => this.setState({openDialog: false})} />
                    <BackDrop open={this.state.openBackDrop} />
                    {this.renderRedirect()}
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Customers
          					</Typography>
                        </Toolbar>
                    </AppBar>

                    <MenuDrawer />

                    <main className={classes.content}>
                        <Toolbar />
                        <Grid
                            fullWidth
                            container
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                        >

                            <Grid item fullWidth className={classes.gridTop}>
                                <img className={classes.avatarLogo} src={bigCustomerLogo} alt="" />
                            </Grid>
                            <Grid item fullWidth className={classes.gridBottom}></Grid>
                        </Grid>

                        <Typography variant="h6" noWrap className={classes.captionText}>
                            Select or add your customer
          				</Typography>

                        <div className={classes.list}>
                            {this.state.data.map((doc) => (

                                <div key={doc.id}>
                                <Card className={classes.cardRoot} onClick={() => this.openCustomerDetails(doc.id)} >
                                    <CardHeader
                                        avatar={
                                            <img alt="" aria-label={doc.firstName} className={classes.avatar} src={customerLogo} />
                                        }
                                        title={doc.firstName}
                                        subheader={doc.status}
                                    />
                                </Card>
                                <div className={classes.deleteDiv}>
                                <IconButton aria-label={doc.firstName} onClick={() => this.deleteCustomer(doc.id, doc['customerID'])}>
                                                <DeleteIcon className={classes.deleteLogo} />
                                            </IconButton>

                                </div>
                                </div>

                            ))}

                            <div className={`${this.state.data.length !== 0 || (this.state.openBackDrop && this.state.data.length === 0) ? classes.hidden : ''} ${classes.noRecordsMessageBox}`}>
                            <Typography className={classes.noRecordsMessage}>
                                No customers.
                            </Typography>
                            </div>

                        </div>

                        <div className={classes.list}>
                        <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                className={classes.buttonRoot}
                                                onClick={() => this.openAddPage()}
                                            >
                                                <img alt="" src={addLogo} className={classes.buttonAvatar} />
                                                Add a new customer
							
                                            </Button>


                        
                        </div>

                    </main>
                </div>
            );
        }
}

export default withStyles(styles)(CustomersList);