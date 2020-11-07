import React from 'react'

export default function ProductRow(props){
    const HandleDelete = () =>{
        props.deleteProduct(props.product.id)
    }
    const HandleUpdate = () =>{
        props.updateIsEditting(props.product.id)
    }
    console.log("COMPONENT PROPS:",props)
    const {id,name,price,image} = props.product
    return  <div className="table-rows">
    <div className="table-cell">
        {id}
    </div>
    <div className="table-cell">
       {name}
    </div>
    <div className="table-cell">
        {price}$
    </div>
    <div className="table-cell">
        <img src={image} />
    </div>
    <div className="table-cell">
        <button className="btn edit-btn" onClick={HandleUpdate}>
                Edit
        </button>
        <button className="btn delete-btn" onClick={HandleDelete}>
                Delete
        </button>
    </div>
 
</div>

}