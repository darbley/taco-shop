import React from 'react';
import './style.scss';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends React.Component {
    // constructor(props){
    //     super(props)
    // }
    state ={
        showSideDrawer: false
    }
    sideDrawerCloseHandler = () => {
        this.setState({showSideDrawer: false})
    }
     
    sideDrawerToggleHandler = () => {
        console.log('hi');
       this.setState((prevState) => {
           return {
               showSideDrawer: !prevState.showSideDrawer
           }
       });
    }

    render(){

        return(
            <div className={`wrapper ${this.props.addClass}`}>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer} />
                <main>
                    {this.props.children}
                </main>
                
            </div>
        )
       
    }
} 
export default Layout;