import React, {Component} from 'react';
import './App.css';
import FirstComponent from './learning-examples/FirstComponent';
import SecondComponent from './learning-examples/SecondComponent';
import ThirdComponent from './learning-examples/ThirdComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        My Hello World
        <FirstComponent></FirstComponent>
        <SecondComponent></SecondComponent>
        <ThirdComponent></ThirdComponent>
      </div>
    );
  }
}

export default App;
