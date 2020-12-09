import React from 'react'
import { useEffect , useState } from 'react'
import axios from "axios"

function Bottom_Latest() {

    const [posts,setPosts] = useState([]);

    useEffect(
        ()=>{
                  axios.get("/latestStories").then((res)=>{
                            setPosts(res.data);
                  });

        },[posts]
    );

    return (
        <div class="latest">
        <h1 class="latest-heading">LaTest Stories</h1>
        <hr class="underline"/>
        <div class="cards-group">

        {  
            posts.map( post =>
            <div class="card img over">

                <div class="card-body">
            <h1> {post.title} </h1>
                    <p>
                        {post.description}
                    </p>
                </div>
                <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
            </div>

            )}
           



        </div>
    </div>

    )
}

export default Bottom_Latest
