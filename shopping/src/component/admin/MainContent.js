import React from 'react'
import ContentHeader from './ContentHeader'
import { Empty } from './Emty'
import Modal from './Modal'
import ProductRow from './ProductRow'
import Axios from 'axios';
import Swal from 'sweetalert2'
export default class MainContent extends React.Component{
    state={
        open:false,
        products : [
            
        ],
        isEditting:undefined //index
    }

    componentDidMount(){
        console.log("DIDMOUNT")
        // fetch("http://localhost:9696/products")
        this.getData();
    }

    getData(){
        this.setState({
            products:[]
        })
        Axios.get("https://shopping-api-with-jwt.herokuapp.com/products").then(res=>{
            console.log(res);
            this.setState({
                products:res.data
            })
        })
    }

    addProduct=(name,image,price)=>{
        // const product={
        //     id:this.state.products.length,
        //     name,
        //     image,
        //     price
        // }
        // this.setState({
        //     products:[...this.state.products,product]
        // })
        Axios.post('https://shopping-api-with-jwt.herokuapp.com/products',{
            name,
            image,
            price
        },{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            console.log(res)
            Swal.fire({
                title:"Create Successfully",
                timer:1000,
                icon:'success'
            })
        }).catch(err=>{
            console.log(err);
            this.handleError(err)
           
        })

    }

    handleError = (err) => {
        if(err.response.status === 401 || err.response.status === 403){
            Swal.fire({
                title:"Unauthorized, Please Login again!",
                text:err.message,
                timer:1000,
                icon:'error'
            }).then(()=>{
                window.localStorage.setItem('admin_token','');
                this.props.history.push('/admin/login')
            })
        }
    }
    updateProduct = (id,data) => {
        console.log(window.localStorage.getItem('admin_token'));
        Axios.patch(`https://shopping-api-with-jwt.herokuapp.com/products/${id}`,data,{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            console.log(res)
            this.getData();
            this.toggleModal()
        }).catch(err=>{
            console.log(err)
            console.log(err.response)
            this.handleError(err)
            this.toggleModal()

        })
    }

    deleteProduct = (id) => {
        // const updated_product = [...this.state.products].filter((product)=>{
        //     return product.id !== id
        // });
        // this.setState({
        //     products:updated_product
        // })
        Axios.delete(`https://shopping-api-with-jwt.herokuapp.com/products/${id}`,{
            headers:{
                token: window.localStorage.getItem('admin_token')
            }
        }).then(res=>{
            console.log(res)
            this.getData();
        }).catch(err=>{
            console.log(err)
            console.log(err.response)
            this.handleError(err)
        })
    }

    updateIsEditting = (id) => {
        const product_index = this.state.products.findIndex((product)=>{
            return product.id === id
        })
        this.setState({
            isEditting:product_index
        })
        this.toggleModal();
    }

    toggleModal=()=>{
        this.setState({
            open:!this.state.open
        })
    }

    clearIsEditing = () => {
        this.setState({
            isEditting:undefined
        })
    }

    render(){
        return  <>
        <main>
                <ContentHeader toggleModal={this.toggleModal} addProduct={this.addProduct}/>    
                <div className="content-table">
                    <div className="table-headers">
                        <div className="table-header">
                            Id
                        </div>
                        <div className="table-header">
                            Name
                        </div>
                        <div className="table-header">
                            Price
                        </div>
                        <div className="table-header">
                            Image
                        </div>
                        <div className="table-header">
                            Action
                        </div>
                    </div>
                    {
                        this.state.products.length>0?
                        this.state.products.map((product)=>{
                            return <ProductRow updateIsEditting={this.updateIsEditting}  deleteProduct={this.deleteProduct} key={`product_id_${product.id}`} product={product}/>
                        })
                        :<Empty/>
                    }
                </div>
            </main>
            {
                this.state.open?<Modal updateProduct={this.updateProduct} clearIsEditing={this.clearIsEditing} editingProduct={this.state.products[this.state.isEditting]} addProduct={this.addProduct} toggleModal={this.toggleModal}/>:''
            }
        </>
    }
}