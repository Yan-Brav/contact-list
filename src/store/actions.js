import api from '../contact-service'

export const SET_CONTACTS = 'SET_CONTACTS';
export const setContacts = () => async (dispatch) => {
    const {data} = await api.get('/');
    dispatch({
        type: SET_CONTACTS,
        payload: data
    })
};

export const DELETE_CONTACT = 'DELETE_CONTACT';
export const deleteContact = (id) => async (dispatch) =>{
    await api.delete('/' + id);
    dispatch({
        type: DELETE_CONTACT,
        payload: id
    })
};

export const SAVE_CONTACT = 'SAVE_CONTACT';
const addContact = (contact) => async (dispatch) => {
    const {data} = await api.post('/', contact);
    dispatch({
        type: SAVE_CONTACT,
        payload: data
    })
};

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
const updateContact = (contact) => async (dispatch) => {
    const {data} = await api.put('/' + contact.id, contact);
    dispatch({
        type: UPDATE_CONTACT,
        payload: data
    })
};

export const saveContact = (contact) => async (dispatch) => {
    contact.id ? await updateContact(contact)(dispatch)
            : await addContact(contact)(dispatch)
};
