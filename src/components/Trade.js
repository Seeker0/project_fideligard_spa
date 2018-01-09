import React from 'react';
import { connect } from 'react-redux';
import { newTransaction } from '../actions';

let Trade = ({ stock, props }) => {
  let onSubmit = e => {
    e.preventDefault();
    let form = e.target.parentNode.parentNode;
    let formData = {
      date: form.date.value,
      symbol: form.symbol.value,
      price: Number(form.price.value),
      quantity: Number(form.quantity.value),
      type: form.buysell.value
    };
    //if type = buy
    formData.type === 'buy'
      ? //check if price * quantity is less than what you have
        formData.price * formData.quantity < props.user.funds
        ? //if thats true, make transaction
          props.newTransaction(formData)
        : //if not, throw error
          console.err('NOT ENOUGH MONEY')
      : //if you don't have enough money
        props.user.portfolio.currentHolding[formData.symbol] < formData.quantity
        ? props.newTransaction(formData)
        : console.err('CANNOT SELL MORE THAN YOU HAVE');
  };

  let getDate = () => {
    let today = new Date();
    let dd = today.getDate();
    let mm = today.getMonth() + 1; //January is 0!
    let yyyy = today.getFullYear();

    if (dd < 10) {
      dd = '0' + dd;
    }

    if (mm < 10) {
      mm = '0' + mm;
    }

    today = mm + '/' + dd + '/' + yyyy;
    return today;
  };

  return (
    <div className="container card">
      <form action="#">
        <label htmlFor="symbol">Symbol</label>
        <input
          className="form-control"
          type="text"
          name="symbol"
          value={stock.dataset.dataset_code}
          readOnly
        />
        <br />

        <label htmlFor="buysell">Buy/Sell</label>
        <select name="buysell" className="form-control">
          <option value="buy">Buy</option>
          <option value="sell">Sell</option>
        </select>
        <label htmlFor="quantity">Quantity</label>
        <input className="form-control" type="text" name="quantity" />
        <br />
        <label htmlFor="date">Date</label>
        <input
          className="form-control"
          type="text"
          name="date"
          value={getDate()}
          readOnly
        />

        <br />

        <section>
          <p>Price: {stock.dataset.data[0][4]}</p>
          <p>Cost: {}</p>
          <p>Cash Available: {props.stocks.user.funds}</p>
          <p>Order Status: VALID</p>
        </section>
        <button
          className="btn btn-primary"
          type="submit"
          color="primary"
          onSubmit={onSubmit}
        >
          Place Order!
        </button>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    newTransaction: () => {
      dispatch(newTransaction());
    }
  };
};

Trade = connect(null, mapDispatchToProps)(Trade);

export default Trade;
