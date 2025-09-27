export const getAbbrFromName = (name: string): string => {
  const nameParts = name.split(' ').map(part => part.trim());
  const partsToExclude = ['mr', 'mrs', 'ms', 'von', 'de', 'hr', 'fr', 'frl'];
  const partsToInclude = nameParts.filter(
    part => !partsToExclude.includes(part.toLocaleLowerCase().replaceAll(/\W/g, ''))
  );
  const abbr = partsToInclude.map(part => part[0].toUpperCase()).join('');
  return abbr;
};
