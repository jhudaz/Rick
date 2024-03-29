import React, { Component } from 'react';
import { Card, Collapse, Radio, Icon } from 'antd';

import '../App.scss';

const Panel = Collapse.Panel;
const RadioGroup = Radio.Group;

class Courses extends Component {

  render() {
    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div className="aside">
        <Card 
          className="card"
          style={{ width: 300 }}
        >
          <h2><Icon type="down" />Filter Course Results!</h2>
        </Card>
        <Collapse
          className="collapse"
          defaultActiveKey={['1', '2', '3']} >
          <Panel header="Course type" key="1">
            <RadioGroup value={1}>
              <Radio style={radioStyle} value={1}>Self paced</Radio>
              <Radio style={radioStyle} value={2}>Live</Radio>
            </RadioGroup>
          </Panel>
          <Panel header="Delivery type" key="2">
            <RadioGroup value={1}>
              <Radio style={radioStyle} value={1}>Any delivery type</Radio>
              <Radio style={radioStyle} value={2}>Computer-Based Training</Radio>
              <Radio style={radioStyle} value={3}>Correspondence</Radio>
              <Radio style={radioStyle} value={4}>Mailed Material</Radio>
            </RadioGroup>
          </Panel>
          <Panel header="Subject area" key="3">
            <RadioGroup value={1}>
              <Radio style={radioStyle} value={1}>Any subject area</Radio>
              <Radio style={radioStyle} value={2}>HIV/AIDS</Radio>
              <Radio style={radioStyle} value={3}>End-of-life care and<br />Palliative Health Care</Radio>
            </RadioGroup>
          </Panel>
        </Collapse>,

      </div>
    )
  }
}

export default Courses;