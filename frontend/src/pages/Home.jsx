import React from 'react';
import Hero from '../components/Common/Hero';
import Footer from '../components/Common/Footer';
import PostList from '../components/Post/PostList';

const Home = () => {
  return (
    <React.Fragment>
      <Hero></Hero>
      <PostList></PostList>
      <Footer></Footer>
    </React.Fragment>
  )
}

export default Home
