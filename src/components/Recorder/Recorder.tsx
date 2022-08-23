import React, { useEffect, useRef, useState } from 'react'
import cx from "classnames"
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import { selectDateStart, startFn, stopFn } from '../../redux/recorder';
import "./Recorder.css";
import { addZero } from '../../libs/util/util';
import { createUserEvents } from '../../redux/user-events';

const Recorder = () => {
  const dispatch: any = useDispatch();
  const dateStart = useSelector(selectDateStart);
  const started = dateStart !=="";
  const interval = useRef<number>();
  const [ count, setCount] = useState<number>(0);

  const handleClick = () => {
    if(started){
        window.clearInterval(interval.current);
        dispatch(createUserEvents())
        dispatch(stopFn());
    }else {
        dispatch(startFn());
        interval.current = window.setInterval(()=> {
            setCount(count=> count + 1)
        } , 1000)
    }
  }

  useEffect(()=>{
    console.log(count);
    
    return ()=>{
        window.clearInterval(interval.current)
    }
  },[])

  let seconds = started ? Math.floor((Date.now() - new Date(dateStart).getTime())/1000): 0;
  const minutes = seconds ? Math.floor(seconds/60): 0;
  seconds -=minutes*60;
  const hours = seconds ? Math.floor(seconds/60/60 ): 0;
  seconds -=hours*60*60;
  return (
    <div className={cx('recorder' , {'recorder-started': started})}>
    <button onClick={handleClick} className="recorder-record">
      <span></span>
    </button>
    <div className="recorder-counter">
      {addZero(hours)} : {addZero(minutes)} : {addZero(seconds)}
    </div>
  </div>
  )
}

export default Recorder