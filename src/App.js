import logo from './logo.svg';
import './App.css';
import Heading from './Components/Heading';
import NavBar from './Components/NavBar';
import Home from './Components/Home/Home';
import { BrowserRouter as Router , Route } from "react-router-dom";
import PostPage from './Components/PostPage/PostPage';
import Latest_Article from './Components/Home/Latest_Article';
import RefferedPage from './Components/RefferedPage';
import {useState} from "react"

function App() {

  

  const [postPage,setPostPage] = useState("");
  


  return(
      <div className="container">
        <Router>
         <Heading/>
         <NavBar/>
         <Route path="/" exact>
         <Home action={(data)=>setPostPage(data)}/>
         </Route>
         <Route path="/Home">
         <Home/>
         </Route>
         <Route path="/Sports">
         <RefferedPage type="sports" action={(data)=>setPostPage(data)} />
         </Route>
         <Route path="/Bollybood">
         <RefferedPage type={"bollybood"} action={(data)=>setPostPage(data)}/>
         </Route>
         <Route path="/Mimes">
         <RefferedPage type={"mimes"} action={(data)=>setPostPage(data)}/>
         </Route>
         <Route path="/News">
         <RefferedPage type={"news"} action={(data)=>setPostPage(data)}/>
         </Route>
         <Route path="/Education">
         <RefferedPage type={"education"} action={(data)=>setPostPage(data)}/>
         </Route>

         <Route path="/PostPage/PostPage">
         <PostPage page={postPage}/>
         </Route>

         </Router>
      </div>   
  )
}

export default App;