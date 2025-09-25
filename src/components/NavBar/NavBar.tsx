import css from './NavBar.module.css';
import StyledNavLink from '../StyledNavLink/StyledNavLink';

const NavBar: React.FC = () => {
  return (
    <div className={css.navBarContainer}>
      <h2>NavBar</h2>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <StyledNavLink to="/">Home</StyledNavLink>
        </li>
        <li className={css.navItem}>
          <StyledNavLink to="users">Users</StyledNavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
