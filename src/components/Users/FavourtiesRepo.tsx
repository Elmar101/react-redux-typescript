import React from 'react'
import { useSelector } from 'react-redux';
import { selectFavourities } from '../../redux-toolkit/features/githup/githupSelector';

const FavourtiesRepo:React.FC = () => {
  const favourities = useSelector(selectFavourities);
  return (
    <div style={{background:"blue" , color: "#fff"}}>
        <h1> FAVOURITIES REPO</h1>
        <h6>{favourities.length > 0 ? favourities.map(favourty=> <h3>{favourty}</h3>): "NO-ITEMS"}</h6>
     </div>
  )
}

export default FavourtiesRepo;