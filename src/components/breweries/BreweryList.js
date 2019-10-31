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
                <Link style={{marginBottom:"10px"}} to="/breweries/new" className="btn btn-primary">
                    New Brewery
                </Link>
            )
        }
    }
    renderBrewList(){
        if(this.props.isSignedIn){
        return this.props.breweries.map(brewery => {
            return(
            <div className="col-lg-4 col-sm-12" style={{display: "block", marginBottom:"20px"}}>
                <div key={brewery.id} className="card">
                    <div className="card-body">

                        <h5 className="card-title">
                            <Link to={`/breweries/show/${brewery.id}`}>{brewery.name}</Link>
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">{brewery.location}</h6>
                        <p className="cart-text">{brewery.description}</p>
                        <div style={{display: "inline"}}>
                            <Link to={`/breweries/edit/${brewery.id}`} className="btn btn-success">
                                Edit
                            </Link>
                        </div>
                        <div style={{marginLeft:"10px", display: "inline"}}>
                            <Link to={`/breweries/delete/${brewery.id}`}className="btn btn-danger">
                                Delete
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            )
        })
        }
        else{
            return this.props.breweries.map(brewery => {
                return(
                <div className="col-lg-4 col-sm-12" style={{display: "block", marginBottom:"20px"}}>
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
                <div className="row" >
                    {this.renderBrewList()}
                </div>
                <div style={{float:"right"}}>
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