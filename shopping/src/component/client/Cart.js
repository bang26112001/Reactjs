import React, { Component } from 'react'
import { 
    Container,
    Row,
    Col,
    Card,
    Button,
} from 'reactstrap'
import { Commonquantityinput } from './CommonQuantityInput'
import Imagecontainer from './Imagecontainer'
import {connect} from 'react-redux'
import Swal from 'sweetalert2'
import Axios from 'axios'
import TimesSolid from '../../assets/icon/times-solid'


class CartProduct extends React.Component{
    state={
        quantity:0,
    }
    componentDidMount(){
        this.setState({quantity:this.props.product.quantity})
    }
    handleDelete=()=>{
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                console.log(this.props.product.id_cart);
                this.props.deleteCart(this.props.product.id_cart)
                Swal.fire(
                   {
                       title:"Deleted",
                       showConfirmButton:false,
                       timer:1000,
                       icon:'success',
                       timerProgressBar:true
                   }
                )
            }
          })
    }
    handleChangeQuantity=(data,operator = false)=>{
        if(operator){
            if(this.state.quantity === 1 && data === -1){
                //delete
                this.handleDelete()
            }
            return this.setState({
                quantity:this.state.quantity + data
            },()=>{
                this.props.updateCart(this.props.product.id_cart,this.state.quantity)
            })
        }
        if(data === 0 || data < 0 ){
            //delete
            return this.handleDelete()
        }
        this.setState({
            quantity: data
        },()=>{
            this.props.updateCart(this.props.product.id_cart,this.state.quantity)
        })
    }
    
    render(){
        const {name,price,quantity,images,id,cart_id} = this.props.product;
        return <Card className="p-3">
        <Container fluid>
            <Row>
                <Col md={9}>
                    <Imagecontainer items={images}/>
                </Col>
                <Col md={3}>
                        <h3>
                            {name}
                        </h3>
                        <h5 className="text-warning">
                            Price: {price}$
                        </h5>
                        <Commonquantityinput onChange={this.handleChangeQuantity} value={this.state.quantity}/>
                        <Button color="primary" outline>Submit</Button>
                </Col>
            </Row>
        </Container>
        </Card>
    }
    
}
class CheckoutModal extends React.Component {
    state={
      full_name:"",
      phone:"",
      address:""
    }
    handleClose=()=>{
        this.props.toggleModal()
    }
    handleChange=(event)=>{
        this.setState({
         [event.target.name]: event.target.value
        })
  
     }
 
     handleSubmit=(event)=>{
        event.preventDefault();
     
        Axios.post('https://shopping-api-with-jwt.herokuapp.com/carts',{
            ...this.state,
            cart:[
                ...this.props.cart
            ],
            total_item:this.props.total_item,
            total_price:this.props.total_price
        }).then(res=>{
            Swal.fire({
                title:"Checkout successfully",
                timer:2000,
                showConfirmButton:false,
                icon:'success',
                timerProgressBar:true
            }).then(()=>{
                this.props.clearCart()
                this.handleClose();
            })
        }).catch(err=>{
         
            Swal.fire({
                title:"Checkout unsuccessfully",
                text:"Something went wrong",
                timer:2000,
                showConfirmButton:false,
                icon:'error',
                timerProgressBar:true
            })
        })

     }
    render(){
        const {full_name,address,phone} = this.state
        return <div className="modal ">
            <div className="content p-3">
                <button type="button" onClick={this.handleClose} className="close btn ">
                    <TimesSolid></TimesSolid>
                </button>
                <h5>Checkout</h5>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Product Name</label>
                        <input type="text" name="full_name" className="form-control" placeholder="Full name" value={full_name} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Product Price</label>
                        <input type="text" name="phone" className="form-control" placeholder="Phone" value={phone} onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label>Product Image</label>
                        <input type="text" name="address" className="form-control" placeholder="Address" value={address} onChange={this.handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-outline-primary">
                        Checkout
                    </button>
                </form>
            </div>
        </div>
    }
}

class Cart extends Component {
    state={
        open:false,
    }

    toggleModal=()=>{
        this.setState({
            open:!this.state.open
        })
    }

    render() {
        return (
            <React.Fragment>
                <Container className="my-5">
                  <Row>
                      <Col md={9}>
                      {this.props.cart.length>0 ? 
                          this.props.cart.map(product=>{
                              return <CartProduct deleteCart={this.props.deleteCart} updateCart={this.props.updateCart} product={product} key={product.cart_id}/>
                          }):
                          <h3>Empty</h3>}
                      </Col>
                      <Col md={3} cls>
                          <Card className="p-3">
                              <h3>Total items: {this.props.total_item} </h3>
                                <h4 className="text-warning">Total price: {this.props.total_price}$</h4>
                              <Button color="primary" onClick={this.toggleModal}>Checkout</Button>
                          </Card>
                      </Col>
                  </Row>      
              </Container>
              {
                this.state.open?<CheckoutModal total_item={this.props.total_item} total_price={this.props.total_price} cart={this.props.cart} clearCart={this.props.clearCart} toggleModal={this.toggleModal}/>:''
              }
            </React.Fragment>
        )
    }
}
const mapStateToProps = state =>{
    const total_item = state.cart.reduce((sum,product)=>{
        return sum = product.quantity + sum
    },0)
    const total_price = state.cart.reduce((sum,product)=>{
        return sum = product.quantity*product.price + sum
    },0)
    return {
        cart:state.cart,
        total_item,
        total_price
    }
}
const mapDispatchToProps = dispatch => {
    return {
        updateCart: (id_cart,quantity) => {
            dispatch({
                type:"UPDATE_CART",
                payload:{
                    id_cart,
                    quantity
                }
            })
        },
        deleteCart: id_cart => {
            dispatch({
                type:"DELETE_CART",
                payload: id_cart
            })
        },
        clearCart: ()=>{
            dispatch({
                type:"CLEAR_CART"
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)