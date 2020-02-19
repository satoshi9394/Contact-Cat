import React , { Component } from 'react';


import ContactCard from '../components/ContactCard';
import NavBar from '../components/NavBar';
import Input from '../components/Input';

// informacioncd
import contactsData from '../utils/contactsData'
import Btn from '../action/Btn';


class Directory extends Component {

    state = {
            contacts: [],
            deleteContact: false,
            newContacts: []
/*             newContacts:{
                name:'',
                phone:'',
                email:'',
                imgUrl:"#"
            }, */
    }

    addContact= () => {
        let prewData=this.state.newContacts
        this.setState(
            () => ({
                contacts: contactsData,
                deleteContact: false
                }
            )
        );       
    }
    deleteContact = () =>{
        this.setState(
            () => ({ 
                    contacts: [] ,
                    deleteContact: true
                }) 
        );
    }

    handleName = (e) =>{
        let value = e.target.value
        this.setState(
          prevState => ({
            newContacts: {
                ...prevState.newContacts,
                name: value,
            }
          })          
        );
    }
    handleNumber = (e) =>{
        let value = e.target.value
        this.setState(
          prevState => ({
            newContacts: {
                ...prevState.newContacts,
                phone: value,
            }
          })          
        );
    }
    handleEmail = (e) =>{
        let value = e.target.value
        this.setState(
          prevState => ({
            newContacts: {
                ...prevState.newContacts,
                email: value,
            }
          })          
        );
    }
    handleFormSubmmit = (e) =>{
        e.preventDefault();
        let userData = this.state.newContacts;
        this.setState(prevState=>(
                {
                    contacts: [
                      ...prevState.contacts,
                      userData],
                }
            )
        )
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
                        <div className="row">
                            <div className="col s6">
                                <Btn clickHandler={this.addContact} type="Agregar" icon="add"/>
                            </div>
                            <div className="col s6">
                                <Btn clickHandler={this.deleteContact} type="Borrar" icon="delete"/>
                            </div>
                        </div>
                    </div>
                    <div className="col s12">
                        <form>
                            <h5>Agrega contactos nuevos</h5>
                        <div className="col s4">
                            <Input
                            name='name'
                            type='text'
                            value={this.state.newContacts.name}
                            placeholder='ingresa tu nombre'
                            handleChange={this.handleName}
                            />
                        </div>
                        <div className="col s4">
                        <Input
                            name='phone'
                            type='phone'
                            value={this.state.newContacts.phone}
                            placeholder='ingresa tu telefono'
                            handleChange={this.handleNumber}
                            />
                        </div>
                        <div className="col s4">
                        <Input
                            name='email'
                            type='email'
                            value={this.state.newContacts.email}
                            placeholder='ingresa tu email'
                            handleChange={this.handleEmail}
                            />   
                        </div>
                        <Btn 
                        clickHandler={this.handleFormSubmmit}
                        type="Agregar" icon="add"/>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Directory;