import { Stepper } from '@material-ui/core';
import React from 'react';
import './About.css';
import VerticalLinearStepper from './Stepper';

function About() {
    return (
        <div className='About'  id='about'>
            <VerticalLinearStepper />
        </div>
    )
}

export default About;
