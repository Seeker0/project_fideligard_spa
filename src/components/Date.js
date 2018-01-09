import React from 'react';

const Date = () => {
  return (
    <div>
      <form className="Date form-control">
        <input type="date" id="date" min="2017-01-01" max="2017-12-30" />
      </form>
    </div>
  );
};

export default Date;
