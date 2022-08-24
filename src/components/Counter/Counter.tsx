import React from 'react'
import { increament , amountIncreament } from '../../redux-toolkit/features/counter/counter-slice';
import { useAppSelector, useAppDispatch } from '../../redux-toolkit/hooks/hooks';

const Counter = () => {
  //const [count , setCount] = useState<number>(0);
  const count = useAppSelector(state=> state.counter.value);
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(increament())
  }

  const handleClickAmount = () => {
    dispatch(amountIncreament(5))
    dispatch(amountIncreament(5))
  }
  return (
    <>
        <div>Count is : {count}</div>
        <button onClick={handleClick}>increament+</button>
        <button onClick={handleClickAmount}>increament by 5</button>
    </>
  )
}

export default Counter