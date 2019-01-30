import React, { Component } from 'react';
import { Row, Col, Input, message } from 'antd';
import styled from 'styled-components';

import UploadProfile from './UploadProfile';

class UserForm extends Component {
  constructor() {
    super();
  }

  // check whether the image exisit
  linkImage(data) {
    let img = document.createElement('img');
      img.src = data;

      img.onerror = (e)=> {
        message.error('The image path is invalid');
        console.log("error: ", e)
      }
      img.onload = ()=> {
       message.success('Modify Successfully');
       this.props.uploadFinished(data)
       this.clearInput(this.refs.search);
      //  this.refs.search.input.input.value = ''
      }
  }

  // function of clear input
  clearInput(el) {
    el.input.input.value = '';
  }

  render() {
    const Search = Input.Search;
    const NameInput = 
      this.props.mode === 'self' ? null :
      (<div>
        <br/>
        <Search
          placeholder="Change the Name"
          enterButton="Change"
          size="large"
          onSearch={value => this.props.changeName(value)}
          ref="changeName"
        />
      </div>)
    return (
      <>
        <Row>
          <Col className="flex">
            <Profile style={{backgroundImage: `url(${this.props.profile || 'https://res.cloudinary.com/shuaiyuan/image/upload/v1548391627/cv-img/logo-animation.gif'})`}}/>
            <UploadProfile uploadFinished={this.props.uploadFinished.bind(this)}/>
          </Col>
        </Row>
        <Row>
            <Search
              placeholder="Input the image url"
              enterButton="Search"
              size="large"
              onSearch={value => this.linkImage(value)}
              ref="search"
            />
            {NameInput}
        </Row>
      </>
    )
  }
}

const Profile = styled.div`
  width: 100px;
  height: 100px;
  background: transparent center no-repeat;
  background-size: cover;
  cursor: pointer;
  border-radius: 4px;
  box-shadow: 2px 2px 9px 0 rgba(100, 100, 100, 0.5);
`


export default UserForm