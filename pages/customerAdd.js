import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Redirect } from 'react-router-dom';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Avatar from '@material-ui/core/Avatar';
import MenuDrawer from '../components/menuDrawer';

import Divider from '@material-ui/core/Divider';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import AlertDialog from '../components/alertDialog';
import BackDrop from '../components/backDrop';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import { Grid } from '@material-ui/core';

import { authMiddleWare } from '../util/auth';
import * as libs from '../util/libs';

import { db } from '../config';

import customerLogo from '../images/providers/customer_logo_small.png';
// import bigCustomerLogo from '../images/providers/customers_logo.png';
import addProductLogo from '../images/providers/add_a_product.png';


import "./internal.css";

const firebase = require("firebase");
require("firebase/firestore");

const styles = (theme) => ({
    root: {
        display: 'flex',
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

    },
    form: {
        margin: '0 1rem 0 1rem'
    },
    formHeader: {
        color: '#53E7C3',
        fontWeight: 'bold',
        fontSize: "1.2rem"
    },
    captionText: {
        color: "rgb(153, 153, 153, 1)",
        textAlign: "center"
    },
    gridTop: {
        backgroundColor: '#53E7C3',
        height: "6rem",
        width: "100%",
        textAlign: "center",
        color: '#494B96',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        paddingTop: '0.5rem'
    },
    gridBottom: {

        marginTop: '-3rem',
        width: "100%"
    },
    avatarLogo: {
        /*marginTop: "0.5rem",
        marginLeft: "0.5rem"*/
    },
    list: {
        padding: theme.spacing(3),
    },
    greenButton: {
        backgroundColor: '#53E7C3 !important',
        color: '#494B96',
        height: "3rem"
    },
    submit: {
        marginTop: "1rem",
        backgroundColor: '#494B96 !important',
        height: "3rem"        
    },
    hidden: {
        display: "none"
    },
    greyButton: {
        backgroundColor: 'rgb(246, 246, 246, 1) !important',
        color: 'rgb(153, 153, 153, 1)',
        height: "3rem"
    },
    buttonImage: {
        height: "2.5rem"
    }
});

class CustomerAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            uiLoading: false,
            email: '',
            firstName: '',
            status: '',
            name: '',
            company: '',
            address: '',
            address2: '',
            address3: '',
            addressOpened: false,
            postcode: '',
            city: '',
            country: '',
            phone: '',
            mobile: '',
            notes: '',
            errors: [],
            openDialog: false,
            dialogTitle: '',
            dialogDescription: '',
            //handlePopupClose: null,
            handlePopupAction: null,
            actionButtonTitle: 'Connect',
            actionClass: 'show',
            currentStatus: '',
            userId: '',
            resp: null,
            customerID: '',
            customerExist: false,
            openBackDrop: false,
            openProductPage: false,
            realCustomerID: '',
            openViewProductsPage: false
        };
    }

    closePage = () => {
        this.setState({
            openDialog: false
        });
    }

    renderRedirect() {
        console.log('1');
        if (this.state.openProductPage) {
            console.log('2');
            return (
                <Redirect
                    to={`/product-add`}
                />
            );
        }
        if (this.state.openViewProductsPage) {
            return (
                <Redirect
                    to={`/products-list`}
                />
            );
        }        
    };

    processPopup = async () => {
        console.log('Here');
        this.setState({
            openDialog: false
        });
        console.log('Here2');

        this.saveCustomer({
            'firstName': this.state.resp.data['firstName'],
            'company': this.state.resp.data['company'],
            'address': this.state.resp.data['address'],
            'phone': this.state.resp.data['phone'],
            'mobile': this.state.resp.data['mobile'],
            'postcode': this.state.resp.data['postcode'],
            'city': this.state.resp.data['city'],
            'country': this.state.resp.data['country'],
            'email': this.state.email,
            'customerID': this.state.resp.data['customerID'],
            'status': '2'
        }, true, this.state.customerID);

        try {
            console.log('Here3', this.state.userId, this.state.email);
            const sendNotification = firebase.functions().httpsCallable('notifyCustomerAboutConnect');
            sendNotification({
                'providerID': this.state.userId,
                'customerEmail': this.state.email,
            });
        } catch (e) { }


    }

    checkCustomerEmail = (email) => {

        const sendNotification = firebase.functions().httpsCallable('checkCustomerEmail');
        const resp = sendNotification({
            'email': this.state.email
        });
    
        this.setState({customerExist: false});
    
        if (resp && resp.data && resp.data === 'exist') {
          this.setState({customerExist: true});
        }
    }

    disconnectFromCustomer = async () => {
        this.setState({
            loading: true
          });

        const sendNotification = firebase.functions().httpsCallable('disconnectFromCustomer');
        const resp = await sendNotification({
            'customerID': this.state.customerID,
            'providerID': this.state.userId
        });

          this.setState({
            loading: false,
            currentStatus: '1'
          });

        }
    
        connectToCustomer = async () => {
            console.log('11111');
            this.setState({
                loading: true
              });

            const sendNotification = firebase.functions().httpsCallable('notifyCustomerAboutConnect');
            const resp = await sendNotification({
                'customerEmail': this.state.email,
                'providerID': this.state.userId,
                'customerID': ''
            });
            console.log(resp);
    
              this.setState({
                loading: false,
                currentStatus: '1'
              });
            
          }
        

          handleConnect = () => {
            this.setState({
                openDialog: true,
                dialogTitle: 'Connect to customer',
                dialogDescription: 'Are you sure you want to connect to this customer?',
                actionButtonTitle: 'Connect',
                actionClass: 'show',
                cancelButtonTitle: 'Cancel',
                //handlePopupClose: this.closePage,
                handlePopupAction: this.connectToCustomer
            });
        }
    
    handleDisconnect = () => {
        this.setState({
            openDialog: true,
            dialogTitle: 'Disconnect from customer',
            dialogDescription: 'Are you sure you want to disconnect from this customer?',
            actionButtonTitle: 'Disconnect',
            actionClass: 'show',
            cancelButtonTitle: 'Cancel',
            //handlePopupClose: this.closePage,
            handlePopupAction: this.disconnectFromCustomer
        });
    }

    handleChange = (event) => {
        console.log(event.target.name + '=' + event.target.value);
        const addressFields = ['address', 'address2', 'address3', 'postcode', 'city', 'country'];
        let addressOpened = this.state.addressOpened;
        if (addressFields.indexOf(event.target.name) !== -1) {
            if (event.target.value) {
                addressOpened = true;
            } else {
                addressOpened = false;
            }
        }
        let newValue = event.target.value;
        if (event.target.name !== 'email') {
            newValue = libs.capitalizeFirstLetter(event.target.value)
        }
        this.setState({
            [event.target.name]: newValue,
            addressOpened
        });
    };

    componentDidMount() {
        authMiddleWare(this.props.history);
        const that = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

                var userId = firebase.auth().currentUser.uid;
                that.setState({ userId: userId, realCustomerID: localStorage.getItem('customerID'), customerID: localStorage.getItem('customerID') ? localStorage.getItem('customerID') : '' });
                console.log('userId', userId);

                if (localStorage.getItem('customerID')) {
                            db.collection("syncosacustomer").where("userID", "==", userId)
                            .onSnapshot(function (querySnapshot) {
                                querySnapshot.forEach((doc) => {
                                    const userData = doc.data();
                                    let addressOpened = false;
                                    if (userData['address'] || userData['address2'] || userData['address3'] || userData['postcode'] || userData['city'] || userData['country']) {
                                        addressOpened = true;
                                    }
                                    that.setState({
                                    'addressOpened': addressOpened,
                                    'firstName': userData['firstName'],
                                    'company': userData['company'],
                                    'address': userData['address'],
                                    'address2': userData['address2'],
                                    'address3': userData['address3'],
                                    'phone': userData['phone'],
                                    'mobile': userData['mobile'],
                                    'postcode': userData['postcode'],
                                    'city': userData['city'],
                                    'country': userData['country'],
                                    'email': userData['email'],
                                    'notes': userData['notes'],
                                    'currentStatus': userData['status'],
                                    });

                                    if (userData['email']) {
                                        that.checkCustomerEmail(userData['email']);
                                      }
  

                                });

                            });
        

              

            }
        }
        });
    }

    isEmail = (email) => {
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.match(emailRegEx)) return true;
        else return false;
    };

    saveCustomer(data, gotoToProduct, id) {


                var userId = this.state.userId;
                const customerID = localStorage.getItem('customerID');

                let that = this;
                // console.log(data, customerID);
                // return;
console.log('Here4');        

                if (customerID) {
                    db.collection("syncosacustomer").doc(customerID).set({
                        firstName: data['firstName'],
                        company: data['company'] ? data['company'] : '',
                        address: data['address'] ? data['address'] : '',
                        address2: data['address2'] ? data['address2'] : '',
                        address3: data['address3'] ? data['address3'] : '',
                        phone: data['phone'] ? data['phone'] : '',
                        postcode: data['postcode'] ? data['postcode'] : '',
                        city: data['city'] ? data['city'] : '',
                        country: data['country'] ? data['country'] : '',
                        mobile: data['mobile'] ? data['mobile'] : '',
                        notes: '',
                        status: data['status'],
                    })
                        .then(function () {
                            this.setState({
                                openBackDrop: false
                            });                    
                            console.log("Document successfully written!");

                            if (gotoToProduct) {

                                    localStorage.setItem({
                                        id: '',
                                        title: '',
                                        iconName: '',
                                        categoryType: 'Household',
                                        customerId: customerID,
                                        customerName: this.state.firstName,
                                        customerEmail: this.state.email,
                                        priority: 1});

                                        this.setState({openProductPage: true});
                      

                            } else {
                                that.setState({
                                    loading: false,
                                    openDialog: true,
                                    dialogTitle: 'Customer info',
                                    dialogDescription: 'Customer info saved.',
                                    cancelButtonTitle: 'OK',
                                    actionButtonTitle: '',
                                    actionClass: 'hide'
                                });
                            }
                        })
                        .catch(function (error) {
                            that.setState({
                                loading: false,
                                openBackDrop: false,
                                openDialog: true,
                                dialogTitle: 'Error',
                                dialogDescription: error.message,
                                cancelButtonTitle: 'OK',
                                actionButtonTitle: '',
                                actionClass: 'hide'
                            });
                            console.error("Error writing document: ", error);
                        });
                } else {

                    db.collection("syncosacustomer").add({
                        userID: userId,
                        firstName: data['firstName'],
                        company: data['company'] ? data['company'] : '',
                        address: data['address'] ? data['address'] : '',
                        address2: data['address2'] ? data['address2'] : '',
                        address3: data['address3'] ? data['address3'] : '',
                        phone: data['phone'] ? data['phone'] : '',
                        mobile: data['mobile'] ? data['mobile'] : '',
                        postcode: data['postcode'] ? data['postcode'] : '',
                        city: data['city'] ? data['city'] : '',
                        country: data['country'] ? data['country'] : '',
                        email: data['email'],
                        emailSmall: data['email'],
                        notes: '',
                        customerID: data['customerID'],
                        status: data['status'],
                        timestamp: Date.now()
                    })
                        .then(function (docRef) {
                            console.log("Document successfully written!");
                            console.log(docRef);
                            localStorage.setItem('customerID', docRef.id);

                            that.setState({
                                openBackDrop: false,
                                realCustomerID: docRef.id,
                                customerID: docRef.id,
                            });                    

                            if (gotoToProduct) {

                            } else {
                                that.setState({
                                    loading: false,
                                    openDialog: true,
                                    dialogTitle: 'Customer info',
                                    dialogDescription: 'Customer info saved.',
                                    cancelButtonTitle: 'OK',
                                    actionButtonTitle: '',
                                    actionClass: 'hide',
                                    handlePopupAction: '',
                                    customerID: docRef.id
                                });
                            }
                        })
                        .catch(function (error) {
                            that.setState({
                                openBackDrop: false
                            });                    

                            that.setState({
                                loading: false,
                                openDialog: true,
                                dialogTitle: 'Error',
                                dialogDescription: error.message,
                                cancelButtonTitle: 'OK',
                                actionButtonTitle: '',
                                actionClass: 'hide',
                                handlePopupAction: '',
                            });

                            console.error("Error writing document: ", error);
                        });

                    //                    that.checkCustomer(that.state.email, userId);
                }

    }

    handleSubmit = async (event) => {
        event.preventDefault();

        if (!this.state.firstName) {
            console.log('Submit');            
            this.setState({
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Name" field.',
                cancelButtonTitle: 'Close',
                actionButtonTitle: '',
                actionClass: 'hide'
            });
            return;
        }

        if (!this.state.email) {
            this.setState({
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Email" field.',
                cancelButtonTitle: 'Close',
                actionButtonTitle: '',
                actionClass: 'hide'
            });
            return;
        }

        if (!this.isEmail(this.state.email)) {
            this.setState({
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Wrong Email format.',
                cancelButtonTitle: 'Close',
                actionButtonTitle: '',
                actionClass: 'hide'
            });
            return;
        }

        this.setState({
            openBackDrop: true
        });


        if (this.state.currentStatus === '' || this.state.currentStatus === '1') {

            let resp = '';
            try {
                const sendNotification = firebase.functions().httpsCallable('getCustomerByEmail');
                resp = await sendNotification({
                    email: this.state.email,
                    providerID: this.state.userId
                });
            } catch (e) { }

            this.setState({ openBackDrop: false, resp: resp });

            console.log('resp: ', resp);

            if (resp && resp.data && resp.data['firstName'] && !resp.data['error']) {
                this.setState({
                    openDialog: true,                    
                    dialogTitle: 'Customer found',
                    dialogDescription: 'This customer is already a Syncosa customer. Would you like to connect?',
                    actionButtonTitle: 'Connect',
                    actionClass: 'show',
                    cancelButtonTitle: 'Cancel',
                    //handlePopupClose: this.closePage,
                    handlePopupAction: this.processPopup
                });
                return;
            }

            if (resp &&
                resp.data &&
                resp.data['error']) {

                this.setState({
                    openDialog: true,
                    dialogTitle: 'Error',
                    dialogDescription: resp.data['error'],
                    actionButtonTitle: '',
                    actionClass: 'hide',
                    cancelButtonTitle: 'Close',
                    //handlePopupClose: this.closePage,
                    handlePopupAction: null
                });

                return;
            }

        }

        var status = '1';

        if (this.state.customerID) {

            console.log('customerID', this.state.customerID);

            var docRef = db.collection("syncosacustomer").doc(this.state.customerID);

            await docRef
                .get()
                .then(function (doc) {
                    if (doc.exists) {
                        const data = doc.data();
                        status = data['status'];
                    } else {
                        // doc.data() will be undefined in this case
                        console.log("No such document!");
                    }
                }).catch(function (error) {
                    console.log("Error getting document:", error);
                });

        }

        this.saveCustomer({
            'firstName': this.state.firstName,
            'company': this.state.company,
            'address': this.state.address,
            'address2': this.state.address2,
            'address3': this.state.address3,                        
            'phone': this.state.phone,
            'mobile': this.state.mobile,
            'postcode': this.state.postcode,
            'city': this.state.city,
            'country': this.state.country,
            'email': this.state.email,
            'customerID': this.state.customerID,
            'status': status
        }, false, this.state.customerID);



    }

    storeState() {
        localStorage.setItem('categoryData', JSON.stringify({
            itemId: '',
            image: '',
            serialnumberimage: '',
            currentItemValues: '',
            title: '',
            syncosaCustomerId: this.state.customerID,
            customerId: this.state.realCustomerID,
            customerName: this.state.name            
        }));
    }

    openViewProductPage = () => {
        this.storeState();
        this.setState({openViewProductsPage: true});        
    }

    openAddProductPage = () => {
        this.storeState();
        this.setState({openProductPage: true});        
    }

    handlePopupAction() {
        if (this.state.handlePopupAction) {
            this.state.handlePopupAction();
        }
    }

    render() {
        const { classes } = this.props;
        const { errors, uiLoading } = this.state;
        if (this.state.uiLoading === true) {
            return (
                <div className={classes.root}>
                    {this.state.uiLoading && <CircularProgress size={150} className={classes.uiProgess} />}
                </div>
            );
        } else {
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupAction={this.handlePopupAction.bind(this)} handlePopupClose={() => this.setState({openDialog: false})} />
                    <BackDrop open={this.state.openBackDrop} />
                    {this.renderRedirect()}
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
                            direction="column"
                            justify="flex-start"
                            alignItems="flex-start"
                        >

                            <Grid item fullWidth className={classes.gridTop}>
                                Add
                            </Grid>
                            <Grid item fullWidth className={classes.gridBottom}>

                                <Card className={classes.form}>
                                    <CardContent>
                                        <form className={classes.form} noValidate>
                                            <Typography className={classes.formHeader}>
                                                Customer details
                                    </Typography>

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                required
                                                fullWidth
                                                id="firstName"
                                                label="Name"
                                                name="firstName"
                                                value={this.state.firstName}
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                required
                                                name="email"
                                                value={this.state.email}
                                                label="Email"
                                                id="email"
                                                type="email"
                                                helperText={errors.email}
                                                error={errors.email ? true : false}
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="company"
                                                value={this.state.company}
                                                label="Company"
                                                id="company"
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="address"
                                                value={this.state.address}
                                                label="Address"
                                                id="address"
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="address2"
                                                className={this.state.addressOpened ? '' : classes.hidden}
                                                value={this.state.address2}
                                                label="Address line 2"
                                                id="address2"
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="address3"
                                                className={this.state.addressOpened ? '' : classes.hidden}
                                                value={this.state.address3}
                                                label="Address line 3"
                                                id="address3"
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="postcode"
                                                className={this.state.addressOpened ? '' : classes.hidden}
                                                value={this.state.postcode}
                                                label="Post code"
                                                id="postcode"
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="city"
                                                className={this.state.addressOpened ? '' : classes.hidden}
                                                value={this.state.city}
                                                label="Town / City"
                                                id="city"
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="country"
                                                className={this.state.addressOpened ? '' : classes.hidden}
                                                value={this.state.country}
                                                label="Country"
                                                id="country"
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="phone"
                                                value={this.state.phone}
                                                label="Phone number"
                                                id="phone"
                                                type="tel"
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="mobile"
                                                value={this.state.mobile}
                                                label="Mobile number"
                                                id="mobile"
                                                type="tel"
                                                onChange={this.handleChange}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="notes"
                                                value={this.state.notes}
                                                label="Notes"
                                                id="notes"
                                                onChange={this.handleChange}
                                            />
                                            <Button
                                                type="submit"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                onClick={this.handleSubmit}
                                                //disabled={uiLoading || !this.state.email|| !this.isEmail(this.state.email) || !this.state.firstName}
                                            >
                                                Save
							
                                            </Button>

                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                className={`${classes.greyButton} ${this.state.currentStatus === '1' && this.state.customerID && this.state.customerExist ? '' : classes.hidden}`}
                                                onClick={this.handleConnect}
                                            >
                                                Connect
							
                                            </Button>

                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                className={`${classes.greyButton} ${this.state.currentStatus === '3' ? '' : classes.hidden}`}
                                                onClick={this.handleDisconnect}
                                            >
                                                Disconnect
							
                                            </Button>

                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                className={`${classes.greenButton} ${this.state.customerID ? '' : classes.hidden}`}
                                                onClick={this.openViewProductPage}
                                            >
                                                View Products
							
                                            </Button>

                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                className={`${classes.greenButton} ${this.state.customerID ? '' : classes.hidden}`}
                                                onClick={this.openAddProductPage}
                                            >
                                                <img alt="" src={addProductLogo} className={classes.buttonImage} />
                                               Add a product 
							
                                            </Button>


                                        </form>
                                    </CardContent>
                                </Card>

                            </Grid>
                        </Grid>



                    </main>
                </div>
            );
        }

    }

}

export default withStyles(styles)(CustomerAdd);