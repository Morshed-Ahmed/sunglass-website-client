import React from 'react';
import Banner from '../Banner/Banner';
/* import Explore from '../Explore/Explore'; */
import Products from '../Products/Products';
import Header from '../Shared/Header/Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>

            <Products></Products>

            {/* <Explore></Explore> */}
        </div>
    );
};

export default Home;