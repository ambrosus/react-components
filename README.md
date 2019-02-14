<!---
DO NOT EDIT THIS README.MD. IT IS GENERATED FROM COMPONENTS READMES.
-->

# React Components@0.8.2
# Sidemenu

## Usage

```javascript
import React from 'react';
import { Sidemenu } from '@ambrosus/react'

const App = () => (
    <Sidemenu>
        <p>Custom content that goes inside sidemenu</p>
    </Sidemenu>
  );
```

## Properties

| Props        | Type           | Description                                    |
| ------------ | -------------- | ---------------------------------------------- |
| header       | ReactNode      | Optinal header content                        |
| children     | ReactNode      | Custom content as children               |
| open         | boolean        | Opens or closes sidenav       |
| onOpen       | function ref   | Parent method that manages true state for open property on the sidenav                |
| onClose      | function ref   | Parent method that manages false state for open property on the sidenav             |
| icon         | boolean        | To render sidenav icon, default is true                 |
| iconSrc      | Element        | Custom sidenav icon                            |
| portal       | DOM element    | Element within which to render the sidenav as a child on open                    |
# Tabs

## Usage

```javascript
import React from 'react';
import { Tabs } from '@ambrosus/react'

const App = () => (
    <Tabs active={1}>
      <Tab label='Tab 1'>
        See ya later, <em>Alligator</em>!
      </Tab>
      <Tab label='Tab 2'>
        After 'while, <em>Crocodile</em>!
      </Tab>
      <Tab label='Tab 3' disabled>
        Tab 3, some content!
      </Tab>
    </Tabs>
  );
```

## Properties

| Props        | Type           | Description                                    |
| ------------ | -------------- | ---------------------------------------------- |
| active       | number         | Child at given index to be active                        |
| children     | ReactNode      | Custom content as children               |
| light        | boolean        | Light theme       |
# Tab

## Usage

```javascript
import React from 'react';
import { Tabs, Tab } from '@ambrosus/react'

const App = () => (
    <Tabs>
      <Tab label='Tab 2'>
        After 'while, <em>Crocodile</em>!
      </Tab>
    </Tabs>
  );
```

## Properties

| Props        | Type           | Description                                    |
| ------------ | -------------- | ---------------------------------------------- |
| disabled     | boolean        | Disables the tab                        |
| children     | ReactNode      | Custom content as children               |
| label        | string         | Tab label       |
| active       | boolean        | Active tab       |
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
# Radio

## Usage

```javascript
import React from 'react';
import { Radio } from '@ambrosus/react'

const App = () => (
    <Radio name="choice" value="option1" label="I am an option 1" light />
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
# Switch

## Usage

```javascript
import React from 'react';
import { Switch } from '@ambrosus/react'

const App = () => (
    <Switch className="class1" light>I have read <a>Terms and Conditions</a></Switch>
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
