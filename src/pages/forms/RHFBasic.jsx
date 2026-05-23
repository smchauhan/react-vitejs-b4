import { Button, Col, Form, Row } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { ToastContainer, toast } from 'react-toastify';

const RHFBasic = () => {

    const { handleSubmit, register, formState: { errors } } = useForm(
        {
            defaultValues: {
                firstName: "Rahul",
                phone: "9876543210",
                age: 25,
                password: "ab@123",
                email: "youremail@gmail.com",
                country: ['USA', 'India'],
                joiningDate: new Date().toISOString().split('T')[0],
                hobby: ["Drawing", "Singing"],
                gender: "Male"
            }
        }
    )

    const handleOnSubmit = (data) => {
        console.log("Form submitted ")
        toast("Your form has been submitted successfully!!!!")
        console.log(JSON.stringify(data))
    }
    return (
        <div>
            <h4>RHF Basic / Default Validation</h4>
            <hr />
            {/* {errors && Object.values(errors).map((err, index) => <div key={index} className='text-danger'>{err.message}</div>)} */}
            <Form onSubmit={handleSubmit(handleOnSubmit)} >

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
                                type="checkbox"
                                value={hobby}
                                {...register("hobby", {
                                    required: "Please select at least one hobby"
                                })}
                            />);
                    })}
                    <div className="text-danger">{errors?.hobby?.message}</div>
                </Form.Group>


                <Form.Group className="mb-3" controlId="color">
                    <Form.Label>Color</Form.Label>
                    <br />
                    <Form.Check
                        inline
                        label="Blue"
                        id="blue"
                        type="checkbox"
                        value="Blue"
                        {...register("color", { required: "Please select a color" })}
                    />
                    <Form.Check
                        inline
                        label="Red"
                        id="Red"
                        type="checkbox"
                        value="Red"
                        {...register("color")}
                    />
                    <Form.Check
                        inline
                        label="Green"
                        id="Green"
                        type="checkbox"
                        value="Green"
                        {...register("color")}
                    />
                    <div className="text-danger">{errors?.color?.message}</div>
                </Form.Group>

                <Form.Group className=
                    "mb-3" controlId=
                    "gender">
                    <Form.Label>Gender</Form.Label>
                    <br />




                    {["Male", "Female", "Transgender"].map((gender, index) => {
                        return (
                            <Form.Check
                                key={index}
                                inline
                                label={gender}
                                id={gender}
                                type="radio"
                                value={gender}
                                {...register("gender"
                                    , {
                                        required: "Please select your gender"
                                    })}
                            />);
                    })}
                    <div className=
                        "text-danger">{errors?.gender?.message}</div>
                </Form.Group>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="firstName">
                        <Form.Label>First name</Form.Label>
                        <Form.Control type="text" {...register("firstName", {
                            required: "Please enter first name it's required"
                        }
                        )} />
                        <div className="text-danger">{errors?.firstName?.message}</div>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="phone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" {...register("phone", {
                            required: "Please enter phone no it's required",
                            minLength: {
                                value: 10,
                                message: "Phone no. must equal to 10 digits"
                            },
                        }
                        )} />
                        <div className="text-danger">{errors?.phone?.message}</div>
                    </Form.Group>
                </Row>

                <Row className="mb-3">
                    <Form.Group as={Col} md="6" controlId="age">
                        <Form.Label>Age</Form.Label>
                        <Form.Control type="number" {...register("age", {
                            required: "Please enter age it's required",
                            min: {
                                value: 18,
                                message: "Minimum age can be 18"
                            },
                            max: {
                                value: 50,
                                message: "Maximum age can be 50"
                            }
                        }
                        )} />
                        <div className="text-danger">{errors?.age?.message}</div>
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="password">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="text" {...register("password", {
                            required: "Please enter password it's required",
                            minLength: {
                                value: 4,
                                message: "Password must be greater than or equal 4"
                            },
                            maxLength: {
                                value: 6,
                                message: "You can use maximum 6 character for password"
                            },
                            validate: (value) => {
                                // normal if condition
                                if (value.includes(' ')) {
                                    return "Password can't contain spaces"
                                }
                                const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>?]/.test(value);
                                const hasNumber = /\d/.test(value);
                                if (!hasSpecialChar || !hasNumber) {
                                    return "Password must contain at least one special character and one number.";
                                }
                                //short-circuit evaluation statement
                                // return !value.includes(' ') || "Password can't contain spaces"
                            }
                        }
                        )} />
                        <div className="text-danger">{errors?.password?.message}</div>
                    </Form.Group>


                </Row>


                <Row className="mb-3">


                    <Form.Group as={Col} md="6" controlId="email">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="text" {...register("email", {
                            required: "Please enter email address it's required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Please enter a valid email address"
                            }
                        }
                        )} />
                        <div className="text-danger">{errors?.email?.message}</div>
                    </Form.Group>


                    <Form.Group as={Col} md="6" controlId="joiningDate">
                        <Form.Label>Joining Date</Form.Label>
                        <Form.Control type="date" {...register("joiningDate", {
                            required: "Please enter your joining date",
                            validate: (value) => {
                                var currentDate = new Date()
                                var selectedDate = new Date(value)
                                if (selectedDate > currentDate) {
                                    return "Joining date must be less or equal to current date"
                                }
                            }
                        }
                        )} />
                        <div className="text-danger">{errors?.joiningDate?.message}</div>
                    </Form.Group>

                </Row>


                <Row>
                    <Form.Group as={Col} md="6" controlId="country" >
                        <Form.Select {...register("country",
                            {
                                required: "Country is required.",
                                validate: (value) => {
                                    // if (value.length < 2) {
                                    //     return "Please select minimum 2 countries"
                                    // }
                                    return value.length >= 2 || "Select at least two countries";
                                },
                                // validate: {
                                //     minSelection: (value) => {
                                //         if (value.length < 2) {
                                //             return "Please select minimum 2 countries";
                                //         } else {
                                //             return true;
                                //         }
                                //     }
                                // }

                            }
                        )} multiple>
                            <option value="">Select country</option>
                            <option value="India">India</option>
                            <option value="USA">USA</option>
                            <option value="Japan">Japan</option>
                            <option value="Rasia">Rasia</option>
                        </Form.Select>
                        <div className="text-danger">{errors?.country?.message}</div>
                    </Form.Group>


                    <Form.Group as={Col} md="6" controlId="yourCV">
                        <Form.Label>Your CV</Form.Label>
                        <Form.Control type="file"
                            {...register("yourCV", {
                                required: "Please select your CV",
                                validate: {
                                    acceptedFormats: (value) => {
                                        const file = value[0];
                                        // const acceptedFormatList = ["image/jpeg", "image/png", "image/gif"];
                                        const acceptedFormatList = [
                                            "application/pdf",
                                            "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                        ];
                                        // if (!acceptedFormatList.includes(file.type)) {
                                        //     return "Only PDF and DOCX files are allowed"
                                        // }
                                        return acceptedFormatList.includes(file.type) || "Only PDF and DOCX files are allowed"
                                    },
                                    fileSize: (value) => {
                                        const file = value[0];
                                        const maxAllowedSize = 2 * 1024 * 1024; // 2MB in bytes
                                        // if (file.size > maxAllowedSize) {
                                        //     return "File size must be less than 2MB."
                                        // }
                                        return file.size < maxAllowedSize || "File size must be less than 2MB."
                                    }
                                }
                            }
                            )} />
                        <div className="text-danger">{errors?.yourCV?.message}</div>
                    </Form.Group>

                </Row>
                <Row>
                    <Col>
                        <Button type="submit" >Submit</Button>
                    </Col>
                </Row>
            </Form>

            <ToastContainer />
        </div>
    )
}

export default RHFBasic
