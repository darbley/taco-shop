import React from 'react';
import { connect } from 'react-redux';
import './style.scss';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

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
                <Toolbar isAuth={this.props.rdx_isAuthorized} drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer isAuth={this.props.rdx_isAuthorized} closed={this.sideDrawerCloseHandler} open={this.state.showSideDrawer} />
                <main>
                    {this.props.children}
                </main>
                
            </div>
        )
       
    }
} 

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onSomething: (e) => {
//             return (
//                 dispatch()
//             )
//         }
//     }
// }
const mapStateToProps = (state) => {
    return {
        rdx_isAuthorized: state.auth.token !== null
    }
}

export default connect(mapStateToProps)(Layout);