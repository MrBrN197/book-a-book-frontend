import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Error404 from './components/errors/Error404';
import AuthRoute from './components/auth/AuthRoute';
import LoginPage from './components/auth/LoginPage';

const MainPage = () => <div>Main Page</div>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route path="login" element={<LoginPage />} />
        <Route index element={<AuthRoute Component={<MainPage />} />} />
        <Route path="books" element={<p>* books *</p>} />
        <Route path="books/new" element={<p>* add book *</p>} />
        <Route path="books/remove" element={<p>* delete book *</p>} />
        <Route path="reservations" element={<p>* reservations *</p>} />
        <Route path="*" element={<Error404 />} />
      </Route>
      <Route path="reservations/new" element={<p>* reserve a book *</p>} />
    </Routes>
  </Router>
);

export default App;
