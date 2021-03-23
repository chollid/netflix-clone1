import React from 'react';
import { useState } from 'react';

function Homies1() {
  const [something, setSomething] = useState('');

  const doThis = () => {
    console.log('did this');
  };
  return (
    <div>
      <h1 onClick={doThis}></h1>
    </div>
  );
}

export default Homies1;
