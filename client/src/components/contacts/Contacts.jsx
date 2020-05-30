import React, { useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext); // You can access context now
  const { contacts, filtered } = contactContext;
  if (contacts.length === 0) {
    return <h4>Please add a contact</h4>;
  }
  return (
    <React.Fragment>
      {filtered !== null
        ? filtered.map((contact) => (
            <ContactItem key={contact.id} contact={contact}></ContactItem>
          ))
        : contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact}></ContactItem>
          ))}
      {}
    </React.Fragment>
  );
};
export default Contacts;
