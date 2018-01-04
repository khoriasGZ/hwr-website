/*
 * Npm import
 */
import React from 'react';


/*
 * Local import
 */
import Navigation from 'src/components/Navigation';
import Events from 'src/components/Events';
import Footer from 'src/components/Footer';

/*
 * Code
 */
const App = () => (
  <div id="app">
    <div id="app-navigation">
      <Navigation />
    </div>
    <div id="app-events">
      <Events />
    </div>
    <div id="app-footer">
      <Footer />
    </div>
  </div>
);


/*
 * Export default
 */
export default App;
