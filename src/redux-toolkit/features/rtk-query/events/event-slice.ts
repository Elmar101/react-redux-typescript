import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { BASE_EVENT_API, EVENTS_API_KEY, EVENT_API_KEY } from "../../../../ApiKey/eventApiKey";
import { IEvent } from "../../../../models/event";

export const eventSlice = createApi({
    reducerPath: "events",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_EVENT_API }),
    endpoints: (builder) => {
        return {
            fetchEvents: builder.query<IEvent[] , void>({
                query: () => { return EVENTS_API_KEY }
            }),
            fetchEvent: builder.query<IEvent , string>({
                query:(id)=>{ return EVENT_API_KEY(id) }
            })
        }
    }
});

export const {useFetchEventsQuery , useFetchEventQuery} = eventSlice; 