import { createFilterOptions } from '@mui/material/Autocomplete';
import type { FilterOptionsState } from '@mui/material/useAutocomplete';

/**
 * Return a custom filterOptions for MUI Autocomplete
 * @param {string[]} keys - key list to search
 */
export const makeFilterOptions = <T extends Record<string, unknown>>(keys: (keyof T)[]) => {
  const baseFilter = createFilterOptions<T>({
    stringify: option =>
      keys
        .map(key => String(option[key]))
        .join(' ')
        .toLowerCase(),
  });

  return (options: T[], state: FilterOptionsState<T>) => baseFilter(options, state);
};
