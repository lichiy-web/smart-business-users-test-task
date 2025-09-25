import clsx from 'clsx';
import css from './StyledNavLink.module.css';
import { NavLink, type NavLinkRenderProps } from 'react-router-dom';

export interface StyledNavLinkProps {
  to: string;
  children?: React.ReactNode;
}

const StyledNavLink: React.FC<StyledNavLinkProps> = ({ to, children }) => {
  const activeToggle = ({ isActive }: NavLinkRenderProps) => clsx(css.link, isActive && css.active);
  return (
    <NavLink to={to} className={activeToggle}>
      {children}
    </NavLink>
  );
};

export default StyledNavLink;
