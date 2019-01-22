import React, { Component } from 'react';
import { Button, Input } from '../components/form';

export default class App extends Component {
  public info = 'For maximum security, your private key will <b>never</b> leave your browser.';

  public render() {
    return (
      <div style={{ margin: '150px auto', maxWidth: '500px' }}>
        <Input touched info={this.info} type='password' placeholder='Some placeholder' label='Title here' light />
        <Button onClick={() => console.log('test')} loading>I am a button</Button>
      </div>
    );
  }
}
