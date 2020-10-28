import React, { createContext, useReducer, useMemo, useContext } from 'react';

const initialState = {
  loading: true,
  currentUser: null,
  isAuthenticated: false,
};

const UserContext = createContext({
  ...initialState,
  login: () => null,
  logout: () => null,
});

const LOG_IN = 'LOG_IN';
const LOG_OUT = 'LOG_OUT';

function reducer(state, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        currentUser: action.payload.user,
        isAuthenticated: true,
        loading: false,
      };
    default:
      return state;
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const login = (data) => {
    const { user, token } = data;
    localStorage.setItem('access_token', token);
    dispatch({ type: LOG_IN, payload: { user } });
  };

  const logout = () => {
    localStorage.removeItem('access_token');
    dispatch({ type: LOG_OUT });
  };

  const value = useMemo(
    () => ({
      ...state,
      login,
      logout,
    }),
    [state]
  );

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
