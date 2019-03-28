import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { _Button, _Checkbox, _Input, _Radio, _Sidemenu, _Switch, _Tabs, _Textarea, _CalendarInput, _Paragraph, _Currency, _Number, _useForm } from './components';

const Router = () => (
    <Switch>
        <Route exact path='/button' component={_Button} />
        <Route exact path='/checkbox' component={_Checkbox} />
        <Route exact path='/calendar-input' component={_CalendarInput} />
        <Route exact path='/currency' component={_Currency} />
        <Route exact path='/number' component={_Number} />
        <Route exact path='/input' component={_Input} />
        <Route exact path='/paragraph' component={_Paragraph} />
        <Route exact path='/radio' component={_Radio} />
        <Route exact path='/form' component={_useForm} />
        <Route exact path='/sidemenu' component={_Sidemenu} />
        <Route exact path='/switch' component={_Switch} />
        <Route exact path='/tabs' component={_Tabs} />
        <Route exact path='/textarea' component={_Textarea} />
        <Redirect from='*' to='/button' />
    </Switch >
);

export default Router;
