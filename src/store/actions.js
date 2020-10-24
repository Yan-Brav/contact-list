export const CLICK_ADD_BTN = 'CLICK_ADD_BTN';
export function clickAddBtn() {
    return {
        type: CLICK_ADD_BTN
    }
}

export const SET_CONTACTS = 'SET_CONTACTS';
export function setContacts(payload) {
    return {
        type: SET_CONTACTS,
        payload
    }
}

export const SELECT_CONTACT = 'SELECT_CONTACT';
export function selectContact(payload) {
    return {
        type: SELECT_CONTACT,
        payload
    }
}

export const DELETE_CONTACT = 'DELETE_CONTACT';
export function deleteContact(payload) {
    return {
        type: DELETE_CONTACT,
        payload
    }
}

export const SAVE_CONTACT = 'SAVE_CONTACT';
export function saveContacts(payload) {
    return {
        type: SAVE_CONTACT,
        payload
    }
}

export const UPDATE_CONTACT = 'UPDATE_CONTACT';
export function updateContacts(payload) {
    return {
        type: UPDATE_CONTACT,
        payload
    }
}

export const INPUT_CHANGE_CONTACT = 'INPUT_CHANGE_CONTACT';
export function inputChangeContact(payload) {
    return {
        type: INPUT_CHANGE_CONTACT,
        payload
    }
}
