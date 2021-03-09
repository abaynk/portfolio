import React from 'react';
import './Contact.css';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import PhoneIcon from '@material-ui/icons/Phone';

function Contact() {
    return (
        <div className='Contact' id='contact'>
            <div className='Contact__row'>
                <div className='Contact__text'>
                    <p>It was my pleasure to meet you! If you would like to <span>collaborate</span>, please contact me:</p>
                </div>
                <div className='Contact__links'>
                    <a href='mailto:abaynk123@gmail.com?subject=collaboration&body=Hello, Abay! I would like to offer...' rel="noreferrer" target='_blank'><MailOutlineIcon fontSize='large'/></a>
                    <a href='https://www.linkedin.com/in/abay-nurpeissov-1a44a0192/' rel="noreferrer" target='_blank'><LinkedInIcon fontSize='large' /></a>
                    <a href='https://wa.me/+77086572266/?text=Hello, Abay! I would like to offer...' rel="noreferrer" target='_blank'><WhatsAppIcon fontSize='large' /></a>
                    <a href='tel:+4368120722018' rel="noreferrer" target='_blank'><PhoneIcon fontSize='large' /></a>
                </div>
            </div>
            <div className='Contact__row'>                
                <div className='Contact__credits'>
                    <p>{`//made with:`}</p>
                    <div className='Contact__creditsLists'>
                        <div>
                            <p>🛠:</p>
                            <p>React,</p>
                            <p>Firebase,</p>
                            <p>Material UI,</p>
                            <p>Figma</p>
                        </div>
                        <div>
                            <p>😜:</p>
                            <p>3 days,</p>
                            <p>6 cups of coffee,</p>
                            <p>Excitement,</p>
                            <p>Love</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
