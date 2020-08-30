import React from 'react'
import {Media} from 'reactstrap'
import { Link} from 'react-router-dom';

function Doctor (props){
    
    
    const show_doctors=props.doctors.map((doctor) => {
        return (
            <div  className='col-12 mt-5'>
               <Link to={`/home/${doctor.id}`} >
                <Media tag='li' key={doctor.id} >
                
                    <Media left middle>
                        <Media object src={doctor.image} alt={doctor.name}/>
                    </Media>
                    <Media body className='ml-5'>
                    <Media heading>{doctor.name}</Media>
                    <h6> {doctor.org}</h6> 
                    <h7> {doctor.specialization}</h7> 
                   
                
                    </Media>
                   
                </Media>
                </Link>  
              
            </div>
            
        );
})
return(

    <div className='container'>
        <div className="row row-content">
                    
                    <div className="col-12">
                    <h2>Our Specialists</h2>
                        <Media list>
                        {show_doctors}
                        </Media>
                    </div>
        </div>
    </div>    
        
)    

}

export default Doctor;
