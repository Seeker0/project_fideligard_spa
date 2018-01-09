import { combineReducers } from 'redux';

import {
  GET_STOCKS_REQUEST,
  GET_STOCKS_SUCCESS,
  GET_STOCKS_FAILURE,
  NEW_TRANSACTION
} from './actions';

const initialState = {
  user: {
    name: 'User1',
    portfolio: [],
    transactions: [],
    funds: 100000
  },
  stocks: [],
  isFetching: false
};

function transactions(state = initialState, action) {
  switch (action.type) {
    case NEW_TRANSACTION:
      return {
        ...state,
        user: {
          ...state,
          transactions: [...state.user.transactions, action.data]
        }
      };
    default:
      return state;
  }
}

function stocks(state = initialState, action) {
  switch (action.type) {
    case GET_STOCKS_REQUEST:
      return { ...state, isFetching: true, error: null };
    case GET_STOCKS_SUCCESS:
      return {
        ...state,
        stocks: [...state.stocks, action.data],
        isFetching: false
      };
    case GET_STOCKS_FAILURE:
      return { ...state, isFetching: false, error: action.error };
    default:
      return state;
  }
}

export const stocksApp = combineReducers({ stocks, transactions });
