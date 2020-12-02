import React from 'react'
import { 
    Container, 
    Row, 
    Col, 
    Pagination,
    PaginationItem,
    PaginationLink,
} from 'reactstrap'
import Productlist from './ProductList'
import Sidebarclient from './Sidebar-client'
export default function Allproducts(props) {
    
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col md={3}>
                        <Sidebarclient/>
                    </Col>
                    <Col md={9}>
                        <Productlist/>
                        <Pagination className="mt-5 d-flex justify-content-end" aria-label="Page navigation example">
                            <PaginationItem>
                                <PaginationLink first href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink previous href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                1
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                2
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                3
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                4
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink href="#">
                                5
                                </PaginationLink>
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink next href="#" />
                            </PaginationItem>
                            <PaginationItem>
                                <PaginationLink last href="#" />
                            </PaginationItem>
                            </Pagination>
                    </Col>
                </Row>
            </Container>
        </>
    )
}
