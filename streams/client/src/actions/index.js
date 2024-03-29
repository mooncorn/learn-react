import streams from "../apis/streams";
import {
  SIGN_IN,
  SIGN_OUT,
  CREATE_STREAM,
  FETCH_STREAM,
  FETCH_STREAMS,
  DELETE_STREAM,
  EDIT_STREAM,
} from "./types";

export const signIn = (uid) => {
  return {
    type: SIGN_IN,
    payload: {
      uid,
    },
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const createStream = (formValues) => async (dispatch, getState) => {
  const { uid } = getState().auth;
  const res = await streams.post("/streams", { ...formValues, uid });

  dispatch({ type: CREATE_STREAM, payload: res.data });
};

export const fetchStreams = () => async (dispatch) => {
  const res = await streams.get("/streams");

  dispatch({ type: FETCH_STREAMS, payload: res.data });
};

export const fetchStream = (id) => async (dispatch) => {
  const res = await streams.get(`/streams/${id}`);

  dispatch({ type: FETCH_STREAM, payload: res.data });
};

export const deleteStream = (id) => async (dispatch) => {
  await streams.delete(`/streams/${id}`);

  dispatch({ type: DELETE_STREAM, payload: id });
};

export const editStream = (id, formValues) => async (dispatch) => {
  const res = await streams.put(`/streams/${id}`, formValues);

  dispatch({ type: EDIT_STREAM, payload: res.data });
};
