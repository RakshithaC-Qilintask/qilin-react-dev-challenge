// App.js with lazy loading for About page

import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home'; // Importing the Home component

// Use lazy loading for the About page
const AboutLazy = lazy(() => import('./About'));

const App = () => {
  return (
    <Router>
      <div>
        {/* Define routes */}
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {/* Route for the Home page */}
            <Route path="/" exact component={Home} />
            {/* Route for the About page with lazy loading */}
            <Route path="/about" component={AboutLazy} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
