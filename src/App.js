import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import './App.css';

class App extends Component {
  render() {
    const { count, increase, decrease } = this.props
    return (
      <div className="App">
        <div>
          {count}
        </div>
        <button onClick={increase}>Increase</button>
        <button onClick={decrease}>Decrease</button>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    count: state.counter
  };
}

const mapDispatchToProps = dispatch => {
  return {
    increase: id => {
      dispatch({ type: 'INCREMENT' })
    },
    decrease: id => {
      dispatch({ type: 'DECREMENT' })
    }
  };
}


export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
