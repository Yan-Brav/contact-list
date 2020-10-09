import React, {useState} from 'react';
import './ContactForm.css'

function ContactForm(props) {

    let [contact, setContact] = useState({...props.contactForUpdate});

    function onFormSubmit(e) {
        e.preventDefault();
        props.onSubmit({...contact});
    }


    function onDelete() {
        props.onDeleteContact(props.contactForUpdate);
    }
    function onInputChange(e) {
        let newContact = {...contact, [e.target.name]: e.target.value};
        setContact(newContact);
    }
    return (
        <form className='contact-form'
                  onSubmit={onFormSubmit}>
                <div>
                    <input type='text'
                           name='surname'
                           value={contact.surname}
                           onChange={onInputChange}
                           placeholder='Enter new last name' required/>
                </div>
                <div>
                    <input type='text'
                           name='name'
                           value={contact.name}
                           onChange={onInputChange}
                           placeholder='Enter new first name' required/>
                </div>
                <div>
                    <input type='text'
                           name='phone'
                           value={contact.phone}
                           onChange={onInputChange}
                           placeholder='Enter new phone' />
                </div>
                <div>
                    <button type='submit' className='save-btn'>Save</button>
                    {contact.id ? (<button type='button' className='delete-btn'
                                             onClick={onDelete}>Delete</button>)
                                    : ('')}
                </div>
            </form>
    );
}

export default ContactForm;
