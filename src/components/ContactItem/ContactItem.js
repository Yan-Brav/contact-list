import React from 'react';
import './ContactItem.css'

function ContactItem(props) {
    return (
        <div
            className='contact-item'
            onClick={() => props.onUpdate(props.item)}>
            {props.item.name + ' ' + props.item.surname}
        </div>
    );
}

export default ContactItem;
