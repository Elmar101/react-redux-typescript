import { RootState } from "./store";
import { Action } from "redux";
import { ThunkAction, ThunkDispatch } from "redux-thunk";
import { selectDateStart } from "./recorder";

export interface UserEvent {
  id: number;
  title: string;
  dateStart: string;
  dateEnd: string;
}

interface UserEventsState {
  byIds: Record<UserEvent["id"], UserEvent>;
  allIds: UserEvent["id"][];
}

const initialState: UserEventsState = {
  byIds: {},
  allIds: [],
};

const LOAD_REQUEST = "userEvents/load_request";
const LOAD_SUCCESS = "userEvents/load_success";
const LOAD_FAILURE = "userEvents/load_failure";

interface LoadRequestAction extends Action<typeof LOAD_REQUEST> {}
interface LoadSuccessAction extends Action<typeof LOAD_SUCCESS> {
  payload: {
    events: UserEvent[];
  };
}

interface LoadFailureAction extends Action<typeof LOAD_FAILURE> {
  error: string;
}

export const SelectUserEventsState = (rootState: RootState) =>
  rootState.userEvents;
export const selectUserEventsArray = (rootState: RootState) => {
  const state = SelectUserEventsState(rootState);
  return state.allIds.map((id) => state.byIds[id]);
};

export const loadUserEventsFn =
  (): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    LoadRequestAction | LoadSuccessAction | LoadFailureAction
  > =>
  async (
    dispatch: ThunkDispatch<
      RootState,
      undefined,
      LoadRequestAction | LoadSuccessAction | LoadFailureAction
    >,
    getState: () => RootState,
    extraArgs: undefined
  ) => {
    dispatch({
      type: LOAD_REQUEST,
    });

    try {
      const response = await fetch("http://localhost:8000/events");
      const events: UserEvent[] = await response.json();
      dispatch({
        type: LOAD_SUCCESS,
        payload: { events: events },
      });
    } catch (e) {
      dispatch({
        type: LOAD_FAILURE,
        error: "Failed to load events !!!",
      });
    }
  };

const CREATE_REQUEST = "userEvents/create_request";
const CREATE_SUCCESS = "userEvents/create_success";
const CREATE_FAILURE = "userEvents/create_failure";

interface CreateRequestAction extends Action<typeof CREATE_REQUEST> {}
interface CreateSuccessAction extends Action<typeof CREATE_SUCCESS> {
  payload: {
    event: UserEvent;
  };
}

interface CreateFailureAction extends Action<typeof CREATE_FAILURE> {
  error: string;
}

export const createUserEvents =
  (): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    CreateRequestAction | CreateSuccessAction | CreateFailureAction
  > =>
  async (
    dispatch: ThunkDispatch<
      RootState,
      undefined,
      CreateRequestAction | CreateSuccessAction | CreateFailureAction
    >,
    getState: () => RootState,
    exArgs: undefined
  ) => {
    dispatch({ type: CREATE_REQUEST });
    try {
      const selectUserDateStart = selectDateStart(getState());
      const event: Omit<UserEvent, "id"> = {
        title: "React Redux",
        dateStart: selectUserDateStart,
        dateEnd: new Date().toISOString(),
      };
      const response = await fetch("http://localhost:8000/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(event),
      });

      const createdEvent: UserEvent = await response.json();
      dispatch({
        type: CREATE_SUCCESS,
        payload: { event: createdEvent },
      });
    } catch (e) {
      dispatch({
        type: CREATE_FAILURE,
        error: "Failed to create events !!!",
      });
    }
  };

const DELETE_REQUEST = "userEvents/delete_request";
const DELETE_SUCCESS = "userEvents/delete_success";
const DELETE_FAILURE = "userEvents/delete_failure";

interface DeleteRequestAction extends Action<typeof DELETE_REQUEST> {}
interface DeleteSuccesstAction extends Action<typeof DELETE_SUCCESS> {
  payload: {id: UserEvent["id"]};
}

interface DeleteFailureAction extends Action<typeof DELETE_FAILURE> {}

export const deleteUserEventThankAction =
  (id: UserEvent["id"]): ThunkAction<
    Promise<void>,
    RootState,
    undefined,
    DeleteRequestAction | DeleteSuccesstAction | DeleteFailureAction
  > =>
  async (
    dispatch: ThunkDispatch<
      RootState,
      undefined,
      DeleteRequestAction | DeleteSuccesstAction | DeleteFailureAction
    >,
    getState: () => RootState,
    exArgs: undefined
  ) => {
    dispatch({type: DELETE_REQUEST});
    try{
      const response = await fetch(`http://localhost:8000/events/${id}`, {
        method: "DELETE"
      });
     if(response.ok){
      dispatch({
        type: DELETE_SUCCESS,
        payload: {id}
      })
     }
    }catch(e){
      dispatch({type: DELETE_FAILURE})
    }
  };
export default function userEventsReducer(
  state: UserEventsState = initialState,
  action: LoadSuccessAction | CreateSuccessAction | DeleteSuccesstAction
) {
  switch (action.type) {
    case LOAD_SUCCESS:
      const { events } = action.payload;
      return {
        ...state,
        allIds: events.map(({ id }) => id),
        byIds: events.reduce<UserEventsState["byIds"]>((byIds, event) => {
          byIds[event.id] = event;
          return byIds;
        }, {}),
      };

    case CREATE_SUCCESS:
      const { event } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, event.id],
        byIds: { ...state.byIds, [event.id]: event },
      };
    
    case DELETE_SUCCESS: 
      const {id} = action.payload
      const newState = {
        ...state,
        byIds: {...state.byIds},
        allIds: state.allIds.filter((storeId)=> storeId !== id )
      }
      delete newState.byIds[id];
      return newState;

    default:
      return state;
  }
}
