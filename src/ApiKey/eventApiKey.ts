export const BASE_EVENT_API: string = "http://localhost:8000";
export const EVENTS_API_KEY: string = "events";
export const EVENT_API_KEY = (id: string)=>  `${EVENTS_API_KEY}/${id}`;