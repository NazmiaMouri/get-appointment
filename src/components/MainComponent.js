import React,{Component} from 'react';
import Doctor from './DoctorComponents'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Calender from './CalenderComponent'
import { DOCTORS } from '../shared/doctors'

import {Switch , Route, Redirect, withRouter } from 'react-router-dom';


class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      doctors:DOCTORS
    }
   }
 
  render(){
    const DoctorWithId =({match}) =>{
      return(
        <Calender doctor={this.state.doctors.filter((doctor)=> doctor.id == parseInt(match.params.doctorId,10))[0]}/>
      );
      
    }

  return (
   
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path="/home" component={()=><Doctor doctors={this.state.doctors}  />}/>
      <Route path='/home/:doctorId' component={DoctorWithId}/>
    
      <Redirect to='/home'/>
      </Switch>
      <Footer/>
      </div>
      
 
    
  );
  }
  }

export default withRouter(Main);
