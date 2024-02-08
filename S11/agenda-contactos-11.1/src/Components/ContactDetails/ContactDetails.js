import React from "react";
import "./ContactDetails.css";

const ContactDetails = React.memo(({ contact, deleteContact }) => {

    return (
        <div>
            <div className="contact-container">
                <img src={contact.imageUrl} alt={"Imagen de " + contact.name} />
                <div className="contact-info-container">
                    <p className="contact-info">{contact.name}</p>
                    <p className="contact-info">{contact.phoneNumber}</p>
                    <button onClick={() => deleteContact(contact)} className="contact-info-button">Eliminar</button>
                </div>
            </div>
        </div>
    )

});


export default ContactDetails;