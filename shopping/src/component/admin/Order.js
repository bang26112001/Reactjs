import Axios from 'axios'
import React, { Component } from 'react'
import { Spinner } from 'reactstrap'
import MaterialTable from 'material-table'

export default class Order extends Component {
    state={
        loading:false,
        order:[]
    }
    componentDidMount() {
        this.setState({
            loading:true
        })
        Axios.get('https://shopping-api-with-jwt.herokuapp.com/carts').then(res=>{
            this.setState({
                order:res.data,
                loading:false
            })
        }).catch(err=>{
            console.log(err)
            this.setState({
                loading:false
            })
        })
    }
    
    handleDelete =(event,data)=>{
        alert("YOU DELETED "+ data.id)
    }

    render() {
        return (
            <>
                <MaterialTable
                    title="Simple Action Preview"
                    columns={[
                        {
                            title:"ID",
                            field:"id"
                        },
                        {
                            title:"Full name",
                            field:"full_name"
                        },
                        {
                            title:"So dien thoai",
                            field:"phone"
                        },
                        {
                            title:"Adress",
                            field:"address"
                        }
                    ]}
                    data={this.state.order}        
                    actions={[
                        {
                            icon: 'save',
                            tooltip: 'Save User',
                            onClick: (event, rowData) => alert("You saved " + rowData.full_name)
                        },
                        {
                            icon: 'delete',
                            tooltip: 'Delete User',
                            onClick: this.handleDelete
                        }
                    ]}
                    options={{
                        actionsColumnIndex: -1
                      }}
                    detailPanel={rowData => {
                        return (
                            rowData.cart.map(item=>{
                               return <h3>{item.name}</h3>
                            })
                            )
                    }}
                    />
            </>
        )
    }
}
