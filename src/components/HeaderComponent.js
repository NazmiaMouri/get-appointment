
import React from 'react';
import {Jumbotron,Image} from 'reactstrap';


function Header () {

        return(
        <Jumbotron>
        <div className="container">
            <div clasName='row row-header'>
                <div className='col-12 col-sm-6'>
                    <h1>Doctors' Appointment</h1>
                    <p>With the use of technology, we aim to do just that; connect and bridge caregivers and the patients so that the people can live better and healthier lives.</p>
                </div>
                
            </div>
        </div>
        </Jumbotron>
        )
    
}
export default Header