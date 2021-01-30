import React from 'react'
import { Link } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react'
import axios from "axios"
import { postPageContex, similarPostContext } from '../PostPage/Context';

function LatestArticle() {

    const [posts, setPosts] = useState([]);
    const [topPosts, setTopPosts] = useState([]);

    const { updatePostPage } = useContext(postPageContex);
    const { updateSimilarPost } = useContext(similarPostContext);

    useEffect(
        () => {
            axios.get("/latestArticles").then((res) => {
                setPosts(res.data);
            });

            axios.get("/top_headlines").then((res) => {
                setTopPosts(res.data);
            });

        }, [posts]
    );

    const setAction = (data) => {

        console.log(data)
        updatePostPage(data);
        console.log(posts)
        updateSimilarPost(posts);

    }

    return (


        <div className="latest2">
            <div className="latest-left">
                <h1>
                    Latest Articles
            </h1>
                <hr class="underline" />
                <div>

                    {posts.slice(0,8).map(post =>
                        <Link to="/PostPage/PostPage" onClick={() => setAction(post)} className="latest-left-card over" style={{ textDecoration: "none" }}>

                            <img src={post.urlToImage} className="latest-left-card-img" alt="image" />

                            <div className="latest-left-card-details  link">

                                <h3>{post.title}</h3>
                                <p>{post.description.substring(0, 50)}</p>
                                <div className="card-footer">
                                    <span className="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
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
                <hr className="underline" />

                {
                    topPosts.slice(0,5).map(post =>
                        <Link to="/PostPage/PostPage" onClick={() => setAction(post)} className="latest-right-card over" style={{ textDecoration: "none" }}>

                            <img src={post.urlToImage} className="latest-right-card-img" alt="1.jpg" />

                            <div className="latest-right-card-details link">

                                <h5>{post.title}</h5>
                                <p>{post.description.substring(0, 50)}</p>
                                <div className="card-footer">
                                    <span className="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                                </div>
                            </div>

                        </Link>
                    )}

            </div>



        </div>



    )
}

export default LatestArticle;
