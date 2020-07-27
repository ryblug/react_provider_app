/* eslint-disable no-use-before-define */
import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import DatePicker from "react-datepicker";
import DeleteIcon from '@material-ui/icons/Delete';

import { Redirect } from 'react-router-dom';

import Avatar from '@material-ui/core/Avatar';
import MenuDrawer from '../components/menuDrawer';
import AddFieldDialog from '../components/addFieldDialog';
import ImagePreview from '../components/imagePreview';
import Autocomplete from '@material-ui/lab/Autocomplete';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import InputAdornment from '@material-ui/core/InputAdornment';
import EventNoteIcon from '@material-ui/icons/EventNote';

import * as libs from '../util/libs';

import Divider from '@material-ui/core/Divider';

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
        marginBottom: '1rem',
        fontSize: "1.4rem"
    },
    captionText: {
        color: "rgb(153, 153, 153, 1)",
        textAlign: "center"
    },
    gridTop: {
        backgroundColor: '#53E7C3',
        height: "11rem",
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
        backgroundColor: 'rgb(246, 246, 246, 1) !important',
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
        backgroundColor: '#53E7C3 !important',
        width: '10rem',
        marginTop: "1rem",
        height: "3rem"
    },
    inputFile: {
        display: 'none',
    },
    customerTitle: {
        color: '#494B96',
        fontWeight: 'bold',
        fontSize: "1.3rem"
    },
    addedTo: {
        color: 'rgb(153, 153, 153, 1)',
        fontSize: "1.3rem"
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
    submit: {
      marginTop: "1rem",
      backgroundColor: '#494B96 !important',
      height: "3rem"        
  },
  priceField: {
    marginTop: "1rem",
    marginBottom: "0.5rem"
  },
  deleteButton: {
    color: '#494B96',
    width: "5rem",
    marginTop: "1rem"
  },
  deleteButtonText: {
    fontSize: "1.2rem",
    marginLeft: "0.5rem"
  },
});

