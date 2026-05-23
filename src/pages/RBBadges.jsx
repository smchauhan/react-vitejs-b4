import React from 'react'
import { Badge, Stack } from 'react-bootstrap'
import { Basket } from 'react-bootstrap-icons'

const RBBadges = () => {
    return (
        <div>
            <h4>RB Badges</h4>
            <hr />
            <Stack gap={1} direction='horizontal'>
                <Badge pill={true}  >Pending</Badge>
                <Badge pill bg="primary" >Primary</Badge>
                <Badge bg="secondary">Secondary</Badge>
                <Badge bg="success">Success</Badge>
                <Badge bg="danger">Danger</Badge>
                <Badge bg="dark">Dark</Badge>
                <Badge bg="light" text="primary">Dark</Badge>
            </Stack>

            <Basket className='text-primary' />


            <br />

            <Badge pill={true} className='bg-success-subtle text-success' >Pending</Badge>
            <Badge pill={true} className='bg-primary-subtle text-primary' >Pending</Badge>
        </div>
    )
}

export default RBBadges
