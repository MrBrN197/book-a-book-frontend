import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Error404 from './components/errors/Error404';

const MainPage = () => <div>Main Page</div>;

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<MainPage />} />
        <Route path="books" element={<p>* books *</p>} />
        <Route path="books/add" element={<p>* add book *</p>} />
        <Route path="books/delete" element={<p>* delete book *</p>} />
        <Route path="reservations" element={<p>* reservations *</p>} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  </Router>
);

export default App;
