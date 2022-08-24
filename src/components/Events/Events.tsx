import React from 'react'
import { useFetchEventsQuery } from '../../redux-toolkit/features/rtk-query/events/event-slice'
import { EventItem } from '../Calendar/EventItem';
import { AddEvent } from './AddEvent/AddEvent';
import EventDetail from './EventDetail/EventDetail';

const Events = () => {
  const {data , isFetching} = useFetchEventsQuery();
  return (
    <div>
        {data?.length && data.map(event=> <div key={`event${event.id}`}>
            <div>
              <EventItem event={event}/>
              <div style={{background: "yellow",  margin: "16px 0" , padding: "15px"}}>
                <h1>Request with Event id {event.id}</h1>
                <EventDetail id={event.id}/> 
                </div>
            </div>
        </div>)}

        <div style={{background: "red"}}>
          <AddEvent/>
        </div>
       
    </div>
  )
}

export default Events;