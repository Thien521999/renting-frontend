import React, { Component } from 'react';
import './previous.sass';
import { BsFillCaretLeftFill } from 'react-icons/bs';

class Previous extends Component {
  render() {
    return (
      <div className="Previous">
        <button className="mt-auto btn"><BsFillCaretLeftFill /></button>
      </div>
    );
  }
}
export default Previous;
