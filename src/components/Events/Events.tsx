import React from 'react'
import { useFetchEventsQuery } from '../../redux-toolkit/features/rtk-query/events/event-slice'
import { EventItem } from '../Calendar/EventItem';

const Events = () => {
  const {data , isFetching} = useFetchEventsQuery();

  return (
    <div>
        {data?.length && data.map(event=> <div key={`event${event.id}`}>
            <EventItem event={event}/>
        </div>)}
    </div>
  )
}

export default Events;