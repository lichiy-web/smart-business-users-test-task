import clsx from 'clsx';
import css from './StyledNavLink.module.css';
import { NavLink, type NavLinkProps, type NavLinkRenderProps } from 'react-router-dom';

const StyledNavLink: React.FC<NavLinkProps> = ({ to, children, ...props }) => {
  const activeToggle = ({ isActive }: NavLinkRenderProps) => clsx(css.link, isActive && css.active);
  return (
    <NavLink {...props} to={to} className={activeToggle}>
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
