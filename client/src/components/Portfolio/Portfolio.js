import React from "react";

import classes from "./Portfolio.module.css"
import Card from "react-bootstrap/Card"
import employeedirectory from "../../assets/Projects/employee-directory.png"
import aesthetica from "../../assets/Projects/aesthetica.png"
import noteTaker from "../../assets/Projects/note-taker.png"
import generalKnowledge from "../../assets/Projects/general-knowledge.png"
import weatherDashboard from "../../assets/Projects/weather-dashboard.png"

const projects = [
    {
        title: "Employee Directory",
        text: "uses a search box to narrow results and the column to sort in ascending or descending order.",
        deployed: "https://acosta-andres-r.github.io/employee-directory/",
        github: "https://github.com/acosta-andres-r/employee-directory/blob/main/README.md",
        source: employeedirectory
    },
    {
        title: "Aesthetica",
        text: "is a user friendly and interactive app that bridges fashion and community.",
        deployed: "https://secure-ocean-28347.herokuapp.com/",
        github: "https://github.com/acosta-andres-r/aesthetica",
        source: aesthetica
    },
    {
        title: "Note Taker",
        text: "organizes your thoughts and keep track of your tasks by writing, saving, or deleting notes.",
        deployed: "https://stark-mountain-02801.herokuapp.com/",
        github: "https://github.com/acosta-andres-r/note-taker",
        source: noteTaker
    },
    {
        title: "Weather Dashboard",
        text: "retrieve weather information from API by city names and store cities in the browser.",
        deployed: "https://acosta-andres-r.github.io/weather-dashboard/",
        github: "https://github.com/acosta-andres-r/weather-dashboard",
        source: weatherDashboard
    },
    {
        title: "General Knowledge Quiz",
        text: "Shows multiple choice questions and interactivity with a timer to challenge the user.",
        deployed: "https://acosta-andres-r.github.io/general-knowledge-quiz/",
        github: "https://github.com/acosta-andres-r/general-knowledge-quiz",
        source: generalKnowledge
    }
]

const cards = projects.map((project, index) => {
    return (
        <Card style={{
            width: '18rem',
            margin: '7px',
            boxShadow: '1px 1px 4px 5px #ccc',
            border: '3px solid #43dde6'
        }} key={index}>
            <Card.Img
                variant="top"
                src={project.source}
                style={{
                    height: '175px',
                    border: '1px solid #000000'
                }}
            />
            <Card.Body>
                <Card.Title>{project.title}</Card.Title>
                <Card.Text>{project.text}</Card.Text>
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