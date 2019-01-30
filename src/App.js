import React, { Component } from 'react';
// import Button from 'antd/lib/button';
import { Row, Col, message, Button, Icon, Layout } from 'antd';
import './App.css';
import Phone from './components/Phone'
import UserForm from './components/UserForm'
import BasicForm from './components/BasicForm'
import styled from 'styled-components';

const {
  Footer
} = Layout;


const ButtonGroup = Button.Group
class App extends Component {

  constructor() {
    super();
    this.state = {
      profile1: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548734254/normal-temp/571548734205_.pic.jpg',
      profile2: 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548406627/cv-img/491548406443_.pic.jpg',

      currentEditProfile: '',
      operator: '',
      mode: 'self',
      oppositName: '',
      battery: 76
    }
  }

  changeProfile(data, side) {
    this.setState({
      currentEditProfile: data,
      mode: side
    }, ()=> {
      let msg = side === 'self' ? 'right-hand side' : 'left-hand side';
      message.info(`now switch to the ${msg} mode`, 1.5)
    })
    
  }

  uploadFinished(data) {
    if(this.state.mode === 'self') {
      this.setState({
        currentEditProfile: data,
        profile2: data
      })
    }else {
      this.setState({
        currentEditProfile: data,
        profile1: data
      })
    } 
  }

  changeName(data) {
    this.setState({
      oppositName: data
    })
  }
  changeOperator(data) {
    this.setState({
      operator: data
    })
  }
  changeBattery(data) {
    this.setState({
      battery: data
    })
  }
  resetEditState() {
    this.setState({
      currentEditProfile: null
    })
  }
  screenShot() {
    
  }
  render() {
    let leftButtonType = this.state.currentEditProfile && this.state.mode === 'opposit' ? 'primray' : null;
    let rightButtonType = this.state.currentEditProfile && this.state.mode === 'self' ? 'primray' : null;
    return (
      <div className="App">
        <Title className="flex align-center justify-center">
          <Logo src="/wechat.png" alt="wechat logo"/>
          <h2 style={{flex: 1, marginLeft: '-50px'}}>Wechat Conversation Simulator</h2>
        </Title>
        <Row style={{marginTop: '50px'}}>
          <Col span={14}>
            <Row>
              <Col span={12} offset={8}>
                <Phone
                  battery = {this.state.battery}
                  operator = {this.state.operator}
                  ref="phone"
                  changeProfile = {this.changeProfile.bind(this)}
                  profile1={this.state.profile1} 
                  profile2={this.state.profile2}
                  side = {this.state.mode}
                  name = {this.state.oppositName}
                  changeBattery = {this.changeBattery.bind(this)}
                  />
              </Col>
            </Row>
          </Col>
          <Col span={5}>
            <FormWrap>   
              <ButtonGroup>
                <Button type={leftButtonType} onClick={()=>this.setState({mode: 'opposit', currentEditProfile: this.state.profile1})}>Left</Button>
                <Button type={rightButtonType} onClick={()=>this.setState({mode: 'self', currentEditProfile: this.state.profile2})}>Right</Button>
              </ButtonGroup>
              <br/><br/>
              { this.state.currentEditProfile ? 
                <>
                <IconWrap className="flex align-center justify-center" onClick={this.resetEditState.bind(this)}>
                  <div>
                    <Icon type="left" />Back
                  </div>
                </IconWrap>
                <UserForm
                  mode = {this.state.mode}
                  profile = {this.state.currentEditProfile}
                  uploadFinished = {this.uploadFinished.bind(this)}
                  changeName = {this.changeName.bind(this)}/>
                </>
                : <BasicForm
                  changeBattery = {this.changeBattery.bind(this)}
                  changeOperator = {this.changeOperator.bind(this)} 
                  battery = {this.state.battery}/>}
              <br/>
              <br/>
              <Button type="primary" size="large" onClick={this.screenShot.bind(this)}>Get the ScreenShot</Button>
            </FormWrap>
          </Col>
        </Row>
        <Footer style={{position: 'absolute', bottom: 0, width: '100%'}}>
          <a style={{marginRight: '20px'}} href='https://github.com/sy2729' target="_blank"><Icon type="github" /> Github</a>
          <a href='http://shuaiyuan.me' target="_blank"> About Me</a>
        </Footer>
      </div>
    );
  }
}

const FormWrap = styled.div`
  padding: 40px 25px;
  border: 1px solid #ddd;
`

const IconWrap = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  margin-bottom: 30px;

  &:hover {
    color: #4091F7;
  }
`
const Title = styled.div`
  margin: 20px 0;
  padding: 10px 30px;
`
const Logo = styled.img`
  width: 50px;
  justify-self: flex-start;
  width: 50px;
`

export default App;
