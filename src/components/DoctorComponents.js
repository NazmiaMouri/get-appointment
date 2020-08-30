import React,{useState} from 'react'
import {Media} from 'reactstrap'
import { Link} from 'react-router-dom';



function Doctor (props){
    
    const[ inputsearch,setInputSearch]= useState(null);

    function onchange(event){
       let value=event.target.value
       setInputSearch(value);
      
    }
    


    const show_doctors=props.doctors.filter((doctor) => {
        if(inputsearch == null){
          return doctor
        }
        else if ((doctor.name).toLowerCase().includes(inputsearch.toLowerCase()) || (doctor.org).toLowerCase().includes(inputsearch.toLowerCase()) || (doctor.specialization).toLowerCase().includes(inputsearch.toLowerCase())){
          return doctor
      }
     
    }).map((doctor) => {
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
        <div className="row justify-content-center m-auto">
           <input  classname="col-10 col-sm-6" type="text" id="myInput"  placeholder="Search for names, Hospital names, Specilizations.."  value={inputsearch} onChange={onchange}/> 
        </div>
        <div className="row row-content">
                    
                    <div className="col-12 col-sm-10">
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
