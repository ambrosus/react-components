# Button

## Usage

```javascript
import React from 'react';
import { Input } from '@ambrosus/react'

const App = () => (
    <Input className="class1" label="Your password" type="password" info="Your password will never leave your browser" light />
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
| invalid         | boolean         | If input is invalid                 |
| shouldValidate      | boolean        | If there's validation                            |
| touched    | boolean        | If input was touched                            |
| errors        | string        | Error string to show below the input                            |
| light        | boolean        | Input light theme          |
| info      | string        | Hover info pop-up          |