import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { BASE_EVENT_API, EVENTS_API_KEY } from "../../../../ApiKey/eventApiKey";
import { IEvent } from "../../../../models/event";

export const eventSlice = createApi({
    reducerPath: "events",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_EVENT_API }),
    endpoints: (builder) => {
        return {
            fetchEvents: builder.query<IEvent[] , void>({
                query: () => { return EVENTS_API_KEY }
            })
        }
    }
});

export const {useFetchEventsQuery} = eventSlice; 