import React, {Component} from 'react';
import './ContactForm.css'

export default class ContactForm extends Component {
    constructor (props) {
        super(props);
        this.state = {
            ...props.itemForUpdate
        }
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            ...this.state
        });
    };

    onDelete = () => {
        this.props.onDeleteContact(this.props.itemForUpdate);
    };
    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {
        return (
            <form className='contact-form'
                  onSubmit={this.onFormSubmit}>
                <div>
                    <input type='text'
                           name='surname'
                           value={this.state.surname}
                           onChange={this.onInputChange}
                           placeholder='Enter new last name' required/>
                </div>
                <div>
                    <input type='text'
                           name='name'
                           value={this.state.name}
                           onChange={this.onInputChange}
                           placeholder='Enter new first name' required/>
                </div>
                <div>
                    <input type='text'
                           name='phone'
                           value={this.state.phone}
                           onChange={this.onInputChange}
                           placeholder='Enter new phone' />
                </div>
                <div>
                    <button type='submit' className='save-btn'>Save</button>
                    {this.state.id ? (<button type='button' className='delete-btn'
                                             onClick={this.onDelete}>Delete</button>)
                                    : ('')}
                </div>
            </form>
        )
    }
}

