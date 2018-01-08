import React from 'react';

const Stocks = ({ stock }) => {
  return (
    <tr>
      <td>{stock.dataset.dataset_code}</td>
      <td>Price</td>
      <td>Trade</td>
    </tr>
  );
};
