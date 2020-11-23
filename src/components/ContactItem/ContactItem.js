import React from 'react';
import {NavLink} from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import './ContactItem.css'

function ContactItem({item}) {

    return (
        <div className='contact-item'>
            <NavLink to={`/form/${item.id}`} className='contact'>
                <Typography variant='body1'>
                    {item.name + ' ' + item.surname}
                </Typography>
            </NavLink>
        </div>
    );
}

export default ContactItem;
