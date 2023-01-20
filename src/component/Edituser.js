import React, { useEffect, useState } from "react";
import { FormGroup, FormControl, Input, InputLabel, Typography, variant, Button, styled } from "@mui/material";
import BookDataService from "../servies/book.services"
import { useNavigate, useParams } from "react-router-dom"
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


const Edituser = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [userid, setuserid] = useState(initalVal)
    useEffect(() => {
        getuserdata()
    }, [])
    const getuserdata = async () => {
        let res = await BookDataService.getBook(id);
        const response = res.data();
        console.log("BookDataService", response);
        setuserid(response);
        // console.log(res)
    }
    const onuseredit = (e) => {
        setuserid({ ...userid, [e.target.name]: e.target.value })
        console.log(userid)
    }
    const edituser = async () => {
        await BookDataService.updateBook(id, userid)
        navigate('/alluser')
    }

    return <>
        <Container >
            <Typography variant="h4" >Edit User</Typography>
            <FormControl>
                <InputLabel >Name</InputLabel>
                <Input name="name"
                    value={userid.name}
                    onChange={(e) => { onuseredit(e) }}
                />

            </FormControl>

            <FormControl>
                <InputLabel>User Name</InputLabel>
                <Input name="username"
                    value={userid.username}
                    onChange={(e) => { onuseredit(e) }}
                />

            </FormControl>

            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input name="email"
                    value={userid.email}
                    onChange={(e) => { onuseredit(e) }}
                />

            </FormControl>

            <FormControl>
                <InputLabel>phone No.</InputLabel>
                <Input name="phone"
                    value={userid.phone}
                    onChange={(e) => { onuseredit(e) }}
                />

            </FormControl>

            <FormControl>
                <Button variant="contained" onClick={() => { edituser() }}  >Edit user</Button>
            </FormControl>
        </Container>
    </>
}

export default Edituser