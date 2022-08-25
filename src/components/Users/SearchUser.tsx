import React from 'react'
import { useSearchUsersQuery } from '../../redux-toolkit/features/rtk-query/users/users-slice';

const SearchUser = () => {
  const {isLoading , isSuccess , isError , data , error} = useSearchUsersQuery("elmar101");
  return (
    <div>
        <h1>SEARCH USER</h1>
    </div>
  )
}

export default SearchUser;