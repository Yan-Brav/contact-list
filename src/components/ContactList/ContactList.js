import React, {useEffect} from "react";
import ContactItem from "../ContactItem/ContactItem";
import "./ContactList.css"
import {connect} from "react-redux";
import {clickAddBtn, setContacts} from "../../store/actions";
import contactService from "../../contact-service"

function ContactList({contacts, clickAddBtn, setContacts}) {

    useEffect(() => {
        contactService.get('/')
            .then(({data}) => {
                console.log(data);
                setContacts(data)});
    }, []);

    return (
        <div className='contact-list'>
            <div className='contact-list-item'>
                {contacts.map(item => {
                    return <ContactItem
                        key={item.id}
                        item={item} />
                })}
            </div>
            <button className='add-btn' onClick={clickAddBtn}>Add</button>
        </div>
    );
}

function mapStateToProps(state, props) {
    return {
        contacts: state.contacts
    }
}

const mapDispatchToProps = {
    clickAddBtn,
    setContacts
};


export default connect(mapStateToProps, mapDispatchToProps)(ContactList);
