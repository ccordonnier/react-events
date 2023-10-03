import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import AutohideAlert from '../tools/AutohideAlert';
import { useDispatch } from 'react-redux';
import axios from "axios";

const Login = () => {
    const dispatch = useDispatch();
    let submitForm = async (event) => {
        event.preventDefault();
        let form = document.getElementById("formLogin");
        let formdata = new FormData(form);
        try{
        const response = await fetch("http://localhost:3000/api/login",{
            method:"POST", 
            mode:"cors",
            body: JSON.stringify(Object.fromEntries(formdata)),
            headers: {
                "Content-Type": "application/json",
            },
        });
        var alertId = Date.now();
        if (response.status === 200) {
            const data = await response.json();
            dispatch({ type:"alerts/addAlert", payload: {title: "Utilisateur enregistré", text: "L'utilisateur a bien été enregistré", type: "success", id: alertId}});
            window.setTimeout(()=>dispatch({ type:"alerts/removeAlert", payload: { id: alertId}}),5000);
        }else if (response.status === 401) {
            const errorData = await response.json();
            dispatch({ type:"alerts/addAlert", payload: {title: "Connexion impossible", text: errorData.message, type: "danger", id:alertId}})
        }
        }catch(error) {
            dispatch({ type:"alerts/addAlert", payload: {title: "Erreur lors de l'enregistrement", text: "erreur lors de l'enregistrement", type: "danger", id:alertId}})
        }
    };
    return (
        <div>
            <h1>Connexion</h1>
            <Form id="formLogin" onSubmit={submitForm} >
                <Form.Group className="mb-3"  controlId="mail">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control type="email" name="mail" defaultValue={"corentincordonnier@hotmail.fr"}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Mot de passe *</Form.Label>
                    <Form.Control type="password" name="password" defaultValue="azerty123"/>
                </Form.Group>
                <div>
                    <AutohideAlert></AutohideAlert>
                </div>
                <Button variant="primary" type="submit">
                    Enregistrer
                </Button>
            </Form>
        </div>
    );
};

export default Login;