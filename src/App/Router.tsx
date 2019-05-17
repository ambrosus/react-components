import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { _Button, _Checkbox, _Input, _Radio, _Sidemenu, _Switch, _Tabs, _Textarea, _CalendarInput, _Paragraph, _Currency, _Number, _useForm, _Home, _DropDown, _GradientText, _Backdrop, _ClickAwayListener, _Collapse, _Fade, _Grow, _Modal, _Popover, _Popper, _Portal, _Slide, _Zoom } from './components';

export const ROUTES = [
    { title: 'Home', url: '/', component: _Home },
    { title: 'Backdrop', url: '/backdrop', component: _Backdrop },
    { title: 'Button', url: '/button', component: _Button },
    { title: 'Checkbox', url: '/checkbox', component: _Checkbox },
    { title: 'Calendar Input', url: '/calendar-input', component: _CalendarInput },
    { title: 'Click Away Listener', url: '/click-away-listener', component: _ClickAwayListener },
    { title: 'Collapse', url: '/collapse', component: _Collapse },
    { title: 'Currency', url: '/currency', component: _Currency },
    { title: 'DropDown', url: '/drop-down', component: _DropDown },
    { title: 'Fade', url: '/fade', component: _Fade },
    { title: 'Grow', url: '/grow', component: _Grow },
    { title: 'GradientText', url: '/gradient-text', component: _GradientText },
    { title: 'Modal', url: '/modal', component: _Modal },
    { title: 'Number', url: '/number', component: _Number },
    { title: 'Input', url: '/input', component: _Input },
    { title: 'Paragraph', url: '/paragraph', component: _Paragraph },
    { title: 'Popper', url: '/popper', component: _Popper },
    { title: 'Popover', url: '/popover', component: _Popover },
    { title: 'Portal', url: '/portal', component: _Portal },
    { title: 'Radio', url: '/radio', component: _Radio },
    { title: 'Form', url: '/form', component: _useForm },
    { title: 'Sidemenu', url: '/sidemenu', component: _Sidemenu },
    { title: 'Slide', url: '/slide', component: _Slide },
    { title: 'Switch', url: '/switch', component: _Switch },
    { title: 'Tabs', url: '/tabs', component: _Tabs },
    { title: 'Textarea', url: '/textarea', component: _Textarea },
    { title: 'Zoom', url: '/zoom', component: _Zoom },
];

const Router = () => (
    <Switch>
        {ROUTES.map(route => (<Route key={route.url} exact path={route.url} component={route.component} />))}

        <Redirect from='*' to='/' />
    </Switch >
);

export default Router;
