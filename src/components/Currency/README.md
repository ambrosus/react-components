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

| Props        | Type           | Description                                    |
| ------------ | -------------- | ---------------------------------------------- |
| value     | number      | Value to process               |
| fixed      | number    | Number of decimal places       |
| symbol        | string    | Default $      |
| side        | string    | Side to place the symbol, default right      |