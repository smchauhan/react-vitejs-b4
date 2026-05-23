import React from 'react'

const StaticProfileCard = () => {
    return (
        <table>
            <thead>
                <tr>
                    <th className='text-primary'>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Rakesh </td>
                    <td>rakesh@gmail.com</td>
                    <td>+91 1234567890</td>
                </tr>
            </tbody>
        </table>
    )
}

export default StaticProfileCard