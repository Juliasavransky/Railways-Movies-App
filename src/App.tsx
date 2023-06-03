import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import HomePage from './components/homePage/HomePage';
import Footer from './components/footer/Footer';
import MovieDetails from './components/movieDetails/MovieDetails';
import UserHistory from './components/userHistory/UserHistory';
import MovieOverView from './components/movieOverView/MovieOverView';

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/selected/:id' element={<MovieDetails />} />
        <Route path='/history' element={<UserHistory />} />
        <Route path='/movieOverView/:id' element={<MovieOverView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
