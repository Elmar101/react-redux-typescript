import React, { useEffect, useState } from 'react'
import { useSearchUsersQuery } from '../../redux-toolkit/features/rtk-query/users/users-slice';
import { useDebounce } from '../../hooks/debounce';

const SearchUser = () => {
  const [search , setSearch] = useState<string>("");
  const {debounced} = useDebounce(search);
  
  const {isLoading , isSuccess , isError , data , error} = useSearchUsersQuery(search,{
    skip: debounced.length < 3
  });
  
  useEffect(()=>{
    console.log(search);
  },[debounced])
  
  return (
    <div>
        <h1>SEARCH USER</h1>
        <input value={search} onChange={e=> setSearch(e.target.value)} />
        <br/><hr/>
        <p>{isSuccess && JSON.stringify(data)}</p>
        <p>{isLoading && "LOADING -----"}</p>
        <p>{isError && JSON.stringify(error)}</p>
    </div>
  )
}

export default SearchUser;