import { useDispatch, useSelector } from 'react-redux';
import {
  LabelContacts,
  Search,
  ResetButtons,
  FilterTitle,
} from './ContactFilter.styled';
import { selectFilter } from 'redux/selectors';
import { changeValueFilter } from 'redux/filterSlice';
import { Section } from 'components/Shared/Shared.styled';

export const ContactFilter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(changeValueFilter(e.currentTarget.value));
  };

  const resetFilters = () => {
    dispatch(changeValueFilter(''));
  };

  return (
    <Section>
      <FilterTitle>Filter contacts</FilterTitle>

      {/* <ContactsWrapper> */}
      <LabelContacts>
        Find contacts by name
        <Search
          type="text"
          name="filter"
          value={filter}
          onChange={changeFilter}
        />
        <ResetButtons type="button" onClick={resetFilters}>
          Reset filters
        </ResetButtons>
      </LabelContacts>
    </Section>
  );
};
