// Material UI components
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';

import { authMiddleWare } from '../util/auth';

import { Redirect } from 'react-router-dom';

import AlertDialog from '../components/alertDialog';
import BackDrop from '../components/backDrop';

import zxcvbn from 'zxcvbn';

import { db } from '../config';

import "./login.css";

import axios from 'axios';

const firebase = require("firebase");
require("firebase/firestore");

const styles = (theme) => ({
	paper: {
		marginTop: "7rem",
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		height: "100vh"
	},
	// avatar: {
	// 	margin: theme.spacing(1),
	// 	backgroundColor: theme.palette.secondary.main
	// },
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		backgroundColor: '#53E7C3',
	},
	toolbar: {
		justifyContent: "center"
	},
	appBarText: {
		color: '#494B96',
		textAlign: "center"
	},
	variantText: {
		color: 'rgb(83, 231, 195)',
		fontSize: '1.4rem',
		marginTop: '1rem',
		fontWeight: "bold",
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		color: '#ffffff !important',
		backgroundColor: '#494B96 !important',
		height: "3rem"
	},
	customError: {
		color: 'red',
		fontSize: '0.8rem',
		marginTop: 10
	},
	progess: {
		position: 'absolute'
	},
	facebookSubmit: {
		color: '#494B96 !important',
		backgroundColor: '#ffffff',
		borderColor: '#494B96 !important',
		fontWeight: 'bold'
	},
	signupText: {
		color: "rgb(153, 153, 153, 1)",
		textAlign: "center",
		fontSize: "1.2rem"
	},
	signupLink: {
		color: "rgb(153, 153, 153, 1)",
		textDecoration: "underline"
	},
	gridItem: {
		width: "100%"
	}
});

const CssTextField = withStyles({
	root: {
		color: "#494B96",
		'& label': {
			color: '#494B96',
		},
		'& .MuiInput-underline:after': {
			borderBottomColor: '#53E7C3',
		},
		'& .MuiInput-underline:before': {
			borderBottomColor: '#53E7C3',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#53E7C3',
		},
		'& .Mui-error:after': {
			borderBottomColor: 'red',
		},
	},
})(TextField);

