import * as React from 'react';

import GetCards from './components/GetCards';
import AddCard from './components/AddCard';

const App = () => (
  <React.Fragment>
    <AddCard />
    <GetCards />
  </React.Fragment>
);

export default App;
