// Material UI components
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ElevateAppBar from '../components/elevateAppBar';

import "./login.css";

const styles = (theme) => ({
	subSection: {
		paddingLeft: '1.2rem',
    },
    text: {
        fontSize: "1.2rem"
    }
});

class Terms extends Component {
	constructor(props) {
		super(props);
        localStorage.setItem('backURL', '/');
	}

	// componentWillReceiveProps(nextProps) {
    //     if (this.props.match.params) {
	// 		this.setState({
    //             email: this.props.match.params.email ? this.props.match.params.email : '',
    //             password: this.props.match.params.password ? this.props.match.params.password : '',
    //             firstName: this.props.match.params.firstName ? this.props.match.params.firstName : '',
    //             checked: this.props.match.params.checked ? this.props.match.params.checked : ''
	// 		});
	// 	}
	// }

	render() {
		const { classes } = this.props;
		return (
                <ElevateAppBar title="Terms and Conditions" className={classes.text}>
                            <p><strong>Syncosa Service Provider Terms & Conditions </strong></p>
                            <p><strong>Dated: July 2020 </strong></p>
                            <p>These Syncosa Service Provider Terms and Conditions (“Terms”) are a contract between you (the “Service Provider”) and Blakato Limited trading as Syncosa (“Syncosa”) and relate to the provision of a service provider and customer interfacing cloud-based software application (“Syncosa Services”).  These Terms are intended to explain your obligations as a Service Provider and subscriber of the Syncosa Services. By using and accessing the Syncosa Services, you as the Service Provider shall be deemed to accept and agree to be bound by these Terms.  Please refer to the Customer Terms & Conditions available <a rel="noopener noreferrer" target="_blank" href="http://syncosa.com/terms.html">here</a> if you are an Invited User.</p>
                            <p>Syncosa reserves the right to change these Terms at any time without giving prior notice to You.  Syncosa will post any changes to the Terms on the Website or Mobile App.  The Service Provider’s use of the Website or Mobile App is subject to the most current Terms posted on the Website or Mobile App. The Service Provider must not access or use the Website or Mobile App, if it does not accept the Terms.</p>

                            <p><strong>1. Definitions</strong></p>
                            
							<p>1.1 In these Terms and Conditions, unless the context otherwise requires:</p>							
                            <p className={classes.subSection}>(a) “Account” means the account held with Syncosa to access and use the Syncosa Website, Mobile App and Services.</p>
                            <p className={classes.subSection}>(b) “Agreement” means the agreement between the Service Provider and Syncosa for the provision of the Syncosa Services which are subject to these Terms and Conditions.</p>
                            <p className={classes.subSection}>(c) “Business Day” means a day on which Syncosa are open for business in Havelock North, excluding weekends or public holidays.</p>
                            <p className={classes.subSection}>(d) “Intellectual Property Rights” means all industrial and intellectual property rights and interests owned or licensed by Syncosa (including common law rights and interests) relating to the Website, Mobile App or Syncosa Services, including text, graphics, logos, software and any other materials or documents underlying or forming part of the Website, Mobile App or Syncosa Services and includes anything delivered as part of support or other services, any updates, modifications or derivative works of any of the foregoing, including but not limited to any copyright, trade or service mark, trade or business name, design, patent, semiconductor or circuit layout right, computer code (including source code and object code), and in all cases whether registered or unregistered anywhere in the world.</p>
                            <p className={classes.subSection}>(e) “Invited User” means an individual, business, customer or entity invited and authorised by the Service Provider to use the Syncosa Services.</p>
                            <p className={classes.subSection}>(f) “Invited User Content” means any data, information, text, images, graphs, charts, reports, videos and any other information that may be transmitted, uploaded, submitted or otherwise provided by the Invited User to the Service Provider via Syncosa Services.  Inited User Content does not include Syncosa Technology or Service Provider Content.</p>
                            <p className={classes.subSection}>(g) “Mobile App” means the software Syncosa creates or provides to the Service Provider in connection with the Syncosa Services, generally meant to be accessed and used via mobile devices.</p>
                            <p className={classes.subSection}>(h) “Plans and Pricing” means the amount the Service Provider pays for the Syncosa Services when the  Service Provider meets the threshold provided for the Subscription Services which is based on the number of Invited Users using the Syncosa Services.  </p>
                            <p className={classes.subSection}>(i) “Start Date” will be agreed by Syncosa and the Service Provider and will commence when Syncosa makes the Syncosa Services available to the Service Provider via the Website or Mobile App and downloaded on the App Store or Google Play. </p>
                            <p className={classes.subSection}>(j) “Service Provider” means any company, business or any other entity acting in the provision of a business or profession who registers to use the Syncosa Services and to which Syncosa provides the Syncosa Services. </p>
                            <p className={classes.subSection}>(k) “Service Provider Content” means any data, information, text, images, graphs, charts, reports, videos and any other information that may be transmitted, uploaded, submitted or otherwise provided by the Service Provider for use in conjunction with the Syncosa Services, including any information, reports, graphs or technical data that the Syncosa Services’ generate for the Service Provider based solely on the input of Service Provider Content (Generated Content).  Service Provider Content does not include Syncosa Technology or Invited User Content.</p>
                            <p className={classes.subSection}>(l) “Subscription Service” means the Syncosa Services that the Service Provider has subscribed to, or that Syncosa otherwise make available to Service Provider via the Website or Mobile App as downloaded on the App Store or Google Play) and any ancillary products and services that Syncosa may provide from time to time.</p>
                            <p className={classes.subSection}>(m) “Subscription Term” means the period of time that you pay for the Subscription Service, or that Syncosa otherwise make the Syncosa Services available to the Service Provider in accordance with the Plans and Pricing.</p>
                            <p className={classes.subSection}>(n) “Syncosa Services” means the specific proprietary software product(s) of Syncosa, including the context, features and functionality provided by Syncosa on the Mobile App or Website for the purposes of posting, archiving, managing, displaying, organising, receiving, sharing, manipulating and distributing the Service Provider Content.</p>
                            <p className={classes.subSection}>(o) “Syncosa Technology” means the Syncosa Services, any and all related or underlying documentation, technology, code, know-how and Intellectual Property Rights, including anything delivered as part of support or other services, any updates, modifications or derivative works of any of the foregoing.</p>
                            <p className={classes.subSection}>(p) “Term” means the period during which the Syncosa Services will be provided by Syncosa to the Service Provider, unless cancelled in accordance with these Terms. </p>
                            <p className={classes.subSection}>(q) “Website” means www.syncosa.com operated and developed by Blakato Limited, trading as Syncosa or such other site notified by Syncosa to the Service Provider from time to time.</p>
                            <p><strong>2. Access and Account Setup</strong></p>
<p>2.1 To access and use the Syncosa Services, the Service Provider must create an Account by registering a username and password. It is the Service Provider’s responsibility to ensure that the information provided is accurate, not misleading and is up to date.</p>
<p>2.2 A Service Provider must not register or create an Account if it does not have the permission to do so.</p>
<p>2.3 The Service Provider is responsible for all activity on its Account and when accessing and using the Syncosa Services.  Therefore, please keep the username and password secure as Syncosa is not responsible or liable for any acts or disclosure of information occurring due to unauthorised use.  Please let Syncosa know if the security of an Account has been compromised. </p>
<p>2.4 Syncosa may, in its sole discretion, at any time discontinue providing, or limit access to the Syncosa Services, any areas of the Syncosa Services or Service Provider Content provided on or through the Website or Mobile App (with or without notice) if Service Provider is not authorised to create an Account or is in breach of these Terms.  Service Provider agrees that Syncosa shall not be liable for any termination or limitation of the Service Provider’s access to or use of the Syncosa Services or any Service Provider Content.</p>
                            <p><strong>3. Invited Users</strong></p>
							<p>3.1 The Service Provider may invite an individual, business, customer or entity (“Invited User”) to connect to its Account via the Syncosa Services.  An Invited User can connect to the Service Provider’s Account by “accepting” or “declining” the invitation that the Service Provider can send through the Website or Mobile App.  As the Service Provider, it is important to understand that you can share certain information on your Account with an Invited User.  The Syncosa Services helps facilitate the quick and easy sharing of information between the Service Provider and an Invited User, including contact and address details, services or product information, services or products that the Service Provider has sold or serviced, booking requests, confirmations and reminders.</p>
<p>3.2 The inviting of and sharing of information with an Invited User is at the Service Provider’s sole discretion. </p>
<p>3.3 Each Invited User will be set up by the Service Provider and have the ability to share certain information on the Service Provider’s Account within the limits established by the Service Provider, and any limited access rights set by Syncosa from time to time.  The functions of an Invited User may, but are not limited to, include the following:</p>
<p className={classes.subSection}>(a) viewing and sharing information on the Service Provider’s Account as authorised by the Service Provider;</p>
<p className={classes.subSection}>(b) authorising transactions for the Syncosa Services as authorised by the Service Provider, such as requesting, adjusting, accepting or denying bookings for services or repairs;</p>
<p className={classes.subSection}>(c) reviewing, adjusting, accepting or rejecting automatic reminders; and </p>
<p className={classes.subSection}>(d) creating, uploading, transmitting, submitting, viewing, sharing and dealing with any of the Service Provider’s Content and other information or data that the Service Provider shares (at the Service Provider’s sole discretion) with an Invited User through the Service Provider’s Account. </p>
<p>3.4 The Service Provider must ensure all Invited Users comply with the provisions of these Terms applicable to the Service Provider, as if Invited Users were a party to these Terms. If any Invited User is no longer authorised by the Service Provider to connect to the Service Provider’s Account, then the Service Provider must immediately terminate the Invited User’s connection to the Service Provider’s Account and any Syncosa Services.  The Service Provider may terminate an Invited User’s connection to the Service Provider’s Account by following the prompts when the Service Provider is logged into its Account through the Website or Mobile App and by ending the connection status between the Service Provider and the Invited User.  </p>
<p>3.5 The Service Provider will be responsible for any and all actions taken using the Service Provider’s Account.  The Service Provider must notify Syncosa immediately of any breach of security or unauthorised use of the Service Provider’s Account or Syncosa Services. </p>
<p>3.6 The Service Provider must ensure that Service Provider Content does not relate to the business of a third party unless the Service Provider has the right to hold that information on behalf of a third party, or the information is in the public domain, or the information enters into the public domain other than by breach of the Terms.</p>
<p>3.7 Subject to Syncosa’s prior written consent, the Service Provider must not sell, resell or provide to third parties any of the Syncosa Services unless authorised by Syncosa pursuant to these Terms.</p>
							<p><strong>4. User Licence</strong></p>
<p>4.1 During the Term, Syncosa grants the Service Provider a non-exclusive and non-transferrable right to use and access the Website, Mobile App and Syncosa Services solely for the Service Provider’s own personal use and only as authorised in these Terms.</p>
<p>4.2 The Service Provider may not:</p>
<p className={classes.subSection}>(a) archive, copy, reproduce, distribute, modify, display, publish, licence, create adaptations or derivative works from, offer for sale or use (except as expressly authorised under these Terms) any of the Website or Mobile App content;</p>
<p className={classes.subSection}>(b) circumvent, remove, alter, disable, deactivate or otherwise interfere with any security related features of the Website or Mobile App;</p>
<p className={classes.subSection}>(c) remove any copyright or other proprietary notices on the Website or Mobile App;</p>
<p className={classes.subSection}>(d) install any viruses, worms, malware or other harmful or destructive software or thing that may impair the functionality of the Website, Mobile App or Syncosa Services, or the ability of others to access and use the Website, Mobile App or Syncosa Services; or</p>
<p className={classes.subSection}>(e) sell, resell or provide to third parties any of the Syncosa Services unless authorised by Syncosa pursuant to these Terms.</p>
<p>4.3 Syncosa may from time to time (and at its sole discretion) introduce upgrades and updates to the Syncosa Services.  Syncosa will use its best endeavours to ensure that such upgrades and updates will not detrimentally affect the core functionality of the Syncosa Services.</p>
<p>4.4 The Service Provider authorise Syncosa to send it information (from time to time) about other products and services offered by Syncosa.</p>
							<p><strong>5. Pricing and Plans</strong></p>
<p>5.1 All Syncosa Services are offered free of charge to the Service Provider for the Subscription Term, unless the Service Provider reaches the thresholds set out in the Plans and Pricing.  All information about the Plans and Pricing are located on the Website or Mobile App, or they are available <a rel="noopener noreferrer" target="_blank" href="http://syncosa.com/service/plans.html">here</a>.  The amount the Service Provider pays for the Syncosa Services when the threshold is reached, is calculated on the number of customers stored on the Syncosa System via the Service Provider’s Account (“Subscription Fee”).  Syncosa reserves the right to cancel any subscription in part or whole at any time.</p>
<p>5.2 The Subscription Fees will remain fixed for a period of 12 months, unless the Service Provider exceeds the tiered threshold limits provided in the Plans and Pricing.  </p>
<p>5.3 Syncosa may increase the Subscription Fee every 12 months, subject to Syncosa notifying the Service Provider at least 30 Working Days in advance of the increase to the Subscription Fee. The Service Provider can choose to terminate the Syncosa Services at convenience, if the Service Provider does not agree to the increase in the Subscription Fee. This is subject to the Service Provider promptly paying all unpaid fees due through to the end of your Subscription Term. </p>
<p>5.4 Paying subscribers to the Syncosa Services will be changed monthly automatically via a secure credit card payment system.  The name that will appear on your statement will be Blakato Limited, trading as Syncosa.  The monthly payments will be based on the tiered usage of the previous month as per the Plans and Pricing.</p>
<p>5.5 Payment must be made within 14 Working Days of the invoice date.  Invoice amounts are due and payable within the period noted on the invoice.  If payment is not made with the payment period, Syncosa has the right to suspend service until full payment on all outstanding Subscription Fees has been made.</p>
<p>5.6 Syncosa is a New Zealand business and all transactions will be invoiced in New Zealand dollars unless otherwise stated.</p>

                            <p><strong>6. Term and Termination</strong></p>
<p>6.1 Unless terminated in accordance with these Terms, the Service Provider’s right to access and use the Syncosa Services:</p>
<p className={classes.subSection}>(a) will start on the Start Date; and</p>
<p className={classes.subSection}>(b) continue until either Syncosa or the Service Provider cancel or suspend an Account. </p>
<p>6.2 Syncosa may cancel or suspend an Account at any time if, in Syncosa’s sole discretion, the Service Provider has committed a material or persistent breach of these Terms or any other terms applying to the Service Provider’s use of the Syncosa Services. </p>
<p>6.3 The Service Provider is entitled to cancel its Account with Syncosa at any time.  The Service Provider may cancel its Account by following the prompts when logged into the Service Provider’s Account through the Website or Mobile App. If the Service Provider cancels its Account, the cancellation will take effect immediately.</p>
<p>6.4 If an Account is cancelled:</p>
<p className={classes.subSection}>(i) the Account will be deactivated;</p>
<p className={classes.subSection}>(ii) all of the Service Provider rights granted under these Terms will immediately come to an end;</p>
<p className={classes.subSection}>(iii) all connections with an Invited User will be deleted;</p>

<p className={classes.subSection}>(iv) the Service Provider’s Content will be deleted from the Syncosa System immediately upon cancellation of the Service Provider’s Account, and the Service Provider Content will not be recoverable.  Therefore, Syncosa recommends that the Service Provider exercises caution when cancelling its Account because the Service Provider Content is unable to be restored or recovered once the Service Provider’s Account has been cancelled.</p>

<p className={classes.subSection}>(v) Syncosa is not liable for any loss or damage following, or as a result of, cancellation to the Service Provider’s Account; and </p>
<p className={classes.subSection}>(vi) it is the Service Providers responsibility to ensure that any Service Provider Content which requires saving, is backed up or replicated before cancellation of its Account.  </p>
                            <p><strong>7. Ownership and Use of Service Provider Content</strong></p>
							<p>7.1 The Service Provider will retain all rights, title and interest (including any Intellectual Property Rights) in and to the Service Provider Content (excluding any Syncosa Technology or Invited User Content) that is uploaded on or through Syncosa Services by the Service Provider.</p>
							<p>7.2 Subject to the successful set-up and registration of an Account, Syncosa will make the Service Provider Content readily available to the Service Provider on a rolling month by month basis through the provision of the Syncosa Services. </p>
							<p>7.3 Service Provider hereby grant Syncosa a non-exclusive, royalty free, fully paid up, sublicensable, worldwide right and license to use, reproduce, modify, display, perform, distribute and create derivative works (including Generated Content) of the Service Provider Content to:</p>
							<p className={classes.subSection}>7.3.1 the extent necessary to provide the Syncosa Services and related services to the Service Provider and Invited Users pursuant to these Terms, including Syncosa’s subcontractors and hosting providers required to support the Syncosa Services;</p>
							<p className={classes.subSection}>7.3.2 generate aggregate/anonymous data for use, disclosure and sharing in accordance with clause 7 below; and</p>
							<p className={classes.subSection}>7.3.3 enable the secure exchange of Service Provider Content between the Service Provider and Invited Users and other third parties which have been appointed and granted access rights to Syncosa Services by the Service Provider.  </p>
							<p>7.4 Syncosa will not exchange Service Provider Content which has been uploaded on or through Syncosa Services by the Service Provider and/or Invited Users except:</p>
							<p className={classes.subSection}>(a) where Syncosa is required by law to do so;</p>
							<p className={classes.subSection}>(b) where Syncosa is permitted and authorised by You to do so pursuant to the rights granted in clause 7.3;</p>
							<p className={classes.subSection}>(c) to the extent that its forms part of aggregate/anonymous data used, disclosure and shared pursuant to clause 8; </p>
							<p className={classes.subSection}>(d) as required to enable the Service Provider and Invited Users to communicate (directly or indirectly) with each other on or through the Syncosa Services; or </p>
							<p className={classes.subSection}>(e) where the Service Provider settings provide that Syncosa may disclose or share (or the Service Provider and/or Invited Users have otherwise consented to Syncosa  disclosing or sharing) Service Provider Content and Generated Content with third parties.</p>
                            <p><strong>8. Aggregate / Anonymous Data</strong></p>
							<p>8.1 Service Provider agrees that Syncosa will have the right to generate aggregate / anonymous data, and that aggregate / anonymous data will be deemed Syncosa Technology, which Syncosa may use for any purpose during or after the term of this Agreement (including without limitation) to:</p>
							<p className={classes.subSection}>8.1.1 develop and improve the Syncosa’s products and services;</p>
							<p className={classes.subSection}>8.1.2 analyse and gain understanding as to how the Syncosa Services are being used; and</p>
							<p className={classes.subSection}>8.1.3 market and advertise the Syncosa Services.</p>
							<p>8.2 For the avoidance of doubt, Syncosa will only disclose aggregate / anonymous data externally in a de-identified (anonymous) form that does not identify the Service Provider or Invited Users, and that is stripped of all persistent identifiers.  </p>
							<p>8.3 Syncosa may collect and upload Service Provider Content from a third party provided that: (a) Syncosa has a data sharing or licence agreement in place with the third party or third party is a user of the Syncosa Services and records Service Provider Content directly on or though the Syncosa Services; and (b) the Service Provider’s user settings provide, or the Service Provider has previously authorised Syncosa to collect the Service Provider Content from the third party and You pay all applicable fees (if any) for collecting and uploading that Service Provider Content into Syncosa Services. </p>
                            <p><strong>9. Content Security</strong></p>
<p>9.1 Syncosa will use all reasonable endeavours and precautions to keep Service Provider Content secure, once the Service Provider has provided Service Provider Content on or through the Syncosa Services.  </p>
<p>9.2 Syncosa uses industry standard procedures to store, preserve or access Service Provider Content, including performing daily backups of data which is retained for 30 Business Days for disaster recovery purposes.  Syncosa encourages the Service Provider to perform regular backups of Service Provider Content, and the Service Provider acknowledge that Syncosa is not responsible or liable in any way for the failure to store, preserve or access Service Provider Content that the Service Provider transmits, stores, archives or otherwise makes available on the Syncosa Services. </p>
<p>9.3 Syncosa has no obligation to screen or monitor any Service Provider Content and Syncosa may in its sole discretion remove and/or delete the applicable Service Provider Content, suspend and/or terminate an Account, including the Service Provider or an Invited Users access to the Syncosa Services. </p>
<p>9.4 Syncosa allows the Service Provider to export the Service Provider Content at any time in the  Syncosa Services, as provided in these Terms. </p>
                            <p><strong>10. Technical Requirements and Access</strong></p>
<p>10.1 Service Provider acknowledges that in order to use the Syncosa Services, its equipment, operating system, browser and software must meet the minimum standards determined by Syncosa.</p>
<p>10.2 Service Provider acknowledges that the minimum and technical data standards may need to be altered by Syncosa from time to time and that Syncosa may in its absolute discretion revise those required technical or data standards in whole or in part. Service Provider will be responsible for all costs associated with any change to its systems and/or data required to meet Syncosa’s technical and/or data standards</p>
<p>10.3 Service Provider agrees to:</p>
<p className={classes.subSection}>(a) obtain all necessary rights, releases and consents to allow Service Provider Content to be collected, used and disclosed in the manner contemplated by these Terms and to grant Syncosa the rights set out in these Terms;</p>
<p className={classes.subSection}>(b) use the Syncosa Services in compliance with Syncosa’s Privacy Policy;</p>
<p className={classes.subSection}>(c) not submit, collect or use any personally identifiable information (other than personal information about Invited Users); and</p>
<p className={classes.subSection}>(d) not take any action that would cause Syncosa, the Syncosa Services or Syncosa’s Technology (including Intellectual Property Rights) to become subject to any third party terms (including open source license terms).</p>
<p>10.4 Service Provider represents and warrants that the collection, use and disclosure of Service Provider Content will not violate any third party rights, including intellectual property and privacy rights.  If the Service Provider receives any take down request or infringement notices relating to Service Provider Content or use of third party products, the Service Provider must promptly stop using the related item with the Syncosa Services and notify Syncosa.</p>
<p>10.5 If Syncosa receives any take down requests or infringement notices relating to Service Provider Content or use of third party products, Syncosa may respond in accordance with its policies and will notify and consult with the Service Provider on next steps. </p>
<p>10.6 Syncosa shall use reasonable efforts to ensure that Syncosa Services are available 24 hours a day, 7 days a week.  Syncosa reserves its rights to undertake planned outages of the Syncosa Services for the purposes of upgrades and maintenance and will notify the Service Provider as reasonably practicable of any unplanned outages, and with a minimum of 24 hours before planned outages.</p>
                            <p><strong>11. Intellectual Property Rights</strong></p>
<p>11.1 Service Provider owns and will continue to own all the Service Provider Content (excluding Syncosa Technology and Invited User Content).  </p>
<p>11.2 Service Provider grants Syncosa a non-exclusive, royalty free, fully paid up, sublicensable, worldwide right and license to use, reproduce, modify, display, perform, distribute and create derivative works of the Service Provider Content to provide the Syncosa Services and for the permitted purposes set out in clause 7 (Ownership and Use of Service Provider Content) and clause 8 (Aggregate/Anonymous Data). </p>
<p>11.3 For Service Provider Content, this includes the right to publicly display the Service Provider Content (including derivative works and modifications) to third parties through the Syncosa Services as permitted in clause 7 of the Terms. </p>
<p>11.4 Service Provider may use the Syncosa Services to distribute the Service Provider Content to parties which are approved by the Service Provider, including Invited Users or designating the Service Provider Content as publicly viewable or downloadable by any end-user who downloads or has access to the Service Provider Content.  Syncosa shall have no responsibility or liability for: (a) the Service Provider’s failure to maintain or update Invited Users; or (b) any unauthorised use, sharing or disclosure of any usernames or passwords provided to the Service Provider or an Invited User.</p>
<p>11.5 Except for the rights and licences expressly granted under these Terms, Syncosa shall retain all rights, title and interest (including all Intellectual Property Rights) in and to the Syncosa Services, the Website, Mobile App, Syncosa Technology and all information, data, materials and content related thereto (excluding Service Provider Content) and all modifications and derivative works.  </p>
                            <p><strong>12. Confidential Information</strong></p>
<p>12.1 Service Provider will keep confidential all information relating to the technology, technical processes, business affairs of Syncosa, or of any affiliate of Syncosa (the “Confidential Information”).</p>
<p>12.2 Service Provider will not disclose or use the Confidential Information unless such disclosure or use is specifically authorised by Syncosa.  You will take all reasonable precautions to prevent such disclosure or use.</p>
<p>12.3 Service Provider acknowledges and agrees that it has no right or licence to use any of the Confidential Information.</p>
<p>12.4 The obligations of the parties under this clause survive the expiry or the termination of the Agreement for whatever reason.</p>
                             <p><strong>13. Privacy</strong></p>
<p>13.1 By using the Syncosa Services, the Service Provider agrees to comply with the Syncosa Privacy Policy, which can be accessed via this <a rel="noopener noreferrer" target="_blank" href="http://syncosa.com/privacy.html">link</a>.  Service Provider agrees that Syncosa can contact the Service Provider and send information relating to the Syncosa Services by using electronic messages and other means.  Service Provider may unsubscribe from Syncosa’s electronic messages at any time by emailing admin@syncosa.com.  The Privacy Policy forms part of these Terms.</p>
                             <p><strong>14. Linked Website or Mobile App</strong></p>
<p>14.1 Service Provider’s use and access to the Syncosa Services and Website or Mobile App may contain links to websites of which are not controlled by Syncosa, may not be secure and are not governed by these Terms.  Any link to another third-party website is not an endorsement by Syncosa, and Syncosa is not responsible for the content, accuracy, security or availability on these third-party websites.  </p>
<p>14.2 Service Provider may decide to enable, access or use any Invited Services (as defined below). Service Provider agrees that access and use of such Invited User Services shall be governed solely by the terms and conditions of such Invited User Services, and that Syncosa is not responsible or liable for, and makes no representations as to any aspect of such Invited User Services, including, without limitation, their content or the manner in which they handle data (including Service Provider data) or any interaction between the Service Provider and the provider of such Invited User Services. Any use by the Service Provider of Invited User Services shall be solely between the Service Provider and the applicable Invited User. Service Provider irrevocably waive any claims against Syncosa with respect to such Invited User Services. Syncosa is not liable for any damage or loss caused or alleged to be caused by or in connection with the Service Provider’s enablement, access or use of any such Invited User Services, or the Service Provider’s reliance on the privacy practices, data security processes or other policies of such Invited User Services. “Invited User Services” means third party products, applications, services, software, products, networks, systems, directories, websites, databases and information which one or more Syncosa Services link to, or which You may connect to or enable in conjunction with one or more Syncosa Service.</p>
                             <p><strong>15. Indemnity</strong></p>
<p>15.1 Service Provider agrees to indemnify Syncosa against all liabilities, costs including full costs between solicitor and client, losses, claims, expenses and demands incurred by Syncosa which arise from or in connection with the Service Provider’s access or use of the Website, Mobile App the Syncosa Services or any connections  between any Invited User and you, including but not limited to any breach by You of warranties under these Terms, and from any claims arising out of or incidental to Your use of the Website or Mobile App, the Syncosa Services or any information available on the Website or Mobile App.</p>
                             <p><strong>16. Warranties and Liabilities</strong></p>

<p>16.1	Syncosa warrants that:</p>
<p className={classes.subSection}>16.1.1 it will use commercially reasonable efforts to maintain its systems associated with the Syncosa Services free from viruses and other harmful code; and</p>
<p className={classes.subSection}>16.1.2 it will use reasonable efforts to ensure the Syncosa Services are performed in a professional, workmanlike manner commensurate with the industry practices in the industry in which Syncosa operates.</p>
<p>16.2	Except as is expressly set out above, all terms, conditions, representations and warranties are excluded to the maximum extent permitted by law.</p>
<p>16.3	The Service Provider warrants that:</p>
<p className={classes.subSection}>16.3.1 it has the power and authority to enter into these Terms.</p>
<p className={classes.subSection}>16.3.2 it owns all rights, title and interest in and to Service Provider Content, or has otherwise secured all necessary rights in Service Provider Content as may be necessary to permit the access, use and distribution of Service Provider Content as contemplated by these Terms, or as otherwise authorised by the Service Provider through the Syncosa Services. </p>
<p className={classes.subSection}>16.3.3 Service Provider Content does not include any virus, worms, Trojan horse or other harmful, malicious or disabling code or device or that it designed to damage or allow unauthorised access to the Website, Mobile App or Syncosa Services.</p>
<p className={classes.subSection}>16.3.4 Service Provider Content will not violate, infringe, misappropriate or otherwise interfere with any copyright, trade mark, trade secrets, right of privacy or publicity, or any other intellectual property rights, proprietary or any other right of any person or entity; and</p>
<p className={classes.subSection}>16.3.5 Service Provider Content will note contain any material which is unlawful, harmful, abusive, obscene, threatening, libellous or defamatory, false or inaccurate or violate any applicable local or international law. </p>
<p>16.4	Except to the extent excluded by law, Syncosa excludes all liability to the Service Provider (whether by damages or otherwise) for any consequential, economic or indirect loss or damage arising out of the Terms or the Syncosa Services or the Website, Mobile App or in connection with either of them.  This exclusion applies whether Syncosa’s liability arises in contract, tort (including negligence) or otherwise.</p>
<p>16.5	Syncosa will have no liability for the performance of the Website. Mobile App or Syncosa Services in relation to any use or purpose other than that which has been specifically prescribed by Syncosa.</p>
<p>16.6	Syncosa is not responsible for any failure to provide the Syncosa Services where such failure is caused, or contributed to, by an event outside Syncosa’s reasonable control.</p>
<p>16.7	Syncosa does not provide any guarantee and has no liability to You in respect of the communications and computer links between the Service Provider and Syncosa (or the Service Provider and Invited Users) allowing access to the Syncosa Services.</p>
<p>16.8	Syncosa makes no claim that the Syncosa Services or any of Service Provider Content may be lawfully viewed or downloaded outside of New Zealand.  If You or Invited Users access the Syncosa Services and Service Provider Content outside New Zealand, the Service Provider is responsible for compliance with the laws of the applicable jurisdiction.</p>
<p>16.9	To the extent that Syncosa’s liability cannot be excluded by law, or to the extent that the exclusion of Syncosa’s liability would render these Terms unenforceable, the Service Provider agrees that the maximum amount that You are entitled to claim against Syncosa is limited to the Subscription Fee (if any) received by Syncosa for the Service Provider’s access to the Website or Mobile App and provision of Syncosa Services in the 12 months preceding the date on which the Service Provider’s claim arose.</p>
<p>16.10 To the fullest extent permitted by law:</p>
<p className={classes.subSection}>(a) all warranties, conditions or other terms implied by law are excluded;</p>
<p className={classes.subSection}>(b) the Service Provider agrees not to make and waive any right to make any claim against Syncosa under sections 9, 
	12A and 13 of the Fair Trading Act 1986 and You agree this is fair and reasonable; and</p>
	<p className={classes.subSection}>(c) the Service Provider acknowledges that if the Service Provider acquires Syncosa Services from Syncosa for a business purpose, then provisions of the Consumer Guarantees Act 1993 shall not apply.</p>
	                     <p><strong>17. General</strong></p>
<p>17.1	Neither party will be responsible for any act, omission or failure to fulfil its obligations under these Terms if such act, omission or failure arises from any cause reasonably beyond its control. </p>
<p>17.2	The Service Provider acknowledges that it has carried out all appropriate investigations and relied on its own knowledge or independent advice or both in assessing the risk, contingencies and circumstances that could affect its decision to enter into the Terms and use the Syncosa Services.</p>
<p>17.3	Any notice, document, request, demand or other communication (“notices”) to be given by the parties to each other by email or via the Website or Mobile App. The email address for the Service Provider and Syncosa are those specified during the registration process. </p>
<p>17.4	The Service Provider may not assign or sublet its rights under these Terms without the prior consent of Syncosa to be given in its sole discretion.</p>
<p>17.5	Where the Terms prohibits the Service Provider from undertaking any action, the Service Provider will be responsible for ensuring that its officers, employees, contractors and invitees observe the same prohibitions.</p>
<p>17.6	The Terms are governed by the laws of New Zealand and the parties agree to submit to the exclusive jurisdiction of the courts of New Zealand.</p>
<p>17.7	Where any term or provision in the Terms is invalid, illegal or otherwise contrary to statutory or common law rule, such term or provision shall be deemed replaced by a term or provision that is valid and enforceable and which comes closest to expressing the intention of the term replaced.</p>
<p>17.8	The Terms constitutes the entire agreement between the parties relating to its subject matter and replaces all prior agreements or undertakings between them. Each party confirms that on entering into the Terms it has not relied upon any statement, warranty or other representation made or information supplied by or on behalf of the other party.</p>
<p>17.9	No right under the Terms will be deemed to be waived except by notice in writing signed by each party. A waiver does not prejudice rights in respect of any subsequent breach.</p>
<p>17.10 The obligations set out under clauses 7, 8, 11, 12, 14.2, 15.1 and 16.10 will continue in force notwithstanding termination or expiry of the Agreement.</p>
                     <p><strong>18. Dispute Resolution</strong></p>
<p>18.1	In the event that any claim or dispute arises under the Terms, the Syncosa  shall have the right to refer the matter to arbitration by a single arbitrator nominated by the President of the New Zealand Law Society, such arbitration to be otherwise carried out in accordance with the Arbitration Act 1996.</p>
                     <p><strong>19. Interpretation</strong></p>
<p>19.1	References to any statute or statutory provision includes reference to that statute or statutory provision as from time to time amended, extended, re-enacted or consolidated and to all statutory instruments made pursuant to it.</p>
<p>19.2	Words denoting the singular will include the plural and vice versa.</p>
<p>19.3	The words “include” and “including” will not be construed as terms of limitation. The words “writing” and “written” mean “in documented form”, whether electronic or hard copy, unless otherwise stated. The symbol “$” means New Zealand dollars.</p>
<p>19.4	The headings and use of bold type in these terms and conditions are for convenience only and will not affect the interpretation of any provision of the Terms and Conditions.</p>
<p>19.5	References to the Agreement or any other document will include any permitted and authorised variation, amendment or supplement to such document.</p>

                                </ElevateAppBar>
		);
	}
}

export default withStyles(styles)(Terms);
