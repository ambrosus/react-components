# Currency

## Usage

```javascript
import React from 'react';
import { Currency } from '@ambrosus/react'

const App = () => (
    <Currency value={100.35} />
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
| symbol        | string    | Default $      |
| side        | string    | Side to place the symbol, default right      |
| delimiter        | IDelimiter    | Changes delimiter on thousands and decimals      |