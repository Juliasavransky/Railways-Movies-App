import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ThankYouForBuying = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000);

    return () => clearTimeout(timer);
  }, [navigate]);
  return <h1>Thank You For Buying </h1>;
};

export default ThankYouForBuying;
