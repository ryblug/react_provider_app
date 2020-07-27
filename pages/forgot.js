// Material UI components
import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import Container from '@material-ui/core/Container';
import CircularProgress from '@material-ui/core/CircularProgress';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import AlertDialog from '../components/alertDialog';
import { Redirect } from 'react-router-dom';
import BackDrop from '../components/backDrop';

import * as libs from '../util/libs';

import zxcvbn from 'zxcvbn';

import "./login.css";

import axios from 'axios';

const firebase = require("firebase");
require("firebase/firestore");

const styles = (theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center'
	},
	appBar: {
		backgroundColor: '#53E7C3'
	},
	toolbar: {
		justifyContent: "space-between"
	},
	appBarText: {
		color: '#494B96',
		textAlign: "center"
	},
	form: {
		width: '100%',
		marginTop: theme.spacing(1)
	},
	variantText: {
		color: 'rgb(83, 231, 195)',
		fontSize: '1.4rem',
		marginTop: '2rem',
		fontWeight: "bold"
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
		color: "#000",
		fontSize: "1.2rem"
	},
	signupLink: {
		color: "rgb(153, 153, 153, 1)",
		textDecoration: "underline"
	}
});

class Forgot extends Component {
	constructor(props) {
		super(props);

		this.state = {
			email: '',
			password: '',
			errors: [],
			loading: false,
			openBackDrop: false,
			openDialog: false,
			dialogTitle: '',
			dialogDescription: '',
			handlePopupClose: null,
			redirect: false,
			strengthClass: '',
			strengthTitle: '',
			displayBlock: 'hideBlock'
		};
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.UI && nextProps.UI.errors) {
			this.setState({
				errors: nextProps.UI.errors
			});
		}
	}

	handleChange = (event) => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	handlePasswordChange = (event) => {
		const score = zxcvbn(event.target.value).score;
		console.log('Score:', score);

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

	openSignInPage() {
		const currentState = this.state.dialogTitle;
		this.setState({
			redirect: currentState !== 'Reset failed' ? true : false,
			openDialog: false
		});
	}

	renderRedirect() {
		if (this.state.redirect) {
			return (
				<Redirect
					to={`/login`}
				/>
			);
		}
	};

	handleSubmit = (event) => {
		event.preventDefault();
		if (!this.state.email) {
			this.setState({
				openBackDrop: false,
				openDialog: true,
				dialogTitle: 'Error',
				dialogDescription: 'Fill please "Email address" field.',
				cancelButtonTitle: 'Close'
			});
			return;
		}

		if (!libs.isEmail(this.state.email)) {
			this.setState({
				openBackDrop: false,
				openDialog: true,
				dialogTitle: 'Error',
				dialogDescription: 'Wrong email format.',
				cancelButtonTitle: 'Close'
			});
			return;
		}

		this.setState({ openBackDrop: true });
		// const userData = {
		// 	email: this.state.email,
		// 	password: this.state.password
		// };
		let that = this;

		firebase.auth().sendPasswordResetEmail(this.state.email).then(function () {
			that.setState({
				openBackDrop: false,
				openDialog: true,
				dialogTitle: 'Email sent',
				dialogDescription: 'Letter with link to reset password was sent to your E-mail.',
				cancelButtonTitle: 'OK',
				//handlePopupClose: this.openSignInPage
			});
		}).catch(function (error) {
			console.log(error);
			that.setState({
				//errors: { 'general': error.message },
				openBackDrop: false,
				openDialog: true,
				dialogTitle: 'Reset failed',
				dialogDescription: error.message,
				cancelButtonTitle: 'Close'
				//handlePopupClose: null
			});
		});

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
				<AppBar className={classes.appBar}>
					<Toolbar className={classes.toolbar}>
						<Link href={localStorage.getItem('backURL')}>
							<ArrowBackIosIcon className={classes.appBarText} />
						</Link>
						<Typography variant="h6" className={classes.appBarText}>Reset password</Typography>
						<Typography variant="h6" className={classes.appBarText}>&nbsp;</Typography>
					</Toolbar>
				</AppBar>
				{this.renderRedirect()}
				<Container component="main" maxWidth="xs">
					<CssBaseline />
                    <AlertDialog open={this.state.openDialog} actionButtonTitle={this.state.actionButtonTitle} actionClass={this.state.actionClass} title={this.state.dialogTitle} description={this.state.dialogDescription} cancelButtonTitle={this.state.cancelButtonTitle} handlePopupAction={this.handlePopupAction.bind(this)} handlePopupClose={() => this.setState({openDialog: false})} />
                    <BackDrop open={this.state.openBackDrop} />
					<div className={classes.paper}>

						<Typography className={classes.variantText} component="h5" variant="h5">
							Reset password
					</Typography>
						<form className={classes.form} noValidate>
							<TextField
								variant="outlined"
								margin="normal"
								required
								fullWidth
								id="email"
								label="E-mail Address"
								name="email"
								autoComplete="email"
								autoFocus
								helperText={errors.email}
								error={errors.email ? true : false}
								onChange={this.handleChange}
							/>
							<Button
								type="submit"
								fullWidth
								variant="contained"
								color="primary"
								className={classes.submit}
								onClick={this.handleSubmit}								
							>
								Reset password
							</Button>

							<Grid container>
								<Grid item>

									<p className={classes.signupText}><strong>If you registered using facebook please do not reset password here.</strong></p>


									<p className={classes.signupText}><strong>An email will be sent to you with a link to change password.</strong></p>


									<p className={classes.signupText}><strong>If not received, please check your junk / spam folder.</strong></p>


									<p className={classes.signupText}>Weak passwords will not be accepted.</p>


									<p className={classes.signupText}>Check your password suitability below.</p>

								</Grid>
							</Grid>
							<Grid container spacing={2}>
								<Grid item xs={12}>
									<TextField
										variant="outlined"
										required
										fullWidth
										name="password"
										label="Password"
										type="password"
										id="password"
										autoComplete="current-password"
										helperText={errors.password}
										error={errors.password ? true : false}
										onChange={this.handlePasswordChange}
									/>
								</Grid>
							</Grid>

							<div id="passwordStrength" className={this.state.displayBlock}><div className={this.state.strengthClass}>{this.state.strengthTitle}</div></div>

						</form>
					</div>
				</Container>
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(Forgot);
