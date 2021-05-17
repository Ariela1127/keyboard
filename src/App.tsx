import React from 'react';
import Home from './pages/Home';
import { ColorProvider } from './hooks/useColorContext';

const App: React.FC = () => (
  <ColorProvider>
    <Home />
  </ColorProvider>
);

export default App;
