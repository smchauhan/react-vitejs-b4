import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { BlogData } from '../../data/BlogData'
import { Button, Image } from 'react-bootstrap'

const BlogDetail = () => {
    const param = useParams()
    const locationInfo = useLocation() // where location = url
    const blogInfo = BlogData.filter((item) => item.id === parseInt(param.id))[0]
    return (
        <div>
            <h4>Blog Detail</h4>
            <hr />
            <Button href='http://localhost:5173/blog/' variant='link' >Back</Button>
            Current Location Information : <pre>{JSON.stringify(locationInfo, null, 2)}</pre>
            <hr />
            Blog ID : {(param.id)}<br />
            param : <pre>{JSON.stringify(blogInfo, null, 2)}</pre>
            <hr />
            <h1>{blogInfo?.title}</h1>
            <Image src={blogInfo?.image} />
            <p>{blogInfo?.body}</p>
        </div>
    )
}

export default BlogDetail