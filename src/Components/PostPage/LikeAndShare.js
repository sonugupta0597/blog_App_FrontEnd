import React, { useEffect } from 'react'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment, faHeart, faShareAlt } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios';




function LikeAndShare(props) {

    const [likeColor, setLikeColor] = useState("grey");
    const [likeCount, setlikeCount] = useState(0);

    useEffect(()=>{
           getCount();
           setLikeColor("grey")
    });

    function getCount(){
        const url = "/getCount";
        axios.post(url,{pageTittle: props.pageTittle}).then(
         (res) => {

                console.log(res.data);
                setlikeCount(res.data);
                
            }
        )
    }

    

    function toggleLike() {
        console.log(props.img)
        if (likeColor === 'grey') {
            setLikeColor("red")
            axios.post('/getLikeCount', { pageTittle: props.pageTittle, count: 1 ,urlToImage:props.urlToImage , description:props.description}).then((res) => {
                setlikeCount(res.data)
            })
        }
        else {
            setLikeColor("grey")
            axios.post('/getLikeCount', { pageTittle: props.pageTittle, count: 0 }).then((res) => {
                setlikeCount(res.data)
            })
        }
    }
    return (
        <div className="likeAndShare" >
            <div className="icon1">
                <FontAwesomeIcon icon={faHeart} className="fa-2x" style={{ color: likeColor }} onClick={toggleLike} />
                {likeCount}
            </div>
            <div className="icon2">
                <FontAwesomeIcon icon={faComment} className="fa-2x" style={{ color: "hotpink" }} onClick={() => props.comment()} />
            </div>
            <div className="icon3">
                <FontAwesomeIcon icon={faShareAlt} className="fa-2x" style={{ color: "green" }} />
            </div>
        </div>
    )
}

export default LikeAndShare;
