import React from 'react';
import { Link } from 'react-router-dom';

const Stocks = ({ stock }) => {
  return (
    <tr>
      <td>{stock.dataset.dataset_code}</td>
      <td>Price</td>
      <td>
        <Link to={`/trade/:${stock.dataset.dataset_code}`}>Trade</Link>
      </td>
    </tr>
  );
};

export default Stocks;
