import React from "react";
import { useFetchUsersQuery } from "../../redux-toolkit/features/rtk-query/users/users-slice";
import SearchUser from "./SearchUser";

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
      <SearchUser/>
      <hr/>
      <div>Users</div>
      <div style={{display: "flex" , flexWrap: "wrap"}}>{ data?.length && data.map((user)=> (<div key={`user${user.id}`} style={{width: "100px" , margin: "10px"}}>
        <h3>Id: {user.id}</h3>
        <h3>Name: {user.login.substring(0,6)}</h3>
        <img src={user.avatar_url} alt="no-img" style={{width: "120px" , height: "120px"}}/>
        <br/>
      </div>))}</div>
    </>
  );
};

export default Users;
