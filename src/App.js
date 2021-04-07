import React, { useState } from 'react';
import Counter from './Counter';
import CounterHooks from './CounterHooks';

export const ThemeContext = React.createContext()

function App() {
  const [theme, setTheme] = useState('red')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      <p>Class Counter</p>
      <Counter initialCount={0} />
      <p>Function Counter</p>
      <CounterHooks initialCount={0} />
      <button onClick={() => setTheme(prevTheme => prevTheme === 'red' ? 'blue' : 'red')}>Toggle Theme</button>
    </ThemeContext.Provider>
  )
}

export default App;
