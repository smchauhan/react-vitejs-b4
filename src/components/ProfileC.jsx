import React, { useContext } from 'react'
import { UserContext } from '../context/Context'

const ProfileC = ({ usernameX = '' }) => {
    const { username, setUsername } = useContext(UserContext)
    return (
        <div>
            Current Username (in ProfileC ): <b>{usernameX}</b><br />
            Global Context Value of Username  (in ProfileC ) : <b>{username}</b>
            <hr />
        </div>
    )
}

export default ProfileC