import { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './webpage/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading Karyajaya...</div>}>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/about">
            {/* About page component */}
          </Route>
          <Route path="/contact">
            {/* Contact page component */}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
