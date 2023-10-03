import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import AutohideAlert from "../tools/AutohideAlert";
import { useDispatch } from 'react-redux';

const FormEvent = () => {
    const dispatch = useDispatch();
    let submitForm = (event) => {
        event.preventDefault();
        let form = document.getElementById("formEvent");
        let formdata = new FormData(form);
        fetch("http://localhost:3000/api/event/add", { 
            method:"POST", 
            mode:"cors",
            body:formdata 
        })
        .then((response) => {
            if (response.status === 201) {
                dispatch({ type:"alerts/addAlert", payload: {title: "Event enregistré", text: "L'event a bien été enregistré", type: "success"}})
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
                <h1>Nouvel Evenement</h1>
                <Form id="formEvent" onSubmit={submitForm} >
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Nom</Form.Label>
                        <Form.Control type="text" name="title" defaultValue={"Art et Lumière 2023"}/>
                    </Form.Group>
                    <Form.Group className="mb-3"  controlId="description">
                        <Form.Label>Email *</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" defaultValue={"Le festival Art et Lumière - Vents d'Est à Furdenheim (67) est un événement incontournable de l'été bas-rhinois. Il se tiendra les 7, 8 et 9 juillet 2023. Comme chaque année, de nombreuses animations sont au programme, avec en clou du spectacle : le grand show aquatique !"}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="date">
                        <Form.Label>Date de l'évènement *</Form.Label>
                        <Form.Control type="date" name="date" defaultValue="2023-06-30"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="time">
                        <Form.Label>Heure de début de l'évènement *</Form.Label>
                        <Form.Control type="time" name="time" defaultValue="22:46"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="location">
                        <Form.Label>Lieu de l'évènement *</Form.Label>
                        <Form.Control type="text" name="location" defaultValue="10 rue François Noblat"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="categorie">
                        <Form.Label>catégorie *</Form.Label>
                        <Form.Control type="text" name="categorie" defaultValue="Musique"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="places">
                        <Form.Label>Nombre de place *</Form.Label>
                        <Form.Control type="number" name="places" defaultValue="0"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="price">
                        <Form.Label>Prix *</Form.Label>
                        <Form.Control type="number" name="price" defaultValue="0"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="avatar">
                        <Form.Label>Image de l'évènement</Form.Label>
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

export default FormEvent;