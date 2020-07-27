/* eslint-disable no-use-before-define */
import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import BackDrop from '../components/backDrop';

import DatePicker from "react-datepicker";
import * as libs from '../util/libs';

import { Redirect } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import MenuDrawer from '../components/menuDrawer';
import AddFieldDialog from '../components/addFieldDialog';
import ImagePreview from '../components/imagePreview';
import Autocomplete from '@material-ui/lab/Autocomplete';

import InputAdornment from '@material-ui/core/InputAdornment';
import EventNoteIcon from '@material-ui/icons/EventNote';

import Divider from '@material-ui/core/Divider';

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
import photoLogo from '../images/providers/photo_add.png';
import remindersAddImage from '../images/providers/add_reminder.png';


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
        marginTop: '-4.5rem',
        width: "100%",
        height: "100vh"
    },
    imagePhoto: {
        marginTop: '0rem',        
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
        backgroundColor: '#53E7C3 !important',
        color: '#494B96',
        height: "3rem"
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
        width: "3rem"
    },
    addPhoto: {
        textAlign: "center",
        fontSize: "1.25rem",
        color: 'rgb(153, 153, 153, 1)',
        marginTop: "1rem"
    }
});

class ReminderAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            uiLoading: false,
            openBackDrop: false,
            openDialog: false,
            openAddFieldDialog: false,
            imageURL: '',
            showImagePreview: false,
            image: '',
            imageType: '',
            name: '',
            details: '',
            notes: '',
            date: '',
            time: '',
            notificationID: '',
            eventId: '',
            openConfirmation: false,
            imageObject: null,
            finalDocID: '',
            pushnotifications: ''
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
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user) {

                var userId = firebase.auth().currentUser.uid;
                const doc = await db.collection('users').doc(userId).get();
                const userData = doc.data();
                that.setState({ userId: userId, customerID: localStorage.getItem('customerID') ? localStorage.getItem('customerID') : '', pushnotifications: userData['pushnotifications'] });
                console.log('userId', userId);

                if (localStorage.getItem('editReminderID')) {
                  that.getInfo();
                }
            }
        });
    }

    getInfo() {
        const that = this;
	db.collection("reminders").doc(localStorage.getItem('editReminderID'))
	.get()
	.then(function (querySnapshot) {
        const data = querySnapshot.data();
        const stateObject = {
          details: data['details'],
          date: libs.convertStringToDate(data['date']),
          time: libs.convertStringToTime(data['date'], data['time']),
          notes: data['notes'],
          notificationID: data['notificationID'],
          eventId: data['eventId'],          
        };

        that.setState(stateObject);
      });
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: libs.capitalizeFirstLetter(event.target.value)
        });
    };

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

    openAddFieldDialog = () => {
        this.setState({
           openAddFieldDialog: true
        });
    }

    processAddField = (name) => {
console.log('name: ', name);

this.setState({
    openAddFieldDialog: false,
    customFields: [...this.state.customFields, {title: name, value: ''}]
            });
    
    };

    handleSerialNumberImage = (event) => {
        console.log(event.target.files);
        this.setState({
            serialnumberImage: URL.createObjectURL(event.target.files[0]),
            serialnumberImageObject: event.target.files[0],
            serialnumberImageURL: event.target.files[0].name
          })        
    }

    handleImage = (event) => {
        this.setState({
            image: URL.createObjectURL(event.target.files[0]),
            imageObject: event.target.files[0],
            imageURL: event.target.files[0].name
          })        
    }

    showImagePreview = (imageURL, imageType) => {
        console.log('imageURL:', imageURL);
        this.setState({imageType: imageType, imageURL: imageURL, showImagePreview: true});
    }

    closePreview = () => {
this.setState({
    showImagePreview: false
});
    }

    deleteImage = () => {
        this.setState({
            showImagePreview: false,
            [this.state.imageType]: ''
        });        
    }

    setYear = (date) => {
        this.setState({
            year: date
        })
    }
    
    selectCategory = (event) => {
        this.setState({
            maincategory: event.target.value
        });
      };

      getCustomFields = () => {
        // const customFields = [];
        // this.state.customFields.forEach((settings) => {
        //   customFields.push(
        //     {
        //       'title': settings.title,
        //       'value': settings.controller.text,
        //     },
        //   );
        // });
        // return customFields;
        return this.state.customFields;
      }

      renderConfirmationRedirect() {
		if (this.state.openConfirmation) {
			return (
				<Redirect
					to={`/reminders-list`}
				/>
			);
		}
	};

      uploadImage = async (
        imagePath, file, uid, fieldName, tableName) =>  {
            const that = this;
      if (imagePath) {
          var dateStart = Date.now();
                    
          var uploadTask = firebase.storage().ref().child(uid)
          .child(libs.baseName(imagePath)).put(file);
  
          uploadTask.on('state_changed', function(snapshot){
            // Observe state change events such as progress, pause, and resume
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            // var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            // console.log('Upload is ' + progress + '% done');
            // switch (snapshot.state) {
            //   case firebase.storage.TaskState.PAUSED: // or 'paused'
            //     console.log('Upload is paused');
            //     break;
            //   case firebase.storage.TaskState.RUNNING: // or 'running'
            //     console.log('Upload is running');
            //     break;
            // }
          }, function(error) {
            // Handle unsuccessful uploads
            //Utils.saveLog('Error file upload', path.basename(imagePath));
            const countImages = that.state.countImages - 1;
            that.setState({countImages: countImages});


          }, function() {

            uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL) {
console.log('fieldName', fieldName, downloadURL, that.state.countImages);
                if (fieldName === 'image') {
                    that.setState({imageURL: downloadURL});
                  }
                  if (fieldName === 'serialnumberImage') {
                    that.setState({serialnumberImageURL: downloadURL});
                }
        
                const countImages = that.state.countImages - 1;
                that.setState({countImages: countImages});
    
      
            });
          });



        }

    }
  
      updateDBAfterImageUploaded = (uid) => {
        if (this.state.image) {
          this.uploadImage(this.state.image, this.state.imageObject, uid, 'image', 'provider_products');
        }
        if (this.state.serialnumberImage) {
          this.uploadImage(this.state.serialnumberImage, this.state.serialnumberImageObject, uid, 'serialnumberImage',
              'provider_products');
        }
      }

      sendReminderToCalendar() {
        return '';
      }

      getCalendarID() {
          return '';
      }

      saveReminder = async (mode) => {
          const that = this;

          if (!this.state.details) {
            that.setState({
                openDialog: true,
                actionButtonTitle: '',
                actionClass: 'hide',
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Details" field.',
                cancelButtonTitle: 'Close'
            });                    
            return;
          }

          if (!this.state.date) {
            that.setState({
                openDialog: true,
                actionButtonTitle: '',
                actionClass: 'hide',
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Date" field',
                cancelButtonTitle: 'Close'
            });                    
            return;
          }      
    
          that.setState({
            openBackDrop: true
          });                    

          let countImages = 1;

          //this.setState({countImages: 1});

          if (this.state.imageURL &&
              !libs.inStorage(this.state.imageURL)) {
                countImages++;
              }
      
          if (countImages > 0) {

              this.setState({countImages: countImages});

              const timer = setInterval(() => {            
                  
              if (this.state.countImages <= 0) {
                  
                clearInterval(timer);
                
                that.setState({countImages: 0});               
                
                const imageData = {};
                let cnt = 0;
                if (that.state.imageURL) {
                  imageData['image'] = that.state.imageURL;
                  cnt++;
                }
                
                if (cnt > 0) {
                  console.log('finalDocID', that.state.finalDocID);
                  console.log(imageData);
                  db.collection('reminders').doc(that.state.finalDocID).set(imageData, { merge: true });
                }
                that.setState({finalDocID: ''});
      
                that.setState({
                        openBackDrop: false,
                        openDialog: true,
                        actionButtonTitle: '',
                        actionClass: 'hide',
                        dialogTitle: 'Done',
                        dialogDescription: 'Reminder saved',
                        cancelButtonTitle: 'OK'
                });                    

              }
            });
          }
      
          if (localStorage.getItem('editReminderID')) {

            const eventId = this.sendReminderToCalendar(this.state.details, this.state.notes, this.state.date, this.state.time ? this.state.time : '09:00 AM', this.state.eventId);

            if (this.state.notificationID && this.state.pushnotifications) {
                let serverTime = 0;
                const callCloudFunction = firebase.functions().httpsCallable('getServerTime');
                const resp = await callCloudFunction({
                    userID: this.state.userId
                });
                serverTime = parseInt(resp.data);
                let timeDiff = 0;
                if (serverTime > 0) {
                  timeDiff = serverTime - Date.now();
                }
                const donDate = libs.convertStringToTime(libs.convertDateToString(this.state.date), libs.convertTimeToString(this.state.date, this.state.time)).getTime() -
                    300 * 1000 +
                    timeDiff;


                    await db.collection('notifications').doc(this.state.notificationID).set({
                        title: this.state.details,
                        description: this.state.notes + ' ' + libs.convertTimeToString(this.state.date, this.state.time),
                        date: donDate,
                        time: libs.convertTimeToString(this.state.date, this.state.time),
                    });
            }

            let finalDocID = localStorage.getItem('editReminderID');
            that.setState({finalDocID: finalDocID});

            this.updateDBAfterImageUploaded(this.state.userId);

            db.collection('reminders').doc(finalDocID).set({
                details: this.state.details,
                date: libs.convertDateToString(this.state.date),
                time: libs.convertTimeToString(this.state.time),
                notes: this.state.notes,                
                eventId: eventId,
                calendarId: this.getCalendarID(),
              }, { merge: true }).then((data) => {
                
                const countImages = that.state.countImages - 1;
                this.setState({countImages: countImages});

        
              });

      
          } else {

            const eventId = this.sendReminderToCalendar(this.state.details, this.state.notes, this.state.date, this.state.time ? this.state.time : '09:00 AM', '');
            let notid = '';

            if (this.state.pushnotifications) {
                let serverTime = 0;
                const callCloudFunction = firebase.functions().httpsCallable('getServerTime');
                const resp = await callCloudFunction({
                    userID: this.state.userId
                });
                serverTime = parseInt(resp.data);
                let timeDiff = 0;
                if (serverTime > 0) {
                  timeDiff = serverTime - Date.now();
                }
                const donDate = libs.convertStringToTime(libs.convertDateToString(this.state.date), libs.convertTimeToString(this.state.date, this.state.time)).getTime() -
                    300 * 1000 +
                    timeDiff;


                    const ref = await db.collection('notifications').add({
                        userID: this.state.userId,
                        title: this.state.details,
                        description: this.state.notes + ' ' + libs.convertTimeToString(this.state.date, this.state.time),
                        type: 'Reminder overdue',
                        status: 'future',
                        date: donDate,
                        time: libs.convertTimeToString(this.state.date, this.state.time),
                      });
                      notid = ref.id;
              
                
            }

            this.updateDBAfterImageUploaded(this.state.userId);

              db.collection('reminders').add({
                userID: this.state.userId,
                details: this.state.details,
                date: libs.convertDateToString(this.state.date),
                time: libs.convertTimeToString(this.state.time),
                notes: this.state.notes,                
                timestamp: Date.now(),
                eventId: eventId,
                calendarId: this.getCalendarID(),
                notificationID: notid,
                productName: 'Reminder overdue',
                showBook: '1'                
              }).then((data) => {
                const finalDocID = data.id;
                const countImages = that.state.countImages - 1;                
                that.setState({finalDocID: finalDocID, countImages: countImages});
        
              }).catch((e) => {

              });
          }

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
                    {this.renderConfirmationRedirect()}
                    <BackDrop open={this.state.openBackDrop} />
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupClose={() => this.setState({openDialog: false})} handlePopupAction={this.handlePopupAction.bind(this)} />
                    <ImagePreview open={this.state.showImagePreview} imageURL={this.state.imageURL} closePreview={this.closePreview} deleteImage={this.deleteImage} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Add reminder
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

                            <Grid item fullWidth className={`${classes.gridTop} ${this.state.image ? classes.hidden : ''}`}>
                                

                                <div className={`${classes.imagePhoto} ${this.state.image ? classes.hidden : ''}`}>
      <input accept="image/*" className={classes.inputFile} id="image-button" type="file" onChange={this.handleImage} />
      <label htmlFor="image-button">
        <IconButton color="primary" aria-label="upload picture" component="span">
        <img src={photoLogo} alt=""  />          
        </IconButton>
      </label>
    </div>

                            </Grid>
                            <Grid item fullWidth className={`${this.state.image ? classes.gridImage : classes.hidden}`}>

                            <Typography>
                            <Typography variant="body1" component="span" className={classes.addedTo}>ADDED TO: </Typography>
                            <Typography variant="body1" component="span" className={classes.customerTitle}>Customer</Typography>
                                    </Typography>


                            <img className={`${classes.imagePhotoPreview} ${this.state.image ? '' : classes.hidden}`} src={this.state.image} alt="" />

                            <div className={`${classes.serialPhoto} ${this.state.image ? classes.hidden : ''}`}>
      <input accept="image/*" className={classes.inputFile} id="image-button2" type="file" onChange={this.handleImage} />
      <label htmlFor="image-button2">
        <IconButton color="primary" aria-label="upload picture" component="span">
        <img src={photoLogo} alt=""  />          
        </IconButton>
      </label>
    </div>

    <div className={`${classes.serialPhoto} ${this.state.image ? '' : classes.hidden}`}>      
        <img src={photoLogo} alt="" onClick={() => this.showImagePreview(this.state.image, 'image')} />
    </div>


                            </Grid>                            
                            <Grid item fullWidth className={classes.gridBottom}>

                                <Card className={classes.form}>

                                    <CardContent>
                                        <Typography className={`${this.state.image ? classes.hidden : ''} ${classes.addPhoto}`}>Add photo</Typography>

                                        <form className={classes.form} noValidate>

                                            <TextField
                                                variant="outlined"
                                                margin="normal"     
                                                fullWidth
                                                id="details"
                                                label="Details *"
                                                name="details"     
                                                value={this.state.details}
                                                onChange={this.handleChange}
                                            />
<DatePicker
      selected={this.state.date}
      onChange={(date) => this.handleDateChange(date, 'date')}
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
        id="date"
        name="date"
        value={this.state.date}        
        label="Date *"
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
      selected={this.state.time}
      onChange={(date) => this.handleTimeChange(date, 'time')}
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
        id="time"
        name="time"
        value={this.state.time}        
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
                                                id="notes"
                                                label="Add a note"
                                                name="notes"     
                                                value={this.state.notes}
                                                onChange={this.handleChange}
                                            />


                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                className={`${classes.greenButton}`}
                                                onClick={() => this.saveReminder('')}
                                            >
                                                <img alt="" src={remindersAddImage} className={classes.buttonImage} />
                                               Save reminder
							
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

export default withStyles(styles)(ReminderAdd);