import { RootState } from './store';
import { Action } from "redux";

interface RecorderState {
  dateStart: string;
}

const START = "recorder/start";
const STOP = "recorder/stop";

type StartAction = Action<typeof START>;
type StopAction = Action<typeof STOP>;

export const startFn = (): StartAction => ({
  type: START,
});

export const stopFn = (): StopAction => ({
  type: STOP,
});

export const selectRecorderState = (rootState: RootState) => rootState.recorder;

export const selectDateStart =  (rootState: RootState) => selectRecorderState(rootState).dateStart;

const initialState: RecorderState = {
    dateStart: ''
}
export default function recorderReducer(
  state: RecorderState = initialState,
  action: StartAction | StopAction
) {
  switch (action.type) {
    case START:
      console.log(action.type);
      console.log("new Date().toISOString(): ", new Date().toISOString());
      return { ...state, dateStart: new Date().toISOString() };

    case STOP:
      console.log(action.type);
      return { ...state, dateStart: "" };
    default:
      return state;
  }
}
