/*
Copyright: Ambrosus Technologies GmbH
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React, { Component } from 'react';

import './Tabs.scss';
import { ITabs } from '../../interfaces';

class Tabs extends Component<ITabs, any> {
  private tabListRef: any;

  constructor(props: ITabs) {
    super(props);

    this.tabListRef = React.createRef();

    const children: any = this.props.children || [];
    let active: any = children.find((child: any) => child.props.active) || children[0] || { props: {} };
    active = this.props.active || active.props['data-label'];

    this.state = {
      active,
      loaded: false,
      line: {
        left: 0,
        width: 0,
      },
    };
  }

  private onClickTabItem = (event: any, label: any) => {
    this.calcLine(event, event.currentTarget);
    this.setState({ active: label });
  }

  private calcLine = (event?: Event, activeChild: any = null) => {
    if (!activeChild) {
      const children = Array.from(this.tabListRef.current.children);
      activeChild = children.find((child: any) => child.classList.contains('active'));
    }
    const parentElement: any = activeChild.parentElement;
    const parentX = parentElement.getBoundingClientRect().x;
    const { x, width } = activeChild.getBoundingClientRect();
    const header: any = parentElement.parentElement;
    header.scrollLeft = x;
    this.setState({
      line: {
        width,
        left: x - parentX,
      },
    });
  }

  public componentDidMount() {
    this.setState({
      loaded: true,
    });
    this.calcLine();
    window.addEventListener('resize', this.calcLine);
  }

  public componentWillUnmount() {
    window.removeEventListener('resize', this.calcLine);
  }

  public render() {
    const line = this.state.line;
    const children = this.props.children ? (Array.isArray(this.props.children) ? this.props.children : [this.props.children]) : [];

    return (
      <div className={`AMB-Tabs ${this.props.light ? 'light' : ''}`.trim()}>
        <header>
          <div className='tabList' ref={this.tabListRef}>
            {children.map((child: any) => (
              <button
                key={child.props['data-label']}
                type='button'
                className={`tab ${child.props['data-label'] === this.state.active ? 'active' : ''}`.trim()}
                onClick={(e) => this.onClickTabItem(e, child.props['data-label'])}>
                {child.props['data-label']}
              </button>
            ))}
          </div>
          {this.state.loaded && <span className='line' style={{ left: line.left, width: line.width }}></span>}
        </header>
        <div className='tabContent'>
          {children.map(
            (child: any) => child.props['data-label'] === this.state.active && child.props.children
          )}
        </div>
      </div>
    );
  }
}

export default Tabs;
