import { useRef } from 'react';
import { BsCaretRight, BsCaretLeft } from 'react-icons/bs';
import PropTypes from 'prop-types';
import styles from './Carousel.module.scss';

const Carousel = ({ children, posY }) => {
  const carouselEl = useRef(null);

  const handleClick = (dir) => {
    if (!carouselEl.current) return;
    if (dir === 'left') carouselEl.current.scrollLeft -= carouselEl.current.offsetWidth;
    else if (dir === 'right') carouselEl.current.scrollLeft += carouselEl.current.offsetWidth;
    else throw new Error('invalid value for dir');
  };

  return (
    <div className={styles.carousel}>
      <div ref={carouselEl} className={styles.transformed}>
        {children}
      </div>
      <button style={{ top: `${posY}%` }} className={styles['nav-left']} aria-label="nav-left" type="button" onClick={() => handleClick('left')}><BsCaretLeft /></button>
      <button style={{ top: `${posY}%` }} className={styles['nav-right']} aria-label="nav-right" type="button" onClick={() => handleClick('right')}><BsCaretRight /></button>
    </div>
  );
};

Carousel.defaultProps = {
  posY: 50,
};

Carousel.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  posY: PropTypes.number,
};

export default Carousel;
