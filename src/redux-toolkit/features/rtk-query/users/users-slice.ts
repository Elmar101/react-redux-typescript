import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { USER_API_KEY } from '../../../../ApiKey/UsersApiKey';
import { USER_BASE_API } from "../../../../ApiKey/UsersApiKey";
import { USER } from "../../../../models/user";

export const UsersSlice = createApi({
  reducerPath: "users",
  baseQuery: fetchBaseQuery({baseUrl: USER_BASE_API}),
  endpoints: (builder) => ({
    fetchUsers: builder.query<USER[] , void>({
        query: () => { return USER_API_KEY }
    }),
  }),
});

export const {useFetchUsersQuery} = UsersSlice;