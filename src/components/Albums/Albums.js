import React, { Component } from 'react';
// import propTypes from 'prop-types';
import Album from '../Album/Album';
import '../App/App.css';

class Albums extends Component {
  constructor() {
    super();
    this.state = {
      albums: []
    }
  }
  componentDidMount() {
    fetch('https://gist.githubusercontent.com/rarmatei/f5ae92ac93d9716affab822a3f54f95b/raw/e62641b3f5ddd12c4fe34aa0912488224594e5a7/beyonce-albums.json')
      .then(response => response.json())
      .then(this.updateAlbums)
  }
  updateAlbums = (data) => {
    this.setState({
      albums: data
    })
  }
  render() {
    return (
      <div>
        <section>
          <h1>Albums</h1>
          {this.state.albums.map(function (album) {
            return (
              <Album
                key={album.albumId}
                album={album.collectionName}
                artist={album.artistName}
                imageUrl={album.artworkUrl100}
                releaseDate={album.releaseDate}
                genre={album.primaryGenreName}
                url={album.url} />
            )
          })}
        </section>
        {/* <div>{JSON.stringify(this.state.albums)}</div> */}
      </div>
    );
  }
}
// Albums.propTypes = {

// };

export default Albums;
