
import React from 'react';
import {Jumbotron} from 'reactstrap';


function Header () {

        return(
        <Jumbotron>
        <div className="container">
            <div className='row row-header'>
                <div className='col-12 col-sm-8'>
                    <h1>Doctors' Appointment</h1>
                    <p>We seek to link and bridge caregivers and patients through the use of technology so that people can live happier and healthier lives.</p>
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