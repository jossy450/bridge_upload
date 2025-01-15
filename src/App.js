import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AppRoutes from './Routes';
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes />
      <Footer />
    </Router>
  );
}

export default App;
