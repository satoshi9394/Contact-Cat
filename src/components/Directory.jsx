import React , { Component } from 'react';
import ContactCard from './ContactCard';
import NavBar from './NavBar';

// informacioncd
import contactsData from '../utils/contactsData'
import Btn from './Btn';


class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [],
            deleteContact: false,
        }
        this.addContact = this.addContact.bind(this);
        this.deleteContact = this.deleteContact.bind(this);
    }
    addContact(){
        this.setState(
            () => (
                {contacts: contactsData}
            )
        );       
    }
    deleteContact(){
        this.setState(
            () => {
                return ({ contacts: [] });
            }
        );
        this.setState(
            () => (
                {deleteContact: true}
            )
        );   
    }

    render() {
        const card = this.state.contacts.map((contact, idx) => 
        <ContactCard info={contact}  key={idx}/> );

        let viewCard ;

        if (this.state.contacts.length > 0) {
            viewCard = <div>{card}</div>
        }else if(this.state.deleteContact === true){
            viewCard = <h1>Borraste los contactos</h1>
        }else{
            viewCard = <h1>No hay contactos</h1>     
        }



        return (
            <div className='container'>
                <div className="row">
                    <div className="col s12">
                        <NavBar/>
                    </div>
                    <div className="col s9">
                        {viewCard}
                    </div>
                    <div className="col s3">
                        <Btn clickHandler={this.addContact} type="Agregar" icon="add"/>
                        <Btn clickHandler={this.deleteContact} type="Borrar" icon="delete"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Directory;