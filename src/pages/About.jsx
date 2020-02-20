import React from 'react'



const About = (props) => {

    const goDirectory = () => {
        props.history.push('/directory');
    }


    return(
        <div>
            About...
            <button className='waves-effect waves-light btn' onClick={goDirectory}>
                Regresar al Directorio
            </button>
        </div>
    )
}

export default About;