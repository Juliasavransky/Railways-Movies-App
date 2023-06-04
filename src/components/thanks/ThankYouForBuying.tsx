import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import style from './ThankYouForBuying.module.css';

const ThankYouForBuying = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return (
    <>
      <div className={style.container}>
        <h1>Thank You For Buying!</h1>
        <p className={style.message}>We appreciate your purchase.</p>
      </div>
    </>
  );
};

export default ThankYouForBuying;
