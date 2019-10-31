import React from 'react'
import {connect} from 'react-redux'
import {signIn,signOut} from '../actions/index'

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "921273412260-v7ufqbgqf0icgeou7bop8himsmbv6ddf.apps.googleusercontent.com",
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.renderSignIn(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.renderSignIn)
            })
        })
    }
    renderSignIn = (isSignedIn) => {
        if(isSignedIn){
            this.props.signIn(this.auth.currentUser.get().getId())
        }
        else{
            this.props.signOut();
        }
    }
    signInClick = () => {
        this.auth.signIn();
    }
    signOutClick = () => {
        this.auth.signOut();
    }
    renderSignInButton = () => {
        if(this.props.isSignedIn === null){
            return null;
        }
        else if(this.props.isSignedIn)
        {
            return(
                <button className="btn btn-success" onClick={this.signOutClick}>
                    Sign Out
                </button>
            )
        }
        else {
            return(
                <button className="btn btn-success" onClick={this.signInClick}>
                    Sign In
                </button>
            )
        }
    }
    render(){
        return(
            <div>{this.renderSignInButton()}</div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps,{
    signIn,
    signOut
})(GoogleAuth);