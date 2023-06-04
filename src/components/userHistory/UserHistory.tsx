import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import {
  FavoriteMovie,
  toggleFavorite,
} from '../../features/movies/favoritesSlice';
import favoriteSvg from '../../utils/icons/favorite.svg';
import cart from '../../utils/icons/shopping_cart.svg';
import { useNavigate } from 'react-router-dom';
import { MoviesPurchase } from '../../features/movies/purchaseSlice';
import { useEffect } from 'react';

function UserHistory() {
  const favoriteMovies = useAppSelector(
    (state) => state.favoriteMovies.favoriteMovies
  );
  const moviePurchase = useAppSelector(
    (state) => state.moviesPurchase.moviesPurchase
  );

  function filterFavoriteMovies(
    moviePurchase: MoviesPurchase[],
    favoriteMovies: FavoriteMovie[]
  ): FavoriteMovie[] {
    const movieIds = moviePurchase.map((movie) => movie.movieId);

    const filteredFavorites = favoriteMovies.filter(
      (movie) => !movieIds.includes(movie.movieId)
    );

    console.log(filteredFavorites);
    return filteredFavorites;
  }
  const filteredFavoritesMovies = filterFavoriteMovies(
    moviePurchase,
    favoriteMovies
  );

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const removeFromFavorites = (movieTitle: string, movieId: number) => {
    dispatch(toggleFavorite({ movieTitle, movieId, isFavorite: false }));
  };

  const handlePurchase = (id: number) => {
    navigate(`/selected/${id}`);
  };

  return (
    <>
      <div>
        <div style={{ display: 'flex' }}>
          My favorite !!!
          {filteredFavoritesMovies?.map((favorite) => (
            <li>
              <ul>
                <div>{favorite.movieTitle}</div>
                <img
                  style={{
                    filter:
                      'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)',
                  }}
                  onClick={() =>
                    removeFromFavorites(favorite.movieTitle, favorite.movieId)
                  }
                  src={favoriteSvg}
                  alt='favorite icon'
                />
                <div>bay this movie now</div>
                <img
                  onClick={() => handlePurchase(favorite.movieId)}
                  src={cart}
                  alt='cart icon'
                />
              </ul>
            </li>
          ))}
        </div>

        <div style={{ display: 'flex' }}>
          the movie i been to
          {moviePurchase.map((purchase) => (
            <li style={{ display: 'flex' }}>
              <ul>
                <div>{purchase.dateOfPurchase}</div>
                <div>{purchase.movieTitle}</div>
                <div>{purchase.ticketsAmount}</div>
              </ul>
            </li>
          ))}
        </div>
      </div>
    </>
  );
}

export default UserHistory;
