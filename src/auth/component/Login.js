
import { FormGroup,FormControl,Input,InputLabel,Typography,variant,Button,styled } from "@mui/material";
import GoogleButton from "react-google-button";
import {Link} from "react-router-dom"
const initalVal ={
name:'',
username:'',
email:'',
phone:'',
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


const Login=()=>{
  
    return<>
        <Container >
            <Typography variant="h4" >login</Typography>
            <FormControl>
                <InputLabel >Email</InputLabel>
                <Input name="email" 
               
                />

            </FormControl>

           
            
            <FormControl>
                <InputLabel>Password</InputLabel>
                <Input  name="password"
                type="password"
                
                />
                
            </FormControl>

           
            
            <FormControl>
                <Button variant="contained"  >login</Button>
            </FormControl>
            <GoogleButton/>
            
        </Container>
        <p>if you don't have account?  <Link to={'/Signup'}>SignUp</Link></p>
       
    </>
}

export default Login