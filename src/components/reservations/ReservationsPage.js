import { useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchReservations } from '../../redux/reservation/reservations';
import { getCurrentUser } from '../auth/user';
import ReservationView from './ReservationView';
import Carousel from '../views/Carousel';

const ReservationsPage = () => {
  const { booksReducer: { data: books }, reservationsReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  const user = getCurrentUser();
  const location = useLocation();

  useEffect(() => {
    dispatch(fetchReservations(user.id));
  }, [dispatch, user.id]);

  if (reservationsReducer.length === 0) return <div> You Have No Reservations Created </div>;
  const noticeClass = location.state ? 'flash-notice' : 'none';

  return (
    <>
      <Carousel posY={48}>
        {reservationsReducer.map((reservation) => {
          const book = books.find((book) => book.id === reservation.book_id);
          return (
            <div key={reservation.id} className="container">
              <p data-testid="map-notice" className={noticeClass}>{location.state?.notice || ''}</p>
              <ReservationView
                reservation={reservation}
                book={book}
                userId={user.id}
              />
            </div>
          );
        })}
      </Carousel>
    </>
  );
};

export default ReservationsPage;
