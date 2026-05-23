import React, { useRef, useState } from 'react'
import { Button, Carousel, Image, Stack } from 'react-bootstrap'
import { ArrowLeftSquare, ArrowRightSquare } from 'react-bootstrap-icons';
import { v4 as uuid } from "uuid";

const RBCarousel = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    const sliderItems = [
        {
            id: uuid(),
            image: "https://wowslider.com/sliders/demo-44/data1/images/bridge.jpg",
            heading: "First slide label",
            content: "Nulla vitae elit libero, a pharetra augue mollis interdum."
        },
        {
            id: uuid(),
            image: "https://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg",
            heading: "Second slide label",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        },
        {
            id: uuid(),
            image: "https://wowslider.com/sliders/demo-18/data1/images/hongkong1081704.jpg",
            heading: "Third slide label",
            content: "Praesent commodo cursus magna, vel scelerisque nisl consectetur."
        }
    ]

    const sliderRef = useRef();
    return (
        <div> <h4>RB Carousel</h4>

            {/* 
        <div ref="containerdiv">
        <div id="containerdiv">
            This container div
        </div>
        <button onclick="changeContent()" >Change content</button>
        <script>
           // const obj = document.getElementByID("containerdiv")
            function changeContent(){
                document.getElementByID("containerdiv").innerHTML="Updated content...."
            }
        </script> 

        */}

            <hr />
            <Carousel
                ref={sliderRef}
                activeIndex={index}
                onSelect={handleSelect}
                controls={true}
                indicators={false}
                interval={1000}
                // touch
                prevIcon={<ArrowLeftSquare size={30} />}
                prevLabel="Previous Arrow"
                nextIcon={<ArrowRightSquare size={30} />}
                variant="light"
            // wrap={false}
            // keyboard
            // pause={false}
            >
                {sliderItems.map((item) => {
                    return (
                        <Carousel.Item key={item.id}>
                            <Image className='w-100' src={item.image} />
                            <Carousel.Caption>
                                <h3>{item.heading}</h3>
                                <p>{item.content}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>

            <Stack gap={1} direction="horizontal" className='py-2'>
                {sliderItems.map((item, index) => {
                    return (
                        <Image key={item.id}
                            style={{ width: "100px" }}
                            src={item.image}
                            onClick={() => setIndex(index)}
                            role='button' />
                    )
                })}
            </Stack>

            <Stack gap={1} direction="horizontal" >
                <Button onClick={() => sliderRef.current.prev()}>Previous</Button>
                <Button onClick={() => sliderRef.current.next()}>Next</Button>
            </Stack>
            <div>Active Carousel Item Index : {index}</div>
        </div>
    )
}

export default RBCarousel


