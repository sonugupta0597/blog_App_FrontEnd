import React, { useEffect, useState , useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from "axios";
import { postPageContex, similarPostContext } from '../PostPage/Context';

function Main() {

    const [main, setMain] = useState([{}, {}, {}]);
    const [type, setType] = useState("/mostliked");

    const {updatePostPage} = useContext(postPageContex);
    const {updateSimilarPost} = useContext(similarPostContext);
    
    

   useEffect(() => {
    
    axios.get(type).then(
        (res)=>{
                console.log(res.data);
                setMain(res.data);
        }
    )
    
   },[type]
   
   );

    const setAction = (data)=>{
   
        updatePostPage(data);
        console.log(main)
        updateSimilarPost(main);
    
    }

    return (
        <div className="homemain">

            <Link to="/PostPage/PostPage" onClick={() => setAction(main[0])} className="right" >
                <img className="img1 img over" src={main[0].urlToImage} alt="2.jpg" />
            </Link>

            <div className="left">

                <Link to="/PostPage/PostPage" onClick={() => setAction(main[1])} className="leftImg">
                    <img className="img1 img over" src={main[1].urlToImage} alt="1.jpg" />
                </Link>
                <Link to="/PostPage/PostPage" style={{ marginTop: "5px" }} onClick={() => setAction(main[2])} className="leftImg">
                    <img className="img1 img over " src={main[2].urlToImage} alt="1.jpg" />
                </Link>

            </div>

        </div>
    )
}

export default Main