class ProductAdd extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data: [],
            uiLoading: false,

            serialnumberImage: '',
            openDialog: false,
            openBackDrop: false,
            openAddFieldDialog: false,
            customFields: [],
            imageURL: '',
            showImagePreview: false,
            image: '',
            imageType: '',
            maincategory: 'Household',
            name: '',
            brand: '',
            make: '',
            model: '',
            dob: '',
            age: '',
            breed: '',
            numberplate: '',
            vin: '',
            serialnumber: '',
            price: '',
            notes: '',
            servicefrequency: '',
            servicedate: '',
            servicedue: '',
            openConfirmation: false,
            company: '',
            serialnumberImageObject: null,
            imageObject: null,
            serialnumberImageURL: '',            
            finalDocID: '',
            originalMode: ''
        };
    }

    getInfo() {
        const that = this;
	      db.collection("provider_products").doc(localStorage.getItem('editProductID'))
	      .get()
	      .then(function (querySnapshot) {
        const data = querySnapshot.data();
        const stateObject = {
          name: data['name'],
          maincategory: data['mainCategory'],
          servicefrequency: data['servicefrequency'],
          servicedate: data['servicedate'] ? that.convertStringToDate(data['servicedate']) : '',
          servicedue: data['servicedue'] ? that.convertStringToDate(data['servicedue']) : '',
          price: data['price'],
          notes: data['notes'],
          serialnumber: data['serialnumber'],
          originalMode: data['mode'],
          image: data['image'],
          serialnumberImage: data['serialnumberimage'],
        };
        if (data['mainCategory'] === 'Household') {
          stateObject.brand = data['brand'];
          stateObject.model = data['model'];
        } else if (data['mainCategory'] === 'Pets') {
          stateObject.dob = data['brand'] ? that.convertStringToDate(data['brand']) : '';
          stateObject.age = data['model'];
          stateObject.breed = data['model2'];
        } else if (data['mainCategory'] === 'Vehicles') {
          stateObject.model = data['brand'];
          stateObject.numberplate = data['model'];
          stateObject.year = data['model2'];
          stateObject.vin = data['model3'];
        }

        if (data && data["customFields"]) {
          const customFields = [];
          data["customFields"].forEach((field) => {
            customFields.push({title: field['title'], value: field['value']});
          });
          stateObject.customFields = customFields;
        }

        that.setState(stateObject);
      });
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
                that.setState({ userId: userId, customerID: localStorage.getItem('customerID') ? localStorage.getItem('customerID') : '' });
                console.log('userId', userId);

                if (localStorage.getItem('editProductID')) {
                  that.getInfo();
                }
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

    handleDateChange = (date, field) => {
        //setSelectedDate(date);
        this.setState({
            [field]: date
        }, () => {
        if (field === 'dob') {
            this.setState({
                age: this.getAge(date)
            });    
        }
        if (field === 'servicedate') {
            this.updateServiceDue();
        }
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
      this.checkImageSize(event.target, 'serialnumberImage');
        // this.setState({
        //     serialnumberImage: URL.createObjectURL(event.target.files[0]),
        //     serialnumberImageObject: event.target.files[0],
        //     serialnumberImageURL: event.target.files[0].name
        //   })        
    }

    checkImageSize(image, fieldName){
      const that = this;
      //check whether browser fully supports all File API
      if (window.File && window.FileReader && window.FileList && window.Blob) {
        console.log('Step2');
          let fr = new FileReader();
          fr.onload = function() { // file is loaded
              let img = new Image();
              img.onload = function() { // image is loaded; sizes are available
                  if (img.width < 1120) {
                    that.setState({
                      openDialog: true,
                      actionButtonTitle: '',
                      actionClass: 'hide',
                      dialogTitle: 'Error',
                      dialogDescription: 'Min width for image is 1120 px',
                      cancelButtonTitle: 'Close'
                    });                                
                  } else if (image.files[0].size > 1048576) {
                    that.setState({
                      openDialog: true,
                      actionButtonTitle: '',
                      actionClass: 'hide',
                      dialogTitle: 'Error',
                      dialogDescription: 'Max file size is 1Mb',
                      cancelButtonTitle: 'Close'
                    });
                  } else {
                    that.setState({
                      [fieldName]: URL.createObjectURL(image.files[0]),
                      [fieldName + 'Object']: image.files[0],
                      [fieldName + 'URL']: image.files[0].name
                    });          
                  }
                  fr = null;
                  img = null;
                  image.value = '';
              };
              img.src = fr.result; // is the data URL because called with readAsDataURL
          };
          fr.readAsDataURL(image.files[0]);
      } else {
        that.setState({
          openDialog: true,
          actionButtonTitle: '',
          actionClass: 'hide',
          dialogTitle: 'Error',
          dialogDescription: 'Please upgrade your browser, because your current browser lacks some new features for image processing!',
          cancelButtonTitle: 'Close'
        });                    
      }
  }    

    handleImage = (event) => {
      this.checkImageSize(event.target, 'image');
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

      generateCategoryName = () => {
        if (this.state.maincategory === 'Household') {
            return this.state.name +
                (this.state.brand
                    ? ' ' + this.state.brand
                    : '');
          } else if (this.state.maincategory === 'Pets') {
            return this.state.name +
                (this.state.breed
                    ? ' ' + this.state.breed
                    : '');
          } else {
            return this.state.name +
                (this.state.model
                    ? ' ' + this.state.model
                    : '');
          }      
      }

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
					to={`/product-confirm`}
				/>
			);
		}
	};

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
            console.log('actualProductID', actualProductID);
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

      deleteEvent(oldCalendarId, oldEventId) {
/*
           const request = window.gapi.client.calendar.events.delete({
             'calendarId': 'primary',
             'eventId': oldEventId
           });
         
           request.execute(function(event) {
              console.log(event);
           });
*/
      }
    
      deleteReminder = async (reminderID, oldCalendarId, oldEventId) => {
        this.deleteEvent(oldCalendarId, oldEventId);
        db.collection("reminders").doc(reminderID).delete();
      }

      getCalendarID = () => {
          return '';
      }

      sendReminderToCalendar(title, description, date, time) {

/*
         console.log(title, description, date, time);

         var event = {
          'summary': title,
          'description': description,
          'start': {
            'dateTime': libs.convertDateTimeToString(date, time),
          },
          'end': {
            'dateTime': libs.convertDateTimeToString(date, time),
          },
         };

         return new Promise(function(resolve, reject) {

           const request = window.gapi.client.calendar.events.insert({
             'calendarId': 'primary',
             'resource': event
           });
         
           request.execute(function(event) {
              console.log(event);
              //eventId = event.id;
              resolve(event.id);
                //appendPre('Event created: ' + event.htmlLink);
           });

         });
*/

         return '';
      }
      
      updateReminder = async (itemId, userID) => {

        const doc = await db.collection('users').doc(this.state.userId).get();
        const userData = doc.data();
        var company = userData['company'];
        var firstName = userData['firstName'];
    
        const providerName = company ? company : firstName;
    
        let customerName = '';
        if (JSON.parse(localStorage.getItem('categoryData')).customerId) {
          try {
            const doc = await db.collection("syncosacustomer").doc(JSON.parse(localStorage.getItem('categoryData')).customerId).get();            
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

        console.log('reminderID', reminderID);
        if (reminderID) {
          this.deleteReminder(reminderID, oldCalendarId, oldEventId);
        }
    
        let eventId = await this.sendReminderToCalendar(this.generateCategoryName(), this.state.notes, libs.convertDateToString(this.state.servicedue), '09:00 AM', '');
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
          extramode: 'donotdelete'          
        });
      }
    
      sendInviteOrNotification = async (finalDocID, userID, customerID, categoryName,
        actualProductID, isUpdate) => {

            if (customerID && categoryName) {

                const sendNotification = firebase.functions().httpsCallable('addCategoryToProviderProduct');
                const resp = await sendNotification({
                    customerID: customerID,
                    categoryName: categoryName,
                    id: finalDocID,
                  });
    
            }
            var status = '';

            let customerName = '';
            let customerEmail = '';
            if (customerID) {
                  const syncosacustomerSnapShot = await db.collection("syncosacustomer").doc(customerID).get();
                  const data = syncosacustomerSnapShot.data();
                  status = data.status;
                  customerName = data.firstName;
                  customerEmail = data.email;
            }
            if (this.state.originalSyncosaCustomerID && customerName === '') {
                try {
                  const doc = await db.collection("syncosacustomer").doc(this.state.originalSyncosaCustomerID).get();
                  customerName = doc.data().firstName;
                  customerEmail = doc.data().email;
                } catch (e) {}
            }
            this.addReminder(userID, finalDocID, customerName, customerID,
                actualProductID);

            db.collection('provider_products').doc(finalDocID).set({
              mode: ''
            }, {merge: true});

                if (!actualProductID && status === '3') {

                    const sendNotification = firebase.functions().httpsCallable('notifyCustomerAboutProduct');
                    const resp = await sendNotification({
                        providerID: userID,
                        itemId: finalDocID,
                        customerEmail: customerEmail
                            ? customerEmail
                            : '',
                        customerID: localStorage.getItem('categoryData').customerId
                            ? localStorage.getItem('categoryData').customerId
                            : '',
                        categoryType: this.state.maincategory
                        });
    
                        localStorage.setItem('redirectData', JSON.stringify({'customerName': customerName, 'update': isUpdate}));
                        this.setState({
                          openBackDrop: false,
                          openConfirmation: true
                        });

                    } else {                      
                    this.sendEmail(this.state.company, userID, customerName, customerID);
                  }
                                
                  
      }

      sendEmail = async (company, userID, customerName, customerID) => {
  
        console.log({
          providerID: userID, 
          customerID: customerID
        });

        const sendNotification = firebase.functions().httpsCallable('sendInviteToCustomer');
        const resp = await sendNotification({
          providerID: userID, 
          customerID: customerID
        });
          

    db.collection(
        'syncosacustomer').doc(customerID).set({'status': '2'}, { merge: true });

        localStorage.setItem('redirectData', JSON.stringify({'customerName': customerName, 'update': '1'}));
        this.setState({
            openBackDrop: false,
            openConfirmation: true
          });


  }

      getNewFileName(fileName) {
        var re = /(?:\.([^.]+))?$/;
        var ext = re.exec(fileName)[1];
        return Date.now() + '.' + ext;
      }

      uploadImage = async (
        imagePath, file, uid, fieldName, tableName) =>  {
            const that = this;
      if (imagePath) {
          var dateStart = Date.now();

                    
          var uploadTask = firebase.storage().ref().child(uid)
          .child(this.getNewFileName(file.name)).put(file); //  this.baseName(imagePath)
  
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

      inStorage = (imageURL) => {
        return imageURL.indexOf('https://firebasestorage.googleapis.com') !== -1;
      }  

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

      saveItem = async (mode) => {

        // console.log(this.state.image, this.state.imageObject);
        // return;

        const that = this;

          if (!this.state.maincategory) {
            that.setState({
                openDialog: true,
                actionButtonTitle: '',
                actionClass: 'hide',
                dialogTitle: 'Error',
                dialogDescription: 'Select please "Main category"',
                cancelButtonTitle: 'Close'
            });                    
            return;
          }

          if (!this.state.name) {
            let message = 'Fill please "Product name" field';
            if (this.state.maincategory === 'Pets') {
              message = 'Fill please "Name" field';
            } else if (this.state.maincategory === 'Vehicles') {
              message = 'Fill please "Make" field';
            }
            that.setState({
                openDialog: true,
                actionButtonTitle: '',
                actionClass: 'hide',
                dialogTitle: 'Error',
                dialogDescription: message,
                cancelButtonTitle: 'Close'
            });                    
            return;
          }      

          if (!this.state.name) {
            that.setState({
                openDialog: true,
                actionButtonTitle: '',
                actionClass: 'hide',
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Make" field',
                cancelButtonTitle: 'Close'
            });                    
            return;
          }      

          if (this.state.maincategory === 'Pets' && !this.state.dob) {
            that.setState({
                openDialog: true,
                actionButtonTitle: '',
                actionClass: 'hide',
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Date of birth" field',
                cancelButtonTitle: 'Close'
            });                    
            return;
          }

          if (this.state.maincategory === 'Vehicles' && !this.state.model) {
            that.setState({
                openDialog: true,
                actionButtonTitle: '',
                actionClass: 'hide',
                dialogTitle: 'Error',
                dialogDescription: 'Fill please "Model" field',
                cancelButtonTitle: 'Close'
            });                    
            return;
          }

          if (!this.state.servicefrequency) {
            that.setState({
                openDialog: true,
                actionButtonTitle: '',
                actionClass: 'hide',
                dialogTitle: 'Error',
                dialogDescription: 'Select please "Service frequency"',
                cancelButtonTitle: 'Close'
            });                    
            return;
          }
      
          if (!this.state.servicedate) {
            that.setState({
                openDialog: true,
                actionButtonTitle: '',
                actionClass: 'hide',
                dialogTitle: 'Error',
                dialogDescription: 'Select please "Service date".',
                cancelButtonTitle: 'Close'
            });                    
            return;
          }

          that.setState({openBackDrop: true});

          let countImages = 1;

          //this.setState({countImages: 1});

          if (this.state.imageURL &&
              !this.inStorage(this.state.imageURL)) {
                countImages++;
              }
          if (this.state.serialnumberImageURL &&
              !this.inStorage(that.state.serialnumberImageURL)) {
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
                  imageData['fullimage'] = that.state.imageURL;
                  cnt++;
                }
                if (that.state.serialnumberImageURL) {
                  imageData['serialnumberimage'] = that.state.serialnumberImageURL;
                  cnt++;
                }
                
                if (cnt > 0) {
                  console.log('finalDocID', that.state.finalDocID);
                  console.log(imageData);
                  db.collection('provider_products').doc(that.state.finalDocID).set(imageData, { merge: true });
                }
                that.setState({finalDocID: ''});
      
                if (mode !== '') {

                    that.setState({
                        openDialog: true,
                        actionButtonTitle: '',
                        actionClass: 'hide',
                        dialogTitle: 'Done',
                        dialogDescription: 'Item saved',
                        cancelButtonTitle: 'OK'
                    });                    

                }
              }
            });
          }

          if (localStorage.getItem('editProductID')) {
            let finalDocID = localStorage.getItem('editProductID');
            that.setState({finalDocID: finalDocID});

            const productDOC = await db.collection("provider_products").doc(finalDocID).get();
            let actualProductID = productDOC.data()['actualProductID'];
            if (!actualProductID) {
              actualProductID = '';
            }
            
            this.updateDBAfterImageUploaded(this.state.userId);

            db.collection('provider_products').doc(finalDocID).set({
                mainCategory: this.state.maincategory,
                name: this.state.name,
                brand: this.state.maincategory === 'Household'
                    ? this.state.brand
                    : this.state.maincategory === 'Pets'
                        ? this.convertDateToString(this.state.dob)
                        : this.state.model,
                model: this.state.maincategory === 'Household'
                    ? this.state.model
                    : this.state.maincategory === 'Pets'
                        ? '' + this.state.age
                        : this.state.numberplate,
                model2: this.state.maincategory === 'Household'
                    ? ''
                    : this.state.maincategory === 'Pets'
                        ? this.state.breed
                        : this.state.year,
                model3: this.state.maincategory === 'Household'
                    ? ''
                    : this.state.maincategory === 'Pets' ? '' : this.state.vin,
                customFields: this.getCustomFields(),
                servicefrequency: this.state.servicefrequency,
                servicedate: this.convertDateToString(this.state.servicedate),
                servicedue: this.convertDateToString(this.state.servicedue),
                price: this.state.price,
                notes: this.state.notes,
                serialnumber: this.state.serialnumber,
                mode: this.state.originalMode === '' ? '' : mode
              }, { merge: true }).then((data) => {
                
                const countImages = that.state.countImages - 1;
                that.setState({countImages: countImages, originalMode: mode});

                if (mode === '') {
                  that.sendInviteOrNotification(
                      finalDocID,
                      that.state.userId,
                      JSON.parse(localStorage.getItem('categoryData'))['customerId'],
                      that.state.maincategory,
                      actualProductID,
                      '1');
                } else {
                  that.updateReminder(finalDocID, this.state.userId);
                  that.setState({openBackDrop: false});
                }
        
              }).catch((e) => {
                that.setState({openBackDrop: false});
              });

      
          } else {
            this.updateDBAfterImageUploaded(this.state.userId);
              db.collection('provider_products').add({
                userID: this.state.userId,
                customerID: JSON.parse(localStorage.getItem('categoryData')).syncosaCustomerId
                    ? JSON.parse(localStorage.getItem('categoryData')).syncosaCustomerId
                    : JSON.parse(localStorage.getItem('categoryData')).customerId,
                syncosaCustomerID: JSON.parse(localStorage.getItem('categoryData')).customerId,
                categoryname: this.generateCategoryName(),
                mainCategory: this.state.maincategory,
                name: this.state.name,
                brand: this.state.maincategory === 'Household'
                    ? this.state.brand
                    : this.state.maincategory === 'Pets'
                        ? this.convertDateToString(this.state.dob)
                        : this.state.model,
                model: this.state.maincategory === 'Household'
                    ? this.state.model
                    : this.state.maincategory === 'Pets'
                        ? '' + this.state.age
                        : this.state.numberplate,
                model2: this.state.maincategory === 'Household'
                    ? ''
                    : this.state.maincategory === 'Pets'
                        ? this.state.breed
                        : this.state.year,
                model3: this.state.maincategory === 'Household'
                    ? ''
                    : this.state.maincategory === 'Pets' ? '' : this.state.vin,
                customFields: this.getCustomFields(),
                servicefrequency: this.state.servicefrequency,
                servicedate: this.convertDateToString(this.state.servicedate),
                servicedue: this.convertDateToString(this.state.servicedue),
                price: this.state.price,
                notes: this.state.notes,
                serialnumber: this.state.serialnumber,
                timestamp: Date.now(),
                mode: mode
              }).then((data) => {
                const finalDocID = data.id;
                const countImages = that.state.countImages - 1;                
                that.setState({finalDocID: finalDocID, countImages: countImages, originalMode: mode});
                if (mode === '') {
                  that.sendInviteOrNotification(finalDocID, that.state.userId, JSON.parse(localStorage.getItem('categoryData')).customerId,
                      that.state.maincategory, '', '');
                } else {
                  that.setState({openBackDrop: false});
                  that.updateReminder(finalDocID, that.state.userId);
                }
        
              }).catch((error) => {
                that.setState({
                openBackDrop: false,
                openDialog: true,
                actionButtonTitle: '',
                actionClass: 'hide',
                dialogTitle: 'Error',
                dialogDescription: error.message,
                cancelButtonTitle: 'OK'
              });

              });
          }

      }

      changeCustomFieldValue = (name, event) => {
        // console.log('name: ', name);
        // console.log('value: ', event);
        // console.log('value: ', event.nativeEvent);
        // console.log('value: ', event.nativeEvent.target.value);
        // console.log('data: ', event.nativeEvent.data);
        //console.log('target: ', event.target);
          const cf = this.state.customFields;
          cf.map((f) => {
               if (f.title === name) {
                   f.value = event.nativeEvent.target.value;
               }
               return f;
          });
          this.setState({
              customFields: cf
          });
      }

      getDetailsTitle = () => {
        if (this.state.maincategory === '' || this.state.maincategory === 'Household') {
          return "Product details";
        } else if (this.state.maincategory.text === 'Pets') {
          return "Pet details";
        } else {
          return "Vehicle details";
        }
      }

      handleServiceFrequency = (event) => {
          console.log(event.target.value);
          this.setState({
            servicefrequency: event.target.value
          }, () => {
            this.updateServiceDue();    
        });
      }

      updateServiceDue() {
        console.log(this.state.servicefrequency, this.state.servicedate);
        if (this.state.servicefrequency &&
            this.state.servicedate &&
            this.state.servicefrequency !== 'Other') {
                this.setState({servicedue: this.getNewDate(
              this.state.servicedate, this.state.servicefrequency)});
        }
      }

      getAge = (date) => {
        const diffTime = Math.abs(Date.now() - date);
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
        return Math.floor(diffDays / 365);
      }

      convertStringToDate(date) {
        const dateParts = date.split('/');
        return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
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
          
      getNewDate = (date, type) => {
          console.log(date, type);
        const newDate = new Date(date);

        if (type === 'Weekly') {
            newDate.setDate(date.getDate() + 7);
          }
          if (type === 'Fortnightly') {
            newDate.setDate(date.getDate() + 14);            
          }
          if (type === 'Monthly') {
            newDate.setDate(date.getDate() + 31);            
          }
          if (type === 'Annually') {
            newDate.setDate(date.getDate() + 365);            
          }
          //const year = newDate.getFullYear();
          //const month = "0" + (+newDate.getMonth() + 1);
          //const day = "0" + newDate.getDate();
          return Date.UTC(+newDate.getFullYear(), +newDate.getMonth(), +newDate.getDate());
          //return new Date.parse(day.substr(-2) + '/' + month.substr(-2) + '/' + year);
      }
      
    deleteCustomField(index) {
      let customFields = [...this.state.customFields];
      customFields.splice(index, 1);
      this.setState({
        customFields
      });
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
                    {this.renderConfirmationRedirect()}
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupClose={() => this.setState({openDialog: false})} handlePopupAction={() => this.state.handlePopupAction()} />
                    <BackDrop open={this.state.openBackDrop} />
                    <ImagePreview open={this.state.showImagePreview} imageURL={this.state.imageURL} closePreview={this.closePreview} deleteImage={this.deleteImage} />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                Add product
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
                                Add your item details

                                <div className={`${classes.imagePhoto} ${this.state.image ? classes.hidden : ''}`}>
      <input accept="image/*" className={classes.inputFile} id="image-button" type="file" onChange={this.handleImage} />
      <label htmlFor="image-button">
        <IconButton color="primary" aria-label="upload picture" component="span">
        <img src={photoLogo} alt=""  />
        </IconButton>
        <Typography>
        Min image width is 1120px, max image size is 1MB
      </Typography>

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
                                        <form className={classes.form} noValidate>
                                            <Typography className={classes.formHeader}>
                                                {this.getDetailsTitle()}
                                    </Typography>

                                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                                <InputLabel htmlFor="maincategory">Main category *</InputLabel>
                                                <Select
                                                    native
                                                    label="Main category *"
                                                    inputProps={{
                                                        name: 'maincategory',
                                                        id: 'maincategory',
                                                    }}
                                                    value={this.state.maincategory}
                                                    onChange={this.selectCategory}
                                                >                                                    
                                                    <option value={'Household'}>Household</option>
                                                    <option value={'Pets'}>Pets</option>
                                                    <option value={'Vehicles'}>Vehicles</option>
                                                </Select>
                                            </FormControl>
                                            <TextField
                                                variant="outlined"
                                                margin="normal"     
                                                className={`${this.state.maincategory==='Household' ? '' : classes.hidden}`}
                                                fullWidth
                                                id="name"
                                                label="Product name *"
                                                name="name"     
                                                value={this.state.name}                                           
                                                onChange={this.handleChange}
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
                                                onChange={this.handleChange}
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
                                                onChange={this.handleChange}
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
                                                onChange={this.handleChange}
                                            />


<div className={`${this.state.maincategory==='Pets' ? '' : classes.hidden}`}>
<DatePicker
      selected={this.state.dob}
      onChange={(date) => this.handleDateChange(date, 'dob')}
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
        id="dob"
        name="dob"
        value={this.state.dob}        
        label="Date of birth *"
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
</div>

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
                                                onChange={this.handleChange}
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
                                                onChange={this.handleChange}
                                            />

<Autocomplete
        id="make"
        freeSolo
        className={`${this.state.maincategory==='Vehicles' ? '' : classes.hidden}`}
        options={vehicle_make.map((option) => option.Make_Name)}
        renderInput={(params) => (
          <TextField {...params} label="Make *" margin="normal" variant="outlined" value={this.state.make} />
        )}
      />

<Autocomplete
        id="model"
        freeSolo
        className={`${this.state.maincategory==='Vehicles' ? '' : classes.hidden}`}
        options={vehicle_model.map((option) => option.Model_Name)}
        renderInput={(params) => (
          <TextField {...params} label="Model *" margin="normal" variant="outlined" value={this.state.model} />
        )}
      />

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                className={`${this.state.maincategory==='Vehicles' ? '' : classes.hidden}`}
                                                fullWidth
                                                readOnly={true}
                                                name="numberplate"
                                                label="Number plate"
                                                id="numberplate"
                                                value={this.state.numberplate}
                                                onChange={this.handleChange}
                                            />

<div className={`${this.state.maincategory==='Vehicles' ? '' : classes.hidden}`}>
<DatePicker
      selected={this.state.year}
      onChange={date => this.setYear(date)}      
      showYearPicker
      dateFormat="yyyy"      
      customInput={<TextField
        variant="outlined"
        margin="normal"
        fullWidth
        readOnly={true}
        value={this.state.year}
        name="year"
        label="Year"
        id="year"
    />}
    />
</div>    

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
                                                onChange={this.handleChange}
                                            />


                                            <Grid container className={classes.root} spacing={2}>
                                                <Grid item xs={11}>
                                                    <TextField
                                                        variant="outlined"
                                                        margin="normal"
                                                        fullWidth
                                                        name="serialnumber"
                                                        label="Serial Number"
                                                        id="serialnumber"
                                                        value={this.state.serialnumber}
                                                        onChange={this.handleChange}
                                                    />

                                                </Grid>
                                                <Grid item xs={1}>
                                                    

                                                    <div className={`${classes.serialPhoto} ${this.state.serialnumberImage ? classes.hidden : ''}`}>
      <input accept="image/*" className={classes.inputFile} id="serialnumberimage-button" type="file" onChange={this.handleSerialNumberImage} />
      <label htmlFor="serialnumberimage-button">
        <IconButton color="primary" aria-label="upload picture" component="span" >
        <img src={photoLogo} alt=""  />          
        </IconButton>
      </label>
    </div>
                                                <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                className={`${classes.viewButton} ${this.state.serialnumberImage ? '' : classes.hidden}`}
                                                onClick={() => this.showImagePreview(this.state.serialnumberImage, 'serialnumberImage')}
                                                
                                            >
                                                View
							
                                            </Button>

                                                </Grid>
                                            </Grid>

                                            <FormControl className={classes.priceField} fullWidth variant="outlined">
          <InputLabel htmlFor="outlined-adornment-price">Purchase price</InputLabel>
          <OutlinedInput
            id="outlined-adornment-price"
            
            value={this.state.price}
            onChange={this.handlePriceChange}
            
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            labelWidth={60}
          />
        </FormControl>

                                            <TextField
                                                variant="outlined"
                                                margin="normal"
                                                fullWidth
                                                name="notes"
                                                label="Notes"
                                                id="notes"
                                                value={this.state.notes}
                                                onChange={this.handleChange}
                                            />

                                            <AddFieldDialog open={this.state.openAddFieldDialog} processAddField={this.processAddField} />

                                            {this.state.customFields.map((field, index) => (

                                        <Grid key={index} container className={classes.root} spacing={2}>
                                        <Grid item xs={11}>

                                        <TextField                                            
                                            variant="outlined"
                                            margin="normal"
                                            fullWidth
                                            onChange={this.changeCustomFieldValue.bind(this, field.title)}
                                            name={field.title}
                                            label={field.title}
                                            id={field.title}
                                            value={field.value}
                                        />

                                        </Grid>
                                        <Grid item xs={1}>
                                        <IconButton aria-label="delete" className={this.props.classes.deleteButton} onClick={() => this.deleteCustomField(index)}>
                        <DeleteIcon />
                        <Typography className={this.props.classes.deleteButtonText}>
                            Delete
                        </Typography>
                      </IconButton>

                                        </Grid>
                                        </Grid>


                                        ))}

                                            <Grid container className={classes.root} spacing={2}>
                                                <Grid item xs={5}>
                                                </Grid>
                                                <Grid item xs={2}>


                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.addField}
                                                onClick={this.openAddFieldDialog}
                                                
                                                
                                            >
                                                Add field
							
                                            </Button>

                                            </Grid>
                                                <Grid item xs={5}>
                                                </Grid>
                                                </Grid>

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

                                            <FormControl fullWidth variant="outlined" className={classes.formControl}>
                                                <InputLabel htmlFor="servicefrequency-label">Service frequency</InputLabel>
                                                <Select
                                                native
                                                labelId="servicefrequency-label"
                                                id="servicefrequency"                                                    
                                                displayEmpty
                                                value={this.state.servicefrequency}
                                                    onChange={this.handleServiceFrequency}
                                                    label="Service frequency"
                                                >
                                                    <option value=""></option>
                                                    <option value={'Weekly'}>Weekly</option>
                                                    <option value={'Fortnightly'}>Fortnightly</option>
                                                    <option value={'Montly'}>Montly</option>
                                                    <option value={'Annually'}>Annually</option>
                                                    <option value={'Other'}>Other</option>
                                                </Select>
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
        label="Service date"
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
      selected={this.state.servicedue}
      onChange={(date) => this.handleDateChange(date, 'servicedue')}
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
        id="servicedue"
        name="servicedue"
        value={this.state.servicedue}        
        label="Service due"
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


                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                color="primary"
                                                className={classes.submit}
                                                onClick={() => this.saveItem('save')}
                                            >
                                                Save
							
                                            </Button>

                                            <p></p>

                                            <Button
                                                type="button"
                                                fullWidth
                                                variant="contained"
                                                className={`${classes.greenButton} ${this.state.customerID ? '' : classes.hidden}`}
                                                onClick={() => this.saveItem('')}
                                            >
                                                <img alt="" src={sendToCustomer} className={classes.buttonImage} />
                                               Send to customer
							
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

export default withStyles(styles)(ProductAdd);