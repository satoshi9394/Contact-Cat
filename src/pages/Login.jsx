import React from 'react'

import InLogin from '../components/InLogin'



const About = (props) => {

    const goDirectory = () => {
        props.history.push('/directory');
    }


    return(
        <div className='row'>
            <div className="col s3">
            <InLogin
            name='nickname'
            type='text'
            value='password'
            placeholder='ingresa tu usuario'
            handleChange=''
            />
            </div>
            <div className="col s3">
            <InLogin
            name='password'
            type='text'
            value='password'
            placeholder='password'
            handleChange=''
            />
            </div>
            <div className="col s2">
                <button className='waves-effect waves-light btn' onClick={goDirectory}>
                    Iniciar secion
                </button>
            </div>
        </div>
    )
}

export default About;