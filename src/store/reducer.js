import {
    DELETE_CONTACT,
    SAVE_CONTACT,
    SET_CONTACTS,
    UPDATE_CONTACT
} from "./actions";

const initialState = {
    contacts: []
};

export default function reducer(state = initialState, {type, payload}) {
    switch (type) {
        case SET_CONTACTS: return {...state, contacts: payload};
        case SAVE_CONTACT: return {...state, contacts: [...state.contacts, payload]};
        case UPDATE_CONTACT: return {...state, contacts: state.contacts.map((item) => item.id !== payload.id ? item : payload)};
        case DELETE_CONTACT: return {...state, contacts: [...state.contacts.filter((item) => item.id !== payload)]};
        default: return state
    }
}
