import React from 'react';
import propTypes from 'prop-types';
import './Album.css';
import ReactPlayer from 'react-player'

const Album = props => (
  <div>
    <section class = "container">
      <h2>{props.album}</h2>
      <img src={props.imageUrl} />
      <p>Release date: {props.releaseDate}</p>
      <p>Genre: {props.genre}</p>
      {/* {<iframe width='500px' height='500px' src={props.url} >link</iframe>} */}
      {<ReactPlayer url={props.url} />}
    </section>
  </div>
);

Album.propTypes = {
  album: propTypes.string.isRequired,
  imageUrl: propTypes.string.isRequired,
  releaseDate: propTypes.string.isRequired,
  genre: propTypes.string.isRequired
};

export default Album;
