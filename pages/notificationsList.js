/* eslint-disable no-use-before-define */
import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import DatePicker from "react-datepicker";

import { Redirect } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

import Avatar from '@material-ui/core/Avatar';
import MenuDrawer from '../components/menuDrawer';
import AddFieldDialog from '../components/addFieldDialog';
import ImagePreview from '../components/imagePreview';
import * as libs from '../util/libs';
import Autocomplete from '@material-ui/lab/Autocomplete';

import CheckIcon from '@material-ui/icons/Check';
import TimerIcon from '@material-ui/icons/Timer';

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


import "./internal.css";

import vehicle_make from "../json/vehicle_make.json";
import vehicle_model from "../json/vehicle_model.json";

import "react-datepicker/dist/react-datepicker.css";

const firebase = require("firebase");
require("firebase/firestore");

const styles = (theme) => ({
    root: {
        display: 'flex',
    },
    cardRoot: {
        /*backgroundColor: '#fff',
        boxShadow: "none"*/
        marginBottom: "1rem"
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
        backgroundColor: '#53E7C3 !important',
        color: '#ffffff',
        marginTop: '1.25rem',
        height: "3rem",
        width: "7rem"
    },
    deleteButton: {
        color: '#494B96',
        width: "7rem",
    },
    deleteButtonText: {
        fontSize: "1.2rem",
        marginLeft: "0.5rem"
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
        color: "#494B96",
        fontSize: "1.3rem"
    },
    cardSubTitleText: {
        color: "#494B96",
        fontSize: "1.3rem"
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
        backgroundColor: '#494B96',
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
    iconColor: {
        color: "#494B96",        
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
    cardContentText: {
        fontSize: "1rem"
    },
    emptySection: {
        height: "4rem"
    }
});

class NotificationsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            currentIndex: 0,
            name: '',
            maincategory: 'Household',
            servicerequested: '',
            servicedate: '',
            servicetime: '',
            servicenotes: '',
            notes: '',
            itemId: '',
            productname: '',
            brand: '',
            model: '',
            model2: '',
            model3: '',
            openBackDrop: true,
            openDialog: false,
            userId: '',
            current_customerName: '',
            openProductPage: false,
            openConfirmation: false,
            company: '',
            viewMode: 1,
            notifications: [],
            bookingID: '',
            notificationID: '',
            openRequestsList: '',
            redirectToProductPage: ''
        };
    }

    closePage = () => {
        this.setState({
            openDialog: false
        });
    }

    componentDidMount() {
        authMiddleWare(this.props.history);
        const that = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

                var userId = firebase.auth().currentUser.uid;
                console.log('userId', userId);
                db.collection("notifications").where("userID", "==", userId)
                    //.get()
                    //.then
                    .onSnapshot(function (querySnapshot) {
                        const notifications = [];
                        querySnapshot.forEach((doc) => {
                            const userData = {...doc.data(), id: doc.id};                            
                            notifications.push(userData);
                            db.collection('notifications').doc(doc.id).set({status: 'readed'}, {merge: true});
                        });
                        notifications.sort(libs.sortByDateShort);
                    
                        that.setState({ notifications, openBackDrop: false, userId });
                    });
                // .catch(function (error) {
                //     console.log("Error getting documents: ", error);
                //     that.setState({ ...that.state, uiLoading: false });
                // });
            }
        });
    }

    renderRedirect() {
		if (this.state.redirectToProductPage) {
			return (
				<Redirect
					to={`/product-add`}
				/>
			);
        }
		if (this.state.openRequestsList === 'viewbooking') {
			return (
				<Redirect
					to={`/requests-list`}
				/>
			);
        }        
		if (this.state.openRequestsList === 'changetime') {
			return (
				<Redirect
					to={`/requests-list`}
				/>
			);
        }        
	};
 


      async processNotificationDelete() {
        const that = this;
        that.setState({
            openBackDrop: true,
            openDialog: false
        });
        await db.collection("notifications").doc(this.state.notificationID).delete().catch(() => {
            that.setState({
                openBackDrop: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Error ocured during deleting document.',
                cancelButtonTitle: 'OK',
                actionButtonTitle: '',
                actionClass: 'hide',
                handlePopupAction: '',
            });
        });
        that.setState({
            openBackDrop: false
        });
      }

      deleteNotification(id) {
        this.setState({
            openDialog: true,
            actionButtonTitle: 'Delete',
            actionClass: 'show',
            notificationID: id,
            handlePopupAction: this.processNotificationDelete.bind(this),
            dialogTitle: 'Delete notification',
            dialogDescription: 'Are you sure you want to delete this notification?',
            cancelButtonTitle: 'Close'
        
        })        
      }



      shortenString(notification, text) {
        if (text === 'Booking time offer') {
          if (notification['actionType'] === 'changetime') {
            return 'Your Booking time has been amended';
          }
          return 'You have a new service request';
        }
        if (text === 'Booking confirmed') {
            return 'Your Booking time has been confirmed';
        }      
        if (text === 'Booking request\nhas been declined') {
          return text;
        }
        // if (text && text.length > 22) {
        //   if (text.indexOf('is overdue') !== -1) {
        //     let tempText = text.replace(/ is overdue/g, '');
        //     if (tempText.length > 8) {
        //       return tempText.substring(0, 8) + '...' + ' is overdue';
        //     } else {
        //       return text;
        //     }
        //   } else {
        //     return text.substring(0, 22);
        //   }
        // }
        return text;
      }
    
      showTypeInTitle(type) {
        return type === 'Connection request' ||
            type === 'Booking time offer' ||
            type === 'Booking confirmed' ||
            type === 'New item to add' || 
            type === 'Reminder overdue' || 
            type === 'Booking request\nhas been declined';
      }
    
      isAnyButtonShow(doc) {
        const type = doc['type'];
        if (type === 'Connection request') {
            return true;
        }
        if (type === 'New item to add') {
            return true;
        }
        if (type === 'Booking time offer') {
            return true;
        }
        return false;
      }

      showButton(doc, mode) {
        //print(mode + '' + type);
        const type = doc['type'];
        if (mode === 'accept' && type === 'Connection request') {
            return true;
        }
        if (mode === 'acceptitem' && type === 'New item to add') {
            return true;
        }
        if (mode === 'edit' && type === 'Booking time offer') {
            //return true;
        }
        if (mode === 'accepttime' && type === 'Booking time offer') {
            //return true;
        }
        if (mode === 'view' && type === 'Booking time offer') {
            return true;
        }
        return false;
      }


      async openProductScreen(itemId) {

        this.setState({
            openBackDrop: true
        });         
    
        let doc = await db.collection('provider_products').doc(itemId).get();
        const item = doc.data();
    
        let customerName = '';
        let customerId = '';
    
        if (item && item['syncosaCustomerID']) {
          doc = await db.collection(
              'syncosacustomer').doc(item['syncosaCustomerID']).get();
          const cust = doc.data();              
          customerName = cust['firstName'];
          customerId = item['syncosaCustomerID'];
        }
    
        if (!customerName && item['customerID']) {
          doc =
              await db.collection('syncosacustomer').doc(item['customerID']).get();
          const cust = doc.data();
          customerName = cust['firstName'];
          customerId = item['customerID'];
        }
   
    
        localStorage.setItem('categoryData', {
            id: '',
            title: '',
            itemTitle: item['name'],
            itemSubTitle: '',
            iconName: '',
            categoryType: item['mainCategory'],
            itemId: item.documentID,
            fromPage: '',
            itemImage: item['image'],
            itemFullImage: item['fullimage'],
            itemSerialNumberImage: item['serialnumberimage'],
            customerId: customerId,
            customerName: customerName});
    
            this.setState({
                openBackDrop: false,
                redirectToProductPage: 1
            });         

      }
    
      async processAcceptItem(id) {
        this.setState({
            openBackDrop: true,
            openDialog: false
        });
        const callCloudFunction = firebase.functions().httpsCallable('providerAcceptItem');
        const resp = await callCloudFunction({
            notificationID: id
        });
        this.setState({
            openBackDrop: false
        });   
        this.openProductScreen(resp.data);
      }

      acceptItem(id) {
        this.setState({
            openDialog: true,
            actionButtonTitle: 'Accept',
            actionClass: 'show',
            notificationID: id,
            handlePopupAction: () => this.processAcceptItem(id),
            dialogTitle: 'Accept item',
            dialogDescription: 'Are you sure you want to accept this item?',
            cancelButtonTitle: 'Close'        
        })        
      }

    async processAcceptConnection(id) {       
        this.setState({
            openBackDrop: true,
            openDialog: false
        });
        const callCloudFunction = firebase.functions().httpsCallable('providerAcceptConnection');
        const resp = await callCloudFunction({
            notificationID: id
        });
        this.setState({
            openBackDrop: false
        });
    }
    
    acceptConnection(id) {
        this.setState({
            openDialog: true,
            actionButtonTitle: 'Accept',
            actionClass: 'show',
            notificationID: id,
            handlePopupAction: () => this.processAcceptConnection(id),
            dialogTitle: 'Accept connection',
            dialogDescription: 'Are you sure you want to accept this connection?',
            cancelButtonTitle: 'Close'
        
        })        
      }

    viewBookingDetails(notification, mode) {
        localStorage.setItem('editInfo', JSON.stringify({
            viewMode: 2,
            notificationID: notification['id'],
            bookingID: notification['bookingID'],
        }));
        this.setState({
            openRequestsList: mode
        });
    }

    processText(text) {
        return text.replace("\n", "<br />");
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
                    {this.renderRedirect()}
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupAction={this.handlePopupAction.bind(this)} handlePopupClose={() => this.setState({openDialog: false})} />
                    <BackDrop open={this.state.openBackDrop} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Notifications
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <MenuDrawer />

                    <main className={classes.content}>
                        <Toolbar />

                        <div className={`${this.state.viewMode === 1 ? '' : classes.hidden}`}>

                                            <div className={classes.list}>

                                            <div className={classes.contentBox}>

                            {this.state.notifications.map((doc) => (

            <div key={doc.id} className={this.props.classes.cardList}>
            <Card className={this.props.classes.cardRoot}>
                <CardHeader
                    action={
                        <div>
                        {this.showButton(doc, 'view') ?
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.props.classes.viewButton}
                            onClick={() => this.viewBookingDetails(doc, 'viewbooking')}
                        >
                            VIEW
        
                        </Button>
                        : ''}

                        {this.showButton(doc, 'edit') ?
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.props.classes.viewButton}
                            onClick={() => this.viewBookingDetails(doc, 'changetime')}
                        >
                            EDIT
        
                        </Button>
                        : ''}

                        {this.showButton(doc, 'accept') ?
                        <React.Fragment>
                        <p></p>        
                        <IconButton className={this.props.classes.deleteButton} aria-label="accept" onClick={() => this.acceptConnection(doc.id)}>
                          <CheckIcon />
                          <Typography className={this.props.classes.deleteButtonText}>
                            ACCEPT
                          </Typography>
                        </IconButton>
                        </React.Fragment>
                        : ''}

                        {this.showButton(doc, 'acceptitem') ?
                        <React.Fragment>
                        <p></p>        
                        <IconButton className={this.props.classes.deleteButton} aria-label="accept" onClick={() => this.acceptItem(doc.id)}>
                          <CheckIcon />
                          <Typography className={this.props.classes.deleteButtonText}>
                            ACCEPT
                          </Typography>
                        </IconButton>
                        </React.Fragment>
                        : ''}

                        {this.showButton(doc, 'accepttime') ?
                        <React.Fragment>
                        <p></p>        
                        <IconButton className={this.props.classes.deleteButton} aria-label="accepttime" onClick={() => this.viewBookingDetails(doc, 'changeTime')}>
                          <TimerIcon />
                          <Typography className={this.props.classes.deleteButtonText}>
                            ACCEPT
                          </Typography>
                        </IconButton>
                        </React.Fragment>
                        : ''}

                        {this.isAnyButtonShow(doc) ?
                        ''
                        : <div className={classes.emptySection}></div>
                        }

                        <p></p>

                        <IconButton aria-label="delete" className={this.props.classes.deleteButton} onClick={() => this.deleteNotification(doc.id)}>
                        <DeleteIcon />
                        <Typography className={this.props.classes.deleteButtonText}>
                            DELETE
                        </Typography>
                      </IconButton>

                      </div>
                    }
                    title={this.showTypeInTitle(doc['type']) ? this.shortenString(doc, doc['type']) : ''}
                    subheader={doc['title']}
                    titleTypographyProps={{className:this.props.classes.cardTitleText}}
                    subheaderTypographyProps={{className:this.props.classes.cardSubTitleText}}
                    classes={{root: this.props.classes.cardHeader}}
                />
                <CardContent classes={{root: this.props.classes.cardContent}}>
                   <Typography className={this.props.classes.cardContentText} variant="body2" color="textSecondary" component="p">
                        {doc['type'] === 'Reminder overdue' ? <br /> : ''}{doc['description']}
                   </Typography>
                </CardContent>
            </Card>
            </div>

                            ))}
                            </div>

                            <div className={`${this.state.notifications.length !== 0 || (this.state.openBackDrop && this.state.notifications.length === 0) ? classes.hidden : ''} ${classes.noRecordsMessageBox}`}>
                            <Typography className={classes.noRecordsMessage}>
                                No notifications.
                            </Typography>
                            </div>

                        </div>
                        </div>

                    </main>
                </div>
            );
        }

}

export default withStyles(styles)(NotificationsList);