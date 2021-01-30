import React from 'react'
import LikeAndShare from './LikeAndShare'
import SimilarPost from '../Home/SimilarPost'

function PostPage({ page, similarPost }) {


    return (
        <div>
            <LikeAndShare pageTittle={page.post.title} urlToImage={"" + page.post.urlToImage} description={page.post.description} />
            <div className="container" style={{ padding: "10px" }}>

                <img src={page.post.urlToImage} className="post-img ha" alt="1.jpg" />

                <h3 style={{ marginTop: "20px" }}>
                    Title :{page.post.title}
                </h3>
                <hr />
                <h4 style={{ marginTop: "10px" }} >
                    Description
          </h4>

                <p>
                    {page.post.description}
                </p>

                <SimilarPost page={page.post} similarPost={similarPost.similarPost} />

            </div>
        </div>
    )
}

export default PostPage;
