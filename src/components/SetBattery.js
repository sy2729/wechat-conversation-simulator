import React, { Component } from 'react';
import { Progress, Button } from 'antd';

const ButtonGroup = Button.Group;

class SetBattery extends React.Component {

  increase = () => {
    let percent = this.props.battery + 1;
    if (percent > 100) {
      percent = 100;
    }
    this.props.changeBattery(percent);
    
  }

  decline = () => {
    let percent = this.props.battery - 1;
    if (percent < 0) {
      percent = 0;
    }
    this.props.changeBattery(percent);
  }

  render() {
    return (
      <div>
        <Progress type="circle" percent={this.props.battery} />
        <br/>
        <br/>
        <ButtonGroup>
          <Button onClick={this.decline} icon="minus" />
          <Button onClick={this.increase} icon="plus" />
        </ButtonGroup>
      </div>
    );
  }
}

export default SetBattery