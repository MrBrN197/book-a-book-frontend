import reservationsReducer, {
  FETCH_RESERVATION, ADD_RESERVATION, UPDATE_RESERVATION, DELETE_RESERVATION,
} from '../../redux/reservation/reservations';

describe('Reservations Reducer tests', () => {
  const dataArray = [
    {
      id: 1,
      reservation_date: '2009-09-14T08:00:00.000Z',
      city: 'Lagos',
      user_id: 1,
      book_id: 1,
    },
    {
      id: 2,
      reservation_date: '2020-09-01T00:00:00.000Z',
      city: 'California',
      user_id: 1,
      book_id: 1,
    },
    {
      id: 3,
      reservation_date: '2022-02-01T00:00:00.000Z',
      city: 'Oregan',
      user_id: 1,
      book_id: 2,
    },
  ];

  it('It tests if the reducer fetches data', () => {
    const result = reservationsReducer([], { type: FETCH_RESERVATION, payload: dataArray });
    expect(result.length).toBe(3);
    expect(result[0].city).toEqual('Lagos');
  });

  it('It tests the creation of a new reservation', () => {
    const payload = {
      id: 4,
      reservation_date: '2021-05-04T00:00:00.000Z',
      city: 'Lagos',
      user_id: 1,
      book_id: 3,
    };
    const result = reservationsReducer(dataArray, {
      type: ADD_RESERVATION,
      payload,
    });
    expect(result.length).toBe(4);
    expect(result[3].city).not.toBe('Nairobi');
    expect(result[3].reservation_date).toBe('2021-05-04T00:00:00.000Z');
  });

  it('It tests if it can edit a particular reservation', () => {
    const payload = {
      id: 2,
      reservation_date: '2022-09-14T13:00:00.000Z',
      city: 'Nailong',
      user_id: 1,
      book_id: 1,
    };
    const result = reservationsReducer(dataArray, {
      type: UPDATE_RESERVATION,
      payload,
    });
    expect(result.length).toBe(3);
    expect(result[1].city).toBe('Nailong');
    expect(result[1].city).not.toBe('California');
    expect(result[1].id).toBe(2);
  });

  it('It tests if it can delete a particular reservation', () => {
    const result = reservationsReducer(dataArray, { type: DELETE_RESERVATION, payload: 3 });
    expect(result.length).toBe(2);
    expect(result[1].city).toBe('California');
    expect(result).toEqual([
      {
        id: 1,
        reservation_date: '2009-09-14T08:00:00.000Z',
        city: 'Lagos',
        user_id: 1,
        book_id: 1,
      },
      {
        id: 2,
        reservation_date: '2020-09-01T00:00:00.000Z',
        city: 'California',
        user_id: 1,
        book_id: 1,
      },
    ]);
  });
});
