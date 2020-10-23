import React, {useEffect, useState} from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';
import contactService from './contact-service';

function App() {
    const [contacts, setContacts] = useState([]);
    const [selectedContact, setSelectedContact] = useState(createEmptyContact());

    useEffect(() => {
        console.log('data is loaded');
        contactService.get('/')
            .then(({data}) => {setContacts(data)});
    }, []);

    function sendContact(contact) {
        console.log('contact is created');
        contactService.post('/', contact).then(({data}) => {
            setContacts([...contacts, data])
        })
    }

    function editContact(contact) {
        contactService.put('/' + contact.id, contact)
            .then(() => console.log('contact is updated'))
            .catch((er) => console.log(er))
    }

    function deleteContactFromServer(contact) {
        contactService.delete('/' + contact.id)
            .then(() => console.log('contact is deleted'))
            .catch((er) => console.log(er))
    }

    function createEmptyContact() {
        return {
            surname: '',
            name: '',
            phone: ''
        }
    }

    function deleteContact(contact) {
        deleteContactFromServer(contact);
        setContacts(
            contacts.filter((item) => item !== contact)
        );
        setSelectedContact(createEmptyContact())
    }

    function saveContact(contact) {
        if (!contact.id) {
            createContact(contact);
        }else {
            updateContact(contact);
        }
    }

    function clickAddBtn() {
        setSelectedContact(createEmptyContact());
    }

    function selectContact(contact) {
        setSelectedContact(contact);
    }

    function createContact(contact) {
        sendContact(contact);
        setSelectedContact(createEmptyContact());
    }

    function updateContact(contact) {
        editContact(contact);
        setContacts(contacts.map((item) => item.id === contact.id ? contact : item));
        setSelectedContact(contact);
        }

    return (
        <div className="App grid-2-items">
            <ContactList
                // contacts={contacts}
                onClickAddBtn={clickAddBtn}
                onSelectContact={selectContact} />
            <ContactForm
                key={selectedContact.id}
                contactForUpdate={selectedContact}
                onSubmit={saveContact}
                onDeleteContact={deleteContact} />
        </div>
    );
}

export default App;
