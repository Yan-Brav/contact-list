import React, {Component} from "react";
import ContactItem from "../ContactItem/ContactItem";
import './ContactList.css'

export default class ContactList extends Component {

    render() {
        return (
            <div className='contact-list'>
                <div className='contact-list-item'>
                    {this.props.contacts.map(item => {
                        return <ContactItem
                            key={item.id}
                            item={item}
                            onUpdate={this.props.onUpdateContact} />
                    })}
                </div>
                <button className='add-btn' onClick={this.props.onAddContact}>Add</button>
            </div>
        );
    }
}
