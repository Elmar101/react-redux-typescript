import React from 'react'
import { useSelector } from 'react-redux';
import { selectFavourities } from '../../redux-toolkit/features/githup/githupSelector';

const FavourtiesRepo:React.FC = () => {
  const favourities = useSelector(selectFavourities);
  return (
    <div style={{background:"blue" , color: "#fff"}}>
        <h1> FAVOURITIES REPO</h1>
        <h3>{favourities.length > 0 ? favourities.map(favourty=> <h6 key={favourty}>{favourty}</h6>): "NO-ITEMS"}</h3>
     </div>
  )
}

export default FavourtiesRepo;