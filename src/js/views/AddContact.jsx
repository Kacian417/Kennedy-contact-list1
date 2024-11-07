import React, {useState, useContext} from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.js";

const AddContact = () => {
    const {store, actions} = useContext(Context)

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const[address, setAddress] = useState("");

    return (
        <>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="heading">
                    <h1>Add a new contact</h1>
                </div>
                <section>
                    <div className="name-input">
                        <label htmlFor ="name">Full Name</label>
                        <div>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Full Name"
                                required minLength="4" 
                                maxLength="30" 
                                size="100" 
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                    </div>
                    <div className="email-input">
                        <label htmlFor ="email">Email</label>
                        <div>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="Enter email"
                                required minLength="6" 
                                maxLength="30" 
                                size="100" 
                                onChange={e => setEmail(e.target.value)}
                                value={email}
                            />
                        </div>
                    </div>
                    <div className="phone-input">
                        <label htmlFor ="phone">Phone</label>
                        <div>
                            <input 
                                type="text" 
                                id="phone" 
                                name="phone"
                                placeholder="Enter Phone number" 
                                required minLength="7" 
                                maxLength="15" 
                                size="100" 
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                            />
                        </div>
                    </div>
                    <div className="address-input">
                        <label htmlFor ="address">Address</label>
                        <div>
                            <input 
                                type="text" 
                                id="address" 
                                name="address"
                                placeholder="Address"  
                                required minLength="4" 
                                maxLength="50" 
                                size="100" 
                                onChange={e => setAddress(e.target.value)}
                                value={address}
                            />
                        </div>
                    </div>
                </section>
                <button className="mt-3" onClick={() => {actions.createContact(name, email, phone, address)}}>Save</button>
                <div>
                    <Link to="/">
                    <span>or get back to Contacts</span>
                    </Link>
                </div>
            </div>
            <div className="col-2"></div>
        </div>
        </>
    );
}

export default AddContact;