import React, {Component} from 'react';
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import './App.css';

export default class App extends Component {

  state = {
    contacts: [],
    contactForUpdate: this.createEmptyContact(),
  };

  toLocalStorage(contacts) {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  };

  fromLocalStorage() {
      const data = localStorage.getItem('contacts');
      return data ? JSON.parse(data) : []
  }
  createEmptyContact() {
    return {
      lastName: '',
      firstName: '',
      phone: '',
      cell: '',
      email: ''
    }
  };
  componentDidMount(){
    this.setState({
      contacts: this.fromLocalStorage()
    })
  }

  deleteContact = (contact) => {
    this.setState((state) => {
          const contacts = state.contacts.filter((item) => item !== contact);
          this.toLocalStorage(contacts);
          return {
            contacts,
            contactForUpdate: this.createEmptyContact(),
            isDeleteVisible: false
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
    contact.id = Date.now();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
      this.toLocalStorage(contacts);
      return {
        contacts,
        contactForUpdate: this.createEmptyContact(),
      }
    })
  };

  updateContact(contact) {
    this.setState((state) => {
      const contacts = state.contacts.map((item) => item.id === contact.id ? contact : item);
      this.toLocalStorage(contacts);
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
              onAddContact={this.addContact}
              onUpdateContact={this.selectContact} />
          <ContactForm
              key={this.state.contactForUpdate.id}
              itemForUpdate={this.state.contactForUpdate}
              onSubmit={this.saveContact}
              onDeleteContact={this.deleteContact} />
        </div>
    )
  }
}

