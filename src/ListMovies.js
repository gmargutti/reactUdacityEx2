import React, { Component } from 'react';
import ListFavorited from './ListFavorited';

class ListMovies extends Component {
    render() {
        const { movies, users, profiles } = this.props;
        return(
            Object.keys(movies).map((movieID) => (
                <div className='list-movies' key={movieID}>
                    <h2>
                        {movies[movieID].name}
                    </h2>
                    <ListFavorited movieID={movieID} users={users} profilesLiked={profiles.filter((profile) => profilesLiked(profile, movieID))} />
                </div>
            ))
        )
    }
}

function profilesLiked(profile, movieID) {
    return profile.favoriteMovieID === movieID;
}

export default ListMovies