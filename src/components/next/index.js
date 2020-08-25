import React, { Component } from 'react';
import './next.sass';
import { BsFillCaretRightFill } from 'react-icons/bs';

class Next extends Component {
  render() {
    return (
      <div className="Next">
        <button className="mt-auto btn"><BsFillCaretRightFill /></button>
      </div>
    );
  }
}
export default Next;
