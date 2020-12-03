import React from "react";

import classes from "./Intro.module.css"
import Photo from '../../assets/images/photo.jpg';

function intro() {
    return (
        <main className={classes.Intro}>
            <img src={Photo} className={classes.Image} alt="My Photography" />
            <div className={classes.Presentation}>
                <h1>Hi, I'm Andres Acosta!</h1>
                <h4>My passion for coding,</h4>
                <h4>my engineering background,</h4>
                <h4>and my dedication</h4>
                <h4>garantee you the best experience building your website.</h4>
            </div>
            <div className={classes.ContactInfo}>
                <span>
                    <i className="fas fa-phone-square"></i>
                    (703)220-1317
                </span>
                <span>
                    <i className="fas fa-envelope"></i>
                    acosta.acosta.r@gmail.com
                </span>
                <span>
                    <i className="fab fa-github-square"></i>
                    <a
                        href="https://github.com/acosta-andres-r"
                        target="_blank"
                        rel="noopener noreferrer"
                    >acosta-andres-r</a>
                </span>
                <span>
                    <i className="fab fa-linkedin"></i>
                    <a
                        href="https://www.linkedin.com/in/andres-r-acosta"
                        target="_blank"
                        rel="noopener noreferrer"
                    >andres-r-acosta</a>
                </span>
            </div>
        </main>
    );
}

export default intro;