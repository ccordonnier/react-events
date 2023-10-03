import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AutohideAlert from "../tools/AutohideAlert";
import { useDispatch } from 'react-redux';

const Signup = () => {
    const dispatch = useDispatch();
    let submitForm = (event) => {
        event.preventDefault();
        let form = document.getElementById("formUser");
        let formdata = new FormData(form);
        fetch("http://localhost:3000/api/user/add", { 
            method:"POST", 
            mode:"cors",
            body:formdata 
        })
        .then((response) => {
            if (response.status === 201) {
                dispatch({ type:"alerts/addAlert", payload: {title: "Utilisateur enregistré", text: "L'utilisateur a bien été enregistré", type: "success"}})
                return response.json();
            } else {
                throw new Error("Something went wrong on API server!");
            }
            
        })
        .then((data) => {
            console.log(data);
        })
        .catch((error) => {
            console.log(error);
            dispatch({ type:"alerts/addAlert", payload: {title: "Erreur lors de l'enregistrement", text: "erreur lors de l'enregistrement", type: "error"}})
        });
    }
    return (
        <div>
            <div>
                <h1>Nouvel utilisateur</h1>
                <Form id="formUser" onSubmit={submitForm} >
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="lastname">
                                <Form.Label>Nom</Form.Label>
                                <Form.Control type="text" name="lastname" defaultValue={"Cordonnier"}/>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="firstname">
                                <Form.Label>Prénom</Form.Label>
                                <Form.Control type="text" name="firstname" defaultValue={"Corentin"}/>
                            </Form.Group>
                        </Col>
                    </Row>  
                    <Form.Group className="mb-3"  controlId="mail">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control type="email" name="mail" defaultValue={"corentincordonnier@hotmail.fr"}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="username">
                        <Form.Label>Nom d'utilisateur *</Form.Label>
                        <Form.Control type="text" name="username" defaultValue="cordonniercor"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="password">
                        <Form.Label>Mot de passe *</Form.Label>
                        <Form.Control type="password" name="password" defaultValue="azerty123"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="confirm_password">
                        <Form.Label>Confirmation du mot de passe *</Form.Label>
                        <Form.Control type="password" name="confirm_password" defaultValue="azerty123"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="avatar">
                        <Form.Label>Photo de profil</Form.Label>
                        <Form.Control type="file" name="avatar"/>
                    </Form.Group>
                    <div>
                        <AutohideAlert></AutohideAlert>
                    </div>
                    <Button variant="primary" type="submit">
                        Enregistrer
                    </Button>
                </Form>
            </div>
        </div>
    );
};

export default Signup;