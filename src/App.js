import './App.css';
import Heading from './Components/Heading';
import NavBar from './Components/NavBar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router , Route } from "react-router-dom";
import PostPage from './Components/PostPage/PostPage';
import RefferedPage from './Components/RefferedPage';
import {useState} from "react"
import { postPageContex, refferedPageContext, similarPostContext } from './Components/PostPage/Context';



function App() {

  
  function updatePostPage(post){
            setPostPage({post:post,updatePostPage:updatePostPage})
  }

  function updateSimilarPost(posts){
            setSimilarPost({similarPost:posts,updateSimilarPost:updateSimilarPost})
  }

  function updateRefferedPage(updatedPage){
    setRefferedPage({refferedPage:updatedPage,updateRefferedPage:updateRefferedPage})
}

  
  const [postPage,setPostPage] = useState({post:"",updatePostPage:updatePostPage});
  const [similarPost,setSimilarPost] = useState({similarPost:"",updateSimilarPost:updateSimilarPost});
  
  const [refferedPageVariable,setRefferedPage] = useState({refferedPage:"home",updateRefferedPage:updateRefferedPage});
  
  
  

  return(
      <div className="container">
        <Router>
          
         <similarPostContext.Provider value={similarPost}>  
         <postPageContex.Provider value={postPage}>
         <refferedPageContext.Provider value={refferedPageVariable}>  
         <Heading/>
         <NavBar/>
         
         <Route path="/" exact>
         <Home/>
         </Route>

         
         <Route path={"/"+refferedPageVariable.refferedPage} >
         <RefferedPage />
         </Route>

         <Route path="/PostPage/PostPage">
         <PostPage page={postPage} similarPost={similarPost}/>
         </Route>
         
         </refferedPageContext.Provider>
         </postPageContex.Provider>
         </similarPostContext.Provider>
         
         </Router>
      </div>   
  )
}

export default App;