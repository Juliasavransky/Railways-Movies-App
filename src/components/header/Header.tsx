import style from './Header.module.css';
import { Link } from 'react-router-dom';
import train from '../../utils/icons/train.svg';

function Header() {
  return (
    <>
      <nav className={style.nav}>
        <div className={style.nav_name}>
          <img src={train} alt='train' />
          Railways-Movies
        </div>

        <div className={style.nav_list}>
          <Link to='/'>Home Gallery</Link>
          <Link to='/selected/:id'>Tickets For Movie</Link>
          <Link to='/history'>My History</Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
