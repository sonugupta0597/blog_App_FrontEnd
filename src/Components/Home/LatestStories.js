import React from 'react'
import { useEffect, useState , useContext } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom';
import { postPageContex, similarPostContext } from '../PostPage/Context';

function LatestStories() {

    const [posts, setPosts] = useState([]);

    const { updatePostPage } = useContext(postPageContex);
    const { updateSimilarPost } = useContext(similarPostContext);

    const setAction = (data) => {

        updatePostPage(data);
        console.log(posts)
        updateSimilarPost(posts);

    }

    useEffect(
        () => {
            axios.get("/latestStories").then((res) => {
                setPosts(res.data);
            });

        }, [posts]
    );

    return (
        <div class="latest">
            <h1 class="latest-heading">LaTest Stories</h1>
            <hr class="underline" />
            <div class="cards-group">

                {
                    posts.slice(0, 3).map((post) =>
                        <Link to="/PostPage/PostPage" onClick={()=>setAction(post)} className="card  over link over" style={{ textDecoration: "none" }}>

                            <div className="card-body">
                                <h1> {post.title} </h1>
                                <p>
                                    {post.description}
                                </p>
                            </div>
                            <div className="card-footer">
                                <span className="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                            </div>
                        </Link>

                    )}




            </div>
        </div>

    )
}

export default LatestStories;
