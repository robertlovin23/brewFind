import React from 'react'
import BreweryList from './breweries/BreweryList'
import BreweryCreate from './breweries/BreweryCreate'
import BreweryShow from './breweries/BreweryShow'
import BreweryEdit from './breweries/BreweryEdit'
import BreweryDelete from './breweries/BreweryDelete'
import Header from './Header'
import history from './history'
import {Router,Route} from 'react-router-dom'

const App = () => {
    return(
        <Router history={history}>
        <Header/>
            <div>
                <Route path ="/" exact component={BreweryList}/>
                <Route path="/breweries/new" component={BreweryCreate}/>
                <Route path="/breweries/show/:id" component={BreweryShow}/>
                <Route path="/breweries/edit/:id" component={BreweryEdit}/>
                <Route path="/breweries/delete/:id" component={BreweryDelete}/>
            </div>
        </Router>
    )
}

export default App;