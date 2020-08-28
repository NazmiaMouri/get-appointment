import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ScheduleComponent, Day, Week, TimelineViews, Month, Inject, ViewsDirective, ViewDirective } from '@syncfusion/ej2-react-schedule';
class Cell extends React.Component {
    
    //  var slotPerDay= 60/doctor.visitDurationInMin

    
    getWorkCellText(date) {
        function showDay(obj,objName){

        var day =[];
        var j = 0;
        

        for( var i in obj){
            if(obj.hasOwnProperty(i)){
             
                day[j]=i;
                j++;
                
               
            }
        }
        return day
     }
     
    //  var Day=showDay(doctor.availibility,"availibility")
        let weekEnds = [0, 4];
        console.log(weekEnds.indexOf(date.getDay()))
        console.log(date)
        console.log(date.getDay())
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
    render() {
        return <ScheduleComponent  cellTemplate={this.cellTemplate.bind(this)}>
      <ViewsDirective>
        
        <ViewDirective option='Week'/>
      
        <ViewDirective option='Month'/>
      </ViewsDirective>
      <Inject services={[Week, Month]}/>
    </ScheduleComponent>;
    }
}
;
export default Cell