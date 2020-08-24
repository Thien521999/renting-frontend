import React, { Component } from 'react';
import './loading.sass';

class Loading extends Component {
  render() {
    return (
      <div className="Loadings">
        <div className="spinner-border text-primary loading" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
  }
}
export default Loading;
