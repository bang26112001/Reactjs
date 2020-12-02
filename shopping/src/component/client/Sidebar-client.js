import React from 'react'
import {
    ListGroup, 
    ListGroupItem, 
} from 'reactstrap'
export default function SidebarClient(props){
    return(
    <ListGroup>
        <ListGroupItem>Hoodie/Sweater</ListGroupItem>
        <ListGroupItem>Accessories</ListGroupItem>
        <ListGroupItem>Pant</ListGroupItem>
        <ListGroupItem>T-shirt</ListGroupItem>
        <ListGroupItem>Jacket</ListGroupItem>
        <ListGroupItem>Sale</ListGroupItem>
    </ListGroup>
    )
}