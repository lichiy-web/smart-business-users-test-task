export const formatPhone = (phone: string): string => {
  console.log({ phone });
  const formatedPhone =
    phone.length < 7
      ? phone
      : phone.replace(
          /^(\d*(?=\d{10}))?(\d{3}(?=\d{5}))?(\d{3})(\d{4})$/,
          (_, countryId, providerId, phPart1, phPart2) => {
            console.log({ countryId, providerId, phPart1, phPart2 });
            const hasCountryId = Boolean(countryId);
            const hasProviderId = Boolean(providerId);
            return `${hasCountryId ? '+' + countryId : ''}${
              hasProviderId ? ' (' + providerId + ') ' : ''
            }${phPart1}-${phPart2}`;
          }
        );
  return formatedPhone;
};
