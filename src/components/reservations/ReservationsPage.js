import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchReservations } from '../../redux/reservation/reservations';
import { getCurrentUser } from '../auth/user';
import ReservationView from './ReservationView';

const ReservationsPage = () => {
  const { booksReducer: { data: books }, reservationsReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const user = getCurrentUser();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchReservations(user.id));
  }, [user.id]);

  return (
    <>
      <p>{location.state?.notice || ''}</p>
      <>
        {reservationsReducer.map((reservation) => {
          const book = books.find((book) => book.id === reservation.book_id);
          return <ReservationView reservation={reservation} book={book} key={reservation.id} />;
        })}
      </>
    </>
  );
};

export default ReservationsPage;
