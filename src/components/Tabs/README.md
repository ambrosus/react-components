# Tabs

## Usage

```javascript
import React from 'react';
import { Tabs } from '@ambrosus/react'

const App = () => (
    <Tabs active='Tab 2'>
      <div data-label='Tab 1'>
        See ya later, <em>Alligator</em>!
      </div>
      <div data-label='Tab 2'>
        After 'while, <em>Crocodile</em>!
      </div>
    </Tabs>
  );
```

## Properties

| Props        | Type           | Description                                    |
| ------------ | -------------- | ---------------------------------------------- |
| active       | string         | Label name of active tab                        |
| children     | ReactNode      | Custom content as children               |
| light        | boolean        | Light theme       |