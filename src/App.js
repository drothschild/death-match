import React, { Component } from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import './App.css';

class App extends Component {
  render() {
    const { result, voteLeft, voteRight } = this.props
    const content = result || <div>Not vote yet</div>
    return (
      <div className="App">
        <div>
          {content}
        </div>
        <RaisedButton primary label='Left' onClick={voteLeft} />
        <RaisedButton label='Right' onClick={voteRight} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
}

const mapDispatchToProps = dispatch => {
  return {
    voteLeft: id => {
      dispatch({ type: 'VOTE', payload: 'A' })
    },
    voteRight: id => {
      dispatch({ type: 'VOTE', payload: 'B' })
    }
  };
}


export default connect(
  mapStateToProps, mapDispatchToProps
)(App);
