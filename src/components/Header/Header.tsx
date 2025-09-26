import Logo from '../Logo/Logo';
import NavBar from '../NavBar/NavBar';
import css from './Header.module.css';

const Header: React.FC = () => {
  return (
    <header className={css.headerContainer}>
      <Logo />
      <NavBar />
    </header>
  );
};

export default Header;
