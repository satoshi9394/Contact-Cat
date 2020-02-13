import React , { Component } from 'react';
import ContactCard from './ContactCard';

// informacioncd
import contactsData from '../utils/contactsData'

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: contactsData,
            isToggleOn: false,
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(){
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
          }));
    }

    render() {
        const card = this.state.contacts.map((contact, idx) => 
        <ContactCard info={contact}  key={idx}/> );


        console.log(this.state.isToggleOn)
        if (this.state.isToggleOn === true){
            console.log("Este boton agregara un contacto al directorio")
            this.state.isToggleOn = false
        }else{
            console.log("No hay nada")
        }


        return (
            <div className='container'>
                <div className="row">
                    <div className="col s9">
                        {card}
                    </div>
                    <div className="col s3">
                        <a 
                        className="waves-effect waves-light btn-large"
                        onClick={this.handleClick}
                        >
                            <i className="material-icons right">add</i>
                            agregar
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Directory;