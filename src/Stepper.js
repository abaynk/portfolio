import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import './Stepper.css';
import react from './frontend-logos/react.png';
import html from './frontend-logos/html.png';
import css from './frontend-logos/css.png';
import js from './frontend-logos/js.png';
import figma from './frontend-logos/figma.png';
import material from './frontend-logos/material.png';
import npm from './devops-logos/npm.png';
import insomnia from './devops-logos/insomnia.png';
import github from './devops-logos/github.png';
import git from './devops-logos/git.png';
import gcp from './devops-logos/gcp.png';
import bootstrap from './devops-logos/bootstrap.png';
import nodejs from './backend-logos/nodejs.png';
import mongodb from './backend-logos/mongodb.png';
import firebase from './backend-logos/firebase.png';
import express from './backend-logos/express.png';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '70%',
    marginLeft: '30%',
    // backgroundColor: 'green'
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['Education:', 'Extracurricular activities:', 'Skills:', 'Languages:', 'Also busy with:'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
                <div className='Step__contentContainer'>
                    <div className='Step__contentSection'>
                        <h2>- Technische Universität Wien <sup className='Step__contentSection__date'>October 2020 - July 2022</sup> </h2>
                        <p>Software and Informational Engineering BSc</p>
                    </div>
                    <div className='Step__contentSection'>
                        <h2>- Technische Universität Wien <sup className='Step__contentSection__date'>October 2018 - July 2020</sup> </h2>
                        <p>Mechanical Engineering BSc</p>
                    </div>
                </div>
             );
    case 1:
      return (
                <div className='Step__contentContainer'>
                    <div className='Step__contentSection'>
                        <h2>- TU Space Team <sup className='Step__contentSection__date'>October 2019 - June 2020</sup> </h2>
                        <p>Junior CAD designer</p>
                    </div>
                    <div className='Step__contentSection'>
                        <h2>- IzBasar Mentorship <sup className='Step__contentSection__date'>June 2019 - April 2020</sup> </h2>
                        <p>Mentor for Kazakhstani high school students</p>
                        <p>IzBasar Podcast anchor and producer (more that 10K streams)</p>
                    </div>
                </div>
              );
    case 2:
      return (
                <div className='Step__contentContainer'>
                    <div className='Step__contentSection'>
                        <h2>- Frontend:</h2>
                        <div className='Table'>
                            <div>
                                <a href='https://reactjs.org/' rel="noreferrer" target='_blank'><p>React<img src={react} alt='not found' height='24px'/></p></a>
                                <a href='https://www.w3schools.com/html/' rel="noreferrer" target='_blank'><p>HTML<img src={html} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://www.w3schools.com/css/' rel="noreferrer" target='_blank'><p>CSS<img src={css} alt='not found' height='24px'/></p></a>
                                <a href='https://www.w3schools.com/js/default.asp' rel="noreferrer" target='_blank'><p>JavaScript<img src={js} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://www.figma.com/' rel="noreferrer" target='_blank'><p>Figma<img src={figma} alt='not found' height='24px'/></p></a>
                                <a href='https://material-ui.com/' rel="noreferrer" target='_blank'><p>Material UI<img src={material} alt='not found' height='24px'/></p></a>
                            </div>
                        </div>
                    </div>
                    <div className='Step__contentSection'>
                        <h2>- Backend:</h2>
                        <div className='Table'>
                            <div>
                                <a href='https://reactjs.org/' rel="noreferrer" target='_blank'><p>Firebase<img src={firebase} alt='not found' height='24px'/></p></a>
                                <a href='https://www.w3schools.com/html/' rel="noreferrer" target='_blank'><p>MongoDB<img src={mongodb} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                {/* <a href='https://www.w3schools.com/css/' rel="noreferrer" target='_blank'><p>Firestore<img src={firebase} alt='not found' height='24px'/></p></a> */}
                                <a href='https://www.w3schools.com/js/default.asp' rel="noreferrer" target='_blank'><p>Node.JS<img src={nodejs} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://www.figma.com/' rel="noreferrer" target='_blank'><p>Express</p></a>
                            </div>
                        </div>
                    </div>
                    <div className='Step__contentSection'>
                        <h2>- DevOps and other tools:</h2>
                        
                        <div className='Table'>
                            <div>
                                <a href='https://reactjs.org/' rel="noreferrer" target='_blank'><p>Git<img src={git} alt='not found' height='24px'/></p></a>
                                <a href='https://www.w3schools.com/html/' rel="noreferrer" target='_blank'><p>GitHub<img src={github} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://www.w3schools.com/css/' rel="noreferrer" target='_blank'><p>Insomnia<img src={insomnia} alt='not found' height='24px'/></p></a>
                                <a href='https://www.w3schools.com/js/default.asp' rel="noreferrer" target='_blank'><p>Bootstrap<img src={bootstrap} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://www.figma.com/' rel="noreferrer" target='_blank'><p>npm<img src={npm} alt='not found' height='24px'/></p></a>
                                <a href='https://material-ui.com/' rel="noreferrer" target='_blank'><p>GCP<img src={gcp} alt='not found' height='24px'/></p></a>
                            </div>
                        </div>
                    </div>
                    <div className='Step__contentSection'>
                        <h2>- Soft Skills:</h2>
                        <div className='Table'>
                            {/* <div>
                                <a href='https://reactjs.org/' rel="noreferrer" target='_blank'><p>React<img src={react} alt='not found' height='24px'/></p></a>
                                <a href='https://www.w3schools.com/html/' rel="noreferrer" target='_blank'><p>Redux<img src={html} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://www.w3schools.com/css/' rel="noreferrer" target='_blank'><p>CSS<img src={css} alt='not found' height='24px'/></p></a>
                                <a href='https://www.w3schools.com/js/default.asp' rel="noreferrer" target='_blank'><p>JavaScript<img src={js} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://www.figma.com/' rel="noreferrer" target='_blank'><p>Figma<img src={figma} alt='not found' height='24px'/></p></a>
                                <a href='https://material-ui.com/' rel="noreferrer" target='_blank'><p>Material UI<img src={material} alt='not found' height='24px'/></p></a>
                            </div> */}
                        </div>
                    </div>
                </div>
            );
    case 3:
      return `languages`;
    case 4:
      return `Also busy with`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical" style={{ textAlign: 'left', backgroundColor: 'transparent'}}>
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    {activeStep === 0 ? null :<ArrowUpwardIcon />}
                  </Button>
                  <Button
                    onClick={activeStep === steps.length - 1 ? handleReset : handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Read Again' : <ArrowDownwardIcon />}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {/* {activeStep === steps.length && (
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
      )} */}
    </div>
  );
}
