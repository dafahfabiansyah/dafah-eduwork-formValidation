import React from 'react';
import errors from './Validation';

class ShowError extends React.Component {
  render() {
    const style = {
      color: 'red',
      marginLeft: '-20px',
    };
    return (
      <ul style={style}>
        {errors.map((error, i) => (
          <li key={i}>{error}</li>
        ))}
      </ul>
    );
  }
}

export default ShowError;
