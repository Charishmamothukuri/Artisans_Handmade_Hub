import React, { useEffect, useState } from 'react';
import '../styles/Home.css';
import HomeBanner from '../images/home-banner-2.png';
import Products from '../components/Products';
import Footer from '../components/Footer';
import FlashSale from '../components/FlashSale';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Home = () => {
  const navigate = useNavigate();
  const [bannerImg, setBannerImg] = useState();

  useEffect(() => {
    fetchBanner();
  }, []);

  const fetchBanner = async () => {
    await axios.get('http://localhost:6001/fetch-banner').then((response) => {
      setBannerImg(response.data);
    });
  };

  return (
    <div className="HomePage">
      <div className="home-banner">
        {bannerImg ? <img src={bannerImg} alt="" /> : ''}
      </div>

      <div className="home-categories-container">
        <div
          className="home-category-card"
          onClick={() => navigate('/category/Fashion')}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZQjXpWVVQhkT_A2n03XMo2KDV4yPSLBcoNA&usqp=CAU"
            alt=""
          />
          <h5>Fashion</h5>
        </div>

        <div
          className="home-category-card"
          onClick={() => navigate('/category/Electronics')}
        >
          <img
            src="https://5.imimg.com/data5/ANDROID/Default/2023/1/SE/QC/NG/63182719/product-jpeg-500x500.jpg"
            alt=""
          />
          <h5>Fashion</h5>
        </div>

        <div
          className="home-category-card"
          onClick={() => navigate('/category/mobiles')}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jUW7v1WFJL9Ylax9a4vazyKXwG-ktSinI4Rd7qi7MkhMr79UlIyyrNkbiK0Cz5u6WYw&usqp=CAU"
            alt=""
          />
          <h5>baskets</h5>
        </div>

        <div
          className="home-category-card"
          onClick={() => navigate('/category/Groceries')}
        >
          <img
            src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsahyadale.com%2Fblogs%2Finfo%2Fis-a-bamboo-products-are-safe-and-eco-friendly&psig=AOvVaw3xP76sSxUAnwmo3lf1-L6D&ust=1761465856676000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCPC96orzvpADFQAAAAAdAAAAABAE"
            alt=""
          />
          <h5>Handmade</h5>
        </div>

        <div
          className="home-category-card"
          onClick={() => navigate('/category/Sports-Equipment')}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7wVDvOgCqQpPgaDZs93UcVIRRK4NItqh5VQZ0WY-BTYPtW1K0UaUqYs8Dwr722-teC5J2TVId0fidFch8VE-qQKu5TR4-QLxNlHYmqkk"
            alt=""
          />
          <h5>home decors</h5>
        </div>
      </div>

      <div id="products-body"></div>
      <Products category="all" />

      <Footer />
    </div>
  );
};

export default Home;
