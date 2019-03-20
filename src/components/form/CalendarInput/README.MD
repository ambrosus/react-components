# CalendarInput

## Usage

```javascript
import React from 'react';
import { CalendarInput } from '@ambrosus/react'

const App = () => (
    <CalendarInput label='Birthday date'/>
  );
```

## Properties


| Props        | Type           | Description                                    |
| ------------ | -------------- | ---------------------------------------------- |
| disabled     | boolean        | Disables the button if true                        |
| id           | string         | Id Attribute to assign to button               |
| className    | string         | Class(es) to be applied to the component       |
| label      | string        | Text for input label (title)                 |
| changed        | function ref         | Function that will check for validation errors and value changes                |
| invalid         | boolean         | If input is invalid                 |
| shouldValidate      | boolean        | If there's validation                            |
| touched    | boolean        | If input was touched                            |
| errors        | string        | Error string to show below the input                            |
| light        | boolean        | Input light theme          |
| info      | string        | Hover info pop-up          |
| daterange      | boolean        | Date range calendar functionality          |