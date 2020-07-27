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
        color: 'rgb(153, 153, 153, 1)',
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
    serchField: {
        marginLeft: "0rem",
        marginRight: "0rem",
        marginBottom: "1rem",
        marginTop: "0rem",
    }
});

class Search extends Component {
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
            openBackDrop: false,
            userId: '',
            current_customerName: '',
            openEditProduct: '',
            openEditCustomer: '',
            search: '',
            customers: [],
            products: [],
            customersOrig: [],
            productsOrig: [],
        };
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

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        }, () => this.updateSearchResults());
    };

    updateSearchResults() {
        const searchText = this.state.search.toLowerCase();
        const filteredCustomers = this.state.customersOrig.filter((customer) => 
           customer.firstName.toLowerCase().indexOf(searchText) !== -1
        );
        const filteredProducts = this.state.productsOrig.filter((product) => 
           product['name'].toLowerCase().indexOf(searchText) !== -1 || 
           product['brand'].toLowerCase().indexOf(searchText) !== -1 || 
           product['model'].toLowerCase().indexOf(searchText) !== -1 || 
           product['model2'].toLowerCase().indexOf(searchText) !== -1 || 
           product['model3'].toLowerCase().indexOf(searchText) !== -1
        );
        this.setState({
           customers: filteredCustomers,
           products: filteredProducts
        });
    }

    componentDidMount() {
        authMiddleWare(this.props.history);
        const that = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

                var userId = firebase.auth().currentUser.uid;
                db.collection("syncosacustomer").where("userID", "==", userId)
                    //.get()
                    //.then
                    .onSnapshot(function (querySnapshot) {
                        const customers = [];
                        querySnapshot.forEach((doc) => {
                            const userData = {...doc.data(), id: doc.id};
                            customers.push(userData);
                        });
                    
                        that.setState({ customersOrig: customers, customers, uiLoading: false, userId });
                    });
                db.collection("provider_products").where("userID", "==", userId)
                    //.get()
                    //.then
                    .onSnapshot(function (querySnapshot) {
                        const products = [];
                        querySnapshot.forEach((doc) => {
                            const userData = {...doc.data(), id: doc.id};
                            products.push(userData);
                        });
                    
                        that.setState({ productsOrig: products, products, uiLoading: false, userId });
                    });
            }
        });
    }

 
      renderRedirect() {
		if (this.state.openEditProduct) {
			return (
				<Redirect
					to={`/product-add`}
				/>
			);
        }
		if (this.state.openEditCustomer) {
			return (
				<Redirect
					to={`/customer-add`}
				/>
			);
        }        
	};

        saveData(id, type) {
          if (type === 'Customer') {
            localStorage.setItem('editCustomerID', id);
            this.setState({
              openEditCustomer: 1
            });
          }
          if (type === 'Product') {
            localStorage.setItem('editProductID', id);
            this.setState({
              openEditProduct: 1
            });
          }
        }
 

        renderSearchItems(object, type) {
   
            const that = this;
            const name = type === 'Customer' ? object['firstName'] : object['name'];

                return (
                    <React.Fragment>

            <Card key={object.id} className={this.props.classes.cardRoot} onClick={() => that.saveData(object.id, type)}>
                <CardHeader
                    title={type}
                    subheader={name}
                    titleTypographyProps={{className:this.props.classes.cardTitleText}}
                    subheaderTypographyProps={{className:this.props.classes.cardSubTitleText}}
                    classes={{root: this.props.classes.cardHeader}}
                />
            </Card>

            </React.Fragment>

        );

   
}

    render() {
        const { classes } = this.props;
        const { errors, uiLoading } = this.state;
        if (this.state.uiLoading === true) {
            return (
                <div className={classes.root}>
                    No products
                </div>
            );
        } else {
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    {this.renderRedirect()}
                    <BackDrop open={this.state.openBackDrop} />
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupClose={() => this.state.handlePopupClose()} handlePopupAction={() => this.state.handlePopupAction()} />
                    <ImagePreview open={this.state.showImagePreview} imageURL={this.state.imageURL} closePreview={this.closePreview} deleteImage={this.deleteImage} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Search
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <MenuDrawer />

                    <main className={classes.content}>
                        <Toolbar />

                        <div>


                                            <div className={classes.list}>

                                            <div className={classes.contentBox}>

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                className={classes.serchField}
                                                name="search"
                                                label="Search customer, product"
                                                id="search"
                                                onChange={this.handleChange}
                                            />


                            {this.state.customers.map((customer) => {
                                return this.renderSearchItems(customer, 'Customer')
                            })}

                            {this.state.products.map((product) => {
                                return this.renderSearchItems(product, 'Product')
                            })}
                            </div>

                        </div>
                        </div>

                    </main>
                </div>
            );
        }

    }

}

export default withStyles(styles)(Search);