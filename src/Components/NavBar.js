import React from 'react'
import { Link } from 'react-router-dom'
import {useContext} from 'react'

import { refferedPageContext } from './PostPage/Context'


function NavBar() {

    const {updateRefferedPage} = useContext(refferedPageContext)

    function updateRefferedPageVariable(page){
                updateRefferedPage(page)
    }

    return (
        <div className="blog-header" >
        <div>
            <Link to="/" onClick={()=>updateRefferedPageVariable("home")} className="link" style={{textDecoration:"none"}} >
            Home
            </Link>
        </div>

        <div>
        <Link to="/Sports" onClick={()=>updateRefferedPageVariable("sports")} className="link" style={{textDecoration:"none"}}>
            Sports
            </Link>
        </div>

        <div>
        <Link to="/entertainment" onClick={()=>updateRefferedPageVariable("entertainment")} className="link" style={{textDecoration:"none"}}>
            Entertainment
            </Link>
        </div>

        <div>
        <Link to="/technology" onClick={()=>updateRefferedPageVariable("technology")} className="link" style={{textDecoration:"none"}}>
            Technology
            </Link>
        </div>

        <div>
        <Link to="/science" onClick={()=>updateRefferedPageVariable("science")} className="link" style={{textDecoration:"none"}}>
            Science
            </Link>
        </div>

        <div>
        <Link to="/business" onClick={()=>updateRefferedPageVariable("business")} className="link" style={{textDecoration:"none"}}>
            Business
            </Link>
        </div>
    </div>
    )
}

export default NavBar;
