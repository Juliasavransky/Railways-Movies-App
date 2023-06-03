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
  return (
    <>
      <div className='container'>
        <h1>Thank You For Buying!</h1>
        <p className='message'>We appreciate your purchase.</p>
        <ul>
          <li>Item 1: Product A</li>
          <li>Item 2: Product B</li>
          <li>Item 3: Product C</li>
        </ul>
        <button className='button'>Continue Shopping</button>
      </div>
      <footer className='footer'>
        &copy; 2023 Your Company Name. All rights reserved.
      </footer>
    </>
  );
};

export default ThankYouForBuying;
