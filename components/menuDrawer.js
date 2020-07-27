import React, { useState, useEffect } from "react";
import { makeStyles } from '@material-ui/core/styles';
import { Redirect } from 'react-router-dom';
import { withRouter } from "react-router";

import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import Divider from '@material-ui/core/Divider';
import Toolbar from '@material-ui/core/Toolbar';
import Badge from '@material-ui/core/Badge';

import AddCircleIcon from '@material-ui/icons/AddCircle';

import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import SettingsApplicationsOutlinedIcon from '@material-ui/icons/SettingsApplicationsOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import HelpOutlineOutlinedIcon from '@material-ui/icons/HelpOutlineOutlined';
import AlternateEmailOutlinedIcon from '@material-ui/icons/AlternateEmailOutlined';
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';

import DashboardIcon from '@material-ui/icons/Dashboard';
import DateRangeIcon from '@material-ui/icons/DateRange';

import * as libs from '../util/libs';
import { db } from '../config';

const firebase = require("firebase");
require("firebase/firestore");

const drawerWidth = 230;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#53E7C3',
        color: '#494B96'
    },
    drawerContainer: {
        overflow: 'auto',
    },
    whiteLabel: {
        color: '#fff'
    },
    blueLabel: {
        color: '#494B96'
    },
    badge: {
        left: "0",
        right: "unset"
    }
}));

const icons = [<AccountCircleOutlinedIcon />, <SettingsApplicationsOutlinedIcon />, <InfoOutlinedIcon />, <InfoOutlinedIcon />, <HelpOutlineOutlinedIcon />, <InfoOutlinedIcon />, <InfoOutlinedIcon />, <AlternateEmailOutlinedIcon />, <ExitToAppOutlinedIcon />];

function handleMenu(menuSetNumber, index, props) {

    console.log('menuSetNumber:', menuSetNumber, index);

    if (menuSetNumber === 0) {
        if (index === 0) {
            props.history.push("/customers-list");
        }
        if (index === 1) {
            props.history.push("/requests-list");
        }
        if (index === 2) {
            props.history.push("/bookings-list");
        }
        if (index === 3) {
            props.history.push("/reminders-list");
        }
    }

    if (menuSetNumber === 1) {
        if (index === 0) {
            props.history.push('/');
        }
        if (index === 1) {
            props.history.push('/reminders-list');
        }
    }

    if (menuSetNumber === 2) {
        if (index === 0) {
            props.history.push('/search');
        }
        if (index === 1) {
            props.history.push('/notifications-list');
        }
    }

    if (menuSetNumber === 3) {
        if (index === 0) {
            props.history.push('/customer-add');
        }
        if (index === 1) {
            props.history.push('/request-a-booking');
        }
        if (index === 2) {
            props.history.push('/add-a-booking');
        }
        if (index === 3) {
            props.history.push('/reminder-add');
        }
    }

    if (menuSetNumber === 4) {
        if (index === 0) {
            props.history.push('/profile');
        }
        if (index === 1) {
            props.history.push('/settings');
        }
        if (index === 2) {
            props.history.push('/about-us');
        }
        if (index === 3) {
            props.history.push('/user-guide');
        }
        if (index === 4) {
            props.history.push('/faq');
        }
        if (index === 5) {
            props.history.push('/terms');
        }
        if (index === 6) {
            props.history.push('/privacy');
        }
        if (index === 7) {
            props.history.push('/contact-us');
        }
        if (index === 8) {
            firebase.auth().signOut().then(function () {
                this.props.history.push('/login');
            }).catch(function (error) {
                // An error happened.
            });
        }
    }

}

