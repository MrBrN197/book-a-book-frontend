import './reservation.css'

const ReservationForm = () => (
  <>
    <main className="form-container">
      <form className='reservation-form'>
        <h2 className="reservation-header">Reserve this Amazing book</h2>
        <hr />
        <p>Some text...</p>
        <input type='text' placeholder="City" id='city' />
        <button type="submit">Book Now</button>
      </form>
    </main>
  </>
)

export default ReservationForm