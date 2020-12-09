import React from 'react'
import Latest from '../Home/Latest'


  
function PostPage({page}) {
    
    return (
       <div className="container" style={{padding:"10px"}}>
           
           <img src={page.img} className="post-img ha" />

               <h3 style={{marginTop:"20px"}}> 
                     Title :{page.title}
               </h3>
           <hr/>
           <h4 style={{marginTop:"10px"}} >
                   Description 
          </h4>

          <p>
                 {page.description}
          </p>
          
           <Latest/>
           </div>
    )
}

export default PostPage;
