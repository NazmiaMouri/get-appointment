import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Inject,ViewDirective,ViewsDirective,ScheduleComponent,Week} from '@syncfusion/ej2-react-schedule'
import moment from 'moment';

class Calender extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      
  };
  

  }
  
 
   getWorkCellText(date) {
   
      var i=0;
      let weekEnds = [];
      let startTime = [],endTime = [];
      let splitted=[];
      let today=new Date()

      
      
    
     

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
     
      let dateTime=moment(date,["h:mm A"]).format("HH:mm")
    //----------------------Date and Time matching in Calender ------------------------------- 
    if(date.getMonth() < today.getMonth()){
      if (weekEnds.indexOf(date.getDay()) >= 0 ){
       if(startTime[weekEnds.indexOf(date.getDay())] <=date.getHours() && date.getHours()<= endTime[weekEnds.indexOf(date.getDay())]){
         return `<i class='fa fa-check fa-lg' style='color:gray'></i>`;
                          }  
                        }
                      }
    else if(date.getMonth() === today.getMonth()){
      if(date.getDate() >= today.getDate()){
       if (weekEnds.indexOf(date.getDay()) >= 0 ){
         if(startTime[weekEnds.indexOf(date.getDay())] <= date.getHours() && date.getHours() <= endTime[weekEnds.indexOf(date.getDay())]){
           
              return '<a href ="/form" ><i class="fa fa-check fa-lg" style="color:green" ></i></a>'
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
          return '<a href ="/form"><i class="fa fa-check fa-lg" style="color:green" ></i></a>'
               
            }  
        }
      }
        return '';

   
}
  ;
  //------------------------cellTemplate--------------------------//
  cellTemplate(props) {
      if (props.type === "workCells") {
          return (<div className="templatewrap" dangerouslySetInnerHTML={{ __html: this.getWorkCellText(props.date) }}></div>);
      }
  
      return (<div></div>);
  }
  ;
  //----------------------------PopUpOff----------------------------//
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
                      </div>
                      <div className='row'>
                      <div className="col-10">
                           <h3 className="col-6">Schedule of {this.props.doctor.name} </h3>
                           <h5 className="col-4">Visit duration: {this.props.doctor.visitDurationInMin} min.</h5>
                            <hr />
                        </div> 
                        <Link to='/home' className="col-2 ml-auto">
                           <a className='btn bg-success' style={{color: "white"}}><i className='fa fa-chevron-left'></i> Go Back</a>
                        </Link>                
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
                </div>
  
  )
  }
}


    
   
   

export default Calender;

