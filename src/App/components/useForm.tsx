/**
 * Copyright 2018 Ambrosus Inc.
 * Email: tech@ambrosus.com
 */
import React, { useEffect, useRef } from 'react';
import { useForm, validate, Input, Button } from '../../components';
import Table from '../Table';
import * as CodeMirror from 'codemirror';
import 'codemirror/mode/jsx/jsx';

import '../App.scss';

const example = `import React from 'react';
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
}`;

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
    const exampleRef: any = useRef(document.getElementById('example'));

    useEffect(() => {
        if (exampleRef.current) {
            CodeMirror.default(exampleRef.current, {
                mode: 'jsx',
                theme: 'default',
                lineNumbers: true,
                readOnly: true,
                lineWrapping: true,
                value: example,
            });
        }
    }, [exampleRef]);

    return (
        <section>
            <h2>useForm</h2>

            {/* Props */}
            <h3 className='subtitle'>Props</h3>
            <Table
                head={['Arguments', 'Type', 'Description']}
                body={[
                    ['validate', 'function', 'Function called to check errors, it returns error object'],
                ]}
            />

            <h3 className='subtitle'>Example</h3>
            <div className='code' ref={exampleRef}></div>

            <div className='examples'>
                <LoginForm />
            </div>

        </section >
    );
};
