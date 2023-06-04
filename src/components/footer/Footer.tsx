import style from './Footer.module.css';

function Footer() {
  return (
    <>
      <footer className={style.footer}>
        <li className={style.li}>
          <p>&copy; 2023 Julia's Movie Website</p>
        </li>
        <li className={style.li}>
          <div>Address: Kern ha-ysod Bat-Yam</div>
        </li>
        <li className={style.li}>
          <div>Phone: 054-4772571</div>
        </li>
      </footer>
    </>
  );
}

export default Footer;
