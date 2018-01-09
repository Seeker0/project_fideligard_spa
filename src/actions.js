export const GET_STOCKS_REQUEST = 'GET_STOCKS_REQUEST';
export const GET_STOCKS_SUCCESS = 'GET_STOCKS_SUCCESS';
export const GET_STOCKS_FAILURE = 'GET_STOCKS_FAILURE';
export const NEW_TRANSACTION = 'NEW_TRANSACTION';

export function getStocksRequest() {
  return {
    type: GET_STOCKS_REQUEST
  };
}

export function getStocksSuccess(data) {
  return {
    type: GET_STOCKS_SUCCESS,
    data
  };
}

export function getStocksFailure(error) {
  return {
    type: GET_STOCKS_FAILURE,
    error
  };
}

export function newTransaction(data) {
  return {
    type: NEW_TRANSACTION,
    data
  };
}

export function getStocks() {
  return dispatch => {
    dispatch(getStocksRequest());

    let stockArray = ['AAPL', 'BA', 'IBM', 'INTC', 'MSFT', 'NKE', 'VZ'];
    for (let i = 0; i < stockArray.length; i++) {
      fetch(
        `https://www.quandl.com/api/v3/datasets/EOD/${
          stockArray[i]
        }.json?api_key=Ker6SsX6Mn79xiRobmxu&start_date=2017-01-01&end_date=2017-12-31`
      )
        .then(response => {
          if (!response.ok) {
            throw new Error(`${response.status} ${response.statusText}`);
          }
          return response.json();
        })
        .then(json => {
          dispatch(getStocksSuccess(json));
        })
        .catch(error => {
          dispatch(getStocksFailure(error));
        });
    }
  };
}
