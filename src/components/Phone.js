import React, { Component } from 'react';
import styled from 'styled-components';
import Top from './Top'
import Message from './Message'
import BottomBar from './BottomBar'
import Time from './Time.js'
import getTime from '../utils/timer'
import PhoneBar from './PhoneBar'
import createID from '../utils/ID'

class Phone extends Component {

  constructor() {
    super();

    this.state = {
      lastShownEl: null,
      messages : [
        {
          id: 1,
          content: 'Message 1',
          self: false
        },
        {
          id: 2,
          content: 'Message2',
          self: true
        }
      ]
    }
  }

  selfInput(data){
    // decide whether now is inputing on the right hand side
    var self = this.props.side === 'self';
    // create ID for each message
    var id = createID(6);
    var time = getTime();
    // update the message
    this.setState({
      messages: [...this.state.messages, {content: data, self: self, id, time, showTime: false}]
    }, ()=> {
      var objDiv = this.refs.page;
      objDiv.scrollTop = objDiv.scrollHeight;
    })  
  }

  deleteMsg(data) {
    let result = this.state.messages.filter((i)=>i.id !== data)
    this.setState({
      messages: [...result]
    })
  }

  render() { 
    let dom = this.state.messages.map((i, index)=> {
      if(!this.state.lastShownEl && i.time && index === 0) {
        this.setState({
          lastShownEl: i
        })
        i.showTime = true
      }else {
        if(this.state.lastShownEl && i.time.originalTime - this.state.lastShownEl.time.originalTime > 1000 * 60) {
          // console.log(i.time.originalTime - this.state.lastShownEl.time.originalTime)
          // console.log(this.state.lastShownEl.id)
          // console.log("this item should be print out")
          
          // update this item's show property
          i.showTime = true;

          // update the last shown component
          this.setState({lastShownEl: i});
        }
      }
      
      return (
              <div key={i.id}>
                {i.showTime ? (<><br/><Time time={i.time.value}/></>) : null}
                <Message 
                  self={i.self}
                  deleteMsg = {this.deleteMsg.bind(this)}
                  message={i.content} 
                  key={index}
                  id={i.id}
                  profileUrl={i.self ? this.props.profile2 : this.props.profile1}
                  changeProfile = {this.props.changeProfile.bind(this)}
                />
              </div>
              )
    })

    return(
      <Div className="Phone">
        <TopBarWrap>
          <PhoneBar battery={this.props.battery} operator = {this.props.operator} changeBattery = {this.props.changeBattery.bind(this)}/>
          <Top name={this.props.name || 'Name'} />
        </TopBarWrap>
        <PhoneBody ref="page">
          {dom}
        </PhoneBody>
        <BottomBar selfInput={this.selfInput.bind(this)} side={this.props.side}/>
      </Div>
    )
  }
}

const Div = styled.div`
  width: 350px;
`

const PhoneBody = styled.div`
  background: #F2F2F2;
  height: 500px;
  padding: 0 10px;
  overflow: scroll;
`

const TopBarWrap = styled.div`
  position: sticky;
  z-index: 10;
  top: 0px;
`

export default Phone;