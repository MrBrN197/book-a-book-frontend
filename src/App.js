import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ReservationForm from './components/reservations/ReservationForm';
import Navbar from './components/navbar/Navbar';
import Error404 from './components/errors/Error404';
import AuthRoute from './components/auth/AuthRoute';
import LoginPage from './components/auth/LoginPage';
import ReservationsPage from './components/reservations/ReservationsPage';
import BooksPage from './components/books/BooksPage';
import BookDetails from './components/books/BookDetails';

import BookForm from './components/books/BookForm';

import RemoveBookPage from './components/books/RemoveBookPage';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<AuthRoute Component={<BookDetails />} />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="books" element={<AuthRoute Component={<BooksPage />} />} />
        <Route path="books/:book_id" element={<AuthRoute Component={<BookDetails />} />} />
        <Route path="books/new" element={<AuthRoute Component={<BookForm />} />} />
        <Route path="books/remove" element={<AuthRoute Component={<RemoveBookPage />} />} />
        <Route path="reservations" element={<AuthRoute Component={<ReservationsPage />} />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="reservations/new" element={<AuthRoute Component={<ReservationForm />} />} />
    </Routes>
  </Router>
);

export default App;
