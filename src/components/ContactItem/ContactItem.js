import React from 'react';
import './ContactItem.css'
// import {connect} from 'react-redux';
// import {selectContact} from '../../store/actions';
import {NavLink/*, useHistory*/} from 'react-router-dom';

function ContactItem({item}) {

   /* const history = useHistory();
    const selectContact = (id) => {
        history.push('form/' + id);
    };*/

    return (
        <div className='contact-item'>
            <NavLink to={`/form/${item.id}`}>
                {item.name + ' ' + item.surname}
            </NavLink>
        </div>
    );
}

/*const mapDispatchToProps = {
    // selectContact
};*/

export default ContactItem;
