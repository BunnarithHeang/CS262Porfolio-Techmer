import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const banner = props => {
        return (
            <div className="col-md-4 col-sm-6" >
                    <Link to="/" className="banner banner-1">
                    <img src={props.imgsrc} alt="" />
                    <div className="banner-caption text-center">
                        <h2 class="text-dark">NEW COLLECTION</h2>
                    </div>
                    </Link>
            </div> 
        )
 }

 export default banner