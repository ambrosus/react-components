# Button

## usage

```javascript
import React from 'react';
import Button from 'amborosus/react-components'

const App = () => (
    <Button classes={["class1" "class2"]} disabled={true}>
      Click Me!
    </Button>
  );
```

## all properties


| Props        | Type           | Description                                    |
| ------------ |:-------------: | ----------------------------------------------:|
| disabled     | boolean        | Disables button if true                        |
| classes      | string array   | Classes to be applied to the component         |
| clicked      | boolean        | event function to invoke if button is clicked  |
| children     | ReactComponent | Element to be displayed within root element    |
| loading      | boolean        | show loading animation if true                 |
| type         | string         | button type (default to button)                |