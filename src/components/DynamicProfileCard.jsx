import React from 'react'

const DynamicAvatar = ({ image = "https://www.svgrepo.com/show/420322/avatar-female-portrait-2.svg", }) => {
    return (
        <img src={image} style={{ width: "100px" }} />
    )
}


const DynamicProfileCard = (props) => {

    const {
        image = "https://www.svgrepo.com/show/420322/avatar-female-portrait-2.svg",
        name = "Your Name",
        age = 35,
        birthdate = new Date(),
        skills = [],
        experience = null,
        online = false
    } = props;

    return (
        <div className="container pt-3">
            <table>
                <tr>
                    <th className='text-primary'>Profile Picture : </th>
                    <td><DynamicAvatar image={image} /></td>
                </tr>
                <tr>
                    <th className='text-primary'>Name : </th>
                    <td>{name} </td>
                </tr>
                <tr>
                    <th className='text-primary'>Age : </th>
                    <td>{age}</td>
                </tr>
                <tr>
                    <th className='text-primary'>Birthdate  : </th>
                    <td>{birthdate.toDateString()}</td>
                </tr>

                <tr>
                    <th className='text-primary'>Skills  : </th>
                    <td>{skills.map((item, index) => <span className="badge text-bg-success me-2" key={index}>{item}</span>)}</td>
                </tr>

                <tr>
                    <th className='text-primary'>Experience  : </th>
                    <td> <ul>
                        {experience.map((item) => {
                            return (
                                <li key={item.id}>
                                    {item.jobTitle}
                                </li>
                            )
                        })}
                    </ul>
                    </td>
                </tr>
                <tr>
                    <th className='text-primary'>Is Online ?  : </th>
                    <td>{online ?
                        <span className="badge rounded-pill text-bg-success">Online</span> :
                        <span className="badge rounded-pill text-bg-danger">Offline</span>}</td>
                </tr>
            </table>
            <button onClick={props.onclick} className="btn btn-info">Click on Child button</button>
        </div>

    )
}

export default DynamicProfileCard