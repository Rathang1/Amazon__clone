import React from 'react';
import './Home.css'
import Product from './Product';

function Home() {
  return <div className="home">
      <div className='home__container'>
          <img
          className='home__image'
          src="https://m.media-amazon.com/images/I/61jvT5Fc-1L._SX3000_.jpg"
          alt = ""/>

         <div className='home__row'>
            <Product 
            id = "123456"
            title = 'The lean startup' 
            price ={29.99} 
            image ="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
            rating={5} />
            <Product 
            id = "123457"
            title = 'Newest Playstation 5' 
            price ={960} 
            image ="https://m.media-amazon.com/images/I/51Qt8XM4V+L._AC_UY327_QL65_.jpg" 
            rating={5} />
         </div>
         <div className='home__row'>
            <Product 
            id = "123458"
            title = 'Apple iPhone 13 Pro, 128GB, Sierra Blue' 
            price ={1350.00} 
            image ="https://m.media-amazon.com/images/I/610xvgzVUDL._AC_UY327_QL65_.jpg" 
            rating={5} />
            <Product 
            id = "123459"
            title = 'Kindle Oasis' 
            price ={250.99} 
            image ="https://m.media-amazon.com/images/I/61moEqqnwzL._AC_UY327_QL65_.jpg" 
            rating={5} />
            <Product 
            id = "123460"
            title = 'Lamborghini Sian Diecast' 
            price ={100000} 
            image ="https://m.media-amazon.com/images/I/61ISFQkQ1KL._AC_UL480_QL65_.jpg" 
            rating={5} />
         </div>
         <div className='home__row'>
            <Product 
            id = "123461"
            title = 'SAMSUNG 34-Inch Odyssey G5S' 
            price ={627.14} 
            image ="https://m.media-amazon.com/images/I/61XDeaOrrKL._AC_UY327_QL65_.jpg" 
            rating={4} />
             
         </div>
      </div>
  </div>;
}

export default Home;
