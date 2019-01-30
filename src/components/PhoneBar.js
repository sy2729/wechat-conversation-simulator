import React, { Component } from 'react';
import styled from 'styled-components';
import timer from '../utils/timer';

class PhoneBar extends Component {
  constructor() {
    super();
    this.state = {
      time: timer().value,
    }
  }

  componentWillMount() {
    this.setState({
      battery: this.props.battery || 53
    })
  }

  componentDidMount() {
    setInterval(()=> {
      // update time
      this.setState({
        time: timer().value
      })

      // update battery
      this.props.changeBattery(this.props.battery - 1)

    }, 1000 * 60)
  }

  render() {
    // decide the battery color
    let color;
    if(this.props.battery >= 80) {
      color = '#010101'
     }else if(this.props.battery < 80 &&  this.props.battery >= 20) {
      color = '#EECB47';
     }else {
      color = 'red'
     }
    return (
      <Wrap className="flex justify-space-between">
        <SignalWrap className="flex align-center">
          <Img src="/signal.png" />
          <span>{this.props.operator || '中国电信'}</span>
          <Img src="/wifi.png" style={{transform: 'scale(0.8)'}}/>
        </SignalWrap>
        <p style={{margin: 0}}>{this.state.time}</p>
        <div className="flex align-center justify-end">
          <span>{`${this.props.battery || "46"}%`}</span>
          <Battery>
            <BatteryInner style={{width: `${this.props.battery || 46}%`, background: color}} />
          </Battery>
        </div>
      </Wrap>
    ) 
  }
}

const Wrap = styled.div`
  font-size: 0.8em;
  background: #F2F2F2;
  padding: 0 5px;
  font-weight: bold;

  & > * {
    flex: 1;
  }
`

const Img = styled.img`
  height: 16px;
`
const Battery = styled.div`
  width: 18px;
  height: 10px;
  border: 1px solid #A8A9A6;
  border-radius: 3px;
  position: relative;
  margin-left: 3px;

  &:before {
    content: '';
    position: absolute;
    right: -2px;
    top: 50%;
    border-radius: 1px;
    transform: translateY(-50%);
    width: 2px;
    height: 3px;
    background: #7B7A78;
  }
`
const BatteryInner = styled.div`
  height: 100%;
  background: #EECB47;
  transition: background 1s;
`

const SignalWrap = styled.div`
  & > * {
    margin-right: 5px;
  }
`


export default PhoneBar;