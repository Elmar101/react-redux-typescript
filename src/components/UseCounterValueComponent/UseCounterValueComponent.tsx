import React from 'react'
import { useAppSelector } from '../../redux-toolkit/hooks/hooks';

const UseCounterValueComponent = () => {
  const count = useAppSelector(state=> state.counter.value);
  return (
    <>
        <h1>UseOtherCounterComponent</h1>
        <h4> count is : {count}</h4>
    </>
  )
}

export default UseCounterValueComponent;