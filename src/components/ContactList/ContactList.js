import React from 'react';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import ContactItem from '../ContactItem/ContactItem';
import './ContactList.css'
import AddBoxIcon from '@material-ui/icons/AddBox';

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
            <Button type='button'
                    variant='contained'
                    color='primary'
                    size='small'
                    startIcon={<AddBoxIcon/>}
                    >
                <NavLink to='/form/:id' className='add-btn'>Add new</NavLink>
            </Button>

        </div>
    );
}

const mapStateToProps = ({contacts}) => ({contacts});

export default connect(mapStateToProps)(ContactList);
