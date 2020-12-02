import React from 'react'
import Product from './Product'
import { 
    Row, Spinner, 
} from 'reactstrap'
import Axios from 'axios'
import API_CONSTANT from '../../assets/constants/api'
import {connect} from 'react-redux'

 class Productlist extends React.Component {
    state={
        products:[],
        loading:false
    }

    componentDidMount(){  
        this.setState({
            loading:true
        })
        Axios.get( API_CONSTANT.DOMAIN + '/products').then(res=>{
            this.setState({
                products:res.data,
                loading:false
            })
        })
        .catch(err=>{
            console.log(err)
        })
    }

    render(){
        return (
            <Row>
                {this.state.loading &&  <Spinner color="primary" />}
                {this.state.products.map((product,index)=>{
                    return <Product addToCart={this.props.addToCart} key={`$product_${index}`} id={product.id} name={product.name} img={product.image[0]} price={product.price}/>
                 })}
            </Row>
        )
    }
  
}

const mapDispatchToProps = (dispatch) => {
    // store.dispatch
    return {
        addToCart: (product,quantity)=>{
            dispatch({type:"ADD_TO_CART",payload:{
                ...product,
                quantity
            }})
        }
    }
}

export default connect(null,mapDispatchToProps)(Productlist)