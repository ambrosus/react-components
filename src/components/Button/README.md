# Button

## usage

```javascript
import React from 'react';
import { Button } from 'amborosus/react'

const App = () => (
    <Button className="class1" "class2" disabled primary>
      Click Me!
    </Button>
  );
```

## all properties


| Props        | Type           | Description                                    |
| ------------ |:-------------: | ----------------------------------------------:|
| disabled     | boolean        | Disables button if true                        |
| id           | string         | Id Attribute to assign to button               |
| className    | string         | Class(es) to be applied to the component       |
| onClick      | boolean        | event function to invoke if button is clicked  |
| children     | ReactComponent | Element to be displayed within root element    |
| loading      | boolean        | show loading animation if true                 |
| type         | string         | button type (default to button)                |
| icon         | string         | icon to display for the button                 |
| primary      | boolean        | apply primary color                            |
| outlined     | boolean        | style button with outlined attributes          |
| spinner      | string         | loading spinner to show when loading is true   |