import React from 'react';
import '../../assets/style/Admin.scss';
import MainContent from './MainContent';
import Navbar from './Navbar';
import Sidebar from './Slidebar';

//function return component

//class call render method => return component
//16.8 => Function component => React HOOK

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
                    <MainContent history={this.props.history}></MainContent>
                </div>
            </div>
        </div>
    }
}

