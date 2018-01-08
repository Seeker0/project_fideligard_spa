import { connect } from 'react-redux';
import React, { Component } from 'react';
import Components from '../components/ExportComponents';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom';

import { getStocks } from '../actions';

const { StockTable, Stocks } = Components;

const StockContainer = ({ props }) => {
  let { stocks } = props.stocks;
  let stockTable = stocks.map(stock => {
    console.log(stock);
    return;
    <Stocks stock={stock} />;
  });
  return (
    <div>
      <StockTable stocks={stocks} />
    </div>
  );
};

export default StockContainer;
