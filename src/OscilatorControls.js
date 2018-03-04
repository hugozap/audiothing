import React from 'react';
import {Knob} from 'react-rotary-knob';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Box = styled.div`
	background-color: black;
	padding: 4rem;
`

const StyledKnob = styled(Knob)`
	width: 200px !important;
	height: 200px !important;
`

export default class OscilatorControls extends React.Component {
	static propTypes = {
		freq: PropTypes.number,
		gain: PropTypes.number,
		onFreqChange: PropTypes.function,
		onGainChange: PropTypes.function
	};

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Box>
				<StyledKnob unlockDistance={0} preciseMode={false} min={0} max={1} step={0.1} value={this.props.gain} onChange={this.props.onGainChange} />
				<StyledKnob unlockDistance={0} preciseMode={false} min={0} max={600} value={this.props.freq} onChange={this.props.onFreqChange} />
			</Box>
		);
	}
}
