
function Header(){

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
        <a className="navbar-brand" href="#">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">Features</a>
            <a className="nav-item nav-link" href="#">Pricing</a>
            <a className="nav-item nav-link disabled" href="#">Disabled</a>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .custom-navbar {
          background-color: #923922 !important;
          width: 100%;
        }
        .navbar-light .navbar-nav .nav-link {
          color: white; /* Cambia el color de los enlaces a blanco */
        }
        .navbar-light .navbar-nav .nav-link.active {
          color: yellow; /* Color del enlace activo */
        }
        .navbar-light .navbar-toggler-icon {
          background-color: white; /* Cambia el color del icono de la hamburguesa */
        }
      `}</style>
    </>
  );
}

export default Header;