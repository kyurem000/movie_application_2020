import React from 'react';
import PropType from 'prop-types';

// App 클래스는 React.Component 클래스를 상속받았다 
class App extends React.Component {
  state = {
    count: 0
  };
  add = () => {
    console.log("add");
  };
  minus = () => {
    console.log("minus");
  };
  render() {
    return (
      <div>
        <h1> The number is : {this.state.count} </h1>
        <button onClick = {this.add}> Add </button>
        <button onClick = {this.minus}> Minus </button>
     </div>
    );
  }
}

export default App;

// 브런치 테스트용 