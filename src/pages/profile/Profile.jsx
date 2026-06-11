import React, { useContext, useEffect, useState } from 'react'
import ProfileA from '../../components/ProfileA'
import { UserContext } from '../../context/Context'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { deleteUser, getUserByID, updateUser } from '../../api/Services'
import { toast, ToastContainer } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

const Profile = () => {
    const [usernameX, setUsernameX] = useState("Rakesh")
    const { username, setUsername } = useContext(UserContext)
    const navigate = useNavigate()


    const [status, setStatus] = useState()
    const [userData, setUserData] = useState()
    const [error, setError] = useState()
    const { formState: { errors }, register, handleSubmit, setValue } = useForm()
    const fetchUserDetails = async () => {
        const userID = localStorage.getItem("id")
        try {
            const response = await getUserByID(userID)
            setStatus(response)
            setUserData(response.data)
        } catch (error) {
            console.log("Error  " + error)
            setError(error)
        }
    }

    const modifyUserData = async (data) => {
        try {
            const response = await updateUser(data)
            //  setStatus(response)
            if (response.status === 200) {
                toast.success("Record updated successfully")
            } else {
                toast.error("Something went wrong!!!!")
            }
        } catch (error) {
            // console.log("Error  " + error)
            // setError(error)
            toast.error(error.message)
        }
    }
    const handleFormSubmit = (data) => {
        console.log(data)
        modifyUserData(data)
    }

    useEffect(() => {
        if (userData) {
            setValue("id", userData?.id)
            setValue("username", userData?.username)
            setValue("email", userData?.email)
            setValue("password", userData?.password)
        }
    }, [userData])
    useEffect(() => {
        fetchUserDetails()
    }, [])



    const removeUserAccount = async (id) => {
        try {
            const response = await deleteUser(id)
            // setStatus(response)
            if (response.status === 200) {
                toast.success("Record deleted successfully")
                localStorage.removeItem("id")
                localStorage.removeItem("login")
                navigate("/auth/signin")
            } else {
                toast.error("Something went wrong!!!!")
            }
        } catch (error) {
            // console.log("Error  " + error)
            // setError(error)
            toast.error(error.message)
        }
    }
    const handleDeleteAccount = () => {
        console.log(userData?.id)
        removeUserAccount(userData?.id)

    }

    return (
        <div>
            Profile<br /><br />
            <Form onSubmit={handleSubmit(handleFormSubmit)}>
                <div className="form-group mb-3 row">
                    <label htmlFor="username" className="col-md-4 col-form-label text-md-right">Name</label>
                    <div className="col-md-6">
                        <input type="text" id="username" className="form-control" name="username"
                            {...register("username", { required: "Enter username" })}
                        />
                    </div>
                    <div className='text-danger' >{errors?.username?.message}</div>
                </div>
                <div className="form-group mb-3 row">
                    <label htmlFor="email" className="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                    <div className="col-md-6">
                        <input type="text" id="email" className="form-control" name="email"
                            {...register("email", { required: "Enter email address" })} />
                    </div>
                    <div className='text-danger' >{errors?.email?.message}</div>
                </div>

                <div className="form-group mb-3  row">
                    <label htmlFor="password" className="col-md-4 col-form-label text-md-right">Password</label>
                    <div className="col-md-6">
                        <input type="password" id="password" className="form-control" name="password"
                            {...register("password", { required: "Enter password" })}
                        />
                    </div>
                    <div className='text-danger' >{errors?.password?.message}</div>
                </div>

                <div className="col-md-6 offset-md-4">
                    <button type="submit" className="btn btn-primary">
                        Update Profile
                    </button>
                    <input type="hidden" id="id" className="form-control" name="id"
                        {...register("id")}
                    />
                </div>
            </Form>

            <Button variant='danger' onClick={handleDeleteAccount}>Delete My Account</Button>
            <hr />
            Current Username  (in Profile Page ) : <b>{usernameX}</b>
            <br />

            Gobal Context Value of Username  (in Profile Page ) : <b>{username}</b>
            <hr />

            <ProfileA username={usernameX} />

            <Button onClick={() => setUsername("Sumit")}>Change Global Username</Button>
            <ToastContainer />
        </div>
    )
}

export default Profile