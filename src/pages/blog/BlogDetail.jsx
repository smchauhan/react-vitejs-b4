import React, { useEffect } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { BlogData } from '../../data/BlogData'
import { Button, Image } from 'react-bootstrap'

const BlogDetail = () => {
    const param = useParams()
    const locationInfo = useLocation() // where location = url
    const navigate = useNavigate()

    const blogInfo = BlogData.filter((item) => item.id === parseInt(param.id))[0];
    useEffect(() => {
        if (locationInfo.hash) {
            const element = document.querySelector(locationInfo.hash)
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth' })
                }, 100)
            }
        }
    }, [locationInfo])

    return (
        <div>
            <h4>Blog Detail</h4>
            <hr />
            {/* <Button onClick={() => navigate(-1)} >Back</Button> */}
            <Button href="/blog" variant='link' >Back</Button>
            Current Location Information : <pre>{JSON.stringify(locationInfo, null, 2)}</pre>
            <hr />
            Blog ID : {(param.id)}<br />
            param : <pre>{JSON.stringify(blogInfo, null, 2)}</pre>
            <hr />
            <h3>Location Information</h3>
            {locationInfo.search}

            {locationInfo.hash}
            <h1 id="heading">{blogInfo?.title}</h1>
            <Image src={blogInfo?.image} />
            <p>{blogInfo?.body}</p>
        </div>
    )
}

export default BlogDetail