const MenuDrawer = (props) => {
    const classes = useStyles();

    const [notifications, setNotifications] = useState();
    const [requests, setRequests] = useState();
    const [bookings, setBookings] = useState();
    const [reminders, setReminders] = useState();

    useEffect(() => {
        let cleanupFunction = false;

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                var userId = firebase.auth().currentUser.uid;
                db.collection("notifications").where("userID", "==", userId).where("status", "==", 'new')
                    .onSnapshot(function (querySnapshot) {
                        if (!cleanupFunction) {
                            setNotifications(querySnapshot.size);
                        }
                    });
                db.collection("syncosacustomers").where("userID", "==", userId)
                    .onSnapshot(function (querySnapshot) {
                        //if (!cleanupFunction) {                        
                        //setNotifications(querySnapshot.size);
                        //}
                    });
                db.collection("booking").where("originalUserID", "==", userId).where("status", "==", 'requested')
                    .onSnapshot(function (querySnapshot) {
                        if (!cleanupFunction) {
                            setRequests(querySnapshot.size);
                        }
                    });
                db.collection("booking").where("originalUserID", "==", userId).where("status", "==", 'accepted')
                    .onSnapshot(function (querySnapshot) {
                        if (!cleanupFunction) {
                            setBookings(querySnapshot.size);
                        }
                    });
                db.collection("reminders").where("userID", "==", userId)
                    .onSnapshot(function (querySnapshot) {
                        if (!cleanupFunction) {
                            let alertReminders = 0;
                            querySnapshot.forEach((doc) => {
                                const userData = doc.data();
                                const diff = libs.getDatesDiff(userData['date'], userData['time']);
                                if (diff > 0 || Math.abs(diff) <= 30 * 24 * 60) {
                                  alertReminders++;
                                }    
                            });
                            setReminders(alertReminders);
                        }
                    });
            }
        });
        return () => cleanupFunction = true;
    });

    const handleCustomer = () => {
        console.log('1111');
        props.history.push("/customers-list");
    }

    const getText = (text, index) => {
        switch (index) {
            case 0: return text;
            case 1: return requests ? `${text} (${requests})` : text;
            case 2: return bookings ? `${text} (${bookings})` : text;
            case 3: return reminders ? `${text} (${reminders})` : text;
            default: return text;
        }
    }

    return (
        <Drawer
            className={classes.drawer}
            variant="permanent"
            classes={{
                paper: classes.drawerPaper,
            }}
        >
            <Toolbar />
            <div className={classes.drawerContainer}>
                <List>
                    {['Customers', 'Requests', 'Bookings', 'Reminders'].map((text, index) => (
                        <ListItem button key={text} dense={true} onClick={() => handleMenu(0, index, props)}>
                            <ListItemText className={classes.mainNavigationText} primary={getText(text, index)} />
                        </ListItem>
                    ))}
                </List>
                <Divider />


                <List>
                    {['Dashboard', 'Reminders'].map((text, index) => (
                        <ListItem button key={text} dense={true} onClick={() => handleMenu(1, index, props)}>
                            {index === 0 ?
                                <ListItemIcon className={classes.blueLabel}><DashboardIcon /></ListItemIcon>
                                :
                                <Badge badgeContent={reminders} color="error">
                                    <ListItemIcon className={classes.blueLabel}><DateRangeIcon /></ListItemIcon>
                                </Badge>
                            }
                            <ListItemText className={classes.blueLabel} primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />

                <List>
                    {['Search', 'Notifications'].map((text, index) => (
                        <ListItem button key={text} dense={true} onClick={() => handleMenu(2, index, props)}>
                            {index === 0 ?
                                <ListItemIcon className={classes.whiteLabel}><SearchOutlinedIcon /></ListItemIcon>
                                :
                                <Badge badgeContent={notifications} color="error">
                                    <ListItemIcon className={classes.whiteLabel}><NotificationsNoneOutlinedIcon /></ListItemIcon>
                                </Badge>
                            }
                            <ListItemText className={classes.whiteLabel} primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />

                <List>
                    {['Add Customer', 'Send Booking request', 'Add a booking', 'Add reminder'].map((text, index) => (
                        <ListItem button key={text} dense={true} onClick={() => handleMenu(3, index, props)}>
                            <ListItemIcon style={{ color: '#494B96', fontSize: 'small' }}><AddCircleIcon /></ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItem>
                    ))}
                </List>
                <Divider />


                <List>
                    {['Profile', 'Settings', 'About Us', 'User guide', 'FAQ\'s', 'Terms and conditions', 'Privacy policy', 'Contact Us', 'Log out'].map((text, index) => (
                        <ListItem button key={text} dense={true} onClick={() => handleMenu(4, index, props)}>
                            <ListItemIcon className={classes.whiteLabel}>{icons[index]}</ListItemIcon>
                            <ListItemText primary={text} className={classes.whiteLabel} />
                        </ListItem>
                    ))}
                </List>
            </div>
        </Drawer>

    );

}
export default withRouter(MenuDrawer);
