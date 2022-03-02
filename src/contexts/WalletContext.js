import React, { createContext, useReducer } from 'react';
// ----------------------------------------------------------------------

const initialState = {
  walletConnected: false,
  walletAddress: '',
  mintAmount: 1,
};

const handlers = {
  SET_WALLET_CONNECTED: (state, action) => {
    return {
      ...state,
      walletConnected: action.payload
    };
  },
  SET_WALLET_ADDRESS: (state, action) => {
    return {
      ...state,
      walletAddress: action.payload
    };
  },
  SET_MINT_AMOUNT: (state, action) => {
    return {
      ...state,
      mintAmount: action.payload
    };
  }
};

const reducer = (state, action) =>
  handlers[action.type] ? handlers[action.type](state, action) : state;

//  Context
const WalletContext = createContext({
  ...initialState,
  setMintAmount: () => Promise.resolve(),
});

//  Provider
function WalletProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const setMintAmount = (newMintAmount) => {
    dispatch({
      type: 'SET_MINT_AMOUNT',
      payload: newMintAmount
    });
  };

  return (
    <WalletContext.Provider
      value={{
        ...state,
        setMintAmount,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export { WalletContext, WalletProvider };
