import React from 'react';
import { Breadcrumb, BreadcrumbItem,Modal,ModalBody,ModalHeader,Col,Form,FormGroup,Label,Input,Button } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Inject,ViewDirective,ViewsDirective,ScheduleComponent,Week} from '@syncfusion/ej2-react-schedule'
import moment from 'moment';

class Calender extends React.Component {
 
    
    //  "availibility":{
    //     "sun":"10:00 AM - 06:00 PM",
    //     "mon":"09:00 PM - 11:00 PM",
    //     "thu":"11:00 AM - 02:00 PM"
    //     },
   getWorkCellText(date) {
   
      var i=0;
      let weekEnds = [];
      let startTime = [];
      let endTime = [];
      let splitted=[];
      let slotCount= 60 / this.props.doctor.visitDurationInMin;
      let boxHeight= (144 /slotCount) - 7;

      for( var day in this.props.doctor.availibility){
          if(this.props.doctor.availibility.hasOwnProperty(day)){
               var time = this.props.doctor.availibility[day]
               
                switch(day){

                  case "sun":{
                    weekEnds[i]=0;
                    splitted=time.split("-")
                    startTime[i]=parseInt(moment(splitted[0],["h:mm A"]).format("HH:mm"))
                    endTime[i]=parseInt(moment(splitted[1],["h:mm A"]).format("HH:mm"))
                   
                    i++;
                    break;
                }
                  case "mon":{
                    weekEnds[i]=1;
                    splitted=time.split("-")
                    startTime[i]=parseInt(moment(splitted[0],["h:mm A"]).format("HH:mm"))
                    endTime[i]=parseInt(moment(splitted[1],["h:mm A"]).format("HH:mm"))
                   
                    i++;
                  break;
              }
                  case "tue":{
                    weekEnds[i]=2;
                    splitted=time.split("-")
                    startTime[i]=parseInt(moment(splitted[0],["h:mm A"]).format("HH:mm"))
                    endTime[i]=parseInt(moment(splitted[1],["h:mm A"]).format("HH:mm"))
                   
                    i++;
                  break;
              }
                  case "wed":{
                    weekEnds[i]=3;
                    splitted=time.split("-")
                    startTime[i]=parseInt(moment(splitted[0],["h:mm A"]).format("HH:mm"))
                    endTime[i]=parseInt(moment(splitted[1],["h:mm A"]).format("HH:mm"))
                    
                    i++;
                  break;
              }
                  case "thu":{
                    weekEnds[i]=4;
                    splitted=time.split("-")
                    startTime[i]=parseInt(moment(splitted[0],["h:mm A"]).format("HH:mm"))
                    endTime[i]=parseInt(moment(splitted[1],["h:mm A"]).format("HH:mm"))
                    
                    i++;
                  break;
              }
                  case "fri":{
                    weekEnds[i]=5;
                    splitted=time.split("-")
                    startTime[i]=parseInt(moment(splitted[0],["h:mm A"]).format("HH:mm"))
                    endTime[i]=parseInt(moment(splitted[1],["h:mm A"]).format("HH:mm"))
                  
                    i++;
                  break;
              }
              case "sat":{
                weekEnds[i]=6;
                splitted=time.split("-")
                startTime[i]=parseInt(moment(splitted[0],["h:mm A"]).format("HH:mm"))
                endTime[i]=parseInt(moment(splitted[1],["h:mm A"]).format("HH:mm"))
                   
                i++;
              break;
              }
              default: 
                break;
           }
      
          }
      }
      
    

    let today=new Date()
   
   if(date.getMonth() < today.getMonth()){
     
    if (weekEnds.indexOf(date.getDay()) >= 0 ){
      if(startTime[weekEnds.indexOf(date.getDay())] <= date.getHours() && date.getHours() <= endTime[weekEnds.indexOf(date.getDay())]){
        
        return `<i class='fa fa-check fa-lg' style='color:gray'></i>`;
      }  
    }
  }
    else if(date.getMonth() === today.getMonth()){
      
      if(date.getDate() >= today.getDate()){
        
        if (weekEnds.indexOf(date.getDay()) >= 0 ){
          if(startTime[weekEnds.indexOf(date.getDay())] <= date.getHours() && date.getHours() <= endTime[weekEnds.indexOf(date.getDay())]){
    
            return `<a href='#form'><i class='fa fa-check fa-lg' style=' color:green'></i></a>`;
          }  
        }
      }else if(date.getDate() < today.getDate()){
        
        if (weekEnds.indexOf(date.getDay()) >= 0 ){
          if(startTime[weekEnds.indexOf(date.getDay())] <= date.getHours() && date.getHours() <= endTime[weekEnds.indexOf(date.getDay())]){
    
            return `<i class='fa fa-check fa-lg' style='color:gray'></i>`;
          }  
        }

          
    }
  }
  else if(date.getMonth() > today.getMonth()){
    
    if (weekEnds.indexOf(date.getDay()) >= 0 ){
      if(startTime[weekEnds.indexOf(date.getDay())] <= date.getHours() && date.getHours() <= endTime[weekEnds.indexOf(date.getDay())]){
 
        return `<a href='#form'><i class='fa fa-check fa-lg' style='color:green'></i></a>`;
      }  
    }
  }
       
      return '';
  
}
  ;
  cellTemplate(props) {
      if (props.type === "workCells") {
          return (<div className="templatewrap" dangerouslySetInnerHTML={{ __html: this.getWorkCellText(props.date) }}></div>);
      }
  
      return (<div></div>);
  }
  ;
  onPopupOpen(args) {
    args.cancel = true;
}
  render(){
      return (
      //-----------------------------------Container START-------------------------------------------// 
      // ---------------------------------------Breadcrumb------------------------------------------//
            <div className='container '>
                    <div className="row">
                     <Breadcrumb>
                            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                            <BreadcrumbItem active>Schedule</BreadcrumbItem>
                       </Breadcrumb>
                      <div className="col-12">
                           <h3>Schedule of {this.props.doctor.name}</h3>
                            <hr />
                        </div>                
                    </div>
    {/*---------------------------------CALENDER VIEW --------------------------------------------------  */}
                <div className='mb-10'>
                    <ScheduleComponent  height='500px'  cellTemplate={this.cellTemplate.bind(this)} popupOpen={this.onPopupOpen.bind(this)}>
                      <ViewsDirective>
                        
                        <ViewDirective option='Week' startHour='08:00' endHour='25:00' timeScale={{ enable: true, slotCount: 60/this.props.doctor.visitDurationInMin }}/>
                      
                        
                      </ViewsDirective>
                    <Inject services={[Week]}/>
                    </ScheduleComponent>
                </div>
  {/* -----------------------------------FORM MODAL--------------------------------------------------- */}
                 
                    <Form id='form' >
                        <FormGroup>
                            <Label htmlFor='username'>Full Name</Label>
                            <Input type='text' id='username' name='username' innerRef={(input)=>this.username=input}></Input>
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor='age'>Age</Label>
                            <Input type='age' id='age' name='age' innerRef={(input)=>this.password=input}></Input>
                        </FormGroup>
                        <FormGroup>
                        <Col md={{size: 3, offset:1}}>
                                    <Input type='select' name='genderType'
                                    >
                                        <option>Male</option>
                                        <option>Female</option>
                                    </Input>
                                </Col>
                        </FormGroup>
                        <FormGroup row>
                                <Label htmlFor='message' md={2}>Reason</Label>
                                <Col md={10}>
                                    <Input type='textarea' id='message' name='message'
                                    rows='12' />
                                </Col>
                            </FormGroup>
                        <FormGroup row>
                  
                                <Col md={{size:10,offset:2}}>
                                    <Button type='submit' color='primary'>Book</Button>
                                </Col>
                            </FormGroup>
                        
                      
                    </Form>
               
            </div>
  )
  }
}


    
   
   

export default Calender;

