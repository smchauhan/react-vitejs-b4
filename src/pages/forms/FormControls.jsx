import React, { useState } from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'

const FormControls = () => {
    const [name, setName] = useState()
    const [remarks, setRemarks] = useState("This is remarks")
    const [payment, setPayment] = useState("UPI")
    const [paymentType, setPaymentType] = useState("Netbanking")
    const [selectedColors, setSelectedColors] = useState([])
    const [rangeValue, setRangeValue] = useState(0)
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted..." + paymentType)
    }

    const handleSelectedColors = (e) => {
        const { value, checked } = e.target
        if (checked) {
            setSelectedColors([...selectedColors, value])
        } else {
            setSelectedColors(selectedColors.filter(color => color !== value))
        }
    }
    return (
        <div><h4>RB Form Controls</h4>
            <hr />
            {/* Selected Colors :  {selectedColors.length > 0 ? selectedColors.join(", ") : "None"} */}
            Selected Payment type : {paymentType}

            <InputGroup className="mb-1">
                <InputGroup.Text>First and last name</InputGroup.Text>
                <Form.Control aria-label="First name" />
                <Form.Control aria-label="Last name" />
            </InputGroup>
            <InputGroup className="mb-1">
                <InputGroup.Text>Email</InputGroup.Text>
                <Form.Control aria-label="First name" />
            </InputGroup>
            <InputGroup className="mb-3">
                <InputGroup.Text>Phone</InputGroup.Text>
                <Form.Control aria-label="First name" />
            </InputGroup>
            <Form.Group className="mb-3" controlId="range">
                <Form.Label>Range Value : {rangeValue}</Form.Label>
                <Form.Range value={rangeValue} step={10}
                    min={0} max={500} onChange={(e) => setRangeValue(e.target.value)} />
            </Form.Group>

            <Form.Group className="mb-3" controlId="name">
                <Form.Label>Payment Type</Form.Label>
                {["UPI", "Credit Card", "Netbanking"].map((data, index) => {
                    return (
                        <Form.Check
                            key={index}
                            type="radio"
                            id={data}
                            label={data}
                            value={data}
                            checked={paymentType === data ? true : false}
                            onChange={(e) => setPaymentType(e.target.value)}
                            name="payment-type"
                        />
                    )
                })}
            </Form.Group>


            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Select Hobbies</Form.Label>
                    {["Dancing", "Singing", "Drawing"].map((data, index) => {
                        return (
                            <Form.Check
                                key={index}
                                type="switch"
                                id={data}
                                label={data}
                                value={data}
                                checked={selectedColors.includes(data) ? true : false}
                                onChange={handleSelectedColors}
                            />
                        )
                    })}

                    {/* <Form.Check
                        type="checkbox"
                        id="dancing"
                        label="Dancing"
                        value="Dancing"
                        checked={selectedColors.includes("Dancing") ? true : false}
                        onChange={handleSelectedColors}
                    />
                    <Form.Check
                        type="checkbox"
                        id="singing"
                        label="Singing"
                        value="Singing"
                        checked={selectedColors.includes("Singing") ? true : false}
                        onChange={handleSelectedColors}
                    />
                    <Form.Check
                        type="checkbox"
                        id="drawing"
                        label="Drawing"
                        value="Drawing"
                        checked={selectedColors.includes("Drawing") ? true : false}
                        onChange={handleSelectedColors}
                    /> */}
                </Form.Group>






                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Payment Type</Form.Label>
                    <Form.Select aria-label="Default select example"
                        value={payment}
                        onChange={(e) => setPayment(e.target.value)}>
                        <option>Select payment type</option>
                        <option value="UPI">UPI</option>
                        <option value="CC">CC</option>
                        <option value="Netbanking">Netbanking</option>
                    </Form.Select>
                </Form.Group>


                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        name="name"
                        defaultValue={name}
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter your name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="remarks">
                    <Form.Label>Example textarea</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        name="remarks"
                        defaultValue={remarks}
                        onChange={(e) => setRemarks(e.target.value)}
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        You need to enter minimum 50 words.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Default file input example</Form.Label>
                    <Form.Control type="file" />
                </Form.Group>


                <Button type='submit'>Submit</Button>
            </Form>



        </div>
    )
}

export default FormControls
