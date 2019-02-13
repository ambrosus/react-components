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