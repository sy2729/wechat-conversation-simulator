import React, { Component } from 'react';
import styled from 'styled-components';

class BottomBar extends Component {

  selfInput(e) {
    e.preventDefault();
    if (!this.refs.myInput.value) return
    this.props.selfInput(this.refs.myInput.value);
    this.refs.myInput.value = '';
  }
  // componentDidMount() {
  //   console.log(this.props)
  // }
  render() {
    return (
      <Div className="flex justify-space-between align-center">
        <Img src="/voice.png" alt="voice"/>
        <Form onSubmit={this.selfInput.bind(this)}>
          <Input  ref='myInput' placeholder={this.props.side === 'self' ? 'currently modify the right side' : 'currently modify the left side'}/>
        </Form>
        <Img src="./smile.png" alt="smile"/>
        <Img src="./add.png" alt="add"/>
      </Div>
    )
  }
}

const Div = styled.div`
  width: 100%;
  padding: 5px 10px;

`

const Img = styled.img`
  height: 25px;
`
const Form = styled.form`
  width: 70%;
`
const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  background: #FFFFFF;
  font-size: 1em; 
`


export default BottomBar;