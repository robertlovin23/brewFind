import React from 'react'
import {connect} from 'react-redux'
import {createBrewery} from '../../actions'
import BreweryForm from './BreweryForm'

class BreweryCreate extends React.Component{
    onFormSubmit = (formValues) => {
        this.props.createBrewery(formValues);
    }
    render(){
        return(
        <div className="col-sm-10" style={{alignContent: "center", margin: "0 auto"}}>
            <h3>Create a Brewery</h3>
            <BreweryForm onSubmit={this.onFormSubmit}/>
        </div>
        )
    }
}

export default connect(null, {
    createBrewery
})(BreweryCreate);