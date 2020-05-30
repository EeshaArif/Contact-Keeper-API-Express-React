import React, { useContext } from "react";
import ContactContext from "../../context/contact/ContactContext";
import ContactItem from "./ContactItem";

const Contacts = () => {
  const contactContext = useContext(ContactContext); // You can access context now
  const { contacts } = contactContext;
  return (
    <React.Fragment>
      {contacts.map((contact) => (
        <ContactItem key={contact.id} contact={contact}></ContactItem>
      ))}
    </React.Fragment>
  );
};
export default Contacts;
