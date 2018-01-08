import React from 'react';

const StockTable = ({ stocks }) => {
  return (
    <div>
      <div className="card" style={{ width: '20px' }}>
        <div className="card-block">
          <h4 className="card-title">Stocks</h4>
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Price</th>
                <th>Trade</th>
              </tr>
            </thead>
            <tbody>{stocks}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StockTable;
