// Material UI components
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ElevateAppBar from '../components/elevateAppBar';

import "./login.css";

const styles = (theme) => ({
	subSection: {
		paddingLeft: '1.2rem'
	},
});

class Privacy extends Component {
	constructor(props) {
		super(props);
        localStorage.setItem('backURL', '/');
	}

	render() {
		const { classes } = this.props;
		return (
			<ElevateAppBar title="Privacy Policy" >
				<p><strong>1. PRIVACY</strong></p>
				<p>Blakato Limited, Trading as Syncosa (we, us, our) is committed to ensuring that your privacy is protected. We comply with the New Zealand Privacy Act 1993 (the “Act”) when dealing with your personal information.</p>
				<p>This policy sets out how we will collect, use, disclose and protect your personal information. This policy does not limit or exclude any of your rights under the Act.</p>
				<p><strong>2. CHANGES TO THIS POLICY</strong></p>
				<p>We may change this policy by uploading a revised policy onto the website www.syncosa.com (the “Website”). Any changes will apply from the date that we upload the revised policy.</p>
				<p><strong>3. WHAT INFORMATION WE COLLECT</strong></p>
				<p>We may collect the following information:</p>
				<p className={classes.subSection}>(a) your name, email address or email;</p>
				<p className={classes.subSection}>(b) demographic information such as postcode, preferences and interests;</p>
				<p className={classes.subSection}>(c) information relevant to customer surveys, quote requests, and/or offers;</p>
				<p className={classes.subSection}>(d) information provided through our registration process, or through any contact with us (e.g. telephone call or email), or when you buy or use our services and products; and</p>
				<p className={classes.subSection}>(e) information obtained from third parties where you have authorised this, or the information is publicly available.</p>
				<p><strong>4. USE OF INFORMATION</strong></p>
				<p>We may use your personal information:</p>
				<p className={classes.subSection}>(i) to verify your identity;</p>
				<p className={classes.subSection}>(ii) to provide services and products to you;</p>
				<p className={classes.subSection}>(iii) to market our services and products to you, including contacting you electronically (e.g. by text or email for this purpose);</p>
				<p className={classes.subSection}>(iv) to improve the services and products that we provide to you;</p>
				<p className={classes.subSection}>(v) to undertake credit checks (if necessary);</p>
				<p className={classes.subSection}>(vi) to invoice you and to collect money that you owe us, including authorising and processing credit card transactions (if necessary);</p>
				<p className={classes.subSection}>(vii) to respond to communications from you, including a complaint;</p>
				<p className={classes.subSection}>(viii) to conduct research and statistical analysis (on an anonymised basis);</p>
				<p className={classes.subSection}>(ix) for any other purpose authorised by you or the Act; or</p>
				<p className={classes.subSection}>(x) to periodically send promotional email about new products, special offers or other information which we think you may find interesting using an email address which you have provided.</p>
				<p><strong>5. DISCLOSING YOUR INFORMATION</strong></p>
				<p>We may disclose your personal information to:</p>
				<p className={classes.subSection}>i. another company within our group;</p>
				<p className={classes.subSection}>ii. any business that supports our services and products, including any person that hosts or maintains any underlying IT system or data centre that we use to provide the Website or other services and products;</p>
				<p className={classes.subSection}>iii. a credit reference agency for the purpose of credit checking you (if necessary);</p>
				<p className={classes.subSection}>iv. other third parties (for anonymised statistical information);</p>
				<p className={classes.subSection}>v. a person who can require us to supply your personal information (e.g. a regulatory authority);</p>
				<p className={classes.subSection}>vi. any other person authorised by the Act or another law (e.g. a law enforcement agency); and</p>
				<p className={classes.subSection}>vii. any other person authorised by you.</p>
				<p><strong>6. SECURITY</strong></p>
				<p>We will take reasonable steps to keep your personal information safe from loss, unauthorised activity, or other misuse. We are committed to ensuring that your information is secure. In order to prevent unauthorised access or disclosure, we have put in place suitable physical, electronic and managerial procedures to safeguard and secure the information collected online via the Website. However, we are not responsible or liable for any unauthorised breaches of the Website or our records by third parties.</p>
				<p><strong>7. ACCESSING AND CORRECTING YOUR INFORMATION</strong></p>
				<p>Subject to certain grounds for refusal set out in the Act, you have the right to access your readily retrievable personal information that we hold and to request a correction to your personal information. Before you exercise this right, we will need evidence to confirm that you are the individual to whom the personal information relates.</p>
				<p>In respect of a request for correction, if we think the correction is reasonable and we are reasonably able to change the personal information, we will make the correction. If we do not make the correction, we will take reasonable steps to note on the personal information that you requested the correction.</p>
				<p>If you want to exercise either of the above rights, email us at admin@syncosa.com. Your email should provide evidence of who you are and set out the details of your request (e.g. the personal information, or the correction, that you are requesting).</p>
				<p>We may charge you our reasonable costs of providing to you copies of your personal information or correcting that information.</p>
				<p><strong>8. INTERNET USE</strong></p>
				<p>While we take reasonable steps to maintain secure internet connections, if you provide us with personal information over the internet, the provision of that information is at your own risk.</p>
				<p>If you follow a link on the Website to another site, the owner of that site will have its own privacy policy relating to your personal information. We suggest you review that site’s privacy policy before you provide personal information.</p>
				<p><strong>9. COOKIES</strong></p>
				<p>A cookie is a small file which asks permission to be placed on your computer’s hard drive. Once you agree, the file is added and the cookie helps analyse web traffic or lets you know when you visit a particular site. Cookies allow web applications to respond to you as an individual. The web application can tailor its operations to your needs, likes and dislikes by gathering and remembering information about your preferences.</p>
				<p>Overall, cookies help us provide you with a better website, by enabling us to monitor which pages you find useful and which you do not. A cookie in no way gives us access to your computer or any information about you, other than the data you choose to share with us.</p>
				<p>You can choose to accept or decline cookies. Most web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer. This may prevent you from taking full advantage of the Website.</p>
				<p>Third party advertisers use cookies to serve ads that may appear on this site from time to time. The use of cookies by these advertisers enables them to serve adverts to visitors that are based on their visits to this Website as well as other sites on the internet.</p>
				<p>We and certain advertisers may also use cookies to track users’ activities on the Website to measure advertisement effectiveness and other reasons that will be provided in their own privacy policies, we have no access or control over these cookies that may be used by third party advertisers.</p>
				<p>We take no responsibility for the collection of cookies by third parties.</p>
				<p><strong>10. LINKS TO OTHER WEBSITES</strong></p>
				<p>Our Website may contain links to enable you to visit other websites of interest easily. These links are provided for your convenience to provide further information. They do not signify that We endorse such website(s). We have no responsibility for the content of the linked website(s). However, once you have used these links to leave our Website, you should note that we do not have any control over that other website. Therefore, we cannot be responsible for the protection and privacy of any information which you provide whilst visiting such sites and such sites are not governed by this privacy statement. You should exercise caution and look at the privacy statement applicable to the website in question.</p>
			</ElevateAppBar>);
	}
}

export default withStyles(styles)(Privacy);
