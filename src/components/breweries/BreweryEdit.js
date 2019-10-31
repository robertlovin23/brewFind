import React from 'react'
import {connect} from 'react-redux'
import BreweryForm from '../breweries/BreweryForm'
import {editBrewery,showBrewery} from '../../actions'
import _ from 'lodash'

class BreweryEdit extends React.Component{
    componentDidMount(){
        this.props.showBrewery(this.props.match.params.id);
    }
    onSubmit = (formValues) => {
        this.props.editBrewery(this.props.match.params.id, formValues);
    }
    render(){
        return(
            <div className="container">
                <h3 style={{textAlign:"center"}}>Edit Brewery</h3>
                 <BreweryForm onSubmit={this.onSubmit} initialValues={_.pick(this.props.breweries, 'name','description','location','tour')}/>
            </div>
        )
    }
}

const mapStateToProps = (state,ownProps) => {
    return{
        breweries: state.breweries[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{
    editBrewery,
    showBrewery
})(BreweryEdit);