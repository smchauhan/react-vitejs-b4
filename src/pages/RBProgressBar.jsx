import React, { useState } from 'react'
import { Button, ProgressBar, Spinner, Table } from 'react-bootstrap'

const RBProgressBar = () => {
    const [progress, setProgress] = useState(5)
    return (
        <div>
            <h3>ProgressBar</h3>
            <hr />
            <ProgressBar now={progress} label={progress + "%"} className='mb-2' striped />

            <ProgressBar now={progress} label={progress + "%"} variant='success' animated
                min={10} max={80} />

            <br />
            Current Progress : {progress}%
            <br />
            <Button onClick={() => setProgress(progress + 5)}>
                <Spinner size='sm' /> Update Progress</Button>

            <hr />

            <Table size="sm" bordered>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>


            <Table responsive>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )
}

export default RBProgressBar
