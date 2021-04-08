import React from 'react';

const momma = function dude(x) {
  console.log(`${x}, yea that's correct.`);
};

const func1 = (y) => {
  momma('Hi');
  console.log(`${momma}, Oh yea!`);
};

func1('deeznuts');

function ThoseThings() {
  return (
    <div>
      <h1>Hi there</h1>
      <h3>Hello there. Man.</h3>
      {func1('sure')}
    </div>
  );
}

export default ThoseThings;
