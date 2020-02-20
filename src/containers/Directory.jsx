import React , { Component } from 'react';


import ContactCard from '../components/ContactCard';
import NavBar from '../components/NavBar';
import Input from '../components/Input';

// informacioncd

import Btn from '../action/Btn';


class Directory extends Component {

    state = {
            contacts: [],
            deleteContact: false,
            newContacts: {
                name: '',
                phone: '',
                email: '',
                website: '',
            },
            usersSaved: []
    }


    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users'
        fetch(url)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    usersSaved: data
                });
            });
    }

    addContact= () => {
        this.setState(
            () => ({
                contacts: this.state.usersSaved,
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

    handleInput = (e) => {
        let value = e.target.value;
        let name = e.target.name;
        this.setState(
            prevState => ({
                newContacts:{
                    ...prevState.newContacts,
                [name]: value,}
            })
        )
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

    handleClear =(e) => {
        e.preventDefault();
        this.setState(()=>(
                {
                    newContacts: {
                        name:'',
                        phone: '',
                        website:'',
                        email: ''
                        
                    },
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
                    <div className="col s9">
                        {viewCard}
                    </div>
                    <div className="col s3">
                        <div className="row">
                            <div className="col s6">
                                <Btn clickHandler={this.addContact} type="Mostrar" icon="add"/>
                            </div>
                            <div className="col s6">
                                <Btn clickHandler={this.deleteContact} type="Eliminar" icon="delete"/>
                            </div>
                        </div>
                    </div>
                    <div className="col s12">
                        <form>
                            <h5>Agrega contactos nuevos</h5>
                        <div className="col s3">
                            <Input
                            name='name'
                            type='text'
                            value={this.state.newContacts.name}
                            placeholder='ingresa tu nombre'
                            handleChange={this.handleInput}
                            />
                        </div>
                        <div className="col s3">
                        <Input
                            name='phone'
                            type='text'
                            value={this.state.newContacts.phone}
                            placeholder='ingresa tu telefono'
                            handleChange={this.handleInput}
                            />
                        </div>
                        <div className="col s3">
                        <Input
                            name='email'
                            type='email'
                            value={this.state.newContacts.email}
                            placeholder='ingresa tu email'
                            handleChange={this.handleInput}
                            />   
                        </div>
                        <div className="col s3">
                            <Input
                            name='website'
                            type='text'
                            value={this.state.newContacts.website}
                            placeholder='ingresa tu webSite'
                            handleChange={this.handleInput}
                            />
                        </div>
                        <Btn 
                        clickHandler={this.handleFormSubmmit}
                        type="Agregar" icon="add"/>
                        <Btn 
                        clickHandler={this.handleClear}
                        type="Borrar" icon="delete"/>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Directory;