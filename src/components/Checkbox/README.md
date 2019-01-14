# Input

## usage

```javascript
import React from 'react';
import { Checkbox } from 'amborosus/react'
import icon form '../assets/icon/icon.svg';

const App = () => (
    <Checkbox className="class1 class2" label="Male" value={1} icon={icon}/>
  );
```

## all properties


| Props          | Type           | Description                                    |
| -------------- |:-------------: | ----------------------------------------------:|
| disabled       | boolean        | Disables button if true                        |
| className      | string array   | Class(es) to be applied to the component       |
| id             | string         | Element to be displayed within root element    |
| checkedIcon    | string         | icon to use as the button checked view         |
| uncheckedIcon  | string         | icon to use as the button unchecked view       |
| label          | string         | label to display for the checkbox              |
| labelPosition  | string         | position to show the label                     |
| icon           | string         | icon to display as the label of the checkbox   |
| value          | string         | the value to submit the checkbox for           |
| checked        | boolean        | to show the checkbox as checked or not         |
| name           | string         | the form name of the checkbox control          |
| onChange       | EventHandler   | function to handle the onChange event          |