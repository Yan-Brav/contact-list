import {
    CLICK_ADD_BTN, DELETE_CONTACT,
    INPUT_CHANGE_CONTACT,
    SAVE_CONTACTS,
    SELECT_CONTACT,
    SET_CONTACTS,
    UPDATE_CONTACTS
} from "./actions";

const initialState = {
    contacts: [],
    selectedContact: {
        surname: '',
        name: '',
        phone: ''
    }
};

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case CLICK_ADD_BTN: return {...state, selectedContact: payload};
        case SET_CONTACTS: return {...state, contacts: payload};
        case SELECT_CONTACT: return {...state, selectedContact: payload};
        case SAVE_CONTACTS: return {...state, contacts: payload};
        case UPDATE_CONTACTS: return {...state, contacts: payload};
        case INPUT_CHANGE_CONTACT: return {...state, selectedContact: payload};
        case DELETE_CONTACT: return {...state, contacts: payload};
        default: return state
    }
}
