import React from 'react'



const Btn = (props) => {

    return(
        <button 
        className="btn waves-effect waves-light btn-small"
        onClick={props.clickHandler}>
            <i className="material-icons right">{props.icon}</i>
            {props.type}
        </button>
    );
}    

export default Btn