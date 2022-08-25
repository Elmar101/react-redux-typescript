import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { IREPO } from '../../models/user';
import { AppActions } from '../../redux-toolkit/AppActions/appActions';
import { selectFavourities } from '../../redux-toolkit/features/githup/githupSelector';

const GithupUserRepo:React.FC<{repo: IREPO}> = ({repo}) => {
  const favourities = useSelector(selectFavourities);
  const [isFavourity, setIsFavourity] = useState(favourities.includes(repo.html_url));
  const {addFavourites , removeFavorities} = AppActions();

  const addToFavourities = (repoUrl: string) => {
    addFavourites(repoUrl);
    setIsFavourity(true)
  }

  const deleteFavourities = (repoUrl: string) => {
    removeFavorities(repoUrl);
    setIsFavourity(false)
  }
  return (
    <div>
        <li>{repo.owner.repos_url}</li>
            <li>
              <a href={repo.html_url} target="_blank">
                {repo.full_name}
              </a>
            </li>
            <li>{isFavourity ?
                <button onClick={()=> deleteFavourities(repo.html_url)} style={{background:"red"}}> DELETE FROM FAVORITES </button>
                :<button onClick={()=> addToFavourities(repo.html_url)} style={{background:"blue"}}>ADD TO FAVOURITIES </button>
            }
            </li>
    </div>
  )
}

export default GithupUserRepo