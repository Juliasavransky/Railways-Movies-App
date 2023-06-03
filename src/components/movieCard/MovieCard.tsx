//@ts-nocheck
import React, { useState } from 'react';
import style from './MovieCard.module.css';
import favorite from '../../utils/icons/favorite.svg';
import cart from '../../utils/icons/shopping_cart.svg';
import { Link } from 'react-router-dom';
import MovieOverView from '../movieOverView/MovieOverView';

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
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);

  const onOpenModel = () => {
    setIsModelOpen(true);
  };
  const onCloseModal = () => {
    setIsModelOpen(false);
    console.log('close');
  };
  return (
    <>
      <div className={style.container} key={id + index}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt='Movie Poster'
        />
        <div>{title}</div>
        <Link to={`/movieOverView/${id}`} className={style.paragraph}>
          <div onClick={onOpenModel}> Movie Summary: {summary}</div>
        </Link>
        <div className={style.buttons}>
          <img src={favorite} alt='favorite icon' />
          <Link to={`/selected/${id}`}>
            <img src={cart} alt='cart icon' />
          </Link>
        </div>
      </div>

      {isModelOpen ? (
        <MovieOverView onCloseModal={onCloseModal} isModalOpen={isModelOpen!} />
      ) : null}
    </>
  );
};

export default MovieCard;
