import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import {
  FavoriteMovie,
  toggleFavorite,
} from '../../features/movies/favoritesSlice';
import favoriteSvg from '../../utils/icons/favorite.svg';
import cart from '../../utils/icons/shopping_cart.svg';
import { useNavigate } from 'react-router-dom';
import { MoviesPurchase } from '../../features/movies/purchaseSlice';
import style from './UserHistory.module.css';

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
      <div className={style.container}>
        <div>
          <h2 className={style.title}> My favorite</h2>
          <div className={style.table}>
            <div>
              {filteredFavoritesMovies?.map((favorite) => (
                <div key={favorite.movieId} className={style.row}>
                  <div className={style.line}>
                    <img
                      className={style.icon}
                      style={{
                        filter:
                          'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)',
                      }}
                      onClick={() =>
                        removeFromFavorites(
                          favorite.movieTitle,
                          favorite.movieId
                        )
                      }
                      src={favoriteSvg}
                      alt='favorite icon'
                    />
                    <div> Movie title:{favorite.movieTitle}</div>
                  </div>

                  <div className={style.line}>
                    <img
                      className={style.icon}
                      onClick={() => handlePurchase(favorite.movieId)}
                      src={cart}
                      alt='cart icon'
                    />
                    <div>bay this movie</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className={style.title}> Movies I've already seen</h2>
          <div className={style.table}>
            <div>
              {moviePurchase.map((purchase) => (
                <div key={purchase.movieId} className={style.row}>
                  <div className={(style.title, style.purchase)}>
                    Date of purchase: {purchase.dateOfPurchase}
                  </div>
                  <div className={(style.title, style.purchase)}>
                    Movie title: {purchase.movieTitle}
                  </div>
                  <div className={(style.title, style.purchase)}>
                    Amount of tickets: {purchase.ticketsAmount}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserHistory;
