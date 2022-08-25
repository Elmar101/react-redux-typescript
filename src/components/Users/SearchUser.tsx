import { useEffect, useState } from "react";
import {
  useLazyGetUserReposQuery,
  useSearchUsersQuery,
} from "../../redux-toolkit/features/rtk-query/users/users-slice";
import { useDebounce } from "../../hooks/debounce";
import { AppActions } from '../../redux-toolkit/AppActions/appActions';
import { useSelector } from "react-redux";
import { selectFavourities, selectGithup } from "../../redux-toolkit/features/githup/githupSelector";
import GithupUserRepo from "./GithupUserRepo";
import FavourtiesRepo from "./FavourtiesRepo";

const SearchUser = () => {
  const [search, setSearch] = useState<string>("");
  const [dropDown, setDropDown] = useState(false);
  const { debounced } = useDebounce(search);
 
  const { isLoading, isSuccess, isError, data, error } = useSearchUsersQuery(
    search,
    {
      skip: debounced.length < 3,
    }
  );

  const [fetchRepos, { isLoading: isUserReposLoading, data: userReposData }] =
    useLazyGetUserReposQuery();

  useEffect(() => {
    setDropDown(data?.length! > 0 && debounced.length >= 3);
  }, [debounced, data]);

  const handleClick = (username: string) => {
    fetchRepos(username);
    console.log(userReposData);
  };


  return (
    <div>
      <h1>SEARCH USER</h1>
      <input value={search} onChange={(e) => setSearch(e.target.value)} />
      <br />
      <hr />
      <p>
        {isSuccess &&
          dropDown &&
          data.map((user) => (
            <p key={user.login} onClick={() => handleClick(user.login)}>
              <span> {user.login}</span>
            </p>
          ))}
      </p>
      <p>{isLoading && "LOADING -----"}</p>
      <p>{isError && JSON.stringify(error)}</p>

      <h1> USER NAME REPO DATA</h1>
      <div>
        {userReposData?.map((repo) => (
          <ul key={repo.id}>
            <GithupUserRepo repo={repo}/>
          </ul>
        ))}
        
      </div>

     <br/> <br/> <hr/>
     <FavourtiesRepo/>
    </div>
  );
};

export default SearchUser;
