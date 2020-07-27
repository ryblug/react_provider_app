/* eslint-disable no-use-before-define */
import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import {
     CardNumberElement,
     CardExpiryElement,
     CardCvcElement,
} from "@stripe/react-stripe-js";
import {CardElement, Elements, ElementsConsumer, StripeElementWrapper} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import StripeInput from "../components/StripeInput";
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import * as libs from '../util/libs';

import DatePicker from "react-datepicker";

import { Redirect } from 'react-router-dom';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Avatar from '@material-ui/core/Avatar';
import MenuDrawer from '../components/menuDrawer';
import AddFieldDialog from '../components/addFieldDialog';
import ImagePreview from '../components/imagePreview';
import Autocomplete from '@material-ui/lab/Autocomplete';

import InputAdornment from '@material-ui/core/InputAdornment';
import EventNoteIcon from '@material-ui/icons/EventNote';

import Divider from '@material-ui/core/Divider';

import BackDrop from '../components/backDrop';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import AlertDialog from '../components/alertDialog';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';

import addLogo from '../images/providers/add_booking.png';

import DeleteIcon from '@material-ui/icons/Delete';

import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    //KeyboardTimePicker,
    KeyboardDatePicker,
} from '@material-ui/pickers';

import { Grid } from '@material-ui/core';

import { authMiddleWare } from '../util/auth';

import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

import { db, STRIPE_KEY } from '../config';

import customerLogo from '../images/providers/customer_logo_small.png';
// import bigCustomerLogo from '../images/providers/customers_logo.png';
import addProductLogo from '../images/providers/add_a_product.png';
import photoLogo from '../images/providers/photo.png';
import sendToCustomer from '../images/providers/send_to_customer.png';


import "./internal.css";

import vehicle_make from "../json/vehicle_make.json";
import vehicle_model from "../json/vehicle_model.json";

import "react-datepicker/dist/react-datepicker.css";

const firebase = require("firebase");
require("firebase/firestore");

const stripePromise = loadStripe(STRIPE_KEY, {locale: 'en'});

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    cardRoot: {
        backgroundColor: '#fff',
        boxShadow: "none"
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
        height: "100vh",
        position: "relative",
    },
    form: {
        margin: '0 1rem 0 1rem'
    },
    formHeader: {
        color: '#53E7C3',
        fontWeight: 'bold',
        marginBottom: '0.7rem'
    },
    captionText: {
        color: "rgb(153, 153, 153, 1)",
        textAlign: "center"
    },
    gridTop: {
        //backgroundColor: '#53E7C3',
        height: "5rem",
        width: "100%",
        textAlign: "center",
        color: '#494B96',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        paddingTop: '1rem'
    },
    gridImage: {
        width: "100%",
        textAlign: "center",
        marginBottom: "3.5rem",
        marginTop: "1rem"
    },
    gridBottom: {
        marginTop: '-3rem',
        width: "100%",
        backgroundColor: "#fcfcfc"
    },
    imagePhoto: {
        marginTop: '-1rem',        
    },
    imagePhotoPreview: {
        maxWidth: '25rem',
        borderRadius: "15px",
        border: "2px solid #cccccc",
        overflow: "hidden"
    },
    avatarLogo: {
        /*marginTop: "0.5rem",
        marginLeft: "0.5rem"*/
    },
    list: {
        //padding: theme.spacing(3),
    },
    greenButton: {
        backgroundColor: '#53E7C3',
        color: '#494B96',
    },
    hidden: {
        display: "none"
    },
    greyButton: {
        backgroundColor: 'rgb(246, 246, 246, 1)',
        color: 'rgb(153, 153, 153, 1)'
    },
    serialPhoto: {
        marginTop: '0.7rem'
    },
    viewButton: {
        backgroundColor: '#53E7C3',
        color: '#ffffff',
        marginTop: '1.25rem'
    },
    // viewButton: {
    //     backgroundColor: 'rgb(246, 246, 246, 1)',
    //     color: '#494B96',
    //     marginTop: '1.25rem'
    // },
    viewImageButton: {
        backgroundColor: '#494B96',
        color: '#ffffff',
        marginTop: '0.25rem',
        width: "10rem"
    },
    addField: {
        color: '#ffffff',
        backgroundColor: '#53E7C3',
        width: '10rem',
        marginTop: "1rem"
    },
    inputFile: {
        display: 'none',
    },
    customerTitle: {
        color: '#494B96',
        fontWeight: 'bold',
    },
    addedTo: {
        color: 'rgb(153, 153, 153, 1)'
    },
    dateIcon: {
        color: '#494B96',
    },
    formControl: {
        marginBottom: "0.5rem"
    },
    filterDropdown: {
        marginBottom: "0.5rem",
        backgroundColor: "#fcfcfc"
    },
    buttonImage: {
        height: "2.5rem"
    },
    navigationButton: {
        width: "6rem"
    },
    switchButton: {
        textAlign: 'center',
        color: '#ffffff',
        backgroundColor: '#494B96',
        width: '100%',
        marginBottom: "1rem",
        marginTop: "1rem",
    },
    cardTitleText: {
        color: "#53E7C3",
        fontSize: "1rem"
    },
    cardSubTitleText: {
        color: "#494B96",
        fontSize: "1rem"
    },
    cardHeader: {
        alignItems: "unset"
    },
    cardContent: {
        marginTop: "-5rem"
    },
    greenBox: {
        /*backgroundColor: '#53E7C3',*/
        paddingLeft: "1rem",
        paddingRight: "1rem",
        height: "11rem"
    },
    greenDetailsBox: {
        backgroundColor: '#53E7C3',
        paddingLeft: "1rem",
        paddingRight: "1rem",
        height: "11rem"
    },
    contentBox: {
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginTop: "2rem"
    },
    contentDetailsBox: {
        height: "100vh",
        backgroundColor: "#fcfcfc",
        marginTop: "3rem"
    },
    divider: {
        backgroundColor: '#53E7C3',
        height: "0.2rem"
    },
    cardList: {
        backgroundColor: "#fff",
        borderRadius: "1rem"
    },
    saveButton: {
        color: '#ffffff',
        backgroundColor: '#494B96 !important',
        height: "3rem"
    },
    changeTimeButton: {
        color: '#999999',
        backgroundColor: '#F6F6F6',
    },
    changeTimeText: {
        textAlign: "center"
    },
    viewAsListButton: {
        marginTop: "1rem",        
    },
    buttonRoot: {
        backgroundColor: '#53E7C3',
        color: '#494B96',
        marginTop: "1rem"
    },
    dateTitle: {
        textAlign: "center",
        color: "#494B96",
        fontSize: "1ren"
    },
    cardDiv: {
        border: "1px solid rgba(0, 0, 0, 0.24) !important",
        padding: "18.5px 10px !important",
        margin: "0 !important",
        borderRadius: "4px !important"
    },
    spaceBlock: {
        marginBottom: "1.4rem"
    },
    cancelButton: {
        color: '#ffffff',
        backgroundColor: '#53E7C3 !important',
        height: "3rem"
    }
});

