const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			contacts: []
		},
		actions: {
			// Use getActions to call a function within a fuction
			// exampleFunction: () => {
			// 	getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {
			// 	/**
			// 		fetch().then().then(data => setStore({ "foo": data.bar }))
			// 	*/
			// },
			
			getContacts: () => {

				fetch("https://playground.4geeks.com/contact/agendas/kennedy/contacts")
				.then(response => {
					if (!response.ok){
						throw Error("Error trying to get info.")
					}
					return response.json();
				})
				.then(data => {
					console.log(data.contacts)
					setStore({ contacts: data.contacts})
				})
				.catch(error => console.log("Error: ", error))
			},
			deleteContact: (contactId) => {
				//use fetch to delete a contact
				fetch(`https://playground.4geeks.com/contact/agendas/kennedy/contacts/${contactId}`, {
					method: "DELETE"
				})
				.then(response => {
					if (response.status !== 204) {
						console.log("Error! Contact not found.")
						
						throw Error(response.statusText)
					}
					console.log("Deletion of contact successful.")
					getActions().getContacts();
				})
				.catch(error => console.log(error))
				
			},
			createContact: (name, email, phone, address) => {

				let contact = {
					name: name,
					phone: phone,
					email: email,
					address: address,
				}

				let options = {
					method: 'POST',
  					body: JSON.stringify(contact),
  					headers: {
    					'Content-Type': 'application/json'
					}
				}
				fetch(`https://playground.4geeks.com/contact/agendas/kennedy/contacts`, options)
				.then(response => {
					if (!response.ok) {
						throw Error("Error: Unable to post new contact.");
					}
					console.log("Contact successfully added");
					getActions().getContacts();
					return response.json();
				})
				.catch(error => console.log("More info on errror: ", error))
			}	
		}
	};
};

export default getState;
