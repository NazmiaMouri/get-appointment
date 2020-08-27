import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap'
import { Link } from 'react-router-dom';
import { Inject,ViewDirective,ViewsDirective,ScheduleComponent,Day,Week,Month} from '@syncfusion/ej2-react-schedule'

function Calender(props) {
     const doctor=props.doctor
    console.log(props)
        return (
            <div className='container'>
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active>Schedule</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Schedule of {doctor.name}</h3>
                        <hr />
                    </div>                
                </div>
                    <ScheduleComponent>
                        <ViewsDirective>
                            <ViewDirective option='Day' />
                            <ViewDirective option='Week' />
                            <ViewDirective option='Month' />
                        
                        </ViewsDirective>
                        <Inject services={[Day, Week, Month]}/>
                    </ScheduleComponent>

            </div>
       
        )
    }

export default Calender;