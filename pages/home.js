import React, { Component } from 'react';
import axios from 'axios';

import MainCard from '../components/mainCard';

import { db } from '../config';

import { Redirect } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import CircularProgress from '@material-ui/core/CircularProgress';

import MenuDrawer from '../components/menuDrawer';
import BackDrop from '../components/backDrop';

import { authMiddleWare } from '../util/auth';

import customersMenu from '../images/providers/customers_menu.png';
import bookingsMenu from '../images/providers/bookings_menu.png';
import requestsMenu from '../images/providers/requests_menu.png';
import remindersMenu from '../images/providers/reminders_menu.png';

import "./internal.css";

const firebase = require("firebase");
require("firebase/firestore");

const styles = (theme) => ({
	root: {
		display: 'flex',
		backgroundColor: '#53E7C3',
		height: "100vh"
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: '#53E7C3',
	},
	mainNavigationText: {
		fontWeight: 'bold'
	},
	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		backgroundColor: '#53E7C3',
	},
	toolbar: theme.mixins.toolbar,
});

class home extends Component {
	state = {
		render: false
	};

	loadAccountPage = (event) => {
		this.setState({ render: true });
	};

	loadTodoPage = (event) => {
		this.setState({ render: false });
	};

	logoutHandler = (event) => {
		localStorage.removeItem('AuthToken');
		this.props.history.push('/login');
	};

	constructor(props) {
		super(props);

		this.state = {
			firstName: '',
			lastName: '',
			profilePicture: '',
			uiLoading: true,
			imageLoading: false,
			countOfCustomers: 0,
			requestedBookings: 0,
			acceptedBookings: 0,
			remindersCount: 0,
                        url: ''
		};
	}

	componentDidMount = async () => {
		authMiddleWare(this.props.history);
		const that = this;
		localStorage.setItem('customerID', '');
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {

				var userId = firebase.auth().currentUser.uid;

				db.collection("syncosacustomers").where("userID", "==", userId)
					.get()
					.then(function (querySnapshot) {
						const countOfCustomers = querySnapshot.size;
						that.setState({ ...that.state, countOfCustomers, uiLoading: false });
					})
					.catch(function (error) {
						console.log("Error getting documents: ", error);
						that.setState({ ...that.state, uiLoading: false });
					});
				db.collection("booking").where("originalUserID", "==", userId).where("status", "==", 'requested')
					.get()
					.then(function (querySnapshot) {
						const requestedBookings = querySnapshot.size;
						that.setState({ ...that.state, requestedBookings });
					})
					.catch(function (error) {
						console.log("Error getting documents: ", error);
					});
				db.collection("booking").where("originalUserID", "==", userId).where("status", "==", 'accepted')
					.get()
					.then(function (querySnapshot) {
						const acceptedBookings = querySnapshot.size;
						that.setState({ ...that.state, acceptedBookings });
					})
					.catch(function (error) {
						console.log("Error getting documents: ", error);
					});
				db.collection("reminders").where("userID", "==", userId)
					.get()
					.then(function (querySnapshot) {
						const remindersCount = querySnapshot.size;
						that.setState({ ...that.state, remindersCount });
					})
					.catch(function (error) {
						console.log("Error getting documents: ", error);
					});
			}
		});



		// const authToken = localStorage.getItem('AuthToken');
		// axios.defaults.headers.common = { Authorization: `${authToken}` };
		// axios
		// 	.get('/user')
		// 	.then((response) => {
		// 		console.log(response.data);
		// 		this.setState({
		// 			firstName: response.data.userCredentials.firstName,
		// 			lastName: '',
		// 			email: response.data.userCredentials.email,
		// 			phoneNumber: '',
		// 			country: '',
		// 			username: '',
		// 			uiLoading: false,
		// 			profilePicture: ''
		// 		});
		// 	})
		// 	.catch((error) => {
		// 		if (error.response && error.response.status === 403) {
		// 			this.props.history.push('/login')
		// 		}
		// 		console.log(error);
		// 		this.setState({ errorMsg: 'Error in retrieving the data' });
		// 	});
	};

        handleClick = (type, num) => {

          if (type === 'customers') {
            if (+num == 0) {
              this.setState({url: 'customer-add'});
            } else {
              this.setState({url: 'customers-list'});
            }
          }

          if (type === 'requests') {
              this.setState({url: 'requests-list'});
          }

          if (type === 'bookings') {
              this.setState({url: 'bookings-list'});
          }

          if (type === 'reminders') {
              this.setState({url: 'reminders-list'});
          }

        }

        renderRedirect() {
            if (this.state.url) {               
                return (
                    <Redirect
                        to={`/${this.state.url}`}
                    />
                );
            }
        };

	render() {
		const { classes } = this.props;
		if (this.state.uiLoading === true) {
			return (
					<BackDrop open={true} />
			);
		} else {
			return (
				<div className={classes.root}>
					<CssBaseline />					
                                        {this.renderRedirect()}
					<AppBar position="fixed" className={classes.appBar}>
						<Toolbar>
							<Typography variant="h6" noWrap>
								Syncosa
          					</Typography>
						</Toolbar>
					</AppBar>

					<MenuDrawer />

					<main className={classes.content}>
						<Toolbar />
						<div>
							<MainCard title="Customers" description="Connect with your customers" src={customersMenu} count={this.state.countOfCustomers} handleClick={() => this.handleClick('customers', this.state.countOfCustomers)} />
							<MainCard title="Requests" description="Receive service requests" src={requestsMenu} count={this.state.requestedBookings} handleClick={() => this.handleClick('requests', this.state.requestedBookings)} />
							<MainCard title="Bookings" description="Manage your confirmed bookings" src={bookingsMenu} count={this.state.acceptedBookings} handleClick={() => this.handleClick('bookings', this.state.acceptedBookings)} />
							<MainCard title="Reminders" description="Stay on top of things" src={remindersMenu} count={this.state.remindersCount} handleClick={() => this.handleClick('reminders', this.state.remindersCount)} />
						</div>
					</main>
				</div>
			);
		}
	}
}

export default withStyles(styles)(home);
