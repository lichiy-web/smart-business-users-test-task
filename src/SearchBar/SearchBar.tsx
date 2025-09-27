import css from './SearchBar.module.css';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsers } from '../redux/users/selectors';
import type { AppDispatch } from '../redux/store';
import { setSearchQuery } from '../redux/app/slice';
import { makeFilterOptions } from '../utils/makeFilterOptions';
import type { StateUserEntity } from '../redux/api/types';
import type { FilterOptionsState } from '@mui/material/useAutocomplete';
import { setFilteredUsers } from '../redux/users/slice';

const SearchBar: React.FC = () => {
  const userOptions = useSelector(selectUsers);
  const dispatch = useDispatch<AppDispatch>();
  return (
    <div className={css.SearchBarContainer}>
      <Autocomplete
        freeSolo
        options={userOptions}
        onInputChange={(event, newInputValue) => {
          dispatch(setSearchQuery(newInputValue));
        }}
        getOptionLabel={option => (typeof option === 'string' ? option : option.name)}
        filterOptions={(options: StateUserEntity[], state: FilterOptionsState<StateUserEntity>) => {
          const filter = makeFilterOptions<StateUserEntity>(['name', 'username', 'email', 'phone']);
          const filteredOptions = filter(options, state);
          dispatch(setFilteredUsers(filteredOptions));
          return filteredOptions;
        }}
        renderInput={params => <TextField {...params} label="Search users..." variant="outlined" />}
      />
    </div>
  );
};

export default SearchBar;
