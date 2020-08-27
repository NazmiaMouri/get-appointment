import React from 'react';
import Doctor from './DoctorComponents'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import {Switch , Route, Redirect, withRouter } from 'react-router-dom';

function Main() {
  return (
   
    <div className="App">
      <Header/>
      <Switch>
      <Route path="/home" component={Doctor}/>
      <Redirect to='/home'/>
      </Switch>
      <Footer/>
      </div>
      
 
    
  );
}

export default withRouter(Main);