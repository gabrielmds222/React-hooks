import React from 'react';

// import { State } from '../src/hooks/State';
// import { Effect } from '../src/hooks/Effect';
// import { Ref } from '../src/hooks/Ref';
// import { Reducer } from '../src/hooks/Reducer';
import ThemeContextProvider from '../src/hooks/Context';

import Message from './Message';
import Greeting from './Greeting';

function App() {
  return (
    <ThemeContextProvider>
      <Message />
      <Greeting />
    </ThemeContextProvider>
  );
}

export default App;
