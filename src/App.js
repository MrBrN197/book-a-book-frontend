import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationForm from './components/reservations/ReservationForm';
import Navbar from './components/navbar/Navbar';
import Error404 from './components/errors/Error404';
import AuthRoute from './components/auth/AuthRoute';
import LoginPage from './components/auth/LoginPage';
import ReservationsPage from './components/reservations/ReservationsPage';

const MainPage = () => <div>🐋 Main Page</div>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<AuthRoute Component={<MainPage />} />} />
        <Route path="books" element={<p>* books *</p>} />
        <Route path="books/new" element={<p>* add book *</p>} />
        <Route path="books/remove" element={<p>* delete book *</p>} />
        <Route path="reservations" element={<AuthRoute Component={<ReservationsPage />} />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="reservations/new" element={<AuthRoute Component={<ReservationForm />} />} />
    </Routes>
  </Router>
);

export default App;
