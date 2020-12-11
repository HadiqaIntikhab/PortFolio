import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Projects from './Projects';

import WithMaterialUI from './WithMaterialUI';
function Main() {
    return (


        <Router>
            <nav>
            <Link className='link' to='/'>Home</Link><br/>
            <Link className='link' to='/Projects'>Projects</Link><br/>
            <Link className='link' to='/WithMaterialUI'>ContactUs</Link>
            </nav>
              
            <Switch>
            <Route path='/Projects'><Projects /></Route>
            <Route path='/WithMaterialUI'><WithMaterialUI /></Route>
            <Route path='/'><Home /></Route>
            </Switch>

        </Router>
    )
}

export default Main