import React from 'react'
import { useUpdateEventMutation } from '../../../redux-toolkit/features/rtk-query/events/event-slice';
import { UserEvent } from '../../../redux/user-events';
function UpdateEvent({id}: {id: number}) {
    const event: UserEvent = {
        id: id,
        title: "Update",
        dateStart: "2022-08-23T11:07:58.351Z",
        dateEnd: "2022-08-23T11:08:04.784Z",
    }
    const [updateEvent] = useUpdateEventMutation();
    const handleClick = async (): Promise<void> => {
        await updateEvent(event);
      }
    
      return (
        <div>
            <h1>UPDATE EVENT COMPONENT</h1>
            <button onClick={handleClick}> Update Event </button>
        </div>
      )
}

export default UpdateEvent;