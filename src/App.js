import React, { Component } from 'react';
import { connect } from 'react-redux';
import Hero from './Hero.js';
import './App.css';
import JonSnow from './images/jon-snow.png';
import Dany from './images/dany.png';

class App extends Component {
  render() {
    const { voteLeft, voteRight } = this.props
    return (
      <div className="App">
	<h1>Death Match</h1>
	<div className="heroes">
	  <Hero
	    name="Jon Snow"
	    photo={JonSnow}
	    desc="He knows nothing"
	    onClick={voteLeft} />
	  <Hero
	    name="Dany"
	    photo={Dany}
	    desc="Bend the knee"
	    onClick={voteRight} />
	</div>
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