class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            company: '',
            address: '',
            postcode: '',
            city: '',
            country: '',
            phone: '',
            mobile: '',
            userPlan: '',
            userPlanTitle: 'Free',
            openBackDrop: true,
            openDialog: false,
            userId: '',
            selectedPlan: '',
            receivedPlans: []
        };
    }

    handlePlanChange = (event) => {
      this.setState({selectedPlan: event.target.value});
    };

    componentDidMount() {
        authMiddleWare(this.props.history);
        const that = this;
        firebase.auth().onAuthStateChanged(async function (user) {
            if (user) {

                var userId = firebase.auth().currentUser.uid;

                var doc = await db.collection(
                  'users').doc(userId).get();
              
                const data = doc.data();

                that.setState({
                  userId: userId,
                  name: data['firstName'],
                  email: data['email'],
                  address: data['address'],
                  city: data['city'],
                  country: data['country'],
                  postcode: data['postcode'],
                  company: data['company'],
                  phone: data['phone'],
                  mobile: data['mobile'],
                  userPlan: data['plan'] ? data['plan'] : ''
                }, () => {
                  that.getPlans();
                });

            }
        });
    }

    getPlans() {
      if (this.state.userPlan === 'Lifetime') {
        this.setState({userPlanTitle: 'Free Unlimited'});
      }
      const that = this;
      db.collection("subscription_plans_provider")
      .get()
      .then(function (querySnapshot) {
          const receivedPlans = [];
          let userPlanTitle = '';
          let selectedPlan = '';
          querySnapshot.forEach(function(doc, index) {

            const plan = doc.data();

            if (plan['planID'] === that.state.userPlan) {
              userPlanTitle = plan['title'];
              selectedPlan = plan['planID'];
            }
            if (plan['planID']) {
              receivedPlans.push({
              'title': plan['title'],
              'index': index,
              'price': plan['price'],
              'planID': plan['planID'],
              });
            } 
          });
          that.setState({
              userPlanTitle,
              selectedPlan,
              receivedPlans,
              openBackDrop: false
          });
      });

    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

      async saveInfo() {
        if (!this.state.name) {
            this.setState({
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Name" field.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        if (!this.state.email) {
            this.setState({
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Email" field.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        const that = this;

        this.setState({
            openBackDrop: true
        });

        db.collection("users").doc(this.state.userId).set(libs.checkValuesInObject({
                  name: this.state.name,
                  address: this.state.address,
                  city: this.state.city,
                  country: this.state.country,
                  postcode: this.state.postcode,
                  company: this.state.company,
                  phone: this.state.phone,
                  mobile: this.state.mobile,
        }), { merge: true })
            .then(function () {
               that.setState({
                   openBackDrop: false,
                   openDialog: true,
                   dialogTitle: 'Profile info',
                   dialogDescription: 'Info saved.',
                   cancelButtonTitle: 'OK',
                   actionButtonTitle: '',
                   actionClass: 'hide',
                   handlePopupAction: '',
               });
            })
            .catch(function (error) {
                that.setState({
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

    }

    async cancelSubscription() {
        this.setState({
            openBackDrop: true
        });

        try {
          const callCloudFunction = firebase.functions().httpsCallable('cancelSubscription');
          console.log('this.state.userId', this.state.userId);
          const resp = await callCloudFunction({
              userID: this.state.userId
          });
    
          if (resp && resp.data === 'ok') {
            this.setState({
                openBackDrop: false,
                userPlan: '',
                selectedPlan: '',
                userPlanTitle: 'Free'  
              });    
            return;
          } else {
            this.setState({
                openBackDrop: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Error occurred during canceling subscription.',
                cancelButtonTitle: 'OK',
                actionButtonTitle: '',
                actionClass: 'hide'    
              });    

            return;
          }
        } catch (e) {
              this.setState({
                openBackDrop: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Error occurred while trying to cancel subscription.',
                cancelButtonTitle: 'OK',
                actionButtonTitle: '',
                actionClass: 'hide'    
              });    
          return;
        }
    }   

    async createSubscription(paymentmethodID) {
        let result = '';

        const callCloudFunction = firebase.functions().httpsCallable('createSubscription');
        const resp = await callCloudFunction({
            email: this.state.email,
            name: this.state.name,
            plan: this.state.userPlan,
            paymentmethodID: paymentmethodID  
        });

        if (resp && resp.data) {
          result = resp.data;
        }
        if (result === 'ok') {
          let _userPlanTitle = '';
          let _selectedPlan = '';
          this.state.receivedPlans.forEach((plan) => {
            if (plan['planID'] === this.state.userPlan) {
              _userPlanTitle = plan['title'];
              _selectedPlan = plan['planID'];
            }
          });
          this.setState({
            openBackDrop: false,
            openDialog: true,
            userPlanTitle: _userPlanTitle,
            selectedPlan: _selectedPlan,
            dialogTitle: 'Success',
            dialogDescription: 'You are subscribed.',
            cancelButtonTitle: 'OK',
            actionButtonTitle: '',
            actionClass: 'hide'    
          });
          return;
        } else {
            this.setState({
                openBackDrop: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Error occurred during subscription.',
                cancelButtonTitle: 'OK',
                actionButtonTitle: '',
                actionClass: 'hide'    
              });    
          return;
        }
    }
    
    buyPlan = async (elements, stripe) => {
      if (!this.state.userPlan) {
            this.setState({
                openBackDrop: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Please select plan.',
                cancelButtonTitle: 'Close',
                actionButtonTitle: '',
                actionClass: 'hide'    
            });
            return;
      }
        if (!stripe || !elements) {
          // Stripe.js has not loaded yet. Make sure to disable
          // form submission until Stripe.js has loaded.
          return;
        }

        this.setState({
            openBackDrop: true
        });
    
        const cardElement = elements.getElement(CardElement);
    
        const {error, paymentMethod} = await stripe.createPaymentMethod({
          type: 'card',
          card: cardElement,
        });
    
        if (error) {
          console.log('[error]', error);
          this.setState({
            openBackDrop: false,
            openDialog: true,
            dialogTitle: 'Error',
            dialogDescription: error.message,
            cancelButtonTitle: 'OK',
            actionButtonTitle: '',
            actionClass: 'hide'    
          });    
        } else {
          console.log('[PaymentMethod]', paymentMethod);
          this.createSubscription(paymentMethod.id);
        }

    }

    handlePopupAction() {
        if (this.state.handlePopupAction) {
            this.state.handlePopupAction();
        }
    }

    selectPlan(id) {
        this.setState({
            userPlan: id
        });
    }

    MyInputComponent(props) {
        const { component: Component, inputRef, ...other } = props;
      
        // implement `InputElement` interface
        React.useImperativeHandle(inputRef, () => ({
          focus: () => {
            // logic to focus the rendered component from 3rd party belongs here
          },
          // hiding the value e.g. react-stripe-elements
        }));
      
        // `Component` will be your `SomeThirdPartyComponent` from below
        return <Component {...other} />;
      }

stripeComponent() {
    return (
        <Elements stripe={stripePromise}>
        <CardNumberElement />
        </Elements>
//         <Elements stripe={stripePromise}>

//                                            <CardNumberElement
//   options={{
//     style: {
//       base: {
//         fontSize: '1rem',
//         color: '#424770',
//         '::placeholder': {
//           color: '#aab7c4',
//         },
//       },
//       invalid: {
//         color: '#9e2146',
//       },
//     },
//   }}
// />                                               
//     </Elements>
    );
}

    render() {
        const { classes } = this.props;
        const {stripe} = this.props;
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupAction={this.handlePopupAction.bind(this)} handlePopupClose={() => this.setState({openDialog: false})} />
                    <BackDrop open={this.state.openBackDrop} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Profile
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <MenuDrawer />

                    <main className={classes.content}>
                        <Toolbar />

                            <div className={classes.contentDetailsBox}>
                            <Grid item fullWidth className={classes.gridBottom}>

                                <Card className={classes.form}>
                                    <CardContent>
                                        <form className={classes.form} noValidate>

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="name"
                                                label="Name *"
                                                id="name"
                                                onChange={this.handleChange}
                                                value={this.state.name}
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="email"
                                                label="Email *"
                                                id="email"
                                                readOnly={true}
                                                value={this.state.email}
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="company"
                                                label="Company"
                                                id="company"
                                                onChange={this.handleChange}
                                                value={this.state.company}
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="address"
                                                label="Address"
                                                id="address"
                                                onChange={this.handleChange}
                                                value={this.state.address}
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="postcode"
                                                label="Postcode"
                                                id="postcode"
                                                onChange={this.handleChange}
                                                value={this.state.postcode}
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="city"
                                                label="Town / city"
                                                id="city"
                                                onChange={this.handleChange}
                                                value={this.state.city}
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="country"
                                                label="Country"
                                                id="country"
                                                onChange={this.handleChange}
                                                value={this.state.country}
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="phone"
                                                label="Phone number"
                                                id="phone"
                                                onChange={this.handleChange}
                                                value={this.state.phone}
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="mobile"
                                                label="Mobile number"
                                                id="mobile"
                                                onChange={this.handleChange}
                                                value={this.state.mobile}
                                            />

                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.saveButton}
                                                onClick={() => this.saveInfo()}
                                            >
                                                Save
							
                                            </Button>

                                            <p></p>

                                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                                Your current plan is {this.state.userPlanTitle}
                                            </Typography>

                                            {this.state.userPlanTitle === 'Free' || this.state.userPlanTitle === 'Free Unlimited'
                                            ?
                                            <React.Fragment>
                                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                                Available plans:
                                            </Typography>
                                            <FormControl component="fieldset">
                                              <RadioGroup aria-label="plans" name="newPlan" onChange={this.handlePlanChange}>
                                                {this.state.receivedPlans.map((plan) => {
                                                  return (
                                                    <FormControlLabel key={plan['planID']} value={plan['planID']} control={<Radio color="default" />} label={plan['title']} onClick={() => this.selectPlan(plan['planID'])} />
                                                  );
                                                })}
                                              </RadioGroup>
                                            </FormControl>
                                            </React.Fragment>
                                            : ''}

                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={`${this.state.userPlanTitle !== 'Free' && this.state.userPlanTitle !== 'Free Unlimited' ? '' : classes.hidden} ${classes.cancelButton}`}
                                                onClick={() => this.cancelSubscription()}
                                            >
                                                Cancel subscription
							
                                            </Button>


                                            </form>

     <p></p>

     <div className={`${this.state.userPlanTitle === 'Free' || this.state.userPlanTitle === 'Free Unlimited' ? '' : classes.hidden} ${classes.form}`}>

     <Elements stripe={stripePromise}>
     <ElementsConsumer>
      {({elements, stripe}) => (
    <React.Fragment>
      <div className={classes.cardDiv}>
      <CardElement
        options={{
          hidePostalCode: true,
          style: {
            base: {
                fontSize: '1.2rem',
                color: 'rgba(0, 0, 0, 0.87)',
                '::placeholder': {
                  color: 'rgba(0, 0, 0, 0.54)',
                },
                border: "1px solid red"
              },
              invalid: {
                color: '#9e2146',
              },
                 },
        }}
      />

</div>

<p className={classes.spaceBlock}></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.saveButton}
                                                onClick={() => this.buyPlan(elements, stripe)}
                                            >
                                                Buy
							
                                            </Button>

                                            </React.Fragment>
      )}
    </ElementsConsumer>
    </Elements>

    </div>

                                    </CardContent>
                                </Card>


                            </Grid>
                            </div>                        


                    </main>
                </div>
            );
        }
}

export default withStyles(styles)(Profile);