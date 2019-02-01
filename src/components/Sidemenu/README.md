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

header?: ReactNode;
    children?: any;
    open?: boolean;
    onOpen?: () => any;
    onClose?: () => any;
    icon?: boolean;
    iconSrc?: string;
    portal?: any;

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