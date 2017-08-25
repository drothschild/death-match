import React from 'react';
import PropTypes from 'prop-types';

export default class Hero extends React.Component {
	render() {
		return (
			<div className="hero">
				<img src={this.props.photo} />
				<h2>{this.props.name}</h2>
				<div>{this.props.desc}</div>
			</div>
		);
	}
}

Hero.propTypes = {
	name: PropTypes.string,
	photo: PropTypes.string,
	desc: PropTypes.string,
};
