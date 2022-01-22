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
            title = 'The lean startup: How constant Innovation creates Radically Successful Business Paperback' 
            price ={29.99} 
            image ="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
            rating={5} />
            <Product 
            id = "123456"
            title = 'The lean startup' 
            price ={29.99} 
            image ="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
            rating={5} />
         </div>
         <div className='home__row'>
            <Product 
            id = "123456"
            title = 'The lean startup' 
            price ={29.99} 
            image ="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
            rating={5} />
            <Product 
            id = "123456"
            title = 'The lean startup' 
            price ={29.99} 
            image ="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
            rating={5} />
            <Product 
            id = "123456"
            title = 'The lean startup' 
            price ={29.99} 
            image ="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
            rating={5} />
         </div>
         <div className='home__row'>
            <Product 
            id = "123456"
            title = 'The lean startup' 
            price ={29.99} 
            image ="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg" 
            rating={5} />
             
         </div>
      </div>
  </div>;
}

export default Home;
