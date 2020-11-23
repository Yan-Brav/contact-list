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
import AppTextField from './AppTextField';

const EMPTY_CONTACT = {
    surname: '',
    name: '',
    phone: ''
};

const useStyles = makeStyles({
    root: {
        margin: '5px',
        width: '15%'
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
                <div >
                    <Button type='submit'
                            variant='contained'
                            color='primary'
                            size='small'
                            startIcon={<SaveIcon />}
                            className={classes.root}>Save</Button>
                    <Button type='button'
                            className={classes.root}
                            onClick={goHome}
                            variant='contained'
                            color='primary'
                            size='small'
                            startIcon={<UndoIcon/>}>Return</Button>
                    {currentContact.id ? (<Button
                                            type='button'
                                            className={classes.root}
                                            onClick={() => deleteContact(values.id)}
                                            variant='contained'
                                            color='secondary'
                                            size='small'
                                            startIcon={<DeleteIcon />}>Delete</Button>)
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
