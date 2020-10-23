export const CLICK_ADD_BTN = 'CLICK_ADD_BTN';
export function clickAddBtn() {
    return {
        type: CLICK_ADD_BTN,
        payload: {
            surname: '',
            name: '',
            phone: ''
        }
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
