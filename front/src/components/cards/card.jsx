import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Bcard = (props) => {
    console.log(props.date.getFullYear());
    return (
        <Card style={{}}>
          <Card.Img variant="top" src={props.image ? "avatars/"+props.image : "avatars/no-image.jpg"} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <small className="text-muted">Le {props.date.getDate()}/{props.date.getMonth()}/{props.date.getFullYear()}, {props.time}</small>
            
            <Card.Text style={{marginTop:"10px"}}>
                {props.description}
            </Card.Text>
            <Button variant="primary">Voir plus</Button>
          </Card.Body>
        </Card>
      );
};

export default Bcard;