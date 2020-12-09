import React, { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"

function Latest({actions}) {

    const [posts,setPosts] = useState([]);

    useEffect(
        ()=>{
                  axios.get("/latest").then((res)=>{
                            setPosts(res.data);
                  });

        },[posts]
    );

    return (
        <div class="latest ">
        <h1 class="latest-heading">The LaTest</h1>
        <hr class="underline"/>

        <div class="cards-group">


        {   posts.map( post =>
            <Link onClick={()=>actions(post)} class="card img over link" style={{textDecoration:"none"}}>
                <img class="card-img img" src={post.img} alt="1.jpg"/>
                <div class="card-body link">
        <h1> {post.title} </h1>
                    <p>
                        {post.description}
                    </p>
                </div>
                <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
            </Link>
        )}
           



           

        </div>
    </div>

    )
}

export default Latest;
