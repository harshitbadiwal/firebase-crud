import {Table, TableBody, TableCell, TableHead, TableRow,styled, Button, variant} from "@mui/material";
import BookDataService from "../servies/book.services"
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom"



const StyledTable = styled(Table)
`width:90%;
margin:25px auto 0 auto
`
const Thead = styled(TableRow)`
background:#000;
& > th{
    color:#fff;
    font-size:20px;
}`

const Tbody =styled(TableRow)`
&>td{
    font-size:20px
}`

const AllUsers=()=>{
   
    const [userList,setuserlist] = useState([])
useEffect(()=>{
    getBooks()
},[])
const getBooks=async()=>{
    let res = await BookDataService.getAllBooks()
setuserlist(res.docs((doc) => ({...doc.data(), id: doc.id })));
    
    // res.forEach((docs) => {
    //     console.log(docs.data())
    //     // console.log("//////", setuserlist)
    // })
    console.log("/////////",res.docs)
    
}
const deleteuser=async(id)=>{
await BookDataService.deleteBook(id)
getBooks()
}



    return<>
       <StyledTable>
        <TableHead>
            <Thead>
                <TableCell>Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Username</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone</TableCell>
                <TableCell></TableCell>
            </Thead>
        </TableHead>
        <TableBody>
            {
                userList.map((doc,id)=>(
                    <Tbody key={doc.id}>
                        

                        <TableCell>{id+1}</TableCell>
                        <TableCell>{doc.name}</TableCell>
                        <TableCell>{doc.username}</TableCell>
                        <TableCell>{doc.email}</TableCell>
                        <TableCell>{doc.phone}</TableCell>
                        <TableCell>
                            <Button variant="contained" style={{marginRight:10}} component={Link} to={`/edit/${doc.id}`}  >Edit</Button>

                            <Button variant="contained" color="secondary" onClick={(e)=>deleteuser(doc.id)} >Delete</Button>
                        </TableCell>
                    </Tbody>
                ))
            }
        </TableBody>
       </StyledTable>
    </>
}

export default AllUsers