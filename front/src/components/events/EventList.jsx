import React, {useEffect, useState} from 'react';
import Bcard from '../cards/card';
const EventList = () => {
    const [events,setEvents] = useState([]);

    useEffect(()=>{

        fetch("http://localhost:3000/api/events", { method:"GET"  } )
        .then((response) => {
            console.log(response)
            if (response.status === 200) {
                return response.json();
            } else {
                throw new Error("Something went wrong on API server!");
            }
        })
        .then((data) => {
            console.log("data",data)
            setEvents(data);
        })
        .catch((error) => {
            console.error(error);
        });


    },[]);
    return (
        <>
        <h1>Events</h1>
        <div style={{display:"grid", gridTemplateColumns:"repeat(3,1fr)", gridGap:"10px"}}>
            {events.map(event => {
                return <Bcard title={event.title} image={event.image} description={event.description} date={new Date(event.date)} time={event.time}></Bcard>
            }) }
        </div>
        </>
    );
};

export default EventList;