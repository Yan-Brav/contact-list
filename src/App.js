import React, {Component} from 'react';
import ContactList from "./components/ContactList/ContactList";
import ContactForm from "./components/ContactForm/ContactForm";
import './App.css';

export default class App extends Component {


  toLocalStorage = (contacts) => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  };
  state = {
    contacts: [],
    contactForUpdate: {},
    isDeleteVisible: false
  };
  componentDidMount(){
    if (localStorage.getItem('contacts') !== null) {
      this.setState({
        contacts: JSON.parse(localStorage.getItem('contacts')),
      })
    }
  }

  deleteContact = (id) => {
    this.setState({
        contacts: this.state.contacts.filter((item) => item.id !== id),
        contactForUpdate: {},
        isDeleteVisible: false
      });
    // this.toLocalStorage(this.state.contacts);
    this.addContact();
  };

  saveContact = (contact) => {
    contact.id = Math.random();
    if (!this.state.isDeleteVisible){
      this.setState({
        contacts: [...this.state.contacts, contact],
        contactForUpdate: {},
        isDeleteVisible: false
      });
    }else {
      const newContacts = this.state.contacts.filter((item) => item.id !== this.state.contactForUpdate.id);
      this.setState({
        contacts: [...newContacts, contact],
        contactForUpdate: {},
        isDeleteVisible: false
      });
    }
    this.toLocalStorage(this.state.contacts);
  };

  addContact = () => {
      this.setState({
        contactForUpdate: {},
        isDeleteVisible: false
      });
    this.toLocalStorage(this.state.contacts);
  };

  updateContact = (contact) => {
    this.setState({
        contactForUpdate: contact,
        isDeleteVisible: true
    });
    this.toLocalStorage(this.state.contacts);
  };
  render() {
    return (
        <div className="App grid-2-items">
          <ContactList
              contacts={this.state.contacts}
              onAddContact={this.addContact}
              onUpdateContact={this.updateContact} />
          <ContactForm itemForUpdate={this.state.contactForUpdate}
                       onSubmit={this.saveContact}
                       onDeleteContact={this.deleteContact}
                       deleteVisible={this.state.isDeleteVisible} />
        </div>
    )
  }
}

