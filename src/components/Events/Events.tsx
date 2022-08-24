import React from 'react'
import { useFetchEventsQuery } from '../../redux-toolkit/features/rtk-query/events/event-slice'
import { EventItem } from '../Calendar/EventItem';
import EventDetail from './EventDetail/EventDetail';

const Events = () => {
  const {data , isFetching} = useFetchEventsQuery();
  return (
    <div>
        {data?.length && data.map(event=> <div key={`event${event.id}`}>
            <div>
              <EventItem event={event}/>
              <EventDetail id={event.id}/> 
            </div>
        </div>)}
    </div>
  )
}

export default Events;