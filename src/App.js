import React, {Component} from 'react';
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import './App.css';

export default class App extends Component {

  state = {
    contacts: [],
    contactForUpdate: this.createEmptyContact(),
    isDeleteVisible: false
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
    // this.toLocalStorage(this.state.contacts);
    // this.addContact();
    };

  saveContact = (contact) => {
    if (contact.id) {
      this.updateContact(contact);
    }else {
      this.createContact(contact);
    }
    // this.toLocalStorage(c);
    /*contact.id = Math.random();
    if (!this.state.isDeleteVisible){
      this.setState({
        contacts: [...this.state.contacts, contact],
        contactForUpdate: this.createEmptyContact(),
        isDeleteVisible: false
      });
    }else {
      const newContacts = this.state.contacts.filter((item) => item.id !== this.state.contactForUpdate.id);
      this.setState({
        contacts: [...newContacts, contact],
        contactForUpdate: this.createEmptyContact(),
        isDeleteVisible: false
      });
    }
    this.toLocalStorage(this.state.contacts);*/
  };

  addContact = () => {
      this.setState({
        contactForUpdate: this.createEmptyContact(),
        isDeleteVisible: false
      });
    // this.toLocalStorage(this.state.contacts);
  };

  selectContact = (contact) => {
    this.setState({
      contactForUpdate: contact,
      isDeleteVisible: true
    })
  };
  createContact = (contact) => {
    contact.id = Date.now();
    this.setState((state) => {
      const contacts = [...state.contacts, contact];
      this.toLocalStorage(contacts);
      return {
        contacts,
        contactForUpdate: this.createEmptyContact(),
        isDeleteVisible: false
      }
    })
  };

  updateContact = (contact) => {
    console.log(contact);
    this.setState((state) => {
      const contacts = state.contacts.map((item) => item.id === contact.id ? contact : item);
      console.log(contacts);
        /*contactForUpdate: contact,
        isDeleteVisible: true*/
      this.toLocalStorage(contacts);
      return {
        contacts,
        contactForUpdate: contact,
        isDeleteVisible: true
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
          <ContactForm itemForUpdate={this.state.contactForUpdate}
                       onSubmit={this.saveContact}
                       onDeleteContact={this.deleteContact}
                       deleteVisible={this.state.isDeleteVisible} />
        </div>
    )
  }
}

