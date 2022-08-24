import React from 'react';
import { nanoid } from 'nanoid'
import { useAddEventMutation, useFetchEventsQuery } from '../../../redux-toolkit/features/rtk-query/events/event-slice';
import { UserEvent } from '../../../redux/user-events';
const event: UserEvent = {
    id: +nanoid(),
    title: nanoid(),
    dateStart: "2022-08-23T11:07:58.351Z",
    dateEnd: "2022-08-23T11:08:04.784Z",
}

export const AddEvent = () => {
  const [addEvent] = useAddEventMutation();
  //const {refetch} =  useFetchEventsQuery();
  const handleClick = async (): Promise<void> => {
    await addEvent(event);
    //refetch();
  }

  return (
    <div>
        <h1>ADD NEW EVENT COMPONENT</h1>
        <button onClick={handleClick}> ADD EVENT </button>
    </div>
  )
}
