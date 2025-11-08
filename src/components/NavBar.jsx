import CartWidget from './CartWidget';
import './NavBar.css'; // importamos su hoja de estilos

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <span className="navbar-logo">MarianoVega</span>
      </div>

      <nav className="navbar-links">
        <a href="#">Ofertas</a>
        <a href="#">Abarrotes</a>
        <a href="#">Limpieza</a>
        <a href="#">Mascotas</a>
        <a href="#">Contacto</a>
      </nav>

      <div className="navbar-right">
        <CartWidget count={0} />
      </div>
    </header>
  );
}

export default NavBar;
