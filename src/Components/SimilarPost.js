import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from "react"

function SimilarPost(props) {

    

    return (
        <div class="latest ">
        <h1 class="latest-heading">Similar Posts</h1>
        <hr class="underline"/>

        <div class="cards-group">


        
            <Link class="card img over link" style={{textDecoration:"none"}}>
                <img class="card-img img" src="1.jpg" alt="1.jpg"/>
                <div class="card-body link">
                    <h1> Look and feel the beauty of Nature</h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has
                        survived .
                    </p>
                </div>
                <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
            </Link>

       


           

        </div>
    </div>
    )
}

export default SimilarPost
