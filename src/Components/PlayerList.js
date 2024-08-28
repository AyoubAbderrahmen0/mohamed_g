import React from 'react'
import players from '../Players'
import Player from './Player'
import { Carousel, Spinner } from 'react-bootstrap'

const PlayerList = () => {
  return (
    <div className="d-flex justify-content-around flex-wrap">
      <Carousel interval={3000} controls={true} indicators={true}>
        {players.map((Playerr, index) => (
          <Carousel.Item key={index}>
            <Player Player={Playerr} />
          </Carousel.Item>
        ))}
      </Carousel>

    </div>
  )
}

export default PlayerList
