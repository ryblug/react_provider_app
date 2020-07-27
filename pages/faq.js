import React, { Component } from "react";
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Redirect } from 'react-router-dom';

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import MenuDrawer from '../components/menuDrawer';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import { Grid } from '@material-ui/core';

import { authMiddleWare } from '../util/auth';

import { db } from '../config';

import customerLogo from '../images/providers/customer_logo_small.png';
import bigCustomerLogo from '../images/providers/customers_logo.png';
import addLogo from '../images/providers/category_add_big.png';

import "./login.css";

const firebase = require("firebase");
require("firebase/firestore");

const styles = (theme) => ({
  heading: {
    fontSize: "1.4rem",
    fontWeight: "bold",
    color: "#53E7C3",
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  accordeon: {
    marginBottom: "1rem"
  },

    root: {
        display: 'flex',
        backgroundColor: "#fafafa",
        height: "100vh"
    },
    root2: {
        width: '100%',
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
        backgroundColor: "#fafafa"
    },
    captionText1: {
        color: '#000000',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.4rem"
    },
    captionText2: {
        color: '#000000',
        textAlign: "center",
        fontSize: "1rem"
    },
    captionText3: {
        color: '#000000',
        textAlign: "center",
        fontWeight: "bold",
        fontSize: "1.2rem"
    },
    captionText4: {
        color: '#000000',
        textAlign: "center",
        fontSize: "1rem"
    },
    gridTop: {
        backgroundColor: '#53E7C3',
        height: "4rem",
        width: "100%",
        textAlign: "center",        
    },
    gridBottom: {
        height: "1.5rem",
        width: "100%"
    },
    avatarLogo: {
        marginTop: "0.5rem",
        marginLeft: "0.5rem"
    },
    list: {
        padding: theme.spacing(3),
    },
    buttonRoot: {
        backgroundColor: '#53E7C3',
        color: '#494B96'
    },
    logo: {
        marginTop: "1rem",        
    },
    textContainer: {
        height: "100vh",
        position: "relative",
    },    
    verticalCenter: {
        margin: "0",
        position: "absolute",
        top: "30%",
        transform: "translateY(-30%)",
        width: "100%"
    },
    hide: {
        display: "none"
    }
});

class FAQ extends Component {
    constructor(props) {
        super(props);

        this.state = {
           expanded: false
        };
    }

    componentDidMount() {
        authMiddleWare(this.props.history);
    }

    handleChange = (panel) => (event, isExpanded) => {
      this.setState({expanded: isExpanded ? panel : false});
    };

    render() {
        const { classes } = this.props;
            return (
                <div className={classes.root}>
                    <CssBaseline />
                    <AppBar position="fixed" className={classes.appBar}>
                        <Toolbar className={classes.toolbar}>
                            <Typography variant="h6" noWrap className={classes.appBarText}>
                                FAQ's
          					</Typography>
                        </Toolbar>
                    </AppBar>

                    <MenuDrawer />

                    <main className={classes.content}>
                        <Toolbar />

                                            <div className={classes.list}>

                                            <div className={classes.contentBox}>


    <div className={classes.root2}>
      <Accordion className={classes.accordeon} expanded={this.state.expanded === 'panel1'} onChange={this.handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>General</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          <strong>What is Syncosa Service?</strong><br /><br />
          Syncosa Service is a smart, easy to use digital tool that helps capture, organise and securely store your important customer information. The App makes running your business easier by  helping to facilitate follow up services and managing bookings.<br /><br />
      <strong>Who can use Syncosa?</strong><br /><br />
          Syncosa Service is a mobile and web based app available to any business in New Zealand.<br /><br />
      <strong>How can Syncosa Service help my business?</strong><br /><br />
          Syncosa Service allows you to connect directly with your customers via the customer interface which your customers can access for free.<br /><br />
      <strong>How do I connect with my customer through Syncosa Service?</strong><br /><br />
          When you sign up for Syncosa Service you can invite customers to join and connect with you for free. There is a simple connection and synchronisation function within the App which allows you to share product information, contact details, servicing information and booking information.<br /><br />
      <strong>What if my customer does not want to use Syncosa?</strong><br /><br />
          Syncosa Service will still work for you. Syncosa Service will still give you reminders on service requirements, give you a place to store your information and access it on the run, and allow you to manage your bookings. Instead of in App notifications for your customers they will receive emails that are sent out by the App.<br /><br />
      <strong>How will Syncosa Service help me look after my customers?</strong><br /><br />
          Syncosa Service helps you maintain your customer’s assets by reminding you when maintenance is due. \n\nIt allows you to connect directly with your customers and make and receive bookings quickly and easily.<br /><br />
      <strong>How can I use my stored information?</strong><br /><br />
          Syncosa Service allows instant access to customer information when needed via your mobile device. E.g. customer contact details, address, product details, serial numbers, site details, servicing history, service due reminders, booking requests, booking information etc.<br /><br />
      <strong>Is my information secure?</strong><br /><br />
          Data security is extremely important and Syncosa Service has standards in place to ensure that all data is safe. Think of Syncosa Service as a secure vault with enhanced security measures.<br /><br />
      <strong>Do I need to be connected to the Internet?</strong><br /><br />
          Syncosa Service is a cloud based system that can also be used offline to access your information. When connected to the internet Syncosa Service will automatically update and syncronise itself.<br /><br />
      <strong>Who has access to my information?</strong><br /><br />
          Only you and your selected customers have access to your information. Syncosa Service does not share your information with third parties.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordeon} expanded={this.state.expanded === 'panel2'} onChange={this.handleChange('panel2')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2bh-content"
          id="panel2bh-header"
        >
          <Typography className={classes.heading}>How does it work?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
      <strong>Can I customise the categories?</strong><br /><br />
          Yes, you can add, modify or delete categories to suit your needs.<br /><br />
      <strong>Can I add custom fields to the items loaded?</strong><br /><br />
          Again, yes, fields can be added within each customer product to allow you to store your required information in an organised way. E.g., part numbers, warranty details, service due dates etc.<br /><br />
      <strong>How will the reminders help me?</strong><br /><br />
          Reminders are set up in a way that makes sense and synced with your calendar. They are customised by you and set up for the required item/asset.<br /><br />
      <strong>How do I make a booking for service or repair?</strong><br /><br />
          A booking for repair or service can be made with your selected customer with the click of a button.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordeon} expanded={this.state.expanded === 'panel3'} onChange={this.handleChange('panel3')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3bh-content"
          id="panel3bh-header"
        >
          <Typography className={classes.heading}>Account</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
      <strong>How do I update my personal information?</strong><br /><br />
          Simply log into Syncosa Service and update your details in the ‘Profile’ section.<br /><br />
      <strong>What happens if I lose my phone?</strong><br /><br />
          If you have created an account you can log in from another device and your items will be available in the app. You can also log in via the web site.<br /><br />
      <strong>How do I delete my account?</strong><br /><br />
          You can delete your account in the account section.\n\nWhen you delete an account all stored information is removed and permanently discarded.\n\nWe have no record once it has been deleted so make sure you have thought it through carefully.<br /><br />
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion className={classes.accordeon} expanded={this.state.expanded === 'panel4'} onChange={this.handleChange('panel4')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel4bh-content"
          id="panel4bh-header"
        >
          <Typography className={classes.heading}>Contact</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
      <strong>How do I contact Syncosa Service?</strong><br /><br />
          If you have any questions or feedback Syncosa Service would love to hear from you. You can contact us anytime at admin@Syncosa Service.com
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>

                </div>
                </div>

                    </main>
                </div>
            );
        }
}

export default withStyles(styles)(FAQ);