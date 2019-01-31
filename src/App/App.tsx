/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React, { Component } from 'react';
import { Button, Input, Textarea, Checkbox, Switch, Radio } from '../components/form';

import './App.scss';

export default class App extends Component {
  public info = 'For maximum security, your private key will <b>never</b> leave your browser.';

  public render() {
    return (
      <div style={{ margin: '150px auto', maxWidth: '500px' }}>
        <Textarea touched invalid shouldValidate errors='Some error' info={this.info} placeholder='Some textarea placeholder' label='Additional details' />
        <Input touched info={this.info} type='password' placeholder='Some placeholder' label='Title here' />
        <Button onClick={() => console.log('test')} loading transparent>I am a button</Button>
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
