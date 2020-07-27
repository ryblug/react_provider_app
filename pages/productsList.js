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

import Avatar from '@material-ui/core/Avatar';
import MenuDrawer from '../components/menuDrawer';
import AddFieldDialog from '../components/addFieldDialog';
import ImagePreview from '../components/imagePreview';
import Autocomplete from '@material-ui/lab/Autocomplete';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import * as libs from '../util/libs';

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
        marginBottom: '1rem',
        fontSize: "1.4rem"
    },
    captionText: {
        color: "rgb(153, 153, 153, 1)",
        textAlign: "center"
    },
    gridTop: {
        backgroundColor: '#53E7C3',
        height: "7rem",
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
        width: "100%"
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
        padding: theme.spacing(3),
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
        backgroundColor: 'rgb(246, 246, 246, 1)',
        color: '#494B96',
        marginTop: '1.25rem'
    },
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
    buttonImage: {
        height: "2.5rem"
    },
    navigationButton: {
        width: "6rem",
        height: "3rem",
        backgroundColor: '#494B96 !important',
        color: "#ffffff"
    },
    submit: {
        marginTop: "1rem",
        backgroundColor: '#494B96 !important',
        height: "3rem"        
    },  
    productStatus: {
        color: '#494B96',
        fontWeight: "bold",
        fontSize: "1.4rem",
        textAlign: "center",
        marginTop: "1rem"
    },
    defaultMessage: {
        color: '#494B96',
        fontSize: "2rem",
        marginTop: "20rem",
        textAlign: "center"        
    },
    priceField: {
        marginTop: "1rem",
        marginBottom: "0.5rem"
    },    
});

