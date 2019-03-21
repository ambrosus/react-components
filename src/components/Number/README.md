# Number

## Usage

```javascript
import React from 'react';
import { Number } from '@ambrosus/react'

const App = () => (
    <Number value={100.35} />
  );
```

## Properties

interface IDelimiter {
    thousands?: string;
    decimals?: string;
};

| Props        | Type           | Description                                    |
| ------------ | -------------- | ---------------------------------------------- |
| value     | number | string      | Value to process               |
| fixed      | number | false    | Number of decimal places       |
| delimiter        | IDelimiter    | Changes delimiter on thousands and decimals      |
