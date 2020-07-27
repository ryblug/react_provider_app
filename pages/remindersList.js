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
    noRecordsMessageBox: {
        marginTop: "7rem"
    },
    noRecordsMessage: {
        textAlign: "center",
        color: 'rgb(153, 153, 153, 1)',
        fontWeight: "bold",
        fontSize: "1.4rem",
    },
    reminderDetails: {
        fontSize: "1.2rem",
        textTransform: "uppercase"
    }
});

class RemindersList extends Component {
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
            openDialog: false,
            userId: '',
            current_customerName: '',
            openProductPage: false,
            openRequestAdd: '',
            openEditReminder: '',
            company: '',
            viewMode: 1,
            reminders: [],
            remindersDates: [],
            remindersOriginalDates: [],
            bookingID: '',
            notifivationID: ''
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

    search(nameKey, myArray){
      for (var i=0; i < myArray.length; i++) {
         if (myArray[i].shortDate === nameKey) {
           return myArray[i];
         }
      }
      return [];
    } 

    componentDidMount() {
        authMiddleWare(this.props.history);
        localStorage.setItem('editReminderID', '');
        const that = this;
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {

                var userId = firebase.auth().currentUser.uid;
                console.log('userId', userId);
                db.collection("reminders").where("userID", "==", userId)
                    //.get()
                    //.then
                    .onSnapshot(function (querySnapshot) {
                        const reminders = [];
                        querySnapshot.forEach((doc) => {
                            const userData = {...doc.data(), id: doc.id};
                            reminders.push(userData);
                        });
                        reminders.sort(libs.sortByDate);
                        let remindersDates = [];
                        const remindersOriginalDates = [];
                        reminders.forEach((reminder) => {
                            const date = that.getFormattedDateTime(reminder['date'], '', false);
                            const resultObject = that.search(date, remindersDates);
                            if (resultObject.length === 0) {
                              remindersDates.push({shortDate: date, date: reminder['date']});
                              remindersOriginalDates.push(reminder['date']);
                            }
                        });
                        //console.log(remindersDates);
                        //remindersDates.sort(libs.sortByDate);
                        //console.log(remindersDates);
                    
                        that.setState({ reminders, remindersDates, remindersOriginalDates, uiLoading: false, userId });
                    });
            }
        });
    }

    getNotificationColor(date, time) {
        const diff = libs.getDatesDiff(date, time);
        if (diff > 0) {
          return 'rgb(196, 73, 11, 1)';
        } else {
          if (Math.abs(diff.abs) <= 30 * 24 * 60) {
            return 'brown';
          }
        }
        return 'rgb(153, 153, 153, 1)';
    }  
     
      renderRedirect() {
		if (this.state.openEditReminder) {
			return (
				<Redirect
					to={`/reminder-add`}
				/>
			);
        }
		if (this.state.openRequestAdd) {
			return (
				<Redirect
					to={`/request-a-booking`}
				/>
			);
        }        
	};
 

            
    getPartOfString(str, len) {
        return str.length > len ? str.substring(0, len) + '...' : str;
      }
    
    getProductTitle(booking) {
        if (booking['fullProductName']) {
          return this.getPartOfString(
              `${booking['fullProductName'][0].toUpperCase()}${booking['fullProductName'].substring(1)}`,
              22);
        }
    
        return this.getPartOfString(
            `${booking['productName'][0].toUpperCase()}${booking['productName'].substring(1)}`,
            22);
      }

