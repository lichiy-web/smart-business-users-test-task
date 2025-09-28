import type { StateUserEntity, UserEntity } from '../redux/api/types';

export const normalizeUser = (user: UserEntity): StateUserEntity => {
  const compositePhone = user.phone;
  let [phone, phoneExtension] = compositePhone.split(' ');
  phone = phone.replaceAll(/\D/g, '');
  phoneExtension = phoneExtension?.replaceAll(/\D/g, '') || '';
  user.email = user.email.toLowerCase();
  return { ...user, phone, phoneExtension };
};
