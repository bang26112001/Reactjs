import React, { Component } from 'react'
import TimesSolid from '../assets/icon/times-solid'

export default class Modal extends Component {
    state={
        name:"",
        price:"",
        image:""
    }
    handleClose=()=>{
        this.props.toggleModal()
    }

    componentDidMount(){

    }
    componentDidUpdate(){

    }
    componentWillUnmount(){
        
    }
    handleChange=(event)=>{
       this.setState({
        [event.target.name]: event.target.value
       })
 
    }

    handleSubmit=(event)=>{
        event.preventDefault();
        const {name,price,image}=this.state
        this.props.addProduct(name,image,price)
        this.props.toggleModal()

    }

    render() {
        const {name,price,image}=this.state
        return (
            <div className="modal ">
                <div className="content p-3">
                    <button type="button" onClick={this.handleClose} className="close btn">
                        <TimesSolid/>
                    </button>
                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group">
                            <label>Product Name</label>
                            <input type="text" name="name" className="form-control" placeholder="Product name" value={name} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Product Price</label>
                            <input type="text" name="price" className="form-control" placeholder="Product price" value={price} onChange={this.handleChange}/>
                        </div>
                        <div className="form-group">
                            <label>Product Image</label>
                            <input type="text" name="image" className="form-control" placeholder="Product image" value={image} onChange={this.handleChange}/>
                        </div>
                        <button type="submit" class="btn btn-outline-primary">
                            ADD
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}
