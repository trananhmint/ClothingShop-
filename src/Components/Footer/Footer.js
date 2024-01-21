import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_party.png'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';



const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer-logo">
                <img src={footer_logo} alt="" />
                <p>PARTY</p>
            </div>
            <ul className="footer-links">
                <li>Company</li>
                <li>Products</li>
                <li>Officers</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-footer-icons-">
                    <InstagramIcon />
                </div>
                <div className="footer-footer-icons-">
                    <PinterestIcon />
                </div>
                <div className="footer-footer-icons-">
                    <WhatsAppIcon />
                </div>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @ 2023 - All Right Reserved.</p>
            </div>
        </div>
    )
}

export default Footer