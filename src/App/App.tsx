/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React, { Component } from 'react';
import { Button, Input, Textarea, Checkbox, Switch, Radio } from '../components/form';

declare let Prism: any;

import './App.scss';
import { Sidemenu, Tabs } from '../components';

export default class App extends Component {
  public state: any = {
    sidemenu: false,
  };

  public onOpenSidemenu = () => {
    console.log('Sidemenu is open!');
    this.setState({
      sidemenu: true,
    });
  }

  public onCloseSidemenu = () => {
    console.log('Sidemenu is closed!');
    this.setState({
      sidemenu: false,
    });
  }

  public render() {
    return (
      <div className='App'>
        <h1 className='title'>Ambrosus react components, API docs</h1>
        <p className='subtitle'>How to use ambrosus react components, their options and examples.</p>
        {/* Button */}
        <section>
          <h2>Button</h2>
          <pre className='language-tsx'>
            <code dangerouslySetInnerHTML={{
              __html: Prism.highlight(`
import React from 'react';
import { Button } from '@ambrosus/react';

...

return (
  <>
    <Button>I'm a default, solid button</Button>
    <Button loading>I'm loading</Button>
    <Button transparent>I'm transparent</Button>
    <Button secondary>I'm a secondary button</Button>
    <Button outline light>I'm a light, outline button</Button>
    <Button outline>I'm outline</Button>
    <Button onClick={() => console.log('Click!')}>I have a click handler</Button>
    <Button disabled>I'm disabled</Button>
    <Button className='test' style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)' }}>I have custom class and style</Button>
  </>
);
            `, Prism.languages.tsx),
            }}></code>
          </pre>

          <div className='examples'>
            <Button>I'm a default, solid button</Button>
            <Button loading>I'm loading</Button>
            <Button transparent>I'm transparent</Button>
            <Button secondary>I'm a secondary button</Button>
            <Button outline light>I'm a light, outline button</Button>
            <Button outline>I'm outline</Button>
            <Button onClick={() => console.log('Click!')}>I have a click handler</Button>
            <Button disabled>I'm disabled</Button>
            <Button className='test' style={{ boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.3)' }}>I have custom class and style</Button>
          </div>

        </section>

        {/* Checkbox */}
        <section>
          <h2>Checkbox</h2>
          <pre className='language-tsx'>
            <code dangerouslySetInnerHTML={{
              __html: Prism.highlight(`
import React from 'react';
import { Checkbox } from '@ambrosus/react';

...

return (
  <>
    <Checkbox>I'm a default checkbox, <a>some link inside</a></Checkbox>
    <Checkbox label='Checkbox with a label prop' />
    <Checkbox light>I'm a light checkbox</Checkbox>
    <Checkbox disabled>I'm a disabled checkbox</Checkbox>
  </>
);
            `, Prism.languages.tsx),
            }}></code>
          </pre>

          <div className='examples'>
            <Checkbox>I'm a default checkbox, <a>some link inside</a></Checkbox>
            <Checkbox label='Checkbox with a label prop' />
            <Checkbox light>I'm a light checkbox</Checkbox>
            <Checkbox disabled>I'm a disabled checkbox</Checkbox>
          </div>

        </section>

        {/* Switch */}
        <section>
          <h2>Switch</h2>
          <pre className='language-tsx'>
            <code dangerouslySetInnerHTML={{
              __html: Prism.highlight(`
import React from 'react';
import { Switch } from '@ambrosus/react';

...

return (
  <>
    <Switch>I'm a default switch, <a>some link inside</a></Switch>
    <Switch label='Switch with a label prop' />
    <Switch light>I'm a light switch</Switch>
    <Switch disabled>I'm a disabled switch</Switch>
  </>
);
            `, Prism.languages.tsx),
            }}></code>
          </pre>

          <div className='examples'>
            <Switch>I'm a default switch, <a>some link inside</a></Switch>
            <Switch label='Switch with a label prop' />
            <Switch light>I'm a light switch</Switch>
            <Switch disabled>I'm a disabled switch</Switch>
          </div>

        </section>

        {/* Radio */}
        <section>
          <h2>Radio</h2>
          <pre className='language-tsx'>
            <code dangerouslySetInnerHTML={{
              __html: Prism.highlight(`
import React from 'react';
import { Radio } from '@ambrosus/react';

...

return (
  <>
    <div>
      <h4>Options 1</h4>
      <Radio name='options1'>I'm a default radio</Radio>
      <Radio name='options1' label='Radio with a label prop' />
      <Radio name='options1' checked>I'm pre-checked</Radio>
      <Radio name='options1' light>I'm light</Radio>
      <Radio name='options1' disabled>I'm disabled</Radio>
    </div>
    <div>
      <h4>Options 2</h4>
      <Radio name='options2'>I'm a default radio</Radio>
      <Radio name='options2' label='Radio with a label prop' />
    </div>
  </>
);
            `, Prism.languages.tsx),
            }}></code>
          </pre>

          <div className='examples'>
            <div>
              <h4 style={{ marginBottom: '15px' }}>Options 1</h4>
              <Radio name='options1'>I'm a default radio</Radio>
              <Radio name='options1' label='Radio with a label prop' />
              <Radio name='options1' light>I'm light</Radio>
              <Radio name='options1' disabled>I'm disabled</Radio>
            </div>
            <div>
              <h4 style={{ marginBottom: '15px' }}>Options 2</h4>
              <Radio name='options2'>I'm a default radio</Radio>
              <Radio name='options2' label='Radio with a label prop' />
            </div>
          </div>

        </section>

        {/* Input */}
        <section>
          <h2>Input</h2>
          <pre className='language-tsx'>
            <code dangerouslySetInnerHTML={{
              __html: Prism.highlight(`
import React from 'react';
import { Input } from '@ambrosus/react';

...

return (
  <>
    <Input label='Default input' />
    <Input label='Disabled input' disabled/>
    <Input label='Password input' type='password' />
    <Input label='With a placeholder' placeholder='Some placeholder' />
    <Input label='With pre-inserted content' value='Some pre-inserted value' />
    <Input touched label='Valid input' />
    <Input label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
    <Input label='With errors' touched errors='Some error' shouldValidate invalid />
    <Input label='Light input' placeholder='Some placeholder' light touched info='Some info' spellCheck={false} />
  </>
);
            `, Prism.languages.tsx),
            }}></code>
          </pre>

          <p>If you set value or use children as value, you have to provide onChange handler, otherwise input will be rendered as read-only.</p>

          <div className='examples'>
            <Input label='Default input' />
            <Input label='Disabled input' disabled />
            <Input label='Password input' type='password' />
            <Input label='With a placeholder' placeholder='Some placeholder' />
            <Input label='With pre-inserted content' value='Some pre-inserted value' />
            <Input touched label='Valid input' />
            <Input label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
            <Input label='With errors' touched errors='Some error' shouldValidate invalid />
            <Input label='Light input' placeholder='Some placeholder' light touched info='Some info' spellCheck={false} />
          </div>

        </section>

        {/* Textarea */}
        <section>
          <h2>Textarea</h2>
          <pre className='language-tsx'>
            <code dangerouslySetInnerHTML={{
              __html: Prism.highlight(`
import React from 'react';
import { Textarea } from '@ambrosus/react';

...

return (
  <>
    <Textarea label='Default textarea' />
    <Textarea label='Disabled textarea' disabled />
    <Textarea label='With a placeholder' placeholder='Some placeholder' />
    <Textarea label='With pre-inserted content'>Some pre-inserted content inside</Textarea>
    <Textarea touched label='Valid textarea' />
    <Textarea label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
    <Textarea label='With errors' touched errors='Some error' shouldValidate invalid />
    <Textarea label='Light textarea' placeholder='Some placeholder' light touched info='Some info' />
  </>
);
            `, Prism.languages.tsx),
            }}></code>
          </pre>

          <p>If you set value or use children as value, you have to provide onChange handler, otherwise textarea will be rendered as read-only.</p>

          <div className='examples'>
            <Textarea label='Default textarea' />
            <Textarea label='Disabled textarea' disabled />
            <Textarea label='With a placeholder' placeholder='Some placeholder' />
            <Textarea label='With pre-inserted content'>Some pre-inserted content inside</Textarea>
            <Textarea touched label='Valid textarea' />
            <Textarea label='With info icon' info='Some <b>info</b> content for this <i>textarea</i>.' />
            <Textarea label='With errors' touched errors='Some error' shouldValidate invalid />
            <Textarea label='Light textarea' placeholder='Some placeholder' light touched info='Some info' />
          </div>

        </section>
        <section>
          <h2>Sidemenu</h2>
          <pre className='language-tsx'>
            <code dangerouslySetInnerHTML={{
              __html: Prism.highlight(`
import React, { Component } from 'react';
import { Sidemenu } from '@ambrosus/react';

export default class App extends Component {
  public state: any = {
    sidemenu: false,
  };

  public onOpenSidemenu = () => {
    console.log('Sidemenu is open!');
    this.setState({
      sidemenu: true,
    });
  }

  public onCloseSidemenu = () => {
    console.log('Sidemenu is closed!');
    this.setState({
      sidemenu: false,
    });
  }

  public render() {
    return (
      <Sidemenu onOpen={this.onOpenSidemenu} onClose={this.onCloseSidemenu} open={this.state.sidemenu}>
        <h3>Sidenav state managed in parent</h3>
        <p>This one is console logging, using parent's onOpen and onClose methods</p>
      </Sidemenu>
      <Sidemenu>
        <h3>Sidenav state managed internally</h3>
      </Sidemenu>
    );
  }
}
            `, Prism.languages.tsx),
            }}></code>
          </pre>

          <div className='examples'>
            <Sidemenu onOpen={this.onOpenSidemenu} onClose={this.onCloseSidemenu} open={this.state.sidemenu}>
              <h3 style={{ color: '#fff' }}>Sidenav state managed in parent</h3>
              <p>This one is console logging, using parent's onOpen and onClose methods</p>
            </Sidemenu>
            <Sidemenu>
              <h3 style={{ color: '#fff' }}>Sidenav state managed internally</h3>
            </Sidemenu>
          </div>

        </section>

        {/* Tabs */}
        <section>
          <h2>Tabs</h2>
          <pre className='language-tsx'>
            <code dangerouslySetInnerHTML={{
              __html: Prism.highlight(`
import React from 'react';
import { Tabs } from '@ambrosus/react';

...

return (
  <>
    <Tabs active='Tab 2'>
      <div data-label='Tab 1'>
        See ya later, <em>Alligator</em>!
      </div>
      <div data-label='Tab 2'>
        After 'while, <em>Crocodile</em>!
      </div>
    </Tabs>
  </>
);
            `, Prism.languages.tsx),
            }}></code>
          </pre>

          <div className='examples'>
            <Tabs active='Tab 2'>
              <div data-label='Tab 1'>
                See ya later, <em>Alligator</em>!
              </div>
              <div data-label='Tab 2'>
                After 'while, <em>Crocodile</em>!
              </div>
            </Tabs>
          </div>

        </section>

        <footer>
          Ambrosus, all rights reserved, 2019.
        </footer>
      </div>
    );
  }
}
