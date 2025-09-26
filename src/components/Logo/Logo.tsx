import css from './Logo.module.css';
import { LuWorkflow } from 'react-icons/lu';

const Logo: React.FC = () => {
  return (
    <div className={css.logoContainer}>
      <LuWorkflow className={css.logoIcon} />
      <span className={css.logoUser}>User</span>
      <span className={css.logoFlow}>Flow</span>
    </div>
  );
};

export default Logo;
