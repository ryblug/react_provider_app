import React from "react";
import CircularProgress from '@material-ui/core/CircularProgress';
import { GOOGLE_API_KEY, GOOGLE_CALENDAR_CLIENT_ID, GOOGLE_SCOPE, DISCOVERY_DOCS } from "../config";
//import LoadingIndicator from "./common/LoadingIndicator";

export default function withGoogleCalendar(WrappedComponent) {
  class ComponentWithGoogleAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      gapiReady: false
    };
    this.initClient = this.initClient.bind(this);
    this.updateSigninStatus = this.updateSigninStatus.bind(this);
  }


    componentDidMount() {
      this.loadGoogleAPI();
      //gapi.load('client:auth2', this.initClient);
    }

  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      window.gapi.client.load("calendar", "v3", () => {
         this.setState({ gapiReady: true });
      });
    } else {
      this.setState({
         gapiReady: false
      })
    }
  }

  initClient() {
    const that = this;
    window.gapi.client.init({
      discoveryDocs: DISCOVERY_DOCS,
      clientId: GOOGLE_CALENDAR_CLIENT_ID,
      scope: GOOGLE_SCOPE,
      apiKey: GOOGLE_API_KEY
    }).then(function () {
      console.log(window.gapi);
      // Listen for sign-in state changes.

      // ************* to access instance method you have to use `this.updateSigninStatus`  
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(that.updateSigninStatus);

      // Handle the initial sign-in state.
      that.updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());

      // **************this code is unnecessary and causes errors***** 
      // authorizeButton.onclick = handleAuthClick;
      // signoutButton.onclick = handleSignoutClick;
    });
  }

    loadGoogleAPI() {
      const script = document.createElement("script");
      script.src = "https://apis.google.com/js/api.js";

      script.onload = () => {
        window.gapi.load("client:auth2", this.initClient);
          //() => {
          //window.gapi.client.setApiKey(GOOGLE_API_KEY);
          //window.gapi.client.load("calendar", "v3", () => {
          //  this.setState({ gapiReady: true });
          //});        
      };

      document.body.appendChild(script);
    }

    render() {
      const { gapiReady } = this.state;
      if (gapiReady) return <WrappedComponent />;
      //return <React.Fragment />;
      return <CircularProgress color="inherit" />;
    }
  }
  return ComponentWithGoogleAPI;
}