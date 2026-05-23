import React, { useContext, useState } from 'react'
import { Accordion, AccordionContext, Button, Card, Stack, useAccordionButton } from 'react-bootstrap'
import { Arrow90degDown, ArrowDown, ArrowDownSquare, ArrowUpSquare } from 'react-bootstrap-icons';
import About from "../About"
const RBAccordion = () => {
    const [activateAccordionItem, setActivateAccordionItem] = useState("item1")

    function CustomToggle({ children, eventKey }) {
        const decoratedOnClick = useAccordionButton(eventKey, () =>
            console.log('totally custom!' + eventKey),
        );

        const { activeEventKey } = useContext(AccordionContext);
        return (
            <div className={`p-3 d-flex justify-content-between fw-bold border-bottom ${eventKey === activeEventKey ? "text-primary" : "text-dark"}`} role='button'
                onClick={decoratedOnClick}
            >
                <span> {children}</span>
                {eventKey === activeEventKey ? <ArrowUpSquare size={22} /> : <ArrowDownSquare size={22} />}
            </div>
        );
    }

    return (
        <div>
            <h1>Accordion</h1>
            <hr />
            <About />
            <h3>Custom Accordion</h3>

            <Accordion defaultActiveKey="0">

                <div>
                    <CustomToggle eventKey="2">Click me!</CustomToggle>
                    <Accordion.Collapse eventKey="2">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </div>

                <div>
                    <CustomToggle eventKey="0">Click me!</CustomToggle>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </div>
                <div>
                    <CustomToggle eventKey="1">Click me!</CustomToggle>
                    <Accordion.Collapse eventKey="1">
                        <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </div>
            </Accordion>

            <hr />
            <br />
            <h3>Default Accordion</h3>
            Current Active Index = {JSON.stringify(activateAccordionItem)}
            <Accordion defaultActiveKey="item1" flush alwaysOpen
                onSelect={(e) => setActivateAccordionItem(e)} >
                <Accordion.Item eventKey="item1" >
                    <Accordion.Button >Accordion Item #1</Accordion.Button>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="item2">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="item3">
                    <Accordion.Header>Accordion Item #3</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
            <br />
            <Stack gap={3} direction='horizontal'>
                <Button onClick={() => setActivateAccordionItem("item1")}>Activate Item 1</Button>
                <Button onClick={() => setActivateAccordionItem("item2")}>Activate Item 2</Button>
            </Stack>





        </div>
    )
}

export default RBAccordion
