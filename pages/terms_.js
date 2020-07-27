// Material UI components
import React, { Component } from 'react';
import withStyles from '@material-ui/core/styles/withStyles';
import ElevateAppBar from '../components/elevateAppBar';

import "./login.css";

const styles = (theme) => ({
	subSection: {
		paddingLeft: '1.2rem',
	},
});

class Terms extends Component {
	constructor(props) {
		super(props);

        // this.state = {
		// 	email: '',
		// 	password: '',
		// 	firstName: '',
		// 	checked: ''
		// };

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
                <ElevateAppBar title="Terms and Conditions" >
                            <p><strong>Terms & Conditions Syncosa</strong></p>
                            <p><strong>Date: January 2020</strong></p>
                            <p>These Terms and Conditions (“Terms and Conditions”) are related to the provision of a customer interfacing cloud-based software application between Blakato Limited Trading as Syncosa (“Syncosa”) and the authorised customer (“Customer”).  By using and accessing the Syncosa Services, the Customer shall be deemed to accept and agree to be bound by these Terms and Conditions.</p>
                            <p><strong>1. Definitions</strong></p>
                            <p>1.1 In these Terms and Conditions, unless the context otherwise requires:</p>
                            <p className={classes.subSection}>(a) “Agreement” means the agreement between the Customer and Syncosa for the provision of the Syncosa Services which are subject to these Terms and Conditions.</p>
                            <p className={classes.subSection}>(b) “Authorised Users” means each Customer authorised to use and access the Syncosa Services, Customer Content and Customer Account.  Authorised Users may include, but are not limited to the Customer, Customer’s employees and authorised external third-party consultants or suppliers for which the Customer allows access and use of Syncosa Services and Customer Account.</p>
                            <p className={classes.subSection}>(c) “Customer” means the person or entity identified as the subscribed customer and/or identified on the tax invoice who holds a Customer Account.</p>
                            <p className={classes.subSection}>(d) “Customer Account” means the Customer’s account held with Syncosa to access and use the Syncosa Services and Customer Content.</p>
                            <p className={classes.subSection}>(e) “Customer Content” means any data, information, text, images, graphs, charts, reports, videos and any other information that may be transmitted, uploaded, submitted or otherwise provided by the Customer for use in conjunction with the Syncosa Services, including any information, reports, graphs or technical data that the Syncosa Services’ generate for the Customer based solely on the input of Customer Content (Generated Content).</p>
                            <p className={classes.subSection}>(f) “Intellectual Property Rights” means all industrial and intellectual property rights and interests (including common law rights and interests) of any kind including but not limited to copyright (including rights in computer software), trade mark, service mark, design, patent, trade secret, semi-conductor or circuit layout rights, trade, business, domain or Syncosa  names, moral rights, know how or other proprietary rights (whether or not any of these are registered and including any application for registration).</p>
                            <p className={classes.subSection}>(g) “Login User ID” means a personalised email address and confidential password for each Authorised User which enables Syncosa to identify each Authorised User, and that can be accessed when using the Syncosa Services.  When the Login User ID is used by each Authorised User it gives access to the Syncosa Services and the Customer Account.</p>
                            <p className={classes.subSection}>(h) “Start Date” will be agreed by Syncosa and the Customer and will commence when Syncosa makes the Syncosa Services available to the Customer via the Website Application.</p>
                            <p className={classes.subSection}>(i) “Syncosa Technology” means the Syncosa Services, any and all related or underlying documentation, technology, code, know-how and Intellectual Property Rights, including anything delivered as part of support or other services, any updates, modifications or derivative works of any of the foregoing.</p>
                            <p className={classes.subSection}>(j) “Syncosa Services” means the specific proprietary software product(s) of Syncosa, including software and tools provided by Syncosa on the Website Application for the purposes of posting, archiving, managing, displaying, organising, receiving, sharing, manipulating and distributing Customer Content.</p>
                            <p className={classes.subSection}>(k) “Term” means the period during which the Syncosa Services will be provided by Syncosa to the Customer, unless cancelled in accordance with these Terms and Conditions. </p>
                            <p className={classes.subSection}>(l) “Website Application” means www.syncosa.com or such other site notified by Syncosa to the Customer. </p>
                            <p className={classes.subSection}>(m) “Working Day” means any day of the week other than, Saturday, Sunday, Waitangi Day, Good Friday, Easter Monday, Anzac Day, the Sovereign’s Birthday, and Labour Day (if Waitangi Day or Anzac Day falls on a Saturday or Sunday, the following Monday).</p>
                            <p><strong>2. Access and Account Setup</strong></p>
                            <p>2.1 As part of the registration process, the Customer must provide information to create an administrative Login User ID that will be used to set up the Customer Account for the Syncosa Services. </p>
                            <p>2.2 The appointment of, and access of rights granted to the Customer and/or Authorised Users are at the Customer’s discretion.  </p>
                            <p>2.3 Each Authorised User will be set up by the Customer and will have the ability to authorise transactions on the Customer Account within the limits (if any) established by the Customer and any limited access rights set by Syncosa from time to time.  The functions of an Authorised User may, but is not limited to, include the following: </p>
                            <p className={classes.subSection}>(a) viewing and accessing the Customer Account and Customer Content;  </p>
                            <p className={classes.subSection}>(b) authorising transactions for the Syncosa Services as authorised by the Customer; </p>
                            <p className={classes.subSection}>(c) creating, uploading, transmitting, submitting, viewing, sharing and dealing with Customer Content and any other information or data on the Customer Account;  </p>
                            <p>2.4 The Customer must ensure all Authorised Users comply with the provisions of these Terms and Conditions applicable to the Customer as if Authorised Users were a party to these Terms and Conditions. If any Authorised User stops working for, or is no longer authorised by the Customer, the Customer must immediately terminate the Authorised User’s access to the Customer Account and any Syncosa Services.  The Customer will be responsible for any and all actions taken using the Customer Account and Login User ID.  The Customer must notify Syncosa immediately of any breach of security or unauthorised use of the Customer Account or Syncosa Services.  </p>
                            <p>2.5 The Customer must ensure that Customer Content does not relate to the business of a third party unless the Customer has the right to hold that information on behalf of a third party; or the information is in the public domain; or the information enters into the public domain other than by breach of the Terms and Conditions. </p>
                            <p>2.6 The Customer must not, unless it obtains Syncosa’s prior written consent, sell, resell or provide to third parties any of the Syncosa Services provided by Syncosa under the Terms and Conditions. </p>
                            <p><strong>3. Syncosa Services</strong></p>
                            <p>3.1 During the Term, Syncosa grants to the Customer and its Authorised Users a non-exclusive and non-transferrable right to use and access the Syncosa Services solely for the Customer and its Authorised Users purposes during the Term and only as authorised in these Terms and Conditions.</p>
                            <p>3.2 Syncosa may from time to time (and at its sole discretion) introduce upgrades and updates to the Syncosa Services.  Syncosa will use its best endeavours to ensure that such upgrades and updates will not detrimentally affect the core functionality of the Syncosa Services.</p>
                            <p>3.3 The Customer authorises Syncosa to send to it from time to time information about other products and services offered by Syncosa.</p>
                            <p>3.4 The Customer may permit an Authorised Users to use and access the Customer Account provided their use is for the Customer’s benefit only and remains in compliance with these Terms and Conditions. The Customer will be responsible and liable for all Authorised Users’ use and access and their compliance with these Terms and Conditions.</p>
                            <p>3.5 All Syncosa Services are offered free of charge to the Customer for the Term. </p>
                            <p>3.6 Syncosa may change these Terms and Conditions at any time by notifying the Customer of the change by email or by posting a notice on the Website Application. Syncosa may also add, remove, or change any products, services or the fees charged to the Customer to access or use them.  Unless stated otherwise, any change takes effect from the date set out in the notice. The Customer is responsible for ensuring they are familiar with the latest Terms and Conditions. By continuing to access and use the Syncosa Services from the date on which the Terms and Conditions are changed, the Customer agrees to be bound by the changed Terms and Conditions.</p>
                            <p><strong>4. Term and Termination</strong></p>
                            <p>4.1 Unless terminated in accordance with these Terms and Conditions, the Customer’s right to access and use the Syncosa Services:</p>
                            <p className={classes.subSection}>(a) will start on the Start Date; and</p>
                            <p className={classes.subSection}>(b) continue until either Syncosa or the Customer cancels or suspends a Customer Account. </p>
                            <p>4.2 Syncosa may cancel or suspend a Customer Account at any time if, in Syncosa’s sole discretion, the Customer has committed a material or persistent breach of these Terms and Conditions or any other terms applying to the Customers use of the Syncosa Services. </p>
                            <p>4.3 The Customer is entitled to cancel their Customer Account with Syncosa at any time.  The Customer may cancel their account by following the prompts when the Customer is logged into their Customer Account through the Website Application. If the Customer cancels their Customer Account, the cancellation will take effect immediately.</p>
                            <p>4.4 If a Customer Account is cancelled:</p>
                            <p className={classes.subSection}>i. the Customer Account will be deactivated;</p>
                            <p className={classes.subSection}>ii. all of the Customers rights granted under these Terms and Conditions will immediately come to an end;</p>
                            <p className={classes.subSection}>iii. the Customer Content will be deleted from the Syncosa System immediately upon cancellation of a Customer Account, and the Customer Content will not be recoverable.  Therefore, Syncosa recommends that Customers exercise caution when cancelling a Customer Account because the Customer Content is unable to be restored or recovered once a Customer Account has been cancelled.</p>
                            <p className={classes.subSection}>iv. Syncosa is not liable for any loss or damage following, or as a result of, cancellation to a Customer Account; and </p>
                            <p className={classes.subSection}>v. it is the Customers responsibility to ensure that any Customer Content which you require is backed up or replicated before cancellation of a Customer Account.</p>
                            <p><strong>5. Ownership and Use of Customer Content</strong></p>
                            <p>5.1 The Customer will retain all right, title and interest (including any Intellectual Property Rights) in and to the Customer Content (excluding any Syncosa Technology).</p>
                            <p>5.2 Subject to the successful set-up and registration of a Customer Account by the Customer, Syncosa will make the Content readily available to the Customer on a rolling month by month basis through the provision of the Syncosa Services. </p>
                            <p>5.3 The Customer hereby grants the Syncosa a non-exclusive, royalty free, fully paid up, sublicensable, worldwide right and license to use, reproduce, modify, display, perform, distribute and create derivative works (including Generated Content) of the Customer Content to:</p>
                            <p className={classes.subSection}>(a) the extent necessary to provide the Syncosa Services and related services to Customer and its Authorised Users pursuant to these Terms and Conditions, including Syncosa’s subcontractors and hosting providers required to support the Syncosa Services;</p>
                            <p className={classes.subSection}>(b) generate aggregate/anonymous Data for use, disclosure and sharing in accordance with clause 6 below; and</p>
                            <p className={classes.subSection}>(c) enable the secure exchange of Customer Content between the Customer and Authorised Users and other third parties which have been appointed and granted access rights to Syncosa Services by Customer.   </p>
                            <p>5.4 Syncosa will not exchange Customer Content which has been uploaded on or through Syncosa Services by the Customer and/or Authorised Users except:</p>
                            <p className={classes.subSection}>(a) where Syncosa is required by law to do so;</p>
                            <p className={classes.subSection}>(b) where Syncosa is permitted and authorised by the Customer to do so pursuant to the rights granted in clause 5.3;</p>
                            <p className={classes.subSection}>(c) to the extent that its forms part of aggregate/anonymous data used, disclosure and shared pursuant to clause 6; </p>
                            <p className={classes.subSection}>(d) as required to enable the Customer and Authorised Users to communicate (directly or indirectly) with each other on or through the Syncosa Services; or </p>
                            <p className={classes.subSection}>(e) where the Customer settings provide that Syncosa may disclose or share (or the Customer and/or Authorised Users have otherwise consented to Syncosa  disclosing or sharing) Customer Content and Generated Content with third parties.</p>
                            <p><strong>6. Aggregate / Anonymous Data</strong></p>
                            <p>6.1 The Customer agrees that Syncosa will have the right to generate aggregate / anonymous data, and that aggregate / anonymous Data will be deemed Syncosa Technology, which Syncosa may use for any purpose during or after the term of this Agreement (including without limitation) to:</p>
                            <p className={classes.subSection}>(a) develop and improve the Syncosa’s products and services;</p>
                            <p className={classes.subSection}>(b) analyse and gain understanding as to how the Syncosa Services are being used; and</p>
                            <p className={classes.subSection}>(c) market and advertise the Syncosa Services.</p>
                            <p>6.2 For the avoidance of doubt, Syncosa will only disclose aggregate / anonymous data externally in a de-identified (anonymous) form that does not identify the Customer or Authorised Users, and that is stripped of all persistent identifiers.  </p>
                            <p>6.3 Syncosa may collect and upload Customer Content from a third party provided that: (a) Syncosa  has a data sharing or licence agreement in place with the third party or third party is a user of the Syncosa Services and records Customer Content directly on or though the Syncosa Services; and (b) the Customer’s user settings provide, or the Customer has previously authorised Syncosa to collect the Customer Content from the third party and the Customer pays all applicable fees (if any) for collecting and uploading that Customer Content into Syncosa Services. </p>
                            <p><strong>7. Content Security</strong></p>
                            <p>7.1 Syncosa will use all reasonable endeavours and precautions to keep Customer Content secure once the Customer has provided Customer Content on or through the Syncosa Services.</p>
                            <p>7.2 Syncosa uses industry standard procedures to store, preserve or access Customer Content, including performing daily backups of data which is retained for 30 days for disaster recovery purposes.  Syncosa encourages the Customer to perform regular backups of Customer Content, and the Customer acknowledges that Syncosa is not responsible or liable in any way for the failure to store, preserve or access Customer Content that the Customer transmits, stores, archives or otherwise makes available on the Syncosa Services. </p>
                            <p>7.3 Syncosa has no obligation to screen or monitor any Customer Content provided by the Customer or Authorised Users, and Syncosa may in its sole discretion remove and/or delete the applicable Customer Content, suspend and/or terminate Customer Account, including the Customer and Authorised Users access to the Syncosa Services. </p>
                            <p>7.4 Syncosa allows the Customer to export the Customer Content at any time in the Syncosa Services as provided in these Terms and Conditions.</p>
                            <p><strong>8. Technical Requirements and Access</strong></p>
                            <p>8.1 The Customer acknowledges that in order to use the Syncosa Services, its equipment, operating system, browser and software must meet the minimum standards determined by Syncosa.</p>
                            <p>8.2 The Customer acknowledges that the minimum and technical data standards may need to be altered by Syncosa from time to time and that Syncosa may in its absolute discretion revise those required technical or data standards in whole or in part. The Customer will be responsible for all costs associated with any change to its systems and/or data required to meet Syncosa’s technical and/or data standards</p>
                            <p>8.3 The Customer agrees to:</p>
                            <p>(a) obtain all necessary rights, releases and consents to allow Customer Content to be collected, used and disclosed in the manner contemplated by these Terms and Conditions and to grant Syncosa the rights set out in these Terms and Conditions;</p>
                            <p className={classes.subSection}>(b) use the Syncosa Services in compliance with Syncosa’s Privacy Policy;</p>
                            <p className={classes.subSection}>(c) not submit, collect or use any personally identifiable information (other than personal information about Authorised Users);</p>
                            <p className={classes.subSection}>(d) not take any action that would cause Syncosa, the Syncosa Services or Syncosa’s Technology (including Intellectual Property Rights) to become subject to any third party terms (including open source license terms);</p>
                            <p>8.4 The Customer represents and warrants that the collection, use and disclosure of Customer Content will not violate any third party rights, including intellectual property, privacy and publicity rights.  If the Customer receives any take down request or infringements notices relates to Customer Contents or its use of third party products, it must promptly stop using the related item with the Syncosa Services and notify Syncosa.</p>
                            <p>8.5 If Syncosa receives any take down requests or infringement notices relating to Customer Content or the Customer’s use of third party products, Syncosa may respond in accordance with its policies and will notify and consult with the Customer on next steps. </p>
                            <p>8.6 Syncosa shall use reasonable efforts to ensure that Syncosa Services are available 24 hours a day, 7 days a week.  Syncosa reserves its rights to undertake planned outages of the Syncosa Services for the purposes of upgrades and maintenance and will notify the Customer as reasonably practicable of any unplanned outages, and with a minimum of 24 hours before planned outages.</p>
                            <p><strong>9. Intellectual Property Rights</strong></p>
                            <p>9.1 The Customer owns, and as between the Customer and Syncosa, will continue to own all the Customer Content (excluding Syncosa Technology).  </p>
                            <p>9.2 The Customer grants Syncosa a non-exclusive, royalty free, fully paid up, sublicensable, worldwide right and license to use, reproduce, modify, display, perform, distribute and create derivative works of the Customer Content to provide the Syncosa Services and for the permitted purposes set out in clause 5 (Ownership and Use of Customer Content) and clause 6 (Aggregate/Anonymous Data). </p>
                            <p>9.3 For Customer Content, this includes the right to publicly display the Customer Content (including derivative works and modifications) to third parties through the Syncosa Services as permitted in clause 5 of the Terms and Conditions. </p>
                            <p>9.4 The Customer may use the Syncosa Services to distribute the Content to parties which the Customer approves, including Authorised Users or designating the Customer Content as publicly viewable or downloadable by any end-user who downloads or has access to the Customer Content.  Syncosa shall have no responsibility or liability for: (a) the Customer’s failure to maintain or update Authorised Users; or (b) any unauthorised use, sharing or disclosure of any Login User IDs provided to the Customer or its Authorised Users.</p>
                            <p>9.5 Except for the right and licences expressly granted in these Terms and Conditions, no other licence is granted, no other use is permitted, and the Customer shall retain all rights, title and interest (including all Intellectual Property Rights) in and to the Customer Content.</p>
                            <p>9.6 Except for the rights and licences expressly granted under these Terms and Conditions, Syncosa shall retain all rights, title and interest (including all Intellectual Property Rights) in and to the Syncosa Services, the Website Application, Syncosa Technology and all information, data, materials and content related thereto (excluding Customer Content) and all modifications and derivative works.</p>
                            <p><strong>10. Confidential Information</strong></p>
                            <p>10.1 The Customer will keep confidential all information relating to the technology, technical processes, business affairs of Syncosa, or of any affiliate of Syncosa (the “Confidential Information”).</p>
                            <p>10.2 The Customer will not disclose or use the Confidential Information unless such disclosure or use is specifically authorised by Syncosa.  The Customer will take all reasonable precautions to prevent such disclosure or use.</p>
                            <p>10.3 The Customer acknowledges and agrees that it has no right or licence to use any of the Confidential Information.</p>
                            <p>10.4 The obligations of the parties under this clause survive the expiry or the termination of the Agreement for whatever reason.</p>
                            <p><strong>11. Warranties and Liabilities</strong></p>
                            <p>11.1 Syncosa warrants that:</p>
                            <p className={classes.subSection}>(a) it will use commercially reasonable efforts to maintain its systems associated with the Syncosa Services free from viruses and other harmful code; and</p>
                            <p className={classes.subSection}>(b) it will use reasonable efforts to ensure the Syncosa Services are performed in a professional, workmanlike manner commensurate with the industry practices in the industry in which Syncosa operates.</p>
                            <p>11.2 Except as is expressly set out above, all terms, conditions, representations and warranties are excluded to the maximum extent permitted by law.</p>
                            <p>11.3 The Customer warrants that:</p>
                            <p className={classes.subSection}>(a) it has the power and authority to enter into these Terms and Conditions.</p>
                            <p className={classes.subSection}>(b) it owns all rights, title and interest in and to the Customer Content, or has otherwise secured all necessary rights in the Customer Content as may be necessary to permit the access, use and distribution of the Content as contemplated by these terms and conditions, or as otherwise authorised by Customer through the Syncosa Services. </p>
                            <p className={classes.subSection}>(c) the Customer Content does not include any virus, worms, Trojan horse or other harmful, malicious or disabling code or device or that it designed to damage or allow unauthorised access to the Website Application or Syncosa Services.
                                the Customer Content will not violate, infringe, misappropriate or otherwise interfere with any copyright, trade mark, trade secrets, right of privacy or publicity, or any other intellectual property rights, proprietary or any other right of any person or entity; and</p>
                            <p className={classes.subSection}>(d) the Customer Content will note contain any material which is unlawful, harmful, abusive, obscene, threatening, libellous or defamatory, false or inaccurate or violate any applicable local or international law. </p>
                            <p>11.4 Except to the extent excluded by law, Syncosa excludes all liability to the Customer (whether by damages or otherwise) for any consequential, economic or indirect loss or damage arising out of the Terms and Conditions or the Syncosa Services or the Website Application or in connection with either of them.  This exclusion applies whether Syncosa’s liability arises in contract, tort (including negligence) or otherwise.</p>
                            <p>11.5 Syncosa will have no liability for the performance of the Website Application or Syncosa Services in relation to any use or purpose other than that which has been specifically prescribed by Syncosa.</p>
                            <p>11.6 Syncosa is not responsible for any failure to provide the Syncosa Services where such failure is caused, or contributed to, by an event outside Syncosa’s reasonable control.</p>
                            <p>11.7 Syncosa does not provide any guarantee and has no liability to the Customer in respect of the communications and computer links between the Customer and Syncosa (or the Customer and its Authorised Users) allowing access to the Syncosa Services.</p>
                            <p>11.8 To the extent permitted by law, the Customer shall be responsible for the acts or admissions of any person, persons or Authorised Users who access the Syncosa Services or Website Application using Login User ID provided or created by the Customer.</p>
                            <p>11.9 Syncosa makes no claim that the Syncosa Services or any Customer Content may be lawfully viewed or downloaded outside of New Zealand.  If the Customer or Authorised Users access the Syncosa Services and Customer Content outside New Zealand, they are responsible for compliance with the laws of the applicable jurisdiction.</p>
                            <p><strong>12. General</strong></p>
                            <p>12.1 Neither party will be responsible for any act, omission or failure to fulfil its obligations under these Terms and Conditions if such act, omission or failure arises from any cause reasonably beyond its control. </p>
                            <p>12.2 The Customer acknowledges that it has carried out all appropriate investigations and relied on its own knowledge or independent advice or both in assessing the risk, contingencies and circumstances that could affect its decision to enter into the Terms and Conditions and use the Syncosa Services.</p>
                            <p>12.3 Any notice, document, request, demand or other communication (“notices”) to be given by the parties to each other by email or via the Website Application. The email address for the Customer and Syncosa are those specified during the registration process. </p>
                            <p>12.4 The Customer may not assign or sublet its rights under these Terms and Conditions without the prior consent of Syncosa to be given in its sole discretion.</p>
                            <p>12.5 Where the Terms and Conditions prohibits the Customer from undertaking any action, the Customer will be responsible for ensuring that its officers, employees, contractors and invitees observe the same prohibitions.</p>
                            <p>12.6 The Terms and Conditions are governed by the laws of New Zealand and the parties agree to submit to the exclusive jurisdiction of the courts of New Zealand.</p>
                            <p>12.7 Where any term or provision in the Terms and Conditions is invalid, illegal or otherwise contrary to statutory or common law rule, such term or provision shall be deemed replaced by a term or provision that is valid and enforceable and which comes closest to expressing the intention of the term replaced.</p>
                            <p>12.8 The Terms and Conditions constitutes the entire agreement between the parties relating to its subject matter and replaces all prior agreements or undertakings between them. Each party confirms that on entering into the Terms and Conditions it has not relied upon any statement, warranty or other representation made or information supplied by or on behalf of the other party.</p>
                            <p>12.9 No right under the Terms and Conditions will be deemed to be waived except by notice in writing signed by each party. A waiver does not prejudice rights in respect of any subsequent breach.</p>
                            <p>12.10 The Customer will indemnify Syncosa  from any and all claims, expenses and costs (including legal fees) losses, liabilities or damages which are incurred by Syncosa as a result of any breach of the Terms and Conditions by the Customer (including any costs incurred by Syncosa in the enforcement of the Agreement against the Customer).</p>
                            <p>12.11 The obligations set out under clauses 5, 6, 10, 11 and 12.10 will continue in force notwithstanding termination or expiry of the Agreement.13Dispute Resolution</p>
                            <p>12.12 In the event that any claim or dispute arises under the Terms and Conditions, the Syncosa  shall have the right to refer the matter to arbitration by a single arbitrator nominated by the President of the New Zealand Law Society, such arbitration to be otherwise carried out in accordance with the Arbitration Act 1996.</p>
                            <p><strong>13. Interpretation</strong></p>
                            <p>13.1 References to any statute or statutory provision includes reference to that statute or statutory provision as from time to time amended, extended, re-enacted or consolidated and to all statutory instruments made pursuant to it.</p>
                            <p>13.2 Words denoting the singular will include the plural and vice versa.</p>
                            <p>13.3 The words “include” and “including” will not be construed as terms of limitation. The words “writing” and “written” mean “in documented form”, whether electronic or hard copy, unless otherwise stated. The symbol “$” means New Zealand dollars.</p>
                            <p>13.4 The headings and use of bold type in these terms and conditions are for convenience only and will not affect the interpretation of any provision of the Terms and Conditions.</p>
                            <p>13.5 References to the Agreement or any other document will include any permitted and authorised variation, amendment or supplement to such document.</p>`
                                </ElevateAppBar>
		);
	}
}

export default withStyles(styles)(Terms);
