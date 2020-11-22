//libraries
import React from 'react';
import {connect} from 'react-redux';
import {Formik, Field, Form} from 'formik';
import {withRouter, useHistory} from 'react-router-dom';
//@material-ui
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';
import UndoIcon from '@material-ui/icons/Undo';
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from '@material-ui/core';
//App files
import {deleteContact, saveContact} from '../../store/actions';
import './ContactForm.css';
import AppTextField from './appTextField';

const EMPTY_CONTACT = {
    surname: '',
    name: '',
    phone: ''
};

const useStyles = makeStyles({
    btn: {
        margin: '5px'
    },
    text_field: {
        margin: '5px'
    }
});

function ContactForm({currentContact,
                     deleteContact,
                     saveContact}) {

    const history = useHistory();

    const classes = useStyles();

    const onFormSubmit = (values) => {
        saveContact(values);
        history.push('/');
    };

    const goHome = () => {
        history.push('/');
    };

    const renderForm = ({values}) => {
        return (
            <Form>
                <Field name='surname'>
                    {AppTextField}
                </Field>
                <Field name='name'>
                    {AppTextField}
                </Field>
                <Field name='phone'>
                    {AppTextField}
                </Field>
                <div className='btn-group'>
                    <Button type='submit'
                            className='save-btn'
                            variant='contained'
                            color='primary'
                            size='small'
                            startIcon={<SaveIcon />}
                            classes={{
                                root: classes.btn
                            }}>Save</Button>
                    <Button type='button'
                            className='return-btn'
                            onClick={goHome}
                            variant='contained'
                            color='primary'
                            size='small'
                            startIcon={<UndoIcon/>}
                            classes={{
                                root: classes.btn
                            }}>Return</Button>
                    {currentContact.id ? (<Button
                                            type='button'
                                            className='delete-btn'
                                            onClick={() => deleteContact(values.id)}
                                            variant='contained'
                                            color='secondary'
                                            size='small'
                                            startIcon={<DeleteIcon />}
                                            classes={{
                                                root: classes.btn
                                            }}>Delete</Button>)
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
