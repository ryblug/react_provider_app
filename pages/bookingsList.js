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
import Autocomplete from '@material-ui/lab/Autocomplete';

import InputAdornment from '@material-ui/core/InputAdornment';
import EventNoteIcon from '@material-ui/icons/EventNote';

import Divider from '@material-ui/core/Divider';

import BackDrop from '../components/backDrop';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import AlertDialog from '../components/alertDialog';
import * as libs from '../util/libs';

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
        marginBottom: '1rem',
        fontSize: "1.4rem"
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
        backgroundColor: '#53E7C3 !important',
        color: '#494B96',
        height: "3rem",
        marginTop: "1rem"
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
        width: "5rem",
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
        color: "#53E7C3",
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
        marginTop: "-5rem",
        fontSize: "2rem"
    },
    cardContentText: {
        fontSize: "1rem"
    },
    greenBox: {
        /*backgroundColor: '#53E7C3',*/
        paddingLeft: "1rem",
        paddingRight: "1rem",
        height: "7.5rem"
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
        marginTop: "0rem"
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
        marginTop: "1rem",
        backgroundColor: '#494B96 !important',
        height: "3rem"
    },
    changeTimeButton: {
        color: '#999999',
        backgroundColor: '#F6F6F6 !important',
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
        marginTop: "1rem",
        height: "3rem"
    },
    dateTitle: {
        textAlign: "center",
        color: "#494B96",
        fontSize: "1.7rem"
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
});

