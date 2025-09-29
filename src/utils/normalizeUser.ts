import type { StateUserEntity, UserEntity } from '../redux/api/types';
import { extractPhoneFrom } from './extractPhonefrom';

export const normalizeUser = (user: UserEntity): StateUserEntity => {
  const compositePhone = user.phone;
  let [phone, phoneExtension] = compositePhone.split(' ');
  phone = extractPhoneFrom(phone);
  phoneExtension = extractPhoneFrom(phoneExtension);
  user.email = user.email.toLowerCase();
  return { ...user, phone, phoneExtension };
};
