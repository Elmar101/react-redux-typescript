import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SEARCH_USER_API_KEY, USER_API_KEY } from "../../../../ApiKey/UsersApiKey";
import { USER_BASE_API } from "../../../../ApiKey/UsersApiKey";
import { USER } from "../../../../models/user";
interface  ISEARCHSERVERRESPONSE<T>{
  total_count: number,
  incomplete_result: boolean,
  items: T
}

export const UsersSlice = createApi({
  reducerPath: "users",
  refetchOnFocus: true,
  baseQuery: fetchBaseQuery({ baseUrl: USER_BASE_API }),
  endpoints: (builder) => ({
    fetchUsers: builder.query<USER[], void>({
      query: () => {
        return USER_API_KEY;
      },
    }),
    searchUsers: builder.query<USER[], string>({
      query(username: string) {
        return {
          url: SEARCH_USER_API_KEY,
          params: {
            q: username,
            per_page: 10
          }
        };
      },
      transformResponse: (response: ISEARCHSERVERRESPONSE<USER[]>)=> {
        return response.items
      }
    }),
  }),
});

export const { useFetchUsersQuery, useSearchUsersQuery } = UsersSlice;

/*/
  refetchOnFocus: true This props reflesh Browser all come back 
  setUpListener(store.dispatc) use in store.ts file

  use Component as down 
   const {isLoading , isSuccess , isError , data , error} = useSearchUsersQuery(search,{
    skip: debounced.length < 3,
    refetchOnFocus: true
  });

  skip: boolean -> this property send request to Server if true 
/*/
