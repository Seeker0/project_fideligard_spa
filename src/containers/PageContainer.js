import { connect } from 'react-redux';
import React, { Component } from 'react';
import Components from '../components/ExportComponents';
import Containers from './ExportContainers';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import { getStocks } from '../actions';

const { Date, Header, Portfolio, Stocks, Trade, Transaction } = Components;
const { StockContainer } = Containers;
class PageContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Date />
        <StockContainer props={this.props} />
      </div>
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
