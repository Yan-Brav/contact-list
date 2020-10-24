import React from 'react';
import './ContactItem.css'
import {connect} from "react-redux";
import {selectContact} from "../../store/actions";

function ContactItem({item, selectContact}) {
    return (
        <div
            className='contact-item'
            onClick={() => selectContact(item)}>
            {item.name + ' ' + item.surname}
        </div>
    );
}

const mapDispatchToProps = {
    selectContact
};

export default connect( null, mapDispatchToProps)(ContactItem);
