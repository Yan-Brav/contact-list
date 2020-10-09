import React from 'react';
import ContactItem from "../ContactItem/ContactItem";
import './ContactList.css'

function ContactList(props) {
    return (
        <div className='contact-list'>
            <div className='contact-list-item'>
                {props.contacts.map(item => {
                    return <ContactItem
                        key={item.id}
                        item={item}
                        onUpdate={props.onSelectContact} />
                })}
            </div>
            <button className='add-btn' onClick={props.onClickAddBtn}>Add</button>
        </div>
    );
}

export default ContactList;
