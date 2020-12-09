import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect , useState } from 'react'
import axios from "axios"

function Latest_Article(props) {

    const [posts,setPosts] = useState([]);

    useEffect(
        ()=>{
                  axios.get("/mostLiked").then((res)=>{
                            setPosts(res.data);
                  });

        },[posts]
    );
    
    return (


        <div className="latest2">
            <div className="latest-left">
            <h1>
                The Latest
            </h1>
            <hr class="underline"/>
            <div>

                { posts.map( post=>
                  <Link className="latest-left-card over" style={{textDecoration:"none"}}>

                       <img src={post.img} className="latest-left-card-img" alt="image"/>

                       <div className="latest-left-card-details  link">

                <h1>{post.title}</h1>
                <p>{post.description}</p>
                       <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
                       </div>
                       
                  </Link>
                  
                )}
             
            </div>

            </div>
            <div className="latest-right">
            <h1>
                   Top Posts
            </h1>
            <hr class="underline"/>

            {
               posts.map( post=>
            <Link className="latest-right-card over" style={{textDecoration:"none"}}>

                       <img src={post.img} className="latest-right-card-img" alt="image"/>

                       <div className="latest-right-card-details link">

               <h1>{post.title}</h1>
               <p>{post.description}</p>
                       <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
                       </div>
                       
                  </Link>
               )}       
                  
            </div>
            


        </div>

    

    )
}

export default Latest_Article;
