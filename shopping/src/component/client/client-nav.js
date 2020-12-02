import React from 'react'
import {
    DropdownItem, 
    DropdownMenu,
    DropdownToggle, 
    Nav, 
    NavbarBrand, 
    NavbarToggler, 
    NavItem, 
    NavLink, 
    UncontrolledDropdown,
    Container,
    Navbar,
    Collapse,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input,
    NavbarText,
}from 'reactstrap'
import '../../assets/style/Admin.scss';
import SearchSolid from '../../assets/icon/search-solid'
import ShoppingCartSolid from '../../assets/icon/shopping-cart-solid';
import {connect} from 'react-redux'
import {Link} from 'react-router-dom';


 function NavClient(props){
    
    const toggle=false;
    const isOpen=false; 
   
    return(
    <Container fluid={true}>
            <Navbar color="light" light expand="md">
       <NavbarBrand href="/">Home</NavbarBrand>
       <NavbarToggler onClick={toggle} />
       <Collapse isOpen={isOpen} navbar>
       <Nav className="mr-auto" navbar>
           <NavItem>
           <Link to="/product">Collection</Link>
           </NavItem>
           <NavItem>
           <Link to="/cart">Cart</Link>
           </NavItem>
           <UncontrolledDropdown nav inNavbar>
           <DropdownToggle nav caret>
               Privacy Policy
           </DropdownToggle>
           <DropdownMenu right>
               <DropdownItem>
               Điều Khoản dịch vụ
               </DropdownItem>
               <DropdownItem>
               Chính sách bảo mật
               </DropdownItem>
               <DropdownItem>
               Chính sách đổi trả
               </DropdownItem>
           </DropdownMenu>
           </UncontrolledDropdown>
       </Nav>
       <NavbarText>
           <div className="cartIcon" >
    <span className="badge badge-pill badge-danger">{props.cart_total}</span>
            <ShoppingCartSolid/>
           </div>
       </NavbarText>
       <InputGroup className="SearchBar">
        <InputGroupAddon addonType="prepend">
          <InputGroupText><SearchSolid/></InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Tìm Kiếm"/>
      </InputGroup>
       </Collapse>
</Navbar>
            </Container>
   )
   
} 
const mapStateToProps = (state)=>{
    const total = state.cart.reduce((sum,product)=>{
        return sum = product.quantity + sum
    },0) // tinh tong so luong san pham trong gio
    return {
        cart_total:total
    }
}

export default connect(mapStateToProps)(NavClient)