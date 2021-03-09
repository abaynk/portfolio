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
                        <p className='ExtraSection__list'>Junior CAD designer</p>
                    </div>
                    <div className='Step__contentSection'>
                        <h2>- IzBasar Mentorship <sup className='Step__contentSection__date'>June 2019 - April 2020</sup> </h2>
                        <p className='ExtraSection__list'>Mentor for Kazakhstani high school students</p>
                        <p className='ExtraSection__list'>IzBasar <a href='https://podcasts.google.com/feed/aHR0cHM6Ly9hbmNob3IuZm0vcy9lMjAwN2U4L3BvZGNhc3QvcnNz?sa=X&ved=0CAMQ4aUDahcKEwigs6ffvZ7vAhUAAAAAHQAAAAAQAg' rel="noreferrer" target='_blank'>Podcast</a> anchor and producer (more that 10K streams)</p>
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
                                <a href='https://firebase.google.com/' rel="noreferrer" target='_blank'><p>Firebase<img src={firebase} alt='not found' height='24px'/></p></a>
                                <a href='https://www.mongodb.com/3' rel="noreferrer" target='_blank'><p>MongoDB<img src={mongodb} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://nodejs.org/en/' rel="noreferrer" target='_blank'><p>Node.JS<img src={nodejs} alt='not found' height='24px'/></p></a>
                                <a href='https://cloud.google.com/gcp/' rel="noreferrer" target='_blank'><p>GCP<img src={gcp} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://expressjs.com/' rel="noreferrer" target='_blank'><p>Express</p></a>
                            </div>
                        </div>
                    </div>
                    <div className='Step__contentSection'>
                        <h2>- DevOps and other tools:</h2>
                        
                        <div className='Table'>
                            <div>
                                <a href='https://git-scm.com/' rel="noreferrer" target='_blank'><p>Git<img src={git} alt='not found' height='24px'/></p></a>
                                <a href='https://github.com/' rel="noreferrer" target='_blank'><p>GitHub<img src={github} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://insomnia.rest/' rel="noreferrer" target='_blank'><p>Insomnia<img src={insomnia} alt='not found' height='24px'/></p></a>
                                <a href='https://getbootstrap.com/' rel="noreferrer" target='_blank'><p>Bootstrap<img src={bootstrap} alt='not found' height='24px'/></p></a>
                            </div>
                            <div>
                                <a href='https://www.npmjs.com/get-npm' rel="noreferrer" target='_blank'><p>npm<img src={npm} alt='not found' height='24px'/></p></a>
                                <a href='http://getbem.com/' rel="noreferrer" target='_blank'><p>BEM</p></a>
                            </div>
                        </div>
                    </div>
                    <div className='Step__contentSection'>
                        <h2>- Soft Skills:</h2>
                        <div className='Table'>
                            <div>
                                <a href='https://enterprisersproject.com/article/2018/6/10-ted-talks-sharpen-your-communication-skills' rel="noreferrer" target='_blank'><p>Communication</p></a>
                                <a href='https://www.linkedin.com/pulse/10-ted-talks-every-needs-watch-team-work-search-ted-russell/' rel="noreferrer" target='_blank'><p>Team work</p></a>
                            </div>
                            <div>
                                <a href='https://www.ted.com/talks/mark_sylvester_see_what_you_think_a_recipe_for_problem_solving' rel="noreferrer" target='_blank'><p>Probelm Solving</p></a>
                                <a href='https://www.theunconventionalroute.com/keep-an-open-mind/' rel="noreferrer" target='_blank'><p>Open-mindedness</p></a>
                            </div>
                            <div>
                                <a href='https://www.ted.com/topics/empathy' rel="noreferrer" target='_blank'><p>Empathy</p></a>
                                <a href='https://www.developgoodhabits.com/learn-study-habit-books/' rel="noreferrer" target='_blank'><p>Quick learner</p></a>
                            </div>
                        </div>
                    </div>
                </div>
            );
    case 3:
      return (
                <div className='Table Hobbies'>
                    <div>
                        <p className='lang'>English<sub>(fluent)</sub></p>
                        <p className='lang'>Russian<sub>(native)</sub></p>
                    </div>
                    <div>
                        <p className='lang'>German<sub>(intermediate)</sub></p>
                        <p className='lang'>Kazakh<sub>(native)</sub></p>
                    </div>
                    <div>
                        <p className='lang'>Turkish<sub>(intermediate)</sub></p>
                    </div>
                </div>
             );
    case 4:
      return (
                <div className='Table Hobbies'>
                    <div>
                        <p className='lang'>Football<span>⚽</span></p>
                        <p className='lang'>Chess<span>♟</span></p>
                    </div>
                    <div>
                        <p className='lang'>Cooking<span>👨‍🍳</span></p>
                        <p className='lang'>Powerlifting<span>💪</span></p>
                    </div>
                    <div>
                        <p className='lang'>Classic Guitar<span>🎸</span></p>
                        <p className='lang'>Video Games<span>🎮</span></p>
                    </div>
                </div>
            );
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
            <StepLabel id={index}>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button href={`#${index-1}`}
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    {activeStep === 0 ? null :<ArrowUpwardIcon />}
                  </Button>
                  <Button href={activeStep === steps.length - 1 ? `#${index}` : '#0'}
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
