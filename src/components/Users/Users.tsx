import React from "react";
import { useFetchUsersQuery } from "../../redux-toolkit/features/rtk-query/users/users-slice";

const Users = () => {
  const { data, isFetching , isError ,error} = useFetchUsersQuery();
  if(isError){
    console.log(error);
  }
  if(isFetching){
    return <div> ...Fetching Data </div>
  }

  return (
    <>
      <div>Users</div>
      <div>{ data?.length && data.map((user)=> (<div key={`user${user.id}`}>
        <h3>Id: {user.id}</h3>
        <h3>Name: {user.login}</h3>
        <img src={user.avatar_url} alt="no-img" style={{width: "120px"}}/>
        <br/>
      </div>))}</div>
    </>
  );
};

export default Users;
