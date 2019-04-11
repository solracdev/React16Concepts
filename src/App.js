import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserOutput from './User/UserOutput';
import UserInput from './User/UserInput';


class App extends Component {

  state = {
    users: [
      { name: 'Carlos' },
      { name: 'Foo' },
      { name: 'Jhon Doe' }
    ]
  }

  switchUserNameHandler = event => {
    this.setState({
      users: [
        { name: event.target.value },
        { name: 'Foo IX' },
        { name: 'Jhon Doe X' }
      ]
    });
  }

  render() {
    return (
      <div className="App">

      
        < UserInput
          change={this.switchUserNameHandler} 
          name={this.state.users[0].name}
        />

        < UserOutput
          name={this.state.users[0].name}
        >First UserOutput</ UserOutput>
        < UserOutput
          name={this.state.users[1].name}
        >Second UserOutput</ UserOutput>
        < UserOutput
          name={this.state.users[2].name}
        > Third UserOutput </ UserOutput>

      </div>
    );
  }
}

export default App;