class BookingsList extends Component {
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
            bookings: [],
            bookingDates: [],
            bookingOriginalDates: [],
            bookingID: '',
            notifivationID: '',
            typeArray: ['Service', 'Other'],
            otherservicerequested: '',
            showImagePreview: false,
            pageTitle: 'Confirmed bookings',
            openRequestABooking: '',
            openAddABooking: ''
        };
        }

    redirectToPage = (page) => {
        this.setState({
            [page]: '1'
        })
    }

    viewAsForm = () => {
        this.setState({
            viewMode: '2'
        })
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
                db.collection("booking").where("originalUserID", "==", userId).where("status", "==", 'accepted')
                    //.get()
                    //.then
                    .onSnapshot(function (querySnapshot) {
                        const bookings = [];
                        querySnapshot.forEach((doc) => {
                            const userData = {...doc.data(), id: doc.id};
                            console.log('userData', userData);
                            bookings.push(userData);
                            console.log('id: ', doc.id);
                        });
                        bookings.sort(libs.sortByDate);
                        const bookingDates = [];
                        const bookingOriginalDates = [];
                        bookings.forEach((booking) => {
                            const date = libs.getFormattedDateTime(booking['date'], '', false);
                            if (bookingDates.indexOf(date) === -1) {
                              bookingDates.push(date);
                              bookingOriginalDates.push(booking['date']);
                            }
                        });
                    
                        that.setState({ bookings, bookingDates, bookingOriginalDates, openBackDrop: false, userId });
                    });
                // .catch(function (error) {
                //     console.log("Error getting documents: ", error);
                //     that.setState({ ...that.state, uiLoading: false });
                // });

            }
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };


    updateDataForView = () => {
        const data = this.state.bookings[this.state.currentIndex];
        console.log('data:', data);
        this.setState({
            name: data['customername'],
            company: data['company'],
            address: data['address'],
            phone: data['phone'],
            mobile: data['mobile'],
            email: data['email'],      
            productname: data['productName'],
            maincategory: data['categoryType'] ? data['categoryType'] : 'Household',
            servicerequested: data['service'],
            servicedate: libs.convertStringToDate(data['date']),
            servicetime: libs.convertStringToTime(data['date'], data['time']),
            servicenotes: data['servicenotes'],
      
            notes: data['note'],    
            itemId: data['itemId']
        });
    
        if (data['categoryType'] === 'Household' || !data['categoryType']) {
            this.setState({
                brand: data['brand'],
                model: data['model']
            });
        } else if (data['categoryType'] === 'Pets') {
            this.setState({
                brand: data['brand'],
                model: data['model'],
                model2: data['model2']
            });
        } else if (data['categoryType'] === 'Vehicles') {
            this.setState({
                brand: data['brand'],
                model: data['model'],
                model2: data['model2'],
                model3: data['model3']
            });
        }
        if (data && data["customFields"]) {
          data["customFields"].forEach((field) => {
            //createField(field['title'], field['value']);
          });
        }
    
      }


      openProductScreen = async () => {

        const item = this.state.data[this.state.currentIndex];
    
        let customerName = '';
        let customerId = '';
    
        if (item['syncosaCustomerID']) {
          var doc = await db.collection(
              'syncosacustomer').doc(item['syncosaCustomerID']).get();
              
          customerName = doc.data().firstName;
          customerId = doc.data().syncosaCustomerID;
        }
    
        if (!customerName && item['customerID']) {
          var doc = await db.collection(
              'syncosacustomer').doc(item['customerID']).get();
  
              customerName = doc.data().firstName;
              customerId = doc.data().syncosaCustomerID;
        }
    
        if (!customerName) {
          customerName = this.state.current_customerName;
        }
    
        localStorage.setItem('categoryData', JSON.stringify({
            id: '',
            title: '',
            itemTitle: item['name'],
            itemSubTitle: '',
            iconName: '',
            categoryType: item['mainCategory'],
            itemId: item['id'],
            itemImage: item['image'],
            itemFullImage: item['fullimage'],
            itemSerialNumberImage: item['serialnumberimage'],
            customerId: customerId,
            customerName: customerName
        }));

        this.setState({
            openProductPage: true
        });
    
      }

      renderRedirect() {
		if (this.state.openRequestABooking) {
			return (
				<Redirect
					to={`/request-a-booking`}
				/>
			);
        }
		if (this.state.openAddABooking) {
			return (
				<Redirect
					to={`/add-a-booking`}
				/>
			);
        }        
	};
 

    processProductDelete = () => {
        this.setState({
            openDialog: false,
        });
        
        const item = this.state.data[this.state.currentIndex];
        // TODO - add cloud function to delete related data
        db.collection("provider_products").doc(item['id']).delete();
    }

    deleteProduct = () => {
this.setState({
    openDialog: true,
    actionButtonTitle: 'Delete',
    actionClass: '',
    handlePopupAction: this.processProductDelete,
    dialogTitle: 'Delete',
    dialogDescription: 'Are you sure you want to delete this item?',
    cancelButtonTitle: 'Close'

})

    }
             

      async processBookingDelete() {
        this.setState({
            openBackDrop: true,
            openDialog: false,
        });
        const sendNotification = firebase.functions().httpsCallable('deleteBooking');
        const resp = await sendNotification({
            'bookingID': this.state.bookingID
          });
        this.setState({
            openBackDrop: false,
        });
      }

      deleteBooking(id) {
        this.setState({
            openDialog: true,
            actionButtonTitle: 'Delete',
            actionClass: 'show',
            bookingID: id,
            handlePopupAction: this.processBookingDelete.bind(this),
            dialogTitle: 'Delete',
            dialogDescription: 'Are you sure you want to delete this booking?',
            cancelButtonTitle: 'Close'
        
        })        
      }

      viewBookingDetails(id) {
          this.setState({
            viewMode: 2,
            notificationID: '',
            bookingID: id,
            pageTitle: 'Booking details'
          }, () => {
            this.updateDataForView();
          });          
      }

      switchMode() {
          if (this.state.viewMode === 1) {
              this.setState({
                  viewMode: 2
              }, () => {
                this.updateDataForView();
              });
          } else {
            this.setState({
                viewMode: 1
            })
          }
      }


      async saveBooking() {
        if (!this.state.name) {
            this.setState({
                loading: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Name" field.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        if (!this.state.productname) {
            this.setState({
                loading: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Product name" field.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        if (!this.state.servicerequested) {
            this.setState({
                loading: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Service Type" field.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        if (!this.state.servicedate) {
            this.setState({
                loading: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Service Date" field.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        if (!this.state.servicetime) {
            this.setState({
                loading: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Service Time" field.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        const that = this;

        that.setState({
            openBackDrop: true,
        });

        db.collection("booking").doc(this.state.bookingID).set({
            name: this.state.name,
            type: this.state.servicerequested,
            service: this.state.servicerequested,
            otherservice: this.state.otherservicerequested,
            date: libs.convertDateToString(this.state.servicedate),
            time: libs.convertTimeToString(this.state.servicetime),
            servicenotes: this.state.servicenotes,
            from: this.state.name,
            to: this.state.name,
            customername: this.state.name,
            customeremail: this.state.email,
            company: this.state.company,
            address: this.state.address,
            phone: this.state.phone,
            mobile: this.state.mobile,
            email: this.state.email,
            note: this.state.notes,
            productName: this.state.productname,
            brand: this.state.brand,
            model: this.state.model,    
        })
            .then(function () {
                    that.setState({
                        openBackDrop: false,
                        viewMode: 1
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

showDivider(index) {
    if (index < this.state.bookings.length - 1) {
    return (
        <Divider variant="middle" className={this.props.classes.divider} />
    );
    } 
    return "";
}

renderBooking(date) {
    
    const items = [];
            this.state.bookings.forEach((doc, index) => {
                let dateTitle = '';
                if (index === 0) {
                    dateTitle = (<h1 className={this.props.classes.dateTitle}>{date}</h1>);
                }

                items.push(
                    <React.Fragment>
                    {dateTitle}
            <div className={this.props.classes.cardList}>
            <Card key={doc.id} className={this.props.classes.cardRoot}>
                <CardHeader
                    action={
                        <div>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.props.classes.viewButton}
                            onClick={() => this.viewBookingDetails(doc.id)}
                        >
                            View
        
                        </Button>                        
        
                        <p></p>

                        <IconButton aria-label="delete" className={this.props.classes.deleteButton} onClick={() => this.deleteBooking(doc.id)}>
                        <DeleteIcon />
                        <Typography className={this.props.classes.deleteButtonText}>
                            Delete
                        </Typography>
                      </IconButton>
                      </div>
                    }
                    title={doc.customername.toUpperCase()}
                    subheader={libs.getProductTitle(doc)}
                    titleTypographyProps={{className:this.props.classes.cardTitleText}}
                    subheaderTypographyProps={{className:this.props.classes.cardSubTitleText}}
                    classes={{root: this.props.classes.cardHeader}}
                />
                <CardContent classes={{root: this.props.classes.cardContent}}>
                <Typography className={this.props.classes.cardContentText} variant="body2" color="textSecondary" component="p">
{doc.type}
</Typography>
<Typography className={this.props.classes.cardContentText} variant="body2" color="textSecondary" component="p">
{libs.showDate(doc)}
</Typography>
</CardContent>
            </Card>
            {this.showDivider(index)}
            </div>
            </React.Fragment>

        )});

        return items;
    
}


handlePopupAction() {
    if (this.state.handlePopupAction) {
        this.state.handlePopupAction();
    }
  }

handleDateChange = (date, field) => {        
    this.setState({
        [field]: date
    });
};

handleTimeChange = (date, field) => {        
    this.setState({
        [field]: date
    });
};

selectType = (event) => {
    this.setState({
        servicerequested: event.target.value,
    });
  }

  async sendNewTimeToCustomer() {
    this.setState({
        openBackDrop: true
    });

    const sendNotification = firebase.functions().httpsCallable('sendBookingNegotiationToCustomer');
    const resp = await sendNotification({
        'customerID': this.state.customerID,
        'providerID': this.state.userId,
        'date': this.state.servicedate,
        'time': this.state.servicetime,
        'itemId': this.state.itemId,
        'categoryType': this.state.categoryType,
        'bookingID': this.state.bookingID,
        'bookingStatus': 'requested',
        'direction': 'to_customer',
        'actionType': 'changetime'
      });
      try {
          if (this.state.notificationID) {
            db.collection("notifications").doc(this.state.notificationID).delete();
          }
      } catch (e) {}
      this.setState({
        openBackDrop: false,
        openDialog: true,
        dialogTitle: 'Success',
        dialogDescription: 'New booking date / time sent.',
        cancelButtonTitle: 'OK',
        actionButtonTitle: '',
        actionClass: 'hide'
    });

  }


    render() {
        const { classes } = this.props;
        const { errors, uiLoading } = this.state;
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    {this.renderRedirect()}
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupAction={this.handlePopupAction.bind(this)} handlePopupClose={() => this.setState({openDialog: false})} />
                    <BackDrop open={this.state.openBackDrop} />
                    <ImagePreview open={this.state.showImagePreview} imageURL={this.state.imageURL} closePreview={this.closePreview} deleteImage={this.deleteImage} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                {this.state.pageTitle}
          					</Typography>
                        </Toolbar>
                    </AppBar>

                    <MenuDrawer />

                    <main className={classes.content}>
                        <Toolbar />

                        <div className={`${this.state.viewMode === 1 ? '' : classes.hidden}`}>

                                            <div className={classes.list}>

                                                <div className={classes.greenBox}>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                className={classes.greenButton}
                                                onClick={() => this.redirectToPage('openRequestABooking')}
                                            >
                                                <img alt="" src={addLogo} className={classes.buttonImage} />
                                                Send booking request
							
                                            </Button>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                className={classes.greenButton}
                                                onClick={() => this.redirectToPage('openAddABooking')}
                                            >
                                                <img alt="" src={addLogo} className={classes.buttonImage} />
                                                Add a booking
							
                                            </Button>


                                            </div>
                                            <div className={classes.contentBox}>

                            {this.state.bookingDates.map((dt) => {
                                return this.renderBooking(dt)
                            })}

                            </div>

                            <div className={`${this.state.bookingDates.length !== 0 || (this.state.openBackDrop && this.state.bookingDates.length === 0) ? classes.hidden : ''} ${classes.noRecordsMessageBox}`}>
                            <Typography className={classes.noRecordsMessage}>
                                There are currently no bookings.
                            </Typography>
                            </div>

                        </div>
                        </div>

                        <div className={`${this.state.viewMode === 2 ? '' : classes.hidden}`}>

                            <div className={classes.contentDetailsBox}>
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
                                                fullWidth
                                                name="name"
                                                label="Name"
                                                id="name"
                                                value={this.state.name}
                                                readOnly={true}                                                
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="company"
                                                label="Company"
                                                id="company"
                                                value={this.state.company}
                                                readOnly={true}                                                
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="address"
                                                label="Address"
                                                id="address"
                                                value={this.state.address}
                                                readOnly={true}                                                
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="phone"
                                                label="Phone number"
                                                id="phone"
                                                value={this.state.phone}
                                                readOnly={true}                                                
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="mobile"
                                                label="Mobile number"
                                                id="mobile"
                                                value={this.state.mobile}
                                                readOnly={true}                                                
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="email"
                                                label="Email"
                                                id="email"
                                                value={this.state.email}
                                                readOnly={true}                                                
                                            />

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="notes"
                                                label="Notes"
                                                id="notes"
                                                value={this.state.notes}
                                                readOnly={true}                                                
                                            />

</form>
                                    </CardContent>
                                </Card>

                                <p></p>

                                <Card className={classes.form}>

                                    <CardContent>
                                        <form className={classes.form} noValidate>
                                            <Typography className={classes.formHeader}>
                                            {libs.getDetailsTitle(this.state.maincategory)} 
                                    </Typography>

                                            <TextField
                                                variant="outlined"
                                                margin="normal"     
                                                className={`${this.state.maincategory==='Household' ? '' : classes.hidden}`}
                                                fullWidth
                                                id="productname"
                                                label={libs.getFieldTitle(0, this.state.categoryType)}
                                                name="productname"     
                                                value={this.state.productname}                                           
                                                readOnly={true}
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"                                                     
                                                fullWidth
                                                id="brand"
                                                label={libs.getFieldTitle(1, this.state.categoryType)}
                                                name="brand"     
                                                value={this.state.brand}                                           
                                                readOnly={true}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"                                                
                                                fullWidth
                                                name="model"
                                                label={libs.getFieldTitle(2, this.state.categoryType)}
                                                value={this.state.model}
                                                id="model"
                                                readOnly={true}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                className={`${this.state.maincategory==='Household' ? classes.hidden : ''}`}
                                                name="model2"
                                                label={libs.getFieldTitle(3, this.state.categoryType)}
                                                id="model2"
                                                value={this.state.model2}
                                                readOnly={true}                                                
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Vehicles' ? '' : classes.hidden}`}
                                                fullWidth
                                                name="model3"
                                                label={libs.getFieldTitle(4, this.state.categoryType)}
                                                id="model3"
                                                value={this.state.model3}
                                                readOnly={true}                                                
                                            />

                                        </form>
                                    </CardContent>
                                </Card>
<p></p>
                                <Card className={classes.form}>
                                    <CardContent>
                                        <form className={classes.form} noValidate>
                                            <Typography className={classes.formHeader}>
                                                Service details
                                    </Typography>

                                    <FormControl fullWidth variant="outlined" className={`${this.state.servicerequested === 'Other' ? classes.hidden : ''} ${classes.formControl}`}>
                                                <InputLabel htmlFor="servicerequested">Service Type *</InputLabel>
                                                <Select
                                                    native
                                                    label="Service Type *"
                                                    inputProps={{
                                                        name: 'servicerequested',
                                                        id: 'servicerequested',
                                                    }}
                                                    defaultValue=''
                                                    //value={this.state.servicetype}
                                                    onChange={this.selectType}
                                                >   
                                                <option value=""></option> 
                                                {this.state.typeArray.map((type) => {
                                                    return (<option key={`${type}`} value={`${type}`}>{type}</option>);
                                                })}
                                                </Select>
                                            </FormControl>


                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="otherservicerequested"
                                                label="Other type"
                                                id="otherservicerequested"
                                                className={`${this.state.servicerequested === 'Other' ? '' : classes.hidden}`}
                                                value={this.state.otherservicerequested}
                                                onChange={this.handleChange}
                                            />

<DatePicker
      selected={this.state.servicedate}
      onChange={(date) => this.handleDateChange(date, 'servicedate')}
      dateFormat="dd/MM/yyyy"      
      withPortal      
      peekNextMonth
      showMonthDropdown
      showYearDropdown
      dropdownMode="select"
      customInput={<TextField
        variant="outlined"
        margin="normal"
        fullWidth
        readOnly={true}
        id="servicedate"
        name="servicedate"
        value={this.state.servicedate}        
        label="Requested date *"
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
              <EventNoteIcon className={this.dateIcon} />
            </InputAdornment>
          ),
        }}
      />
}
    />

<DatePicker
      selected={this.state.servicetime}
      onChange={(date) => this.handleTimeChange(date, 'servicetime')}
      showTimeSelect
      showTimeSelectOnly
      timeIntervals={1}
      timeCaption="Time"
      dateFormat="h:mm aa"
      customInput={<TextField
        variant="outlined"
        margin="normal"
        fullWidth
        readOnly={true}
        id="servicetime"
        name="servicetime"
        value={this.state.servicetime}        
        label="Time"
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
              <EventNoteIcon className={this.dateIcon} />
            </InputAdornment>
          ),
        }}
      />
}      
    />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="servicenotes"
                                                label="Notes"
                                                id="servicenotes"
                                                value={this.state.servicenotes}
                                                onChange={this.handleChange}
                                            />


                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={`${this.state.itemId ? classes.hidden : ''} ${classes.saveButton}`}
                                                onClick={() => this.saveBooking()}
                                            >
                                                Save
							
                                            </Button>

                                            <p></p>
                                            <Typography className={`${this.state.itemId ? '' : classes.hidden} ${classes.changeTimeText}`}>
                                                If this time or date does not suit, please adjust in form above and click:
                                            </Typography>
                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={`${this.state.itemId ? '' : classes.hidden} ${classes.changeTimeButton}`}
                                                onClick={() => this.sendNewTimeToCustomer()}
                                            >
                                                Change time
							
                                            </Button>


                                        </form>
                                    </CardContent>
                                </Card>

                            </Grid>
                            </div>
                        
</div>


                    </main>
                </div>
            );
        }    

}

export default withStyles(styles)(BookingsList);