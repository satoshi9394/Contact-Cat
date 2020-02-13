import React from 'react'



const ContactCard = (props) => (
    <div className="col s6">
        <div className="card horizontal cyan accent-4">
            <div className="card-image valign-wrapper ">
                <img src={props.info.imgUrl} alt="Gatito"/>
            </div>
            <div className="card-content">
                <h4>{props.info.name}</h4>
                <p>Telefono:{props.info.phone}</p>
                <p>Email: {props.info.email}</p> 
            </div>
        </div>
    </div>
);

export default ContactCard