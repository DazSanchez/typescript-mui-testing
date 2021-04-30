import React from 'react';
import { addPrefetchExcludes, Root, Routes } from 'react-static';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes([]);

function App() {
  return (
    <Root>
      <React.Suspense fallback={'Loading...'}>
        <Routes />
      </React.Suspense>
    </Root>
  );
}

export default App;
