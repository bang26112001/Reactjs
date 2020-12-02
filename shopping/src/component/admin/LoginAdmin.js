import React from 'react';
import { Route } from 'react-router-dom';
import '../../assets/style/Admin.scss'
import MainContent from './MainContent';
import Navbar from './Navbar';
import Order from './Order';
import Sidebar from './Slidebar';

export default class ShoppingAdmin extends React.Component {
    state = {
        sidebar_open:true
    }
    toggleSidebar=()=> {
        this.setState({
            sidebar_open:!this.state.sidebar_open
        })
    }
    componentDidMount(){
        const token = window.localStorage.getItem('admin_token');
        if(!token){
            this.props.history.push('/admin/login')
        }
    }
    render(){
        return <div className="container-fluid">
            <div className="row">
            {/* sidebar dong' => display:none */}
                <div className="col-md-3 bg" style={{'display':this.state.sidebar_open?'block':'none'}}>
                    <Sidebar/>
                </div>
                {/* side bar dong => col-md-12 */}
                <div className={this.state.sidebar_open?"col-md-9":"col-md-12"}>
                    {/* NAVBAR */}
                   
                    <Navbar toggleSidebar={this.toggleSidebar}/>
                    <Route path="/admin/order" component={Order}>
                    </Route>
                    <Route path="/admin/products" >
                        <MainContent history={this.props.history}></MainContent>
                    </Route>
                </div>
            </div>
        </div>
    }
}

