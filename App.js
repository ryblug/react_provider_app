import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import withGoogleCalendar from "./components/withGoogleCalendar";

import './App.css';

import login from './pages/login';
import signup from './pages/signup';
import home from './pages/home';
import forgot from './pages/forgot';
import terms from './pages/terms';
import privacy from './pages/privacy';
import customersList from "./pages/customersList";
import customerAdd from "./pages/customerAdd";
import productAdd from "./pages/productAdd";
import productConfirm from "./pages/productConfirm";
import productsList from "./pages/productsList";
import requestsList from "./pages/requestsList";
import bookingsList from "./pages/bookingsList";
import addABooking from "./pages/addABooking";
import requestABooking from "./pages/requestABooking";
import requestConfirmed from "./pages/requestConfirmed";
import notificationsList from "./pages/notificationsList";
import remindersList from "./pages/remindersList";
import reminderAdd from "./pages/reminderAdd";
import search from "./pages/search";
import profile from "./pages/profile";
import settings from "./pages/settings";
import aboutUs from "./pages/aboutUs";
import userGuide from "./pages/userGuide";
import contactUs from "./pages/contactUs";
import faq from "./pages/faq";

function App() {
  return (
    <Router basename={'/oss/dev/resume/hours/syncosa/service/provider'}>
      <div>
        <Switch>
          <Route path="/home" component={home}/>
          <Route path="/signup" component={signup}/>
          <Route path="/forgot" component={forgot}/>          
          <Route path="/terms" component={terms}/>
          <Route path="/privacy" component={privacy}/>
          <Route path="/customers-list" component={customersList}/>
          <Route path="/customer-add" component={customerAdd}/>
          <Route path="/product-add" component={productAdd}/>
          <Route path="/product-confirm" component={productConfirm}/>
          <Route path="/products-list" component={productsList}/>
          <Route path="/requests-list" component={requestsList}/>
          <Route path="/bookings-list" component={bookingsList}/>
          <Route path="/add-a-booking" component={addABooking}/>
          <Route path="/request-a-booking" component={requestABooking}/>
          <Route path="/request-confirmed" component={requestConfirmed}/>
          <Route path="/notifications-list" component={notificationsList}/>
          <Route path="/reminders-list" component={remindersList}/>
          <Route path="/reminder-add" component={reminderAdd}/>
          <Route path="/search" component={search}/>
          <Route path="/profile" component={profile}/>
          <Route path="/settings" component={settings}/>
          <Route path="/about-us" component={aboutUs}/>
          <Route path="/user-guide" component={userGuide}/>
          <Route path="/contact-us" component={contactUs}/>
          <Route path="/faq" component={faq}/>
          <Route path="/" component={login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App; // withGoogleCalendar(App)
