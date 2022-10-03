import React from 'react';
import Footer from '../components/Footer';
import Main from '../components/Main';
import NavBar from '../components/NavBar';
import Products from '../components/Products';
import Services from '../components/Services';
import Slider from '../components/Slider';

const Home = () => {
  return (
    <section className='mobile:border bg-teal-50 min-h-screen mobile:max-w-full flex flex-col justify-center items-center'>
      <NavBar />
      <Slider />
      <Main />
      <Products />
      <Services />
      <Footer />
    </section>
  );
}

export default Home;
