import React, {Component} from 'react';
import './ContactForm.css'

export default class ContactForm extends Component {

    state = {
        lastName: '',
        firstName: '',
        phone: '',
        cell: '',
        email: ''
    };
    /*static getDerivedStateFromProps(props) {
        console.log(props);
            if (props.deleteVisible){
                return {
                    lastName: props.itemForUpdate.lastName,
                    firstName: props.itemForUpdate.firstName,
                    phone: props.itemForUpdate.phone,
                    cell: props.itemForUpdate.cell,
                    email: props.itemForUpdate.email
                };
            }else {
                return {
                    lastName: '',
                    firstName: '',
                    phone: '',
                    cell: '',
                    email: ''
                };
            }
    }*/
    componentDidUpdate = (prevProps) => {
        if (prevProps !== this.props){
            if (this.props.deleteVisible){
                this.setState({
                    lastName: this.props.itemForUpdate.lastName,
                    firstName: this.props.itemForUpdate.firstName,
                    phone: this.props.itemForUpdate.phone,
                    cell: this.props.itemForUpdate.cell,
                    email: this.props.itemForUpdate.email
                })
            }else {
                this.setState({
                    lastName: '',
                    firstName: '',
                    phone: '',
                    cell: '',
                    email: ''
                })
            }
        }
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit({
            lastName: this.state.lastName,
            firstName: this.state.firstName,
            phone: this.state.phone,
            cell: this.state.cell,
            email: this.state.email
        });
    };

    onDelete = (ev) => {
        ev.preventDefault();
        this.props.onDeleteContact(this.props.itemForUpdate.id);
        this.setState({
            lastName: '',
            firstName: '',
            phone: '',
            cell: '',
            email: ''
        })
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
                    <button className='save-btn'>Save</button>
                    <button className={(!this.props.deleteVisible ? 'delete-btn invisible'
                                                                  : 'delete-btn')}
                            onClick={this.onDelete}>Delete</button>
                </div>
            </form>
        )
    }
}

