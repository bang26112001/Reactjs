import React from 'react'
import {Link} from 'react-router-dom';
import {Button, 
    Col, 
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardSubtitle,
} from 'reactstrap'
export default function Product(props) {
    const {id,name,price,img} = props;
    const handleAddToCart = () => {
        props.addToCart({
            id,
            name,
            price,
            images:img
        },1)
    }
    return (
        <Col md={4} className="mb-5">
            <Card>
                <CardImg top width="100%" src={img} alt="Card image cap" />
                <CardBody>
                <CardTitle tag="h5">
                    <Link to={`/product/${id}`}>
                        {name}
                    </Link>
                 </CardTitle>
                <CardSubtitle tag="h6" className="mb-2 text-muted">{price}$</CardSubtitle>
                <Button color="primary" onClick={handleAddToCart}>Add to cart</Button>
                </CardBody>
            </Card>
        </Col>
    )
}
