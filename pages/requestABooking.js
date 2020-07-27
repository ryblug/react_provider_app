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

import InputAdornment from '@material-ui/core/InputAdornment';
import EventNoteIcon from '@material-ui/icons/EventNote';

import Divider from '@material-ui/core/Divider';
import * as libs from '../util/libs';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import AlertDialog from '../components/alertDialog';
import BackDrop from '../components/backDrop';

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

const BootstrapInput = withStyles((theme) => ({
    root: {
        'label + &': {
            marginTop: theme.spacing(3),
        },
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
            borderRadius: 4,
            borderColor: '#80bdff',
            boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

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
        marginBottom: '0.7rem'
    },
    captionText: {
        color: "rgb(153, 153, 153, 1)",
        textAlign: "center"
    },
    gridTop: {
        backgroundColor: '#53E7C3',
        height: "8rem",
        width: "100%",
        textAlign: "center",
        color: '#494B96',
        fontWeight: 'bold',
        fontSize: '1.25rem',
        paddingTop: '0.5rem'
    },
    gridImage: {
        width: "100%",
        textAlign: "center",
        marginBottom: "3.5rem",
        marginTop: "1rem"
    },
    gridBottom: {
        marginTop: '1rem',
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
        marginBottom: "1.5rem"
    },
    buttonImage: {
        height: "2.5rem"
    },
    submit: {
        marginTop: "1rem",
        backgroundColor: '#494B96 !important',
        height: "3rem"        
    },
});

class RequestABooking extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            uiLoading: false,
            openBackDrop: false,
            openDialog: false,
            openAddFieldDialog: false,
            showImagePreview: false,
            maincategory: 'Household',
            notes: '',
            servicetype: '',
            servicedate: '',
            servicetime: '',
            openConfirmation: false,
            company: '',
            finalDocID: '',
            customer: '',
            product: '',
            customerID: '',
            productID: '',
            customerList: [],
            productsList: [],
            typeArray: ['Service', 'Repair', 'Other'],
            statusArray: ['Now due', 'Due soon', 'Overdue', 'Other'],
            price: '',
            selectedCustomer: {},
            selectedProduct: {},
            customerEmail: ''
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
                that.setState({ userId: userId});
                console.log('userId', userId);
                
                db.collection("syncosacustomer").where("userID", "==", userId)
                    .onSnapshot(function (querySnapshot) {
                        const customerList = [];
                        querySnapshot.forEach((doc) => {
                            const userData = doc.data();
                            customerList.push({ id: doc.id, userData });
                        });
                        console.log(customerList);
                        that.setState({ customerList, uiLoading: false });
                    });

            }
        });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: libs.capitalizeFirstLetter(event.target.value)
        });
    };

    isEmail = (email) => {
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email.match(emailRegEx)) return true;
        else return false;
    };

    closePreview = () => {
        this.setState({
            showImagePreview: false
        });
    }

    selectCustomer = (event) => {
        const selectedCustomerID = event.target.value;        
        const selectedCustomer = this.state.customerList.filter(customer => customer.id === selectedCustomerID)[0]['userData'];
        if (event.target.name === 'customer') {
            this.setState({
                customerID: selectedCustomerID,
                customer: selectedCustomer['firstName'],
                customerEmail: selectedCustomer['email'],
                selectedCustomer: selectedCustomer
            });
        }
        const that = this;
        db.collection("provider_products").where("userID", "==", this.state.userId)
        .onSnapshot(function (querySnapshot) {
            const productsList = [];
            querySnapshot.forEach((doc) => {
                const userData = doc.data();
                if (!userData['actualProductID']) return;
                if (userData['syncosaCustomerID'] !== selectedCustomerID) return;
                productsList.push({ id: doc.id, userData });
            });
            that.setState({ productsList });
        });
      };

      selectProduct = (event) => {
        const selectedProductID = event.target.value;
        const productInfo = this.state.productsList.filter(product => product.id === selectedProductID)[0]['userData'];
        let typeArray = [];
        if (productInfo['mainCategory'] === 'Household') {
            typeArray = ['Service', 'Repair', 'Other'];
        } else if (productInfo['mainCategory'] === 'Pets') {
            typeArray = ['Check-up', 'Treatment', 'Other'];
        } else {
            typeArray = ['Service', 'Repair', 'Other'];
        }
        console.log({
            productID: selectedProductID,
            product: productInfo['name'],
            typeArray: typeArray,
            selectedProduct: productInfo
        });
        this.setState({
            productID: selectedProductID,
            product: productInfo['name'],
            typeArray: typeArray,
            selectedProduct: productInfo
        });
      };

      selectType = (event) => {
        this.setState({
            servicetype: event.target.value,
        });
      }

      selectStatus = (event) => {
        this.setState({
            status: event.target.value,
        });
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

    handlePriceChange = (event) => {
        const priceValue = event.target.value ? this.localStringToNumber(event.target.value) : '';
        console.log('priceValue: ', priceValue);
        this.setState({
            price: priceValue,
        });
    }
      
    localStringToNumber( s ){
        return Number(String(s).replace(/[^0-9.]+/g,""))
    }

    convertDateToString(date) {
        if (date) {
          if (Object.prototype.toString.call(date) !== '[object Date]') {
            date = new Date(date);
          }          
          const year = date.getFullYear();
          const month = "0" + (+date.getMonth() + 1);
          const day = "0" + date.getDate();
          return day.substr(-2) + '/' + month.substr(-2) + '/' + year;
        }
        return date;
    }

    convertTimeToString(time) {
        const date = new Date(time);
        let hr = date.getHours();
        let min = date.getMinutes();
        if (min < 10) {
          min = '0' + min;
        }
        let ampm = 'AM';
        if ( hr > 12 ) {
          hr -= 12;
          ampm = 'PM';
        }
        if ( hr < 10 ) {
          hr = '0' + hr;
        }
        return hr + ':' + min + ' ' + ampm;
    }

    async saveBooking() {
        console.log('customerID: ', this.state.customerID);
        if (!this.state.customerID) {
            this.setState({
                loading: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Select please customer.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        if (!this.state.productID) {
            this.setState({
                loading: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Select please product.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        if (!this.state.servicetype) {
            this.setState({
                loading: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Select please "Service Type".',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        if (!this.state.servicedate) {
            this.setState({
                loading: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Select please service date.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        if (!this.state.servicetime) {
            this.setState({
                loading: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Select please service time.',
                cancelButtonTitle: 'Close',
            });
            return;
        }

        const that = this;

        that.setState({
            openBackDrop: true
        });

        const result = await db.collection(
            'users').doc(this.state.userId).get();
        const providerInfo = result.data();            
        const firstName = providerInfo['firstName'];
        const company = providerInfo['company'];
        const userEmail = providerInfo['email'];
    

        let doc = await db.collection(
            'syncosacustomer').doc(this.state.customerID).get();
            
        const userInfo = doc.data();



    let productName = '';
    let brand = '';
    let model = '';
    let model2 = '';
    let model3 = '';

    doc = await db.collection(
        'provider_products').doc(this.state.productID).get();

    const itemData = doc.data();        

    productName = itemData['name'];
    brand = itemData['brand'] ? itemData['brand'] : '';
    model = itemData['model'] ? itemData['model'] : '';
    model2 = itemData['model2'] ? itemData['model2'] : '';
    model3 = itemData['model3'] ? itemData['model3'] : '';

    let fullProductName = '';
    if (this.state.selectedCustomer['categoryType'] === 'Household') {
      fullProductName =
          productName + (brand ? ' ' + brand : '');
    } else if (this.state.selectedCustomer['categoryType'] === 'Pets') {
      fullProductName = productName;
    } else {
      fullProductName =
          productName + (brand ? ' ' + brand : '');
    }

        db.collection("booking").add({
            userID: this.state.selectedCustomer['customerID'],
            customerID: this.state.selectedCustomer['customerID'],
            categoryID: this.state.selectedProduct['categoryID'] ? this.state.selectedCustomer['categoryID'] : '',
            categoryType: this.state.selectedProduct['mainCategory'],
            name: (company ? company : firstName),
            email: userEmail,
            type: this.state.servicetype,
            proposedstatus: this.state.status,
            price: this.state.price,
            date: this.convertDateToString(this.state.servicedate),
            time: this.convertTimeToString(this.state.servicetime),
            note: this.state.notes,
            itemId:
            this.state.selectedProduct['actualProductID'], // currentproviderProductID,
            originalID: this.state.userId,
            originalUserID: this.state.userId,
            status: 'requested',
            direction: 'to_customer',
            originator: 'provider',
            from: (company ? company : firstName),
            to: userInfo['firstName'],
            timestamp: Date.now(),
            customername: userInfo['firstName'],
            customeremail: this.state.customerEmail,
            company: userInfo['company'] ? userInfo['company'] : '',
            address: userInfo['address'] ? userInfo['address'] : '',
            phone: userInfo['phone'] ? userInfo['phone'] : '',
            mobile: userInfo['mobile'] ? userInfo['mobile'] : '',
            productName: this.state.product,
            brand: brand,
            model: model,
            model2: model2,
            model3: model3,
            service: this.state.servicetype,
            fullProductName: fullProductName,
            actionType: 'sent'
              })
            .then(async function (docRef) {

                console.log('docRef: ', docRef);

                const sendNotification = firebase.functions().httpsCallable('notifyCustomerAboutBooking');
                await sendNotification({
                    providerID: that.state.userId,
                    itemId: that.state.productID,
                    actualProductID: that.state.selectedProduct['actualProductID'],
                    customerID: that.state.selectedCustomer['customerID'],
                    categoryType: that.state.selectedProduct['mainCategory'],
                    bookingID: docRef.id,
                    categoryName: that.state.selectedProduct['categoryName'],            
                  });

                  localStorage.setItem('customerName', userInfo['firstName']);
        
                    that.setState({
                        openBackDrop: false,
                        returnToList: 1
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

    renderRedirect() {
		if (this.state.returnToList) {
			return (
				<Redirect
					to={`/request-confirmed`}
				/>
			);
        }
	};

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
                    {this.renderRedirect()}                    
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupAction={this.handlePopupAction.bind(this)} handlePopupClose={() => this.setState({openDialog: false})} />
                    <BackDrop open={this.state.openBackDrop} />
                    <ImagePreview open={this.state.showImagePreview} imageURL={this.state.imageURL} closePreview={this.closePreview} deleteImage={this.deleteImage} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Request a booking
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

                            <Grid item fullWidth className={classes.gridBottom}>

                                <Card className={classes.form}>

                                    <CardContent>
                                        <form className={classes.form} noValidate>

                                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                                <InputLabel htmlFor="customer">Select customer *</InputLabel>
                                                <Select
                                                    native
                                                    label="Select customer *"
                                                    inputProps={{
                                                        name: 'customer',
                                                        id: 'customer',
                                                    }}
                                                    defaultValue=''
                                                    //value={this.state.customerID}
                                                    onChange={this.selectCustomer}
                                                >   
                                                <option value=""></option> 
                                                {this.state.customerList.map((customer) => {                                                    
                                                    return (<option key={`${customer.id}`} value={`${customer.id}`}>{customer.userData.firstName}</option>);
                                                })}
                                                </Select>
                                            </FormControl>

                                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                                <InputLabel htmlFor="product">Product *</InputLabel>
                                                <Select
                                                    native
                                                    label="Product *"
                                                    inputProps={{
                                                        name: 'product',
                                                        id: 'product',
                                                    }}
                                                    defaultValue=''
                                                    //value={this.state.product}
                                                    onChange={this.selectProduct}
                                                >   
                                                <option value=""></option> 
                                                {this.state.productsList.map((product) => {
                                                    return (<option key={`${product.id}`} value={`${product.id}`}>{product.userData.name}</option>);
                                                })}
                                                </Select>
                                            </FormControl>


                                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                                <InputLabel htmlFor="servicetype">Type of booking *</InputLabel>
                                                <Select
                                                    native
                                                    label="Type of booking *"
                                                    inputProps={{
                                                        name: 'servicetype',
                                                        id: 'servicetype',
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

                                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                                <InputLabel htmlFor="status">Status</InputLabel>
                                                <Select
                                                    native
                                                    label="Status"
                                                    inputProps={{
                                                        name: 'status',
                                                        id: 'status',
                                                    }}
                                                    defaultValue=''
                                                    //value={this.state.status}
                                                    onChange={this.selectStatus}
                                                >   
                                                <option value=""></option> 
                                                {this.state.statusArray.map((status) => {
                                                    return (<option key={`${status}`} value={`${status}`}>{status}</option>);
                                                })}
                                                </Select>
                                            </FormControl>

                                            <FormControl fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-price">Est price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-price"
            
            value={this.state.price}
            onChange={this.handlePriceChange}
            
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>

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
        label="Select preferred date *"
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
        label="Select preferred time *"
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
                                                name="notes"
                                                label="Notes"
                                                id="notes"
                                                onChange={this.handleChange}
                                            />

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                onClick={() => this.saveBooking()}
                                            >
                                                Request booking
							
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

export default withStyles(styles)(RequestABooking);