import axios from 'axios';
import './bookform.css';
import { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { createBook } from '../../redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');
  const [imageName, setImageName] = useState('');

  const hiddenFileInput = useRef(null);

  const handleClick = () => {
    hiddenFileInput.current.click();
  };

  const handleChange = (event) => {
    const fileUploaded = event.target.files[0];
    setImageName(fileUploaded.name);
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'r9svuzom');
    try {
      const response = await axios.post('https://api.cloudinary.com/v1_1/dkfnvs7yj/auto/upload', formData);
      if (response.status === 200) return response.data.secure_url;
    } catch (error) {
      return error.response.data;
    }
    return '';
  };

  const submitNewBook = async (e) => {
    e.preventDefault();
    const file = e.target.image.files[0];
    const link = await uploadImage(file);
    if (!link) return;
    const newBook = {
      title,
      author,
      description,
      image: link,
      genre,
      price,
      rating,
    };
    dispatch(createBook(newBook));
    setTitle('');
    setAuthor('');
    setDescription('');
    setGenre('');
    setPrice('');
    setRating('');
    navigate('/books', { state: { notice: 'You created a new book' } });
  };

  return (
    <>
      <main className="book-form-container d-flex">
        <form className="book-form" onSubmit={submitNewBook}>
          <h1 className="book-header">Create Your Book</h1>
          <hr className="line" align="center" />
          <p className="description">
            Do you have an amazing book that you think our readers should rent?
            All you have to do is fill in the details of the book below and send to us.
            We will make the book available.
            Thanks to you, our wonderful users will be able to boost their knowledge by
            having access to this book.
            {' '}
          </p>
          <div className="book-form-controls d-flex">
            <input type="text" placeholder="Title" id="title" onChange={(e) => setTitle(e.target.value)} value={title} required />
            <input type="text" placeholder="Author" id="author" onChange={(e) => setAuthor(e.target.value)} value={author} required />
            <input type="text" placeholder="Genre" id="genre" onChange={(e) => setGenre(e.target.value)} value={genre} required />
            <input type="number" placeholder="Price" id="price" onChange={(e) => setPrice(e.target.value)} value={price} min="1" max="999" required />
            <input type="number" placeholder="Rating" id="rating" onChange={(e) => setRating(e.target.value)} value={rating} required />
            <button type="button" onClick={handleClick} id="image">Upload Image</button>
            <p className="image-name">{imageName}</p>
            <input type="file" id="image-upload" accept="image/png, image/jpeg, image/svg" ref={hiddenFileInput} onChange={handleChange} required />
            <textarea placeholder="Description..." id="text-description" onChange={(e) => setDescription(e.target.value)} value={description} />
            <button type="submit" id="submit-btn">BOOK NOW</button>
          </div>

        </form>

      </main>
    </>
  );
};

export default BookForm;
