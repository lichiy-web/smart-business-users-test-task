import type { StateUserEntity } from '../../redux/api/types';
import { getAbbrFromName } from '../../utils/getAbbrFromName';
import css from './UserItem.module.css';
import { Link } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { LuMail } from 'react-icons/lu';
import { LuPhone } from 'react-icons/lu';
import clsx from 'clsx';
import { formatPhone } from '../../utils/formatPhone';

export interface UserItemProps {
  user: { id: number | null } & Pick<StateUserEntity, 'name' | 'username' | 'email' | 'phone'> &
    Partial<Pick<StateUserEntity, 'phoneExtension'>>;
}

const UserItem: React.FC<UserItemProps> = ({ user }) => {
  console.log('In UserItem! =>', { user });
  const { id, name, username, email, phone, phoneExtension } = user;
  const nameAbbr = getAbbrFromName(name);
  return (
    <li className={css.userItemContainer}>
      <Link to={`/user/${id}`} className={css.userItem}>
        <div className={clsx(css.name, css.userTabCol)}>
          <span className={css.nameAbbr}>{nameAbbr}</span>
          {name}
        </div>
        <div className={clsx(css.username, css.userTabCol)}>
          <div className={css.userIcon}>
            <FiUser />
          </div>
          {username}
        </div>
        <div className={clsx(css.email, css.userTabCol)}>
          <div className={css.userIcon}>
            <LuMail />
          </div>
          {email}
        </div>
        <div className={clsx(css.phoneContainer, css.userTabCol)}>
          <div className={css.userIcon}>
            <LuPhone />
          </div>
          <div className={css.phonePartsBox}>
            <div className={css.phone}>{formatPhone(phone)}</div>
            {!!phoneExtension && (
              <div className={css.phoneExtension}>
                <span className={css.phoneExtensionHeder}>Ext:</span> {phoneExtension}
              </div>
            )}
          </div>
        </div>
      </Link>
    </li>
  );
};

export default UserItem;
