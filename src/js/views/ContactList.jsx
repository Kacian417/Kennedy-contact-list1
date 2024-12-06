import React, { useContext } from "react";
import Contact from "./Contact.jsx";
import "../../styles/Contacts.css"

import { Context } from "../store/appContext.js";

const ContactList = () => {
    const {store, actions} = useContext(Context)

    return (
        <>
            <ul>
                {store.contacts.map(contact => {
                    return(
                        <li key={contact.id} className="contactListNames d-flex border border-secondary">
                            <Contact 
                                id={contact.id}
                                name={contact.name}
                                phone={contact.phone}
                                email={contact.email}
                                address={contact.address}
                            />
                        </li>
                    )
                })}
            </ul>
        </>
    );
}

export default ContactList;