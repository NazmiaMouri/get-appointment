import React, { Component } from 'react'
import { Breadcrumb, BreadcrumbItem,Col,Label,Button,Row } from 'reactstrap'
import { Link} from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const maxlength = (len) => (val) => !(val) || (val.length <= len);
const minlength = (len) => (val) => (val) && (val.length >= len);
const isNumber = (val) => !isNaN(Number(val));
const validEmail = (val) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val)

class  Detail extends Component{

    constructor(props){
        super(props);

        this.handleSubmit=this.handleSubmit.bind(this);
    }
 
    

   handleSubmit(values){
        
        
        alert('current state is :'+JSON.stringify(values));
      
    }
    render(){
    return(
        <div className='container '>
                    <div className="row">
                     <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Detail Form</BreadcrumbItem>
                       </Breadcrumb>
                       </div>
                       <div className='row row-content'>
                    <div className='col-12'>
                        <h3 >Add Details</h3>
                    </div>
                    
                    <div className='col-12 col-md-9'>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
                            <Row className='form-group'>
                                <Label htmlFor='firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Control.text model=".firstname" id='firstname' name='firstname'
                                    placeholder='First Name'
                                    className='form-control'
                                    validators={{
                                        required,
                                        minlength:minlength(3),
                                        maxlength:maxlength(10)}}/>
                                    
                                    <Errors className='text-danger'
                                    model='.firstname'
                                    show='touched'
                                    messages={{
                                        required: 'Required',
                                        minlength : 'Must be greater than 3 characters',
                                        maxlength : 'Must be less  than 10 characters'
                                    }}/>
                                </Col>
                                </Row>
                            <Row className='form-group'>
                                <Label htmlFor='lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Control.text model='.lastname' id='lastname' name='lastname'
                                    placeholder='Last Name' className='form-control'  
                                    validators={{
                                        required,
                                        minlength : minlength(3),
                                        maxlength : maxlength(10)}}/>
                                    
                                    <Errors className='text-danger'
                                    model='.lastname'
                                    show='touched'
                                    messages={{
                                        required: 'Required',
                                        minlength : 'Must be greater than 3 characters',
                                        maxlength : 'Must be less  than 10 characters'
                                    }}/>
                                </Col>
                                </Row>
                                <Row className='form-group'>
                                <Label htmlFor='age' md={2}>Age</Label>
                                <Col md={5}>
                                    <Control.text model=".age" id='age' name='age'
                                    placeholder='Age'
                                    className='form-control'
                                    validators={{
                                        required,
                                        isNumber}
                                        }/>
                                    
                                    <Errors className='text-danger'
                                    model='.age'
                                    show='touched'
                                    messages={{
                                        required: 'Required',
                                        isNumber: 'Must be a Number'
                                       
                                    }}/>
                                </Col>
                                <Col md={{size: 3, offset:1}}>
                                    <Control.select model='.genderType'name='genderType'
                                    className='form-control'>
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Control.select>
                                </Col>
                                </Row>
                                
                                
                            <Row className='form-group'>
                                <Label htmlFor='telnum' md={2}>Contact Tel.</Label>
                                <Col md={10}>
                                <Control.text model=".telnum" id='telnum' name='telnum'
                                    placeholder='Tel. Number' className='form-control' 
                                    validators={{
                                        required,
                                        minlength:minlength(3),
                                        maxlength:maxlength(10),
                                        isNumber}}/>
                                    
                                    <Errors className='text-danger'
                                    model='.telnum'
                                    show='touched'
                                    messages={{
                                        required: 'Required',
                                        minlength : 'Must be greater than 3 characters',
                                        maxlength : 'Must be less  than 10 characters',
                                        isNumber: 'Must be a Number'
                                    }}/>
                                   
                                    
                                </Col>
                                </Row>
                            <Row className='form-group'>
                                <Label htmlFor='email' md={2}>Email</Label>
                                <Col md={10}>
                                <Control.text model=".email" id='email' name='email'
                                    placeholder='Email' className='form-control'
                                    validators={{
                                        required,
                                       validEmail}}/>
                                    
                                    <Errors className='text-danger'
                                    model='.email'
                                    show='touched'
                                    messages={{
                                        required: 'Required',
                                        validEmail: 'Invalid email address'
                                    }}/>
                                   
                                   
                                </Col>
                                </Row>
                               
                            <Row className='form-group'>
                                <Label htmlFor='message' md={2}>Reason to Visit</Label>
                                <Col md={10}>
                                    <Control.textarea model='.message' id='message' name='message'
                                    rows='12' className='form-control'/>
                                </Col>
                                </Row>
                            <Row className='form-group'>
                                <Col md={{size:10,offset:2}}>
                                    <Button type='submit' color='primary'>Book </Button>
                                </Col>
                            </Row>
                           
                        </LocalForm>           
                    </div>
        </div>
        </div>

    )
                                }
}
export default Detail