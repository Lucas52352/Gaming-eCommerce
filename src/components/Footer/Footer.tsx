import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import logo from '../NavBar/assets/Radtek1.png'
const Footer = () => {
  return (
    <div>

    <div className='footer'>

        <div className='socialMedia'>
            <p style={{color: 'white', fontWeight: 'bolder'}}>Social Media</p>
            <p className='iconSocialMedia'> <InstagramIcon/> Instagram</p>
            <p className='iconSocialMedia'> <FacebookIcon/> Facebook</p>
        </div>

        <div className='service'>
            <p className='titleService'>Customer Service Center</p>
            <p>Monday to Friday from 9 a.m. to 8 p.m. <br /> Saturday from 9 a.m. to 5 p.m.</p>
            <p className='iconService'><EmailIcon/> Contact</p>
            <p className='iconService'><WhatsAppIcon/>Whatsapp</p>
            <p className='iconService'><SupportAgentIcon/> 1111-000-1111</p>
        </div>

        <div className='githubs'>
            <p style={{color: 'white', fontWeight: 'bolder', textAlign:'center'}}>Creators</p>
            <p className='pGitHub'><GitHubIcon/> <Link className='linksGithub' to='https://github.com/Matias-Hernandez01' target='_blank'>Matias Hernandez</Link> </p>
            <p className='pGitHub'><GitHubIcon/> <Link className='linksGithub' to='https://github.com/Lucas52352' target='_blank'>Lucas Rius</Link> </p>
            <p className='pGitHub'><GitHubIcon/> <Link className='linksGithub' to='https://github.com/julianrodriguez2728' target='_blank'>Julian Rodriguez</Link> </p>
            <p className='pGitHub'><GitHubIcon/> <Link className='linksGithub' to='https://github.com/Manuel-latorre' target='_blank'>Manuel Latorre</Link> </p>
        </div>
    </div>
    <hr />
    <div className='copyright'>
        <img className='logoFooter' src={logo} alt="" />
        <p className='textCopy'>© Copyright - 2023. ALL RIGHTS RESERVED. The photos contained in this site, the logo and the trademarks are the property of www.radtek.com and / or their respective owners. <br /> Total or partial reproduction is prohibited, without the express authorization of the administrator of the virtual store.</p>
    </div>
    </div>
  )
}

export default Footer