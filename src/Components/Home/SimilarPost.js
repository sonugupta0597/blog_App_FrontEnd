import React, { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { postPageContex, similarPostContext } from '../PostPage/Context';

function SimilarPost({ page, similarPost }) {

    const [posts, setPosts] = useState([]);
    const { updatePostPage } = useContext(postPageContex);
    const { updateSimilarPost } = useContext(similarPostContext);

    useEffect(() => {
        setPosts(similarPost)
        console.log(similarPost)
        console.log(posts)
    }
    );

    const setAction = (data) => {

        console.log(data)
        updatePostPage(data);
        console.log(posts)
        updateSimilarPost(posts);

    }

    return (

        <div className="latest ">
            <h1 className="latest-heading">Similar Posts</h1>
            <hr className="underline" />

            <div className="cards-group">



                {

                    posts.slice(0, 4).map(post => {

                        if (post.title !== page.title) {
                            return <Link to="/PostPage/PostPage" onClick={() => setAction(post)} className="card img over link" style={{ textDecoration: "none" }}>

                                <img className="card-img img" src={post.urlToImage} alt="1.jpg" />
                                <div className="card-body link">
                                    <h3> {post.title}</h3>
                                    <p>
                                        {post.description.substring(0, 50)}
                                    </p>
                                </div>
                                <div className="card-footer">
                                    <span className="card-footer-first">Travel</span> <span class="card-footer-secons"> august 21 </span>
                                </div>
                            </Link>
                        }
                    }

                    )
                }





            </div>
        </div>

    )
}

export default SimilarPost;
