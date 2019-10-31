import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {listBreweries} from '../../actions'

class BreweryList extends React.Component{
    componentDidMount(){
        this.props.listBreweries();
    }
    renderCreateButton(){
        if(this.props.isSignedIn){
            return(
                <Link to="/breweries/new" className="btn btn-primary">
                    New Brewery
                </Link>
            )
        }
    }
    renderBrewList(){
        if(this.props.isSignedIn){
        return this.props.breweries.map(brewery => {
            return(
            <div className="col-4" style={{display: "block"}}>
                <div key={brewery.id} className="card">
                    <div className="card-body">

                        <h5 className="card-title">
                            <Link to={`/breweries/show/${brewery.id}`}>{brewery.name}</Link>
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">{brewery.location}</h6>
                        <p className="cart-text">{brewery.description}</p>
                        <Link to={`/breweries/edit/${brewery.id}`} className="btn btn-success">
                            Edit
                        </Link>
                        <Link to={`/breweries/delete/${brewery.id}`} className="btn btn-negative">
                            Delete
                        </Link>
                    </div>
                </div>
            </div>
            )
        })
        }
        else{
            return this.props.breweries.map(brewery => {
                return(
                <div className="col-4" style={{display: "block"}}>
                    <div key={brewery.id} className="card">
                        <div className="card-body">
    
                            <h5 className="card-title">
                                <Link to={`/breweries/show/${brewery.id}`}>{brewery.name}</Link>
                            </h5>
                            <h6 className="card-subtitle mb-2 text-muted">{brewery.location}</h6>
                            <p className="cart-text">{brewery.description}</p>
                        </div>
                    </div>
                </div>
                )
            }) 
        }
    }
    render(){
        return(
            <div className="container">
                <h3 style={{textAlign: 'center'}}>List of Breweries</h3>
                <div className="row">

                    {this.renderBrewList()}
                </div>
                <div style={{float:"right", marginTop:"10px"}}>
                    {this.renderCreateButton()}
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        breweries: Object.values(state.breweries),
        userId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect(mapStateToProps,{
    listBreweries
})(BreweryList)