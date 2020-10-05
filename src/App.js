import React, {Component} from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import contactService from './contact-service';
import './App.css';

export default class App extends Component {

  state = {
    contacts: [],
    contactForUpdate: this.createEmptyContact(),
  };

  createEmptyContact() {
    return {
      surname: '',
      name: '',
      phone: ''
    }
  };
  componentDidMount() {
    this.getContacts();
  }

  getContacts() {
    console.log('data is loaded');
    contactService.get('/')
        .then(({data}) => this.setState({
          contacts: data
        }))
  }
  sendContact(contact) {
    contactService.post('/', contact).then(({data}) => {
      this.setState({
      contacts: [...this.state.contacts, data]
    })})
  }

  editContact(contact) {
    contactService.put('/' + contact.id, contact).then(() => console.log('contact is updated'))
  }

  deleteContactFromServer(contact) {
    contactService.delete('/' + contact.id).then(() => console.log('contact is deleted'))
  }

  deleteContact = (contact) => {
    this.deleteContactFromServer(contact);
    this.setState((state) => {
          const contacts = state.contacts.filter((item) => item !== contact);
          return {
            contacts,
            contactForUpdate: this.createEmptyContact(),
          }
        });
    };

  saveContact = (contact) => {
    if (!contact.id) {
      this.createContact(contact);
    }else {
      this.updateContact(contact);
    }
  };

  addContact = () => {
      this.setState({
        contactForUpdate: this.createEmptyContact(),
      });
  };

  selectContact = (contact) => {
    this.setState({
      contactForUpdate: contact,
    })
  };
  createContact(contact) {
    this.sendContact(contact);
    this.setState({
        contactForUpdate: this.createEmptyContact(),
    })
  };

  updateContact(contact) {
    this.editContact(contact);
    this.setState((state) => {
      const contacts = state.contacts.map((item) => item.id === contact.id ? contact : item);
      return {
        contacts,
        contactForUpdate: contact,
      }
    });

  };
  render() {
    return (
        <div className="App grid-2-items">
          <ContactList
              contacts={this.state.contacts}
              onClickAddBtn={this.addContact}
              onSelectContact={this.selectContact} />
          <ContactForm
              key={this.state.contactForUpdate.id}
              itemForUpdate={this.state.contactForUpdate}
              onSubmit={this.saveContact}
              onDeleteContact={this.deleteContact} />
        </div>
    )
  }
}
