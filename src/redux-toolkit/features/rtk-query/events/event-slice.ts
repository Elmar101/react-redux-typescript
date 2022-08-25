import {createApi , fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { BASE_EVENT_API, EVENTS_API_KEY, EVENT_API_KEY } from "../../../../ApiKey/eventApiKey";
import { IEvent } from "../../../../models/event";

export const eventSlice = createApi({
    reducerPath: "events",
    baseQuery: fetchBaseQuery({ baseUrl: BASE_EVENT_API }),
    tagTypes: ['Event'],
    endpoints: (builder) => {
        return {
            fetchEvents: builder.query<IEvent[] , void>({
                query: () => { return { url: EVENTS_API_KEY } },
                providesTags: ['Event']
            }),
            fetchEvent: builder.query<IEvent , string>({
                query:(id)=>({url:  EVENT_API_KEY(id)}),
                providesTags: ['Event']
            }),
            //mutation
            addEvent: builder.mutation<void , IEvent >({
                query: (event)=> { return { url: EVENTS_API_KEY, method: 'POST', body: event }},
                invalidatesTags: ['Event']
            }),
            updateEvent: builder.mutation<void , IEvent >({
                query: ({id , ...rest})=> { return { url: EVENT_API_KEY(id.toString()), method: 'PUT', body: rest }},
                invalidatesTags: ['Event']
            }),
            deleteEvent: builder.mutation<void , string >({
                query: (id)=> { return { url: EVENT_API_KEY(id.toString()), method: 'DELETE' }},
                invalidatesTags: ['Event']
            })
        }
    }
});

export const {useFetchEventsQuery , useFetchEventQuery , useAddEventMutation , useUpdateEventMutation ,useDeleteEventMutation} = eventSlice; 