import React , { Component } from 'react';
import SOCIAL_PROFILES from './data/socialProfiles'

class Profile extends Component{
    render() {
        const{link, image} = this.props.profile;
        return (
            <div>
                <a href={link}> <img src={image} alt="profile"/></a>
            </div>
        );

    }
}

class Profiles extends Component {
    render() {
        return(
            <div>
                <h2>MY Contact</h2>
                {
                    SOCIAL_PROFILES.map(
                        (PROFILE) => {
                            return  (<Profile key={PROFILE.id} profile={PROFILE} />);
                        }
                    )
                }
                <hr />
            </div>
        );
    }
}

export default Profiles;