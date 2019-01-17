<!---
DO NOT EDIT THIS README.MD. IT IS GENERATED FROM COMPONENTS READMES.
-->

# React Components@0.3.1
# Button

## Usage

```javascript
import React from 'react';
import { Button } from '@ambrosus/react/form'

const App = () => (
    <Button className="class1 class2" disabled secondary outline onClick={() => console.log('Clicked!')}>
      Click Me!
    </Button>
  );
```

## Properties


| Props        | Type           | Description                                    |
| ------------ | -------------- | ---------------------------------------------- |
| disabled     | boolean        | Disables the button if true                        |
| id           | string         | Id Attribute to assign to button               |
| className    | string         | Class(es) to be applied to the component       |
| children     | ReactComponent | Element to be displayed within root element    |
| loading      | boolean        | Shows loading animation if true and disables the button                 |
| type         | string         | Button type (default: button)                |
| label        | string         | Button text                |
| icon         | string         | Path to icon, to display in the button                 |
| primary      | boolean        | Primary AMB color                            |
| secondary    | boolean        | Secondary AMB color                            |
| light        | boolean        | Light (white) color                            |
| solid        | boolean        | Solid button style          |
| outline      | boolean        | Outline button style          |
| transparent  | boolean        | Transparent button style          |

      