import React  from 'react'
import LatestArticle from './LatestArticle';
import Main from './Main';
import TheLatest from './TheLatest';
import LatestStories from './LatestStories';


function Home() {

   
  
    return (
        <div>
          <Main/>
          <TheLatest/>
          <LatestArticle />
          <LatestStories />
          
        </div>
    )
}

export default Home;
