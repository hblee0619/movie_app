import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  constructor(props){
    super(props);
    console.log('hello')
  }
  state = {
    count: 0
  };
  add = () => {
    console.log('add');
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    console.log('minus');
    this.setState(current => ({count: current.count - 1}));
  };

  componentDidMount(){
    console.log('component rendered')
  }

  componentDidUpdate(){
    console.log('I just updated')
  }

  componentWillUnmount(){
    console.log('Good bye')
  }

 render(){
   console.log("I'm rendering")
    return (
      <div>
        <h1>The number is {this.state.count}</h1>
        <button onClick = {this.add}>add</button>
        <button onClick = {this.minus}>minus</button>
      </div>
      )
    }
}

export default App;