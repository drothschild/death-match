import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

class App extends Component {
  render() {
    const { count, increase, decrease } = this.props
    return (
      <div className="App">
        <div>
          {count}
        </div>
        <RaisedButton primary label='Increase' onClick={increase} />
        <RaisedButton label='Decrease' onClick={decrease} />
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
