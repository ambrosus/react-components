/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import React from 'react';
import { ITab } from '../../../interfaces/tab.interface';

import './Tab.scss';

const Tab = (props: ITab) => {
    return <div className='AMB-Tab'>{props.children}</div>;
};

export default Tab;
