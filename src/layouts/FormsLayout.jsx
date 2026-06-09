import { Col, Container, ListGroup, Row } from 'react-bootstrap'
import { NavLink, Outlet } from 'react-router-dom'
import { FormsData } from '../data/SidebarLinksData'
import { ArrowRight } from 'react-bootstrap-icons'

const FormsLayout = () => {
    return (
        <Container>
            <Row>
                <Col md={3}>
                    <h4>List of Forms</h4>
                    <ListGroup>
                        {FormsData.map((menu) => {
                            return (
                                <ListGroup.Item key={menu.id}>
                                    <ArrowRight />{' '}
                                    <NavLink to={menu.link} >{menu.menuName}</NavLink>
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>
                </Col>
                <Col md={9}>
                    <Outlet />
                </Col>
            </Row>
        </Container>
    )
}

export default FormsLayout