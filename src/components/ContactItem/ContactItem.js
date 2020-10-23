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

function mapStateToProps(state) {
    return state
}

const mapDispatchToProps = {
    selectContact
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactItem);
