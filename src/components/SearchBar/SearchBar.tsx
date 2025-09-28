import css from './SearchBar.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../../redux/users/selectors';
import type { AppDispatch } from '../../redux/store';
import { setSearchQuery } from '../../redux/app/slice';
import { makeFilterOptions } from '../../utils/makeFilterOptions';
import type { StateUserEntity } from '../../redux/api/types';
import type { FilterOptionsState } from '@mui/material/useAutocomplete';
import { setFilteredUsers } from '../../redux/users/slice';
import { LuSearch } from 'react-icons/lu';
import InputAdornment from '@mui/material/InputAdornment';

const SearchBar: React.FC = () => {
  const userOptions = useSelector(selectUsers);
  const dispatch = useDispatch<AppDispatch>();
  return (
    userOptions.length && (
      <div className={css.SearchBarContainer}>
        <Autocomplete
          freeSolo
          autoComplete={true}
          autoFocus={true}
          className={css.searchAutocompleteRoot}
          options={userOptions}
          // onInputChange={(_, newInputValue) => {
          //   dispatch(setSearchQuery(newInputValue));
          // }}
          onChange={(_, value) => {
            const searchQuery =
              value === null ? '' : typeof value === 'string' ? value : value.name;
            dispatch(setSearchQuery(searchQuery));
            if (value instanceof Object) {
              dispatch(setFilteredUsers([value]));
            } else {
              dispatch(setFilteredUsers(userOptions));
            }
          }}
          getOptionLabel={option => (typeof option === 'string' ? option : option.name)}
          filterOptions={(
            options: StateUserEntity[],
            state: FilterOptionsState<StateUserEntity>
          ) => {
            const filter = makeFilterOptions<StateUserEntity>([
              'name',
              'username',
              'email',
              'phone',
            ]);
            const filteredOptions = filter(options, state);
            dispatch(setFilteredUsers(filteredOptions));
            return filteredOptions;
          }}
          renderInput={params => {
            console.log({ params });
            return (
              <TextField
                {...params}
                inputRef={params.InputProps.ref}
                placeholder="Search users..."
                variant="outlined"
                className={css.searchContainer}
                slotProps={{
                  input: {
                    startAdornment: (
                      <InputAdornment position="start">
                        <div className={css.searchIcon}>
                          <LuSearch />
                        </div>
                      </InputAdornment>
                    ),
                    endAdornment: params.InputProps.endAdornment,
                    className: css.searchAutocompleteInput,
                  },
                }}
              />
            );
          }}
        />
      </div>
    )
  );
};

export default SearchBar;
