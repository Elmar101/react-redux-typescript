import React from 'react'
import { useDeleteEventMutation } from '../../../redux-toolkit/features/rtk-query/events/event-slice';

export const DeleteEvent:React.FC<{id: number}> = ({id}) => {
    const [deleteEvent] = useDeleteEventMutation();
    const handleClick = async (): Promise<void> => {
      await deleteEvent(id.toString());
      //refetch();
    }
  
    return (
      <div>
          <h1>DELETE EVENT COMPONENT</h1>
          <button onClick={handleClick}> DELETE EVENT </button>
      </div>
    )
}
