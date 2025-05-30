import './mainPage.css';
import MainPageImg from '../../../img/imgPrivate/Img-MainPage/MainPage-Img.jpg'; //../../img/Img-MainPage/MainPage-Img.jpg
import MainPageImg2 from '../../../img/imgPrivate/Img-MainPage/MainPage-Img2.webp';
import MainPageImg3 from '../../../img/imgPrivate/Img-MainPage/MainPageImg3.png';
import NavAdmin from '../../../components/HeaderPrivate/Header'

const HomeSection = () => {
  return (
    <>
    <NavAdmin/>

    <div className="home-section">
      <div className="layout-container">
        <div className="left-column">
          <div className="top-image">
            <img src={MainPageImg} alt="Tocadiscos" className="main-image" />
            <div className="overlay-text">
              Guattari siempre busca <br /> la comodidad y un gusto <br /> visual.
            </div>
          </div>

          <div className="bottom-image">
            <img src={MainPageImg3} alt="Guattari" className="main-image" />
          </div>
        </div>

        <div className="right-column">
          <img src={MainPageImg2} alt="Habitación acogedora" className="main-image" />
        </div>
      </div>
    </div>
    </>
  );
};

export default HomeSection;



