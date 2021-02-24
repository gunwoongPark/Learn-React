import React, { createContext, useReducer, useContext } from "react";

const initalState = {
  users: {
    loading: false,
    data: null,
    error: null,
  },

  user: {
    loading: false,
    data: null,
    error: null,
  },
};

const loadingState = {
  loading: true,
  data: null,
  error: null,
};

const success = (data) => ({
  loading: false,
  data,
  error: null,
});

const error = (e) => ({
  loading: false,
  data: null,
  error: e,
});

function usersReducer(state, action) {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        users: loadingState,
      };

    case "GET_USERS_SUCCESS":
      return {
        ...state,
        users: success(action.data),
      };

    default:
      throw new Error("Unhandled action type", action.type);
  }
}
