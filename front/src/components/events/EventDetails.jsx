import React, { useState, useEffect } from 'react';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Popup } from 'react-leaflet/Popup';
import { Marker } from 'react-leaflet/Marker';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const EventDetails = () => {
    const [event,setEvents] = useState({});
    const [dateEvent, setDateEvent] = useState("")
    const monthNames = ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin",
    "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"];
    let id = "64abe0c04d6953a54424d8b7";
    useEffect(()=>{
        fetch('http://localhost:3000/api/event/'+id, {method:'GET',})
        .then(response=>{
            if(response.status == 200){
                return response.json();
            }else{
                throw new Error("Evènement introuvable ! ");
            }
        }).then((data)=> {
            setEvents(data);
            setDateEvent(new Date(data.date));
        }).catch((error)=>{
            console.error(error);
        })
    },[])
    return (
        <><div style={{height:"70vh",width:"100vw",maxWidth:"none",backgroundImage:(event.image?"url('avatars/"+event.image+"')" : "url('avatars/no-image.jpg')"),color:"white",display: "flex",flexDirection: "column",justifyContent: "flex-end",
    alignItems: "flex-start"}}>
                <div className="overlay" style={{backgroundColor:"rgba(0, 0, 0, 0.31)",width:"100%",height:"inherit",position:"absolute"}}></div>
                <div className="container" style={{zIndex:2}}>
                    <h1 style={{fontSize:"85px"}}>{event.title}</h1>
                    <div style={{fontSize:"30px"}}>
                        <span>{dateEvent!= "" && dateEvent.getDate()}/{dateEvent!= "" && dateEvent?.getMonth()}/{dateEvent!= "" && dateEvent?.getFullYear()}</span> <span>{event.time}</span>
                        <br></br>
                        <span>{event.location}</span>
                    </div>
                </div>
            </div>               
            <div className ="container">
                <div style={{display:"grid", gridTemplateColumns:"2fr 1fr", marginTop:"5vh", marginBottom:"5vh", gap:"3vw"}}>
                    <div style={{paddingRigth:"20px"}}>
                        <h2 style={{marginBottom:"20px"}}>Description</h2>            
                        <p>{event.description}</p>

                        <MapContainer center={[48.5702295, 7.7932847]} zoom={15} scrollWheelZoom={false} style={{height:"400px"}}>
                            <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[48.5702295, 7.7932847]}>
                                <Popup>
                                    {event.title}
                                </Popup>
                            </Marker>
                        </MapContainer>
               
                    </div>
                    <div style={{borderRadius: "29px",background: "#FFF",boxShadow: "1px 1px 4px 2px rgba(158, 158, 158, 0.60)",padding:"20px", height: "max-content"}}>
                        <h2>Détails</h2>
                        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between"}}>
                            <div style={{display:"flex",alignItems:"center",justifyContent: "space-between"}}>
                            <span style={{fontWeight:"bold",marginRight:"5px"}}>653 </span> <span>participants</span> 
                            <div style={{display:"flex",marginLeft:"10px"}}>
                                <span style={{width:"40px",height:"40px",borderRadius:"50px",backgroundColor:"lightgray",display:"flex",justifyContent:"center",alignItems:"center",boxShadow: "1px 1px 1px 1px rgba(158, 158, 158, 0.60)",zIndex:5}}>C</span>
                                <span  style={{width:"40px",height:"40px",borderRadius:"50px",backgroundColor:"lightgray",display:"flex",justifyContent:"center",alignItems:"center", marginLeft:"-10px",boxShadow: "1px 1px 1px 1px rgba(158, 158, 158, 0.60)",zIndex:4}}>A</span>
                                <span  style={{width:"40px",height:"40px",borderRadius:"50px",backgroundColor:"lightgray",display:"flex",justifyContent:"center",alignItems:"center", marginLeft:"-10px",boxShadow: "1px 1px 1px 1px rgba(158, 158, 158, 0.60)",zIndex:3}}>B</span>
                                <span  style={{width:"40px",height:"40px",borderRadius:"50px",backgroundColor:"lightgray",display:"flex",justifyContent:"center",alignItems:"center", marginLeft:"-10px",boxShadow: "1px 1px 1px 1px rgba(158, 158, 158, 0.60)",zIndex:2}}>E</span>
                            </div>
                            </div>
                            <div style={{marginRight:"20px", backgroundColor:"#FF0752", fontWeight:"bold", color: "white",padding:"5px 15px", borderRadius:"20px"}}>
                                <span>{event.price} €</span>
                            </div>
                        </div>
                        <div>
                            {dateEvent && (dateEvent.getDate()+" "+monthNames[dateEvent.getMonth()]+" "+dateEvent.getFullYear())}
                        </div>
                        <div>
                            {event.time}
                        </div>
                        <div>
                            {event.location}
                        </div>
                        <div style={{display: "flex", justifyContent: "center"}}>
                            <button style={{ backgroundColor:"#FF0752", fontWeight:"bold", color: "white",padding:"15px 40px", borderRadius:"20px",border:"none", marginTop:"20px"}}>S'inscrire</button>
                        </div>
                    </div>
                    
                </div>
                <div>
                    <h2>Contacter le créateur de l'évènement</h2>
                    <Form
                    style={{marginTop:"50px",width:"50vw"}}>
                        <Form.Group className="mb-3"  controlId="mail" style={{width:"35vw"}}>
                            <Form.Label>Email *</Form.Label>
                            <Form.Control type="email" name="mail" defaultValue={"corentincordonnier@hotmail.fr"}/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="subject" style={{width:"35vw"}}>
                            <Form.Label>Sujet</Form.Label>
                            <Form.Control type="text" name="subject"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="Message">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" rows={5} name="Message"/>
                        </Form.Group>
                        <Button variant="primary" type="submit" style={{backgroundColor:"#FF0752",border:"#FF0752"}} size='lg'>
                        Envoyer
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default EventDetails;