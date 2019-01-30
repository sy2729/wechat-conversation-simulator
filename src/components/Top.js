import React, { Component } from 'react';
import styled from 'styled-components';

class Top extends Component {
  render() {
    return(
      <Div>
        <BlurBg />
        <div className="flex justify-space-between" style={{'position': 'relative'}}>
          <Img src="/ico-left-arrow.png" alt="left-arrow"/>
          <P>
            {this.props.name || "Username"}
          </P>
          <Img src="/eclipse.png" alt="eclipse" style={{alignSelf: 'flex-end'}}/>
        </div>
      </Div>
    )
  }
}

const Div = styled.div`
  width: 100%;
  background: rgba(242, 240, 241, 0.4);
  padding: 15px 20px;
  border-bottom: 1px solid #E2E2E2;
  overflow: hidden;
  position: relative;
`

const BlurBg = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #F2F2F2;
  filter: blur(5px);
  transform: scale(1.3);
`

const Img = styled.img`
  height: 20px;
`

const P = styled.p`
  align-self: flex-start;
  font-weight: bold;
  margin: 0;
  font-size: 1.1em;
`

export default Top;