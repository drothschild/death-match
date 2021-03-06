import React from 'react';
import {
  Card,
  CardHeader,
  CardMedia,
  CardText,
  CardActions,
  RaisedButton,
} from 'material-ui';
import PropTypes from 'prop-types';

export default class Hero extends React.Component {
	render() {
		return (
			<Card className="hero">
				<CardHeader>
					<h2>{this.props.name}</h2>
					<h3>Total: {this.props.votes || 0}</h3>
				</CardHeader>
				<CardMedia>
					<img
					  style={{
					    height: 150,
					    backgroundSize: 'cover',
					    backgroundImage: `url(${this.props.photo})`,
					  }} />
				</CardMedia>
				<CardText>
					<div>{this.props.desc}</div>
				</CardText>
				<CardActions>
					<RaisedButton onClick={this.props.onClick} label="Vote" />
				</CardActions>
			</Card>
		);
	}
}

Hero.propTypes = {
	name: PropTypes.string,
	photo: PropTypes.string,
	desc: PropTypes.string,
	votes: PropTypes.number,
	onClick: PropTypes.func,
};
