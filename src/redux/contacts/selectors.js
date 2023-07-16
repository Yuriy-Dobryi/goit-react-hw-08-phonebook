import { createSelector } from "@reduxjs/toolkit";
import { selectFilter } from "redux/filter/selectors";

export const selectContacts = state => state.contacts.items;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    if (filter) {
      const lowerCaseFilter = filter.toLowerCase();
      const filteredContacts = contacts.filter(({ name }) =>
        name.toLowerCase().includes(lowerCaseFilter)
      );
      return filteredContacts;
    }
    return [...contacts];
  }
);

export const selectLoading = state => state.contacts.isLoading;