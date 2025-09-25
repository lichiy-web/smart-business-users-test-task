import css from './Loader.module.css';

export interface LoaderProps {
  isLoading?: boolean;
}

const Loader: React.FC<LoaderProps> = ({ isLoading = false }) => {
  return (
    <div className={css.loaderContainer}>
      {isLoading && <div>Loadding...</div>}
    </div>
  );
};

export default Loader;
