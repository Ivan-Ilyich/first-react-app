import React from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

function App() {
  return (
    <>
      <p>Class Counter</p>
      <Counter initialCount={0} />
      <p>Function Counter</p>
      <CounterHooks initialCount={0} />
    </>
  )
}

export default App;
