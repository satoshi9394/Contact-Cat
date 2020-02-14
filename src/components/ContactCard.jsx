import React from 'react'
import BtnAdd from './Btn'



const ContactCard = (props) => {
    const add = () => (console.log("agregaste contacto"))
    return(
    <div className="col s6">
        <div className="card horizontal cyan accent-4">
            <div className="card-image valign-wrapper ">
                <img src={props.info.imgUrl} alt="Gatito"/>
            </div>
            <div className="card-content">
                <div className="row">
                    <div className="col s12">
                        <h4>{props.info.name}</h4>
                    </div>
                    <div className="col s12">
                        <p>Telefono:{props.info.phone}</p>
                    </div>
                    <div className="col s12">
                        <p>Email: {props.info.email}</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}    

export default ContactCard