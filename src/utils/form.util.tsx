/*
Copyright: Ambrosus Inc.
Email: tech@ambrosus.com
This Source Code Form is subject to the terms of the Mozilla Public License, v. 2.0.
If a copy of the MPL was not distributed with this file, You can obtain one at https://mozilla.org/MPL/2.0/.
This Source Code Form is “Incompatible With Secondary Licenses”, as defined by the Mozilla Public License, v. 2.0.
*/
import { checkValidity } from './validators.util';

export const componentInputChange = (inputIdentifier: string, formName: string, component: any) => {
    return (event: any) => {
        const form = {
            ...component.state.forms[formName],
        };
        const element = {
            ...form.fields[inputIdentifier],
        };
        element.value = event.target.value;
        element.errors = checkValidity(element.value, element.validators);
        element.touched = true;
        form.fields[inputIdentifier] = element;

        form.valid = true;
        Object.keys(form.fields).map(inputField => {
            form.valid = form.valid && !form.fields[inputField].errors;
        });

        const state = component.state;
        state.forms[formName] = form;

        component.setState(state);
    };
};
