import React, { Component } from 'react'

const banner = props => {
        return (
            <div className="col-md-4 col-sm-6">
                <a href="#" className="banner banner-1" >
                    <img src={props.imgsrc} alt="" />
                    <div className="banner-caption text-center">
                        <h2 class="text-dark">NEW COLLECTION</h2>
                    </div>
                </a>
            </div> 
        )
 }

 export default banner

