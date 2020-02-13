import React , { Component } from 'react';
import ContactCard from './ContactCard';

// informacioncd
import contactsData from '../utils/contactsData'

class Directory extends Component {
    constructor() {
        super();
        this.state = {
            contacts: contactsData,
        }
    }


    render() {
        const card = this.state.contacts.map((contact, idx) => 
        <ContactCard info={contact}  key={idx}/> );


        return (
            <div className='container'>
                <div className="row">
                    <div className="col s12">
                        {card}
                    </div>
                </div>
            </div>
        )
    }
}

export default Directory;