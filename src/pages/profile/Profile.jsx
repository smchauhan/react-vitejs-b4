import React, { useContext, useState } from 'react'
import ProfileA from '../../components/ProfileA'
import { UserContext } from '../../context/Context'
import { Button } from 'react-bootstrap'

const Profile = () => {
    const [usernameX, setUsernameX] = useState("Rakesh")
    const { username, setUsername } = useContext(UserContext)
    return (
        <div>
            Profile<br /><br />

            Current Username  (in Profile Page ) : <b>{usernameX}</b>
            <br />

            Gobal Context Value of Username  (in Profile Page ) : <b>{username}</b>
            <hr />

            <ProfileA username={usernameX} />

            <Button onClick={() => setUsername("Sumit")}>Change Global Username</Button>

        </div>
    )
}

export default Profile