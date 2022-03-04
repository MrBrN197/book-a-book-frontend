import './reservation.css';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../redux/reservation/reservations';

const ReservationView = ({ reservation, book, userId }) => {
  const dispatch = useDispatch();
  const date = new Date(reservation.reservation_date);
  const formattedDate = new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'short' }).format(date);
  const deleteReservations = () => {
    dispatch(deleteReservation(userId, reservation.id));
  };

  return (
    <article className="reservationview-container d-flex">
      <div className="img-placeholder">
        <img src={book.image} alt={`Book cover of ${book.title}`} />
      </div>
      <div className="details-div">
        <div className="book-details d-flex">
          <h1 data-testid="map-book-title">{book.title}</h1>
          <span className="by">by</span>
          <span className="author">{book.author}</span>
          <span className="price">
            {' '}
            $
            {book.price}
          </span>
        </div>
        <p className="city">{reservation.city}</p>
        <div className="reservation-details d-flex">
          <span className="reservation-date">Rental Date</span>
          <span className="word-date">{formattedDate}</span>
        </div>
        <div>
          <button type="submit" className="delete-btn" onClick={deleteReservations}>Delete Reservation</button>
        </div>
      </div>
    </article>
  );
};

ReservationView.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
  reservation: PropTypes.shape({
    reservation_date: PropTypes.string,
    city: PropTypes.string,
    id: PropTypes.number,
  }).isRequired,
  userId: PropTypes.number.isRequired,
};
export default ReservationView;
