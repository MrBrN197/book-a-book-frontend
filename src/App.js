import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
/* eslint-disable-next-line */
import ReservationForm from './components/reservations/ReservationForm';
import Navbar from './components/navbar/Navbar';
import Error404 from './components/errors/Error404';
import AuthRoute from './components/auth/AuthRoute';
import LoginPage from './components/auth/LoginPage';
import ReservationsPage from './components/reservations/ReservationsPage';
import BooksPage from './components/books/BooksPage';
import BookDetails from './components/books/BookDetails';
import RemoveBookPage from './components/books/RemoveBookPage';

const MainPage = () => <div>🐋 Main Page</div>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<AuthRoute Component={<MainPage />} />} />
        <Route path="books" element={<BooksPage />} />
        <Route path="books/:book_id" element={<BookDetails />} />
        <Route path="books/new" element={<p>Add Book</p>} />
        <Route path="books/remove" element={<RemoveBookPage />} />
        <Route path="reservations" element={<AuthRoute Component={<ReservationsPage />} />} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="reservations/new" element={<AuthRoute Component={<ReservationForm />} />} />
    </Routes>
  </Router>
);

export default App;
