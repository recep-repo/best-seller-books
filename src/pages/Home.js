import React from 'react'
import Mycard from '../components/Mycard'



const Home = () => {
    return (
        <div>
            <header style={{background:"#078295", color:"white", textAlign:"center", padding:"1rem 0"}}>
                <h1 style={{fontSize:"4rem"}}>Amazon Best Sellers</h1>
                <h6>Our most popular products based on sales. Updated hourly.</h6>
            </header>
            <Mycard/>
        </div>
    )
}

export default Home
