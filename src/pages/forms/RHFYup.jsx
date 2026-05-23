
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

// Step No 1 - Install below two imports

// npm install @hookform/resolvers
import { yupResolver } from '@hookform/resolvers/yup';

// npm install yup
import * as yup from 'yup';

const RHFYup = () => {

    // List of validation rules supported:
    // RHF              Yup
    // required         required()
    // min              min()......array() / number()
    // max              max()......array() / number()
    // minLength        min()......string()
    // maxLength        max()......string()
    // pattern          matches()
    // validate         test()


    // Step No 2 - Create requried schema
    const myFormSchema = yup.object().shape(
        {
            firstName: yup
                .string()
                .required("Please enter first name it's required"),
            email: yup
                .string()
                .required("Please enter email address it's required")
                .matches(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, "Please enter a valid email address"),
            gender: yup.string().required("Please select a gender"),
            hobby: yup
                .array()
                .typeError("Please select hobbies")
                .min(2, "Minimum 2 hobbies must be selected"),
            age: yup
                .number()
                .typeError("Please enter your age in numeric")
                .min(18, "Age must be greater or equal to 18")
                .max(50, "Age must be less or equal to 50"),
            password: yup
                .string()
                .required("Please enter password it's required")
                .min(4, "Password must be greater than or equal 4")
                .max(6, "You can use maximum 6 character for password")
                .test("ToCheckInBetweenSpace", "Password can't contain spaces", (value) => {
                    if (value.includes(' ')) return false; else return true;
                })
                .matches(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/, "Password must contain at least one special character")
                .matches(/\d/, "Password must contain at least one digit"),
            confimrPassword: yup
                .string()
                .required("Please enter confirm password")
                .test("matchWithPassword", "Confirm password must be same as password", (value) => {
                    if (value === password.value) {
                        return true
                    } else {
                        return false
                    }
                }),
            yourCV: yup
                .mixed()
                .test("customRequired", "Please select your CV", (value) => {
                    return value.length > 0; //value[0]
                })
                .test("acceptedFormats", "Only PDF and DOCX files are allowed", (value) => {
                    if (!value || !value[0]) return false;
                    const file = value[0];
                    const acceptedFormatList = [
                        "application/pdf",
                        "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                    ];
                    return acceptedFormatList.includes(file.type)

                    // if (acceptedFormatList.includes(file.type)) {
                    //     return true
                    // } else {
                    //     return false;
                    // }
                })
                .test("fileSize", "File size must be less than 2MB.", (value) => {
                    if (!value || !value[0]) return false;
                    const file = value[0];
                    const maxAllowedSize = 2 * 1024 * 1024; // 2MB in bytes
                    return file.size < maxAllowedSize
                })
        }
    );

    // Step No 3 - use useForm hook as per below
    const { handleSubmit, register, formState: { errors } } = useForm({
        resolver: yupResolver(myFormSchema),
        defaultValues: {
            firstName: "Rakesh",
            email: "rakesh@gmail.com",
            gender: "Male",
            hobby: ["Drawing", "Dancing"],
            age: 18,
            password: "Aa@123",
            confimrPassword: "Aa@123"
        }
    })


    // Step No 4 - declare submit function
    const handleOnSubmit = (data) => {
        console.log("Form submitted ")
        console.log(JSON.stringify(data))
    }
    return (
        <div>
            <h4>RHF Yup Validation</h4>
            <hr />

            {/* // Step No 5 - Create complete form */}
            <Form onSubmit={handleSubmit(handleOnSubmit)} >
                <Row>
                    <Form.Group as={Col} md="6" controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" {...register("firstName")} />
                        <div className="text-danger">{errors?.firstName?.message}</div>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type="text" {...register("email")} />
                        <div className="text-danger">{errors?.email?.message}</div>
                    </Form.Group>
                </Row>


                <Row>
                    <Form.Group as={Col} md={12} className="mb-3" controlId="gender">
                        <Form.Label>Gender</Form.Label><br />
                        {["Male", "Female", "Transgender"].map((gender, index) => {
                            return (
                                <Form.Check
                                    key={index}
                                    inline
                                    label={gender}
                                    id={gender}
                                    value={gender}
                                    type="radio"
                                    {...register("gender")}
                                />);
                        })}
                        <div className="text-danger">{errors?.gender?.message}</div>
                    </Form.Group>
                </Row>


                <Form.Group className="mb-3" controlId="hobby">
                    <Form.Label>Hobbies</Form.Label>
                    <br />
                    {["Drawing", "Singing", "Dancing"].map((hobby, index) => {
                        return (
                            <Form.Check
                                key={index}
                                inline
                                label={hobby}
                                id={hobby}
                                value={hobby}
                                type="checkbox"
                                {...register("hobby")}
                            />);
                    })}
                    <div className="text-danger">{errors?.hobby?.message}</div>
                </Form.Group>
                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" {...register("age")} />
                        <div className="text-danger">{errors?.age?.message}</div>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="age2">
                        <Form.Label>Age2</Form.Label>
                        <Form.Control type="text" {...register("age2")} />
                        <div className="text-danger">{errors?.age2?.message}</div>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" {...register("password")} />
                        <div className="text-danger">{errors?.password?.message}</div>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="confimrPassword">
                        <Form.Label>Confimr Password</Form.Label>
                        <Form.Control type="text" {...register("confimrPassword")} />
                        <div className="text-danger">{errors?.confimrPassword?.message}</div>
                    </Form.Group>

                </Row>

                <Row>
                    <Form.Group as={Col} md="12" controlId="yourCV">
                        <Form.Label>Your CV</Form.Label>
                        <Form.Control type="file" {...register("yourCV")} />
                        <div className="text-danger">{errors?.yourCV?.message}</div>
                    </Form.Group>
                </Row>
                <Row>
                    <Col className='mt-3'>
                        <Button type="submit" >Submit</Button>
                    </Col>
                </Row>

            </Form>

        </div>
    )
}

export default RHFYup