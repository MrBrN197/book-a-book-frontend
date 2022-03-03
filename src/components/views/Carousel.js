/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { BsCaretRight, BsCaretLeft } from 'react-icons/bs';
import styles from './Carousel.module.scss';

const Carousel = ({ children }) => {
  const carouselEl = useRef(null);

  const handleClick = (dir) => {
    if (!carouselEl.current) return;
    if (dir === 'left') carouselEl.current.scrollLeft -= carouselEl.current.offsetWidth;
    else if (dir === 'right') carouselEl.current.scrollLeft += carouselEl.current.offsetWidth;
    else throw new Error('invalid value for dir');
  };

  return (
    <div className={styles.books}>
      <div ref={carouselEl} className={styles.transformed}>
        {children}
      </div>
      <button className={styles['nav-left']} aria-label="nav-left" type="button" onClick={() => handleClick('left')}><BsCaretLeft /></button>
      <button className={styles['nav-right']} aria-label="nav-right" type="button" onClick={() => handleClick('right')}><BsCaretRight /></button>
    </div>
  );
};

export default Carousel;
