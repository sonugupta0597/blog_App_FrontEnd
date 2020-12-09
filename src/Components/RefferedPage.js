
import React , {useEffect,useState} from 'react'
import { Link, Route } from 'react-router-dom';
import SimilarPost from './SimilarPost';
import axios from "axios";

function RefferedPage({type,action}) {

   const [posts,setPosts] = useState([]);

   useEffect(() => {
       const url = "/"+type;
    axios.get(url).then(
        (res)=>{
                
            console.log(res.data);
                setPosts(res.data);
        }
    );

    console.log(posts);
  
},[type])
 

const setAction = (data)=>{
   action(data);
}
    return (
        
        

        <div>
        <div className="latest2">

            <div className="latest-left">
            <h1>
                {(type.substring(0,1)).toUpperCase()+type.substring(1)}
            </h1>
            <hr class="underline"/>
            <div>
            
           { posts.map(post => 
                 
                 <Link to="/PostPage/PostPage" onClick={()=>action(post)} className="latest-left-card over" style={{textDecoration:"none"}}>

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
            
            { posts.map(post =>

            <Link to="/PostPage/PostPage" onClick={()=>setAction(post)} className="latest-right-card over" style={{textDecoration:"none"}}>

                       <img src={post.img} className="latest-right-card-img" alt="image"/>

                       <div className="latest-right-card-details link">

    <h1>{post.title}</h1>
    <p>{post.description}</p>
                       <div class="card-footer">
                    <span class="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                </div>
                       </div>
                       
                  </Link>
               
            ) }
              
            </div>
            


        </div>


        </div>

    )
}

export default RefferedPage;
