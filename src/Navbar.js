import React from 'react';
import './Navbar.css';
import { Button, Link, Switch } from '@material-ui/core';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Scrollspy from 'react-scrollspy';
const styles = {
    link: { marginRight: 10, fontSize: 18, color: '#212529',},
};

function Navbar() {
    return (
        <div className='Navbar'>
            <div className='Navbar__left'>
                <Switch
                    defaultChecked
                    color="default"
                    inputProps={{ 'aria-label': 'checkbox with default color' }}
                />
                <Link href="https://github.com/abaynk" target='_blank'>
                    <GitHubIcon style={{ margin: 9 }}/>
                </Link>
                <Link href="https://www.linkedin.com/in/abay-nurpeissov-1a44a0192/" target='_blank'>
                    <LinkedInIcon style={{ fontSize: 30, margin: 7 }} />
                </Link>
            </div>
            <div className='Navbar__right'>
                <Scrollspy 
                    items={ ['home', 'about', 'projects', 'contact']} currentClassName='is-current'
                >
                    <Link style={styles.link} className='Navbar__rightLink' href='#home'>
                        home
                    </Link >
                    <Link style={styles.link} className='Navbar__rightLink' href='#about'>
                        about
                    </Link>
                    <Link style={styles.link} className='Navbar__rightLink' href='#projects'>
                        projects
                    </Link>
                    <Link style={styles.link} className='Navbar__rightLink' href='#contact'>
                        contact
                    </Link>
                </Scrollspy>
            </div>
        </div>
    )
}

export default Navbar;
