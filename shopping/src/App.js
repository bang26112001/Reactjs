import React from 'react';
import './App.css';
import AllProducts from './component/client/AllProducts';
import Cart from './component/client/Cart';
import ShoppingAdmin from './component/admin/ShoppingAdmin.js';
import LoginAdmin from './component/admin/LoginAdmin';
import ProductDetail from './component/client/ProductDetail';
import {BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Home from './component/Home';
import NavClient from './component/client/client-nav';
import {createStore} from 'redux';
import {Provider} from 'react-redux'

function App() {

  const initState = {
    init:'abc',
    cart:[]
  }


  const root_reducer = function(state = initState,action){
    console.log(state,action)
    if(action.type === 'ADD_TO_CART' ){
      const exist_product_index =state.cart.findIndex(product=>product.id===action.payload.id)
      let new_cart; //[1,2,3]
      if(exist_product_index<0){
        new_cart = [
          ...state.cart,
          {
            ...action.payload,
            id_cart:Date.now()
          }  
        ]
      }else{
        // [1,2,3]
        new_cart = [...state.cart];
        new_cart[exist_product_index].quantity = new_cart[exist_product_index].quantity + action.payload.quantity 
      }
      return {
        ...state,
        cart:new_cart
      }
    }else if(action.type === 'UPDATE_CART'){
      const exist_product_index =state.cart.findIndex(product=>product.id_cart===action.payload.id_cart);
      const new_cart  = [...state.cart];
      new_cart[exist_product_index].quantity = action.payload.quantity;
      return {
        ...state,
        cart:new_cart
      }
      
    }else if(action.type === 'DELETE_CART'){
      console.log(state.cart);
      console.log(action.payload)
      const new_cart = state.cart.filter(product=>{
        return product.id_cart !== action.payload
      })
      return {
        ...state,
        cart:new_cart
      }
    }else if(action.type === 'CLEAR_CART'){
      return {
        ...state,
        cart:[]
      }
    }
    return state
  }

  const store = createStore(
    root_reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()  
    )

  return (
    <Provider store={store}>
         <Router>
    
    <div>
      <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route path="/login" component={LoginAdmin}>
      </Route>
      <Route path="/cart">
                <NavClient/>
        <Cart/>
      </Route>
      <Route path="/admin" component= {ShoppingAdmin}>
      </Route>
      <Route path="/product/:id">
                <NavClient/>
        <ProductDetail/>
      </Route>
      <Route path="/product">
                <NavClient/>
        <AllProducts/>
      </Route>
      </Switch>
    </div>
    </Router>
    </Provider>
  )
}

export default App;
