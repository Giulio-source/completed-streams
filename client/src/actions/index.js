import streams from "../apis/streams";
import history from "../components/history";

import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  EDIT_STREAM,
  DELETE_STREAM,
} from "./types";

export const signIn = (userId) => {
  return { type: SIGN_IN, payload: userId };
};

export const signOut = () => {
  return { type: SIGN_OUT };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const userId = getState().auth.userId;
  const response = await streams.post("/", {
    ...formValues,
    ["userId"]: userId,
  });
  dispatch({ type: CREATE_STREAM, payload: response.data });
  //history.push("/");
};

export const fetchStream = (id) => async (dispatch) => {
  const response = await streams.get(`edit/${id}`);
  dispatch({ type: FETCH_STREAM, payload: response.data });
};

export const fetchStreams = () => async (dispatch) => {
  const response = await streams.get("/");
  dispatch({ type: FETCH_STREAMS, payload: response.data });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const response = await streams.patch(`edit/${id}`, formValues);
  dispatch({ type: EDIT_STREAM, payload: response.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`delete/${id}`);
  dispatch({ type: DELETE_STREAM, payload: id });
  //history.push("/");
};
