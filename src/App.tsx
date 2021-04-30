import { ThemeProvider } from '@material-ui/styles';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { addPrefetchExcludes, Root, Routes } from 'react-static';
import Lorem from './screens/Lorem';
import theme from './theme';

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['/lorem']);

function App() {
  return (
    <Root>
      <ThemeProvider theme={theme}>
        <React.Suspense fallback={'Loading...'}>
          <Switch>
            <Route path="/lorem" component={Lorem} />
            <Route render={() => <Routes />} />
          </Switch>
        </React.Suspense>
      </ThemeProvider>
    </Root>
  );
}

export default App;
