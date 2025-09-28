import { Link } from 'react-router-dom';
import css from './HomePage.module.css';
import { GiSparkles } from 'react-icons/gi';
import { FaUsersBetweenLines } from 'react-icons/fa6';
import { FaFlagCheckered } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa6';
import clsx from 'clsx';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { fetchUsers } from '../../redux/users/operations';
import { selectUsers } from '../../redux/users/selectors';
import { selectIsLoading } from '../../redux/app/selectors';
import Loader from '../../components/Loader/Loader';
import { unsetError } from '../../redux/app/slice';

const HomePage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    const abortController = new AbortController();
    dispatch(fetchUsers({ signal: abortController.signal }));

    return () => abortController.abort();
  }, [dispatch]);

  const users = useSelector(selectUsers);
  const usersTotal = users.length;
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.homePageConainer}>
      <Loader isLoading={isLoading} />
      <section className={clsx(css.homeSection, css.welcomeSection)}>
        <h2 className={clsx(css.welcomeHeader, css.sectionHeader)}>
          <span className={clsx(css.homeIcon, css.welcomeIcon)}>
            <GiSparkles />
          </span>
          Hello, Welcome!
        </h2>
        <p className={clsx(css.text, css.welcomeText)}>
          Welcome to your dashboard. This is a simple application where you can manage and view user
          information. Get started by exploring the users section or learn more about the features
          available.
        </p>
      </section>
      <section className={clsx(css.homeSection, css.actionSection)}>
        <div className={css.actionCard}>
          <h3 className={clsx(css.sectionHeader, css.actionHeader)}>
            <span className={css.homeIcon}>
              <FaUsersBetweenLines />
            </span>
            User Management
          </h3>
          <p className={css.text}>
            View, search, and manage user information including names, usernames, emails, and phone
            numbers.
          </p>
          <Link
            to="/users"
            onClick={() => {
              dispatch(unsetError());
            }}
            className={clsx(css.link, css.toUsersLink)}
          >
            Go to users
            <div className={css.homeIcon}>
              <FaArrowRight />
            </div>
          </Link>
        </div>
        <div className={css.actionCard}>
          <h3 className={clsx(css.sectionHeader, css.actionHeader)}>
            <span className={css.homeIcon}>
              <FaFlagCheckered />
            </span>
            Getting Started
          </h3>
          <p className={css.text}>
            Learn how to use this application effectively and make the most of its features.
          </p>
          <ul className={css.featuresList}>
            <li className={css.feature}>Search users by name, username, email, or phone</li>
            <li className={css.feature}>View detailed user information in an organized table</li>
            <li className={css.feature}>Access user actions through the menu options</li>
            <li className={css.feature}>Navigate easily between different sections</li>
          </ul>
        </div>
      </section>
      <section className={clsx(css.homeSection, css.counterSection)}>
        <div className={css.counterCard}>
          <div className={css.paramValue}>{usersTotal}</div>
          <div className={css.paramName}>Total users</div>
        </div>
        <div className={css.counterCard}>
          <div className={css.paramValue}>100%</div>
          <div className={css.paramName}>Searchable</div>
        </div>
        <div className={css.counterCard}>
          <div className={css.paramValue}>4</div>
          <div className={css.paramName}>By data Fields</div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
