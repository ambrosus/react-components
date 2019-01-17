import React from 'react';
import { Button } from '../components/form';

const App = () => {

  return (
    <div>
      <Button onClick={() => console.log('test')} outline loading>I am a button</Button>
    </div>
  );
};

export default App;
