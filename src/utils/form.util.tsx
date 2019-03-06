/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
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
