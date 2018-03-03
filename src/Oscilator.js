import React from 'react';
import PropTypes from 'prop-types';

export default class Oscilator extends React.Component {
	static propTypes = {
		ctx: PropTypes.object,
		frequency: PropTypes.number,
		gain: PropTypes.number

	};

	constructor(props) {
		super()
	    this.o = props.ctx.createOscillator();
	    this.g = props.ctx.createGain();

	}

	componentDidMount() {

		const ctx = this.props.ctx;

		let o = this.o;
		let g = this.g;
	    o.frequency.value = this.props.frequency;
	    g.gain.value = this.props.gain;

	    o.type = 'square';
	    o.start(0);
	    //o.stop(ctx.currentTime + 2)
	    o.connect(g);
	    g.connect(ctx.destination);
	}

	componentWillReceiveProps(nextProps) {

		console.log(this.o)
		const ctx = this.props.ctx;
		this.o.frequency.setValueAtTime(nextProps.frequency, ctx.currentTime);
		this.g.gain.setValueAtTime(nextProps.gain, ctx.currentTime);
	}

	componentWillUnmount() {
		if(this.o) {
			const ctx = this.props.ctx;
			this.o.disconnect(ctx.destination)
		}
	}


	render() {
		return null;
	}
}
