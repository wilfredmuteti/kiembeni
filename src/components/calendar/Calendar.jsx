import React, { useState } from 'react'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction" // needed for dayClick
import "./calendar.scss";

import '@fortawesome/fontawesome-free/css/all.css';
import bootstrapPlugin from '@fullcalendar/bootstrap';

export default class Calendar extends React.Component {
  // const [addModalOpen, setAddModalOpen] = useState(false);
  // const [events, setEvents] = useState([]);

  // const onEventAdded = (event) => {
  //   const api = calendarRef.current.getApi();
  //   api.addEvent(event);
  // };
  
  render() {
    return (
       <div className="calendarsection">
<FullCalendar
ref={this.calendarRef}
height={680}
        plugins={[ dayGridPlugin, interactionPlugin, bootstrapPlugin ]}
       
        dateClick={this.handleDateClick}
        navLinkDayClick={this.handleNavClick}
      />
       </div> 
      
    )
  }

  handleDateClick = (arg) => { // bind with an arrow function
    
    alert('Clicked on: ' + arg.dateStr);
    
    // change the day's background color just for fun
    arg.dayEl.style.backgroundColor = '#ff7518';
  }

  handleNavClick = (arg) => {
    alert('Schedule Event on' + arg.datetoISOString)
  }


}



