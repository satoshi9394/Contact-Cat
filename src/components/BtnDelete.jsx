import React from 'react'



const BtnDelete = (props) => {

    return(
    <div>
        <button 
        className="btn waves-effect waves-light btn-small"
        onClick={props.clickHandler}>
            <i className="material-icons right">add</i>
            Borrar
        </button>
    </div>
    );
}    

export default BtnDelete