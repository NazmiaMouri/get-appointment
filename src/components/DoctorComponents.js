import React, {Component} from 'react'
import {Media} from 'reactstrap'
import {DOCTORS} from '../shared/doctors' 


class Doctor extends Component{
    constructor(props) {
        super(props);
    
        this.state ={
          doctors: DOCTORS,
          selecteddoctor:null
        };
    }
    render(){
    const show_doctors=this.state.doctors.map((doctor) => {
        return (
            <div key={doctor.id} className='col-12 mt-5'>
                <Media tag='li'>
                
                    <Media left middle>
                        <Media object src={doctor.image} alt={doctor.name}/>
    
                    </Media>
                    <Media body className='ml-5'>
                    <Media heading>{doctor.name}</Media>
                    <h6> {doctor.org}</h6> 
                    <button className='bg-primary 'id='btn-font'>View Schedule</button>
                    
                    </Media>
                </Media>
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
}
export default Doctor;
