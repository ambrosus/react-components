# Checkbox

## Usage

```javascript
import React from 'react';
import { Checkbox } from '@ambrosus/react'

const App = () => (
    <Checkbox className="class1" light>I have read <a>Terms and Conditions</a></Checkbox>
  );
```

## Properties


| Props        | Type           | Description                                    |
| ------------ | -------------- | ---------------------------------------------- |
| disabled     | boolean        | Disables the button if true                        |
| id           | string         | Id Attribute to assign to button               |
| className    | string         | Class(es) to be applied to the component       |
| label      | string        | Text for input label (title)                 |
| value         | string | number         | Input value                |
| changed        | function ref         | Function that will check for validation errors and value changes                |
| light        | boolean        | Input light theme          |
| children      | ReactNode        | Children or label used for checkbox text          |