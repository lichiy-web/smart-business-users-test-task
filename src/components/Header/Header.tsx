import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import css from './Header.module.css';

const Header: React.FC = () => {
  return (
    <nav className={css.headerNavContainer}>
      <h2>Header</h2>
      <Logo />
      <NavBar />
    </nav>
  );
};

export default Header;
