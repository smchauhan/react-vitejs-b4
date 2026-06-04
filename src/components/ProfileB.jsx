import React from 'react'
import ProfileC from './ProfileC'

const ProfileB = ({ username = '' }) => {
    return (
        <div>
            {/* Current Username (in ProfileB ): <b>{username}</b> */}
            <ProfileC usernameX={username} />
        </div>
    )
}

export default ProfileB