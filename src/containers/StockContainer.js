import React from 'react';
import Components from '../components/ExportComponents';

const { StockTable, Stocks } = Components;

const StockContainer = ({ props }) => {
  let { stocks } = props.stocks;
  let stockTable = stocks.map(stock => {
    return <Stocks stock={stock} key={stock.dataset.dataset_code} />;
  });
  return (
    <div>
      <StockTable stocks={stockTable} />
    </div>
  );
};

export default StockContainer;
