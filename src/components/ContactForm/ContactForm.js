import React from 'react';
import './ContactForm.css'
import {connect} from 'react-redux';
import {deleteContact, saveContact} from '../../store/actions';
import {Formik, Field, Form} from 'formik';
import {withRouter, useHistory} from 'react-router-dom';

const EMPTY_CONTACT = {
    surname: '',
    name: '',
    phone: ''
};

function ContactForm({currentContact,
                     deleteContact,
                     saveContact}) {

    const history = useHistory();

    const onFormSubmit = (values) => {
        saveContact(values);
        history.push('/');
    };

    const goHome = () => {
        history.push('/');
    };


    const renderForm = (props) => {
        return (
            <Form>
                <div className='form-field'>
                    <label htmlFor='surname'>Surname:</label>
                    <Field name='surname'/>
                </div>
                {props.errors.surname && props.touched.surname
                    ? <div className='error'>{props.errors.surname}</div>
                    : null}
                <div className='form-field'>
                    <label htmlFor='name'>Name:</label>
                    <Field name='name'/>
                </div>
                {props.errors.name && props.touched.name
                    ? <div className='error'>{props.errors.name}</div>
                    : null}
                <div className='form-field'>
                    <label htmlFor='phone'>Phone:</label>
                    <Field name='phone'/>
                </div>
                <div>
                    <button type='submit' className='save-btn'>Save</button>
                    <button type='button' className='return-btn' onClick={goHome}>Return</button>
                    {currentContact.id ? (<button type='button' className='delete-btn'
                                                   onClick={() => deleteContact(props.values.id)}>Delete</button>)
                        : ('')}
                </div>
            </Form>
        )
    };

    const validateForm = (values) => {
        const errors = {};
        if (!values.surname)  {
            errors.surname = 'Surname is required';
        }
        if (!values.name)  {
            errors.name = 'Name is required';
        }
        return errors;
    };

    return (
        <Formik
            initialValues={currentContact}
            onSubmit={onFormSubmit}
            validate={validateForm}
            enableReinitialize={true}>
            {renderForm}
        </Formik>
    );
}

const mapStateToProps = ({contacts}, {match: {params: {id}}}) => {
    const currentContact = contacts.find(contact => contact.id === id);
    return {
        currentContact: currentContact ? currentContact : EMPTY_CONTACT
    }
};

const mapDispatchToProps = {
    deleteContact,
    saveContact
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ContactForm));
