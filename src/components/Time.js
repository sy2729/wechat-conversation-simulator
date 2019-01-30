import React, { Component } from 'react';
import styled from 'styled-components';
import timer from '../utils/timer';

function Time(props) {
  let time = timer();
    return (
      <P>{props.time || time }</P>
    )
  // }
}

const P = styled.p`
  text-align: center;
  color: #ADADAD;
  font-size: .9em;
`

export default Time;