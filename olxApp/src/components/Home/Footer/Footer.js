import { Divider, IconButton } from '@material-ui/core'
import React from 'react'
import './Footer.css'
import Olx_App from '../../../Images/phone-app.png'

import Appstore2x from '../../../Images/appstore_2x.webp'
import Playstore2x from '../../../Images/playstore_2x.webp'
import Appstore from '../../../Images/appstore.webp'
import Playstore from '../../../Images/playstore.webp'

import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { BorderAllRounded } from '@material-ui/icons'


function Footer() {
    return (
        <div className="footer">
            <Divider />
            <div className="footer__app">
                <img src={Olx_App} />
                <div className="app_text">
                    <h1>TRY THE OLX APP</h1>
                    <p>Buy, sell and find just about anything
                    using the app on your mobile
                    </p>
                </div>
                <Divider orientation="vertical" flexItem />
                <div className="footer__store">
                    <h5>GET YOUR APP TODAY</h5>
                    <img src={Appstore2x} />
                    <img src={Playstore2x} />
                </div>
            </div>
            <Divider />
            <div className="footer__main">
                <section className="Categories">
                    <div className="sub_category">
                        <h3>
                            Popular Categories
                    </h3>
                        <ul>
                            <li>
                                <a>Cars 🚌</a>
                            </li>
                            <li>
                                <a>Flats for rent 🏠</a>
                            </li>
                            <li>
                                <a>Jobs 💻</a>
                            </li>
                            <li>
                                <a>Mobile Phones 📱 </a>
                            </li>
                        </ul>
                    </div>
                    <div className="sub_category">
                        <h3>
                            Trending Searches
                        </h3>
                        <ul>
                            <li>
                                <a>Bikes 🚴‍♂️</a>
                            </li>
                            <li>
                                <a>Watches ⌚</a>
                            </li>
                            <li>
                                <a>Books 📚 </a>
                            </li>
                            <li>
                                <a>Dogs 🐕</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sub_category">
                        <h3>
                            About Us
                        </h3>
                        <ul>
                            <li>
                                <a>About OLX Group</a>
                            </li>
                            <li>
                                <a>OLX Blog</a>
                            </li>
                            <li>
                                <a>Contact Us 📞</a>
                            </li>
                            <li>
                                <a>OLX for Businesses</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sub_category">
                        <h3>
                            OLX
                        </h3>
                        <ul>
                            <li>
                                <a>Help ❓</a>
                            </li>
                            <li>
                                <a>Sitemap 🗺 </a>
                            </li>
                            <li>
                                <a>Legal & Privacy Info ♾</a>
                            </li>
                        </ul>
                    </div>
                    <div className="sub_category">
                        <h3>
                            Follow Us
                        </h3>
                        <div className="Footer_socialmedia">
                            <IconButton>
                                <FacebookIcon />
                            </IconButton>
                            <IconButton>
                                <TwitterIcon />
                            </IconButton>
                            <IconButton>
                                <YouTubeIcon />
                            </IconButton>
                            <IconButton>
                                <InstagramIcon />
                            </IconButton>
                        </div>
                        <div className="Footer__apps">
                            <img src={Appstore} />
                            <img src={Playstore} />
                        </div>
                    </div>
                </section>
            </div>
            <footer className="footer-end">
                <section className="footer__othercountries">
                    <small>Other Countries  </small>
                    <small>India - South Africa - Indonesia</small>
                </section>
                <section className="footer__copyright">
                    <span>
                        Free Classifieds in Pakistan
                    </span>
                    <span>.</span>
                    <span>
                        &copy; 2006-2020 OLX
                    </span>
                </section>

            </footer>

        </div>
    )
}

export default Footer
