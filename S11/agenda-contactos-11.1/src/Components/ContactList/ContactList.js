import "./ContactList.css";

import React from "react";
import ContactDetails from "../ContactDetails/ContactDetails";


const ContactList = React.memo(() => {

    const URL_API = "http://localhost:4000/contacts";

    const [contactList, setContactList] = React.useState([]);
    const [newContact, setNewContact] = React.useState({ name: "", phoneNumber: "", imageUrl: "", });
    const [total, setTotal] = React.useState(0)

    React.useEffect(() => {
        const sum = contactList.reduce((acum) => acum + 1, 0)
        setTotal(sum)

    }, [contactList]);

    //Pido los datos cuando se crea el componente
    React.useEffect(() => {
        getAllContactsFromApi();
    }, [])

    const getAllContactsFromApi = () => {
        fetch(URL_API)
            .then(response => response.json())
            .then(data => setContactList(data));
    }

    const deleteContact = React.useCallback((contact) => {
        fetch(`${URL_API}/${contact.id}`, {
            method: "DELETE"
        })
            .then(response => response.json())
            .then(data => getAllContactsFromApi());

    }, []);

    const handleNewContact = (event) => {
        event.preventDefault();
        fetch(URL_API, {
            method: "POST",
            body: JSON.stringify(newContact),
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data => {
                getAllContactsFromApi()
                // Limpiando el form
                setNewContact(
                    {
                        name: "",
                        phoneNumber: "",
                        imageUrl: "",
                    });
            });
    }

    return (
        <div>
            <h2>Tus contactos</h2>

            {/*Lista de contactos */}
            {contactList.map(contact =>
                <ContactDetails
                    contact={contact}
                    key={contact.id}
                    deleteContact={deleteContact}
                />
            )}

            {/*total de contactos */}
            <p>Tienes {total} contactos agregados</p>

            {/*Formulario*/}
            <form onSubmit={handleNewContact}>
                <h2>Nuevo contacto</h2>
                <p className="input-container">
                    <label>Nombre</label>
                    <input type="text" name="name" value={newContact.name || ''} onChange={(event) => setNewContact({
                        ...newContact,
                        name: event.target.value,
                    })} />
                </p>
                <p className="input-container">
                    <label>Número</label>
                    <input type="text" name="phone" value={newContact.phoneNumber || ''} onChange={(event) => setNewContact({
                        ...newContact,
                        phoneNumber: event.target.value,
                    })} />
                </p>
                <p className="input-container">
                    <label>Foto</label>
                    <input type="text" name="photo" value={newContact.imageUrl || ''} onChange={(event) => setNewContact({
                        ...newContact,
                        imageUrl: event.target.value,
                    })} />
                </p>
                <button className="add-contact-button" type="submit">Agregar contacto</button>
            </form>

        </div>
    );
});

export default ContactList;