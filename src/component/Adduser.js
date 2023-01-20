import React, { useEffect, useState } from "react";
import { FormGroup, FormControl, Input, InputLabel, Typography, variant, Button, styled } from "@mui/material";
import { ValidatorComponent } from 'react-material-ui-form-validator';
import BookDataService from "../servies/book.services"
import { useNavigate } from "react-router-dom"
const initalVal = {
    name: '',
    username: '',
    email: '',
    phone: '',
}

const Container = styled(FormGroup)`
width: 60%;
margin: 5% auto 0 auto;
border:2px solid blue;
border-radius: 50px;
padding:2vw;
&> div{
    margin:15px;
    width:80%;
    margin:auto;
    margin-bottom:25px
}`


const Add_Users = () => {

    const [user, setuser] = useState(initalVal)
    const navigate = useNavigate()
    const onvaluChange = (e) => {
        setuser({ ...user, [e.target.name]: e.target.value })
        console.log(user)
    }
    const addUserdata = async () => {
        try {
            await BookDataService.addBooks(user)
        }
        catch (error) {
            console.log("error while calling edituser api", error.message)
        }
        navigate('/alluser')
    }

    return <>
        <Container >
            <Typography variant="h4" >Add User</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input name="name"
                    onChange={(e) => onvaluChange(e)}
                />

            </FormControl>

            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input name="username"
                    onChange={(e) => onvaluChange(e)}
                />

            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input name="email"
                    onChange={(e) => onvaluChange(e)}
                />

            </FormControl>

            <FormControl>
                <InputLabel>phone No.</InputLabel>
                <Input name="phone"
                    onChange={(e) => onvaluChange(e)}
                />

            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={() => { addUserdata() }} >Add User</Button>
            </FormControl>
        </Container>
    </>
}

export default Add_Users