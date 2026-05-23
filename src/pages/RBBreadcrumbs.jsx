import React, { Fragment } from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { ArrowRight, ChevronRight, CodeSquare, Folder, HouseDoorFill } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom';

const RBBreadcrumbs = () => {
    const CustomLink = (props) => {
        const { href, children } = props;
        return (
            <Fragment>
                <Folder className='text-warning' />{' '}
                <Link to={href}>{children}</Link>
                <ChevronRight className='mx-2' />
            </Fragment>
        )
    };
    return (
        <div>
            <h4>RB Breadcrumbs</h4>
            <hr />

            <Breadcrumb >
                <Breadcrumb.Item href="/" bsPrefix=' ' linkAs={CustomLink}>Assignment</Breadcrumb.Item>
                <Breadcrumb.Item href="/" bsPrefix=' ' linkAs={CustomLink}>Projects</Breadcrumb.Item>
                <Breadcrumb.Item active> <CodeSquare className='text-info' /> Todo List</Breadcrumb.Item>
            </Breadcrumb>

            <Breadcrumb >
                <Breadcrumb.Item href="/" bsPrefix=' ' linkAs={CustomLink}>Cloud</Breadcrumb.Item>
                <Breadcrumb.Item href="/" bsPrefix=' ' linkAs={CustomLink}>Files</Breadcrumb.Item>
                <Breadcrumb.Item href="/" bsPrefix=' ' linkAs={CustomLink}>Projects</Breadcrumb.Item>
                <Breadcrumb.Item href="/" bsPrefix=' '>Figma <ChevronRight /></Breadcrumb.Item>
                <Breadcrumb.Item active>Project Name</Breadcrumb.Item>
            </Breadcrumb>




            {/* <Breadcrumb className="bg-success" listProps={{ className: "bg-light m-1", style: { padding: "20px" } }}>
                <Breadcrumb.Item href="/"><HouseDoorFill /></Breadcrumb.Item>
                <Breadcrumb.Item className="bg-info" href="/" bsPrefix=' ' linkAs={CustomLink}>
                    Components
                </Breadcrumb.Item>
                <Breadcrumb.Item href="/todolist" bsPrefix=' ' linkAs={CustomLink}
                // linkProps={{ className: "bg-success m-1 text-white", style: { padding: "20px" } }}
                >
                    Non Interactive
                </Breadcrumb.Item>
                <Breadcrumb.Item active><ArrowRight /> Breadcrumbs</Breadcrumb.Item>
            </Breadcrumb> */}
        </div>
    )
}

export default RBBreadcrumbs