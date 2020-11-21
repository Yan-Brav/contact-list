import React from 'react';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css'
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';

function ContactList({contacts}) {

    return (
        <div className='contact-list'>
            <div className='contact-list-item'>
                {contacts.map(item => {
                    return <ContactItem
                        key={item.id}
                        item={item} />
                })}
            </div>
            <NavLink to='/form/:id' className='add-btn'>Add new</NavLink>
        </div>
    );
}

const mapStateToProps = ({contacts}) => ({contacts});

export default connect(mapStateToProps)(ContactList);
