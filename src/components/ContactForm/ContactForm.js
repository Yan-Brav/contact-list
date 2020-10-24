import React from 'react';
import './ContactForm.css'
import {connect} from "react-redux";
import {deleteContact, inputChangeContact, saveContacts, updateContacts} from "../../store/actions";
import contactService from "../../contact-service";

function ContactForm({contacts, selectedContact,
                     deleteContact, saveContacts,
                     updateContacts, inputChangeContact}) {

    function sendContact(contact) {
        console.log('contact is created');
        contactService.post('/', contact).then(({data}) => {
            saveContacts([...contacts, data])
        })
    }
    function editContact(contact) {
        contactService.put('/' + contact.id, contact)
            .then(() => console.log('contact is updated'))
            .catch((er) => console.log(er));
        const newContacts = contacts.map((item) => item.id !== contact.id ? item : contact);
        updateContacts(newContacts);
    }

    function deleteFromServer(contact) {
        contactService.delete('/' + contact.id)
            .then(() => console.log('contact is deleted'))
            .catch((er) => console.log(er))
    }

    function onFormSubmit(e) {
        e.preventDefault();
        if (!selectedContact.id) {
            sendContact(selectedContact);
        }else {
            editContact(selectedContact)
        }
    }

    function onDelete(contact) {
        console.log(contact);
        let newContacts = contacts.filter((item) => item !== contact);
        deleteContact(newContacts);
        deleteFromServer(contact);
    }

    function onInputChange(e) {
        let newContact =  {...selectedContact, [e.target.name]: e.target.value};
        inputChangeContact(newContact);
    }
    return (
        <form className='contact-form'
                  onSubmit={onFormSubmit}>
                <div>
                    <input type='text'
                           name='surname'
                           value={selectedContact.surname}
                           onChange={onInputChange}
                           placeholder='Enter new surname' required/>
                </div>
                <div>
                    <input type='text'
                           name='name'
                           value={selectedContact.name}
                           onChange={onInputChange}
                           placeholder='Enter new name' required/>
                </div>
                <div>
                    <input type='text'
                           name='phone'
                           value={selectedContact.phone}
                           onChange={onInputChange}
                           placeholder='Enter new phone' />
                </div>
                <div>
                    <button type='submit' className='save-btn'>Save</button>
                    {selectedContact.id ? (<button type='button' className='delete-btn'
                                             onClick={() => onDelete(selectedContact)}>Delete</button>)
                                    : ('')}
                </div>
            </form>
    );
}

function mapStateToProps(state, props) {
    return {
        contacts: state.contacts,
        selectedContact: state.selectedContact
    }
}

const mapDispatchToProps = {
    deleteContact,
    saveContacts,
    updateContacts,
    inputChangeContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
