import React , { useEffect , useState } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";

function Main({actions}) { 

    const [main,setMain] = useState([{},{},{}]);

    useEffect(
        ()=>{
               axios.get("/main").then((res)=>{
                      setMain(res.data);
               }); 
        },[main]
    );

    
    return (
        <div class="homemain">
       
        <Link to="/PostPage/PostPage/i" onClick={()=>actions(main[0])} class="right over" >
            <img class="img1 img" src={main[0].img} />
    <p className="right-p">{main[0].title}</p>
    <p className="right-p1">{main[0].description}...</p>
        </Link>
        
        <div class="left">
            
            <Link to="/PostPage"  onClick={()=>actions(main[1])} class="leftImg over">
            <img class="img1 img" src={main[1].img} alt="this image not found sorry" />
            
    <p className="right-p">{main[0].title}</p>
    <p className="right-p1">{main[0].description}...</p>
            </Link>
            <Link  to="/PostPage"  onClick={()=>actions(main[2])} class="leftImg over">
            <img class="img1 img" src={main[2].img} alt="this image not found sorry" />
            
    <p className="right-p">{main[0].title}</p>
    <p className="right-p1">{main[0].description}...</p>
            </Link>

        </div>

    </div>
    )
}

export default Main
