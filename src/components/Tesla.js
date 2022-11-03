/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-array-index-key */
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Slider from 'react-slick';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
import { getCars } from '../redux/cars/cars';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Tesla() {
  const [slide, setSlide] = useState('');
  const cars = useSelector((state) => state.cars);

  const dispatch = useDispatch();

  useEffect(() => {
    if (cars.length === 0) {
      dispatch(getCars());
    }
  }, [cars.length, dispatch]);

  const sliderSettings = {
    arrows: false,
    slidesToScroll: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 1090,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="content">
      <div className="slides-container">
        <Slider ref={setSlide} {...sliderSettings}>
          {cars.map((car, index) => (
            <div key={index} className="slide-box">
              <Link to={`/cars/${car.id}`} className="car-link"><img alt={car.model} src={car.image} /></Link>
              <h2 className="car-name">
                {' '}
                TESLA
                {' '}
                {car.model}
              </h2>
              <p className="dots">....................</p>
              <div className="description">
                <h5>{car.description}</h5>
              </div>
              <div className="icons">
                <div className="icon-border">
                  <FontAwesomeIcon icon={faFacebookF} />
                </div>
                <div className="icon-border">
                  <FontAwesomeIcon icon={faTwitter} />
                </div>
                <div className="icon-border">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <div className="arrows">
        <div className="button-boxleft">
          <button type="button" onClick={slide?.slickPrev}>
            <FontAwesomeIcon icon={faArrowCircleLeft} />
          </button>
        </div>
        <div className="button-boxright">
          <button type="button" onClick={slide?.slickNext}>
            <FontAwesomeIcon icon={faArrowCircleRight} />
          </button>
        </div>
      </div>
    </div>
  );
}
