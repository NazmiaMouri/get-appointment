import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Inject,ViewDirective,ViewsDirective,ScheduleComponent,Week,Month,EventSettingsModel} from '@syncfusion/ej2-react-schedule'

class Calender extends React.Component {
 
    //  const doctor=props.doctor
    //  var slotPerDay= 60/doctor.visitDurationInMin

     

    // console.log(typeof(Day))
    // console.log(Day[0],Day[1])
    // console.log(Day.length)
    //  "availibility":{
    //     "sun":"10:00 AM - 06:00 PM",
    //     "mon":"09:00 PM - 11:00 PM",
    //     "thu":"11:00 AM - 02:00 PM"
    //     },
   getWorkCellText(date) {
    // function showDay(obj,objName){

      var i=0;
      let weekEnds = [];
      

      for( var day in this.props.doctor.availibility){
          if(this.props.doctor.availibility.hasOwnProperty(day)){
                switch(day){

                  case "sun":{
                    weekEnds[i]=0;
                    i++;
                    break;
                }
                  case "mon":{
                    weekEnds[i]=1;
                    i++;
                  break;
              }
                  case "tue":{
                    weekEnds[i]=2;
                    i++;
                  break;
              }
                  case "wed":{
                    weekEnds[i]=3;
                    i++;
                  break;
              }
                  case "thu":{
                    weekEnds[i]=4;
                    i++;
                  break;
              }
                  case "fri":{
                    weekEnds[i]=5;
                    i++;
                  break;
              }
              case "sat":{
                weekEnds[i]=6;
                i++;
              break;
            }
            default: 
               break;
      
          }
      }
      }
      if (weekEnds.indexOf(date.getDay()) >= 0) {
          return "<i >Available</i>";
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
  render(){
      return (
            <div className='container'>
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
                   

            <ScheduleComponent  cellTemplate={this.cellTemplate.bind(this)}>
              <ViewsDirective>
                
                <ViewDirective option='Week' startHour='08:00' endHour='22:00' timeScale={{ enable: true, slotCount: 60/this.props.doctor.visitDurationInMin }}/>
              
                <ViewDirective option='Month'/>
              </ViewsDirective>
            <Inject services={[Week, Month]}/>
            </ScheduleComponent>
            </div>
  )
  }
}


    
   
    //     return (
    //         <div className='container'>
    //             <div className="row">
    //                 <Breadcrumb>
    //                     <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
    //                     <BreadcrumbItem active>Schedule</BreadcrumbItem>
    //                 </Breadcrumb>
    //                 <div className="col-12">
    //                     <h3>Schedule of {doctor.name}</h3>
    //                     <hr />
    //                 </div>                
    //             </div>
    //                 <ScheduleComponent   eventSettings={Day}>
    //                     <ViewsDirective>
            
    //                         <ViewDirective option='Week' startHour='08:00' endHour='22:00' timeScale={{ enable: true, slotCount: slotPerDay  }} />
    //                         <ViewDirective option='Month' />
                        
    //                     </ViewsDirective>
    //                     <Inject services={[ Week, Month]}/>
    //                 </ScheduleComponent>

    //         </div>
       
    //     )
    // }

export default Calender;

