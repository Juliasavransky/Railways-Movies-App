import React from 'react';
import style from './MovieCard.module.css';
import favorite from '../../utils/icons/favorite.svg';
import cart from '../../utils/icons/shopping_cart.svg';
import { Link } from 'react-router-dom';

interface MovieCardProps {
  key: number;
  id: number;
  title: string;
  summary: string;
  img: string;
  index: number;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  summary,
  img,
  id,
  index,
}) => {
  return (
    <>
      <div className={style.container} key={id + index}>
        <Link to={`/selected/${id}`}>
          <img
            src={`https://image.tmdb.org/t/p/w500/${img}`}
            alt='Movie Poster'
          />
          <div>{title}</div>
          <div className={style.paragraph}>Movie Summary: {summary}</div>
          <div className={style.buttons}>
            <img src={favorite} alt='favorite icon' />
            <img src={cart} alt='cart icon' />
          </div>
        </Link>
      </div>
    </>
  );
};

export default MovieCard;
