import React, { useState } from 'react'
import { Button, ButtonGroup, Dropdown, SplitButton, Stack } from 'react-bootstrap'
import { Speedometer } from 'react-bootstrap-icons'

const RBDropdowns = () => {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div>
            <h4>RB Dropdowns</h4>
            <hr />
            {/* <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br /> */}
            <Stack gap={2} direction='horizontal'>
                <Dropdown as={ButtonGroup} >
                    <Button variant="outline-primary">Split Button</Button>
                    <Dropdown.Toggle variant="outline-primary" id="dropdown-basic" split />
                    <Dropdown.Menu flip={true} rootCloseEvent="mousedown">
                        <Dropdown.Header>Dropdown header</Dropdown.Header>
                        <Dropdown.Item href="#/action-1" disabled >
                            <Speedometer /> Dashboard</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>

                <SplitButton variant="outline-primary" title="Split Button">
                    <Dropdown.Item eventKey="1">Action</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Another action</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                        Active Item
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item eventKey="4">Separated link</Dropdown.Item>
                </SplitButton>
                {/* 
                <Dropdown >
                    <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
                        Dropdown Button
                    </Dropdown.Toggle >

                    <Dropdown.Menu flip={false}>
                        <Dropdown.Header>Dropdown header</Dropdown.Header>
                        <Dropdown.Item href="#/action-1" disabled >
                            <Speedometer /> Dashboard</Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown> */}

            </Stack>
        </div>
    )
}

export default RBDropdowns