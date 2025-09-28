import css from './NavBar.module.css';
import StyledNavLink from '../StyledNavLink/StyledNavLink';
import { FiUsers } from 'react-icons/fi';
import { FiHome } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { unsetError } from '../../redux/app/slice';

const NavBar: React.FC = () => {
  const dispatch = useDispatch();
  return (
    <div className={css.navBarContainer}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <StyledNavLink
            to="/"
            onClick={() => {
              dispatch(unsetError());
            }}
          >
            <FiHome />
            <span className={css.homeLabel}>Home</span>
          </StyledNavLink>
        </li>
        <li className={css.navItem}>
          <StyledNavLink
            to="users"
            onClick={() => {
              dispatch(unsetError());
            }}
          >
            <FiUsers />
            <span className={css.usersLabel}>Users</span>
          </StyledNavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
