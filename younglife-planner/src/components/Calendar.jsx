import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { Container } from 'react-bootstrap';

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

function Cal() {
  // Sample events - replace with your actual events data
  const [events] = useState([
    {
      start: moment().toDate(),
      end: moment().add(1, "hours").toDate(),
      title: "Weekly Meeting"
    },
    {
      start: moment().add(2, "days").toDate(),
      end: moment().add(2, "days").add(2, "hours").toDate(),
      title: "Community Service"
    },
    // Add more events as needed
  ]);

  return (
    <Container className="mt-4">
      <h1 className="mb-4">YoungLife Calendar</h1>
      <div style={{ height: '500px' }}>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          defaultView="week"
          views={['week', 'day']}
          step={60}
          showMultiDayTimes
          style={{ height: '100%' }}
        />
      </div>
    </Container>
  );
}

export default Cal;