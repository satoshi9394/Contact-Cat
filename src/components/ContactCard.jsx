import React from 'react'
import BtnAdd from '../action/Btn'



const ContactCard = (props) => {

    return(
    <div className="col s6">
        <div className="card horizontal cyan accent-4">
            <div className="card-content">
                <div className="row">
                    <div className="col s12">
                        <h4 className="center-aling">{props.info.name}</h4>
                    </div>
                    <div className="col s12">
                        <p>Email: {props.info.email}</p>
                    </div>
                    <div className="col s12">
                        <p>Telefono: {props.info.phone}</p>
                    </div>
                    <div className="col s12">
                        <p>Website: {props.info.website}</p> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}    

export default ContactCard