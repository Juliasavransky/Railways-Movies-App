import style from './Header.module.css';
import { Link } from 'react-router-dom';
import train from '../../utils/icons/train.svg';

function Header() {
  const linkStyle = {
    textDecoration: 'none',
    color: ' #e9c46a',
  };
  return (
    <>
      <nav className={style.nav}>
        <div className={style.nav_name}>
          <img className={style.logo} src={train} alt='train' />
          <div> Railways-Movies</div>
        </div>

        <div className={style.nav_list}>
          <Link style={linkStyle} to='/'>
            Popular movies
          </Link>
          <Link style={linkStyle} to='/selected/:id'>
            Buying tickets
          </Link>
          <Link style={linkStyle} to='/history'>
            My History
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Header;
