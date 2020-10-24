import React from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';

function App() {
    return (
        <div className="App grid-2-items">
            <ContactList />
            <ContactForm />
        </div>
    );
}

export default App;
