
import React , {useEffect,useState,useContext} from 'react'
import { Link } from 'react-router-dom';

import axios from "axios";
import { postPageContex, refferedPageContext, similarPostContext } from './PostPage/Context';



function RefferedPage() {

   const [posts,setPosts] = useState([]);
   const [topPosts,setTopPosts] = useState([]);
   const {updatePostPage} = useContext(postPageContex);
   const {updateSimilarPost} = useContext(similarPostContext);
   const {refferedPage} = useContext(refferedPageContext)

   useEffect(() => {
       
       const url = "/"+refferedPage;
    axios.get(url).then(
        (res)=>{
                
            console.log(res.data);
                setPosts(res.data);
        }


    );
    
    
    axios.get("/top_headlines").then(
        (res)=>{
                
            console.log(res.data);
                setTopPosts(res.data);
                
        });

    console.log(posts);
  
},[refferedPage])
 

const setAction = (data)=>{
   
    updatePostPage(data);
    console.log(posts)
    updateSimilarPost(posts);

}
    return (
        
        

        <div>
        <div className="latest2">

            <div className="latest-left">
            <h1>
                {(refferedPage.substring(0,1)).toUpperCase()+refferedPage.substring(1)}
            </h1>
            <hr className="underline"/>
            <div>
            
           { posts.map(post => 
                 
                 <Link to="/PostPage/PostPage" onClick={()=>setAction(post)} className="latest-left-card over" style={{textDecoration:"none"}}>

                 <img src={post.urlToImage} className="latest-left-card-img" alt="1.jpg"/>

                 <div className="latest-left-card-details  link">

           <h3>{post.title}</h3>
           <p>{post.description.substring(0,50)}. . .</p>
                 <div className="card-footer">
              <span className="card-footer-first"></span> <span class="card-footer-secons"> {post.publishedAt} </span>
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
            <hr className="underline"/>
            
            { topPosts.map(post =>

            <Link to="/PostPage/PostPage" onClick={()=>setAction(post)} className="latest-right-card over" style={{textDecoration:"none"}}>

                       <img src={post.urlToImage} className="latest-right-card-img" alt="1.jpg"/>

                       <div className="latest-right-card-details link">

                      <h5>{post.title}</h5>
                      <p>{post.description.substring(0,50)}. . .</p>
                      <div className="card-footer">

            <span className="card-footer-first"></span> <span class="card-footer-secons"> {post.publishedAt} </span>
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
