import React, { Component } from 'react'

class ListFavorited extends Component {
    render() {
        const { profilesLiked, users, movieID} = this.props;
        if(profilesLiked.length === 0) {
            return(<p key={movieID}>None of the current users liked this movie</p>)
        }
        return(
            <div className='list-favorited'>
                <p>Liked By:</p>
                <ul>
                    {profilesLiked.map(profile => (<p key={profile.userID}>{users[profile.userID].name}</p>))}
                </ul>
            </div>
        )
    }
}

export default ListFavorited