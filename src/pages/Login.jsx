import React from 'react'

import Input from '../components/Input'



const About = (props) => {

    const goDirectory = () => {
        props.history.push('/directory');
    }


    return(
        <div className='row'>
            <div className="col s3">
            <Input
            name='nickname'
            type='text'
            value=''
            placeholder='ingresa tu usuario'
            handleChange=''
            />
            </div>
            <div className="col s3">
            <Input
            name='password'
            type='text'
            value=''
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