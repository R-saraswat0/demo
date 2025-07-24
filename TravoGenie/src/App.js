import { Routes, Route, Navigate } from 'react-router-dom';


import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Feature from './pages/Feature';
import Destination from './pages/Destination';
import DestinationDetail from './pages/DestinationDetail';
import BookNow from './pages/BookNow';
import Testimonial from './pages/Testimonial';
import Auth from './components/Auth';
import { useLocation } from 'react-router-dom';

function PrivateRoute({ children }) {
  const token = localStorage.getItem('token');
  return token ? children : <Navigate to="/auth" replace />;
}

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/auth';
  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/feature" element={
          <PrivateRoute>
            <Feature />
          </PrivateRoute>
        } />
        <Route path="/destination" element={
          <PrivateRoute>
            <Destination />
          </PrivateRoute>
        } />
        <Route path="/destination/:id" element={
          <PrivateRoute>
            <DestinationDetail />
          </PrivateRoute>
        } />
        <Route path="/book-now" element={
          <PrivateRoute>
            <BookNow />
          </PrivateRoute>
        } />
        <Route path="/testimonial" element={
          <PrivateRoute>
            <Testimonial />
          </PrivateRoute>
        } />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
