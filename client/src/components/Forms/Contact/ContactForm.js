import React, { useState } from "react";

import classes from "./ContactForm.module.css"
import Form from "react-bootstrap/Form"
import { Col, Button, Alert } from 'react-bootstrap'
import API from "../../../utils/API";


function Portfolio() {

    const [formObject, setFormObject] = useState({
        first: "",
        last: "",
        email: "",
        textarea: ""
    });

    const [emailStatus, setEmailStatus] = useState({
        emailResponse: "",
        isError: false
    });

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setFormObject({ ...formObject, [id]: value })
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();

        setFormObject({
            first: "",
            last: "",
            email: "",
            textarea: ""
        })

        API.sendEmail(formObject)
            .then(res => {
                // console.log(res)
                setEmailStatus({
                    emailResponse: res.data,
                    isError: false
                })
            })
            .catch(err => {
                // console.log(err.response)
                 setEmailStatus({
                    emailResponse: err.response.data,
                    isError: true
                })
            });
    };

    return (
        <main className={classes.Intro}>
            <h1>Contact Me!</h1>
            <Form className={classes.Form}>
                <Form.Row >
                    <Form.Group as={Col} controlId="first" sm={6}>
                        <Form.Label>First Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter first name"
                            onChange={handleInputChange}
                            value={formObject.first}
                        />
                    </Form.Group>

                    <Form.Group as={Col} controlId="last" sm={6}>
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter last name"
                            onChange={handleInputChange}
                            value={formObject.last}
                        />
                    </Form.Group>
                </Form.Row>

                <Form.Group controlId="email">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="name@example.com"
                        onChange={handleInputChange}
                        value={formObject.email}
                    />
                </Form.Group>

                <Form.Group controlId="textarea">
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={8}
                        placeholder="Write subject..."
                        onChange={handleInputChange}
                        value={formObject.textarea}
                    />
                </Form.Group>

                <Button
                    variant="primary"
                    type="submit"
                    disabled={!(formObject.first && formObject.last && formObject.email && formObject.textarea)}
                    onClick={handleFormSubmit}
                >
                    Submit
                </Button>

                <Alert
                    variant={emailStatus.isError ? 'danger' : 'success'}
                    style={{
                        display: emailStatus.emailResponse ? 'inline' : 'none',
                        marginLeft: '15px'
                    }}
                >{emailStatus.emailResponse}
                </Alert>
            </Form>

        </main>
    );
}

export default Portfolio;