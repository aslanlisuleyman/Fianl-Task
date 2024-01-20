import React from 'react'
import Static from '../../components/Static/Static'
import Cards from '../../components/Cards/Cards'
import {Helmet} from "react-helmet";
const Home = () => {
  return (

    <div>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Home Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
        <Static/>
        <Cards/>
    </div>
  )
}

export default Home