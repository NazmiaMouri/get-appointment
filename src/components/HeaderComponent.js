
import React from 'react';
import {Jumbotron,Image} from 'reactstrap';


function Header () {

        return(
        <Jumbotron>
        <div className="container">
            <div className='row row-header'>
                <div className='col-12 col-sm-8'>
                    <h1>Doctors' Appointment</h1>
                    <p>With the use of technology, we aim to do just that; connect and bridge caregivers and the patients so that the people can live better and healthier lives.</p>
                </div>
                <div className='col-12 col-sm-4'>
                 <img src='/assets/stuff.png' className='img-fluid rounded-circle' alt='logo'/>
                </div>
                
            </div>
        </div>
        </Jumbotron>
        )
    
}
export default Header