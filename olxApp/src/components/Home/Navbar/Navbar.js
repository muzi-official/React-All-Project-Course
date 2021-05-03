import React from 'react';
import './Navbar.css';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';



function Navbar() {
    return (
        <div className="Navbar">
            <div className="Navbar__category">

                <h3>
                    ALL CATEGORIES
                </h3>
                <span>
                    <ExpandMoreIcon fontSize="large" style={{ color: "#002F34" }} />
                </span>
            </div>
            <div className="Navbar__sub">
                <h4>
                    <a>
                        Mobile Phones
                    </a>
                </h4>
                <h4>
                    <a>
                        Cars
                    </a>
                </h4>
                <h4>
                    <a>

                        Motorcycles
                    </a>
                </h4>

                <h4>
                    <a>
                        Houses
                    </a>
                </h4>

                <h4>
                    <a>
                        TV-Video-Audio
                    </a>
                </h4>

                <h4>
                    <a>
                        Tablets
                    </a>
                </h4>

                <h4>
                    <a>
                        Lands & Plots
                    </a>
                </h4>

            </div>
        </div>
    )
}

export default Navbar
