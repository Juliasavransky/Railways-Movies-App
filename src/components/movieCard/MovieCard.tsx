import React, { useState } from 'react';
import style from './MovieCard.module.css';
import favoriteSvg from '../../utils/icons/favorite.svg';
import cart from '../../utils/icons/shopping_cart.svg';
import { Link } from 'react-router-dom';
import MovieOverView from '../movieOverView/MovieOverView';
import { useAppDispatch } from '../../utils/hooks/hooks';
import { toggleFavorite } from '../../features/movies/favoritesSlice';
interface MovieCardProps {
  key?: number;
  id?: number;
  title?: string;
  summary?: string;
  img?: string;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  summary,
  img,
  id,
}: MovieCardProps) => {
  const [isModelOpen, setIsModelOpen] = useState<boolean>(false);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const onOpenModel = () => {
    setIsModelOpen(true);
  };
  const onCloseModal = () => {
    setIsModelOpen(false);
    console.log('close');
  };
  const dispatch = useAppDispatch();

  const favoriteHandler = () => {
    //@ts-ignore
    dispatch(toggleFavorite({ movieTitle: title, movieId: id }));
    console.log('favorite');
    setIsFavorite((isFavorite) => !isFavorite);
  };

  return (
    <>
      <div className={style.container} key={id!}>
        <img
          src={`https://image.tmdb.org/t/p/w500/${img}`}
          alt='Movie Poster'
        />
        <div>{title}</div>
        <Link to={`/movieOverView/${id}`} className={style.paragraph}>
          <div onClick={onOpenModel}> Movie Summary: {summary}</div>
        </Link>
        <div className={style.buttons}>
          {isFavorite ? (
            <img
              style={{
                filter:
                  'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)',
              }}
              onClick={favoriteHandler}
              src={favoriteSvg}
              alt='favorite icon'
            />
          ) : (
            <img
              onClick={favoriteHandler}
              src={favoriteSvg}
              alt='favorite icon'
            />
          )}

          <Link to={`/selected/${id}`}>
            <img src={cart} alt='cart icon' />
          </Link>
        </div>
      </div>

      {isModelOpen ? (
        //@ts-ignore
        <MovieOverView onCloseModal={onCloseModal} isModalOpen={isModelOpen!} />
      ) : null}
    </>
  );
};

export default MovieCard;
