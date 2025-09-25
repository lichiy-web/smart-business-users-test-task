import css from './Logo.module.css';

const Logo: React.FC = () => {
  return (
    <div className={css.logoContainer}>
      <h2>Logo</h2>
    </div>
  );
};

export default Logo;
