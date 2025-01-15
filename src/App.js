import React from 'react';
import Header from './Header';
import Footer from './Footer';
import AppRoutes from './Routes'; // Assuming all routes are managed in this file
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header />
      <AppRoutes /> {/* Use AppRoutes to manage all routes */}
      <Footer />
    </Router>
  );
}

export default App;
