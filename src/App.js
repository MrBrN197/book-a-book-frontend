import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Error404 from './components/errors/Error404';

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<div>Main Page</div>} />
        <Route path="books" element={<p>* books *</p>} />
        <Route path="books/new" element={<p>* add book *</p>} />
        <Route path="books/remove" element={<p>* delete book *</p>} />
        <Route path="reservations" element={<p>* reservations *</p>} />
        <Route path="reservations/new" element={<p>* reserve a book *</p>} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
