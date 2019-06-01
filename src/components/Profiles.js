import React from 'react';
import SOCIAL_PROFILES from '../data/socialProfiles'

const Profile = (props) => {
    const{link, image} = props.profile;
    return (
        <span style={{ margin: 10 }}>
            <a href={link}> <img src={image} alt="profile" style={{height: 100}}/></a>
        </span>
    );

}

const Profiles = () => (
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

export default Profiles;