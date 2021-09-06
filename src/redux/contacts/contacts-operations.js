import { createAsyncThunk } from "@reduxjs/toolkit";
import * as contactsAPI from "services/ContactsAPI";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAllContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await contactsAPI.fetchContacts();
      return contacts;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchAddContact = createAsyncThunk(
  "contacts/fetchAddContacts",
  async ({ name, number }, { rejectWithValue }) => {
    try {
      const contact = await contactsAPI.fetchAddContact(name, number);
      return contact;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchDeleteContact = createAsyncThunk(
  "contacts/fetchDeleteContacts",
  async (id, { rejectWithValue }) => {
    try {
      await contactsAPI.fetchDeleteContact(id);
      // const contacts =
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

// export const fetchContacts = () => async dispatch => {
//   dispatch(contactsActions.fetchContactsRequest());
//   try {
//     const contacts = await contactsAPI.fetchContacts();
//     dispatch(contactsActions.fetchContactsSuccess(contacts));
//   } catch (error) {
//     dispatch(contactsActions.fetchContactsError(error.message));
//   }
// };
