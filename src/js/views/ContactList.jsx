import React, { useContext } from "react";
import Contact from "../component/Contact.jsx";

import { Context } from "../store/appContext.js";

const ContactList = () => {
    const {store, actions} = useContext(Context)

    
    return (
        <>
            <ul>
                {store.contacts.map(contact => {
                    return(
                        <li key={contact.id} className="d-flex">
                            <Contact 
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