import React from 'react';
import Navigation from './components/Common/Navigation';
import Home from './pages/Home';
import Signin from './components/Auth/Signin';
import Signup from './components/Auth/Signup';
import Post from './components/Post/Post';
import PostList from './components/Post/PostList';
import Profile from './components/Users/Profile';
import About from './pages/About';
import NotFound from './pages/NotFound';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

const Routing = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigation></Navigation>}>
                    <Route index element={<Home></Home>} />
                    <Route path="signin" element={<Signin></Signin>} />
                    <Route path="signup" element={<Signup></Signup>} />
                    <Route path="profile" element={<Profile></Profile>} />
                    <Route path="about" element={<About></About>} />
                    <Route path="*" element={<NotFound></NotFound>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Routing
