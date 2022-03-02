import React, { createContext, useReducer } from 'react';
// ----------------------------------------------------------------------

const initialState = {
  isLoading: false
};

const handlers = {
  SET_IS_LOADING: (state, action) => {
    return {
      ...state,
      isLoading: action.payload
    };
  },
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const LoadingContext = createContext({
  ...initialState,
  setIsLoading: () => Promise.resolve(),
});

//  Provider
function LoadingProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setIsLoading = (isLoading) => {
    dispatch({
      type: 'SET_IS_LOADING',
      payload: isLoading
    });
  };

  return (
    <LoadingContext.Provider
      value={{
        ...state,
        setIsLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  );
}

export { LoadingContext, LoadingProvider };
