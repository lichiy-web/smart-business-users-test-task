import css from './Header.module.css';

const Header: React.FC = () => {
  return (
    <nav className={css.headerNavContainer}>
      <h2>Header</h2>
    </nav>
  );
};

export default Header;
