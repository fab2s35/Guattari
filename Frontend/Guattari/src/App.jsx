import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import MainPage from './pages/mainPage/mainPage.jsx';
import AboutUs from './pages/aboutUs/aboutUs.jsx';

function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/mainPage" element={<MainPage />} />
        <Route path="/aboutUs" element={<AboutUs/>} />
      </Routes>


      <Footer />
    </Router>
  );
}

export default App;