nth(d) {
  if (d > 3 && d < 21) return 'th';
  switch (d % 10) {
    case 1:  return "st";
    case 2:  return "nd";
    case 3:  return "rd";
    default: return "th";
  }
}

      getFormattedDateTime(date, time, useTime = true) {
          const dateArr = date.split('/');
          date = dateArr[1] + '/' + dateArr[0] + '/' + dateArr[2];

          const dt = new Date(date + ' ' + time);
      
          const days = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
          const month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"][dt.getMonth()];
          
          return days[ dt.getDay() ] + ', ' + dt.getDate() + this.nth(dt.getDate()) + ' ' + month + (useTime ? ' at ' + time : '');
          
      }

      showDate(booking) {
        return this.getFormattedDateTime(
            booking['date'], booking['time']);
      }

      async processReminderDelete(reminder) {
        const that = this;
        if (reminder.notificationID) {
            try {
                db.collection("notifications").doc(reminder.notificationID).delete();
            } catch(e) {}
        }
        db.collection("reminders").doc(reminder.id).delete().catch(() => {
            that.setState({
                openBackDrop: false,
                openDialog: true,
                dialogTitle: 'Error',
                dialogDescription: 'Error ocured during deleting reminder.',
                cancelButtonTitle: 'OK',
                actionButtonTitle: '',
                actionClass: 'hide',
                handlePopupAction: '',
            });
        });
        that.setState({
            openBackDrop: false,
            openDialog: false,
        });
      }

      deleteReminder(reminder) {
        this.setState({
            openDialog: true,
            actionButtonTitle: 'Delete',
            actionClass: 'show',
            handlePopupAction: () => this.processReminderDelete(reminder),
            dialogTitle: 'Delete',
            dialogDescription: 'Are you sure you want to delete this reminder?',
            cancelButtonTitle: 'Close'
        
        })        
      }

      makeBooking(reminder) {
          localStorage.setItem('editBooking', reminder.id);
          this.state({
             openRequestAdd: 1
          });
      }

      viewReminderDetails(id) {
          console.log('id', id);
          localStorage.setItem('editReminderID', id);
          this.setState({
             openEditReminder: 1
          });
      }

renderReminders(date) {
   
    const items = [];
            const that = this;
            let found = 0;
            return this.state.reminders.map((doc, index) => {

                const reminderDate = that.getFormattedDateTime(doc['date'], '', false);

                if (date !== reminderDate) return "";

                found++;

                let dateTitle = '';
                if (found === 1) {
                    dateTitle = (<h1 className={this.props.classes.dateTitle}>{date}</h1>);
                }

                return(
                    <React.Fragment key={doc.id}>
                    {dateTitle}

            <Card className={this.props.classes.cardRoot}>
                <CardHeader
                    action={
                        <div>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.props.classes.viewButton}
                            onClick={() => this.viewReminderDetails(doc.id)}
                        >
                            Edit
        
                        </Button>

                        {doc.showBook 
                        ? <p></p>
                        : ''}

                        {doc.showBook 
                        ? <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={this.props.classes.viewButton}
                            onClick={() => this.makeBooking(doc)}
                        >
                            Book
        
                        </Button>
                        : ''}

                       
                        <p></p>
        
                        <IconButton className={this.props.classes.deleteButton} aria-label="delete" onClick={() => this.deleteReminder(doc)}>
                        <DeleteIcon />
                        <Typography className={this.props.classes.deleteButtonText}>
                            Delete
                        </Typography>
                      </IconButton>
                      </div>
                    }
                    title={doc.customerName ? doc.customerName.toUpperCase() : ''}
                    subheader={doc.productName ? doc.productName : ''}
                    titleTypographyProps={{className:this.props.classes.cardTitleText}}
                    subheaderTypographyProps={{className:this.props.classes.cardSubTitleText}}
                    classes={{root: this.props.classes.cardHeader}}
                />
                <CardContent classes={{root: this.props.classes.cardContent}}>
                <Typography variant="body2" component="p" className={this.props.classes.reminderDetails}>
                   <span style={{color: this.getNotificationColor(doc.date, doc.time)}}>{doc.details + ' ' + doc.time}</span>
                </Typography>
                </CardContent>
            </Card>

            </React.Fragment>

        )});

        //return items;
    
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
                    <BackDrop open={this.state.openBackDrop} />
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupClose={() => this.setState({openDialog: false})} handlePopupAction={this.handlePopupAction.bind(this)} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Reminders
                            </Typography>
                        </Toolbar>
                    </AppBar>

                    <MenuDrawer />

                    <main className={classes.content}>
                        <Toolbar />

                        <div>

                                            <div className={classes.list}>

                                            <div className={classes.contentBox}>

                            {this.state.remindersDates.map((dt) => {
                                return this.renderReminders(dt.shortDate)
                            })}
                            </div>

                            <div className={`${this.state.remindersDates.length !== 0 || (this.state.openBackDrop && this.state.remindersDates.length === 0) ? classes.hidden : ''} ${classes.noRecordsMessageBox}`}>
                            <Typography className={classes.noRecordsMessage}>
                                There are currently no reminders set.
                            </Typography>
                            </div>

                        </div>
                        </div>

                    </main>
                </div>
            );
        }

}

export default withStyles(styles)(RemindersList);