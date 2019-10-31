import React from 'react'
import Modal from './Modal'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import history from '../history'
import {deleteBrewery,showBrewery} from '../../actions'

class BreweryDelete extends React.Component{
    componentDidMount(){
        this.props.showBrewery(this.props.match.params.id);
    }
    renderActionButtons = () => {
        const { id } = this.props.match.params;
        return(
            <React.Fragment>
                <div className="modal-footer">
                    <button type="button" onClick={() => this.props.deleteBrewery(id)} className="btn btn-danger" data-dismiss="modal">
                        Delete
                    </button>
                    <Link type="button" to="/" className="btn btn-secondary">
                        Close
                    </Link>
                </div>
            </React.Fragment>
        )
    }
    renderModalBody(){
        if(!this.props.brewery){
            return(
                    <p>Do you want to delete:</p>
                )   
            }
        else{
            return `Do you want to delete ${this.props.brewery.name}`
        }
    }
    render(){
        return(
            <div style={{opacity:'0.5 !important'}}>
                <Modal
                    content={this.renderModalBody()}
                    actions={this.renderActionButtons()}
                    header="Delete this?"
                    onDismiss={() => history.push('/')}
                />
            </div>
        )
    }
}
const mapStateToProps = (state,ownProps) => {
    return{
        brewery: state.breweries[ownProps.match.params.id]
    }
}
export default connect(mapStateToProps,{
    deleteBrewery,
    showBrewery
})(BreweryDelete);