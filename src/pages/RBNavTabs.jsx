import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'

const RBNavTabs = () => {
    return (
        <div>
            <h4>RB Nav Tabs</h4>
            <hr />

            <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                <Row>
                    <Col sm={12}>
                        <Nav>
                            <Nav.Item className='border border-bottom-1' >
                                <Nav.Link eventKey="first">Tab 1</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab 2</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>

                    <Col sm={12}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">First tab content</Tab.Pane>
                            <Tab.Pane eventKey="second">Second tab content</Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>

        </div>
    )
}

export default RBNavTabs