class login extends Component {
	constructor(props) {
                console.log('to login2');
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: [],
			loading: false,
			strengthClass: '',
			strengthTitle: '',
			displayBlock: 'hideBlock',
			openBackDrop: false,
			openDialog: false,
                        openHomePage: ''
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.UI && nextProps.UI.errors) {
			this.setState({
				errors: nextProps.UI.errors
			});
		}
		localStorage.setItem('backURL', '');
	}

      renderRedirect() {
		if (this.state.openHomePage) {
			return (
				<Redirect
					to={`/home`}
				/>
			);
        }
	};

	componentDidMount = async () => {
		authMiddleWare(this.props.history);
		firebase.auth().onAuthStateChanged((user) => {
			if (user) {
                            this.setState({openHomePage: 1});
			} else {

                        }
		});
        }

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handlePasswordChange = (event) => {
		const score = zxcvbn(event.target.value).score;
		console.log('Score:', score);

		this.setState({
			password: event.target.value
		});

		if (!event.target.value) {
			this.setState({
				displayBlock: 'hideBlock'
			});
		}

		if (score <= 1 && event.target.value) {
			this.setState({
				strengthTitle: 'Weak',
				strengthClass: 'weak',
				displayBlock: 'displayBlock'
			});
		}

		if (score >= 2 && score <= 3) {
			this.setState({
				strengthTitle: 'Medium',
				strengthClass: 'medium',
				displayBlock: 'displayBlock'
			});
		}

		if (score > 3) {
			this.setState({
				strengthTitle: 'Strong',
				strengthClass: 'strong',
				displayBlock: 'displayBlock'
			});
		}

	};

	isEmail = (email) => {
		const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		if (email.match(emailRegEx)) return true;
		else return false;
	};

	showErrorPopup(that, error) {
		that.setState({
			openBackDrop: false,
			openDialog: true,
			dialogTitle: 'Error',
			dialogDescription: error,
			cancelButtonTitle: 'OK',
			actionButtonTitle: '',
			actionClass: 'hide',
		});
	}

	createUserInfo(uid, firstName, email, method) {
		var userRef = db.collection('users').doc(uid);
		userRef.set({
			userID: uid,
			firstName,
			email,
                        registeredFrom: 'web',
			appIdentifier: 'provider',
			passcodestate: '1',
			pushnotifications: '1',
			method,
			timestamp: Math.floor((new Date()).getTime() / 1000)
		});
	}

	handleFacebookSignIn() {
		this.setState({ openBackDrop: true });
		var provider = new firebase.auth.FacebookAuthProvider();
		provider.setCustomParameters({
			'display': 'popup'
		});
		let that = this;
		firebase.auth().signInWithPopup(provider).then(async function (result) {
			// This gives you a Facebook Access Token. You can use it to access the Facebook API.
			var token = result.credential.accessToken;
			// The signed-in user info.
			var user = result.user;

			const graphResponse = await axios.get(`https://graph.facebook.com/v2.12/me?fields=name,first_name,last_name,email&access_token=${token}`);
			console.log('response', graphResponse);
			const profile = graphResponse.data;

			if (profile && !profile['email']) {
				that.showErrorPopup(that, 'Your facebook account does not have assigned email.');
				return;
			}

			const sendNotification = firebase.functions().httpsCallable('getAccountType');
			const resp = await sendNotification({
				'email': profile['email']
			});

			if (resp && resp.data && resp.data === 'email') {
				that.showErrorPopup(that, 'An account already exists with the same email address.');
				return;
			}

			const firebaseuser = firebase.auth().currentUser;

			if (!firebaseuser) {
				await that.createUserInfo(user.uid, user.displayName, user.email, 'email');

				let sendNotification = firebase.functions().httpsCallable('makeCategoriesForNewUser');
				await sendNotification({
					'userID': user.uid
				});

				sendNotification = firebase.functions().httpsCallable('getProviderInfoFromCustomerEmail');
				await sendNotification({
					'email': user.email,
					'providerID': user.uid
				});

			}

			//that.createUserInfo(user.uid, user.displayName, user.email, 'facebook');

			//that.setState({openBackDrop: false});
			//that.props.history.push('/');

		}).catch(function (error) {
			console.log(error);
			that.showErrorPopup(that, error.message);

			// Handle Errors here.
			var errorCode = error.code;
			var errorMessage = error.message;
			// The email of the user's account used.
			var email = error.email;
			// The firebase.auth.AuthCredential type that was used.
			var credential = error.credential;
			// ...
		});
	}

	handleSubmit = (event) => {
		event.preventDefault();
		if (!this.state.email) {
			this.setState({
				errors: { 'email': 'Fill please E-mail field.' },
			});
			return;
		}
		if (!this.isEmail(this.state.email)) {
			this.setState({
				errors: { 'email': 'Wrong email format.' },
			});
			return;
		}
		if (!this.state.password) {
			this.setState({
				errors: { 'password': 'Fill please Password field.' },
			});
			return;
		}
		if (this.state.strengthClass === 'weak') {
			this.setState({
				errors: { 'password': 'Weak password.' },
			});
			return;
		}

		this.setState({ openBackDrop: true });
		// const userData = {
		// 	email: this.state.email,
		// 	password: this.state.password
		// };
		let that = this;
		firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(function (data) {
			that.setState({
				openBackDrop: false,
			});
			that.props.history.push('/');
		}).catch(function (error) {
			console.log(error);
			that.setState({
				errors: { 'general': error.message },
				openBackDrop: false
			});
		});

		// axios
		// 	.post('/login', userData)
		// 	.then((response) => {
		// 		localStorage.setItem('AuthToken', `Bearer ${response.data.token}`);
		// 		this.setState({ 
		// 			loading: false,
		// 		});		
		// 		this.props.history.push('/');
		// 	})
		// 	.catch((error) => {				
		// 		this.setState({
		// 			errors: error.response.data,
		// 			loading: false
		// 		});
		// 	});
	};

	handlePopupAction() {
		if (this.state.handlePopupAction) {
			this.state.handlePopupAction();
		}
    }
	
	render() {
		const { classes } = this.props;
		const { errors, loading } = this.state;
		return (
			<React.Fragment>
                                {this.renderRedirect()}
				<AppBar className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<Typography variant="h6" className={classes.appBarText}>Sign in</Typography>
					</Toolbar>
				</AppBar>

				<Container component="main" maxWidth="xs">
					<CssBaseline />
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupAction={this.handlePopupAction.bind(this)} handlePopupClose={() => this.setState({openDialog: false})} />
                    <BackDrop open={this.state.openBackDrop} />
					<div className={classes.paper}>
						<Button
							type="button"
							fullWidth
							variant="outlined"

							className={classes.facebookSubmit}
							onClick={() => this.handleFacebookSignIn()}
							disabled={loading}
						>
							Sign in with Facebook
							{loading && <CircularProgress size={30} className={classes.progess} />}
						</Button>

						<Typography className={classes.variantText} component="h5" variant="h5">
							Or sign in below
					</Typography>
						<form className={classes.form} noValidate>
							<CssTextField
								variant="standard"
								margin="normal"
								required
								fullWidth
								id="email"
								label="E-mail Address"
								name="email"
								autoComplete="email"
								//helperText={errors.email}
								error={errors.email ? true : false}
								onChange={this.handleChange}
							/>
							<CssTextField
								variant="standard"
								margin="normal"
								required
								fullWidth
								name="password"
								label="Password"
								type="password"
								id="password"
								autoComplete="current-password"
								//helperText={errors.password}
								error={errors.password ? true : false}
								onChange={this.handlePasswordChange}
							/>
							<div id="passwordStrength" className={this.state.displayBlock}><div className={this.state.strengthClass}>{this.state.strengthTitle}</div></div>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={this.handleSubmit}
							//disabled={loading || !this.state.email || !this.state.password || !this.state.strengthClass ||
							//	this.state.strengthClass === 'weak'}
							>
								Log In							
							</Button>
							<Grid container>
								<Grid item className={classes.gridItem}>
									<Typography variant="body2" className={classes.signupText}>
										Don't have an account?&nbsp;
   									<Link href="signup" variant="body2" className={classes.signupLink}>
											{"Sign Up"}
										</Link>
									</Typography>
								</Grid>
							</Grid>
							<Grid container>
								<Grid item className={classes.gridItem}>
									<Typography variant="body2" className={classes.signupText}>
										Forgot password?&nbsp;
   									<Link href="forgot" onClick={() => localStorage.setItem('backURL', 'login')} variant="body2" className={classes.signupLink}>
											{"Click here"}
										</Link>
									</Typography>
								</Grid>
							</Grid>
							{errors.general && (
								<Typography variant="body2" className={classes.customError}>
									{errors.general}
								</Typography>
							)}
						</form>
					</div>
				</Container>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(login);
