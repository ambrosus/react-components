<!---
DO NOT EDIT THIS README.MD. IT IS GENERATED FROM COMPONENTS READMES.
-->

# React Components@0.5.0
# Button

## Usage

```javascript
import React from 'react';
import { Button } from '@ambrosus/react'

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
# Checkbox

## Usage

```javascript
import React from 'react';
import { Checkbox } from '@ambrosus/react'

const App = () => (
    <Checkbox className="class1" light>I've read <a>Terms and Conditions</a></Checkbox>
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
| children      | ReactNode        | Children or label used for checkbox text          |
# Input

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
# Switch

## Usage

```javascript
import React from 'react';
import { Switch } from '@ambrosus/react'

const App = () => (
    <Switch className="class1" light>I've read <a>Terms and Conditions</a></Switch>
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
| children      | ReactNode        | Children or label used for checkbox text          |
# Textarea

## Usage

```javascript
import React from 'react';
import { Textarea } from '@ambrosus/react'

const App = () => (
    <Textarea className="class1" label="Your details" info="Optional registration details" light />
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
