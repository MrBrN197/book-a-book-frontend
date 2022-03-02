import PropTypes from 'prop-types';

const ReservationView = ({ reservation, book }) => {
  const date = new Date(reservation.reservation_date);
  const formattedDate = new Intl.DateTimeFormat('en-us', { dateStyle: 'full', timeStyle: 'short' }).format(date);
  return (
    <div>
      <div>
        <img src={book.image} alt={`Book cover of ${book.title}`} />
      </div>
      <p>
        Reservation Date:
        {' '}
        {formattedDate}
      </p>
      <p>
        {book.title}
        {' '}
        by
        {' '}
        {book.author}
      </p>
      <p>{reservation.city}</p>
    </div>
  );
};

ReservationView.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string,
    image: PropTypes.string,
    author: PropTypes.string,
  }).isRequired,
  reservation: PropTypes.shape({
    reservation_date: PropTypes.string,
    city: PropTypes.string,
  }).isRequired,
};
export default ReservationView;
