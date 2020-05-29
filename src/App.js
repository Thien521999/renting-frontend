import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    greeting: ""
  }

  componentDidMount() {
    axios.get('https://backend-hung-kha-renting.herokuapp.com/')
      .then(result => this.setState({greeting: result.data.greeting}))
        .catch(error => {
          console.log(error.message);
        })
  }

  render() {
    return (
      <div>
        {this.state.greeting}
      </div>
    )
  }
}

export default App;
