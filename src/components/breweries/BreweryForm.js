import React from 'react'
import {Field,reduxForm} from 'redux-form'

class BreweryForm extends React.Component{
    renderInputs = ({input, label, meta}) =>{
        const className = `form-group ${meta.error && meta.touched ? 'error' : ''}`
        return(
        <div className={className}>
            <label>{label}</label>
            <input className="form-control" {...input} autoComplete="off"/>
            {this.renderErrors(meta)}
        </div>
        )
    }
    renderTextArea = ({input,label,meta}) => {
        const className = `form-group ${meta.error && meta.touched ? 'error' : ''}`
        return(
            <div className={className}>
                <label>{label}</label>
                <textarea style={{height:"100px"}} className="form-control" {...input} autocomplete="off"></textarea>
                {this.renderErrors(meta)}
            </div>
        )
    }
    renderErrors = ({touched,error}) => {
        if(touched && error === true){
            return(
                <div>
                    You have an Error
                </div>
            )
        }
    }
    onSubmit = (formValues) => {
        this.props.onSubmit(formValues)
    }
    render(){
        return(
            <div >
                <form onSubmit={this.props.handleSubmit(this.onSubmit)}>
                    <Field name="name" label="Name:" type="text" component={this.renderInputs} placeholder="Name of Brewery..."/>
                    <Field name="description" label="Description:" component={this.renderTextArea} type="text" placeholder="Description..."/>
                    <Field name="location" label="Location:" component={this.renderInputs} type="text" placeholder="Location..."/>
                    <Field name="tour" label="Tour Info:" component={this.renderInputs} type="text" placeholder="Location..."/>
                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
const validate = (formValues) => {
    const errors = {}
    if(!formValues.name){
        errors.name = "Enter In a Name"
    }
    if(!formValues.description){
        errors.description = 'Enter a description'
    }
    if(!formValues.location){
        errors.location = "Enter in a location"
    }
}
export default reduxForm({
    form: 'breweryForm',
    validate
})(BreweryForm)
