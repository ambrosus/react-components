/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { Component } from 'react';
import { Sidemenu } from '../../components';

declare let Prism: any;

import '../App.scss';

// tslint:disable-next-line:class-name
export class _Sidemenu extends Component {
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
        );
    }
}
