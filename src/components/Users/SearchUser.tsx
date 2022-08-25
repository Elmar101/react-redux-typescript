import React, { useEffect, useState } from 'react'
import { useSearchUsersQuery } from '../../redux-toolkit/features/rtk-query/users/users-slice';
import { useDebounce } from '../../hooks/debounce';
import { USER } from '../../models/user';

const SearchUser = () => {
  const [search , setSearch] = useState<string>("");
  const {debounced} = useDebounce(search);
  const [dropDown , setDropDown] = useState(false);
  const {isLoading , isSuccess , isError , data , error} = useSearchUsersQuery(search,{
    skip: debounced.length < 3,
    refetchOnFocus: true
  });
  
  useEffect(()=>{
    //console.log(search);
    setDropDown(data?.length! > 0 && debounced.length > 3)
    console.log(JSON.stringify(data));
  },[debounced , data])
  
  return (
    <div>
        <h1>SEARCH USER</h1>
        <input value={search} onChange={e=> setSearch(e.target.value)} />
        <br/><hr/>
        <p>{(isSuccess && dropDown) && data.map(user=> <p>{user.login}</p>)}</p>
        <p>{isLoading && "LOADING -----"}</p>
        <p>{isError && JSON.stringify(error)}</p>
    </div>
  )
}

export default SearchUser;