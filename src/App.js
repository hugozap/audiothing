import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Oscilator from './Oscilator';
import OscilatorControls from './OscilatorControls';

class App extends Component {

  state = {
    ctx:null,
    freq:250,
    gain: 0.4
  }

  componentDidMount() {
   this.setState({...this.state, ctx: new (window.AudioContext || window.webkitAudioContext)()})
  }

  onFreqChange(val) {
    this.setState({...this.state, freq: val})
  }

  onGainChange(val) {
    this.setState({...this.state, gain: val})
  }

  render() {

    return (
      <div className="App">
        {this.state.ctx && 
          <OscilatorControls 
            freq={this.state.freq}
            gain={this.state.gain}
            onFreqChange={this.onFreqChange.bind(this)}
            onGainChange={this.onGainChange.bind(this)}/>}
        {this.state.ctx && <Oscilator ctx={this.state.ctx} frequency={this.state.freq} gain={this.state.gain} />}
      </div>
    );
  }
}

export default App;
