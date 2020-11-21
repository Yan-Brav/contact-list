import React, {useEffect} from 'react';
import ContactList from './components/ContactList/ContactList';
import ContactForm from './components/ContactForm/ContactForm';
import './App.css';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {setContacts} from './store/actions';

function App({setContacts}) {

    useEffect(() => {
        setContacts()
    }, [setContacts]);

    return (
        <div className="App grid-2-items">
            <ContactList/>
                <Route path='/form/:id'>
                    <ContactForm/>
                </Route>
        </div>
    );
}

const mapDispatchToProps = {
    setContacts
};

export default connect(null, mapDispatchToProps)(App)

