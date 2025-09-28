import css from './Loader.module.css';
import { ThreeCircles } from 'react-loader-spinner';

export interface LoaderProps {
  isLoading?: boolean;
  strokeColor?: string;
}

const Loader: React.FC<LoaderProps> = ({ isLoading = true, strokeColor = '#0B44CD' }) => {
  return (
    <div className={css.loader}>
      <ThreeCircles
        visible={isLoading}
        height="100%"
        width="100%"
        color={strokeColor}
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};
export default Loader;
