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
                           name='lastName'
                           value={this.state.lastName}
                           onChange={this.onInputChange}
                           placeholder='Enter new last name' required/>
                </div>
                <div>
                    <input type='text'
                           name='firstName'
                           value={this.state.firstName}
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
                    <input type='text'
                           name='cell'
                           value={this.state.cell}
                           onChange={this.onInputChange}
                           placeholder='Enter new cell' />
                </div>
                <div>
                    <input type='text'
                           name='email'
                           value={this.state.email}
                           onChange={this.onInputChange}
                           placeholder='Enter new email' />
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

