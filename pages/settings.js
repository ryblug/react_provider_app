/* eslint-disable no-use-before-define */
import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import {
     CardNumberElement,
     CardExpiryElement,
     CardCvcElement,
} from "@stripe/react-stripe-js";
import StripeInput from "../components/StripeInput";
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

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

import { db } from '../config';

import customerLogo from '../images/providers/customer_logo_small.png';
// import bigCustomerLogo from '../images/providers/customers_logo.png';
import addProductLogo from '../images/providers/add_a_product.png';
import photoLogo from '../images/providers/photo.png';
import sendToCustomer from '../images/providers/send_to_customer.png';
import Switch from '@material-ui/core/Switch';

import "./internal.css";

import vehicle_make from "../json/vehicle_make.json";
import vehicle_model from "../json/vehicle_model.json";

import "react-datepicker/dist/react-datepicker.css";

const firebase = require("firebase");
require("firebase/firestore");

const IOSSwitch = withStyles((theme) => ({
  root: {
    width: 42,
    height: 26,
    padding: 0,
    marginLeft: "auto",
    marginRight: "auto",
  },
  switchBase: {
    padding: 1,
    '&$checked': {
      transform: 'translateX(16px)',
      color: theme.palette.common.white,
      '& + $track': {
        backgroundColor: '#52d869',
        opacity: 1,
        border: 'none',
      },
    },
    '&$focusVisible $thumb': {
      color: '#52d869',
      border: '6px solid #fff',
    },
  },
  thumb: {
    width: 24,
    height: 24,
  },
  track: {
    borderRadius: 26 / 2,
    border: `1px solid ${theme.palette.grey[400]}`,
    backgroundColor: theme.palette.grey[50],
    opacity: 1,
    transition: theme.transitions.create(['background-color', 'border']),
  },
  checked: {},
  focusVisible: {},
}))(({ classes, ...props }) => {
  return (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  );
});

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
    deleteAccountText: {
        color: 'red',
        textAlign: "center",
        marginTop: "1rem",
        cursor: "pointer"
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
        marginTop: "5rem"
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
        marginTop: "1rem",
        marginBottom: "1rem",
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
    }
});

class Settings extends Component {
    constructor(props) {
        super(props);

        this.state = {
            openBackDrop: false,
            openDialog: false,
            userId: '',
            pushnotifications: false
        };
    }

    componentDidMount() {
        authMiddleWare(this.props.history);
        const that = this;
        firebase.auth().onAuthStateChanged(async function (user) {
            if (user) {

                var userId = firebase.auth().currentUser.uid;

                var doc = await db.collection(
                  'users').doc(userId).get();
              
                const data = doc.data();

                const email = data['email'];

                that.setState({
                  userId: userId,
                  email,
                  pushnotifications: data['pushnotifications'] ? true : false,
                });

            }
        });
    }

    handleNotificationChange = (event) => {
        const checked = event.target.checked;
        this.setState({ pushnotifications: checked});

        const that = this;

        db.collection("users").doc(this.state.userId).set({
                  pushnotifications: checked ? '1' : '',
        }, { merge: true })
            .then(function () {
               that.setState({
                   loading: false,
                   openDialog: true,
                   dialogTitle: 'Settings info',
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

    };

    async resetPassword() {

        const that = this;

        that.setState({
            openBackDrop: true,
        });

        const sendNotification = firebase.functions().httpsCallable('getAccountType');
        const resp = await sendNotification({
            email: this.state.email
          });

        if (resp && resp.data && resp.data === 'facebook') {
                that.setState({
                    openBackDrop: false,
                    openDialog: true,
                    dialogTitle: 'Error',
                    dialogDescription: 'You can not reset password for account registered using facebook.',
                    cancelButtonTitle: 'OK',
                    actionButtonTitle: '',
                    actionClass: 'hide'
                });
                return;
        }

        const auth = firebase.auth();

        auth.sendPasswordResetEmail(this.state.email).then(function() {
               that.setState({
                   openBackDrop: false,
                   openDialog: true,
                   dialogTitle: 'Email sent',
                   dialogDescription: 'Letter with link to reset password was sent to your E-mail.',
                   cancelButtonTitle: 'OK',
                   actionButtonTitle: '',
                   actionClass: 'hide',
                   handlePopupAction: '',
               });
        }).catch(function(error) {
                that.setState({
                    openBackDrop: false,
                    openDialog: true,
                    dialogTitle: 'Error',
                    dialogDescription: error.message,
                    cancelButtonTitle: 'OK',
                    actionButtonTitle: '',
                    actionClass: 'hide'
                });
        });
    }

    async processAccountDelete() {

        const that = this;

        that.setState({
            openBackDrop: true,
            openDialog: false
        });

        const sendNotification = firebase.functions().httpsCallable('deleteProvider');
        const resp = await sendNotification({
            userID: that.state.userId
          });


            firebase.auth().signOut().then(function () {
                this.props.history.push('/login');
            }).catch(function (error) {
                that.setState({
                    openBackDrop: false,
                    openDialog: true,
                    dialogTitle: 'Error',
                    dialogDescription: error.message,
                    cancelButtonTitle: 'OK',
                    actionButtonTitle: '',
                    actionClass: 'hide'
                });
            });

    }

    deleteAccount() {
        this.setState({
            openDialog: true,
            actionButtonTitle: 'Delete',
            actionClass: 'show',
            handlePopupAction: () => this.processAccountDelete(),
            dialogTitle: 'Delete',
            dialogDescription: 'Are you sure you want to delete account?',
            cancelButtonTitle: 'Close'
        
        });

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
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupAction={this.handlePopupAction.bind(this)} handlePopupClose={() => this.setState({openDialog: false})} />
                    <BackDrop open={this.state.openBackDrop} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Settings
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

                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Allow email notifications
                            </Typography>


<FormControl fullWidth >
        <IOSSwitch checked={this.state.pushnotifications} onChange={this.handleNotificationChange} name="pushnotifications" />
</FormControl>

                                            <p></p>
                                            <p></p>

                                            <Divider variant="middle" className={this.props.classes.divider} />

                                            <p></p>
                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.saveButton}
                                                onClick={() => this.resetPassword()}
                                            >
                                                Reset password
							
                                            </Button>

                                            <p></p>
                                            <p></p>

                                            <Divider variant="middle" className={this.props.classes.divider} />

                                            <Typography variant="h6" noWrap className={classes.deleteAccountText} onClick={() => this.deleteAccount()}>
                                                Delete account
                                            </Typography>


</form>
                                    </CardContent>
                                </Card>


                            </Grid>
                            </div>                        


                    </main>
                </div>
            );
        }

}

export default withStyles(styles)(Settings);