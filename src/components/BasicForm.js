import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';
import styled from 'styled-components';
// import styled from 'styled-components';
import SetBattery from './SetBattery';
class BasicForm extends Component {
  


  render() {

    let Search = Input.Search;

    return (
      <>
      <Search 
        placeholder="Change the Operator Name"
        enterButton="Change"
        size="large"
        onSearch={value => this.props.changeOperator(value)}
        ref="changeOperator"/>

      <Row>
        <Col span={12}>
          <BatterFormWrap>
            <h3>Set the Battery Value</h3>
            <SetBattery battery = {this.props.battery} changeBattery = {this.props.changeBattery.bind(this)} />
          </BatterFormWrap>
        </Col>
      </Row>
      </>
    )
  }
}

const BatterFormWrap = styled.div`
  margin: 20px 0;
`

export default BasicForm;