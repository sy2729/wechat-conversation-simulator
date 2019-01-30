import React, { Component } from 'react';
import styled from 'styled-components';

class Message extends Component {
  constructor() {
    super()
    this.state = {
      showDelete: false
    }
  }
  render() {

    let Dom;
    // console.log(this.props.self)
    if (this.props.self) {
      Dom = <WrapperRight
             className="flex align-center justify-end "
             onMouseMove = {()=>this.setState({showDelete: true})}
             onMouseLeave = {()=>this.setState({showDelete: false})}>
             {this.state.showDelete ? <Delete onClick={()=>this.props.deleteMsg(this.props.id)} className="self" src="./delete.png" alt="delete"/> : null}
              <Right>{this.props.message || "This is a message"}</Right>
              <Profile onClick={()=>this.props.changeProfile(this.props.profileUrl, 'self')}  style={{'backgroundImage': `url(${this.props.profileUrl || 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548406627/cv-img/491548406443_.pic.jpg'})`, 'borderRadius': '4px'}}></Profile>
            </WrapperRight>
    }else {
      Dom = <WrapperLeft className="flex align-center"
              onMouseMove = {()=>this.setState({showDelete: true})}
              onMouseLeave = {()=>this.setState({showDelete: false})}>
              <Profile onClick={()=>this.props.changeProfile(this.props.profileUrl, 'opposit')} style={{'backgroundImage': `url(${this.props.profileUrl || 'https://res.cloudinary.com/shuaiyuan/image/upload/v1532056943/1_vyrvol.jpg'})`, 'borderRadius': '4px'}}></Profile>
              <Left>{this.props.message || "This is a message"}</Left>
              {this.state.showDelete ? <Delete onClick={()=>this.props.deleteMsg(this.props.id)} className="opposit" src="./delete.png" alt="delete"/> : null}
            </WrapperLeft>
    }

    return(
      <>
        {Dom}
      </>
    )
  }
}

const WrapperLeft = styled.div`
  max-width: 70%;
  margin: 1.1em 0;
  min-width: 100%;
`
const WrapperRight = styled.div`
  margin: 1.1em 0;
  min-width: 100%;
`

const Left = styled.div`
  background: #FFFFFF;
  padding: 9px 10px;
  text-align: left;
  position: relative;
  z-index: 1;
  border-radius: 4px;
  align-self: flex-start;
  margin-left: 10px;
  font-size: 1.2em;
  text-align: left;

  &:before {
    content: '';
    z-index: 0;
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color: #FFFFFF;
    transform: rotate(45deg);
    bottom: 8px;
    left: -3px;
    border-radius: 5px;
  }

  
`

const Right = styled.div`
  background: #A9E87C;
  padding: 9px 10px;
  /* float: right; */
  align-self: flex-start;
  margin-right: 10px;
  font-size: 1.2em;
  position: relative;
  text-align: left;

  &:before {
    content: '';
    z-index: 0;
    position: absolute;
    border: 10px solid transparent;
    border-bottom-color: #A9E87C;
    transform: rotate(86deg);
    bottom: 8px;
    right: -15px;
    border-radius: 5px;
  }
`

const Profile = styled.div`
  width: 40px;
  height: 40px;
  background: transparent center no-repeat;
  background-size: cover;
  cursor: pointer;
`

const Delete = styled.img`
  width: 20px;
  cursor: pointer;
  opacity: .6;
  transition: opacity .6s;

  &.self {
    margin-right: 10px;
  }
  &.opposit {
    margin-left: 10px;
  }

  &:hover {
    opacity: 1;
  }

`

export default Message;