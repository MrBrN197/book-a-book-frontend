import './reservation.css';
import { useDispatch, useSelector } from 'react-redux';
import { useState, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { createReservation } from '../../redux/reservation/reservations';
import { getCurrentUser } from '../auth/user';

const ReservationForm = () => {
  const { data: books } = useSelector((state) => state.booksReducer);
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const user = getCurrentUser();

  const [city, setCity] = useState('');
  const [date, setDate] = useState('');
  const [bookId, setBookId] = useState(location.state ? location.state.book_id : 0);
  // const bookId = location.state ? location.state.book_id : book;

  const today = new Date().toISOString().slice(0, 16);

  const datetimeEl = useRef(null);
  if (datetimeEl.current) { datetimeEl.current.min = today; }

  const reduceCharacter = (string) => (string.length >= 15 ? `${string.slice(0, 15)}...` : string);

  const selectForm = (
    <div className="select-div">
      <select className="select-form" onChange={(e) => setBookId(parseInt(e.target.value, 10))} value={bookId}>
        <option className="option" value="0">Select a Book</option>
        {books.map((book) => (
          <option key={book.id} className="option" value={book.id}>{reduceCharacter(book.title)}</option>
        ))}
      </select>
    </div>
  );

  const submitNewReservation = (e) => {
    e.preventDefault();
    if (city === '' || date === '' || bookId === '0') return;
    const formattedDate = date.replace('T', ' ');
    const newReservation = {
      city,
      reservation_date: formattedDate,
      book_id: bookId,
    };
    dispatch(createReservation(user.id, newReservation));
    setCity('');
    setDate('');
    setBookId('0');
    const bookName = books.find((book) => book.id === bookId);
    navigate('/reservations', { state: { notice: `You reserved ${bookName.title}` } });
  };

  return (
    <>
      <main className="form-container d-flex">
        <form className="reservation-form" onSubmit={submitNewReservation}>
          <h2 className="reservation-header">RESERVE THIS AMAZING BOOK</h2>
          <hr className="line" align="center" />
          <p className="description">
            Do you love reading books? Do you know that reading reduces stress,
            lowers blood pressure and heart rate?
            Boost your knowledge,
            enhance your imagination and improve your brain connectivity
            by reserving one of these amazing books
            {' '}
          </p>
          <div className="form-controls d-flex">
            <input type="text" placeholder="CITY" id="city" onChange={(e) => setCity(e.target.value)} value={city} />
            {!location.state && selectForm}
            <div className="datetime">
              <input ref={datetimeEl} type="datetime-local" id="date" onChange={(e) => setDate(e.target.value)} value={date} />
            </div>
            <button type="submit" id="submit-btn">BOOK NOW</button>
          </div>
        </form>
      </main>
    </>
  );
};

export default ReservationForm;
