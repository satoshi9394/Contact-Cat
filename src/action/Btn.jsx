import React from 'react'



const Btn = (props) => {

    return(
    <div>
        <button 
        className="btn waves-effect waves-light btn-small"
        onClick={props.clickHandler}>
            <i className="material-icons right">{props.icon}</i>
            {props.type}
        </button>
    </div>
    );
}    

export default Btn