import React from "react";

import classes from "./Portfolio.module.css"
import Card from "react-bootstrap/Card"
import employeedirectory from "../../assets/Projects/employee-directory.png"
import aesthetica from "../../assets/Projects/aesthetica.png"
import noteTaker from "../../assets/Projects/note-taker.png"
import generalKnowledge from "../../assets/Projects/general-knowledge.png"
import weatherDashboard from "../../assets/Projects/weather-dashboard.png"
import googleBookSearch from "../../assets/Projects/google-book-search.png"

const projects = [
    {
        title: "Employee Directory",
        text: "uses a search box to narrow results and each column to sort in ascending or descending order.",
        deployed: "https://acosta-andres-r.github.io/employee-directory/",
        github: "https://github.com/acosta-andres-r/employee-directory",
        source: employeedirectory,
        technologies: "React, JSX, CSS, HTML, JavaScript, Random User API"
    },
    {
        title: "Aesthetica",
        text: "is a user friendly and interactive app that bridges fashion and community.",
        deployed: "https://powerful-hamlet-32166.herokuapp.com/",
        github: "https://github.com/acosta-andres-r/aesthetica",
        source: aesthetica,
        technologies: "HTML, CSS, JavaScript, Node.js, Express, MySQL, Handlebars, Pexel API, ORM Sequelize"
    },
    {
        title: "Google Book Search",
        text: "search for a book and save its information to access later at any time.",
        deployed: "https://aa-google-book-search.herokuapp.com/",
        github: "https://github.com/acosta-andres-r/google-books-search",
        source: googleBookSearch,
        technologies: "React, JavaScript, Bootstrap, Node.js, Express, MongoDB, Google Books API"
    },
    {
        title: "Note Taker",
        text: "organizes your thoughts and keep track of your tasks by writing, saving, or deleting notes.",
        deployed: "https://stark-mountain-02801.herokuapp.com/",
        github: "https://github.com/acosta-andres-r/note-taker",
        source: noteTaker,
        technologies: "JavaScript, Bootstrap, Node.js, Express, File System (to save data in a JSON file)"
    },
    {
        title: "Weather Dashboard",
        text: "retrieves weather information from API by city names and store cities in the browser.",
        deployed: "https://acosta-andres-r.github.io/weather-dashboard/",
        github: "https://github.com/acosta-andres-r/weather-dashboard",
        source: weatherDashboard,
        technologies: "HTML, CSS (Flexbox, Transitions), Javascript, jQuery, Open Weather Map API, Local Storage"
    },
    {
        title: "General Knowledge Quiz",
        text: "shows multiple choice questions and interactivity with a timer to challenge the user.",
        deployed: "https://acosta-andres-r.github.io/general-knowledge-quiz/",
        github: "https://github.com/acosta-andres-r/general-knowledge-quiz",
        source: generalKnowledge,
        technologies: "HTML, CSS, Javascript (Animation created with Javasctipt and CSS), Google Fonts, Local Storage"
    }
]

const cards = projects.map((project, index) => {
    return (
        <Card style={{
            width: '30rem',
            margin: '7px',
            boxShadow: '1px 1px 4px 5px #ccc',
            border: '3px solid #43dde6'
        }} key={index}>
            <Card.Img
                variant="top"
                src={project.source}
                style={{
                    height: '300px',
                    border: '1px solid #000000'
                }}
            />
            <Card.Body>
                <Card.Title><strong>{project.title}</strong></Card.Title>
                <Card.Text>{project.text}</Card.Text> 
                <Card.Text><u>Tools</u>: {project.technologies}</Card.Text> 
                <Card.Link
                    href={project.deployed}
                    target="_blank"
                    rel="noopener noreferrer"
                >Deployed</Card.Link>
                <Card.Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                >GitHub</Card.Link>
            </Card.Body>
        </Card>
    )
})

const portfolio = () => {

    return (
        <main className={classes.Intro}>
            <h1>My Work</h1>
            <div className={classes.Projects}>
                {cards}
            </div>
        </main>
    );
}

export default portfolio;