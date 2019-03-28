/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React from 'react';
import { useForm, validate, Input, Button } from '../../components';

declare let Prism: any;

import '../App.scss';

function validateLoginForm(values: any) {
    const errors: any = {};

    const email = validate(values.email, 'email');
    const password = validate(values.password, 'password');

    if (email) {
        errors.email = email;
    }
    if (password) {
        errors.password = password;
    }

    return errors;
}

function LoginForm() {
    const { values, errors, valid, onBlur }: any = useForm(validateLoginForm);

    const onSubmit = (event: any) => {
        event.preventDefault();

        if (valid) {
            console.log('Form submited: ', values);
        }
    };

    return (
        <form onSubmit={onSubmit} style={{ width: '100%', textAlign: 'center' }}>
            <Input error={errors.email} name='email' onBlur={onBlur} label='Email' />
            <Input error={errors.password} name='password' type='password' onBlur={onBlur} label='Password' />
            <Button disabled={!valid} type='submit' style={{ marginTop: '25px' }}>Login</Button>
        </form>
    );
}

export const _useForm = () => {
    return (
        <section>
            <h2>useForm</h2>
            <pre className='language-tsx'>
                <code dangerouslySetInnerHTML={{
                    __html: Prism.highlight(`
import React from 'react';
import { useForm, validate } from '@ambrosus/react';

function validateLoginForm(values: any) {
    const errors: any = {};

    const email = validate(values.email, 'email');
    const password = validate(values.password, 'password');

    if (email) {
        errors.email = email;
    }
    if (password) {
        errors.password = password;
    }

    return errors;
}

function LoginForm() {
    const { values, errors, valid, onBlur }: any = useForm(validateLoginForm);

    const onSubmit = (event: any) => {
        event.preventDefault();

        if (valid) {
            console.log('Form submited: ', values);
        }
    };

    return (
        <form onSubmit={onSubmit} style={{ width: '100%', textAlign: 'center' }}>
            <Input error={errors.email} name='email' onBlur={onBlur} label='Email' />
            <Input error={errors.password} name='password' type='password' onBlur={onBlur} label='Password' />
            <Button disabled={!valid} type='submit' style={{ marginTop: '25px' }}>Login</Button>
        </form>
    );
}
            `, Prism.languages.tsx),
                }}></code>
            </pre>

            <div className='examples'>
                <LoginForm />
            </div>

        </section>
    );
};
