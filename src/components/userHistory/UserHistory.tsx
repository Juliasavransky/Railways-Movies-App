import { useAppDispatch, useAppSelector } from '../../utils/hooks/hooks';
import { toggleFavorite } from '../../features/movies/favoritesSlice';
import favoriteSvg from '../../utils/icons/favorite.svg';
import cart from '../../utils/icons/shopping_cart.svg';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllPurchases } from '../../features/movies/purchaseSlice';

function UserHistory() {
  const favoriteMovies = useAppSelector(
    (state) => state.favoriteMovies.favoriteMovies
  );
  const moviePurchase = useAppSelector(
    (state) => state.moviesPurchase.moviesPurchase
  );
  const navigate = useNavigate();
  dispatch = useDispatch();

  // const removeFromFavorites=(movieTitle, movieId)=>{
  //   dispatch(toggleFavorite({movieTitle,movieId })
  // }

  const handlePurchase = (id) => {
    navigate(`/selected/${id}`);
  };
  return (
    <>
      <div>
        <div style={{ display: 'flex' }}>
          My favorite !!!
          {favoriteMovies.map((favorite) => (
            <li>
              <ul>
                <div>{favorite.movieTitle}</div>
                <img
                  style={{
                    filter:
                      'invert(27%) sepia(51%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%)',
                  }}
                  onClick={() =>
                    removeFromFavorites(favorite.title, favorite.id)
                  }
                  src={favoriteSvg}
                  alt='favorite icon'
                />
                <div>bay this movie now</div>
                <img
                  onClick={() => handlePurchase(favorite.id)}
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
