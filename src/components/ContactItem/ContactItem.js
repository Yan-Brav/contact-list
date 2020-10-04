import React, {Component} from 'react';
import './ContactItem.css'

export default class ContactItem extends Component {

    render() {
        return (
            <div
                className='contact-item'
                onClick={() => this.props.onUpdate(this.props.item)}
            >
                {this.props.item.name + ' ' + this.props.item.surname}
            </div>
        );
    }
}


