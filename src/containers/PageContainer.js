import { connect } from 'react-redux';
import React, { Component } from 'react';
import Components from '../components/ExportComponents';
import Containers from './ExportContainers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { getStocks } from '../actions';

const { Date, Portfolio, Stocks, Trade, Transaction } = Components;
const { StockContainer } = Containers;
class PageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div>
          <Date />
          <StockContainer props={this.props} />
          <Switch>
            <Route
              exact
              path="/trade/:symbol"
              render={({ match }) => {
                let symbol = match.params.symbol.split(':')[1];
                let currentStock = this.props.stocks.stocks.filter(
                  stock => stock.dataset.dataset_code === symbol
                );
                if (!currentStock.length) {
                  return '...Loading';
                }
                return <Trade stock={currentStock[0]} props={this.props} />;
              }}
            />
            <Route exact path="/transactions" />
            <Route exact path="/" />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    stocks: state.stocks
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getStocks: () => {
      dispatch(getStocks());
    }
  };
};

PageContainer = connect(mapStateToProps, mapDispatchToProps)(PageContainer);

export default PageContainer;
