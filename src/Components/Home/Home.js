import React  from 'react'
import Bottom_Latest from './Bottom_Latest'
import Latest from './Latest'
import Latest_Article from './Latest_Article'
import Main from './Main';


function Home({action}) {

   
  
    return (
        <div>
          <Main actions={(data)=>action(data)} />
          <Latest actions={(data)=>action(data)}/>
          <Latest_Article actions={(data)=>action(data)}/>
          <Bottom_Latest actions={(data)=>action(data)}/>
          
        </div>
    )
}

export default Home;
