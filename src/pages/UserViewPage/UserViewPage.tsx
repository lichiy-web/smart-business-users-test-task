import { Link, useNavigate, useParams } from 'react-router-dom';
import css from './UserViewPage.module.css';
import { fetchUser } from '../../redux/users/operations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch } from '../../redux/store';
import { resetUsers } from '../../redux/users/slice';
import { selectCurrentUser } from '../../redux/users/selectors';
import { FaArrowLeft } from 'react-icons/fa6';
import clsx from 'clsx';
import { getAbbrFromName } from '../../utils/getAbbrFromName';
import { LuMail } from 'react-icons/lu';
import { LuGlobe } from 'react-icons/lu';
import { LuPhone } from 'react-icons/lu';
import { LuMapPin } from 'react-icons/lu';
// import { LuExternalLink } from 'react-icons/lu';
import { LuBuilding } from 'react-icons/lu';
import { extractPhoneFrom } from '../../utils/extractPhonefrom';
import { formatPhone } from '../../utils/formatPhone';

const UserViewPage: React.FC = () => {
  const userId = Number(useParams().userId);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(resetUsers());
    const abortController = new AbortController();
    dispatch(fetchUser({ signal: abortController.signal, userId }))
      .unwrap()
      .catch(error => {
        console.log({ error });
        if (error === 'ERR_BAD_REQUEST') navigate('/404', { replace: true });
      });

    return () => abortController.abort();
  }, [dispatch, navigate, userId]);

  const currentUser = useSelector(selectCurrentUser);
  if (!currentUser) return null;

  // console.log({ currentUser });
  const {
    name,
    username,
    email,
    address: {
      street,
      suite,
      city,
      zipcode,
      // geo: { lat, lng },
    },
    phone,
    phoneExtension,
    website,
    company: { name: companyName, catchPhrase, bs },
  } = currentUser;

  const nameAbbr = getAbbrFromName(name);

  return (
    <div className={css.userViewPageContainer}>
      <Link to="/users" className={css.backToLink}>
        <div className={clsx(css.userViewIcon, css.backToIcon)}>
          <FaArrowLeft />
        </div>
        Back to Users
      </Link>
      <div className={css.profileContainer}>
        {/* Personality Info Section*/}
        <section className={clsx(css.profileSection, css.personalityInfo)}>
          <div className={css.nameAbbr}>{nameAbbr}</div>
          <div className={css.nameBox}>
            <div className={css.names}>
              <h2 className={css.name}>{name}</h2>
              <span className={css.username}>@{username}</span>
            </div>
            <div className={css.companyName}>{companyName}</div>
            <div className={css.catchPhrase}>
              "<em>{catchPhrase}</em>"
            </div>
          </div>
        </section>
        {/* Details Section */}
        <section className={clsx(css.profileSection, css.detailsSection)}>
          {/* Contacts Information */}
          {/* <div className={clsx(css.profileSubsection, css.contactInfoBox)}> */}
          <h4 className={css.sectionHeader}>Contact Information</h4>
          <div className={css.contactInfo}>
            <div className={css.contactItem}>
              <div className={css.userViewIcon}>
                <LuMail />
              </div>
              <div className={css.contactPair}>
                <div className={css.contactType}>Email</div>
                <div className={css.contactValue}>{email}</div>
              </div>
            </div>
            <div className={css.contactItem}>
              <div className={css.userViewIcon}>
                <LuPhone />
              </div>
              <div className={css.contactPair}>
                <div className={css.contactType}>Phone</div>
                <div className={css.contactValue}>
                  <div className={css.phone}>{formatPhone(phone)}</div>
                  <div className={css.phoneExtension}>
                    <span className={css.phoneExtensionPrefix}>Ext:</span>
                    {' ' + phoneExtension}
                  </div>
                </div>
              </div>
            </div>
            <div className={css.contactItem}>
              <div className={css.userViewIcon}>
                <LuGlobe />
              </div>
              <div className={css.contactPair}>
                <div className={css.contactType}>Website</div>
                <div className={css.contactValue}>{website}</div>
              </div>
            </div>
            <div className={css.contactItem}>
              <div className={css.userViewIcon}>
                <LuMapPin />
              </div>
              <div className={css.contactPair}>
                <div className={css.contactType}>Address</div>
                <div className={clsx(css.contactValue, css.addressValue)}>
                  {[street, suite, city, zipcode].join(', ')}
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </section>
        {/* Company Info Section */}
        <section className={clsx(css.profileSection, css.companySection)}>
          <h4 className={css.sectionHeader}>Company Information</h4>
          <div className={css.contactItem}>
            <div className={css.userViewIcon}>
              <LuBuilding />
            </div>
            <div className={css.contactPair}>
              <div className={css.contactType}>Company</div>
              <div className={css.contactValue}>{companyName}</div>
            </div>
          </div>
          <div className={css.contactItem}>
            <div className={clsx(css.contactPair, css.businessFocus)}>
              <div className={css.contactType}>Business Focus</div>
              <div className={css.contactValue}>{bs}</div>
            </div>
          </div>
        </section>
        {/* Buttons section */}
        <section className={clsx(css.profileSection, css.contactActions)}>
          <a href={`mailto:${email}`} className={clsx(css.contactBtn, css.mailBtn)}>
            <span className={css.userViewIcon}>
              <LuMail />
            </span>
            Send email
          </a>
          <a href={`tel:${extractPhoneFrom(phone)}`} className={css.contactBtn}>
            <span className={css.userViewIcon}>
              <LuPhone />
            </span>
            Call
          </a>
          <a href={website} className={css.contactBtn}>
            <span className={css.userViewIcon}>
              <LuGlobe />
            </span>
            Visit Website
          </a>
        </section>
      </div>
    </div>
  );
};

export default UserViewPage;
