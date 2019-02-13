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