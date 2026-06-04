import React from 'react'
import ProfileB from './ProfileB'

const ProfileA = ({ username = '' }) => {
    return (
        <div>
            {/* Current Username (in ProfileA ): <b>{username}</b>

            <hr /> */}

            <ProfileB username={username} />
        </div>
    )
}

export default ProfileA