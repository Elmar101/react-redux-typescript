import React from "react";
import { UserEvent, deleteUserEventThankAction } from '../../redux/user-events';
import { useDispatch } from 'react-redux';

export const EventItem: React.FC<{event: UserEvent}> = ({event}) => {
  const dispatch: any = useDispatch();
  const deleteEventClick = () => {
    dispatch(deleteUserEventThankAction(event.id))
  }
  return (
    <div className="calendar-event">
      <div className="calendar-event-info">
        <div className="calendar-event-time">10:00 - 12:00</div>
        <div className="calendar-event-title">{event.title}</div>
      </div>
      <button className="calendar-event-delete-button" onClick={deleteEventClick}>
        &times;
      </button>
    </div>
  );
};
