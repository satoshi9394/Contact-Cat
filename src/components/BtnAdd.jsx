import React from 'react'



const BtnAdd = (props) => {

    return(
    <div>
        <button 
        className="btn waves-effect waves-light btn-small"
        onClick={props.clickHandler}>
            <i className="material-icons right">add</i>
            agregar
        </button>
    </div>
    );
}    

export default BtnAdd