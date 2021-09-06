import axios from "axios";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

async function fetchContacts() {
  const { data } = await axios.get("/contacts");
  return data;
}

async function fetchAddContact(name, number) {
  const { data } = await axios.post("/contacts", {
    name,
    number,
  });
  return data;
}

async function fetchDeleteContact(id) {
  const { data } = await axios.delete(`/contacts/${id}`);
  return data;
}

export { fetchContacts, fetchAddContact, fetchDeleteContact };
