import React from 'react'
import { Button, Card } from 'react-bootstrap'

function Player(props){
    return (
        <div className="d-flex justify-content-center mt-3">
            <Card style={{ width: '400px' , height: '600px' }}>
                <Card.Img variant="top" src={props.Player.imageURL} style={{ width: '300px', height: '400px' ,position: 'relative', right: '-45px', top: '10px'}}  />
                <Card.Body>
                    <Card.Title>{props.Player.name}</Card.Title>
                    <Card.Text>
                        {props.Player.team} - {props.Player.nationality} - {props.Player.jerseyNumber} - {props.Player.age}
                    </Card.Text>
                    <Button variant="primary">more</Button>
                </Card.Body>
            </Card>
        </div>
    )
}
export default Player
