import React from 'react';
import style from './MovieCard.module.css';
import favorite from '../../utils/icons/favorite.svg';
import cart from '../../utils/icons/shopping_cart.svg';

interface MovieCardProps {
  key: number;
  title: string;
  summary: string;
  img: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ key, title, summary, img }) => {
  return (
    <>
      <div className={style.container} key={key}>
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
      </div>
    </>
  );
};

export default MovieCard;
