import React from 'react';
import './ContactForm.css'
import {connect} from "react-redux";
import {deleteContact, inputChangeContact, saveContacts, updateContacts} from "../../store/actions";
import contactService from "../../contact-service";

function ContactForm({selectedContact,
                     deleteContact, saveContacts,
                     updateContacts, inputChangeContact}) {

    function sendContact(contact) {
        console.log('contact is created');
        contactService.post('/', contact).then(({data}) => saveContacts(data))
    }
    function editContact(contact) {
        contactService.put('/' + contact.id, contact)
            .then(() => console.log('contact is updated'))
            .catch((er) => console.log(er));
        updateContacts(contact);
    }

    function deleteFromServer(contact) {
        contactService.delete('/' + contact.id)
            .then(() => console.log('contact is deleted'))
            .catch((er) => console.log(er));
        deleteContact(contact);
    }

    function onFormSubmit(e) {
        e.preventDefault();
        if (!selectedContact.id) {
            sendContact(selectedContact);
        }else {
            editContact(selectedContact)
        }
    }

    function onInputChange(e) {
        inputChangeContact({...selectedContact, [e.target.name]: e.target.value});
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
                                             onClick={() => deleteFromServer(selectedContact)}>Delete</button>)
                                    : ('')}
                </div>
            </form>
    );
}

function mapStateToProps(state) {
    return {
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
