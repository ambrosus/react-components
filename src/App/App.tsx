import React, { Component } from 'react';
import { Button, Input, Textarea, Checkbox, Switch, Radio } from '../components/form';

export default class App extends Component {
  public info = 'For maximum security, your private key will <b>never</b> leave your browser.';

  public render() {
    return (
      <div style={{ margin: '150px auto', maxWidth: '500px' }}>
        <Textarea touched invalid shouldValidate errors='Some error' info={this.info} placeholder='Some textarea placeholder' label='Additional details' />
        <Input touched info={this.info} type='password' placeholder='Some placeholder' label='Title here' />
        <Button onClick={() => console.log('test')} loading>I am a button</Button>
        <Checkbox light>Some checkbox text <a>Some link</a></Checkbox>
        <Switch>Some switch text <a>Some link</a></Switch>
        <div style={{ marginTop: '15px' }}>
          <Radio name='test' value='value1' label='Value 1' disabled />
          <Radio name='test' value='value2' light />
          <Radio name='test' value='value3' label='This is value 3' />
        </div>
      </div>
    );
  }
}
