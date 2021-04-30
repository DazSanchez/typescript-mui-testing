import React from 'react';
import { addPrefetchExcludes, Root, Routes } from 'react-static';
import { Route, Switch } from 'react-router-dom';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes([]);

const Lorem = () => <p>Lorem</p>;

function App() {
  return (
    <Root>
      <React.Suspense fallback={'Loading...'}>
        <Switch>
          <Route path="/lorem" component={Lorem} />
          <Route render={() => <Routes />} />
        </Switch>
      </React.Suspense>
    </Root>
  );
}

export default App;
