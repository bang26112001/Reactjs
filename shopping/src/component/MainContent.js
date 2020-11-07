import React from 'react'
import ContentHeader from './ContentHeader'
import Modal from './Modal'
import ProductRow from './ProductRow'

export default class MainContent extends React.Component{
    state={
        open:false,
        products : [
        ],
        isEditting:undefined
    }

    addProduct=(name,image,price)=>{
        const product={
            id:this.state.products.length,
            name,
            image,
            price
        }
        this.setState({
            products:[...this.state.products,product]
        })

    }

    deleteProduct = (id) => {
        const update_product = [...this.state.products].filter((product)=>{
            return product.id !== id;
        });        
        this.setState({
            products:update_product
        })
    }

    updateIsEditting = (id) =>{
        const product_index = this.state.products.findIndex((product)=>{
            return product.id===id
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
                            return <ProductRow deleteProduct={this.deleteProduct}  key={`product_id_${product.id}`} product={product}/>
                        })
                        :<h3>EMPTY</h3>
                    }
                </div>
            </main>
            {
                this.state.open?<Modal edittingProduct={this.state.products[this.state.isEditting]} addProduct={this.addProduct} toggleModal={this.toggleModal}/>:''
            }
        </>
    }
}