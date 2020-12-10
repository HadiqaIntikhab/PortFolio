import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './Home';
import Projects from './Projects';
import ContactUs from './ContactUs';
function Main() {
    return (


        <Router>
            <nav>
            <Link className='link' to='/'>Home</Link><br/>
            <Link className='link' to='/Projects'>Projects</Link><br/>
            <Link className='link' to='/ContactUs'>ContactUs</Link>
            </nav>
              
            <Switch>
            <Route path='/Projects'><Projects /></Route>
            <Route path='/ContactUs'><ContactUs /></Route>
            <Route path='/'><Home /></Route>
            </Switch>

        </Router>
    )
}

export default Main