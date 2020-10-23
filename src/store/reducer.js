import {CLICK_ADD_BTN, SELECT_CONTACT, SET_CONTACTS} from "./actions";

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
        default: return state
    }
}
