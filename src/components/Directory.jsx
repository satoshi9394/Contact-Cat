import React , { Component } from 'react';
import ContactCard from './ContactCard';
import NavBar from './NavBar';

// informacioncd
import contactsData from '../utils/contactsData'
import BtnAdd from './BtnAdd';

class Directory extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: contactsData,
            isToggleOn: false,
        }
        this.outputEvent = this.outputEvent.bind(this);
    }
    outputEvent(){
        this.setState(
            (state) => (
                {isToggleOn: !state.isToggleOn}
            )
        );       
    }

    render() {
        const card = this.state.contacts.map((contact, idx) => 
        <ContactCard info={contact}  key={idx}/> );


        console.log(this.state.isToggleOn)
        if (this.state.isToggleOn === true){
            console.log("Este boton agregara un contacto al directorio")
            setTimeout(() => {
                this.state.isToggleOn = !this.state.isToggleOn    
            }, 1000 );
        }else{
            console.log("Aun no presionas el boton")
        }


        return (
            <div className='container'>
                <div className="row">
                    <div className="col s12">
                        <NavBar/>
                    </div>
                    <div className="col s9">
                        {card}
                    </div>
                    <div className="col s3">
                        <BtnAdd clickHandler={this.outputEvent}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Directory;