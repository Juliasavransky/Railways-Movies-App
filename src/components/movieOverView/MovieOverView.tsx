import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  asyncFetchSelectedMoviesFromApi,
  getSelectedMovie,
  removeSelectedMovie,
} from '../../features/movies/selectedSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Close from '../../utils/icons/close.svg';
import style from './MovieOverView.module.css';

interface MovieOverViewProps {
  onCloseModal?: () => void;
  isModalOpen?: boolean;
  children?: React.ReactNode;
}

const MovieOverView: React.FC = ({
  onCloseModal,
  isModalOpen,
  children,
}: MovieOverViewProps) => {
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  const params = useParams();
  const id = Number(params.id);

  const dispatch = useDispatch();

  const selectedMovieDetails = useSelector(getSelectedMovie);
  const detailsForRender = selectedMovieDetails.selectedMovie;

  const onCloseHandler = () => {
    navigate('/');
    onCloseModal!;
  };
  useEffect(() => {
    setLoading(true);
    //@ts-ignore
    dispatch(asyncFetchSelectedMoviesFromApi(id));
    setLoading(false);
    return () => {
      dispatch(removeSelectedMovie);
    };
  }, [dispatch, id]);

  const overLayRef = useRef(null);

  const handleOverLayClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    if (e.target === overLayRef.current) {
      onCloseModal!;
    }
  };
  return (
    <>
      <div
        className={style.container__overlay}
        ref={overLayRef}
        onClick={handleOverLayClick}
      >
        <div className={style.container__content}>
          <div className={style.container__title}>
            <div className={style.container__titleText}>The movie details</div>
            <img
              className={style.container__btn}
              onClick={onCloseHandler}
              src={Close}
              alt='close icon'
            />
          </div>

          <div className={style.container__summery}>
            <div>Summery: {detailsForRender.overview}</div>
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
export default MovieOverView;
