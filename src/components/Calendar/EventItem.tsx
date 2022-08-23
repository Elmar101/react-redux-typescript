import React, {useEffect, useRef, useState} from "react";
import { UserEvent, deleteUserEventThankAction, updateRequestThunkActionFn } from '../../redux/user-events';
import { useDispatch } from 'react-redux';

export const EventItem: React.FC<{event: UserEvent}> = ({event}) => {
  const [editable , setEditable] = useState<boolean>(false);
  const [title , setTitle] = useState<string>(event.title)
  const dispatch: any = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const deleteEventClick = () => {
    dispatch(deleteUserEventThankAction(event.id))
  }

  const handleChange = () =>{
    setEditable(true)
  }

  const handleChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleBlur = () => {
    if(title !==event.title){
        dispatch(updateRequestThunkActionFn({...event, title}))
    }
    setEditable(false);
  } 

  useEffect(()=>{
    if(editable){
      inputRef.current?.focus();
    }
  },[editable]);

  return (
    <div className="calendar-event">
      <div className="calendar-event-info">
        <div className="calendar-event-time">10:00 - 12:00</div>
        <div className="calendar-event-title" onClick={handleChange} style={{cursor: 'pointer'}}>
            {editable ? 
                <input 
                    ref={inputRef}
                    type="text"
                    style={{padding: "2px" , width: "100%"}}
                    value={title}
                    onChange = {(e)=>handleChangeTitle(e)} 
                    onBlur = {handleBlur} 
                /> :
                <div style={{border: "2px solid gray" , padding: "2px" , width: "100%"}}>{event.title}</div>}
        </div>
      </div>
      <button className="calendar-event-delete-button" onClick={deleteEventClick}>
        &times;
      </button>
    </div>
  );
};
