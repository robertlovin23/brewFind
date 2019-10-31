import React from 'react'
import {connect} from 'react-redux'
import {showBrewery} from '../../actions'

class BreweryShow extends React.Component{
    componentDidMount(){
        this.props.showBrewery(this.props.match.params.id)
    }
    renderBrewery = () => {
        if(!this.props.breweries){
            return(
                <div className="container">
                    <div class="spinner-border text-success" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
            )
        }
        return(
            <div className="container">
                <h5>{this.props.breweries.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.props.breweries.location}</h6>
                <p>{this.props.breweries.description}</p>
                <h6>Website:</h6>
                <p>{this.props.breweries.tour}</p>
            </div>
        )
    }
    render(){
        return(
            <div>
                <h3 style={{textAlign:'center'}}>View Brewery</h3>
                {this.renderBrewery()}
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
    showBrewery
})(BreweryShow);