class ProductsList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            currentIndex: 0,
            customFields: [],
            name: '',
            maincategory: '',
            servicefrequency: '',
            servicedate: '',
            servicedue: '',
            notes: '',
            itemId: '',
            brand: '',
            model: '',
            dob: '',
            age: '',
            breed: '',
            numberplate: '',
            year: '',
            vin: '',
            openBackDrop: false,
            userId: '',
            current_customerName: '',
            openProductPage: false,
            openConfirmation: false,
            company: '',
            actualProductID: ''
        };
    }

    closePage = () => {
        this.setState({
            openDialog: false
        });
    }

    componentDidMount() {
        authMiddleWare(this.props.history);
        this.getProductsInfo();
    }

    getProductsInfo() {
        const that = this;
        this.setState({
            openBackDrop: true
        });
        firebase.auth().onAuthStateChanged(async function (user) {
            if (user) {

                var userId = firebase.auth().currentUser.uid;

                const customerId = JSON.parse(localStorage.getItem('categoryData'))['customerId'];

                that.setState({
                    userId: userId,
                    customerID: customerId
                });

                let doc = await db.collection('syncosacustomer').doc(customerId).get();
                    that.setState({
                      current_customerName: doc.data()['firstName']
                    });
                

                    doc = await db.collection('users').doc(userId).get();
                    that.setState({
                        company: doc.data()['company']
                    });


                const products = [];
                doc = await db.collection("provider_products").where("userID", "==", userId).get();
                doc.forEach(doc => {
                    const data = {...doc.data(), id: doc.id};
                        products.push(data);
                    });
                    that.setState({
                        data: products,                        
                    });
                    if (products.length > 0) {
                        that.updateDataForView();
                    }
                    that.setState({
                        openBackDrop: false
                    });            
            }
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    };

    showPrior = () => {
        if (this.state.currentIndex - 1 >= 0) {
            this.setState({
              currentIndex: this.state.currentIndex - 1
            }, () => {
                this.updateDataForView();
            });
        }
    }

    showNext = () => {
        if (this.state.currentIndex + 1 < this.state.data.length) {
            this.setState({
              currentIndex: this.state.currentIndex + 1
            }, () => {
                this.updateDataForView();
            });
        }
    }

    handlePopupAction() {
        if (this.state.handlePopupAction) {
            this.state.handlePopupAction();
        }
    }

    deleteEvent(oldCalendarId, oldEventId) {

    }
  
    deleteReminder = async (reminderID, oldCalendarId, oldEventId) => {
      this.deleteEvent(oldCalendarId, oldEventId);
      db.collection("reminders").doc(reminderID).delete();
    }

    getCalendarID = () => {
        return '';
    }

    sendReminderToCalendar() {
      return '';
    }

    updateReminder = async (itemId, userID) => {

        const doc = await db.collection('users').doc(this.state.userId).get();
        const userData = doc.data();
        var company = userData['company'];
        var firstName = userData['firstName'];
    
        const providerName = company ? company : firstName;
    
        let customerName = '';
        if (localStorage.getItem('categoryData').customerId) {
          try {
            const doc = await db.collection("syncosacustomer").doc(localStorage.getItem('categoryData').customerId).get();            
            customerName = doc.data().firstName;
          } catch (e) {}
          if (this.state.originalSyncosaCustomerID && customerName === '') {
            try {
              const doc = await db.collection("syncosacustomer").doc(this.state.originalSyncosaCustomerID).get();            
              customerName = doc.data().firstName; 
            } catch (e) {}
          }
        }

        let reminderID = '';
        let oldEventId = '';
        let oldCalendarId = '';

            var result = await db.collection('reminders').where('userID', '==', this.state.userId).where('itemId', '==', itemId).get();
            result.forEach(doc => {
                console.log(doc.id, '=>', doc.data().name);

                reminderID = doc.id;
                oldEventId = doc.data().eventId;
                oldCalendarId = doc.data().calendarId;
      
            });

    
        if (reminderID) {
          this.deleteReminder(reminderID, oldCalendarId, oldEventId);
        }
    
        let eventId = this.sendReminderToCalendar(this.generateCategoryName(), this.state.notes, this.state.servicedue, '09:00 AM', '');
        // try {
        //   eventId = await sendReminderToCalendar(generateCategoryName(),
        //       _itemnotes.text.trim(), _itemservicedue.text.trim(), '09:00 AM', '');
        // } catch (e) {}
    
        db.collection('reminders').add({
          userID: this.state.userId,
          providerID: this.state.userId,
          categoryType: this.state.maincategory,
          providerName: providerName,          
          productName: this.generateCategoryName(),
          customerName: customerName,
          date: libs.convertDateToString(this.state.servicedue),
          time: '09:00 AM',
          notes: this.state.notes,
          itemId: itemId,
          timestamp: Date.now(),
          eventId: eventId,
          calendarId: this.getCalendarID(),
          details: 'Service Due',
        });
      }

    updateDataForView = () => {
        const data = this.state.data[this.state.currentIndex];
        this.setState({
            name: data['name'],
            maincategory: data['mainCategory'],
            servicefrequency: data['servicefrequency'],
            servicedate: data['servicedate'],
            servicedue: data['servicedue'],
            notes: data['notes'],
            price: data['price'],
            itemId: data['id'],
            actualProductID: data['actualProductID'] ? data['actualProductID'] : ''
        });
    
        if (data['mainCategory'] === 'Household') {
            this.setState({
                brand: data['brand'],
                model: data['model']
            });
        } else if (data['mainCategory'] === 'Pets') {
            this.setState({
                dob: data['brand'],
                age: data['model'],
                breed: data['model2']
            });
        } else if (data['mainCategory'] === 'Vehicles') {
            this.setState({
                model: data['brand'],
                numberplate: data['model'],
                year: data['model2'],
                vin: data['model3']
            });
        }
        if (data && data["customFields"]) {
            const customFields = [];
            data["customFields"].forEach((field) => {
              customFields.push({title: field['title'], value: field['value']});
            });
            this.setState({customFields});
          }
      
      }
 
      getDetailsTitle = () => {
        if (this.state.maincategory === '' || this.state.maincategory === 'Household') {
          return "Product details";
        } else if (this.state.maincategory === 'Pets') {
          return "Pet details";
        } else {
          return "Vehicle details";
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
          customerId = doc.id;
        }

        console.log('Step1', customerName, customerId);
    
        if (!customerName && item['customerID']) {
          var doc = await db.collection(
              'syncosacustomer').doc(item['customerID']).get();
  
              customerName = doc.data().firstName;
              customerId = doc.data().syncosaCustomerID;
        }

        console.log('Step2', customerName, customerId);
    
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

        localStorage.setItem('editProductID', item['id']);

        this.setState({
            openProductPage: true
        });
    
      }

      renderRedirect() {
		if (this.state.openProductPage) {
			return (
				<Redirect
					to={`/product-add`}
				/>
			);
        }
		if (this.state.openConfirmation) {
			return (
				<Redirect
					to={`/product-confirm`}
				/>
			);
        }        
	};

    sendInvite = () => {
        const item = this.state.data[this.state.currentIndex];
        this.sendInviteOrNotification(
            item['id'],
          this.state.userId,
           this.state.customerID,
           this.state.maincategory,
           item['actualProductID']);
    }

    addReminder = async (userID, itemId, customerName, customerID, actualProductID) => {

        const doc = await db.collection('users').doc(this.state.userId).get();
        const userData = doc.data();
        var company = userData['company'];
        var firstName = userData['firstName'];
    
        const providerName = company ? company : firstName;
  
        try {
            const realCustomerID = customerID;
            try {
              const doc = await db.collection("syncosacustomer").doc(customerID).get();            
              realCustomerID = doc.data().customerID;
  
            } catch (e) {}
      
            if (actualProductID) {
              const sendNotification = firebase.functions().httpsCallable('addOrUpdateCustomerReminder');
              const resp = await sendNotification({
                  userID: realCustomerID,
                  categoryType: this.state.maincategory,
                  date: libs.convertDateToString(this.state.servicedue),
                  time: '09:00 AM',
                  notes: this.state.notes,
                  itemId: actualProductID,
                  timestamp: Date.now(),
                  details: 'Service Due',
                  productName: this.generateCategoryName(),
                  providerName: providerName,
                  providerID: this.state.userId     
                  });
          }
          } catch (e) {}
      
          this.updateReminder(itemId, userID);
        }
  
    sendInviteOrNotification = async (
        finalDocID, userID, customerID, categoryName, actualProductID) => {
 
      this.setState({
          openBackDrop: true
      });
 
      if (customerID && categoryName) {
        const sendNotification = firebase.functions().httpsCallable('addCategoryToProviderProduct');
        const resp = await sendNotification({
            'customerID': customerID,
            'categoryName': categoryName,
            'id': finalDocID,
          });
}
  
      let status = '';
  
      var doc = await db.collection('syncosacustomer').doc(customerID).get();
      status = doc.data().status;
      let customerName = doc.data().firstName;
      let customerEmail = doc.data().email;

      this.addReminder(userID, finalDocID, customerName, customerID);
  
      if (!actualProductID && status === '3') { 

        const sendNotification = firebase.functions().httpsCallable('notifyCustomerAboutProduct');
        const resp = await sendNotification({
            'providerID': userID,
            'itemId': finalDocID,
            'customerEmail': customerEmail
                ? customerEmail
                : '',
            'customerID': localStorage.getItem('categoryData').customerId
                ? localStorage.getItem('categoryData').customerId
                : '',
            'categoryType': this.state.maincategory
            });


            localStorage.setItem('redirectData', JSON.stringify({'customerName': customerName, 'update': '1'}));
            this.setState({
                openBackDrop: false,
                openConfirmation: true
            });

      } else {
        this.sendEmail(this.state.company, userID, customerName, customerID);    
      }

    }
  
    sendEmail = async (company, userID, customerName, customerID) => {
  
          const sendNotification = firebase.functions().httpsCallable('sendInviteToCustomer');
          const resp = await sendNotification({
            'providerID': userID, 'customerID': customerID});
            

      db.collection(
          'syncosacustomer').doc(customerID).set({'status': '2'}, { merge: true });

          localStorage.setItem('redirectData', JSON.stringify({'customerName': customerName, 'update': '1'}));
          this.setState({
              openBackDrop: false,
              openConfirmation: true
            });
 

    }

    processProductDelete = () => {
        this.setState({
            openDialog: false,
        });
        
        const item = this.state.data[this.state.currentIndex];
        // TODO - add cloud function to delete related data
        db.collection("provider_products").doc(item['id']).delete();

        this.getProductsInfo();
    }

    deleteProduct = () => {
        this.setState({
            openDialog: true,
            actionButtonTitle: 'Delete',
            actionClass: 'show',
            handlePopupAction: this.processProductDelete,
            dialogTitle: 'Delete',
            dialogDescription: 'Are you sure you want to delete this item?',
            cancelButtonTitle: 'Close'
        });
    }
            
    render() {
        const { classes } = this.props;
        if (this.state.data.length === 0) {
            return (
                <div className={classes.root}>
                                        <CssBaseline />
                    {this.renderRedirect()}
                    <BackDrop open={this.state.openBackDrop} />
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupClose={() => this.setState({openDialog: false})} handlePopupAction={this.handlePopupAction.bind(this)} />
                    <ImagePreview open={this.state.showImagePreview} imageURL={this.state.imageURL} closePreview={this.closePreview} deleteImage={this.deleteImage} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                View items
          					</Typography>
                        </Toolbar>
                    </AppBar>

                    <MenuDrawer />

                    <main className={classes.content}>
                    <Toolbar />
                        <Typography className={`${this.state.openBackDrop ? classes.hidden : ''} ${classes.defaultMessage}`}>
                            No products
                        </Typography>
                    </main>
                </div>
            );
        } else {
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    {this.renderRedirect()}
                    <BackDrop open={this.state.openBackDrop} />
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupClose={() => this.setState({openDialog: false})} handlePopupAction={this.handlePopupAction.bind(this)} />
                    <ImagePreview open={this.state.showImagePreview} imageURL={this.state.imageURL} closePreview={this.closePreview} deleteImage={this.deleteImage} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                View items
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
                            justify="space-evenly"
                            alignItems="center"
                        >
                        <div className={`${classes.gridTop}`}>
                            <Grid 
                            fullWidth
                            container
                            direction="row"
                            justify="space-evenly"
                            alignItems="center"
                            
                            >

                            <Grid item >
                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={`${classes.navigationButton} ${this.state.currentIndex > 0 ? '' : classes.hidden}`}
                                                onClick={this.showPrior}
                                            >
                                                Previous
							
                                            </Button>
                            </Grid>

                            <Grid item >
                                {this.state.currentIndex + 1} of {this.state.data.length}
                            </Grid>

                            <Grid item >
                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={`${classes.navigationButton} ${this.state.currentIndex < this.state.data.length - 1 ? '' : classes.hidden}`}
                                                onClick={this.showNext}
                                            >
                                                Next
							
                                            </Button>
                            </Grid>

                            </Grid>
                            </div>
                            <Grid item fullWidth className={classes.gridBottom}>

                                <Card className={classes.form}>

                                    <CardContent>
                                        <form className={classes.form} noValidate>
                                            <Typography className={classes.formHeader}>
                                            {this.getDetailsTitle()} 
                                    </Typography>

                                            <TextField
                                                variant="outlined"
                                                margin="normal"     
                                                className={`${this.state.maincategory==='Household' ? '' : classes.hidden}`}
                                                fullWidth
                                                id="maincategory"
                                                label="Main category"
                                                name="maincategory"     
                                                value={this.state.maincategory}                                           
                                                readOnly={true}
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"     
                                                className={`${this.state.maincategory==='Household' ? '' : classes.hidden}`}
                                                fullWidth
                                                id="name"
                                                label="Product name"
                                                name="name"     
                                                value={this.state.name}                                           
                                                readOnly={true}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Household' ? '' : classes.hidden}`}
                                                fullWidth
                                                name="brand"
                                                label="Brand"
                                                value={this.state.brand}
                                                id="brand"
                                                readOnly={true}
                                            />
                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                className={`${this.state.maincategory==='Household' ? '' : classes.hidden}`}
                                                name="model"
                                                label="Model"
                                                id="model"
                                                value={this.state.model}
                                                readOnly={true}                                                
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Pets' ? '' : classes.hidden}`}
                                                fullWidth
                                                name="name"
                                                label="Name *"
                                                id="name"
                                                value={this.state.name}
                                                readOnly={true}                                                
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Pets' ? '' : classes.hidden}`}
                                                fullWidth
                                                name="dateofbirth"
                                                label="Date of birth"
                                                id="dateofbirth"
                                                value={this.state.dob}
                                                readOnly={true}                                                
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Pets' ? '' : classes.hidden}`}
                                                fullWidth
                                                value={this.state.age}
                                                readOnly={true}
                                                name="age"
                                                label="Age"
                                                id="age"
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Pets' ? '' : classes.hidden}`}
                                                fullWidth
                                                value={this.state.breed}
                                                readOnly={true}
                                                name="breed"
                                                label="Breed"
                                                id="breed"
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Vehicles' ? '' : classes.hidden}`}
                                                fullWidth
                                                name="make"
                                                label="Make"
                                                id="make"
                                                value={this.state.make}
                                                readOnly={true}
                                            />


                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Vehicles' ? '' : classes.hidden}`}
                                                fullWidth
                                                name="model"
                                                label="Model"
                                                id="model"
                                                value={this.state.model}
                                                readOnly={true}
                                            />


                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Vehicles' ? '' : classes.hidden}`}
                                                fullWidth
                                                name="numberplate"
                                                label="Number plate"
                                                id="numberplate"
                                                value={this.state.numberplate}                                                
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="year"
                                                label="Year"
                                                id="year"
                                                className={`${this.state.maincategory==='Vehicles' ? '' : classes.hidden}`}
                                                value={this.state.year}
                                                readOnly={true}                                                
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Vehicles' ? '' : classes.hidden}`}
                                                fullWidth
                                                readOnly={true}
                                                name="vin"
                                                label="VIN"
                                                id="vin"
                                                value={this.state.vin}                                                
                                            />

<FormControl className={classes.priceField} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-price">Purchase price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-price"
            
            value={this.state.price}
            
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>


        {this.state.customFields.map((field, index) => (


<TextField
    key={index}
    variant="outlined"
    margin="normal"
    fullWidth
    readOnly={true}
    name={field.title}
    label={field.title}
    id={field.title}
    value={field.value}
/>

))}

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="notes"
                                                label="Notes"
                                                id="notes"
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

                                    <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="servicefrequency"
                                                label="Service frequency"
                                                id="servicefrequency"
                                                value={this.state.servicefrequency}
                                                readOnly={true}                                                
                                            />


                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="servicedate"
                                                label="Service date"
                                                id="servicedate"
                                                value={this.state.servicedate}
                                                readOnly={true}                                                
                                            />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="servicedue"
                                                label="Service due"
                                                id="servicedue"
                                                value={this.state.servicedue}
                                                readOnly={true}                                                
                                            />



                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                onClick={this.openProductScreen}
                                            >
                                                Edit product
							
                                            </Button>

                                            

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                onClick={this.deleteProduct}
                                            >
                                                Delete product
							
                                            </Button>
                                            

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={`${this.state.actualProductID ? classes.hidden : ''} ${classes.submit}`}
                                                onClick={this.sendInvite}
                                            >
                                                Send to customer
							
                                            </Button>

                                            <Typography className={`${this.state.actualProductID ? '' : classes.hidden} ${classes.productStatus}`}>
                                                Item accepted
                                            </Typography>

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

export default withStyles(styles)(ProductsList);