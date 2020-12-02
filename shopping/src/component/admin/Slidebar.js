import { Link } from 'react-router-dom'
import React from 'react'


export default function Slidebar(){
    return  <div className="sidebar">
    <ul>
        <li>
            <Link to="/admin/products">Products</Link>
        </li>
        <li>
            <Link to="/admin/order">Order</Link>
        </li>
    </ul>
</div>
}